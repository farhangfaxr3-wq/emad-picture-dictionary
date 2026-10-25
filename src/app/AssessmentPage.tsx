import { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router"
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Clock3,
  GraduationCap,
  Headphones,
  LoaderCircle,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Target,
  Volume2,
} from "lucide-react"
import { cefrLabels, cefrLevels, type CEFRLevel } from "./cefr"
import {
  ASSESSMENT_BANK_VERSION,
  ASSESSMENT_QUESTION_COUNT,
  assessmentSkillLabels,
  resultRecommendations,
  scoreAssessment,
  selectAssessmentQuestions,
  type AssessmentQuestion,
  type AssessmentResult,
  type AssessmentSkill,
} from "./assessment"

const HISTORY_KEY = "emad-level-assessment-history"
const card = "rounded-[22px] border border-border bg-card shadow-sm"
const levelColors: Record<CEFRLevel, string> = {
  A1: "bg-[#e7f3ed] text-[#306b54]",
  A2: "bg-[#edf4df] text-[#5b7438]",
  B1: "bg-[#fff2d9] text-[#8a6229]",
  B2: "bg-[#f9e8dc] text-[#965e3a]",
  C1: "bg-[#eee8f7] text-[#665184]",
  C2: "bg-[#e7edf8] text-[#405d8f]",
}

function readHistory(): AssessmentResult[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]")
    return Array.isArray(parsed)
      ? parsed
          .filter(
            (result) =>
              result &&
              cefrLevels.includes(result.level) &&
              Number.isFinite(result.correct) &&
              Number.isFinite(result.total),
          )
          .slice(0, 12)
      : []
  } catch {
    return []
  }
}

function savePreferredLevel(level: CEFRLevel) {
  try {
    const current = JSON.parse(localStorage.getItem("emad-dictionary") || "{}")
    const next = {
      ...current,
      preferences: { ...current.preferences, cefrLevel: level },
    }
    localStorage.setItem("emad-dictionary", JSON.stringify(next))
    window.dispatchEvent(
      new CustomEvent("emad:assessment-level", { detail: level }),
    )
  } catch {}
}

function SkillIcon({ skill }: { skill: AssessmentSkill }) {
  if (skill === "listening") return <Headphones size={20} />
  if (skill === "reading") return <BookOpen size={20} />
  if (skill === "grammar") return <Sparkles size={20} />
  return <Target size={20} />
}

function IntroScreen({
  history,
  loading,
  onBegin,
}: {
  history: AssessmentResult[]
  loading: boolean
  onBegin: () => void
}) {
  const latest = history[0]
  const skills: { name: AssessmentSkill; count: number; description: string }[] = [
    { name: "vocabulary", count: 12, description: "Meaning and use in context" },
    { name: "grammar", count: 8, description: "Forms from A1 to C2" },
    { name: "reading", count: 5, description: "Main ideas and inference" },
    { name: "listening", count: 5, description: "Real audio comprehension" },
  ]
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[26px] bg-[#173c36] px-6 py-8 text-white sm:px-9 sm:py-10 lg:px-12">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#9ed8c8]">
            <GraduationCap size={15} /> CEFR-based placement
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[44px]">
            Discover your level.
            <br />
            <span className="text-[#76cfb8]">Improve your English.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            Complete a focused 30-question assessment and receive an estimated
            CEFR level, skill-by-skill feedback, and a learning pathway matched
            to your result.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/75">
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
              <Clock3 size={15} /> About 15-20 minutes
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
              <ShieldCheck size={15} /> Results stay on this device
            </span>
          </div>
          <button
            type="button"
            onClick={onBegin}
            disabled={loading}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#65c4aa] px-6 py-3 text-sm font-bold text-[#12382f] transition hover:bg-[#79d3ba] disabled:cursor-wait disabled:opacity-70"
          >
            {loading ? <LoaderCircle className="animate-spin" size={18} /> : <GraduationCap size={19} />}
            {loading ? "Preparing your assessment…" : "Test My English Level"}
            {!loading && <ArrowRight size={17} />}
          </button>
        </div>
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#75ceb5]/10" />
        <div className="pointer-events-none absolute right-10 top-10 hidden h-28 w-28 rotate-12 rounded-[30px] border border-white/10 bg-white/5 lg:block" />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <article key={skill.name} className={`${card} p-5`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
              <SkillIcon skill={skill.name} />
            </span>
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <h2 className="font-display text-base font-bold">
                {assessmentSkillLabels[skill.name]}
              </h2>
              <span className="text-[10px] font-semibold text-primary">{skill.count} questions</span>
            </div>
            <p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">
              {skill.description}
            </p>
          </article>
        ))}
      </section>

      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <section className={`${card} p-6`}>
          <h2 className="font-display text-xl font-bold">Before you begin</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              "Choose one answer for every question.",
              "Use headphones for the listening section.",
              "You can move backward and change answers.",
              "Do not use a dictionary during the assessment.",
            ].map((instruction) => (
              <div key={instruction} className="flex gap-3 text-xs leading-6 text-muted-foreground">
                <Check className="mt-1 shrink-0 text-primary" size={16} />
                <span>{instruction}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 border-t border-border pt-5 text-[11px] leading-6 text-muted-foreground">
            This is an informal CEFR-based estimate, not an official certificate.
            It assesses vocabulary, grammar, reading, and listening; it does not
            assess speaking or writing.
          </p>
        </section>

        <section className={`${card} p-6`}>
          <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-primary">
            Your latest result
          </p>
          {latest ? (
            <>
              <div className="mt-4 flex items-center gap-4">
                <span className={`flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-extrabold ${levelColors[latest.level]}`}>
                  {latest.level}
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold">{cefrLabels[latest.level]}</h2>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {latest.correct}/{latest.total} correct · {latest.percent}%
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[10px] leading-5 text-muted-foreground">
                Completed {new Date(latest.completedAt).toLocaleDateString()} on bank version {latest.bankVersion}.
              </p>
            </>
          ) : (
            <div className="mt-5 rounded-xl bg-secondary/60 p-4 text-xs leading-6 text-muted-foreground">
              No assessment result is stored on this device yet.
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function AssessmentQuestionView({
  item,
  selected,
  onSelect,
}: {
  item: AssessmentQuestion
  selected: number | undefined
  onSelect: (index: number) => void
}) {
  const [audioState, setAudioState] = useState<"idle" | "loading" | "playing" | "error">("idle")
  const audio = useRef<HTMLAudioElement | null>(null)
  const utterance = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(
    () => () => {
      if (audio.current) {
        audio.current.pause()
        audio.current.src = ""
        audio.current = null
      }
      if ("speechSynthesis" in window) window.speechSynthesis.cancel()
    },
    [item.id],
  )

  const playSpeechFallback = () => {
    if (!("speechSynthesis" in window) || !item.audioText) {
      setAudioState("error")
      return
    }
    const synthesis = window.speechSynthesis
    synthesis.cancel()
    const next = new SpeechSynthesisUtterance(item.audioText)
    next.lang = "en-GB"
    next.rate = 0.88
    next.volume = 1
    const voices = synthesis.getVoices()
    next.voice =
      voices.find((voice) => voice.lang.toLowerCase() === "en-gb") ||
      voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) ||
      null
    next.onstart = () => setAudioState("playing")
    next.onend = () => setAudioState("idle")
    next.onerror = () => setAudioState("error")
    utterance.current = next
    setAudioState("loading")
    synthesis.speak(next)
    window.setTimeout(() => synthesis.resume(), 80)
  }

  const play = async () => {
    if (audio.current) {
      audio.current.pause()
      audio.current.currentTime = 0
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel()

    if (!item.audioSrc) {
      playSpeechFallback()
      return
    }

    setAudioState("loading")
    const next = new Audio(item.audioSrc)
    next.preload = "auto"
    next.volume = 1
    audio.current = next
    let usedFallback = false
    const fallback = () => {
      if (usedFallback) return
      usedFallback = true
      audio.current = null
      playSpeechFallback()
    }
    next.onplaying = () => setAudioState("playing")
    next.onended = () => setAudioState("idle")
    next.onerror = fallback
    try {
      await next.play()
    } catch {
      fallback()
    }
  }

  const audioBusy = audioState === "loading" || audioState === "playing"

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-[10px] font-semibold text-primary">
          <SkillIcon skill={item.skill} /> {assessmentSkillLabels[item.skill]}
        </span>
        <span className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${levelColors[item.level]}`}>
          {item.level} · {cefrLabels[item.level]}
        </span>
      </div>

      {item.skill === "listening" && (
        <div className="mt-6 rounded-2xl border border-[#d6e7e2] bg-[#eef7f4] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#407666]">
            Listen before answering
          </p>
          <button
            type="button"
            onClick={() => void play()}
            disabled={audioBusy}
            className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground disabled:opacity-60"
          >
            {audioBusy ? <Volume2 className="animate-pulse" size={18} /> : <Headphones size={18} />}
            {audioState === "loading" ? "Loading audio…" : audioState === "playing" ? "Playing audio…" : "Play audio"}
          </button>
          <div aria-live="polite">
            {audioState === "error" ? (
              <p className="mt-3 rounded-lg bg-[#fff2dd] px-3 py-2 text-[10px] leading-5 text-[#8a6229]">
                Audio could not play. Check your device volume, then try again or use another browser.
              </p>
            ) : (
              <p className="mt-3 text-[10px] leading-5 text-[#64847a]">
                You may replay the recording. The transcript is intentionally hidden during the assessment.
              </p>
            )}
          </div>
        </div>
      )}

      {item.passage && (
        <div className="mt-6 rounded-2xl border border-[#eee0c8] bg-[#fdf8ef] p-5 text-sm leading-7 text-[#675842]">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[.16em] text-[#9b7845]">Reading passage</p>
          {item.passage}
        </div>
      )}

      <h2 className="mt-7 font-display text-xl font-bold leading-8 sm:text-2xl">
        {item.prompt}
      </h2>
      <div className="mt-6 grid gap-3">
        {item.options.map((option, index) => {
          const active = selected === index
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(index)}
              aria-pressed={active}
              className={`flex min-h-14 items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition sm:px-5 ${
                active
                  ? "border-primary bg-[#edf6f3] text-foreground shadow-sm"
                  : "border-border bg-background hover:border-primary/40 hover:bg-secondary/40"
              }`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="leading-6">{option}</span>
              {active && <Check className="ml-auto shrink-0 text-primary" size={18} />}
            </button>
          )
        })}
      </div>
    </>
  )
}

function ResultScreen({
  result,
  onRetake,
}: {
  result: AssessmentResult
  onRetake: () => void
}) {
  const [preferred, setPreferred] = useState<CEFRLevel>(result.level)
  const skillEntries = Object.entries(result.skills) as [AssessmentSkill, AssessmentResult["skills"][AssessmentSkill]][]
  const strongest = [...skillEntries].sort((a, b) => b[1].percent - a[1].percent)[0]
  const focus = [...skillEntries].sort((a, b) => a[1].percent - b[1].percent)[0]

  const chooseLevel = (level: CEFRLevel) => {
    setPreferred(level)
    savePreferredLevel(level)
  }

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[26px] bg-[#173c36] p-7 text-white sm:p-10">
        <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.17em] text-[#8ed0bd]">Your estimated level</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#69c7ad] text-3xl font-extrabold text-[#12372f] sm:h-24 sm:w-24 sm:text-4xl">
                {result.level}
              </span>
              <div>
                <h1 className="font-display text-3xl font-extrabold sm:text-4xl">{cefrLabels[result.level]}</h1>
                <p className="mt-2 text-sm text-white/65">Informal CEFR-based estimate</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/70">
              You answered <strong className="text-white">{result.correct} of {result.total}</strong> questions correctly. Difficulty-weighted evidence placed you at {result.level}.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:w-64">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-extrabold">{result.percent}%</p>
              <p className="mt-1 text-[10px] text-white/60">Overall accuracy</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-extrabold">{result.weightedPercent}%</p>
              <p className="mt-1 text-[10px] text-white/60">Weighted score</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${card} p-6 sm:p-7`}>
        <h2 className="font-display text-xl font-bold">Skill profile</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {skillEntries.map(([skill, score]) => (
            <div key={skill}>
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 font-semibold"><SkillIcon skill={skill} /> {assessmentSkillLabels[skill]}</span>
                <span className="text-muted-foreground">{score.correct}/{score.total} · {score.percent}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${score.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#edf6f3] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-primary">Your strength</p>
            <p className="mt-2 text-sm font-semibold">{assessmentSkillLabels[strongest[0]]}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">This was your strongest assessed skill at {strongest[1].percent}%.</p>
          </div>
          <div className="rounded-2xl bg-[#fdf6e9] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#9b7040]">Next focus</p>
            <p className="mt-2 text-sm font-semibold">{assessmentSkillLabels[focus[0]]}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">Regular practice here will give you the clearest next improvement.</p>
          </div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
        <section className={`${card} p-6 sm:p-7`}>
          <h2 className="font-display text-xl font-bold">Your recommended pathway</h2>
          <div className="mt-5 grid gap-3">
            {resultRecommendations(result.level).map((recommendation) => (
              <div key={recommendation} className="flex gap-3 rounded-xl bg-secondary/50 p-4 text-xs leading-6 text-muted-foreground">
                <Check className="mt-1 shrink-0 text-primary" size={16} />
                <span>{recommendation}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={`/dictionary?level=${result.level}`} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground">
              Explore {result.level} vocabulary <ArrowRight size={15} />
            </Link>
            <Link to={`/practice?level=${result.level}`} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-5 py-3 text-xs font-semibold">
              Practice at {result.level}
            </Link>
          </div>
        </section>

        <section className={`${card} p-6`}>
          <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-primary">Preferred learning level</p>
          <h2 className="mt-2 font-display text-lg font-bold">You stay in control.</h2>
          <p className="mt-2 text-xs leading-6 text-muted-foreground">Your result selected {result.level}, but you can choose another level for Dictionary and Practice.</p>
          <select
            value={preferred}
            onChange={(event) => chooseLevel(event.target.value as CEFRLevel)}
            className="mt-5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold"
            aria-label="Preferred learning level"
          >
            {cefrLevels.map((level) => <option key={level} value={level}>{level} · {cefrLabels[level]}</option>)}
          </select>
          <p className="mt-3 text-[10px] leading-5 text-muted-foreground">Saved only in this browser on this device.</p>
          <button type="button" onClick={onRetake} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary">
            <RefreshCcw size={15} /> Retake assessment
          </button>
        </section>
      </div>

      <section className="rounded-2xl border border-[#e8dfce] bg-[#fdf9f1] p-5 text-[11px] leading-6 text-[#746651]">
        <strong>How the estimate works:</strong> correct answers receive more weight at higher CEFR difficulties. The estimate is capped to one band above the highest level where at least half of the sampled questions were answered correctly. Bank version {result.bankVersion} preserves the meaning of this result over time. This is not an official CEFR certificate and does not assess speaking or writing.
      </section>
    </div>
  )
}

export default function AssessmentPage() {
  const [screen, setScreen] = useState<"intro" | "assessment" | "result">("intro")
  const [approved, setApproved] = useState<AssessmentQuestion[]>([])
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([])
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [confirmSubmit, setConfirmSubmit] = useState(false)
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [history, setHistory] = useState<AssessmentResult[]>(readHistory)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetch("/api/assessment/questions")
      .then(async (response) => {
        if (!response.ok) return []
        const payload = await response.json()
        return Array.isArray(payload.questions) ? payload.questions : []
      })
      .then((items) => {
        if (active) setApproved(items)
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  const begin = () => {
    const selected = selectAssessmentQuestions(approved)
    setQuestions(selected)
    setAnswers({})
    setCurrentIndex(0)
    setResult(null)
    setConfirmSubmit(false)
    setScreen("assessment")
  }

  const finish = () => {
    const next = scoreAssessment(questions, answers)
    const nextHistory = [next, ...history].slice(0, 12)
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory))
    } catch {}
    savePreferredLevel(next.level)
    setHistory(nextHistory)
    setResult(next)
    setConfirmSubmit(false)
    setScreen("result")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const current = questions[currentIndex]
  const answeredCount = Object.keys(answers).length
  const progress = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0
  const unanswered = questions.length - answeredCount
  const groupedProgress = useMemo(
    () =>
      Object.fromEntries(
        (["vocabulary", "grammar", "reading", "listening"] as AssessmentSkill[]).map((skill) => [
          skill,
          questions.filter((item) => item.skill === skill && answers[item.id] !== undefined).length,
        ]),
      ) as Record<AssessmentSkill, number>,
    [answers, questions],
  )

  if (screen === "intro") {
    return <IntroScreen history={history} loading={loading} onBegin={begin} />
  }

  if (screen === "result" && result) {
    return <ResultScreen result={result} onRetake={begin} />
  }

  if (!current) return null

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={() => setScreen("intro")} className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
          <ArrowLeft size={15} /> Exit assessment
        </button>
        <p className="text-[10px] text-muted-foreground">Bank {ASSESSMENT_BANK_VERSION} · Results stay on this device</p>
      </div>

      <section className={`${card} overflow-hidden`}>
        <div className="border-b border-border bg-secondary/35 px-5 py-4 sm:px-7">
          <div className="flex items-center justify-between gap-4 text-[10px] font-semibold text-muted-foreground">
            <span>Question {currentIndex + 1} of {questions.length}</span>
            <span>{answeredCount} answered</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-background">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="p-5 sm:p-7 lg:p-9">
          <AssessmentQuestionView
            key={current.id}
            item={current}
            selected={answers[current.id]}
            onSelect={(index) => setAnswers((currentAnswers) => ({ ...currentAnswers, [current.id]: index }))}
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-border bg-secondary/20 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <button
            type="button"
            onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
            disabled={currentIndex === 0}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-xs font-semibold disabled:opacity-40"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          {currentIndex < questions.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentIndex((index) => index + 1)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground"
            >
              Next question <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmSubmit(true)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground"
            >
              Review and submit <Award size={16} />
            </button>
          )}
        </div>
      </section>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {(["vocabulary", "grammar", "reading", "listening"] as AssessmentSkill[]).map((skill) => (
          <div key={skill} className="rounded-xl border border-border bg-card px-3 py-2.5 text-[10px] text-muted-foreground">
            <span className="font-semibold text-foreground">{assessmentSkillLabels[skill]}</span>
            <span className="ml-1">· {groupedProgress[skill]}</span>
          </div>
        ))}
      </div>

      {confirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#132f2b]/55 p-3 sm:items-center" role="dialog" aria-modal="true" aria-labelledby="submit-title">
          <section className="w-full max-w-md rounded-[22px] bg-card p-6 shadow-2xl sm:p-7">
            <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${unanswered ? "bg-[#fff2dd] text-[#a16e2d]" : "bg-secondary text-primary"}`}>
              {unanswered ? <CircleAlert size={23} /> : <Check size={23} />}
            </span>
            <h2 id="submit-title" className="mt-5 font-display text-xl font-bold">Submit your assessment?</h2>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              {unanswered
                ? `${unanswered} question${unanswered === 1 ? " is" : "s are"} unanswered. Unanswered questions will be marked incorrect.`
                : "All 30 questions are answered. Your result will be calculated and saved on this device."}
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
              <button type="button" onClick={finish} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground">
                Submit assessment <ArrowRight size={15} />
              </button>
              <button type="button" onClick={() => setConfirmSubmit(false)} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-border px-5 py-3 text-xs font-semibold">
                Continue reviewing
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
