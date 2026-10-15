import { useEffect, useState } from "react"
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  ShieldCheck,
  XCircle,
} from "lucide-react"

interface SubmissionRecord {
  id: string
  kind: "feedback" | "suggestion"
  status: "pending" | "approved" | "rejected" | "needs-review"
  category: string | null
  rating: number | null
  email: string | null
  normalized_word: string | null
  payload: Record<string, string>
  owner_note: string | null
  created_at: string
}

const card = "rounded-2xl border border-border bg-card shadow-sm"

export default function SubmissionReviewPage() {
  const [records, setRecords] = useState<SubmissionRecord[]>([])
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [message, setMessage] = useState("")
  const [filter, setFilter] = useState("pending")

  const load = async () => {
    setStatus("loading")
    try {
      const response = await fetch(`/api/admin/submissions?status=${filter}`)
      const result = await response.json()
      if (!response.ok || !Array.isArray(result.submissions)) {
        throw new Error(result.message || "Owner access could not be verified.")
      }
      setRecords(result.submissions)
      setStatus("ready")
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to load submissions.")
      setStatus("error")
    }
  }

  useEffect(() => {
    void load()
  }, [filter])

  const updateStatus = async (record: SubmissionRecord, nextStatus: SubmissionRecord["status"]) => {
    try {
      const response = await fetch(`/api/admin/submissions/${record.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || "The review was not saved.")
      setRecords((current) => current.filter((item) => item.id !== record.id))
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "The review was not saved.")
      setStatus("error")
    }
  }

  return (
    <>
      <header className="mb-7 max-w-3xl">
        <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-primary">
          Protected owner workspace
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Review learner submissions.
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          This unlisted page requires a verified Cloudflare Access identity.
          Approving a suggestion marks it ready for editorial work; it never
          publishes vocabulary automatically.
        </p>
      </header>

      <section className={`${card} p-5 sm:p-6`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <ShieldCheck size={21} />
            </span>
            <div>
              <h2 className="font-display text-lg font-bold">Private review queue</h2>
              <p className="text-xs text-muted-foreground">No public submission data is exposed.</p>
            </div>
          </div>
          <select
            aria-label="Filter submission status"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="rounded-xl border border-border bg-background px-4 py-3 text-xs"
          >
            <option value="pending">Pending</option>
            <option value="needs-review">Needs review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {status === "loading" && (
          <div className="flex min-h-48 items-center justify-center gap-2 text-sm text-muted-foreground">
            <LoaderCircle className="animate-spin" size={19} /> Loading private submissions…
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="mt-6 flex gap-3 rounded-xl border border-[#efc7c1] bg-[#fff3f1] p-4 text-sm text-[#923e34]">
            <AlertCircle className="shrink-0" size={19} />
            <div>
              <p className="font-semibold">Owner review is not available</p>
              <p className="mt-1 leading-6">{message}</p>
            </div>
          </div>
        )}
        {status === "ready" && records.length === 0 && (
          <div className="flex min-h-48 flex-col items-center justify-center text-center">
            <CheckCircle2 className="text-primary" size={28} />
            <h2 className="mt-3 font-display text-lg font-bold">Queue clear</h2>
            <p className="mt-1 text-xs text-muted-foreground">No {filter} submissions right now.</p>
          </div>
        )}
        {status === "ready" && records.length > 0 && (
          <div className="mt-6 grid gap-4">
            {records.map((record) => (
              <article key={record.id} className="rounded-xl border border-border bg-background p-5">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-primary">{record.kind}</span>
                  <span className="flex items-center gap-1"><Clock3 size={12} /> {new Date(record.created_at).toLocaleString()}</span>
                  <span>#{record.id.slice(0, 8)}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {record.kind === "suggestion"
                    ? record.payload.word || "Untitled suggestion"
                    : record.category || "General feedback"}
                </h3>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">
                  {record.kind === "suggestion"
                    ? record.payload.meaning || record.payload.reason || "No additional explanation."
                    : record.payload.message}
                </p>
                {record.email && <p className="mt-3 text-xs">Reply email: {record.email}</p>}
                {filter === "pending" || filter === "needs-review" ? (
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                    <button
                      onClick={() => updateStatus(record, "approved")}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground"
                    >
                      <CheckCircle2 size={15} /> Approve for editorial work
                    </button>
                    <button
                      onClick={() => updateStatus(record, "needs-review")}
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold"
                    >
                      <Clock3 size={15} /> Needs review
                    </button>
                    <button
                      onClick={() => updateStatus(record, "rejected")}
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-semibold text-[#923e34]"
                    >
                      <XCircle size={15} /> Reject
                    </button>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
