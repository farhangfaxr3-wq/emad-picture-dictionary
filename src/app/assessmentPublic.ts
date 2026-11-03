import type { CEFRLevel } from "./cefr"

export const ASSESSMENT_QUESTION_COUNT = 50

export type AssessmentSkill = "vocabulary" | "grammar" | "reading" | "listening"

export interface PublicAssessmentQuestion {
  id: string
  bankVersion: string
  skill: AssessmentSkill
  level: CEFRLevel
  prompt: string
  options: string[]
  passage?: string
  audioSrc?: string
}

export interface SkillScore {
  correct: number
  total: number
  percent: number
}

export interface AssessmentResult {
  id: string
  completedAt: string
  bankVersion: string
  level: CEFRLevel
  correct: number
  total: number
  percent: number
  weightedPercent: number
  skills: Record<AssessmentSkill, SkillScore>
}

export const assessmentSkillLabels: Record<AssessmentSkill, string> = {
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  reading: "Reading",
  listening: "Listening",
}

export function resultRecommendations(level: CEFRLevel) {
  const recommendations: Record<CEFRLevel, string[]> = {
    A1: [
      "Build a strong base with everyday picture vocabulary.",
      "Practice short listening prompts and simple present-tense sentences.",
      "Review five to ten words each day.",
    ],
    A2: [
      "Expand vocabulary for routines, travel, shopping, and study.",
      "Practice short past and future forms in context.",
      "Use flashcards and short listening activities regularly.",
    ],
    B1: [
      "Study topic vocabulary and common word combinations.",
      "Practice reading for main ideas and listening for key details.",
      "Revisit grammar through complete sentences and short texts.",
    ],
    B2: [
      "Work with academic and professional vocabulary.",
      "Practice inference in longer reading and listening passages.",
      "Review complex sentences, reporting, and conditional forms.",
    ],
    C1: [
      "Develop precision with nuanced and academic vocabulary.",
      "Compare arguments, tone, and implied meaning in authentic texts.",
      "Use advanced grammar to express emphasis and stance.",
    ],
    C2: [
      "Refine register, idiomatic language, and highly precise vocabulary.",
      "Engage with complex texts from unfamiliar fields.",
      "Maintain accuracy through deliberate review and varied input.",
    ],
  }

  return recommendations[level]
}
