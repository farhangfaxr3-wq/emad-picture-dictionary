import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react"
import {
  browserSupportsWebAuthn,
  startAuthentication,
  startRegistration,
} from "@simplewebauthn/browser"
import {
  AlertTriangle,
  ArrowUp,
  CheckCircle2,
  Clock3,
  KeyRound,
  LoaderCircle,
  LogOut,
  MessageCircleMore,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserPlus,
} from "lucide-react"

type ChatAccount = {
  id: string
  displayName: string
  status: "active" | "restricted"
  restrictedUntil?: string | null
}

type ChatMessage = {
  id: string
  displayName: string
  body: string
  createdAt: string
  own: boolean
}

const card = "rounded-[24px] border border-border bg-card shadow-sm"
const prompts = [
  "What new English word did you learn today?",
  "Describe your university day in one sentence.",
  "What skill would you like to improve this week?",
  "Recommend a book, film, or podcast in English.",
]

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(path, {
    ...options,
    headers: options.body
      ? { "content-type": "application/json", ...options.headers }
      : options.headers,
  })
  const result = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(result.message || "The English Chat service could not complete the request.")
  }
  return result as T
}

function timeLabel(value: string) {
  const date = new Date(value.endsWith("Z") ? value : `${value}Z`)
  const seconds = Math.max(0, Math.round((Date.now() - date.getTime()) / 1000))
  if (seconds < 60) return "now"
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`
  return date.toLocaleDateString("en", { month: "short", day: "numeric" })
}

function AuthPanel({ onSignedIn }: { onSignedIn: (account: ChatAccount) => void }) {
  const [mode, setMode] = useState<"register" | "login">("register")
  const [displayName, setDisplayName] = useState("")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const supported = browserSupportsWebAuthn()

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    if (!supported || busy) return
    setBusy(true)
    setError("")
    try {
      if (mode === "register") {
        const start = await request<{ options: Parameters<typeof startRegistration>[0]["optionsJSON"] }>(
          "/api/chat/register/options",
          { method: "POST", body: JSON.stringify({ displayName }) },
        )
        const response = await startRegistration({ optionsJSON: start.options })
        const result = await request<{ account: ChatAccount }>("/api/chat/register/verify", {
          method: "POST",
          body: JSON.stringify({ response }),
        })
        onSignedIn(result.account)
      } else {
        const start = await request<{ options: Parameters<typeof startAuthentication>[0]["optionsJSON"] }>(
          "/api/chat/login/options",
          { method: "POST", body: JSON.stringify({ displayName }) },
        )
        const response = await startAuthentication({ optionsJSON: start.options })
        const result = await request<{ account: ChatAccount }>("/api/chat/login/verify", {
          method: "POST",
          body: JSON.stringify({ response }),
        })
        onSignedIn(result.account)
      }
    } catch (reason) {
      const message = reason instanceof Error ? reason.message : "Passkey authentication did not finish."
      setError(
        /abort|cancel/i.test(message)
          ? "The passkey prompt was closed. You can try again whenever you are ready."
          : message,
      )
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
      <section className="overflow-hidden rounded-[24px] border border-[#24564e] bg-[#173c36] p-7 text-white shadow-sm sm:p-9">
        <span className="inline-flex rounded-2xl bg-white/10 p-3 text-[#91dbc5]">
          <MessageCircleMore size={26} />
        </span>
        <p className="mt-7 text-[10px] font-semibold uppercase tracking-[.18em] text-[#91dbc5]">
          One shared learning room
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
          English Practice Room
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
          Write short English messages, meet other learners, and build confidence in a calm,
          moderated space. No email address or password is collected.
        </p>
        <div className="mt-7 grid gap-3 text-xs sm:grid-cols-2">
          {[
            [ShieldCheck, "Passkey-protected account"],
            [Clock3, "Messages expire after 7 days"],
            [CheckCircle2, "English-only, text-only room"],
            [AlertTriangle, "Private reporting to moderators"],
          ].map(([Icon, label]) => (
            <span key={label as string} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-3">
              <Icon size={16} className="text-[#91dbc5]" /> {label as string}
            </span>
          ))}
        </div>
      </section>

      <section className={`${card} p-6 sm:p-8`}>
        <div className="grid grid-cols-2 rounded-xl bg-secondary p-1" role="tablist">
          {([
            ["register", "Create account", UserPlus],
            ["login", "Sign in", KeyRound],
          ] as const).map(([value, label, Icon]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={mode === value}
              onClick={() => {
                setMode(value)
                setError("")
              }}
              className={`flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 text-xs font-semibold ${
                mode === value ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="mt-7">
          <label className="text-xs font-semibold" htmlFor="chat-display-name">
            Display name
          </label>
          <input
            id="chat-display-name"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            autoComplete="username webauthn"
            maxLength={24}
            placeholder="e.g. EmadLearner"
            className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none ring-primary/20 focus:border-primary focus:ring-4"
          />
          <p className="mt-2 text-[10px] leading-5 text-muted-foreground">
            Use 3–24 English letters or numbers. Do not use your email, phone number, or full legal name.
          </p>
          {error && (
            <p role="alert" className="mt-4 rounded-xl border border-destructive/25 bg-destructive/10 px-4 py-3 text-xs leading-5 text-destructive">
              {error}
            </p>
          )}
          {!supported && (
            <p className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-xs leading-5">
              This browser does not support passkeys. Open the page in a recent Chrome, Edge, Safari,
              or Firefox browser.
            </p>
          )}
          <button
            type="submit"
            disabled={!supported || busy || displayName.trim().length < 3}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-45"
          >
            {busy ? <LoaderCircle className="animate-spin" size={17} /> : mode === "register" ? <UserPlus size={17} /> : <KeyRound size={17} />}
            {busy ? "Waiting for passkey…" : mode === "register" ? "Create account with a passkey" : "Sign in with a passkey"}
          </button>
        </form>
        <p className="mt-5 text-[10px] leading-5 text-muted-foreground">
          A passkey uses your device lock, fingerprint, face, or security key. Recovery depends on your
          device or password-manager passkey sync; this site cannot reset a lost passkey.
        </p>
      </section>
    </div>
  )
}

function ChatRoom({ account, onSignedOut }: { account: ChatAccount; onSignedOut: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState("")
  const [busy, setBusy] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [notice, setNotice] = useState("")
  const [nextBefore, setNextBefore] = useState<string | null>(null)
  const [reporting, setReporting] = useState<string | null>(null)
  const endRef = useRef<HTMLDivElement>(null)

  const loadMessages = async (older = false) => {
    try {
      const suffix = older && nextBefore ? `?before=${encodeURIComponent(nextBefore)}` : ""
      const result = await request<{ messages: ChatMessage[]; nextBefore: string | null }>(
        `/api/chat/messages${suffix}`,
      )
      setMessages((current) => {
        const combined = older ? [...result.messages, ...current] : result.messages
        return [...new Map(combined.map((item) => [item.id, item])).values()]
      })
      setNextBefore(result.nextBefore)
      setError("")
      if (!older) requestAnimationFrame(() => endRef.current?.scrollIntoView({ block: "end" }))
    } catch (reason) {
      const message = reason instanceof Error ? reason.message : "Messages could not be loaded."
      setError(message)
      if (/sign in|expired/i.test(message)) onSignedOut()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadMessages()
    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") void loadMessages()
    }, 10_000)
    return () => window.clearInterval(interval)
  }, [])

  const send = async () => {
    if (!draft.trim() || busy || account.status === "restricted") return
    setBusy(true)
    setError("")
    try {
      const result = await request<{ message: ChatMessage }>("/api/chat/messages", {
        method: "POST",
        body: JSON.stringify({ message: draft }),
      })
      setMessages((current) => [...current, result.message])
      setDraft("")
      requestAnimationFrame(() => endRef.current?.scrollIntoView({ block: "end" }))
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Message could not be sent.")
    } finally {
      setBusy(false)
    }
  }

  const onComposerKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      void send()
    }
  }

  const report = async (messageId: string, reason: string) => {
    try {
      await request(`/api/chat/messages/${messageId}/report`, {
        method: "POST",
        body: JSON.stringify({ reason }),
      })
      setReporting(null)
      setNotice("Report sent privately to the site owners.")
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : "Report could not be sent.")
    }
  }

  const logout = async () => {
    await request("/api/chat/logout", { method: "POST", body: "{}" }).catch(() => undefined)
    onSignedOut()
  }

  const deleteAccount = async () => {
    if (!window.confirm("Delete your English Chat account and every message you sent? This cannot be undone.")) return
    try {
      await request("/api/chat/account", { method: "DELETE", body: "{}" })
      onSignedOut()
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : "Account could not be deleted.")
    }
  }

  return (
    <div className="grid min-h-[650px] gap-5 xl:grid-cols-[minmax(0,1fr)_290px]">
      <section className={`${card} flex min-h-[650px] min-w-0 flex-col overflow-hidden`}>
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-secondary/40 px-5 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <MessageCircleMore size={20} />
            </span>
            <div className="min-w-0">
              <h1 className="truncate font-display text-lg font-bold">English Practice Room</h1>
              <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Text only · updates every 10 seconds
              </p>
            </div>
          </div>
          <button type="button" onClick={() => void loadMessages()} className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground" aria-label="Refresh messages">
            <RefreshCcw size={17} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6" role="log" aria-live="polite" aria-label="English Practice Room messages">
          {nextBefore && (
            <div className="mb-5 text-center">
              <button type="button" onClick={() => void loadMessages(true)} className="rounded-full border border-border px-4 py-2 text-[11px] font-semibold hover:bg-secondary">
                Load older messages
              </button>
            </div>
          )}
          {loading ? (
            <div className="flex min-h-64 items-center justify-center text-muted-foreground">
              <LoaderCircle className="animate-spin" size={24} />
            </div>
          ) : !messages.length ? (
            <div className="mx-auto flex min-h-72 max-w-sm flex-col items-center justify-center text-center">
              <span className="rounded-2xl bg-secondary p-4 text-primary"><Sparkles size={26} /></span>
              <h2 className="mt-5 font-display text-xl font-bold">Start the conversation.</h2>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">Share a short English sentence. A friendly first message is enough.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <article key={message.id} className={`flex ${message.own ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[88%] sm:max-w-[72%] ${message.own ? "text-right" : "text-left"}`}>
                    <div className="mb-1.5 flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span className="font-semibold text-foreground">{message.own ? "You" : message.displayName}</span>
                      <span>{timeLabel(message.createdAt)}</span>
                    </div>
                    <div className={`rounded-2xl px-4 py-3 text-left text-sm leading-6 ${message.own ? "rounded-br-md bg-primary text-primary-foreground" : "rounded-bl-md bg-secondary text-foreground"}`}>
                      {message.body}
                    </div>
                    {!message.own && (
                      <div className="mt-1.5">
                        <button type="button" onClick={() => setReporting(reporting === message.id ? null : message.id)} className="text-[9px] font-semibold text-muted-foreground hover:text-destructive">
                          Report privately
                        </button>
                        {reporting === message.id && (
                          <div className="mt-2 flex flex-wrap gap-1.5 rounded-xl border border-border bg-card p-2 text-left shadow-sm">
                            {["Harassment or abuse", "Personal information", "Not English", "Other unsafe content"].map((reason) => (
                              <button key={reason} type="button" onClick={() => void report(message.id, reason)} className="rounded-lg bg-secondary px-2.5 py-1.5 text-[9px] font-semibold hover:bg-muted">
                                {reason}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
              <div ref={endRef} />
            </div>
          )}
        </div>

        <footer className="border-t border-border bg-card p-4 sm:p-5">
          {error && <p role="alert" className="mb-3 rounded-xl bg-destructive/10 px-3 py-2 text-[11px] leading-5 text-destructive">{error}</p>}
          {notice && <p className="mb-3 rounded-xl bg-secondary px-3 py-2 text-[11px] leading-5 text-primary">{notice}</p>}
          {account.status === "restricted" ? (
            <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs leading-5">
              Sending is temporarily restricted. You can still read the room.
            </p>
          ) : (
            <div className="flex items-end gap-2">
              <div className="min-w-0 flex-1 rounded-2xl border border-border bg-background px-4 py-2 ring-primary/20 focus-within:border-primary focus-within:ring-4">
                <textarea
                  value={draft}
                  onChange={(event) => setDraft(event.target.value.slice(0, 300))}
                  onKeyDown={onComposerKeyDown}
                  rows={2}
                  maxLength={300}
                  placeholder="Write a respectful message in English…"
                  aria-label="English Chat message"
                  className="block max-h-28 min-h-12 w-full resize-none bg-transparent py-1 text-sm leading-6 outline-none"
                />
                <p className="text-right text-[9px] text-muted-foreground">{draft.length}/300</p>
              </div>
              <button type="button" onClick={() => void send()} disabled={!draft.trim() || busy} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground disabled:opacity-40" aria-label="Send message">
                {busy ? <LoaderCircle className="animate-spin" size={18} /> : <ArrowUp size={18} />}
              </button>
            </div>
          )}
          <p className="mt-2 text-[9px] leading-4 text-muted-foreground">Enter to send · Shift + Enter for a new line · No links or contact details</p>
        </footer>
      </section>

      <aside className="space-y-4">
        <section className={`${card} p-5`}>
          <p className="text-[9px] font-semibold uppercase tracking-[.14em] text-primary">Signed in as</p>
          <p className="mt-2 truncate font-display text-lg font-bold">{account.displayName}</p>
          <p className="mt-2 text-[10px] leading-5 text-muted-foreground">Protected by your passkey. Your email and password are not stored here.</p>
          <button type="button" onClick={() => void logout()} className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-primary"><LogOut size={14} /> Sign out</button>
        </section>
        <section className={`${card} p-5`}>
          <p className="text-[9px] font-semibold uppercase tracking-[.14em] text-primary">Conversation starters</p>
          <div className="mt-3 space-y-2">
            {prompts.map((prompt) => (
              <button key={prompt} type="button" onClick={() => setDraft(prompt)} className="block w-full rounded-xl bg-secondary/70 px-3 py-2.5 text-left text-[10px] leading-5 hover:bg-secondary">
                {prompt}
              </button>
            ))}
          </div>
        </section>
        <section className={`${card} p-5`}>
          <p className="flex items-center gap-2 text-xs font-semibold"><ShieldCheck size={15} className="text-primary" /> Room guidelines</p>
          <ul className="mt-3 space-y-2 text-[10px] leading-5 text-muted-foreground">
            <li>• English practice only.</li>
            <li>• Be respectful and constructive.</li>
            <li>• Do not share personal contact details.</li>
            <li>• Reports are visible only to site owners.</li>
            <li>• Messages are automatically deleted after 7 days.</li>
          </ul>
        </section>
        <button type="button" onClick={() => void deleteAccount()} className="inline-flex items-center gap-2 px-2 text-[10px] font-semibold text-destructive"><Trash2 size={13} /> Delete chat account</button>
      </aside>
    </div>
  )
}

export default function EnglishChatPage() {
  const [account, setAccount] = useState<ChatAccount | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    request<{ account: ChatAccount | null }>("/api/chat/session")
      .then((result) => setAccount(result.account))
      .catch(() => setAccount(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="flex min-h-[480px] items-center justify-center text-muted-foreground"><LoaderCircle className="animate-spin" size={28} /></div>
  }

  return account ? (
    <ChatRoom account={account} onSignedOut={() => setAccount(null)} />
  ) : (
    <AuthPanel onSignedIn={(next) => setAccount({ ...next, status: next.status || "active" })} />
  )
}

