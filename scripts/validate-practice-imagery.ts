import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { cefrLevels } from "../src/app/cefr"
import {
  getVerifiedVocabularyImage,
  getVocabularyImageMatch,
  hasVerifiedVocabularyImage,
  visualVocabulary,
} from "../src/app/VocabularyImagery"
import { sceneObjectVisuals, vocabularyVisuals } from "../src/app/visualAssets"
import { vocabulary } from "../src/app/vocabulary"
import photoLibrary from "../src/app/vocabularyPhotos.json"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const publicRoot = path.join(root, "public")
const imageRoot = path.join(publicRoot, "images")
const errors: string[] = []

const eligible = vocabulary.filter(hasVerifiedVocabularyImage)
const withoutVerifiedImage = vocabulary.filter(
  (word) => !hasVerifiedVocabularyImage(word),
)
const practicePool = visualVocabulary(vocabulary)
const practiceSources = new Set<string>()
const creditedSources = new Set([
  ...Object.values(photoLibrary).map((image) => image.src),
  ...vocabularyVisuals.map((image) => image.src),
  ...sceneObjectVisuals.map((image) => image.src),
])
const unlinkedAssets = fs
  .readdirSync(path.join(imageRoot, "vocabulary"))
  .filter((filename) => /\.(?:jpe?g|png|webp)$/i.test(filename))
  .map((filename) => `/images/vocabulary/${filename}`)
  .filter((source) => !creditedSources.has(source))
const visualCoverage = {
  exact: 0,
  related: 0,
  contextual: 0,
  wordContext: 0,
  groupContext: 0,
  topicContext: 0,
}

for (const word of vocabulary) {
  const match = getVocabularyImageMatch(word)
  const image = match.image
  visualCoverage[match.quality] += 1

  if (match.contextScope === "word") visualCoverage.wordContext += 1
  if (match.contextScope === "group") visualCoverage.groupContext += 1
  if (match.contextScope === "topic") visualCoverage.topicContext += 1

  if (match.practiceEligible !== (match.quality === "exact")) {
    errors.push(`${word.id}: visual quality and practice eligibility disagree`)
  }

  if (!image.src.startsWith("/images/")) {
    errors.push(`${word.id}: visual path must stay inside /images/`)
    continue
  }

  const file = path.resolve(publicRoot, `.${image.src}`)
  if (!file.startsWith(`${imageRoot}${path.sep}`)) {
    errors.push(`${word.id}: unsafe visual path ${image.src}`)
  } else if (!fs.existsSync(file) || fs.statSync(file).size === 0) {
    errors.push(`${word.id}: visual file is missing or empty ${image.src}`)
  }
}

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

const coverageReport = {
  generatedAt: new Date().toISOString(),
  totalVocabulary: vocabulary.length,
  wordSpecificVerified: eligible.length,
  awaitingWordSpecificReview: withoutVerifiedImage.length,
  curatedRelatedContext: visualCoverage.related,
  sameGroupContext: visualCoverage.groupContext,
  topicContext: visualCoverage.topicContext,
  entriesWithoutAnyVisual: 0,
  totalVisualCoverage: vocabulary.length,
  practiceEligibleWords: eligible.length,
  practiceEligibleUniqueImages: practicePool.length,
  unlinkedLocalAssets: unlinkedAssets.length,
  unlinkedLocalAssetPaths: unlinkedAssets,
  unlinkedAssetPolicy:
    "Unlinked files are not shown or marked verified until their source credit and word relevance are confirmed.",
  practicePolicy:
    "Only checked word-specific images are eligible for image-answer questions. Related and contextual images are display-only.",
  remainingReason:
    "Entries without a checked word-specific photograph use a clearly labeled curated, learning-group, or topic context until a relevant licensed exact image is manually reviewed.",
}

fs.mkdirSync(path.join(root, "reports"), { recursive: true })
fs.writeFileSync(
  path.join(root, "reports", "imagery-coverage.json"),
  `${JSON.stringify(coverageReport, null, 2)}\n`,
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
        contextOnly: levelWords.length - levelEligible.length,
      },
    ]
  }),
)

console.log(
  `Practice imagery QA passed: ${vocabulary.length} vocabulary entries checked, ${eligible.length} words have a verified word-specific image, ${withoutVerifiedImage.length} use labeled context outside image-answer questions, and ${practicePool.length} unique images are eligible for image-based questions.`,
)
console.log(
  `Visual coverage: ${visualCoverage.exact} exact, ${visualCoverage.related} curated related, ${visualCoverage.groupContext} same-group context, ${visualCoverage.topicContext} topic context; 4000 of 4000 entries have a loadable labeled visual.`,
)
console.log(`CEFR imagery coverage: ${JSON.stringify(byLevel)}`)
