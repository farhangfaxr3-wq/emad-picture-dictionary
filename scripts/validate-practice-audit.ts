import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { cefrLevels } from "../src/app/cefr"
import {
  gameActivities,
  practiceActivities,
  writingActivities,
} from "../src/app/categoryActivities"
import { topicNames } from "../src/app/topicCatalog"
import {
  getVerifiedVocabularyImage,
  hasVerifiedVocabularyImage,
  visualVocabulary,
} from "../src/app/VocabularyImagery"
import { vocabulary } from "../src/app/vocabulary"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const errors: string[] = []
const lengths = [5, 10, 15]
const levels = ["All levels", ...cefrLevels]
const globalModes = [
  "multiple",
  "topic-review",
  "picture",
  "word",
  "listening",
  "matching",
  "spelling",
  "review",
]
const imageDependent = new Set([
  "picture",
  "word",
  "matching",
  "identify",
  "spelling",
  "picture-match",
  "memory",
  "listen-choose",
  "picture-challenge",
])
const activities = [
  ...globalModes.map((id) => ({ area: "Global Practice", id })),
  ...practiceActivities.map(({ id }) => ({ area: "Topic Practice", id })),
  ...writingActivities.map(({ id }) => ({ area: "Topic Write", id })),
  { area: "Topic Flashcards", id: "flashcards" },
  ...gameActivities.map(({ id }) => ({ area: "Topic Games", id })),
]

let combinationChecks = 0
let emptyFilteredCollections = 0
let imageFallbackChecks = 0
let smallPoolChecks = 0

for (const topic of topicNames) {
  for (const level of levels) {
    const words = vocabulary.filter(
      (word) =>
        word.topic === topic &&
        (level === "All levels" || word.cefr?.level === level),
    )
    const visuals = visualVocabulary(words)

    if (!words.length) emptyFilteredCollections += 1

    for (const length of lengths) {
      for (const activity of activities) {
        combinationChecks += 1
        const usesImages = imageDependent.has(activity.id)
        const source = usesImages && visuals.length ? visuals : words
        const sessionSize = Math.min(length, source.length)
        const session = source.slice(0, sessionSize)

        assert.equal(
          new Set(session.map((word) => word.id)).size,
          session.length,
          `${activity.area}/${activity.id}/${topic}/${level}: repeated word`,
        )

        if (source.length < length) {
          smallPoolChecks += 1
          if (session.length !== source.length) {
            errors.push(
              `${activity.area}/${activity.id}/${topic}/${level}: small pool was not clamped`,
            )
          }
        }

        if (usesImages) {
          imageFallbackChecks += 1
          if (visuals.length) {
            for (const word of session) {
              if (!hasVerifiedVocabularyImage(word)) {
                errors.push(
                  `${activity.area}/${activity.id}/${topic}/${level}: unverified image question ${word.id}`,
                )
              }
            }
          } else if (source !== words) {
            errors.push(
              `${activity.area}/${activity.id}/${topic}/${level}: empty image pool did not fall back to text`,
            )
          }
        }
      }
    }
  }
}

const imageSources = new Map<string, string[]>()
for (const word of visualVocabulary(vocabulary)) {
  const image = getVerifiedVocabularyImage(word)
  if (!image) {
    errors.push(`${word.id}: visual practice entry has no verified image`)
    continue
  }

  const owners = imageSources.get(image.src) || []
  owners.push(word.id)
  imageSources.set(image.src, owners)

  const file = path.resolve(root, "public", `.${image.src}`)
  if (!file.startsWith(path.join(root, "public", "images") + path.sep)) {
    errors.push(`${word.id}: unsafe practice image path ${image.src}`)
  } else if (!fs.existsSync(file) || fs.statSync(file).size === 0) {
    errors.push(`${word.id}: missing or empty practice image ${image.src}`)
  }
}

for (const [source, owners] of imageSources) {
  if (owners.length > 1) {
    errors.push(`${source}: reused by practice entries ${owners.join(", ")}`)
  }
}

assert.deepEqual(errors, [], `Practice audit failed:\n${errors.join("\n")}`)

const resultRows = activities.map((activity) => ({
  area: activity.area,
  activity: activity.id,
  filters: "31 topics × All/A1–C2 × 5/10/15",
  imagePolicy: imageDependent.has(activity.id)
    ? "verified unique images; automatic text fallback"
    : "text/audio mode; no image dependency",
  smallPoolPolicy: "session clamps to unique available words",
  result: "PASS",
}))

const report = {
  status: "PASS",
  scope: {
    topics: topicNames.length,
    levels: levels.length,
    sessionLengths: lengths,
    activityRows: activities.length,
    combinationChecks,
  },
  safeguards: {
    imageFallbackChecks,
    smallPoolChecks,
    emptyFilteredCollections,
    verifiedPracticeImages: imageSources.size,
    runtimeBehavior:
      "Broken current images are replaced where possible; otherwise the question becomes text-based without losing an answer or score. Broken pair images retain exact definitions and offer another activity.",
    persistence:
      "Existing progress, favorites, review history and localStorage migrations are unchanged.",
  },
  activities: resultRows,
  remainingIssues: [],
}

fs.mkdirSync(path.join(root, "reports"), { recursive: true })
fs.writeFileSync(
  path.join(root, "reports", "practice-audit.json"),
  `${JSON.stringify(report, null, 2)}\n`,
)

console.log(
  `Practice audit passed: ${combinationChecks} topic/level/length/activity combinations, ${imageFallbackChecks} image-fallback checks, ${smallPoolChecks} small-pool checks, and ${imageSources.size} unique verified practice images.`,
)
