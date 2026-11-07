import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Compass,
  GraduationCap,
  House,
  MapPinned,
  Plane,
  Route,
  Sparkles,
  Target,
} from "lucide-react"
import { Link, useSearchParams } from "react-router"

import { cefrLabels } from "./cefr"
import {
  learningPaths,
  learningPathStepUrl,
  type LearningPathDefinition,
  type LearningPathStep,
} from "./learningPaths"
import type { Stored } from "./learningStore"
import { vocabulary } from "./vocabulary"

interface LearningPathsPageProps {
  data: Stored
}

const pathIcons = {
  "everyday-english": House,
  "english-for-university": GraduationCap,
  "english-for-travel": Plane,
}

const pathColors = {
  "everyday-english": "bg-[#e8f3ed] text-[#2f6b58]",
  "english-for-university": "bg-[#edf0f8] text-[#4e5f91]",
  "english-for-travel": "bg-[#fff1df] text-[#8a5b2e]",
}

function wordsForStep(step: LearningPathStep) {
  return vocabulary.filter(
    (word) => word.topic === step.topic && word.cefr?.level === step.cefr,
  )
}

function stepProgress(step: LearningPathStep, data: Stored) {
  const words = wordsForStep(step)
  const learned = words.filter((word) => data.learned.includes(word.id)).length
  const vocabularyProgress = words.length ? (learned / words.length) * 100 : 0
  const matchingSessions = data.sessions.filter(
    (session) =>
      session.topic === step.topic &&
      (step.section === "vocabulary" ||
        session.section === step.section ||
        (!session.section && step.section === "practice")),
  )
  const bestSession = matchingSessions.reduce(
    (best, session) => Math.max(best, (session.score / session.total) * 100),
    0,
  )
  const progress =
    step.section === "vocabulary"
      ? vocabularyProgress
      : Math.max(vocabularyProgress, bestSession)

  return {
    progress: Math.round(progress),
    learned,
    total: words.length,
    sessions: matchingSessions.length,
    complete: progress >= 80,
  }
}

function pathProgress(path: LearningPathDefinition, data: Stored) {
  const steps = path.steps.map((step) => stepProgress(step, data))
  return Math.round(
    steps.reduce((total, step) => total + step.progress, 0) / steps.length,
  )
}

export default function LearningPathsPage({ data }: LearningPathsPageProps) {
  const [params, setParams] = useSearchParams()
  const selectedPath =
    learningPaths.find((path) => path.id === params.get("path")) ||
    learningPaths[0]
  const currentStepIndex = selectedPath.steps.findIndex(
    (step) => !stepProgress(step, data).complete,
  )
  const nextStepIndex = currentStepIndex === -1 ? 0 : currentStepIndex
  const nextStep = selectedPath.steps[nextStepIndex]
  const overallProgress = pathProgress(selectedPath, data)

  return (
    <div className="mx-auto max-w-6xl">
      <header className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-primary">
              <MapPinned size={16} aria-hidden="true" />A clear route through
              what you already have
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Goal-based learning paths
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Choose a goal, follow four focused steps, and keep using the same
              vocabulary, practice activities and private progress you already
              know.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-5 text-center">
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="mt-1 text-xs text-muted-foreground">
              guided learning routes
            </p>
          </div>
        </div>
      </header>

      <nav
        aria-label="Choose a learning path"
        className="mt-6 grid gap-3 md:grid-cols-3"
      >
        {learningPaths.map((path) => {
          const Icon = pathIcons[(path.id as keyof typeof pathIcons)]
          const selected = path.id === selectedPath.id
          const progress = pathProgress(path, data)
          return (
            <button
              key={path.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setParams({ path: path.id })}
              className={`min-h-28 rounded-2xl border p-4 text-left transition ${
                selected
                  ? "border-primary bg-secondary shadow-sm"
                  : "border-border bg-card hover:border-primary/50 hover:bg-secondary/45"
              }`}
            >
              <span className="flex items-start gap-3">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${pathColors[(path.id as keyof typeof pathColors)]}`}
                >
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base font-bold">
                    {path.title}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {progress}% complete
                  </span>
                </span>
              </span>
              <span className="mt-3 block h-1.5 overflow-hidden rounded-full bg-muted">
                <span
                  className="block h-full rounded-full bg-primary"
                  style={{ width: `${progress}%` }}
                />
              </span>
            </button>
          )
        })}
      </nav>

      <section className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              {selectedPath.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              {selectedPath.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              {selectedPath.description}
            </p>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-secondary/55 p-4">
              <Target
                className="mt-0.5 shrink-0 text-primary"
                size={19}
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold">Your goal</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {selectedPath.outcome}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-muted-foreground">Path progress</p>
                <p className="mt-1 font-display text-3xl font-bold text-primary">
                  {overallProgress}%
                </p>
              </div>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Compass size={27} aria-hidden="true" />
              </span>
            </div>
            <div
              role="progressbar"
              aria-label={`${selectedPath.title} progress`}
              aria-valuenow={overallProgress}
              aria-valuemin={0}
              aria-valuemax={100}
              className="mt-4 h-2 overflow-hidden rounded-full bg-muted"
            >
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="mt-3 text-[11px] leading-5 text-muted-foreground">
              Calculated from your existing learned words and completed activity
              sessions.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mt-6 rounded-3xl border border-primary/30 bg-secondary/55 p-5 sm:p-6"
        aria-labelledby="next-step-heading"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                {currentStepIndex === -1
                  ? "Path complete · revisit any step"
                  : "Recommended next"}
              </p>
              <h2
                id="next-step-heading"
                className="mt-1 font-display text-lg font-bold"
              >
                {nextStep.title}
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Step {nextStepIndex + 1} · {nextStep.topic} · {nextStep.cefr}{" "}
                {cefrLabels[nextStep.cefr]}
              </p>
            </div>
          </div>
          <Link
            to={learningPathStepUrl(nextStep)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            {nextStep.action}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mt-6" aria-labelledby="path-steps-heading">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              Follow the route
            </p>
            <h2
              id="path-steps-heading"
              className="mt-1 font-display text-2xl font-bold"
            >
              Four focused steps
            </h2>
          </div>
          <span className="hidden text-xs text-muted-foreground sm:block">
            You can revisit any step at any time.
          </span>
        </div>

        <ol className="mt-4 space-y-4">
          {selectedPath.steps.map((step, index) => {
            const status = stepProgress(step, data)
            const isNext = index === nextStepIndex && currentStepIndex !== -1
            return (
              <li
                key={step.id}
                className={`rounded-2xl border bg-card p-5 ${
                  isNext ? "border-primary shadow-sm" : "border-border"
                }`}
              >
                <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl font-display text-sm font-bold ${
                      status.complete
                        ? "bg-primary text-primary-foreground"
                        : isNext
                          ? "bg-secondary text-primary"
                          : "bg-muted text-muted-foreground"
                    }`}
                    aria-label={
                      status.complete
                        ? `Step ${index + 1} complete`
                        : `Step ${index + 1}`
                    }
                  >
                    {status.complete ? (
                      <Check size={19} aria-hidden="true" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-bold">
                        {step.title}
                      </h3>
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-primary">
                        {step.cefr} · {cefrLabels[step.cefr]}
                      </span>
                      {isNext ? (
                        <span className="rounded-full border border-primary/40 px-2.5 py-1 text-[10px] font-semibold text-primary">
                          Next
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                      <span>{step.topic}</span>
                      <span>
                        {status.learned} of {status.total} words learned
                      </span>
                      {step.section !== "vocabulary" ? (
                        <span>{status.sessions} activity sessions</span>
                      ) : null}
                    </div>
                    <div
                      role="progressbar"
                      aria-label={`${step.title} progress`}
                      aria-valuenow={status.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"
                    >
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${status.progress}%` }}
                      />
                    </div>
                  </div>
                  <Link
                    to={learningPathStepUrl(step)}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold hover:bg-secondary"
                  >
                    {step.section === "vocabulary" ? (
                      <BookOpen size={16} aria-hidden="true" />
                    ) : (
                      <Route size={16} aria-hidden="true" />
                    )}
                    {step.action}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>
      </section>

      <aside className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-xs leading-5 text-muted-foreground">
        <CheckCircle2
          className="mt-0.5 shrink-0 text-primary"
          size={17}
          aria-hidden="true"
        />
        <p>
          These paths organize existing content only. They do not duplicate
          vocabulary, change your saved progress, or create a separate account
          or tracking system.
        </p>
      </aside>
    </div>
  )
}
