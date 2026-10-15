import type { CEFRLevel } from "../cefr"
import type { Word } from "../content"

export type BatchEntry = readonly [
  word: string,
  pronunciation: string,
  topic: string,
  group: string,
  partOfSpeech: string,
  cefr: CEFRLevel,
  definition: string,
  example: string,
]

interface VocabularyBatchOptions {
  id: string
  source: string
  entries: BatchEntry[]
}

export function createVocabularyBatch({
  id,
  source,
  entries,
}: VocabularyBatchOptions): Word[] {
  return entries.map(
    ([word, pronunciation, topic, group, partOfSpeech, level, definition, example]) => ({
      id: `${id}--${word
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`,
      word,
      pronunciation,
      topic,
      group,
      definition,
      example,
      partOfSpeech,
      level: level === "A1" || level === "A2" ? "Beginner" : "Intermediate",
      cefr: {
        level,
        status: "provisional",
        confidence: level === "C1" || level === "C2" ? "low" : "medium",
        source,
      },
      related: [],
      art: word,
      visualKind: "symbol",
    }),
  )
}
