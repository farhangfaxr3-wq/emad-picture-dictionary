import type { CEFRLevel } from "./cefr"

export type LearningPathSection = "vocabulary" | "practice" | "write" | "flashcards" | "games"

export interface LearningPathStep {
  id: string
  title: string
  topic: string
  cefr: CEFRLevel
  section: LearningPathSection
  activity?: string
  action: string
  description: string
}

export interface LearningPathDefinition {
  id: string
  title: string
  shortTitle: string
  eyebrow: string
  description: string
  outcome: string
  steps: LearningPathStep[]
}

export const learningPaths: LearningPathDefinition[] = [
  {
    id: "everyday-english",
    title: "Everyday English",
    shortTitle: "Everyday",
    eyebrow: "Build confidence for daily life",
    description:
      "Move from familiar home words to everyday routines and community conversations.",
    outcome:
      "Understand and use practical words for home, food, routines and local life.",
    steps: [
      {
        id: "home-essentials",
        title: "Home essentials",
        topic: "Home",
        cefr: "A1",
        section: "vocabulary",
        action: "Explore the words",
        description: "See and hear familiar objects and rooms around the home.",
      },
      {
        id: "food-every-day",
        title: "Food in daily life",
        topic: "Food",
        cefr: "A1",
        section: "practice",
        activity: "multiple",
        action: "Start practice",
        description: "Connect useful food words with their clear meanings.",
      },
      {
        id: "daily-routines",
        title: "Daily routines",
        topic: "Daily Activities",
        cefr: "A2",
        section: "write",
        activity: "complete-word",
        action: "Practise writing",
        description: "Complete the words you need to describe a normal day.",
      },
      {
        id: "community-life",
        title: "Community life",
        topic: "Community",
        cefr: "B1",
        section: "games",
        activity: "word-match",
        action: "Play Word Match",
        description:
          "Match words and meanings for places, events and helping others.",
      },
    ],
  },
  {
    id: "english-for-university",
    title: "English for University",
    shortTitle: "University",
    eyebrow: "Prepare for study and research",
    description:
      "Build a route from campus basics to academic writing and research language.",
    outcome:
      "Use clearer English for campus life, study tasks, academic writing and research.",
    steps: [
      {
        id: "campus-foundations",
        title: "Campus foundations",
        topic: "School",
        cefr: "A2",
        section: "vocabulary",
        action: "Explore the words",
        description:
          "Review useful words for classes, learning and school life.",
      },
      {
        id: "university-life",
        title: "University life",
        topic: "Education & University Life",
        cefr: "B1",
        section: "practice",
        activity: "multiple",
        action: "Start practice",
        description:
          "Connect campus services and study terms with precise meanings.",
      },
      {
        id: "academic-writing",
        title: "Academic writing",
        topic: "Academic Writing & Research",
        cefr: "B2",
        section: "write",
        activity: "complete-word",
        action: "Practise writing",
        description:
          "Strengthen the vocabulary used to explain evidence and arguments.",
      },
      {
        id: "research-language",
        title: "Research language",
        topic: "Science & Research",
        cefr: "C1",
        section: "games",
        activity: "word-match",
        action: "Play Word Match",
        description:
          "Match advanced research terms with their learner-friendly meanings.",
      },
    ],
  },
  {
    id: "english-for-travel",
    title: "English for Travel",
    shortTitle: "Travel",
    eyebrow: "Get ready to move with confidence",
    description:
      "Follow a practical route from local transport to journeys, places and conversations.",
    outcome:
      "Recognize and use useful English for transport, trips, destinations and requests.",
    steps: [
      {
        id: "getting-around",
        title: "Getting around",
        topic: "Transportation",
        cefr: "A1",
        section: "vocabulary",
        action: "Explore the words",
        description:
          "Learn the essential vehicles, stations and road vocabulary.",
      },
      {
        id: "plan-a-trip",
        title: "Plan a trip",
        topic: "Travel",
        cefr: "A2",
        section: "practice",
        activity: "listening",
        action: "Start listening",
        description:
          "Listen for common words used at airports, hotels and on journeys.",
      },
      {
        id: "find-the-place",
        title: "Find the place",
        topic: "Places",
        cefr: "A2",
        section: "flashcards",
        action: "Open flashcards",
        description:
          "Build quick recognition of useful places around a town or city.",
      },
      {
        id: "travel-conversations",
        title: "Travel conversations",
        topic: "Communication",
        cefr: "B1",
        section: "practice",
        activity: "sentence",
        action: "Complete sentences",
        description:
          "Choose the words that complete clear everyday travel messages.",
      },
    ],
  },
]

export function learningPathStepUrl(step: LearningPathStep) {
  const params = new URLSearchParams({
    section: step.section,
    cefr: step.cefr,
  })
  if (step.activity) params.set("activity", step.activity)
  return `/topics/${encodeURIComponent(step.topic)}?${params.toString()}`
}
