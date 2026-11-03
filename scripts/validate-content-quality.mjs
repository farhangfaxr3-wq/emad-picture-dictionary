import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { createServer } from "vite"

const server = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { hmr: false, middlewareMode: true },
})

try {
  const { vocabulary } = await server.ssrLoadModule("/src/app/vocabulary.ts")
  const bySurface = new Map()

  for (const word of vocabulary) {
    const key = word.word.trim().toLocaleLowerCase("en")
    bySurface.set(key, [...(bySurface.get(key) || []), word])
  }

  const duplicates = [...bySurface.entries()]
    .filter(([, records]) => records.length > 1)
    .map(([surface, records]) => ({
      surface,
      ids: records.map((record) => record.id),
      topics: [...new Set(records.map((record) => record.topic))],
    }))
  const missingIpa = vocabulary
    .filter((word) => word.pronunciation === "Listen for pronunciation")
    .map((word) => word.id)
  const genericExamples = vocabulary
    .filter((word) =>
      /The lesson uses|carefully reviewed vocabulary context/i.test(
        word.example,
      ),
    )
    .map((word) => word.id)
  const repeatedDefinitions = vocabulary
    .filter((word) => {
      const parts = word.definition
        .replace(/[.!?]$/, "")
        .split(";")
        .map((part) => part.trim().toLowerCase())
        .filter(Boolean)
      return new Set(parts).size < parts.length
    })
    .map((word) => word.id)
  const provisional = vocabulary.filter(
    (word) => word.cefr?.status === "provisional",
  ).length

  const requiredCorrections = {
    plaster: (word) =>
      word.topic === "Architecture & Construction" &&
      /wall|ceiling|building|material/i.test(word.definition),
    piano: (word) =>
      word.topic === "Art, Literature & Culture" && /music/i.test(word.group),
    plane: (word) => word.topic === "Transportation",
    prison: (word) => word.topic === "Law & Government",
    planet: (word) =>
      /eight planets/i.test(word.definition) &&
      !/nine (?:major )?planets|Pluto is the farthest/i.test(word.definition),
  }
  const correctionFailures = Object.entries(requiredCorrections)
    .filter(([surface, check]) => {
      const records = bySurface.get(surface) || []
      return !records.length || !records.some(check)
    })
    .map(([surface]) => surface)

  const report = {
    generatedAt: new Date().toISOString(),
    totalWords: vocabulary.length,
    provisional,
    duplicateSurfaceForms: duplicates.length,
    duplicateRecords: duplicates.reduce(
      (total, duplicate) => total + duplicate.ids.length,
      0,
    ),
    missingIpa: missingIpa.length,
    genericExamples: genericExamples.length,
    topicMismatchCandidates: correctionFailures.length,
    definitionWordMismatchCandidates: repeatedDefinitions.length,
    outdatedFactFailures: correctionFailures.includes("planet") ? 1 : 0,
    repeatedDefinitions: repeatedDefinitions.length,
    correctionFailures,
    samples: {
      duplicateSurfaceForms: duplicates.slice(0, 25),
      missingIpa: missingIpa.slice(0, 25),
      repeatedDefinitions: repeatedDefinitions.slice(0, 25),
    },
    notes: [
      "Duplicate surface forms remain explicit topic aliases in source data; learner dictionary results are deduplicated by surface form.",
      "Missing IPA and provisional CEFR records remain marked for educator review and are not reported as verified.",
    ],
  }

  const reportDirectory = path.resolve("reports")
  fs.mkdirSync(reportDirectory, { recursive: true })
  fs.writeFileSync(
    path.join(reportDirectory, "content-qa.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  )

  assert.deepEqual(
    correctionFailures,
    [],
    `Required content corrections failed: ${correctionFailures.join(", ")}`,
  )
  assert.equal(
    genericExamples.length,
    0,
    `Found ${genericExamples.length} generic lesson examples`,
  )
  assert.equal(
    provisional,
    vocabulary.filter((word) => word.cefr).length,
    "Unreviewed vocabulary must remain explicitly provisional",
  )

  console.log(JSON.stringify(report, null, 2))
} finally {
  await server.close()
}
