import { confusingWordLessons } from "../src/app/confusingWords"
import { vocabulary } from "../src/app/vocabulary"
import { reviewedWordLearningNoteIds } from "../src/app/wordLearningNotes"

const wordsById = new Map(vocabulary.map((word) => [word.id, word]))
const failures: string[] = []

for (const id of reviewedWordLearningNoteIds) {
  const word = wordsById.get(id)
  if (!word) {
    failures.push(`Learning notes reference a missing word: ${id}`)
    continue
  }

  const details = word.learningDetails
  if (!details?.reviewed) {
    failures.push(`Learning notes are not marked reviewed: ${id}`)
    continue
  }

  const textValues = [
    ...(details.collocations || []),
    ...(details.grammarPatterns || []),
    ...(details.commonMistakes || []),
    ...(details.wordFamily || []).flatMap((item) => [item.form, item.role]),
    details.register || "",
  ]
  if (textValues.some((value) => !value.trim())) {
    failures.push(`Learning notes contain an empty value: ${id}`)
  }
  if (!details.collocations?.length || !details.grammarPatterns?.length) {
    failures.push(
      `Learning notes need collocations and grammar patterns: ${id}`,
    )
  }
}

const lessonIds = new Set<string>()
const requiredLessons = new Set([
  "affect-effect",
  "borrow-lend",
  "cite-site-sight",
  "say-tell-speak-talk",
])
for (const lesson of confusingWordLessons) {
  if (lessonIds.has(lesson.id))
    failures.push(`Duplicate lesson id: ${lesson.id}`)
  lessonIds.add(lesson.id)

  for (const challenge of [lesson.choose, lesson.fix]) {
    if (!challenge.options.includes(challenge.answer)) {
      failures.push(`Challenge answer is not an option: ${lesson.id}`)
    }
    if (!challenge.prompt.trim() || !challenge.explanation.trim()) {
      failures.push(`Challenge content is incomplete: ${lesson.id}`)
    }
  }
  if (
    !lesson.quickRule.trim() ||
    !lesson.mistake.trim() ||
    !lesson.correction.trim() ||
    !lesson.why.trim()
  ) {
    failures.push(`Lesson guidance is incomplete: ${lesson.id}`)
  }

  for (const item of lesson.words) {
    if (item.wordId) {
      const word = wordsById.get(item.wordId)
      if (!word) {
        failures.push(
          `Lesson references a missing word: ${lesson.id}/${item.wordId}`,
        )
        continue
      }
      if (word.word.toLowerCase() !== item.word.toLowerCase()) {
        failures.push(
          `Lesson label does not match dictionary word: ${lesson.id}/${item.wordId}`,
        )
      }
    }
    if (
      ![item.meaning, item.example, ...item.collocations].every(
        (value) => value.trim().length >= 4,
      ) ||
      item.collocations.length < 3
    ) {
      failures.push(
        `Lesson content is too short or empty: ${lesson.id}/${item.word}`,
      )
    }
  }
}

if (confusingWordLessons.length < 10) {
  failures.push("Confusing Words needs at least ten substantial lessons.")
}
for (const lessonId of requiredLessons) {
  if (!lessonIds.has(lessonId))
    failures.push(`Missing required lesson: ${lessonId}`)
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log(
  `Learning enrichment QA passed: ${reviewedWordLearningNoteIds.length} rich cards and ${confusingWordLessons.length} confusing-word lessons.`,
)
