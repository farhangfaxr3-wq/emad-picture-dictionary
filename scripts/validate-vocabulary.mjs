import assert from "node:assert/strict"
import fs from "node:fs"
import { createServer } from "vite"

const EXPECTED_TOTAL_WORDS = 2123
const EXPECTED_BATCHES = 8
const EXPECTED_BATCH_SIZE = 100
const EXPECTED_TOPICS = 19
const REQUIRED_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"]

const server = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { hmr: false, middlewareMode: true },
})

try {
  const { vocabulary, vocabularyAudit, vocabularyBatches } =
    await server.ssrLoadModule("/src/app/vocabulary.ts")

  assert.equal(
    vocabulary.length,
    EXPECTED_TOTAL_WORDS,
    `Expected ${EXPECTED_TOTAL_WORDS} words, received ${vocabulary.length}`,
  )
  assert.equal(
    vocabularyBatches.length,
    EXPECTED_BATCHES,
    `Expected ${EXPECTED_BATCHES} batches, received ${vocabularyBatches.length}`,
  )
  assert.equal(vocabularyAudit.valid, true, "The vocabulary audit must pass")
  assert.deepEqual(
    vocabularyAudit.issues,
    [],
    "The vocabulary audit must not contain errors or warnings",
  )
  assert.equal(
    vocabularyAudit.totalTopics,
    EXPECTED_TOPICS,
    `Expected ${EXPECTED_TOPICS} topics, received ${vocabularyAudit.totalTopics}`,
  )

  const ids = new Set(vocabulary.map((word) => word.id))
  assert.equal(
    ids.size,
    vocabulary.length,
    "Every vocabulary ID must be unique",
  )

  const batchWords = vocabulary.filter((word) => word.id.startsWith("batch-"))
  assert.equal(
    batchWords.length,
    EXPECTED_BATCHES * EXPECTED_BATCH_SIZE,
    "The merged catalogue must contain every controlled batch word",
  )

  for (const batch of vocabularyBatches) {
    assert.equal(
      batch.addedWords,
      EXPECTED_BATCH_SIZE,
      `${batch.id} must contain 100 words`,
    )
    assert.equal(batch.audit.valid, true, `${batch.id} audit must pass`)
    assert.deepEqual(
      batch.audit.errors,
      [],
      `${batch.id} must not contain errors`,
    )
    assert.deepEqual(
      batch.audit.reviewNotes,
      [],
      `${batch.id} must not contain unresolved review notes`,
    )
  }

  for (const word of vocabulary) {
    for (const field of [
      "id",
      "word",
      "pronunciation",
      "topic",
      "group",
      "definition",
      "example",
      "partOfSpeech",
    ]) {
      assert.equal(
        typeof word[field],
        "string",
        `${word.id || "unknown word"} has a non-text ${field}`,
      )
      assert.ok(
        word[field].trim(),
        `${word.id || "unknown word"} is missing ${field}`,
      )
      assert.equal(
        word[field],
        word[field].trim(),
        `${word.id} has leading or trailing whitespace in ${field}`,
      )
      assert.ok(
        !/\s{2,}/.test(word[field]),
        `${word.id} has repeated whitespace in ${field}`,
      )
    }

    assert.match(
      word.pronunciation,
      /^(?:\/.+\/|Listen for pronunciation)$/,
      `${word.id} has malformed pronunciation notation`,
    )
    assert.match(
      word.definition,
      /[.!?]$/,
      `${word.id} has an unfinished definition`,
    )
    assert.match(
      word.example,
      /[.!?]$/,
      `${word.id} has an unfinished example sentence`,
    )
    assert.ok(
      !/\b(?:todo|tbd|lorem ipsum)\b/i.test(`${word.definition} ${word.example}`),
      `${word.id} contains placeholder text`,
    )

    assert.ok(word.cefr, `${word.id} is missing CEFR metadata`)
    assert.ok(
      REQUIRED_LEVELS.includes(word.cefr.level),
      `${word.id} has an invalid CEFR level`,
    )
    for (const relatedId of word.related) {
      assert.ok(
        ids.has(relatedId),
        `${word.id} links to missing word ${relatedId}`,
      )
    }
  }

  for (const word of batchWords) {
    assert.equal(
      word.cefr.status,
      "provisional",
      `${word.id} must remain provisional until educator review`,
    )
    assert.equal(
      word.imageStatus,
      "pending",
      `${word.id} must remain pending until its image is verified`,
    )
  }

  const levelCounts = Object.fromEntries(
    REQUIRED_LEVELS.map((level) => [
      level,
      vocabulary.filter((word) => word.cefr.level === level).length,
    ]),
  )
  for (const level of REQUIRED_LEVELS) {
    assert.ok(levelCounts[level] > 0, `${level} must contain at least one word`)
  }
  assert.ok(
    levelCounts.C2 >= 150,
    "The advanced catalogue must retain at least 150 C2 words",
  )

  const photographLibrary = JSON.parse(
    fs.readFileSync("src/app/vocabularyPhotos.json", "utf8"),
  )
  const validPhotographKeys = new Set(
    vocabulary.flatMap((word) => [word.word, `${word.topic}|${word.word}`]),
  )
  const orphanedPhotographKeys = Object.keys(photographLibrary).filter(
    (key) => !validPhotographKeys.has(key),
  )
  assert.deepEqual(
    orphanedPhotographKeys,
    [],
    "Every photograph record must belong to a vocabulary entry",
  )

  console.log(
    `Vocabulary QA passed: ${vocabulary.length} words, ${vocabularyAudit.totalTopics} topics, ${vocabularyBatches.length} batches.`,
  )
  console.log(
    `CEFR distribution: ${REQUIRED_LEVELS.map((level) => `${level} ${levelCounts[level]}`).join(", ")}.`,
  )
} finally {
  await server.close()
}
