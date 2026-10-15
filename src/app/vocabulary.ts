import { cefrLevels } from "./cefr"
import { completeCategoryCatalog } from "./categoryCatalog"
import { expandVocabulary, type Word } from "./content"
import { coreWords } from "./coreWords"
import { scenes } from "./SceneCanvas"
import { batch001, batch001Metadata } from "./vocabularyBatches/batch001"
import { batch002, batch002Metadata } from "./vocabularyBatches/batch002"
import { batch003, batch003Metadata } from "./vocabularyBatches/batch003"

export interface VocabularyValidationIssue {
  severity: "error" | "warning"
  code:
    | "duplicate-id"
    | "duplicate-topic-word"
    | "missing-field"
    | "missing-cefr"
    | "broken-related-word"
  wordId: string
  message: string
}

export interface VocabularyAudit {
  valid: boolean
  totalWords: number
  totalTopics: number
  verifiedImages: number
  provisionalCEFR: number
  issues: VocabularyValidationIssue[]
}

export interface VocabularyBatchAudit {
  valid: boolean
  batchId: string
  addedWords: number
  errors: string[]
  reviewNotes: string[]
}

function lexicalKey(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9' -]/g, "")
    .replace(/\s+/g, " ")
}

export function validateVocabularyBatch(
  batchId: string,
  batch: Word[],
  existing: Word[],
): VocabularyBatchAudit {
  const errors: string[] = []
  const reviewNotes: string[] = []
  const existingWords = new Map(
    existing.map((word) => [lexicalKey(word.word), word]),
  )
  const existingCompactWords = new Map(
    existing.map((word) => [lexicalKey(word.word).replace(/[ -]/g, ""), word]),
  )
  const batchIds = new Set<string>()
  const batchWords = new Set<string>()
  const batchCompactWords = new Map<string, string>()

  for (const word of batch) {
    const key = lexicalKey(word.word)
    const compactKey = key.replace(/[ -]/g, "")
    if (batchIds.has(word.id)) errors.push(`Duplicate batch id: ${word.id}`)
    if (batchWords.has(key)) errors.push(`Duplicate batch word: ${word.word}`)
    if (
      batchCompactWords.has(compactKey) &&
      batchCompactWords.get(compactKey) !== key
    ) {
      reviewNotes.push(
        `Possible punctuation or spacing duplicate within batch: ${word.word}`,
      )
    }
    if (existingWords.has(key)) {
      errors.push(`Word already exists: ${word.word}`)
    } else if (existingCompactWords.has(compactKey)) {
      reviewNotes.push(
        `Possible punctuation or spacing duplicate: ${word.word} / ${existingCompactWords.get(compactKey)!.word}`,
      )
    }
    if (
      !word.id.trim() ||
      !word.word.trim() ||
      !word.pronunciation.trim() ||
      !word.topic.trim() ||
      !word.group.trim() ||
      !word.definition.trim() ||
      !word.example.trim() ||
      !word.partOfSpeech.trim()
    ) {
      errors.push(`Required content is missing: ${word.id || word.word}`)
    }
    if (!word.cefr || word.cefr.status !== "provisional") {
      errors.push(`Batch CEFR status must remain provisional: ${word.id}`)
    }
    batchIds.add(word.id)
    batchWords.add(key)
    batchCompactWords.set(compactKey, key)
  }

  return {
    valid: errors.length === 0,
    batchId,
    addedWords: batch.length,
    errors,
    reviewNotes,
  }
}

export function validateVocabulary(words: Word[]): VocabularyAudit {
  const issues: VocabularyValidationIssue[] = []
  const ids = new Set<string>()
  const topicWords = new Set<string>()
  const allIds = new Set(words.map((word) => word.id))

  for (const word of words) {
    if (ids.has(word.id)) {
      issues.push({
        severity: "error",
        code: "duplicate-id",
        wordId: word.id,
        message: `Duplicate vocabulary id: ${word.id}`,
      })
    }
    ids.add(word.id)

    const topicWordKey = `${word.topic.toLowerCase()}|${word.word.toLowerCase()}`
    if (topicWords.has(topicWordKey)) {
      issues.push({
        severity: "error",
        code: "duplicate-topic-word",
        wordId: word.id,
        message: `Duplicate word in ${word.topic}: ${word.word}`,
      })
    }
    topicWords.add(topicWordKey)

    const requiredFields = [
      word.id,
      word.word,
      word.pronunciation,
      word.topic,
      word.group,
      word.definition,
      word.example,
      word.partOfSpeech,
    ]
    if (requiredFields.some((field) => !field.trim())) {
      issues.push({
        severity: "error",
        code: "missing-field",
        wordId: word.id,
        message: `Required vocabulary content is missing for ${word.id}`,
      })
    }

    if (!word.cefr || !cefrLevels.includes(word.cefr.level)) {
      issues.push({
        severity: "error",
        code: "missing-cefr",
        wordId: word.id,
        message: `CEFR metadata is missing or invalid for ${word.id}`,
      })
    }

    for (const relatedId of word.related) {
      if (!allIds.has(relatedId)) {
        issues.push({
          severity: "warning",
          code: "broken-related-word",
          wordId: word.id,
          message: `Related word ${relatedId} does not exist for ${word.id}`,
        })
      }
    }
  }

  return {
    valid: !issues.some((issue) => issue.severity === "error"),
    totalWords: words.length,
    totalTopics: new Set(words.map((word) => word.topic)).size,
    verifiedImages: words.filter((word) => word.imageStatus === "verified").length,
    provisionalCEFR: words.filter((word) => word.cefr?.status === "provisional").length,
    issues,
  }
}

const legacyVocabulary = completeCategoryCatalog(
  expandVocabulary(coreWords),
  scenes,
)
const batchDefinitions = [
  { words: batch001, metadata: batch001Metadata },
  { words: batch002, metadata: batch002Metadata },
  { words: batch003, metadata: batch003Metadata },
]
const stagedBatchWords: Word[] = []
export const vocabularyBatches = batchDefinitions.map(({ words, metadata }) => {
  const audit = validateVocabularyBatch(metadata.id, words, [
    ...legacyVocabulary,
    ...stagedBatchWords,
  ])
  stagedBatchWords.push(...words)
  return { ...metadata, audit }
})
export const batch001Audit = vocabularyBatches[0].audit
export const batch002Audit = vocabularyBatches[1].audit
export const batch003Audit = vocabularyBatches[2].audit

const failedBatchAudits = vocabularyBatches
  .map((batch) => batch.audit)
  .filter((audit) => !audit.valid)
if (failedBatchAudits.length > 0) {
  throw new Error(
    failedBatchAudits
      .map(
        (audit) =>
          `Vocabulary ${audit.batchId} failed validation: ${audit.errors.join("; ")}`,
      )
      .join(" | "),
  )
}

export const vocabulary = completeCategoryCatalog(
  [...legacyVocabulary, ...stagedBatchWords],
  scenes,
)
export const vocabularyAudit = validateVocabulary(vocabulary)

if (import.meta.env.DEV && vocabularyAudit.issues.length > 0) {
  console.warn("Emad WordLink vocabulary audit", vocabularyAudit)
}
