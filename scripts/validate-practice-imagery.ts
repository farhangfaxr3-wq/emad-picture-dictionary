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
const verifiedIllustrations = eligible.filter(
  (word) => word.visualKind === "illustration",
)
const verifiedPhotos = eligible.filter(
  (word) => word.visualKind !== "illustration",
)
const practicePool = visualVocabulary(vocabulary)
const practiceSources = new Set<string>()
const verifiedWordsBySource = new Map<string, Set<string>>()
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
  unavailable: 0,
}

const allowedSharedMeanings = [
  new Set(["phone", "smartphone"]),
  new Set(["water", "glass"]),
  new Set(["reception", "receptionist"]),
  new Set(["bus stop", "bus shelter"]),
  new Set(["railway station", "train station"]),
  new Set(["bus station", "bus terminal"]),
]

function isAllowedSharedMeaning(words: Set<string>) {
  return allowedSharedMeanings.some((allowed) =>
    [...words].every((word) => allowed.has(word)),
  )
}

for (const word of vocabulary) {
  const match = getVocabularyImageMatch(word)
  const image = match.image
  visualCoverage[match.quality] += 1

  if (match.practiceEligible !== (match.quality === "exact")) {
    errors.push(`${word.id}: visual quality and practice eligibility disagree`)
  }

  if (!image) {
    if (match.quality !== "unavailable") {
      errors.push(`${word.id}: missing image is not marked unavailable`)
    }
    continue
  }

  for (const [field, value] of Object.entries({
    source: image.source,
    author: image.author,
    license: image.license,
    licenseUrl: image.licenseUrl,
    description: image.description,
  })) {
    if (!value?.trim()) errors.push(`${word.id}: image is missing ${field}`)
  }

  if (match.quality !== "exact") {
    errors.push(`${word.id}: non-exact image must not be displayed`)
  }

  const sourceWords = verifiedWordsBySource.get(image.src) || new Set<string>()
  sourceWords.add(word.word.trim().toLowerCase())
  verifiedWordsBySource.set(image.src, sourceWords)

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

for (const [source, words] of verifiedWordsBySource) {
  if (words.size > 1 && !isAllowedSharedMeaning(words)) {
    errors.push(
      `${source}: reused by unrelated verified words ${[...words].join(", ")}`,
    )
  }
}

for (const word of vocabulary.filter((entry) =>
  ["bike", "bin", "bolt"].includes(entry.word.toLowerCase()),
)) {
  const match = getVocabularyImageMatch(word)
  if (match.image || match.quality !== "unavailable") {
    errors.push(`${word.id}: shared knife-image regression returned`)
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
  verifiedPhotos: verifiedPhotos.length,
  verifiedIllustrations: verifiedIllustrations.length,
  awaitingWordSpecificReview: withoutVerifiedImage.length,
  correctedMisleadingFallbacks: withoutVerifiedImage.length,
  neutralUnavailableState: withoutVerifiedImage.length,
  entriesWithoutAnyVisual: withoutVerifiedImage.length,
  totalVisualCoverage: eligible.length,
  practiceEligibleWords: eligible.length,
  practiceEligibleUniqueImages: practicePool.length,
  unlinkedLocalAssets: unlinkedAssets.length,
  unlinkedLocalAssetPaths: unlinkedAssets,
  unlinkedAssetPolicy:
    "Unlinked files are not shown or marked verified until their source credit and word relevance are confirmed.",
  practicePolicy:
    "Only checked word-specific images are displayed or eligible for image-answer questions. Missing and unverified images use a neutral unavailable state.",
  remainingReason:
    "Entries without a checked word-specific photograph remain usable with definitions, examples, and neutral unavailable states until a relevant licensed exact image is manually reviewed.",
}

const backlogEntries = withoutVerifiedImage.map((word, index) => ({
  id: word.id,
  word: word.word,
  sense: word.definition,
  partOfSpeech: word.partOfSpeech,
  topic: word.topic,
  group: word.group,
  cefr: word.cefr?.level || null,
  status: "awaiting-verified-visual",
  reviewBatch: Math.floor(index / 100) + 1,
  reason:
    "No approved licensed word-specific asset is linked. Source rights, exact sense, crop, learner-friendly alt text and quiz safety require review.",
}))
const backlogReport = {
  generatedAt: coverageReport.generatedAt,
  policy:
    "A gap is resolved only after an accurate asset renders and its creator, source, license, attribution, alt text and intended sense pass review.",
  batchSize: 100,
  totalAwaiting: backlogEntries.length,
  batches: Array.from(
    { length: Math.ceil(backlogEntries.length / 100) },
    (_, index) => ({
      batch: index + 1,
      status: "ready-for-manual-source-review",
      count: backlogEntries.slice(index * 100, index * 100 + 100).length,
    }),
  ),
  entries: backlogEntries,
}

fs.mkdirSync(path.join(root, "reports"), { recursive: true })
fs.writeFileSync(
  path.join(root, "reports", "imagery-coverage.json"),
  `${JSON.stringify(coverageReport, null, 2)}\n`,
)
fs.writeFileSync(
  path.join(root, "reports", "imagery-backlog.json"),
  `${JSON.stringify(backlogReport, null, 2)}\n`,
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
        unavailable: levelWords.length - levelEligible.length,
      },
    ]
  }),
)

console.log(
  `Practice imagery QA passed: ${vocabulary.length} vocabulary entries checked, ${eligible.length} words have a verified word-specific image, ${withoutVerifiedImage.length} use the neutral unavailable state, and ${practicePool.length} unique images are eligible for image-based questions.`,
)
console.log(
  `Verified asset types: ${verifiedPhotos.length} photographs, ${verifiedIllustrations.length} illustrations, ${backlogEntries.length} awaiting a reviewed visual across ${backlogReport.batches.length} resumable batches.`,
)
console.log(
  `Visual coverage: ${visualCoverage.exact} exact and ${visualCoverage.unavailable} neutral unavailable; no group, topic, or unrelated fallback image is displayed.`,
)
console.log(`CEFR imagery coverage: ${JSON.stringify(byLevel)}`)
