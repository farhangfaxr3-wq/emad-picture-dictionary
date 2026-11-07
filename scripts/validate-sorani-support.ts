import { vocabulary } from "../src/app/vocabulary"
import {
  reviewedSoraniGlosses,
  soraniInstructions,
} from "../src/app/SoraniSupport"

const vocabularyIds = new Set(vocabulary.map((word) => word.id))
const entries = Object.entries(reviewedSoraniGlosses)
const missingIds = entries
  .map(([id]) => id)
  .filter((id) => !vocabularyIds.has(id))

if (missingIds.length) {
  throw new Error(
    `Sorani glossary references unknown word IDs: ${missingIds.join(", ")}`,
  )
}

if (entries.length < 40) {
  throw new Error("The reviewed Sorani starter glossary is unexpectedly small.")
}

for (const [id, gloss] of entries) {
  if (!/[\u0600-\u06ff]/u.test(gloss)) {
    throw new Error(
      `Sorani glossary entry ${id} does not contain Sorani script.`,
    )
  }

  if (/automatic|placeholder|todo/i.test(gloss)) {
    throw new Error(`Sorani glossary entry ${id} contains placeholder text.`)
  }
}

for (const mode of [
  "picture",
  "word",
  "multiple",
  "listening",
  "listen-choose",
  "spelling",
  "dictation",
  "matching",
  "word-match",
  "sentence",
  "builder",
  "review",
  "flashcards",
] as const) {
  if (!soraniInstructions[mode]) {
    throw new Error(`Missing reviewed Sorani instruction for ${mode}.`)
  }
}

console.log(
  `Sorani support QA passed: ${entries.length} reviewed glosses and ${Object.keys(soraniInstructions).length} activity instructions.`,
)
