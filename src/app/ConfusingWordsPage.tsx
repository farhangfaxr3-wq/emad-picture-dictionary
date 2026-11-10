import { useEffect, useMemo, useState } from "react"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Headphones,
  Lightbulb,
  Search,
  Sparkles,
  XCircle,
} from "lucide-react"
import { Link } from "react-router"

import {
  confusingWordLessons,
  type ConfusionDifficulty,
  type ConfusionType,
} from "./confusingWords"

type ChallengeMode = "choose" | "fix"

const types = [
  "All types",
  "Meaning",
  "Similar spelling",
  "Sound-alike",
  "Grammar and usage",
  "Academic English",
] as const
const difficulties = ["All levels", "A1", "A2", "B1", "B2", "C1", "C2"] as const
const LESSON_PAGE_SIZE = 12
const PROGRESS_KEY = "emad-confusing-words-progress-v1"

function readSavedAnswers() {
  if (typeof window === "undefined") return {}
  try {
    const saved: unknown = JSON.parse(
      window.localStorage.getItem(PROGRESS_KEY) || "{}",
    )
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {}
    return Object.fromEntries(
      Object.entries(saved).filter(
        (entry): entry is [string, string] => typeof entry[1] === "string",
      ),
    )
  } catch {
    return {}
  }
}

export default function ConfusingWordsPage() {
  const [query, setQuery] = useState("")
  const [type, setType] = useState<typeof types[number]>("All types")
  const [difficulty, setDifficulty] =
    useState<typeof difficulties[number]>("All levels")
  const [mode, setMode] = useState<ChallengeMode>("choose")
  const [answers, setAnswers] =
    useState<Record<string, string>>(readSavedAnswers)
  const [visibleCount, setVisibleCount] = useState(LESSON_PAGE_SIZE)

  const filteredLessons = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("en")
    return confusingWordLessons.filter((lesson) => {
      const matchesQuery =
        !normalized ||
        lesson.title.toLocaleLowerCase("en").includes(normalized) ||
        lesson.words.some((item) =>
          item.word.toLocaleLowerCase("en").includes(normalized),
        )
      const matchesType = type === "All types" || lesson.type === type
      const matchesDifficulty =
        difficulty === "All levels" || lesson.difficulty === difficulty
      return matchesQuery && matchesType && matchesDifficulty
    })
  }, [difficulty, query, type])

  useEffect(() => {
    setVisibleCount(LESSON_PAGE_SIZE)
  }, [difficulty, query, type])

  useEffect(() => {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(answers))
  }, [answers])

  const visibleLessons = filteredLessons.slice(0, visibleCount)

  const answerKey = (lessonId: string) => `${lessonId}:${mode}`
  const correctCount = confusingWordLessons.reduce((count, lesson) => {
    const challenge = mode === "choose" ? lesson.choose : lesson.fix
    return count + (answers[answerKey(lesson.id)] === challenge.answer ? 1 : 0)
  }, 0)
  const answeredCount = confusingWordLessons.filter(
    (lesson) => answers[answerKey(lesson.id)],
  ).length

  return (
    <div className="mx-auto max-w-6xl">
      <header className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-primary">
              <Sparkles size={15} aria-hidden="true" />
              Compare · notice · choose
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Words people confuse
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Search {confusingWordLessons.length} reviewed lessons, compare
              meanings and collocations, then practise with immediate
              explanations.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-5 text-center">
            <p className="text-3xl font-bold text-primary">
              {correctCount}/{confusingWordLessons.length}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              correct · {answeredCount} answered
            </p>
          </div>
        </div>
      </header>

      <section
        className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-6"
        aria-labelledby="lesson-filters"
      >
        <h2 id="lesson-filters" className="font-display text-lg font-bold">
          Find a confusion lesson
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <label className="relative">
            <span className="sr-only">Search confusion lessons</span>
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search affect, borrow, cite…"
              className="min-h-12 w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <label>
            <span className="sr-only">Filter by confusion type</span>
            <select
              value={type}
              onChange={(event) =>
                setType(event.target.value as ConfusionType | "All types")
              }
              className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-sm font-semibold md:w-48"
            >
              {types.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">Filter by difficulty</span>
            <select
              value={difficulty}
              onChange={(event) =>
                setDifficulty(
                  event.target.value as ConfusionDifficulty | "All levels",
                )
              }
              className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-sm font-semibold md:w-36"
            >
              {difficulties.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <div
          className="mt-4 grid grid-cols-2 rounded-xl border border-border bg-background p-1"
          aria-label="Challenge mode"
        >
          <button
            type="button"
            onClick={() => setMode("choose")}
            aria-pressed={mode === "choose"}
            className={`min-h-11 rounded-lg px-3 text-sm font-semibold ${
              mode === "choose"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
          >
            Choose the right word
          </button>
          <button
            type="button"
            onClick={() => setMode("fix")}
            aria-pressed={mode === "fix"}
            className={`min-h-11 rounded-lg px-3 text-sm font-semibold ${
              mode === "fix"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
          >
            Fix the sentence
          </button>
        </div>
      </section>

      <p className="mt-5 text-sm text-muted-foreground" role="status">
        Showing {visibleLessons.length} of {filteredLessons.length} matching
        lessons · {confusingWordLessons.length} reviewed lessons in total
      </p>
      <div className="mt-3 space-y-6">
        {visibleLessons.map((lesson) => {
          const challenge = mode === "choose" ? lesson.choose : lesson.fix
          const key = answerKey(lesson.id)
          const selected = answers[key]
          const correct = selected === challenge.answer

          return (
            <article
              key={lesson.id}
              className="rounded-3xl border border-border bg-card p-5 sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    <span>{lesson.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>{lesson.difficulty}</span>
                  </div>
                  <h2 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                    {lesson.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {lesson.summary}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-secondary px-3 py-1.5 text-[10px] font-semibold text-primary">
                  Reviewed lesson
                </span>
              </div>

              <div
                className={`mt-5 grid gap-4 ${
                  lesson.words.length > 2
                    ? "md:grid-cols-2 xl:grid-cols-4"
                    : "md:grid-cols-2"
                }`}
              >
                {lesson.words.map((item) => {
                  return (
                    <section
                      key={item.word}
                      className="rounded-2xl border border-border bg-background p-4 sm:p-5"
                    >
                      <h3 className="font-display text-xl font-bold text-primary">
                        {item.word}
                      </h3>
                      <p className="mt-3 text-sm leading-6">{item.meaning}</p>
                      <blockquote className="mt-3 rounded-xl bg-secondary/60 p-3 text-sm italic leading-6 text-muted-foreground">
                        “{item.example}”
                      </blockquote>
                      <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                        Common collocations
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {item.collocations.map((collocation) => (
                          <li
                            key={collocation}
                            className="rounded-full bg-secondary px-2.5 py-1 text-[10px]"
                          >
                            {collocation}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.wordId ? (
                          <Link
                            to={`/dictionary?q=${encodeURIComponent(item.word)}&level=all`}
                            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-border bg-card px-3 text-xs font-semibold hover:bg-secondary"
                          >
                            <BookOpen size={14} aria-hidden="true" />
                            Dictionary
                          </Link>
                        ) : null}
                        {item.wordId ? (
                          <Link
                            to={`/pronunciation-studio?word=${encodeURIComponent(item.wordId!)}`}
                            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-border bg-card px-3 text-xs font-semibold hover:bg-secondary"
                          >
                            <Headphones size={14} aria-hidden="true" />
                            Pronunciation
                          </Link>
                        ) : null}
                        <a
                          href={`https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(item.word.toLocaleLowerCase("en").replace(/\s+/g, "-"))}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-border bg-card px-3 text-xs font-semibold hover:bg-secondary"
                        >
                          Cambridge sense
                        </a>
                        <a
                          href={`https://www.ldoceonline.com/dictionary/${encodeURIComponent(item.word.toLocaleLowerCase("en").replace(/\s+/g, "-"))}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-border bg-card px-3 text-xs font-semibold hover:bg-secondary"
                        >
                          Longman usage
                        </a>
                      </div>
                    </section>
                  )
                })}
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <section className="rounded-2xl bg-secondary/55 p-4 sm:p-5">
                  <p className="flex items-center gap-2 text-xs font-bold text-primary">
                    <Lightbulb size={16} aria-hidden="true" />
                    Quick rule
                  </p>
                  <p className="mt-2 text-sm leading-6">{lesson.quickRule}</p>
                  {lesson.exception ? (
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      <strong>Useful exception:</strong> {lesson.exception}
                    </p>
                  ) : null}
                </section>
                <section className="rounded-2xl border border-border bg-background p-4 sm:p-5">
                  <p className="text-xs font-bold text-muted-foreground">
                    Realistic correction
                  </p>
                  <p className="mt-2 text-sm text-[#8a3026] line-through dark:text-[#ffb4aa]">
                    {lesson.mistake}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    {lesson.correction}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {lesson.why}
                  </p>
                </section>
              </div>

              <section
                className="mt-5 rounded-2xl border border-border bg-secondary/35 p-4 sm:p-5"
                aria-labelledby={`practice-${lesson.id}`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {mode === "choose"
                    ? "Choose the right word"
                    : "Fix the sentence"}
                </p>
                <h3 id={`practice-${lesson.id}`} className="mt-1 font-semibold">
                  {challenge.prompt}
                </h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {challenge.options.map((option) => {
                    const isSelected = selected === option
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setAnswers((current) => ({
                            ...current,
                            [key]: option,
                          }))
                        }
                        aria-pressed={isSelected}
                        className={`min-h-11 rounded-xl border px-4 py-2.5 text-left text-sm font-semibold ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card hover:bg-secondary"
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
                {selected ? (
                  <div
                    role="status"
                    className={`mt-3 flex items-start gap-2 rounded-xl p-3 text-sm leading-6 ${
                      correct
                        ? "bg-secondary text-primary"
                        : "bg-[#fff2ed] text-[#7a352b] dark:bg-[#432b28] dark:text-[#ffc0b7]"
                    }`}
                  >
                    {correct ? (
                      <CheckCircle2
                        className="mt-0.5 shrink-0"
                        size={17}
                        aria-hidden="true"
                      />
                    ) : (
                      <XCircle
                        className="mt-0.5 shrink-0"
                        size={17}
                        aria-hidden="true"
                      />
                    )}
                    <span>
                      <strong>{correct ? "Correct. " : "Not quite. "}</strong>
                      {challenge.explanation}
                    </span>
                  </div>
                ) : null}
              </section>
            </article>
          )
        })}
      </div>

      {visibleLessons.length < filteredLessons.length ? (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + LESSON_PAGE_SIZE, filteredLessons.length),
              )
            }
            className="min-h-11 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Load{" "}
            {Math.min(
              LESSON_PAGE_SIZE,
              filteredLessons.length - visibleLessons.length,
            )}{" "}
            more lessons
          </button>
        </div>
      ) : null}

      {!filteredLessons.length ? (
        <section className="mt-6 rounded-3xl border border-border bg-card p-8 text-center">
          <h2 className="font-display text-xl font-bold">No matching lesson</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Clear the search or choose a different type and level.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setType("All types")
              setDifficulty("All levels")
            }}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
          >
            Reset filters
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </section>
      ) : null}
    </div>
  )
}
