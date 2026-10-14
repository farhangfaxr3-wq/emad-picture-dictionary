import { cefrLevels } from "./cefr"
import { completeCategoryCatalog } from "./categoryCatalog"
import { expandVocabulary, type Word } from "./content"
import { coreWords } from "./coreWords"
import { scenes } from "./SceneCanvas"

export interface VocabularyValidationIssue {
  severity: "error" | "warning"
  code:
    | "duplicate-id"
    | "duplicate-topic-word"
    | "missing-field"
    | "missing-cefr"
    | "broken-related-word"
  wordId: string
  message: string
}

export interface VocabularyAudit {
  valid: boolean
  totalWords: number
  totalTopics: number
  verifiedImages: number
  provisionalCEFR: number
  issues: VocabularyValidationIssue[]
}

export function validateVocabulary(words: Word[]): VocabularyAudit {
  const issues: VocabularyValidationIssue[] = []
  const ids = new Set<string>()
  const topicWords = new Set<string>()
  const allIds = new Set(words.map((word) => word.id))

  for (const word of words) {
    if (ids.has(word.id)) {
      issues.push({
        severity: "error",
        code: "duplicate-id",
        wordId: word.id,
        message: `Duplicate vocabulary id: ${word.id}`,
      })
    }
    ids.add(word.id)

    const topicWordKey = `${word.topic.toLowerCase()}|${word.word.toLowerCase()}`
    if (topicWords.has(topicWordKey)) {
      issues.push({
        severity: "error",
        code: "duplicate-topic-word",
        wordId: word.id,
        message: `Duplicate word in ${word.topic}: ${word.word}`,
      })
    }
    topicWords.add(topicWordKey)

    const requiredFields = [
      word.id,
      word.word,
      word.pronunciation,
      word.topic,
      word.group,
      word.definition,
      word.example,
      word.partOfSpeech,
    ]
    if (requiredFields.some((field) => !field.trim())) {
      issues.push({
        severity: "error",
        code: "missing-field",
        wordId: word.id,
        message: `Required vocabulary content is missing for ${word.id}`,
      })
    }

    if (!word.cefr || !cefrLevels.includes(word.cefr.level)) {
      issues.push({
        severity: "error",
        code: "missing-cefr",
        wordId: word.id,
        message: `CEFR metadata is missing or invalid for ${word.id}`,
      })
    }

    for (const relatedId of word.related) {
      if (!allIds.has(relatedId)) {
        issues.push({
          severity: "warning",
          code: "broken-related-word",
          wordId: word.id,
          message: `Related word ${relatedId} does not exist for ${word.id}`,
        })
      }
    }
  }

  return {
    valid: !issues.some((issue) => issue.severity === "error"),
    totalWords: words.length,
    totalTopics: new Set(words.map((word) => word.topic)).size,
    verifiedImages: words.filter((word) => word.imageStatus === "verified").length,
    provisionalCEFR: words.filter((word) => word.cefr?.status === "provisional").length,
    issues,
  }
}

export const vocabulary = completeCategoryCatalog(
  expandVocabulary(coreWords),
  scenes,
)
export const vocabularyAudit = validateVocabulary(vocabulary)

if (import.meta.env.DEV && vocabularyAudit.issues.length > 0) {
  console.warn("Emad WordLink vocabulary audit", vocabularyAudit)
}
