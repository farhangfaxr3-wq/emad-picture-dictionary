import { cefrLevels } from "./cefr"
import { completeCategoryCatalog } from "./categoryCatalog"
import { expandVocabulary, type Word } from "./content"
import { coreWords } from "./coreWords"
import { scenes } from "./SceneCanvas"
import { batch001, batch001Metadata } from "./vocabularyBatches/batch001"
import { batch002, batch002Metadata } from "./vocabularyBatches/batch002"
import { batch003, batch003Metadata } from "./vocabularyBatches/batch003"
import { batch004, batch004Metadata } from "./vocabularyBatches/batch004"
import { batch005, batch005Metadata } from "./vocabularyBatches/batch005"
import { batch006, batch006Metadata } from "./vocabularyBatches/batch006"
import { batch007, batch007Metadata } from "./vocabularyBatches/batch007"
import { batch008, batch008Metadata } from "./vocabularyBatches/batch008"
import { batch009, batch009Metadata } from "./vocabularyBatches/batch009"
import { batch010, batch010Metadata } from "./vocabularyBatches/batch010"
import { batch011, batch011Metadata } from "./vocabularyBatches/batch011"
import { batch012, batch012Metadata } from "./vocabularyBatches/batch012"
import { batch013, batch013Metadata } from "./vocabularyBatches/batch013"
import { batch014, batch014Metadata } from "./vocabularyBatches/batch014"
import { batch015, batch015Metadata } from "./vocabularyBatches/batch015"
import { batch016, batch016Metadata } from "./vocabularyBatches/batch016"
import { batch017, batch017Metadata } from "./vocabularyBatches/batch017"
import { batch018, batch018Metadata } from "./vocabularyBatches/batch018"
import { batch019, batch019Metadata } from "./vocabularyBatches/batch019"
import { batch020, batch020Metadata } from "./vocabularyBatches/batch020"
import { batch021, batch021Metadata } from "./vocabularyBatches/batch021"
import { batch022, batch022Metadata } from "./vocabularyBatches/batch022"
import { batch023, batch023Metadata } from "./vocabularyBatches/batch023"
import { batch024, batch024Metadata } from "./vocabularyBatches/batch024"
import { batch025, batch025Metadata } from "./vocabularyBatches/batch025"
import { batch026, batch026Metadata } from "./vocabularyBatches/batch026"
import { batch027, batch027Metadata } from "./vocabularyBatches/batch027"
import { applyExpandedTopicTaxonomy } from "./topicCatalog"

export interface VocabularyValidationIssue {
  severity: "error" | "warning"
  code: "duplicate-id" | "duplicate-topic-word" | "missing-field" | "missing-cefr" | "broken-related-word"
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

export interface VocabularyBatchAudit {
  valid: boolean
  batchId: string
  addedWords: number
  errors: string[]
  reviewNotes: string[]
}

function lexicalKey(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9' -]/g, "")
    .replace(/\s+/g, " ")
}

export function validateVocabularyBatch(
  batchId: string,
  batch: Word[],
  existing: Word[],
): VocabularyBatchAudit {
  const errors: string[] = []
  const reviewNotes: string[] = []
  const existingWords = new Map(
    existing.map((word) => [lexicalKey(word.word), word]),
  )
  const existingCompactWords = new Map(
    existing.map((word) => [lexicalKey(word.word).replace(/[ -]/g, ""), word]),
  )
  const batchIds = new Set<string>()
  const batchWords = new Set<string>()
  const batchCompactWords = new Map<string, string>()

  for (const word of batch) {
    const key = lexicalKey(word.word)
    const compactKey = key.replace(/[ -]/g, "")
    if (batchIds.has(word.id)) errors.push(`Duplicate batch id: ${word.id}`)
    if (batchWords.has(key)) errors.push(`Duplicate batch word: ${word.word}`)
    if (
      batchCompactWords.has(compactKey) &&
      batchCompactWords.get(compactKey) !== key
    ) {
      reviewNotes.push(
        `Possible punctuation or spacing duplicate within batch: ${word.word}`,
      )
    }
    if (existingWords.has(key)) {
      errors.push(`Word already exists: ${word.word}`)
    } else if (existingCompactWords.has(compactKey)) {
      reviewNotes.push(
        `Possible punctuation or spacing duplicate: ${word.word} / ${existingCompactWords.get(compactKey)!.word}`,
      )
    }
    if (
      !word.id.trim() ||
      !word.word.trim() ||
      !word.pronunciation.trim() ||
      !word.topic.trim() ||
      !word.group.trim() ||
      !word.definition.trim() ||
      !word.example.trim() ||
      !word.partOfSpeech.trim()
    ) {
      errors.push(`Required content is missing: ${word.id || word.word}`)
    }
    if (!word.cefr || word.cefr.status !== "provisional") {
      errors.push(`Batch CEFR status must remain provisional: ${word.id}`)
    }
    batchIds.add(word.id)
    batchWords.add(key)
    batchCompactWords.set(compactKey, key)
  }

  return {
    valid: errors.length === 0,
    batchId,
    addedWords: batch.length,
    errors,
    reviewNotes,
  }
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
    verifiedImages: words.filter((word) => word.imageStatus === "verified")
      .length,
    provisionalCEFR: words.filter((word) => word.cefr?.status === "provisional")
      .length,
    issues,
  }
}

const legacyVocabulary = completeCategoryCatalog(
  expandVocabulary(coreWords),
  scenes,
)
const batchDefinitions = [
  { words: batch001, metadata: batch001Metadata },
  { words: batch002, metadata: batch002Metadata },
  { words: batch003, metadata: batch003Metadata },
  { words: batch004, metadata: batch004Metadata },
  { words: batch005, metadata: batch005Metadata },
  { words: batch006, metadata: batch006Metadata },
  { words: batch007, metadata: batch007Metadata },
  { words: batch008, metadata: batch008Metadata },
  { words: batch009, metadata: batch009Metadata },
  { words: batch010, metadata: batch010Metadata },
  { words: batch011, metadata: batch011Metadata },
  { words: batch012, metadata: batch012Metadata },
  { words: batch013, metadata: batch013Metadata },
  { words: batch014, metadata: batch014Metadata },
  { words: batch015, metadata: batch015Metadata },
  { words: batch016, metadata: batch016Metadata },
  { words: batch017, metadata: batch017Metadata },
  { words: batch018, metadata: batch018Metadata },
  { words: batch019, metadata: batch019Metadata },
  { words: batch020, metadata: batch020Metadata },
  { words: batch021, metadata: batch021Metadata },
  { words: batch022, metadata: batch022Metadata },
  { words: batch023, metadata: batch023Metadata },
  { words: batch024, metadata: batch024Metadata },
  { words: batch025, metadata: batch025Metadata },
  { words: batch026, metadata: batch026Metadata },
  { words: batch027, metadata: batch027Metadata },

]
const stagedBatchWords: Word[] = []
export const vocabularyBatches = batchDefinitions.map(({ words, metadata }) => {
  const audit = validateVocabularyBatch(metadata.id, words, [
    ...legacyVocabulary,
    ...stagedBatchWords,
  ])
  stagedBatchWords.push(...words)
  return { ...metadata, audit }
})
export const batch001Audit = vocabularyBatches[0].audit
export const batch002Audit = vocabularyBatches[1].audit
export const batch003Audit = vocabularyBatches[2].audit
export const batch004Audit = vocabularyBatches[3].audit
export const batch005Audit = vocabularyBatches[4].audit
export const batch006Audit = vocabularyBatches[5].audit
export const batch007Audit = vocabularyBatches[6].audit
export const batch008Audit = vocabularyBatches[7].audit
export const batch009Audit = vocabularyBatches[8].audit
export const batch010Audit = vocabularyBatches[9].audit
export const batch011Audit = vocabularyBatches[10].audit
export const batch012Audit = vocabularyBatches[11].audit
export const batch013Audit = vocabularyBatches[12].audit
export const batch014Audit = vocabularyBatches[13].audit
export const batch015Audit = vocabularyBatches[14].audit
export const batch016Audit = vocabularyBatches[15].audit
export const batch017Audit = vocabularyBatches[16].audit
export const batch018Audit = vocabularyBatches[17].audit
export const batch019Audit = vocabularyBatches[18].audit
export const batch020Audit = vocabularyBatches[19].audit
export const batch021Audit = vocabularyBatches[20].audit
export const batch022Audit = vocabularyBatches[21].audit
export const batch023Audit = vocabularyBatches[22].audit
export const batch024Audit = vocabularyBatches[23].audit
export const batch025Audit = vocabularyBatches[24].audit
export const batch026Audit = vocabularyBatches[25].audit
export const batch027Audit = vocabularyBatches[26].audit


const failedBatchAudits = vocabularyBatches
  .map((batch) => batch.audit)
  .filter((audit) => !audit.valid)
if (failedBatchAudits.length > 0) {
  throw new Error(
    failedBatchAudits
      .map(
        (audit) =>
          `Vocabulary ${audit.batchId} failed validation: ${audit.errors.join("; ")}`,
      )
      .join(" | "),
  )
}

const baseVocabulary = completeCategoryCatalog(
  [...legacyVocabulary, ...stagedBatchWords],
  scenes,
)
export const vocabulary = applyExpandedTopicTaxonomy(baseVocabulary)
export const vocabularyAudit = validateVocabulary(vocabulary)

if (import.meta.env?.DEV && vocabularyAudit.issues.length > 0) {
  console.warn("Emad WordLink vocabulary audit", vocabularyAudit)
}
