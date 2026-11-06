import { useState } from "react"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Dumbbell,
  Sparkles,
  XCircle,
} from "lucide-react"
import { Link } from "react-router"

import { confusingWordLessons } from "./confusingWords"

export default function ConfusingWordsPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const correctCount = confusingWordLessons.filter(
    (lesson) => answers[lesson.id] === lesson.practice.answer,
  ).length
  const answeredCount = Object.keys(answers).length

  return (
    <div className="mx-auto max-w-6xl">
      <header className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-primary">
              <Sparkles size={15} aria-hidden="true" />
              Clearer everyday English
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Words people confuse
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Compare commonly confused words, hear them in natural sentences,
              and check your understanding with one short question per lesson.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-5 text-center">
            <p className="text-3xl font-bold text-primary">{correctCount}/5</p>
            <p className="mt-1 text-xs text-muted-foreground">
              correct · {answeredCount} answered
            </p>
          </div>
        </div>
      </header>

      <div className="mt-6 space-y-6">
        {confusingWordLessons.map((lesson, lessonIndex) => {
          const selected = answers[lesson.id]
          const correct = selected === lesson.practice.answer

          return (
            <article
              key={lesson.id}
              className="rounded-3xl border border-border bg-card p-5 sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                    Lesson {lessonIndex + 1}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                    {lesson.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {lesson.summary}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-secondary px-3 py-1.5 text-[10px] font-semibold text-primary">
                  Reviewed examples
                </span>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {lesson.words.map((item) => (
                  <section
                    key={item.wordId}
                    className="rounded-2xl border border-border bg-background p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-primary">
                        {item.word}
                      </h3>
                      <Link
                        to={`/dictionary?q=${encodeURIComponent(item.word)}&level=all`}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-border bg-card px-3 text-xs font-semibold hover:bg-secondary"
                      >
                        <BookOpen size={14} aria-hidden="true" />
                        Dictionary
                      </Link>
                    </div>
                    <p className="mt-3 text-sm leading-6">{item.meaning}</p>
                    <blockquote className="mt-3 rounded-xl bg-secondary/60 p-3 text-sm italic leading-6 text-muted-foreground">
                      “{item.example}”
                    </blockquote>
                    <Link
                      to={`/practice?word=${encodeURIComponent(item.wordId)}&level=all`}
                      className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl text-xs font-semibold text-primary hover:underline"
                    >
                      <Dumbbell size={15} aria-hidden="true" />
                      Practice {item.word}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </section>
                ))}
              </div>

              <section
                className="mt-5 rounded-2xl border border-border bg-secondary/35 p-4 sm:p-5"
                aria-labelledby={`practice-${lesson.id}`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                  Quick check
                </p>
                <h3 id={`practice-${lesson.id}`} className="mt-1 font-semibold">
                  {lesson.practice.prompt}
                </h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {lesson.words.map((item) => {
                    const isSelected = selected === item.word
                    return (
                      <button
                        key={item.word}
                        type="button"
                        onClick={() =>
                          setAnswers((current) => ({
                            ...current,
                            [lesson.id]: item.word,
                          }))
                        }
                        aria-pressed={isSelected}
                        className={`min-h-11 rounded-xl border px-4 py-2.5 text-left text-sm font-semibold ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card hover:bg-secondary"
                        }`}
                      >
                        {item.word}
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
                      <strong>
                        {correct ? "Correct. " : "Try the other word. "}
                      </strong>
                      {lesson.practice.explanation}
                    </span>
                  </div>
                ) : null}
              </section>
            </article>
          )
        })}
      </div>
    </div>
  )
}
