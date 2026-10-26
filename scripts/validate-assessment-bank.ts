import assert from "node:assert/strict"

import {
  ASSESSMENT_QUESTION_COUNT,
  initialAssessmentQuestions,
  scoreAssessment,
  selectAssessmentQuestions,
  validateQuestion,
  type AssessmentSkill,
} from "../src/app/assessment"

const ids = initialAssessmentQuestions.map(({ id }) => id)
assert.equal(new Set(ids).size, ids.length, "Assessment question ids must be unique.")
assert.ok(
  initialAssessmentQuestions.length >= 60,
  `Expected a substantially expanded bank; found ${initialAssessmentQuestions.length}.`,
)
assert.ok(
  initialAssessmentQuestions.every(validateQuestion),
  "Every curated question must pass runtime validation.",
)

const questionTypes = new Set(
  initialAssessmentQuestions.map(({ questionType }) => questionType).filter(Boolean),
)
for (const expected of [
  "meaning",
  "synonym",
  "antonym",
  "sentence-completion",
  "context",
  "collocation",
  "usage",
]) {
  assert.ok(questionTypes.has(expected as never), `Missing curated question type: ${expected}`)
}

const originalById = new Map(initialAssessmentQuestions.map((item) => [item.id, item]))
const first = selectAssessmentQuestions([], "assessment-qa-seed-one")
const second = selectAssessmentQuestions([], "assessment-qa-seed-two")

assert.equal(first.length, ASSESSMENT_QUESTION_COUNT)
assert.equal(new Set(first.map(({ id }) => id)).size, ASSESSMENT_QUESTION_COUNT)
assert.notDeepEqual(
  first.map(({ id }) => id),
  second.map(({ id }) => id),
  "Different attempts should not receive an identical question sequence.",
)

const expectedSkillCounts: Record<AssessmentSkill, number> = {
  vocabulary: 12,
  grammar: 8,
  reading: 5,
  listening: 5,
}
for (const [skill, expected] of Object.entries(expectedSkillCounts)) {
  assert.equal(first.filter((item) => item.skill === skill).length, expected)
}

for (const item of first) {
  const original = originalById.get(item.id)
  assert.ok(original, `Selected unknown question ${item.id}.`)
  assert.equal(
    item.options[item.correctIndex],
    original.options[original.correctIndex],
    `Answer-option randomization changed the correct answer for ${item.id}.`,
  )
}

assert.ok(
  first.some((item) => {
    const original = originalById.get(item.id)
    return original && item.options.join("\u0000") !== original.options.join("\u0000")
  }),
  "The QA attempt did not randomize any answer options.",
)

const perfectAnswers = Object.fromEntries(first.map((item) => [item.id, item.correctIndex]))
const perfect = scoreAssessment(first, perfectAnswers)
assert.equal(perfect.correct, ASSESSMENT_QUESTION_COUNT)
assert.equal(perfect.percent, 100)
assert.equal(perfect.weightedPercent, 100)

console.log(
  `Assessment QA passed: ${initialAssessmentQuestions.length} curated questions, ` +
    `${questionTypes.size} vocabulary question types, ${first.length} balanced questions per attempt.`,
)

