export const cefrLevels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const

export type CEFRLevel = (typeof cefrLevels)[number]
export type CEFRSelection = CEFRLevel | "All levels"
export type CEFRStatus = "provisional" | "verified"
export type CEFRConfidence = "low" | "medium" | "high"

export interface CEFRMetadata {
  level: CEFRLevel
  status: CEFRStatus
  confidence: CEFRConfidence
  source: string
}

export const cefrLabels: Record<CEFRLevel, string> = {
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Upper-Intermediate",
  C1: "Advanced",
  C2: "Proficient",
}

const reviewedCoreA1 = new Set([
  "apple",
  "banana",
  "bread",
  "house",
  "chair",
  "mother",
  "father",
  "child",
  "friend",
  "school",
  "student",
  "book",
  "pencil",
  "shirt",
  "shoe",
  "doctor",
  "teacher",
  "bus",
  "park",
  "tree",
  "flower",
  "cat",
  "dog",
  "ball",
  "phone",
  "letter",
  "message",
  "market",
])

type LegacyVocabulary = {
  word: string
  level: "Beginner" | "Intermediate"
}

export function estimateCEFR(word: LegacyVocabulary): CEFRMetadata {
  const normalized = word.word.toLowerCase().trim()
  const wordCount = normalized.split(/\s+/).length
  const source = "Legacy level mapping; awaiting educator review"

  if (reviewedCoreA1.has(normalized)) {
    return {
      level: "A1",
      status: "provisional",
      confidence: "medium",
      source,
    }
  }

  if (word.level === "Beginner") {
    return {
      level: wordCount > 1 || normalized.length > 6 ? "A2" : "A1",
      status: "provisional",
      confidence: "low",
      source,
    }
  }

  return {
    level: wordCount > 2 || normalized.length > 13 ? "B2" : "B1",
    status: "provisional",
    confidence: "low",
    source,
  }
}

export function isCEFRLevel(value: string | null | undefined): value is CEFRLevel {
  return cefrLevels.includes(value as CEFRLevel)
}

export function resolveCEFRSelection(
  value: string | null | undefined,
  fallback: CEFRSelection = "All levels",
): CEFRSelection {
  if (value === "all") return "All levels"
  return isCEFRLevel(value) ? value : fallback
}
