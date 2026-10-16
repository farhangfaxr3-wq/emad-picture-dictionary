import { useEffect, useRef, useState, type ReactNode } from "react"
import { Link, useSearchParams } from "react-router"
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gamepad2,
  Grid2X2,
  Headphones,
  Heart,
  Home,
  Layers,
  Pencil,
  Play,
  RotateCcw,
  Shuffle,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Volume2,
} from "lucide-react"
import type { Word } from "./content"
import type { ReviewOutcome, Stored } from "./App"
import { scenes } from "./SceneCanvas"
import { CategoryHero } from "./CategoryImagery"
import { getVocabularyPhoto, visualVocabulary } from "./VocabularyImagery"
import { topicIntroductions } from "./content"
import {
  cefrLabels,
  cefrLevels,
  resolveCEFRSelection,
} from "./cefr"

type Section = "dashboard" | "vocabulary" | "practice" | "write" | "flashcards" | "games" | "progress"
type LearningSection = "practice" | "write" | "flashcards" | "games"
interface CourseProps {
  category: string
  words: Word[]
  data: Stored
  update: (fn: (data: Stored) => Stored) => void
  openWord: (word: Word) => void
  visitWord: (word: Word) => void
  favorite: (id: string) => void
  art: (word: Word, className?: string) => ReactNode
  audio: (text: string) => ReactNode
  topicArt: ReactNode
  vocabularyContent: ReactNode
  sceneWordIds: Record<string, string[]>
  complete: (
    section: LearningSection,
    mode: string,
    outcomes: ReviewOutcome[],
  ) => void
}
const primary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
const secondary =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
const card = "rounded-2xl border border-border bg-card"
const sections = [
  {
    id: "dashboard",
    name: "Category Home",
    icon: Home,
    description: "Your next step, all in one place.",
  },
  {
    id: "vocabulary",
    name: "Vocabulary",
    icon: BookOpen,
    description: "See, hear, and explore every word.",
  },
  {
    id: "practice",
    name: "Practice",
    icon: Target,
    description: "Picture, listening, meaning, and sentence questions.",
  },
  {
    id: "write",
    name: "Write",
    icon: Pencil,
    description: "Build spelling confidence, one word at a time.",
  },
  {
    id: "flashcards",
    name: "Flashcards",
    icon: Layers,
    description: "Flip a card. Make a word familiar.",
  },
  {
    id: "games",
    name: "Games",
    icon: Gamepad2,
    description: "Match, remember, build, and beat the clock.",
  },
  {
    id: "progress",
    name: "Category Progress",
    icon: TrendingUp,
    description: "See how far you've come in this category.",
  },
] as const
const practiceActivities = [
  {
    id: "picture",
    title: "Picture → Word",
    text: "Choose a word from the picture and its clue.",
    icon: Grid2X2,
  },
  {
    id: "word",
    title: "Word → Picture",
    text: "Find the picture that represents the word.",
    icon: BookOpen,
  },
  {
    id: "multiple",
    title: "Multiple Choice",
    text: "Connect a simple definition to the right word.",
    icon: Target,
  },
  {
    id: "listening",
    title: "Listening",
    text: "Listen, then choose the word you hear.",
    icon: Headphones,
  },
  {
    id: "matching",
    title: "Matching",
    text: "Connect each word to its illustrated meaning.",
    icon: Layers,
  },
  {
    id: "identify",
    title: "Identify the Picture",
    text: "Read a definition and identify its picture.",
    icon: Grid2X2,
  },
  {
    id: "choose",
    title: "Choose the Correct Word",
    text: "Use an everyday example to find the word.",
    icon: CheckCircle2,
  },
  {
    id: "sentence",
    title: "Complete the Sentence",
    text: "Choose the missing word in a real-world sentence.",
    icon: Pencil,
  },
  {
    id: "spelling",
    title: "Spelling",
    text: "Look, listen, and type the whole English word.",
    icon: Pencil,
  },
  {
    id: "topic-review",
    title: "Topic Review",
    text: "Mix pictures, listening, spelling, and meanings from this category.",
    icon: Shuffle,
  },
  {
    id: "review",
    title: "Quick Review",
    text: "Recall recently studied words, then check what you remembered.",
    icon: RotateCcw,
  },
]
const writingActivities = [
  {
    id: "spelling",
    title: "Picture Spelling",
    text: "See the picture, then write the whole word.",
    icon: Pencil,
  },
  {
    id: "missing",
    title: "Missing Letters",
    text: "Use the visible letters to recover the word.",
    icon: Grid2X2,
  },
  {
    id: "complete-word",
    title: "Complete the Word",
    text: "Start with a few letters and finish the word.",
    icon: BookOpen,
  },
  {
    id: "dictation",
    title: "Type What You Hear",
    text: "Listen to the pronunciation, then type it.",
    icon: Headphones,
  },
]
const gameActivities = [
  {
    id: "picture-match",
    title: "Picture Match",
    text: "Match four words with their pictures.",
    icon: Grid2X2,
  },
  {
    id: "word-match",
    title: "Word Match",
    text: "Discover related words from the same category.",
    icon: Layers,
  },
  {
    id: "memory",
    title: "Memory Game",
    text: "Find hidden word and picture pairs.",
    icon: Sparkles,
  },
  {
    id: "speed",
    title: "Speed Round",
    text: "How many can you answer in 60 seconds?",
    icon: Clock,
  },
  {
    id: "listen-choose",
    title: "Listen & Choose",
    text: "Listen to a word and pick its picture.",
    icon: Headphones,
  },
  {
    id: "builder",
    title: "Word Builder",
    text: "Arrange letter tiles to build a word.",
    icon: Pencil,
  },
  {
    id: "picture-challenge",
    title: "Picture Challenge",
    text: "Identify an illustrated word and its meaning.",
    icon: Target,
  },
]
function shuffled<Item>(items: Item[]): Item[] {
  const next = [...items]
  for (let index = next.length - 1; index > 0; index--) {
    const swap = Math.floor(Math.random() * (index + 1))
    ;[next[index], next[swap]] = [next[swap], next[index]]
  }
  return next
}
function normalized(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[-\s]+/g, " ")
    .trim()
}
interface MeterProps {
  value: number
  label: string
}
function Meter({ value, label }: MeterProps) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-1.5 overflow-hidden rounded-full bg-muted"
    >
      <div
        className="h-full rounded-full bg-primary transition-all duration-300"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  )
}
function courseStats(course: CourseProps) {
  const { data, category, words } = course
  const learned = words.filter((word) => data.learned.includes(word.id)).length
  const cards = data.categoryCards[category] || {}
  const sessions = data.sessions.filter((session) => session.topic === category)
  const accuracy = (section: LearningSection) => {
    const relevant = sessions.filter(
      (session) =>
        session.section === section ||
        (!session.section && section === "practice"),
    )
    return relevant.length
      ? Math.round(
          (relevant.reduce((sum, item) => sum + item.score, 0) /
            relevant.reduce((sum, item) => sum + item.total, 0)) *
            100,
        )
      : 0
  }
  const reviewed = words.filter((word) => cards[word.id]).length
  const known = words.filter((word) => cards[word.id] === "known").length
  const games = sessions.filter((session) => session.section === "games").length
  const overall = Math.round(
    ((learned / words.length) * 100 +
      accuracy("practice") +
      accuracy("write") +
      (reviewed / words.length) * 100 +
      Math.min(100, games * 20)) /
      5,
  )
  return { learned, reviewed, known, games, overall, accuracy, sessions }
}
export default function CategoryCourse(course: CourseProps) {
  const [params, setParams] = useSearchParams()
  const requested =
    params.get("section") ||
    (params.has("scene") || params.has("view") ? "vocabulary" : "dashboard")
  const section: Section = sections.some((item) => item.id === requested)
    ? requested as Section
    : "dashboard"
  const activity = params.get("activity") || ""
  const requestedCEFR = params.get("cefr")
  const cefr = resolveCEFRSelection(
    requestedCEFR,
    course.data.preferences.cefrLevel,
  )
  const group = params.get("group") || "All subcategories"
  const levelWords =
    cefr === "All levels"
      ? course.words
      : course.words.filter((word) => word.cefr?.level === cefr)
  const groups = [...new Set(levelWords.map((word) => word.group))]
  const groupWords =
    group === "All subcategories"
      ? levelWords
      : levelWords.filter((word) => word.group === group)
  const scene = scenes.find((item) => item.id === params.get("scene"))
  const sceneWords =
    scene && section !== "flashcards"
      ? groupWords.filter((word) =>
          course.sceneWordIds[scene.id]?.includes(word.id),
        )
      : groupWords
  const selectedWords = params.get("word")
    ? sceneWords.filter((word) => word.id === params.get("word"))
    : sceneWords
  const scoped = selectedWords.filter(
    (word) =>
      (!params.has("favorites") || course.data.favorites.includes(word.id)) &&
      (!params.get("q") ||
        `${word.word} ${word.definition} ${word.topic}`
          .toLowerCase()
          .includes(params.get("q")!.trim().toLowerCase())),
  )
  const stats = courseStats(course)
  const questionCount = [5, 10, 15].includes(Number(params.get("length")))
    ? Number(params.get("length"))
    : 5
  const reviewIds = new Set([
    ...course.data.recent,
    ...course.data.learned,
    ...course.data.reviewed,
  ])
  const reviewWords = scoped.filter((word) => reviewIds.has(word.id))
  const navigate = (next: Section, mode?: string) => {
    const search = new URLSearchParams()
    search.set("section", next)
    if (mode) search.set("activity", mode)
    if (params.get("length")) search.set("length", params.get("length")!)
    if (next !== "dashboard" && next !== "progress")
      search.set("cefr", cefr === "All levels" ? "all" : cefr)
    if (next === section && mode) {
      if (params.has("favorites")) search.set("favorites", "true")
      if (params.get("q")) search.set("q", params.get("q")!)
    }
    if (scene && next === section && mode) search.set("scene", scene.id)
    if (
      group !== "All subcategories" &&
      next !== "dashboard" &&
      next !== "progress"
    )
      search.set("group", group)
    if (
      params.get("word") &&
      ["practice", "write", "games", "flashcards"].includes(next)
    )
      search.set("word", params.get("word")!)
    setParams(search)
  }
  const activities =
    section === "write"
      ? writingActivities
      : section === "games"
        ? gameActivities
        : practiceActivities
  const active = activities.find((item) => item.id === activity)
  const onComplete = (outcomes: ReviewOutcome[]) =>
    course.complete(
      section as LearningSection,
      active?.title || activity,
      outcomes,
    )
  return (
    <>
      <Link
        to="/topics"
        className="mb-4 inline-flex items-center gap-1 rounded-lg text-xs text-muted-foreground"
      >
        <ChevronLeft size={14} />
        Topics
        <ChevronRight size={12} />
        <span className="text-foreground">{course.category}</span>
      </Link>
      {section === "dashboard" ? (
        <CategoryHero
          category={course.category}
          eyebrow={`Your category mini-course · ${course.words.length} words`}
          title={course.category}
          description={topicIntroductions[course.category]}
        >
          <div className="mb-2 mt-5 flex justify-between gap-5 text-xs">
            <span>
              {stats.learned} learned · {course.words.length - stats.learned}{" "}
              remaining
            </span>
            <span>
              {Math.round((stats.learned / course.words.length) * 100)}%
            </span>
          </div>
          <Meter
            value={(stats.learned / course.words.length) * 100}
            label={`${course.category} vocabulary learned`}
          />
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Explore vocabulary, practice, write, flip flashcards, and play —
            your complete learning journey starts here.
          </p>
        </CategoryHero>
      ) : (
        section !== "vocabulary" && (
          <section className="mb-6 flex items-center justify-between gap-5 overflow-hidden rounded-2xl bg-secondary p-6 md:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Your category mini-course · {course.words.length} words
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold">
                {course.category}
                <span className="ml-2 text-lg font-medium text-primary">
                  / {sections.find((item) => item.id === section)?.name}
                </span>
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                One category. A complete learning journey. Explore its
                vocabulary, practice, write, flip cards, and play — without
                leaving this lesson.
              </p>
              <div className="mb-2 mt-5 flex justify-between gap-5 text-xs">
                <span>
                  {stats.learned} learned ·{" "}
                  {course.words.length - stats.learned} remaining
                </span>
                <span>
                  {Math.round((stats.learned / course.words.length) * 100)}%
                </span>
              </div>
              <Meter
                value={(stats.learned / course.words.length) * 100}
                label={`${course.category} vocabulary learned`}
              />
            </div>
            <div className="hidden h-44 w-52 shrink-0 md:block">
              {course.topicArt}
            </div>
          </section>
        )
      )}
      <nav
        aria-label={`${course.category} learning sections`}
        className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-border bg-card p-2"
      >
        {sections.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            aria-current={section === id ? "page" : undefined}
            onClick={() => navigate(id)}
            className={`inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold ${
              section === id
                ? "bg-secondary text-primary"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Icon size={15} />
            {name}
          </button>
        ))}
      </nav>
      {section === "dashboard" && (
        <CategoryDashboard course={course} navigate={navigate} />
      )}
      {section === "vocabulary" && course.vocabularyContent}
      {section === "progress" && (
        <CategoryProgress course={course} navigate={navigate} />
      )}
      {["practice", "write", "games", "flashcards"].includes(section) && (
        <>
          {!activity && (
            <div
              className={`${card} mb-5 flex flex-wrap items-end justify-between gap-4 p-5`}
            >
              <div>
                <h2 className="font-display text-lg font-bold">
                  {section === "flashcards"
                    ? "Set up your category deck"
                    : `${course.category} ${sections.find((item) => item.id === section)?.name}`}
                </h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  {scoped.length} {scoped.length === 1 ? "word" : "words"} in
                  this collection. Questions and choices stay inside{" "}
                  {course.category}.
                </p>
              </div>
              <label className="text-xs text-muted-foreground">
                CEFR level
                <select
                  aria-label="Category CEFR level"
                  value={cefr}
                  onChange={(event) => {
                    const next = new URLSearchParams(params)
                    next.set("section", section)
                    next.set(
                      "cefr",
                      event.target.value === "All levels"
                        ? "all"
                        : event.target.value,
                    )
                    next.delete("group")
                    setParams(next)
                  }}
                  className="mt-2 block w-full rounded-xl border border-border bg-background px-3 py-2.5 text-xs"
                >
                  <option value="All levels">All CEFR levels</option>
                  {cefrLevels.map((level) => (
                    <option key={level} value={level}>
                      {level} · {cefrLabels[level]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-xs text-muted-foreground">
                Vocabulary subgroup
                <select
                  aria-label="Category activity subgroup"
                  value={group}
                  onChange={(event) => {
                    const next = new URLSearchParams(params)
                    next.set("section", section)
                    event.target.value === "All subcategories"
                      ? next.delete("group")
                      : next.set("group", event.target.value)
                    setParams(next)
                  }}
                  className="mt-2 block w-full rounded-xl border border-border bg-background px-3 py-2.5 text-xs"
                >
                  <option>All subcategories</option>
                  {groups.map((name) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
              </label>
              {["practice", "write"].includes(section) && (
                <label className="text-xs text-muted-foreground">
                  Session length
                  <select
                    aria-label="Category session length"
                    value={questionCount}
                    onChange={(event) => {
                      const next = new URLSearchParams(params)
                      next.set("section", section)
                      next.set("length", event.target.value)
                      setParams(next)
                    }}
                    className="mt-2 block w-full rounded-xl border border-border bg-background px-3 py-2.5 text-xs"
                  >
                    <option value={5}>5 questions</option>
                    <option value={10}>10 questions</option>
                    <option value={15}>15 questions</option>
                  </select>
                </label>
              )}
            </div>
          )}
          {!scoped.length ? (
            <section className={`${card} p-8 text-center`}>
              <h2 className="font-display text-xl font-bold">
                This collection is empty.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Choose another subgroup to continue learning in this category.
              </p>
              <button
                onClick={() => setParams({ section })}
                className={`${primary} mt-5`}
              >
                All category words
              </button>
            </section>
          ) : section === "flashcards" ? (
            <FlashcardDeck
              key={`${course.category}-${group}-${params.get("word") || ""}`}
              course={course}
              words={scoped}
              onProgress={() => navigate("progress")}
            />
          ) : active ? (
            <div
              key={`${course.category}-${section}-${activity}-${group}-${params.get("word") || ""}`}
            >
              <button
                onClick={() => navigate(section)}
                className="mb-4 inline-flex items-center gap-1 rounded-lg text-xs text-primary"
              >
                <ChevronLeft size={14} />
                All {course.category} {section} activities
              </button>
              {["matching", "picture-match", "memory"].includes(activity) ? (
                <PairGame
                  course={course}
                  words={scoped}
                  memory={activity === "memory"}
                  title={active.title}
                  onComplete={onComplete}
                  onProgress={() => navigate("progress")}
                />
              ) : (
                <QuizSession
                  course={course}
                  words={
                    activity === "review" && reviewWords.length
                      ? reviewWords
                      : scoped
                  }
                  mode={activity}
                  questionCount={questionCount}
                  title={active.title}
                  section={section as LearningSection}
                  onComplete={onComplete}
                  onProgress={() => navigate("progress")}
                />
              )}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {activities.map(({ id, title, text, icon: Icon }) => (
                <button
                  key={id}
                  disabled={
                    ["listening", "dictation", "listen-choose"].includes(id) &&
                    !course.data.preferences.audio
                  }
                  onClick={() => navigate(section, id)}
                  className={`${card} group p-6 text-left hover:-translate-y-1 hover:border-primary/30 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40`}
                >
                  <span className="inline-flex rounded-2xl bg-secondary p-4 text-primary">
                    <Icon size={26} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {text}
                  </p>
                  <span className="mt-5 flex items-center justify-between text-xs font-semibold text-primary">
                    Start {course.category} activity
                    <ArrowRight size={14} />
                  </span>
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}

interface DashboardProps {
  course: CourseProps
  navigate: (section: Section, activity?: string) => void
}
function CategoryDashboard({ course, navigate }: DashboardProps) {
  const stats = courseStats(course)
  const recent = course.data.recent
    .map((id) => course.words.find((word) => word.id === id))
    .filter((word): word is Word => Boolean(word))
    .slice(0, 4)
  const favorites = course.words.filter((word) =>
    course.data.favorites.includes(word.id),
  )
  const recommendation: Section = !stats.learned
    ? "vocabulary"
    : stats.reviewed < Math.min(10, course.words.length)
      ? "flashcards"
      : !stats.sessions.some((session) => session.section === "write")
        ? "write"
        : "practice"
  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Words learned", value: stats.learned, icon: CheckCircle2 },
          {
            label: "Words remaining",
            value: course.words.length - stats.learned,
            icon: BookOpen,
          },
          {
            label: "Category progress",
            value: `${stats.overall}%`,
            icon: TrendingUp,
          },
          { label: "Favorite words", value: favorites.length, icon: Heart },
        ].map(({ label, value, icon: Icon }) => (
          <section key={label} className={`${card} p-5`}>
            <Icon size={20} className="text-primary" />
            <p className="mt-3 font-display text-2xl font-bold">{value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{label}</p>
          </section>
        ))}
      </div>
      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-bold">
            Choose your next step
          </h2>
          <span className="rounded-lg bg-secondary px-3 py-1.5 text-xs text-primary">
            {course.words.length} real vocabulary entries ·{" "}
            {[...new Set(course.words.map((word) => word.group))].length}{" "}
            subgroups
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sections
            .filter((item) => item.id !== "dashboard")
            .map(({ id, name, icon: Icon, description }) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className={`${card} p-5 text-left hover:-translate-y-1 hover:border-primary/40 hover:shadow-md`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-secondary p-3 text-primary">
                    <Icon size={23} />
                  </span>
                  <ArrowRight size={17} className="text-primary" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {id === "vocabulary" ? "Explore Vocabulary" : name}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {description}
                </p>
                {id === "flashcards" && (
                  <p className="mt-3 text-xs font-semibold text-primary">
                    {stats.reviewed} / {course.words.length} reviewed
                  </p>
                )}
              </button>
            ))}
        </div>
      </section>
      <div className="grid gap-5 xl:grid-cols-2">
        <section className={`${card} p-5`}>
          <h2 className="font-display text-lg font-bold">
            Recently studied in {course.category}
          </h2>
          {recent.length ? (
            <div className="mt-4 grid grid-cols-2 gap-3">
              {recent.map((word) => (
                <button
                  key={word.id}
                  onClick={() => course.openWord(word)}
                  className="rounded-xl bg-background p-3 text-left hover:bg-secondary"
                >
                  <div className="flex justify-center">
                    {course.art(word, "h-20 w-24")}
                  </div>
                  <p className="mt-2 text-sm font-semibold">{word.word}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {word.group}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-xl bg-background p-5">
              <p className="text-xs leading-5 text-muted-foreground">
                Your recently studied words will appear here. Start with the
                vocabulary scene or your first flashcard.
              </p>
              <button
                onClick={() => navigate("vocabulary")}
                className={`${secondary} mt-4`}
              >
                Explore your first word
              </button>
            </div>
          )}
        </section>
        <section className={`${card} p-5`}>
          <div className="flex items-center gap-2">
            <Sparkles size={19} className="text-primary" />
            <h2 className="font-display text-lg font-bold">
              Recommended for you
            </h2>
          </div>
          <p className="mt-4 text-sm leading-6">
            {recommendation === "vocabulary"
              ? "Start by seeing and hearing a few words. Recognition comes before recall."
              : recommendation === "flashcards"
                ? "Turn familiar pictures into lasting memories with a short flashcard session."
                : recommendation === "write"
                  ? "You recognize the words. Now try writing them without looking."
                  : "Mix pictures, listening, and sentences to build confidence."}
          </p>
          <button
            onClick={() => navigate(recommendation)}
            className={`${primary} mt-5`}
          >
            Start {sections.find((item) => item.id === recommendation)?.name}
            <ArrowRight size={15} />
          </button>
          <div className="mt-6 border-t border-border pt-4">
            <h3 className="text-sm font-semibold">
              Favorites in this category
            </h3>
            {favorites.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {favorites.slice(0, 8).map((word) => (
                  <button
                    key={word.id}
                    onClick={() => course.openWord(word)}
                    className="rounded-lg bg-secondary px-3 py-2 text-xs text-primary"
                  >
                    {word.word}
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-xs text-muted-foreground">
                Tap a word's heart to build your {course.category} collection.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
function CategoryProgress({ course, navigate }: DashboardProps) {
  const stats = courseStats(course)
  const rows = [
    {
      name: "Vocabulary",
      detail: `${stats.learned} / ${course.words.length} learned`,
      value: (stats.learned / course.words.length) * 100,
      section: "vocabulary" as Section,
    },
    {
      name: "Practice",
      detail: `${stats.accuracy("practice")}% accuracy`,
      value: stats.accuracy("practice"),
      section: "practice" as Section,
    },
    {
      name: "Write",
      detail: `${stats.accuracy("write")}% accuracy`,
      value: stats.accuracy("write"),
      section: "write" as Section,
    },
    {
      name: "Flashcards",
      detail: `${stats.reviewed} / ${course.words.length} reviewed · ${stats.known} known`,
      value: (stats.reviewed / course.words.length) * 100,
      section: "flashcards" as Section,
    },
    {
      name: "Games",
      detail: `${stats.games} games completed`,
      value: Math.min(100, stats.games * 20),
      section: "games" as Section,
    },
  ]
  return (
    <div className="space-y-5">
      <section className={`${card} p-6`}>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-bold">
              {course.category} Progress
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Your activity in this category, not your website-wide totals.
            </p>
          </div>
          <span className="font-display text-3xl font-bold text-primary">
            {stats.overall}%
          </span>
        </div>
        <Meter
          value={stats.overall}
          label={`${course.category} overall progress`}
        />
        <p className="mt-3 text-xs leading-5 text-muted-foreground">
          Overall progress averages vocabulary learned, Practice accuracy, Write
          accuracy, flashcards reviewed, and a five-game milestone.
        </p>
      </section>
      <div className="grid gap-4 sm:grid-cols-2">
        {rows.map((row) => (
          <button
            key={row.name}
            onClick={() => navigate(row.section)}
            className={`${card} p-5 text-left hover:border-primary/40`}
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold">{row.name}</h3>
              <ArrowRight size={15} className="text-primary" />
            </div>
            <p className="mb-4 text-sm text-muted-foreground">{row.detail}</p>
            <Meter
              value={row.value}
              label={`${course.category} ${row.name} progress`}
            />
          </button>
        ))}
      </div>
      <section className={`${card} p-5`}>
        <h2 className="font-display text-lg font-bold">
          Category activity history
        </h2>
        {stats.sessions.length ? (
          <div className="mt-4 space-y-3">
            {stats.sessions
              .slice(-8)
              .reverse()
              .map((session, index) => (
                <div
                  key={`${session.date}-${index}`}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-background p-4"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      {session.mode || "Practice"}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {session.section || "practice"} ·{" "}
                      {new Date(session.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-primary">
                    {session.score} / {session.total}
                  </span>
                </div>
              ))}
          </div>
        ) : (
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Complete your first {course.category} activity to start your
            history.
          </p>
        )}
      </section>
    </div>
  )
}

interface SessionProps {
  course: CourseProps
  words: Word[]
  title: string
  onComplete: (outcomes: ReviewOutcome[]) => void
  onProgress: () => void
}
interface QuizProps extends SessionProps {
  mode: string
  section: LearningSection
  questionCount: number
}
interface ResultProps extends SessionProps {
  outcomes: ReviewOutcome[]
  retry: () => void
}
function Result({ course, title, outcomes, retry, onProgress }: ResultProps) {
  const score = outcomes.filter((item) => item.correct).length
  return (
    <section className={`${card} mx-auto max-w-2xl p-6 text-center md:p-8`}>
      <span className="inline-flex rounded-full bg-accent/20 p-5 text-accent-foreground">
        <Trophy size={42} />
      </span>
      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
        {course.category} · Activity complete
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold">
        {outcomes.length && score === outcomes.length
          ? "Beautifully done!"
          : "Every try helps you learn."}
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        {title}: {score} / {outcomes.length} correct ·{" "}
        {outcomes.length ? Math.round((score / outcomes.length) * 100) : 0}%
        accuracy
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        {outcomes.length
          ? `Saved to your ${course.category} progress.`
          : "Answer a question in your next round to start recording progress."}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button onClick={retry} className={primary}>
          <RotateCcw size={15} />
          Try Again
        </button>
        <button onClick={onProgress} className={secondary}>
          <TrendingUp size={15} />
          Category Progress
        </button>
        <Link
          to={`/topics/${encodeURIComponent(course.category)}`}
          className={secondary}
        >
          <BookOpen size={15} />
          Return to Topic
        </Link>
      </div>
      <details className="mt-6 rounded-xl border border-border p-4 text-left">
        <summary className="cursor-pointer text-sm font-semibold text-primary">
          Review this activity
        </summary>
        <div className="mt-3 space-y-2">
          {outcomes.map((outcome, index) => {
            const word = course.words.find((item) => item.id === outcome.id)!
            return (
              <div
                key={`${outcome.id}-${index}`}
                className="rounded-lg bg-background p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => course.openWord(word)}
                    className="text-sm font-semibold text-primary"
                  >
                    {word.word}
                  </button>
                  <span className="text-xs">
                    {outcome.correct ? "Correct" : "Review"}
                  </span>
                </div>
                {!outcome.correct && outcome.answer && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Your answer: {outcome.answer}
                  </p>
                )}
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {word.definition}
                </p>
              </div>
            )
          })}
        </div>
      </details>
    </section>
  )
}
function QuizSession(props: QuizProps) {
  const {
    course,
    words,
    mode: activityMode,
    title,
    section,
    questionCount,
    onComplete,
  } = props
  const questionPool = [
    "picture",
    "word",
    "identify",
    "listen-choose",
    "spelling",
    "picture-challenge",
  ].includes(activityMode)
    ? visualVocabulary(words)
    : words
  const [round, setRound] = useState(0)
  const [questions, setQuestions] = useState(() =>
    shuffled(questionPool).slice(
      0,
      activityMode === "speed" ? questionPool.length : questionCount,
    ),
  )
  const [index, setIndex] = useState(0)
  const requestedMode =
    activityMode === "topic-review"
      ? [
          "picture",
          "word",
          course.data.preferences.audio ? "listening" : "multiple",
          "spelling",
          "multiple",
          "sentence",
        ][index % 6]
      : activityMode
  const unavailablePicture =
    !questions[index].image &&
    [
      "picture",
      "word",
      "identify",
      "listen-choose",
      "picture-challenge",
    ].includes(requestedMode)
  const mode = unavailablePicture ? "multiple" : requestedMode
  const [revealed, setRevealed] = useState(false)
  const [input, setInput] = useState("")
  const [feedback, setFeedback] = useState<ReviewOutcome | null>(null)
  const [outcomes, setOutcomes] = useState<ReviewOutcome[]>([])
  const [done, setDone] = useState(false)
  const [remaining, setRemaining] = useState(60)
  const [tiles, setTiles] = useState<number[]>([])
  const completion = useRef(false)
  const answers = useRef<ReviewOutcome[]>([])
  const word = questions[index]
  const [choices, setChoices] = useState<Word[]>([])
  const [letters, setLetters] = useState<string[]>([])
  const [related, setRelated] = useState<Word | null>(null)
  const writing = section === "write" || mode === "spelling"
  const isPictureChoice = ["word", "identify", "listen-choose"].includes(mode)
  useEffect(() => {
    const relation =
      course.words.find(
        (item) => item.id !== word.id && word.related.includes(item.id),
      ) ||
      course.words.find((item) => item.id !== word.id) ||
      word
    setRelated(relation)
    const correct = mode === "word-match" ? relation : word
    const distinct = shuffled(
      (isPictureChoice ? visualVocabulary(course.words) : course.words).filter(
        (item) =>
          item.id !== correct.id &&
          item.word !== correct.word &&
          (!isPictureChoice ||
            getVocabularyPhoto(item).src !== getVocabularyPhoto(correct).src),
      ),
    ).slice(0, 3)
    const fallback = shuffled(
      course.words.filter(
        (item) =>
          item.id !== correct.id &&
          item.word !== correct.word &&
          (!isPictureChoice || Boolean(item.image)) &&
          !distinct.some((choice) => choice.id === item.id),
      ),
    )
    setChoices(
      shuffled([
        correct,
        ...distinct,
        ...fallback.slice(0, 3 - distinct.length),
      ]),
    )
    setLetters(
      shuffled(
        normalized(word.word)
          .replace(/[^a-z]/g, "")
          .split(""),
      ),
    )
    course.visitWord(word)
  }, [index, round])
  function finish(next: ReviewOutcome[]) {
    if (completion.current) return
    completion.current = true
    setDone(true)
    if (next.length) onComplete(next)
  }
  useEffect(() => {
    if (mode !== "speed" || done) return
    const deadline = Date.now() + 60000
    const timer = setInterval(() => {
      const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000))
      setRemaining(seconds)
      if (!seconds) finish(answers.current)
    }, 250)
    return () => clearInterval(timer)
  }, [mode, round, done])
  function submit(answer: string, reveal = false) {
    if (feedback || done) return
    const correctWord = mode === "word-match" ? related || word : word
    const correct =
      !reveal &&
      (mode === "builder"
        ? answer.toLowerCase() ===
          normalized(correctWord.word).replace(/[^a-z]/g, "")
        : normalized(answer) === normalized(correctWord.word))
    const result = {
      id: correctWord.id,
      correct,
      answer: reveal
        ? "Answer revealed"
        : answer === "__review_again__"
          ? "Needs review"
          : answer,
    }
    const next = [...answers.current, result]
    answers.current = next
    setOutcomes(next)
    setFeedback(result)
  }
  function next() {
    if (index + 1 >= questions.length) finish(answers.current)
    else {
      setIndex((previous) => previous + 1)
      setInput("")
      setTiles([])
      setFeedback(null)
      setRevealed(false)
    }
  }
  function retry() {
    completion.current = false
    answers.current = []
    setQuestions(
      shuffled(questionPool).slice(
        0,
        activityMode === "speed" ? questionPool.length : questionCount,
      ),
    )
    setIndex(0)
    setInput("")
    setTiles([])
    setFeedback(null)
    setRevealed(false)
    setOutcomes([])
    setDone(false)
    setRemaining(60)
    setRound((previous) => previous + 1)
  }
  if (done) return <Result {...props} outcomes={outcomes} retry={retry} />
  const blankSentence = word.example.replace(
    new RegExp(word.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
    "______",
  )
  const instruction = writing
    ? mode === "dictation"
      ? "Type the word you hear."
      : !word.image
        ? "Use the meaning and audio to write the word."
        : mode === "missing"
          ? "Restore the missing letters. Write the whole word."
          : mode === "complete-word"
            ? "Complete the beginning. Write the whole word."
            : "Look at the picture and write the word."
    : mode === "review"
      ? "Do you remember this word?"
      : mode === "word"
        ? `Which picture represents “${word.word}”?`
        : mode === "identify"
          ? "Which picture matches this definition?"
          : mode === "listening"
            ? "Which word do you hear?"
            : mode === "listen-choose"
              ? "Which picture represents the word you hear?"
              : mode === "sentence" || mode === "choose"
                ? "Choose the missing word."
                : mode === "multiple"
                  ? "Which word matches this definition?"
                  : mode === "word-match"
                    ? `Explore a word related to “${word.word}”.`
                    : mode === "builder"
                      ? "Arrange the letters to build the word."
                      : "Which word matches this picture and clue?"
  return (
    <section className={`${card} mx-auto max-w-3xl p-5 md:p-7`}>
      <div className="mb-3 flex flex-wrap justify-between gap-3 text-xs">
        <span className="font-semibold text-primary">
          {course.category} · {title}
        </span>
        <span>
          {mode === "speed"
            ? `${remaining}s remaining`
            : `Question ${index + 1} of ${questions.length}`}{" "}
          · Score {outcomes.filter((item) => item.correct).length}
        </span>
      </div>
      <Meter
        value={
          mode === "speed"
            ? ((60 - remaining) / 60) * 100
            : (index / questions.length) * 100
        }
        label="Activity progress"
      />
      <h2 className="mb-5 mt-6 text-center font-display text-xl font-bold">
        {instruction}
      </h2>
      {unavailablePicture && (
        <p className="mb-4 rounded-xl bg-secondary p-3 text-center text-xs leading-5 text-muted-foreground">
          This word has no checked photograph yet. This question uses its
          definition instead—never an unrelated picture.
        </p>
      )}
      {["listening", "dictation", "listen-choose"].includes(mode) ? (
        <div className="mb-6 flex flex-col items-center gap-3 rounded-2xl bg-secondary p-8">
          <Headphones size={36} className="text-primary" />
          {course.audio(word.word)}
          <p className="text-xs text-muted-foreground">
            Play, pause, or listen again.
          </p>
        </div>
      ) : ["multiple", "identify", "word-match"].includes(mode) ? (
        <div className="mb-5 rounded-xl bg-secondary p-6 text-center">
          <p className="text-sm leading-6">
            {mode === "word-match" ? related?.definition : word.definition}
          </p>
          <span className="mt-3 inline-block text-xs text-primary">
            {word.group}
          </span>
        </div>
      ) : ["sentence", "choose"].includes(mode) ? (
        <div className="mb-5 rounded-xl bg-secondary p-6 text-center">
          <p className="text-lg leading-8">{blankSentence}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            Clue: {word.definition}
          </p>
        </div>
      ) : (
        mode !== "word" && (
          <div className="mb-5 rounded-2xl bg-secondary/50 p-4">
            <div className="flex justify-center">
              {course.art(word, "h-44 w-52")}
            </div>
            <p className="mt-2 text-center text-xs leading-5 text-muted-foreground">
              {word.definition}
            </p>
            {getVocabularyPhoto(word).kind === "context" && (
              <p className="mt-1 text-center text-xs text-muted-foreground">
                No verified image yet · {word.group}
              </p>
            )}
          </div>
        )
      )}
      {writing && mode !== "dictation" && (
        <div className="mb-4 flex items-center justify-center gap-3">
          {course.audio(word.word)}
          <span className="text-xs text-muted-foreground">
            Hear the word before writing
          </span>
        </div>
      )}
      {mode === "missing" && (
        <p className="mb-4 text-center font-mono text-xl tracking-widest">
          {word.word
            .split("")
            .map((letter, position) =>
              letter === " " || position % 2 === 0 ? letter : "_",
            )
            .join("")}
        </p>
      )}
      {mode === "complete-word" && (
        <p className="mb-4 text-center font-mono text-xl tracking-widest">
          {word.word.slice(0, 2)}
          {word.word.slice(2).replace(/[^ ]/g, "_")}
        </p>
      )}
      {mode === "review" ? (
        <div className="space-y-4 text-center">
          {!revealed ? (
            <button onClick={() => setRevealed(true)} className={primary}>
              Reveal word
            </button>
          ) : (
            <>
              <h3 className="font-display text-2xl font-bold">{word.word}</h3>
              <div className="flex items-center justify-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {word.pronunciation}
                </span>
                {course.audio(word.word)}
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                {word.example}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  disabled={Boolean(feedback)}
                  onClick={() => submit(word.word)}
                  className={primary}
                >
                  I remembered it
                </button>
                <button
                  disabled={Boolean(feedback)}
                  onClick={() => submit("__review_again__")}
                  className={secondary}
                >
                  Review again
                </button>
              </div>
            </>
          )}
        </div>
      ) : writing ? (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            submit(input)
          }}
          className="space-y-3"
        >
          <label
            htmlFor="category-written-answer"
            className="block text-xs font-semibold"
          >
            Your English word
          </label>
          <input
            id="category-written-answer"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={Boolean(feedback)}
            autoComplete="off"
            spellCheck={false}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base disabled:opacity-60"
            placeholder="Type the whole word…"
          />
          <div className="flex flex-wrap gap-2">
            <button
              disabled={!input.trim() || Boolean(feedback)}
              className={primary}
            >
              Check Answer
              <Check size={15} />
            </button>
            <button
              type="button"
              disabled={Boolean(feedback)}
              onClick={() => submit("", true)}
              className={secondary}
            >
              Show Answer
            </button>
          </div>
        </form>
      ) : mode === "builder" ? (
        <div>
          <p className="mb-3 text-center text-xs text-muted-foreground">
            Spaces and punctuation are added automatically.
          </p>
          <p
            aria-label="Built word"
            className="min-h-14 break-all rounded-xl border border-border bg-background p-4 text-center font-mono text-xl tracking-widest"
          >
            {tiles.map((position) => letters[position]).join("") ||
              "Choose your letter tiles"}
          </p>
          <div className="my-4 flex flex-wrap justify-center gap-2">
            {letters.map((letter, position) => (
              <button
                key={position}
                aria-label={`Letter ${letter}, tile ${position + 1}`}
                disabled={tiles.includes(position) || Boolean(feedback)}
                onClick={() => setTiles((previous) => [...previous, position])}
                className={`${secondary} min-w-11 uppercase`}
              >
                {letter}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setTiles((previous) => previous.slice(0, -1))}
              disabled={!tiles.length || Boolean(feedback)}
              className={secondary}
            >
              Undo letter
            </button>
            <button
              onClick={() =>
                submit(tiles.map((position) => letters[position]).join(""))
              }
              disabled={!tiles.length || Boolean(feedback)}
              className={primary}
            >
              Check word
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {choices.map((choice) => (
            <button
              key={choice.id}
              disabled={Boolean(feedback)}
              onClick={() => submit(choice.word)}
              aria-label={
                isPictureChoice
                  ? `Choose picture: ${choice.word}`
                  : `Choose word: ${choice.word}`
              }
              className={`rounded-xl border-2 p-3 text-sm font-semibold disabled:cursor-default ${
                feedback && feedback.id === choice.id
                  ? "border-primary bg-secondary"
                  : feedback?.answer === choice.word
                    ? "border-accent bg-accent/15"
                    : "border-border hover:border-primary/50 hover:bg-secondary/50"
              }`}
            >
              {isPictureChoice ? (
                <>
                  <div className="flex justify-center">
                    {course.art(choice, "h-24 w-28")}
                  </div>
                  <p className="mt-2 text-xs font-normal leading-5 text-muted-foreground">
                    {choice.definition}
                  </p>
                </>
              ) : (
                choice.word
              )}
            </button>
          ))}
        </div>
      )}
      {feedback && (
        <div
          role="status"
          className={`mt-5 rounded-xl p-4 ${
            feedback.correct
              ? "bg-secondary text-primary"
              : "bg-accent/15 text-foreground"
          }`}
        >
          <p className="text-sm font-semibold">
            {feedback.correct
              ? "Correct! Nicely done."
              : `The answer is “${course.words.find((item) => item.id === feedback.id)?.word}”. Keep going!`}
          </p>
          <p className="mt-2 text-xs leading-5">
            {course.words.find((item) => item.id === feedback.id)?.example}
          </p>
        </div>
      )}
      <div className="mt-5 flex justify-end">
        <button disabled={!feedback} onClick={next} className={primary}>
          {index + 1 === questions.length ? "See Results" : "Next question"}
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  )
}

interface PairProps extends SessionProps {
  memory: boolean
}
function PairGame(props: PairProps) {
  const { course, words, memory, onComplete } = props
  const [pairs, setPairs] = useState(() =>
    shuffled(visualVocabulary(words)).slice(0, 4),
  )
  const [right, setRight] = useState(() => shuffled(pairs))
  const [deck, setDeck] = useState(() =>
    shuffled(
      pairs.flatMap((word) => [
        { id: word.id, type: "word" },
        { id: word.id, type: "picture" },
      ]),
    ),
  )
  const [left, setLeft] = useState<string | null>(null)
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<string[]>([])
  const [failed, setFailed] = useState<string[]>([])
  const [feedback, setFeedback] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [done, setDone] = useState(false)
  const [outcomes, setOutcomes] = useState<ReviewOutcome[]>([])
  const delay = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(
    () => () => {
      if (delay.current) clearTimeout(delay.current)
    },
    [],
  )
  function check(first: string, second: string, distinct = true) {
    setAttempts((previous) => previous + 1)
    if (first === second && distinct) {
      const next = [...matched, first]
      setMatched(next)
      setLeft(null)
      setFlipped([])
      setFeedback("Correct pair! Keep going.")
      if (next.length === pairs.length) {
        const results = pairs.map((word) => ({
          id: word.id,
          correct: !failed.includes(word.id),
        }))
        setOutcomes(results)
        setDone(true)
        onComplete(results)
      }
    } else {
      setFailed((previous) => [...new Set([...previous, first])])
      setFeedback("Not a pair yet. Try again.")
      if (memory)
        delay.current = setTimeout(() => {
          setFlipped([])
        }, 900)
    }
  }
  function flip(index: number) {
    if (
      flipped.includes(index) ||
      flipped.length === 2 ||
      matched.includes(deck[index].id)
    )
      return
    const next = [...flipped, index]
    setFlipped(next)
    if (next.length === 2) {
      const first = deck[next[0]],
        second = deck[next[1]]
      if (first.id === second.id && first.type !== second.type)
        check(first.id, second.id)
      else check(first.id, second.id, false)
    }
  }
  function retry() {
    if (delay.current) clearTimeout(delay.current)
    const next = shuffled(visualVocabulary(words)).slice(0, 4)
    setPairs(next)
    setRight(shuffled(next))
    setDeck(
      shuffled(
        next.flatMap((word) => [
          { id: word.id, type: "word" },
          { id: word.id, type: "picture" },
        ]),
      ),
    )
    setLeft(null)
    setFlipped([])
    setMatched([])
    setFailed([])
    setFeedback("")
    setAttempts(0)
    setDone(false)
    setOutcomes([])
  }
  if (done) return <Result {...props} outcomes={outcomes} retry={retry} />
  return (
    <section className={`${card} mx-auto max-w-3xl p-5 md:p-7`}>
      <div className="mb-3 flex flex-wrap justify-between gap-2 text-xs">
        <span className="font-semibold text-primary">
          {course.category} · {props.title}
        </span>
        <span>
          {matched.length}/{pairs.length} pairs · {attempts} attempts
        </span>
      </div>
      <Meter
        value={(matched.length / pairs.length) * 100}
        label="Pairs matched"
      />
      <h2 className="mt-6 text-center font-display text-xl font-bold">
        {memory
          ? "Find a word and its picture."
          : "Choose a word, then its picture."}
      </h2>
      <p className="mb-6 mt-2 text-center text-xs text-muted-foreground">
        {pairs.some((word) => word.imageStatus === "verified")
          ? "Checked pictures include meaning clues."
          : "These words have no checked photos yet; match their definitions instead."}{" "}
        Every pair belongs to {course.category}.
      </p>
      {memory ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {deck.map((item, index) => {
            const word = pairs.find((word) => word.id === item.id)!
            const visible = flipped.includes(index) || matched.includes(item.id)
            return (
              <button
                key={index}
                onClick={() => flip(index)}
                disabled={matched.includes(item.id) || flipped.length === 2}
                aria-label={
                  visible
                    ? `${
                        item.type === "word" ? "Word" : "Picture"
                      }: ${word.word}`
                    : `Memory card ${index + 1}`
                }
                className={`min-h-36 rounded-xl border-2 p-3 ${
                  matched.includes(item.id)
                    ? "border-primary bg-secondary"
                    : "border-border bg-background hover:border-primary/40"
                }`}
              >
                {visible ? (
                  item.type === "word" ? (
                    <span className="text-sm font-semibold">{word.word}</span>
                  ) : (
                    <>
                      <div className="flex justify-center">
                        {course.art(word, "h-20 w-24")}
                      </div>
                      <span className="mt-2 block text-xs leading-4 text-muted-foreground">
                        {word.definition}
                      </span>
                    </>
                  )
                ) : (
                  <Layers size={28} className="mx-auto text-primary" />
                )}
              </button>
            )
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-3">
            {pairs.map((word) => (
              <button
                key={word.id}
                onClick={() => setLeft(word.id)}
                disabled={matched.includes(word.id)}
                aria-label={`Match word: ${word.word}`}
                className={`min-h-28 rounded-xl border-2 p-3 text-sm font-semibold ${
                  left === word.id || matched.includes(word.id)
                    ? "border-primary bg-secondary"
                    : "border-border bg-background hover:border-primary/40"
                }`}
              >
                {word.word}
                {matched.includes(word.id) && (
                  <Check size={14} className="ml-2 inline text-primary" />
                )}
              </button>
            ))}
          </div>
          <div className="grid gap-3">
            {right.map((word) => (
              <button
                key={word.id}
                onClick={() => left && check(left, word.id)}
                disabled={!left || matched.includes(word.id)}
                aria-label={`Match picture: ${word.word}`}
                className={`min-h-28 rounded-xl border-2 p-3 disabled:opacity-60 ${
                  matched.includes(word.id)
                    ? "border-primary bg-secondary"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <div className="flex justify-center">
                  {course.art(word, "h-20 w-24")}
                </div>
                <span className="mt-1 block text-xs leading-4 text-muted-foreground">
                  {word.definition}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
      <p role="status" className="mt-5 text-center text-sm text-primary">
        {feedback || "Take your time. Make the next connection."}
      </p>
    </section>
  )
}

interface DeckProps {
  course: CourseProps
  words: Word[]
  onProgress: () => void
}
function FlashcardDeck({ course, words, onProgress }: DeckProps) {
  const [deck, setDeck] = useState(words)
  const [index, setIndex] = useState(() => {
    const last = course.data.recent.find((id) =>
      words.some((word) => word.id === id),
    )
    return Math.max(
      0,
      words.findIndex((word) => word.id === last),
    )
  })
  const [flipped, setFlipped] = useState(false)
  const [front, setFront] = useState("Picture")
  const [rated, setRated] = useState<Record<string, boolean>>({})
  const [done, setDone] = useState(false)
  const word = deck[index]
  const saved = course.data.categoryCards[course.category] || {}
  const reviewed = words.filter((item) => saved[item.id]).length
  const known = words.filter((item) => saved[item.id] === "known").length
  useEffect(() => {
    course.visitWord(word)
    setFlipped(false)
  }, [word.id])
  function rate(correct: boolean) {
    course.update((previous) => ({
      ...previous,
      categoryCards: {
        ...previous.categoryCards,
        [course.category]: {
          ...(previous.categoryCards[course.category] || {}),
          [word.id]: correct ? "known" : "review",
        },
      },
      learned: correct
        ? [...new Set([...previous.learned, word.id])]
        : previous.learned,
      reviewed: [...new Set([...previous.reviewed, word.id])],
      activity: [
        ...previous.activity,
        {
          date: new Date().toISOString(),
          type: "reviewed" as const,
          target: word.id,
        },
      ].slice(-100),
    }))
    const next = { ...rated, [word.id]: correct }
    setRated(next)
    if (Object.keys(next).length === deck.length) finish(next)
    else {
      setIndex((index + 1) % deck.length)
      setFlipped(false)
    }
  }
  function finish(next = rated) {
    if (!Object.keys(next).length || done) return
    setDone(true)
    course.complete(
      "flashcards",
      "Flashcard Deck",
      Object.entries(next).map(([id, correct]) => ({ id, correct })),
    )
  }
  function retry() {
    setRated({})
    setDone(false)
    setIndex(0)
    setFlipped(false)
  }
  if (done)
    return (
      <section className={`${card} mx-auto max-w-2xl p-7 text-center`}>
        <Award size={44} className="mx-auto text-primary" />
        <h2 className="mt-4 font-display text-2xl font-bold">
          Deck session complete
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {Object.keys(rated).length} cards studied in {course.category}.{" "}
          {Object.values(rated).filter(Boolean).length} marked Known.
        </p>
        <p className="mt-2 text-xs text-primary">
          Category deck: {reviewed}/{words.length} reviewed · {known} known
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button onClick={retry} className={primary}>
            Study Again
            <RotateCcw size={15} />
          </button>
          <button onClick={onProgress} className={secondary}>
            Category Progress
            <TrendingUp size={15} />
          </button>
          <Link
            to={`/topics/${encodeURIComponent(course.category)}`}
            className={secondary}
          >
            Return to Topic
          </Link>
        </div>
      </section>
    )
  return (
    <section className={`${card} mx-auto max-w-3xl p-5 md:p-7`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold">
            {course.category} Flashcards
          </h2>
          <p className="mt-2 text-xs text-muted-foreground">
            {words.length} cards · {reviewed} reviewed · {known} known
          </p>
        </div>
        <div className="flex gap-2">
          <label className="sr-only" htmlFor="flashcard-front">
            Flashcard front
          </label>
          <select
            id="flashcard-front"
            value={front}
            onChange={(event) => {
              setFront(event.target.value)
              setFlipped(false)
            }}
            className="rounded-xl border border-border bg-background px-3 py-2 text-xs"
          >
            <option>Picture</option>
            <option>Word</option>
          </select>
          <button
            aria-label="Shuffle category deck"
            onClick={() => {
              setDeck(shuffled(deck))
              setIndex(0)
              setFlipped(false)
            }}
            className={secondary}
          >
            <Shuffle size={15} />
          </button>
        </div>
      </div>
      <div className="mb-2 mt-5 flex justify-between text-xs text-muted-foreground">
        <span>
          Card {index + 1} / {deck.length}
        </span>
        <span>
          {saved[word.id] === "known"
            ? "Known"
            : saved[word.id] === "review"
              ? "Needs review"
              : "New card"}
        </span>
      </div>
      <Meter
        value={(reviewed / words.length) * 100}
        label={`${course.category} flashcards reviewed`}
      />
      <div className="mt-5 rounded-2xl border border-border bg-secondary/30 p-5 text-center">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary">
            {flipped ? "BACK · MEANING" : "FRONT · RECALL"}
          </span>
          <div className="flex items-center gap-2">
            {course.audio(word.word)}
            <button
              onClick={() => course.favorite(word.id)}
              aria-label={`Favorite flashcard: ${word.word}`}
              aria-pressed={course.data.favorites.includes(word.id)}
              className="rounded-full p-2 text-primary"
            >
              <Heart
                size={19}
                className={
                  course.data.favorites.includes(word.id) ? "fill-primary" : ""
                }
              />
            </button>
          </div>
        </div>
        <button
          onClick={() => setFlipped(!flipped)}
          aria-label={flipped ? "Flip to the front" : "Flip flashcard"}
          aria-pressed={flipped}
          className="mt-3 min-h-64 w-full rounded-xl p-3 transition-colors hover:bg-secondary/60"
        >
          {flipped ? (
            <>
              <h3 className="font-display text-2xl font-bold">{word.word}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {word.pronunciation} · {word.partOfSpeech}
              </p>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-6">
                {word.definition}
              </p>
              <p className="mx-auto mt-4 max-w-lg text-sm italic leading-6 text-muted-foreground">
                “{word.example}”
              </p>
              <p className="mt-4 text-xs text-primary">
                Related:{" "}
                {word.related
                  .map(
                    (id) => course.words.find((item) => item.id === id)?.word,
                  )
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </>
          ) : front === "Word" ? (
            <h3 className="font-display text-3xl font-bold">{word.word}</h3>
          ) : (
            <>
              <div className="flex justify-center">
                {course.art(word, "h-44 w-52")}
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                {getVocabularyPhoto(word).kind === "context"
                  ? word.definition
                  : word.group}
              </p>
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          Tap the card or use Enter to flip.
        </p>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => {
            setIndex(index - 1)
            setFlipped(false)
          }}
          disabled={!index}
          className={secondary}
        >
          <ChevronLeft size={15} />
          Previous
        </button>
        <button onClick={() => rate(false)} className={secondary}>
          <RotateCcw size={15} />
          Review
        </button>
        <button onClick={() => rate(true)} className={primary}>
          <Check size={15} />
          Known
        </button>
        <button
          onClick={() => {
            setIndex(index + 1)
            setFlipped(false)
          }}
          disabled={index + 1 === deck.length}
          className={secondary}
        >
          Next
          <ChevronRight size={15} />
        </button>
      </div>
      <div className="mt-5 flex flex-wrap justify-between gap-3 border-t border-border pt-4 text-xs">
        <span className="text-muted-foreground">
          {Object.keys(rated).length} cards rated in this session
        </span>
        <button
          onClick={() => finish()}
          disabled={!Object.keys(rated).length}
          className="rounded-lg font-semibold text-primary disabled:opacity-40"
        >
          Finish this session
        </button>
      </div>
    </section>
  )
}
