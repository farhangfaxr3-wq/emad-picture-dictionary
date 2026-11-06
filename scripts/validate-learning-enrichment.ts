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
for (const lesson of confusingWordLessons) {
  if (lessonIds.has(lesson.id))
    failures.push(`Duplicate lesson id: ${lesson.id}`)
  lessonIds.add(lesson.id)

  const lessonWords = new Set(lesson.words.map((item) => item.word))
  if (!lessonWords.has(lesson.practice.answer)) {
    failures.push(
      `Practice answer is not one of the lesson words: ${lesson.id}`,
    )
  }

  for (const item of lesson.words) {
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
    if (
      ![item.meaning, item.example].every((value) => value.trim().length >= 12)
    ) {
      failures.push(
        `Lesson content is too short or empty: ${lesson.id}/${item.word}`,
      )
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log(
  `Learning enrichment QA passed: ${reviewedWordLearningNoteIds.length} rich cards and ${confusingWordLessons.length} confusing-word lessons.`,
)
