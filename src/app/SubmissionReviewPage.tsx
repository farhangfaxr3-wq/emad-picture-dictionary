import { type FormEvent, useEffect, useState } from "react"
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Eye,
  EyeOff,
  KeyRound,
  LoaderCircle,
  LogOut,
  ShieldCheck,
  XCircle,
} from "lucide-react"
import AssessmentReviewPanel from "./AssessmentReviewPanel"
import ChatModerationPanel from "./ChatModerationPanel"

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
  const [drafts, setDrafts] = useState<Record<string, Record<string, string>>>(
    {},
  )
  const [status, setStatus] =
    useState<"loading" | "ready" | "error" | "signed-out" | "authenticating">(
      "loading",
    )
  const [message, setMessage] = useState("")
  const [filter, setFilter] = useState("pending")
  const [reviewer, setReviewer] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const load = async () => {
    setStatus("loading")
    try {
      const response = await fetch(`/api/admin/submissions?status=${filter}`)
      const result = await response.json()
      if (response.status === 401) {
        setRecords([])
        setReviewer("")
        setMessage("")
        setStatus("signed-out")
        return
      }
      if (!response.ok || !Array.isArray(result.submissions)) {
        throw new Error(result.message || "Owner access could not be verified.")
      }
      setReviewer(typeof result.reviewer === "string" ? result.reviewer : "")
      setRecords(result.submissions)
      setDrafts(
        Object.fromEntries(
          result.submissions.map((record: SubmissionRecord) => [
            record.id,
            { ...record.payload },
          ]),
        ),
      )
      setStatus("ready")
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Unable to load submissions.",
      )
      setStatus("error")
    }
  }

  useEffect(() => {
    void load()
  }, [filter])

  const signIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("authenticating")
    setMessage("")
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.message || "Sign-in failed.")
      }
      setPassword("")
      setReviewer(result.email || email)
      await load()
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Sign-in failed.")
      setStatus("signed-out")
    }
  }

  const signOut = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" })
    } finally {
      setRecords([])
      setReviewer("")
      setPassword("")
      setMessage("")
      setStatus("signed-out")
    }
  }

  const changeDraft = (id: string, key: string, value: string) =>
    setDrafts((current) => ({
      ...current,
      [id]: { ...current[id], [key]: value },
    }))

  const updateStatus = async (
    record: SubmissionRecord,
    nextStatus: SubmissionRecord["status"],
  ) => {
    try {
      const response = await fetch(`/api/admin/submissions/${record.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: nextStatus,
          payload: record.kind === "suggestion" ? drafts[record.id] : undefined,
        }),
      })
      const result = await response.json()
      if (response.status === 401) {
        setRecords([])
        setReviewer("")
        setStatus("signed-out")
        setMessage("Your secure session expired. Sign in again.")
        return
      }
      if (!response.ok)
        throw new Error(result.message || "The review was not saved.")
      setRecords((current) => current.filter((item) => item.id !== record.id))
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "The review was not saved.",
      )
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
          This unlisted page uses a secure owner session. Approving a suggestion
          marks it ready for editorial work; it never publishes vocabulary
          automatically.
        </p>
      </header>

      <section className={`${card} p-5 sm:p-6`}>
        {(status === "signed-out" || status === "authenticating") && (
          <form
            onSubmit={signIn}
            className="mx-auto max-w-md rounded-2xl border border-border bg-background p-5 sm:p-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
              <KeyRound size={22} />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold">
              Owner sign-in
            </h2>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
            Use one of the two approved administrator emails. Passwords and
            secure access codes are checked only by the server and are never
            saved in this browser.
            </p>
            {message && (
              <div
                role="alert"
                className="mt-4 flex gap-3 rounded-xl border border-[#efc7c1] bg-[#fff3f1] p-3 text-xs text-[#923e34]"
              >
                <AlertCircle className="shrink-0" size={17} />
                <p>{message}</p>
              </div>
            )}
            <label className="mt-5 block text-xs font-semibold">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="username"
                maxLength={160}
                required
                className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm"
              />
            </label>
            <label className="mt-4 block text-xs font-semibold">
              Password or secure access code
              <span className="relative mt-2 block">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  minLength={14}
                  maxLength={128}
                  required
                  className="w-full rounded-xl border border-border bg-card py-3 pl-4 pr-12 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </span>
            </label>
            <button
              type="submit"
              disabled={status === "authenticating"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground disabled:cursor-wait disabled:opacity-70"
            >
              {status === "authenticating" ? (
                <LoaderCircle className="animate-spin" size={17} />
              ) : (
                <KeyRound size={17} />
              )}
              {status === "authenticating" ? "Signing in…" : "Sign in securely"}
            </button>
          </form>
        )}

        {status !== "signed-out" && status !== "authenticating" && (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <ShieldCheck size={21} />
              </span>
              <div>
                <h2 className="font-display text-lg font-bold">
                  Private review queue
                </h2>
                <p className="text-xs text-muted-foreground">
                  No public submission data is exposed.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {reviewer && (
                <span className="text-[10px] text-muted-foreground">
                  {reviewer}
                </span>
              )}
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
              {reviewer && (
                <button
                  type="button"
                  onClick={signOut}
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-xs font-semibold"
                >
                  <LogOut size={15} /> Sign out
                </button>
              )}
            </div>
          </div>
        )}

        {status === "loading" && (
          <div className="flex min-h-48 items-center justify-center gap-2 text-sm text-muted-foreground">
            <LoaderCircle className="animate-spin" size={19} /> Loading private
            submissions…
          </div>
        )}
        {status === "error" && (
          <div
            role="alert"
            className="mt-6 flex gap-3 rounded-xl border border-[#efc7c1] bg-[#fff3f1] p-4 text-sm text-[#923e34]"
          >
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
            <p className="mt-1 text-xs text-muted-foreground">
              No {filter} submissions right now.
            </p>
          </div>
        )}
        {status === "ready" && records.length > 0 && (
          <div className="mt-6 grid gap-4">
            {records.map((record) => (
              <article
                key={record.id}
                className="rounded-xl border border-border bg-background p-5"
              >
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-primary">
                    {record.kind}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock3 size={12} />{" "}
                    {new Date(record.created_at).toLocaleString()}
                  </span>
                  <span>#{record.id.slice(0, 8)}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {record.kind === "suggestion"
                    ? record.payload.word || "Untitled suggestion"
                    : record.category || "General feedback"}
                </h3>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">
                  {record.kind === "suggestion"
                    ? record.payload.meaning ||
                      record.payload.reason ||
                      "No additional explanation."
                    : record.payload.message}
                </p>
                {record.kind === "suggestion" && drafts[record.id] && (
                  <div className="mt-5 grid gap-4 rounded-xl border border-border bg-card p-4 md:grid-cols-2">
                    <label className="text-xs font-semibold">
                      Word or phrase
                      <input
                        value={drafts[record.id].word || ""}
                        onChange={(event) =>
                          changeDraft(record.id, "word", event.target.value)
                        }
                        maxLength={100}
                        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="text-xs font-semibold">
                      Category
                      <input
                        value={drafts[record.id].suggestedCategory || ""}
                        onChange={(event) =>
                          changeDraft(
                            record.id,
                            "suggestedCategory",
                            event.target.value,
                          )
                        }
                        maxLength={100}
                        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="text-xs font-semibold md:col-span-2">
                      Meaning
                      <textarea
                        value={drafts[record.id].meaning || ""}
                        onChange={(event) =>
                          changeDraft(record.id, "meaning", event.target.value)
                        }
                        maxLength={500}
                        rows={3}
                        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                      />
                    </label>
                    <label className="text-xs font-semibold md:col-span-2">
                      Example sentence
                      <textarea
                        value={drafts[record.id].example || ""}
                        onChange={(event) =>
                          changeDraft(record.id, "example", event.target.value)
                        }
                        maxLength={500}
                        rows={3}
                        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm"
                      />
                    </label>
                    <p className="text-[10px] leading-5 text-muted-foreground md:col-span-2">
                      Edits are saved together with the next review action.
                      Approval still does not publish the word automatically.
                    </p>
                  </div>
                )}
                {record.email && (
                  <p className="mt-3 text-xs">Reply email: {record.email}</p>
                )}
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
      <AssessmentReviewPanel active={Boolean(reviewer) && status === "ready"} />
      <ChatModerationPanel active={Boolean(reviewer) && status === "ready"} />
    </>
  )
}
