import { useCallback, useEffect, useState } from "react"
import {
  AlertTriangle,
  Ban,
  CheckCircle2,
  EyeOff,
  LoaderCircle,
  MessageCircleMore,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react"

type ChatReport = {
  id: string
  message_id: string
  reason: string
  status: "pending" | "reviewed" | "dismissed"
  created_at: string
  body: string
  author_name: string
  author_id: string
  reporter_name: string
}

type ChatAccount = {
  id: string
  display_name: string
  status: "active" | "restricted"
  restricted_until: string | null
  created_at: string
}

const card = "rounded-2xl border border-border bg-card"

async function request(path: string, options: RequestInit = {}) {
  const response = await fetch(path, {
    ...options,
    headers: options.body ? { "content-type": "application/json" } : undefined,
  })
  const result = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(result.message || "Chat moderation could not be updated.")
  return result
}

export default function ChatModerationPanel({ active }: { active: boolean }) {
  const [reports, setReports] = useState<ChatReport[]>([])
  const [accounts, setAccounts] = useState<ChatAccount[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [busy, setBusy] = useState("")

  const load = useCallback(async () => {
    if (!active) return
    setLoading(true)
    setError("")
    try {
      const result = (await request("/api/admin/chat")) as {
        reports: ChatReport[]
        accounts: ChatAccount[]
      }
      setReports(result.reports)
      setAccounts(result.accounts)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Chat moderation could not be loaded.")
    } finally {
      setLoading(false)
    }
  }, [active])

  useEffect(() => {
    void load()
  }, [load])

  const moderateMessage = async (messageId: string, action: "hide" | "dismiss-report") => {
    setBusy(`${messageId}:${action}`)
    try {
      await request(`/api/admin/chat/messages/${messageId}`, {
        method: "PATCH",
        body: JSON.stringify({ action }),
      })
      await load()
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Moderation could not be saved.")
    } finally {
      setBusy("")
    }
  }

  const moderateAccount = async (accountId: string, restricted: boolean) => {
    setBusy(`${accountId}:account`)
    try {
      await request(`/api/admin/chat/accounts/${accountId}`, {
        method: "PATCH",
        body: JSON.stringify({
          action: restricted ? "unrestrict" : "restrict",
          minutes: 1440,
        }),
      })
      await load()
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Account moderation could not be saved.")
    } finally {
      setBusy("")
    }
  }

  if (!active) return null
  const pending = reports.filter((report) => report.status === "pending")

  return (
    <section className={`${card} mt-6 overflow-hidden`}>
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-secondary/40 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-primary p-2.5 text-primary-foreground">
            <MessageCircleMore size={19} />
          </span>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.14em] text-primary">English Chat</p>
            <h2 className="mt-1 font-display text-lg font-bold">Moderation and safety</h2>
          </div>
        </div>
        <button type="button" onClick={() => void load()} disabled={loading} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold disabled:opacity-50">
          {loading ? <LoaderCircle className="animate-spin" size={14} /> : <RefreshCcw size={14} />}
          Refresh
        </button>
      </header>

      <div className="grid gap-6 p-5 sm:p-6 xl:grid-cols-[1.25fr_.75fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold">Message reports</h3>
            <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold">{pending.length} pending</span>
          </div>
          {error && <p role="alert" className="mb-4 rounded-xl bg-destructive/10 px-4 py-3 text-xs text-destructive">{error}</p>}
          {!pending.length ? (
            <div className="rounded-xl border border-dashed border-border p-6 text-center">
              <CheckCircle2 className="mx-auto text-primary" size={22} />
              <p className="mt-3 text-xs font-semibold">No pending chat reports.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pending.map((report) => (
                <article key={report.id} className="rounded-xl border border-border bg-background p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] text-muted-foreground">
                    <span className="font-semibold text-foreground">{report.author_name}</span>
                    <span>Reported by {report.reporter_name}</span>
                  </div>
                  <p className="mt-3 rounded-xl bg-secondary p-3 text-xs leading-6">{report.body}</p>
                  <p className="mt-3 flex items-center gap-2 text-[10px] text-amber-700 dark:text-amber-300"><AlertTriangle size={13} /> {report.reason}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button type="button" disabled={Boolean(busy)} onClick={() => void moderateMessage(report.message_id, "hide")} className="inline-flex items-center gap-1.5 rounded-lg bg-destructive px-3 py-2 text-[10px] font-semibold text-destructive-foreground disabled:opacity-50"><EyeOff size={13} /> Hide message</button>
                    <button type="button" disabled={Boolean(busy)} onClick={() => void moderateAccount(report.author_id, false)} className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-[10px] font-semibold disabled:opacity-50"><Ban size={13} /> Restrict 24h</button>
                    <button type="button" disabled={Boolean(busy)} onClick={() => void moderateMessage(report.message_id, "dismiss-report")} className="rounded-lg border border-border px-3 py-2 text-[10px] font-semibold disabled:opacity-50">Dismiss report</button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Recent accounts</h3>
          <div className="max-h-[460px] space-y-2 overflow-y-auto pr-1">
            {accounts.map((account) => (
              <div key={account.id} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background p-3">
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold">{account.display_name}</p>
                  <p className="mt-1 text-[9px] text-muted-foreground">{account.status === "restricted" ? `Restricted until ${account.restricted_until || "review"}` : "Active learner"}</p>
                </div>
                <button type="button" disabled={Boolean(busy)} onClick={() => void moderateAccount(account.id, account.status === "restricted")} className={`shrink-0 rounded-lg px-2.5 py-2 text-[9px] font-semibold ${account.status === "restricted" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                  {account.status === "restricted" ? "Restore" : "Restrict"}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-4 flex gap-2 text-[9px] leading-5 text-muted-foreground"><ShieldCheck className="mt-0.5 shrink-0 text-primary" size={13} /> Passkey credentials, session tokens, and private report identities never appear in this panel.</p>
        </div>
      </div>
    </section>
  )
}

