import type { CEFRLevel } from "./cefr"
import { isCEFRLevel } from "./cefr"
import { scenes } from "./SceneCanvas"
import { topicNames } from "./topicCatalog"
import { vocabulary } from "./vocabulary"

export type Preferences = {
  name: string
  language: string
  audio: boolean
  speed: string
  dark: boolean
  notifications: boolean
  goal: number
  reduceMotion: boolean
  largeText: boolean
  soraniHelp: boolean
  cefrLevel: CEFRLevel | "All levels"
}

export interface WordMastery {
  attempts: number
  correct: number
  streak: number
  lastReviewed: string
  nextReview: string
}

export interface ReviewOutcome {
  id: string
  correct: boolean
  answer?: string
}

interface LastLesson {
  category: string
  section: string
  url: string
}

export type Stored = {
  schemaVersion: number
  lastLesson: LastLesson | null
  favorites: string[]
  learned: string[]
  recent: string[]
  reviewed: string[]
  explored: string[]
  mastery: Record<string, WordMastery>
  mistakes: string[]
  sceneProgress: Record<string, string[]>
  sceneScores: Record<string, number>
  categoryCards: Record<string, Record<string, "known" | "review">>
  activity: {
    date: string
    type: "learned" | "reviewed" | "topic"
    target: string
  }[]
  sessions: {
    date: string
    score: number
    total: number
    mode?: string
    topic?: string
    section?: "practice" | "write" | "flashcards" | "games"
  }[]
  preferences: Preferences
}

export const STORE_KEY = "emad-dictionary"
const STORE_VERSION = 2

const initial: Stored = {
  schemaVersion: STORE_VERSION,
  lastLesson: null,
  favorites: [],
  learned: [],
  recent: [],
  reviewed: [],
  explored: [],
  mastery: {},
  mistakes: [],
  sceneProgress: {},
  sceneScores: {},
  categoryCards: {},
  activity: [],
  sessions: [],
  preferences: {
    name: "",
    language: "English",
    audio: true,
    speed: "Normal",
    dark: false,
    notifications: false,
    goal: 10,
    reduceMotion: false,
    largeText: false,
    soraniHelp: false,
    cefrLevel: "All levels",
  },
}

const validWordIds = new Set(vocabulary.map((word) => word.id))
for (const scene of scenes) {
  for (const item of scene.objects) {
    if (
      validWordIds.has(item.id) ||
      vocabulary.some(
        (word) => word.word.toLowerCase() === item.id.replace(/-/g, " "),
      )
    ) {
      validWordIds.add(item.id)
    }
  }
}

export function normalizeStore(saved: unknown): Stored {
  const candidate =
    saved && typeof saved === "object" && !Array.isArray(saved)
      ? saved as Partial<Stored>
      : null

  if (!candidate) return initial

  return {
    ...initial,
    ...candidate,
    schemaVersion: STORE_VERSION,
    lastLesson:
      candidate.lastLesson &&
      topicNames.includes(candidate.lastLesson.category) &&
      ["vocabulary", "practice", "write", "flashcards", "games"].includes(
        candidate.lastLesson.section,
      ) &&
      typeof candidate.lastLesson.url === "string" &&
      candidate.lastLesson.url.startsWith("/topics/")
        ? candidate.lastLesson
        : null,
    favorites: Array.isArray(candidate.favorites)
      ? candidate.favorites.filter((id) => validWordIds.has(id))
      : [],
    learned: Array.isArray(candidate.learned)
      ? candidate.learned.filter((id) => validWordIds.has(id))
      : [],
    recent: Array.isArray(candidate.recent)
      ? candidate.recent.filter((id) => validWordIds.has(id))
      : [],
    reviewed: Array.isArray(candidate.reviewed)
      ? candidate.reviewed.filter((id) => validWordIds.has(id))
      : [],
    explored: Array.isArray(candidate.explored)
      ? candidate.explored.filter((topic) => topicNames.includes(topic))
      : [],
    mastery: Object.fromEntries(
      Object.entries(candidate.mastery || {}).filter(([id, value]) => {
        const entry = value as WordMastery
        return (
          validWordIds.has(id) &&
          entry &&
          Number.isFinite(entry.attempts) &&
          Number.isFinite(entry.correct) &&
          Number.isFinite(entry.streak) &&
          !Number.isNaN(new Date(entry.nextReview).getTime()) &&
          !Number.isNaN(new Date(entry.lastReviewed).getTime())
        )
      }),
    ) as Record<string, WordMastery>,
    mistakes: Array.isArray(candidate.mistakes)
      ? candidate.mistakes.filter((id) => validWordIds.has(id))
      : [],
    sceneProgress: Object.fromEntries(
      scenes.map((scene) => [
        scene.id,
        Array.isArray(candidate.sceneProgress?.[scene.id])
          ? candidate.sceneProgress[scene.id].filter((id) =>
              scene.objects.some((object) => object.id === id),
            )
          : [],
      ]),
    ),
    sceneScores: Object.fromEntries(
      scenes.map((scene) => [
        scene.id,
        Number.isFinite(candidate.sceneScores?.[scene.id])
          ? Math.max(
              0,
              Math.min(scene.objects.length, candidate.sceneScores![scene.id]),
            )
          : 0,
      ]),
    ),
    categoryCards: Object.fromEntries(
      topicNames.map((topic) => [
        topic,
        Object.fromEntries(
          Object.entries(candidate.categoryCards?.[topic] || {}).filter(
            ([id, status]) =>
              vocabulary.some(
                (word) => word.id === id && word.topic === topic,
              ) && ["known", "review"].includes(status),
          ),
        ),
      ]),
    ),
    activity: Array.isArray(candidate.activity)
      ? candidate.activity
          .filter(
            (item) => item && !Number.isNaN(new Date(item.date).getTime()),
          )
          .slice(-100)
      : [],
    sessions: Array.isArray(candidate.sessions)
      ? candidate.sessions.filter(
          (session) =>
            session &&
            Number.isFinite(session.score) &&
            session.total > 0 &&
            !Number.isNaN(new Date(session.date).getTime()),
        )
      : [],
    preferences: {
      ...initial.preferences,
      ...candidate.preferences,
      soraniHelp: candidate.preferences?.soraniHelp === true,
      cefrLevel: isCEFRLevel(candidate.preferences?.cefrLevel)
        ? candidate.preferences.cefrLevel
        : "All levels",
    },
  }
}

export function readStore(): Stored {
  try {
    return normalizeStore(JSON.parse(localStorage.getItem(STORE_KEY) || "null"))
  } catch {
    return initial
  }
}
