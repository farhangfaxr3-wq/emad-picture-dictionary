import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { cefrLevels } from "../src/app/cefr"
import {
  getVerifiedVocabularyImage,
  hasVerifiedVocabularyImage,
  visualVocabulary,
} from "../src/app/VocabularyImagery"
import { vocabulary } from "../src/app/vocabulary"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const publicRoot = path.join(root, "public")
const imageRoot = path.join(publicRoot, "images")
const errors: string[] = []

const eligible = vocabulary.filter(hasVerifiedVocabularyImage)
const withoutSuitableImage = vocabulary.filter(
  (word) => !hasVerifiedVocabularyImage(word),
)
const practicePool = visualVocabulary(vocabulary)
const practiceSources = new Set<string>()

for (const word of eligible) {
  const image = getVerifiedVocabularyImage(word)

  if (!image) {
    errors.push(`${word.id}: eligible word has no resolved image`)
    continue
  }

  if (!image.src.startsWith("/images/")) {
    errors.push(`${word.id}: image path must stay inside /images/`)
    continue
  }

  const file = path.resolve(publicRoot, `.${image.src}`)

  if (!file.startsWith(`${imageRoot}${path.sep}`)) {
    errors.push(`${word.id}: unsafe image path ${image.src}`)
  } else if (!fs.existsSync(file)) {
    errors.push(`${word.id}: missing image file ${image.src}`)
  } else if (fs.statSync(file).size === 0) {
    errors.push(`${word.id}: empty image file ${image.src}`)
  }
}

for (const word of practicePool) {
  const image = getVerifiedVocabularyImage(word)

  if (!image) {
    errors.push(`${word.id}: visual practice included a word without an image`)
    continue
  }

  if (image.kind === "context") {
    errors.push(`${word.id}: visual practice included a context-only image`)
  }

  if (practiceSources.has(image.src)) {
    errors.push(`${word.id}: visual practice reused ${image.src}`)
  }

  practiceSources.add(image.src)
}

for (const word of vocabulary) {
  if (word.imageStatus === "verified" && !hasVerifiedVocabularyImage(word)) {
    errors.push(`${word.id}: marked verified but has no working image record`)
  }
}

assert.deepEqual(
  errors,
  [],
  `Practice imagery audit failed:\n${errors.join("\n")}`,
)

const byLevel = Object.fromEntries(
  cefrLevels.map((level) => {
    const levelWords = vocabulary.filter((word) => word.cefr?.level === level)
    const levelEligible = levelWords.filter(hasVerifiedVocabularyImage)

    return [
      level,
      {
        total: levelWords.length,
        eligible: levelEligible.length,
        textOnly: levelWords.length - levelEligible.length,
      },
    ]
  }),
)

console.log(
  `Practice imagery QA passed: ${vocabulary.length} vocabulary entries checked, ${eligible.length} words have a verified working image, ${withoutSuitableImage.length} remain text-only, and ${practicePool.length} unique images are eligible for image-based questions.`,
)
console.log(`CEFR imagery coverage: ${JSON.stringify(byLevel)}`)
