import {
  gameActivities,
  practiceActivities,
  writingActivities,
} from "../src/app/categoryActivities"
import { cefrLevels } from "../src/app/cefr"
import { learningPaths, learningPathStepUrl } from "../src/app/learningPaths"
import { topicNames } from "../src/app/topicCatalog"
import { vocabulary } from "../src/app/vocabulary"

function requireValue(condition: unknown, message: string) {
  if (!condition) throw new Error(message)
}

const expectedPaths = new Set([
  "everyday-english",
  "english-for-university",
  "english-for-travel",
])
const activityIds = {
  practice: new Set(practiceActivities.map((activity) => activity.id)),
  write: new Set(writingActivities.map((activity) => activity.id)),
  games: new Set(gameActivities.map((activity) => activity.id)),
}
const stepIds = new Set<string>()
const counts: Record<string, number> = {}

requireValue(
  learningPaths.length === 3,
  "Expected exactly three learning paths.",
)
requireValue(
  learningPaths.every((path) => expectedPaths.has(path.id)),
  "The required Everyday, University and Travel paths must all be present.",
)

for (const path of learningPaths) {
  requireValue(path.steps.length === 4, `${path.id} must contain four steps.`)

  for (const step of path.steps) {
    requireValue(!stepIds.has(step.id), `Duplicate path step ID: ${step.id}`)
    stepIds.add(step.id)
    requireValue(
      topicNames.includes(step.topic),
      `Unknown topic: ${step.topic}`,
    )
    requireValue(cefrLevels.includes(step.cefr), `Unknown CEFR: ${step.cefr}`)

    const words = vocabulary.filter(
      (word) => word.topic === step.topic && word.cefr?.level === step.cefr,
    )
    requireValue(
      words.length >= 3,
      `${path.id}/${step.id} needs at least three existing vocabulary entries.`,
    )
    counts[`${path.id}/${step.id}`] = words.length

    if (step.activity) {
      requireValue(
        step.section === "practice" ||
          step.section === "write" ||
          step.section === "games",
        `${step.id} attaches an activity to an unsupported section.`,
      )
      requireValue(
        activityIds[step.section].has(step.activity),
        `${step.id} uses an unknown ${step.section} activity: ${step.activity}`,
      )
    }

    const url = learningPathStepUrl(step)
    requireValue(
      url.startsWith(`/topics/${encodeURIComponent(step.topic)}?`),
      `${step.id} does not link to its existing topic route.`,
    )
    requireValue(
      url.includes(`section=${step.section}`) &&
        url.includes(`cefr=${step.cefr}`),
      `${step.id} does not preserve its section and CEFR scope.`,
    )
  }
}

console.log(
  `Learning-path QA passed: ${learningPaths.length} paths, ${stepIds.size} valid steps, existing vocabulary counts ${JSON.stringify(counts)}.`,
)
