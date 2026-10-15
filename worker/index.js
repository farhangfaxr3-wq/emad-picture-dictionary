const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
}
const FEEDBACK_CATEGORIES = new Set([
  "General feedback",
  "Suggestion for improvement",
  "Technical problem",
  "Incorrect vocabulary",
  "Incorrect or unrelated image",
  "Missing or incorrect pronunciation",
  "Incorrect definition or example",
  "Other educational suggestion",
])
const REVIEW_STATUSES = new Set([
  "pending",
  "approved",
  "rejected",
  "needs-review",
])

class RequestError extends Error {
  constructor(status, message) {
    super(message)
    this.status = status
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: JSON_HEADERS,
  })
}

function cleanText(value, maxLength) {
  if (typeof value !== "string") return ""
  return value.replace(/\0/g, "").trim().slice(0, maxLength)
}

export function normalizeWord(value) {
  return cleanText(value, 100)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9' -]/g, "")
    .replace(/\s+/g, " ")
}

function validateEmail(value) {
  const email = cleanText(value, 160)
  if (!email) return null
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new RequestError(400, "Please enter a valid email address or leave it blank.")
  }
  return email
}

export function validateSubmission(input) {
  if (!input || typeof input !== "object") {
    throw new RequestError(400, "A valid submission is required.")
  }
  if (cleanText(input.website, 200)) {
    throw new RequestError(400, "The submission could not be verified.")
  }
  const started = Date.parse(input.formStartedAt)
  if (!Number.isFinite(started) || Date.now() - started < 1500) {
    throw new RequestError(400, "Please take a moment to review your submission.")
  }
  if (Date.now() - started > 2 * 60 * 60 * 1000) {
    throw new RequestError(400, "This form expired. Refresh the page and try again.")
  }

  const kind = input.kind === "suggestion" ? "suggestion" : "feedback"
  const email = validateEmail(input.email)
  const sourcePage = cleanText(input.sourcePage, 200)
  if (kind === "feedback") {
    const category = cleanText(input.category, 100)
    const message = cleanText(input.message, 2000)
    const rating = input.rating == null || input.rating === "" ? null : Number(input.rating)
    if (!FEEDBACK_CATEGORIES.has(category)) {
      throw new RequestError(400, "Choose a valid feedback category.")
    }
    if (message.length < 10) {
      throw new RequestError(400, "Feedback must be at least 10 characters.")
    }
    if (rating !== null && (!Number.isInteger(rating) || rating < 1 || rating > 5)) {
      throw new RequestError(400, "Rating must be between one and five.")
    }
    return {
      kind,
      category,
      rating,
      email,
      normalizedWord: null,
      sourcePage,
      payload: { message },
    }
  }

  const word = cleanText(input.word, 100)
  const normalizedWord = normalizeWord(word)
  if (normalizedWord.length < 2) {
    throw new RequestError(400, "Enter a word or phrase with at least two characters.")
  }
  return {
    kind,
    category: null,
    rating: null,
    email,
    normalizedWord,
    sourcePage,
    payload: {
      word,
      meaning: cleanText(input.meaning, 500),
      suggestedCategory: cleanText(input.suggestedCategory, 100),
      example: cleanText(input.example, 500),
      reason: cleanText(input.reason, 750),
    },
  }
}

export function validateEditedSuggestion(payload) {
  const edited = {
    word: cleanText(payload?.word, 100),
    meaning: cleanText(payload?.meaning, 500),
    suggestedCategory: cleanText(payload?.suggestedCategory, 100),
    example: cleanText(payload?.example, 500),
    reason: cleanText(payload?.reason, 750),
  }
  const normalizedWord = normalizeWord(edited.word)
  if (normalizedWord.length < 2) {
    throw new RequestError(400, "The edited word must contain at least two characters.")
  }
  return { edited, normalizedWord }
}

async function readBody(request) {
  const length = Number(request.headers.get("content-length") || 0)
  if (length > 24_000) throw new RequestError(413, "The submission is too large.")
  const text = await request.text()
  if (text.length > 24_000) throw new RequestError(413, "The submission is too large.")
  try {
    return JSON.parse(text)
  } catch {
    throw new RequestError(400, "The submission format is invalid.")
  }
}

async function verifyTurnstile(token, request, env) {
  if (!env.TURNSTILE_SECRET_KEY) {
    throw new RequestError(
      503,
      "Secure submissions are not configured yet. Nothing was saved.",
    )
  }
  if (!cleanText(token, 4096)) {
    throw new RequestError(400, "Complete the spam protection check and try again.")
  }
  const form = new FormData()
  form.append("secret", env.TURNSTILE_SECRET_KEY)
  form.append("response", token)
  const ip = request.headers.get("CF-Connecting-IP")
  if (ip) form.append("remoteip", ip)
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: form },
  )
  const result = await response.json()
  if (!result.success) {
    throw new RequestError(400, "The spam protection check failed. Please try again.")
  }
}

async function hashIdentifier(value, secret) {
  const bytes = new TextEncoder().encode(`${secret}:${value}`)
  const digest = await crypto.subtle.digest("SHA-256", bytes)
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("")
}

async function applyRateLimit(request, env) {
  if (!env.SUBMISSION_HASH_SECRET) {
    throw new RequestError(
      503,
      "Secure submissions are not configured yet. Nothing was saved.",
    )
  }
  const address = request.headers.get("CF-Connecting-IP") || "unknown"
  const identifier = await hashIdentifier(address, env.SUBMISSION_HASH_SECRET)
  const recent = await env.SUBMISSIONS_DB.prepare(
    "SELECT COUNT(*) AS count FROM submission_events WHERE identifier_hash = ? AND created_at >= datetime('now', '-1 hour')",
  )
    .bind(identifier)
    .first()
  if (Number(recent?.count || 0) >= 5) {
    throw new RequestError(429, "Too many submissions. Please try again later.")
  }
  await env.SUBMISSIONS_DB.prepare(
    "INSERT INTO submission_events (identifier_hash) VALUES (?)",
  )
    .bind(identifier)
    .run()
  if (Math.random() < 0.05) {
    await env.SUBMISSIONS_DB.prepare(
      "DELETE FROM submission_events WHERE created_at < datetime('now', '-2 days')",
    ).run()
  }
}

async function findDuplicate(normalizedWord, env) {
  if (!normalizedWord) return null
  const canonical = await env.SUBMISSIONS_DB.prepare(
    "SELECT word FROM canonical_words WHERE normalized_word = ? LIMIT 1",
  )
    .bind(normalizedWord)
    .first()
  if (canonical) return `“${canonical.word}” is already in the dictionary.`
  const pending = await env.SUBMISSIONS_DB.prepare(
    "SELECT id FROM submissions WHERE kind = 'suggestion' AND normalized_word = ? AND status IN ('pending', 'needs-review', 'approved') LIMIT 1",
  )
    .bind(normalizedWord)
    .first()
  return pending ? "That word has already been suggested and is awaiting review." : null
}

async function createSubmission(request, env) {
  if (!env.SUBMISSIONS_DB) {
    throw new RequestError(
      503,
      "Submission storage is not configured yet. Nothing was saved.",
    )
  }
  const body = await readBody(request)
  const submission = validateSubmission(body)
  await verifyTurnstile(body.turnstileToken, request, env)
  await applyRateLimit(request, env)
  const duplicate = await findDuplicate(submission.normalizedWord, env)
  if (duplicate) throw new RequestError(409, duplicate)

  const id = crypto.randomUUID()
  await env.SUBMISSIONS_DB.prepare(
    `INSERT INTO submissions
      (id, kind, status, rating, category, email, normalized_word, payload_json, source_page)
     VALUES (?, ?, 'pending', ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      id,
      submission.kind,
      submission.rating,
      submission.category,
      submission.email,
      submission.normalizedWord,
      JSON.stringify(submission.payload),
      submission.sourcePage,
    )
    .run()

  return json(
    {
      message:
        submission.kind === "suggestion"
          ? "Your suggestion was saved privately for editorial review."
          : "Your feedback was saved privately. Thank you for helping us improve.",
      reference: id.slice(0, 8).toUpperCase(),
    },
    201,
  )
}

function decodeBase64Url(value) {
  const unpadded = value.replace(/-/g, "+").replace(/_/g, "/")
  const normalized = unpadded.padEnd(Math.ceil(unpadded.length / 4) * 4, "=")
  const bytes = Uint8Array.from(atob(normalized), (character) => character.charCodeAt(0))
  return bytes
}

let accessKeys
async function verifyOwner(request, env) {
  if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD || !env.ADMIN_EMAIL) {
    throw new RequestError(503, "Owner review access is not configured.")
  }
  const token = request.headers.get("Cf-Access-Jwt-Assertion")
  if (!token) throw new RequestError(401, "Owner sign-in is required.")
  const parts = token.split(".")
  if (parts.length !== 3) throw new RequestError(401, "Owner session is invalid.")
  let header
  let payload
  try {
    header = JSON.parse(new TextDecoder().decode(decodeBase64Url(parts[0])))
    payload = JSON.parse(new TextDecoder().decode(decodeBase64Url(parts[1])))
  } catch {
    throw new RequestError(401, "Owner session is invalid.")
  }
  if (!accessKeys) {
    const response = await fetch(
      `https://${env.ACCESS_TEAM_DOMAIN}/cdn-cgi/access/certs`,
    )
    if (!response.ok) throw new RequestError(503, "Owner identity could not be verified.")
    accessKeys = await response.json()
  }
  const jwk = accessKeys.keys?.find((key) => key.kid === header.kid)
  if (!jwk) throw new RequestError(401, "Owner session is invalid.")
  const key = await crypto.subtle.importKey(
    "jwk",
    jwk,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"],
  )
  const valid = await crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    key,
    decodeBase64Url(parts[2]),
    new TextEncoder().encode(`${parts[0]}.${parts[1]}`),
  )
  const audiences = Array.isArray(payload.aud) ? payload.aud : [payload.aud]
  const now = Math.floor(Date.now() / 1000)
  if (
    !valid ||
    !audiences.includes(env.ACCESS_AUD) ||
    payload.iss !== `https://${env.ACCESS_TEAM_DOMAIN}` ||
    payload.exp <= now ||
    (payload.nbf && payload.nbf > now) ||
    cleanText(payload.email, 160).toLowerCase() !== env.ADMIN_EMAIL.toLowerCase()
  ) {
    throw new RequestError(403, "This account is not allowed to review submissions.")
  }
  return payload
}

async function listSubmissions(request, env) {
  await verifyOwner(request, env)
  if (!env.SUBMISSIONS_DB) throw new RequestError(503, "Submission storage is not configured.")
  const url = new URL(request.url)
  const status = REVIEW_STATUSES.has(url.searchParams.get("status"))
    ? url.searchParams.get("status")
    : "pending"
  const result = await env.SUBMISSIONS_DB.prepare(
    "SELECT id, kind, status, rating, category, email, normalized_word, payload_json, owner_note, created_at FROM submissions WHERE status = ? ORDER BY created_at DESC LIMIT 100",
  )
    .bind(status)
    .all()
  return json({
    submissions: (result.results || []).map((record) => ({
      ...record,
      payload: JSON.parse(record.payload_json || "{}"),
      payload_json: undefined,
    })),
  })
}

async function updateSubmission(request, env, id) {
  await verifyOwner(request, env)
  if (!env.SUBMISSIONS_DB) throw new RequestError(503, "Submission storage is not configured.")
  const body = await readBody(request)
  const status = cleanText(body.status, 30)
  if (!REVIEW_STATUSES.has(status)) throw new RequestError(400, "Choose a valid review status.")
  const ownerNote = cleanText(body.ownerNote, 1000) || null
  const existing = await env.SUBMISSIONS_DB.prepare(
    "SELECT kind, payload_json FROM submissions WHERE id = ? LIMIT 1",
  )
    .bind(id)
    .first()
  if (!existing) throw new RequestError(404, "Submission not found.")

  let payloadJson = existing.payload_json
  let normalizedWord = null
  if (existing.kind === "suggestion" && body.payload) {
    const validatedEdit = validateEditedSuggestion(body.payload)
    const edited = validatedEdit.edited
    normalizedWord = validatedEdit.normalizedWord
    const canonical = await env.SUBMISSIONS_DB.prepare(
      "SELECT word FROM canonical_words WHERE normalized_word = ? LIMIT 1",
    )
      .bind(normalizedWord)
      .first()
    if (canonical) {
      throw new RequestError(409, `“${canonical.word}” is already in the dictionary.`)
    }
    const otherSuggestion = await env.SUBMISSIONS_DB.prepare(
      "SELECT id FROM submissions WHERE id != ? AND kind = 'suggestion' AND normalized_word = ? AND status IN ('pending', 'needs-review', 'approved') LIMIT 1",
    )
      .bind(id, normalizedWord)
      .first()
    if (otherSuggestion) {
      throw new RequestError(409, "Another active suggestion already uses that word.")
    }
    payloadJson = JSON.stringify(edited)
  }
  const result = await env.SUBMISSIONS_DB.prepare(
    "UPDATE submissions SET status = ?, owner_note = ?, payload_json = ?, normalized_word = COALESCE(?, normalized_word), reviewed_at = datetime('now') WHERE id = ?",
  )
    .bind(status, ownerNote, payloadJson, normalizedWord, id)
    .run()
  if (!result.meta?.changes) throw new RequestError(500, "The review was not saved.")
  return json({ message: "Review saved." })
}

async function handleApi(request, env) {
  const url = new URL(request.url)
  if (url.pathname === "/api/submissions" && request.method === "POST") {
    return createSubmission(request, env)
  }
  if (url.pathname === "/api/admin/submissions" && request.method === "GET") {
    return listSubmissions(request, env)
  }
  const match = url.pathname.match(/^\/api\/admin\/submissions\/([0-9a-f-]+)$/i)
  if (match && request.method === "PATCH") {
    return updateSubmission(request, env, match[1])
  }
  return json({ message: "API route not found." }, 404)
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url)
      if (url.pathname.startsWith("/api/")) return await handleApi(request, env)
      if (url.pathname === "/review-submissions") await verifyOwner(request, env)
      return env.ASSETS.fetch(request)
    } catch (error) {
      if (error instanceof RequestError) return json({ message: error.message }, error.status)
      console.error("Unhandled submission worker error", error)
      return json({ message: "The service could not complete the request." }, 500)
    }
  },
}
