import { useEffect, useMemo, useRef, useState } from "react"
import {
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  LoaderCircle,
  LockKeyhole,
  MessageSquare,
  Send,
  ShieldCheck,
  Star,
} from "lucide-react"
import { vocabulary } from "./vocabulary"

type SubmissionKind = "feedback" | "suggestion"
type SubmitState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success"; message: string; reference: string }
  | { status: "error"; message: string }

interface TurnstileApi {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string
      theme: "auto"
      callback: (token: string) => void
      "expired-callback": () => void
      "error-callback": () => void
    },
  ) => string
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const card = "rounded-2xl border border-border bg-card shadow-sm"
const field =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
const label = "block text-xs font-semibold text-foreground"
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim()

const feedbackCategories = [
  "General feedback",
  "Suggestion for improvement",
  "Technical problem",
  "Incorrect vocabulary",
  "Incorrect or unrelated image",
  "Missing or incorrect pronunciation",
  "Incorrect definition or example",
  "Other educational suggestion",
]

function normalizeWord(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9' -]/g, "")
    .replace(/\s+/g, " ")
}

function TurnstileField({ onToken }: { onToken: (token: string) => void }) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!turnstileSiteKey || !container.current) return
    let widgetId = ""
    let cancelled = false
    const render = () => {
      if (cancelled || !container.current || !window.turnstile || widgetId) return
      widgetId = window.turnstile.render(container.current, {
        sitekey: turnstileSiteKey,
        theme: "auto",
        callback: onToken,
        "expired-callback": () => onToken(""),
        "error-callback": () => onToken(""),
      })
    }
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-emad-turnstile="true"]',
    )
    if (existing) {
      if (window.turnstile) render()
      else existing.addEventListener("load", render, { once: true })
    } else {
      const script = document.createElement("script")
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      script.async = true
      script.defer = true
      script.dataset.emadTurnstile = "true"
      script.addEventListener("load", render, { once: true })
      document.head.appendChild(script)
    }
    return () => {
      cancelled = true
      if (widgetId) window.turnstile?.remove(widgetId)
    }
  }, [onToken])

  if (!turnstileSiteKey) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-secondary/40 px-4 py-3 text-xs leading-5 text-muted-foreground">
        Spam protection is waiting for the Cloudflare Turnstile site key. The
        server will not accept submissions until secure storage and Turnstile
        are configured.
      </div>
    )
  }
  return <div ref={container} aria-label="Spam protection check" />
}

function StatusMessage({ state }: { state: SubmitState }) {
  if (state.status === "idle" || state.status === "sending") return null
  const successful = state.status === "success"
  return (
    <div
      role={successful ? "status" : "alert"}
      className={`mt-5 flex gap-3 rounded-xl border p-4 text-sm leading-6 ${
        successful
          ? "border-[#b9d9cc] bg-[#edf7f2] text-[#246553]"
          : "border-[#efc7c1] bg-[#fff3f1] text-[#923e34]"
      }`}
    >
      {successful ? (
        <CheckCircle2 className="mt-0.5 shrink-0" size={19} />
      ) : (
        <AlertCircle className="mt-0.5 shrink-0" size={19} />
      )}
      <div>
        <p className="font-semibold">
          {successful ? "Submission received" : "Submission not sent"}
        </p>
        <p>{state.message}</p>
        {successful && (
          <p className="mt-1 text-xs">Reference: {state.reference}</p>
        )}
      </div>
    </div>
  )
}

export default function FeedbackPage() {
  const [kind, setKind] = useState<SubmissionKind>("feedback")
  const [state, setState] = useState<SubmitState>({ status: "idle" })
  const [rating, setRating] = useState(0)
  const [word, setWord] = useState("")
  const [turnstileToken, setTurnstileToken] = useState("")
  const openedAt = useRef(Date.now())
  const form = useRef<HTMLFormElement>(null)

  const duplicateMatches = useMemo(() => {
    const normalized = normalizeWord(word)
    if (normalized.length < 2) return []
    return vocabulary
      .filter((item) => {
        const candidate = normalizeWord(item.word)
        return (
          candidate === normalized ||
          candidate.startsWith(normalized) ||
          normalized.startsWith(candidate)
        )
      })
      .slice(0, 5)
  }, [word])
  const exactDuplicate = duplicateMatches.some(
    (item) => normalizeWord(item.word) === normalizeWord(word),
  )

  const changeKind = (next: SubmissionKind) => {
    setKind(next)
    setState({ status: "idle" })
    setTurnstileToken("")
    openedAt.current = Date.now()
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (kind === "suggestion" && exactDuplicate) {
      setState({
        status: "error",
        message:
          "That word is already in the dictionary. You can send feedback about its existing entry instead.",
      })
      return
    }
    const values = new FormData(event.currentTarget)
    const payload = {
      kind,
      rating: rating || null,
      category: String(values.get("category") || ""),
      message: String(values.get("message") || ""),
      email: String(values.get("email") || ""),
      word: String(values.get("word") || ""),
      meaning: String(values.get("meaning") || ""),
      suggestedCategory: String(values.get("suggestedCategory") || ""),
      example: String(values.get("example") || ""),
      reason: String(values.get("reason") || ""),
      website: String(values.get("website") || ""),
      turnstileToken,
      formStartedAt: new Date(openedAt.current).toISOString(),
      sourcePage: window.location.pathname,
    }
    setState({ status: "sending" })
    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = (await response.json().catch(() => null)) as
        | { message?: string; reference?: string }
        | null
      if (!response.ok || !result?.reference) {
        throw new Error(
          result?.message ||
            "The submission service is not available yet. Nothing was saved.",
        )
      }
      setState({
        status: "success",
        message:
          result.message || "Thank you. Your submission was saved for review.",
        reference: result.reference,
      })
      form.current?.reset()
      setRating(0)
      setWord("")
      setTurnstileToken("")
      openedAt.current = Date.now()
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "The submission could not be saved. Please try again later.",
      })
    }
  }

  return (
    <>
      <header className="mb-7 max-w-3xl">
        <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-primary">
          Help Emad WordLink grow
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Share feedback or suggest a word.
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
          Tell us what helped, report a learning problem, or suggest useful
          vocabulary. Every submission is reviewed privately before any change
          is made.
        </p>
      </header>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className={`${card} p-5 sm:p-7`}>
          <div className="grid grid-cols-2 gap-2 rounded-xl bg-secondary/70 p-1.5">
            {(
              [
                ["feedback", "Feedback", MessageSquare],
                ["suggestion", "Suggest a word", Lightbulb],
              ] as const
            ).map(([value, text, Icon]) => (
              <button
                key={value}
                type="button"
                onClick={() => changeKind(value)}
                aria-pressed={kind === value}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold transition sm:text-sm ${
                  kind === value
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={17} />
                {text}
              </button>
            ))}
          </div>

          <form ref={form} className="mt-7" onSubmit={submit}>
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[10000px] h-px w-px opacity-0"
            />

            {kind === "feedback" ? (
              <>
                <fieldset>
                  <legend className={label}>Optional rating</legend>
                  <div className="mt-2 flex gap-1" aria-label="Rating out of five">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        aria-label={`${value} star${value === 1 ? "" : "s"}`}
                        aria-pressed={rating === value}
                        className="rounded-lg p-2 text-[#d19b2b] hover:bg-secondary"
                      >
                        <Star
                          size={22}
                          fill={value <= rating ? "currentColor" : "none"}
                        />
                      </button>
                    ))}
                  </div>
                </fieldset>
                <label className={`${label} mt-5`}>
                  Feedback category
                  <select name="category" required className={field} defaultValue="">
                    <option value="" disabled>
                      Choose a category
                    </option>
                    {feedbackCategories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </label>
                <label className={`${label} mt-5`}>
                  Your message
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={7}
                    className={field}
                    placeholder="What worked well, or what should be corrected?"
                  />
                  <span className="mt-2 block text-[10px] font-normal text-muted-foreground">
                    Please avoid including passwords, student records, or other
                    sensitive information.
                  </span>
                </label>
              </>
            ) : (
              <>
                <label className={label}>
                  Word or phrase
                  <input
                    name="word"
                    required
                    minLength={2}
                    maxLength={100}
                    value={word}
                    onChange={(event) => setWord(event.target.value)}
                    className={field}
                    placeholder="For example: sustainability"
                  />
                </label>
                {duplicateMatches.length > 0 && (
                  <div
                    className={`mt-3 rounded-xl border px-4 py-3 text-xs leading-5 ${
                      exactDuplicate
                        ? "border-[#efc7c1] bg-[#fff3f1] text-[#923e34]"
                        : "border-border bg-secondary/50 text-muted-foreground"
                    }`}
                  >
                    <p className="font-semibold text-foreground">
                      {exactDuplicate
                        ? "Already in the dictionary"
                        : "Possible matches to check"}
                    </p>
                    <p>{duplicateMatches.map((item) => item.word).join(", ")}</p>
                  </div>
                )}
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <label className={label}>
                    Suggested meaning <span className="font-normal">(optional)</span>
                    <textarea
                      name="meaning"
                      maxLength={500}
                      rows={4}
                      className={field}
                      placeholder="A clear meaning in your own words"
                    />
                  </label>
                  <label className={label}>
                    Suggested category <span className="font-normal">(optional)</span>
                    <input
                      name="suggestedCategory"
                      maxLength={100}
                      className={field}
                      placeholder="Education, technology, daily life…"
                    />
                  </label>
                </div>
                <label className={`${label} mt-5`}>
                  Example sentence <span className="font-normal">(optional)</span>
                  <textarea
                    name="example"
                    maxLength={500}
                    rows={3}
                    className={field}
                    placeholder="Use the word naturally in a sentence"
                  />
                </label>
                <label className={`${label} mt-5`}>
                  Why would this word help learners?{" "}
                  <span className="font-normal">(optional)</span>
                  <textarea name="reason" maxLength={750} rows={4} className={field} />
                </label>
              </>
            )}

            <label className={`${label} mt-5`}>
              Email for a reply <span className="font-normal">(optional)</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength={160}
                className={field}
                placeholder="you@example.com"
              />
            </label>

            <div className="mt-6">
              <TurnstileField onToken={setTurnstileToken} />
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-[11px] leading-5 text-muted-foreground">
                We collect only the information you enter, a submission time,
                and a temporary one-way anti-spam identifier. Suggestions are
                never published automatically.
              </p>
              <button
                type="submit"
                disabled={state.status === "sending" || (kind === "suggestion" && exactDuplicate)}
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state.status === "sending" ? (
                  <LoaderCircle className="animate-spin" size={17} />
                ) : (
                  <Send size={17} />
                )}
                {state.status === "sending" ? "Sending…" : "Send for review"}
              </button>
            </div>
            <StatusMessage state={state} />
          </form>
        </section>

        <aside className="space-y-5">
          <section className={`${card} p-5`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <ShieldCheck size={21} />
            </span>
            <h2 className="mt-4 font-display text-lg font-bold">Reviewed, not automatic</h2>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              Suggested words stay private and pending. The owner can correct,
              approve, or reject them before verified vocabulary is added to the
              learning catalogue.
            </p>
          </section>
          <section className={`${card} p-5`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <LockKeyhole size={20} />
            </span>
            <h2 className="mt-4 font-display text-lg font-bold">Privacy first</h2>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              Email is optional and used only if a reply is needed. Private
              submissions are available only through the protected owner review
              area.
            </p>
          </section>
        </aside>
      </div>
    </>
  )
}
