import { useEffect, useMemo, useState } from "react"
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Database,
  LoaderCircle,
  RefreshCcw,
  ShieldCheck,
  XCircle,
} from "lucide-react"
import {
  assessmentSkillLabels,
  generateVocabularyQuestionCandidates,
  type AssessmentQuestion,
} from "./assessment"
import { cefrLabels } from "./cefr"

type ReviewStatus = "draft" | "approved" | "rejected" | "needs-review"
type ReviewQuestion = AssessmentQuestion & {
  status: ReviewStatus
  createdAt?: string
  reviewedAt?: string | null
}

const card = "rounded-2xl border border-border bg-card text-card-foreground shadow-sm"
const SYNC_KEY = "emad-assessment-candidate-fingerprint"

function fingerprint(items: AssessmentQuestion[]) {
  let hash = 2166136261
  for (const item of items) {
    const value = `${item.id}|${item.level}|${item.prompt}|${item.options.join("|")}`
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index)
      hash = Math.imul(hash, 16777619)
    }
  }
  return `${items.length}:${hash >>> 0}`
}

export default function AssessmentReviewPanel({ active }: { active: boolean }) {
  const candidates = useMemo(() => generateVocabularyQuestionCandidates(), [])
  const [records, setRecords] = useState<ReviewQuestion[]>([])
  const [filter, setFilter] = useState<ReviewStatus>("draft")
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle")
  const [message, setMessage] = useState("")
  const [syncing, setSyncing] = useState(false)

  const load = async (nextFilter = filter) => {
    setStatus("loading")
    setMessage("")
    try {
      const response = await fetch(
        `/api/admin/assessment/questions?status=${nextFilter}`,
      )
      const result = await response.json()
      if (!response.ok || !Array.isArray(result.questions)) {
        throw new Error(result.message || "Assessment questions could not be loaded.")
      }
      setRecords(result.questions)
      setStatus("ready")
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to load the assessment bank.")
      setStatus("error")
    }
  }

  const syncCandidates = async (force = false) => {
    const currentFingerprint = fingerprint(candidates)
    if (!force && localStorage.getItem(SYNC_KEY) === currentFingerprint) return
    setSyncing(true)
    setMessage("")
    try {
      let created = 0
      for (let index = 0; index < candidates.length; index += 60) {
        const response = await fetch("/api/admin/assessment/questions/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ questions: candidates.slice(index, index + 60) }),
        })
        const result = await response.json()
        if (!response.ok) throw new Error(result.message || "Candidate sync failed.")
        created += Number(result.created || 0)
      }
      localStorage.setItem(SYNC_KEY, currentFingerprint)
      setMessage(
        created
          ? `${created} new draft question candidate${created === 1 ? "" : "s"} prepared for review.`
          : "The draft candidate bank is up to date.",
      )
      await load()
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Candidate sync failed.")
      setStatus("error")
    } finally {
      setSyncing(false)
    }
  }

  useEffect(() => {
    if (!active) return
    void syncCandidates()
  }, [active])

  useEffect(() => {
    if (active) void load(filter)
  }, [active, filter])

  const review = async (record: ReviewQuestion, nextStatus: ReviewStatus) => {
    setMessage("")
    try {
      const response = await fetch(`/api/admin/assessment/questions/${record.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || "The assessment review was not saved.")
      setRecords((current) => current.filter((item) => item.id !== record.id))
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "The assessment review was not saved.")
      setStatus("error")
    }
  }

  if (!active) return null

  return (
    <section className={`${card} mt-7 p-5 sm:p-6`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
            <Database size={21} />
          </span>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.15em] text-primary">
              Versioned assessment bank
            </p>
            <h2 className="mt-1 font-display text-lg font-bold">Review automatic question candidates</h2>
            <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
              New vocabulary prepares deterministic drafts. Only approved questions can enter a learner assessment.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value as ReviewStatus)}
            aria-label="Filter assessment question status"
            className="rounded-xl border border-border bg-background px-4 py-3 text-xs"
          >
            <option value="draft">Draft candidates</option>
            <option value="needs-review">Needs review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <button
            type="button"
            onClick={() => void syncCandidates(true)}
            disabled={syncing}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-xs font-semibold disabled:opacity-60"
          >
            {syncing ? <LoaderCircle className="animate-spin" size={15} /> : <RefreshCcw size={15} />}
            Scan new content
          </button>
        </div>
      </div>

      {message && (
        <div className={`mt-5 flex gap-3 rounded-xl border p-4 text-xs leading-5 ${status === "error" ? "border-danger/35 bg-danger/10 text-danger" : "border-primary/30 bg-secondary/70 text-secondary-foreground"}`}>
          {status === "error" ? <AlertCircle className="shrink-0" size={17} /> : <ShieldCheck className="shrink-0" size={17} />}
          <span>{message}</span>
        </div>
      )}

      {status === "loading" && (
        <div className="flex min-h-40 items-center justify-center gap-2 text-xs text-muted-foreground">
          <LoaderCircle className="animate-spin" size={18} /> Loading assessment bank…
        </div>
      )}

      {status === "ready" && records.length === 0 && (
        <div className="flex min-h-40 flex-col items-center justify-center text-center">
          <CheckCircle2 className="text-primary" size={27} />
          <p className="mt-3 text-sm font-semibold">No {filter} questions</p>
          <p className="mt-1 text-[11px] text-muted-foreground">The selected queue is clear.</p>
        </div>
      )}

      {status === "ready" && records.length > 0 && (
        <div className="mt-6 grid gap-4">
          {records.map((record) => (
            <article key={record.id} className="rounded-2xl border border-border bg-background p-5">
              <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-primary">{record.level} · {cefrLabels[record.level]}</span>
                <span>{assessmentSkillLabels[record.skill]}</span>
                <span>{record.sourceLabel || "Curated bank"}</span>
                {record.sourceConfidence && <span>{record.sourceConfidence} CEFR confidence</span>}
              </div>
              <h3 className="mt-4 font-display text-base font-bold leading-6">{record.prompt}</h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {record.options.map((option, index) => (
                  <div key={`${record.id}-${index}`} className={`rounded-xl border px-3 py-2.5 text-[11px] leading-5 ${index === record.correctIndex ? "border-primary/35 bg-secondary font-semibold text-secondary-foreground" : "border-border bg-card text-muted-foreground"}`}>
                    {String.fromCharCode(65 + index)}. {option}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[10px] leading-5 text-muted-foreground">{record.explanation}</p>
              {(filter === "draft" || filter === "needs-review") && (
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                  <button type="button" onClick={() => void review(record, "approved")} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground">
                    <CheckCircle2 size={15} /> Approve for live pool
                  </button>
                  <button type="button" onClick={() => void review(record, "needs-review")} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold">
                    <Clock3 size={15} /> Needs review
                  </button>
                  <button type="button" onClick={() => void review(record, "rejected")} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-danger hover:border-danger/40 hover:bg-danger/10">
                    <XCircle size={15} /> Reject
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
