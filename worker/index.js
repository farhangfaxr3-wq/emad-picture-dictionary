const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "x-content-type-options": "nosniff",
}
const TURNSTILE_ACTION = "submit_feedback"
const TURNSTILE_LOCAL_TEST_SECRET = "1x0000000000000000000000000000000AA"
const ADMIN_SESSION_COOKIE = "__Host-emad_admin"
const ADMIN_SESSION_SECONDS = 8 * 60 * 60
const ADMIN_PASSWORD_ITERATIONS = 210_000
const DUMMY_ADMIN_CREDENTIAL = {
  salt: "Kzh5dHVY5LpM6uEoKYwYPw",
  hash: "UJ67vSdxJgzMa4__vSLzLxoM0p3dsmfLDszcbA7b-kg",
  iterations: ADMIN_PASSWORD_ITERATIONS,
}
const SECURITY_HEADERS = {
  "content-security-policy":
    "default-src 'self'; base-uri 'self'; connect-src 'self' https://challenges.cloudflare.com; font-src 'self' data:; form-action 'self'; frame-ancestors 'none'; frame-src https://challenges.cloudflare.com; img-src 'self' data:; object-src 'none'; script-src 'self' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; upgrade-insecure-requests",
  "permissions-policy": "camera=(), geolocation=(), microphone=()",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
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

function json(data, status = 200, extraHeaders = {}) {
  const headers = new Headers(JSON_HEADERS)
  for (const [name, value] of Object.entries(extraHeaders)) {
    headers.set(name, value)
  }
  return new Response(JSON.stringify(data), {
    status,
    headers,
  })
}

function secureResponse(response) {
  const headers = new Headers(response.headers)
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value)
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

export function isTrustedRequestOrigin(request) {
  const url = new URL(request.url)
  const origin = request.headers.get("origin")
  const fetchSite = request.headers.get("sec-fetch-site")
  return fetchSite !== "cross-site" && (!origin || origin === url.origin)
}

function requireTrustedRequestOrigin(request) {
  if (!isTrustedRequestOrigin(request)) {
    throw new RequestError(403, "Cross-site submissions are not allowed.")
  }
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
    throw new RequestError(
      400,
      "Please enter a valid email address or leave it blank.",
    )
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
    throw new RequestError(
      400,
      "Please take a moment to review your submission.",
    )
  }
  if (Date.now() - started > 2 * 60 * 60 * 1000) {
    throw new RequestError(
      400,
      "This form expired. Refresh the page and try again.",
    )
  }

  const kind = input.kind === "suggestion" ? "suggestion" : "feedback"
  const email = validateEmail(input.email)
  const sourcePage = cleanText(input.sourcePage, 200)
  if (kind === "feedback") {
    const category = cleanText(input.category, 100)
    const message = cleanText(input.message, 2000)
    const rating =
      input.rating == null || input.rating === "" ? null : Number(input.rating)
    if (!FEEDBACK_CATEGORIES.has(category)) {
      throw new RequestError(400, "Choose a valid feedback category.")
    }
    if (message.length < 10) {
      throw new RequestError(400, "Feedback must be at least 10 characters.")
    }
    if (
      rating !== null &&
      (!Number.isInteger(rating) || rating < 1 || rating > 5)
    ) {
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
    throw new RequestError(
      400,
      "Enter a word or phrase with at least two characters.",
    )
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
    throw new RequestError(
      400,
      "The edited word must contain at least two characters.",
    )
  }
  return { edited, normalizedWord }
}

async function readBody(request) {
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  ) {
    throw new RequestError(415, "The submission must use JSON.")
  }
  const length = Number(request.headers.get("content-length") || 0)
  if (length > 24_000)
    throw new RequestError(413, "The submission is too large.")
  const text = await request.text()
  if (text.length > 24_000)
    throw new RequestError(413, "The submission is too large.")
  try {
    return JSON.parse(text)
  } catch {
    throw new RequestError(400, "The submission format is invalid.")
  }
}

export function validateTurnstileResult(result, request, env) {
  const allowedHostnames = String(env.TURNSTILE_HOSTNAMES || "")
    .split(",")
    .map((hostname) => hostname.trim().toLowerCase())
    .filter(
      (hostname) => hostname && !hostname.startsWith("REPLACE_WITH_YOUR_"),
    )
  if (!allowedHostnames.length) {
    throw new RequestError(
      503,
      "Secure submissions are not configured yet. Nothing was saved.",
    )
  }
  if (
    result?.success &&
    env.TURNSTILE_SECRET_KEY === TURNSTILE_LOCAL_TEST_SECRET &&
    isLocalOwnerPreview(request, env)
  ) {
    return
  }
  if (
    !result?.success ||
    result.action !== TURNSTILE_ACTION ||
    !allowedHostnames.includes(new URL(request.url).hostname.toLowerCase()) ||
    !allowedHostnames.includes(String(result.hostname || "").toLowerCase())
  ) {
    throw new RequestError(
      400,
      "The spam protection check failed. Please try again.",
    )
  }
}

async function verifyTurnstile(token, request, env) {
  if (!env.TURNSTILE_SECRET_KEY) {
    throw new RequestError(
      503,
      "Secure submissions are not configured yet. Nothing was saved.",
    )
  }
  const cleanToken = cleanText(token, 2049)
  if (!cleanToken || cleanToken.length > 2048) {
    throw new RequestError(
      400,
      "Complete the spam protection check and try again.",
    )
  }
  const form = new FormData()
  form.append("secret", env.TURNSTILE_SECRET_KEY)
  form.append("response", cleanToken)
  const ip = request.headers.get("CF-Connecting-IP")
  if (ip) form.append("remoteip", ip)
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: form,
      signal: AbortSignal.timeout(10_000),
    },
  )
  if (!response.ok) {
    throw new RequestError(503, "Spam protection is temporarily unavailable.")
  }
  const result = await response.json()
  validateTurnstileResult(result, request, env)
}

async function hashIdentifier(value, secret) {
  const bytes = new TextEncoder().encode(`${secret}:${value}`)
  const digest = await crypto.subtle.digest("SHA-256", bytes)
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("")
}

async function requesterIdentifier(request, env) {
  if (!env.SUBMISSION_HASH_SECRET) {
    throw new RequestError(
      503,
      "Secure submissions are not configured yet. Nothing was saved.",
    )
  }
  const address = request.headers.get("CF-Connecting-IP") || "unknown"
  return hashIdentifier(address, env.SUBMISSION_HASH_SECRET)
}

async function applyEdgeRateLimit(request, env) {
  if (!env.SUBMISSION_RATE_LIMITER) {
    throw new RequestError(
      503,
      "Secure submissions are not configured yet. Nothing was saved.",
    )
  }
  const identifier = await requesterIdentifier(request, env)
  const result = await env.SUBMISSION_RATE_LIMITER.limit({
    key: `submission:${identifier}`,
  })
  if (!result.success) {
    throw new RequestError(429, "Too many requests. Please try again later.")
  }
  return identifier
}

async function applyDurableRateLimit(identifier, env) {
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
  return pending
    ? "That word has already been suggested and is awaiting review."
    : null
}

async function createSubmission(request, env) {
  if (!env.SUBMISSIONS_DB) {
    throw new RequestError(
      503,
      "Submission storage is not configured yet. Nothing was saved.",
    )
  }
  requireTrustedRequestOrigin(request)
  const identifier = await applyEdgeRateLimit(request, env)
  const body = await readBody(request)
  const submission = validateSubmission(body)
  await verifyTurnstile(body.turnstileToken, request, env)
  await applyDurableRateLimit(identifier, env)
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
  const bytes = Uint8Array.from(atob(normalized), (character) =>
    character.charCodeAt(0),
  )
  return bytes
}

function encodeBase64Url(value) {
  const bytes =
    value instanceof Uint8Array ? value : new TextEncoder().encode(value)
  let binary = ""
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "")
}

export function isLocalOwnerPreview(request, env) {
  const hostname = new URL(request.url).hostname.toLowerCase()
  return (
    env.LOCAL_DEV_ADMIN === "true" &&
    (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1")
  )
}

export function getAdminEmails(env) {
  const configured = env.ADMIN_EMAILS || env.ADMIN_EMAIL || ""
  return configured
    .split(",")
    .map((email) => cleanText(email, 160).toLowerCase())
    .filter(Boolean)
}

export function getAdminCredentialMap(env) {
  try {
    const storedValue = String(env.ADMIN_PASSWORD_HASHES || "{}")
    const serialized = storedValue.startsWith("v1.")
      ? new TextDecoder().decode(decodeBase64Url(storedValue.slice(3)))
      : storedValue
    const parsed = JSON.parse(serialized)
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return {}
    return Object.fromEntries(
      Object.entries(parsed)
        .map(([email, credential]) => [email.trim().toLowerCase(), credential])
        .filter(
          ([email, credential]) =>
            email &&
            credential &&
            typeof credential.salt === "string" &&
            typeof credential.hash === "string" &&
            Number.isInteger(credential.iterations) &&
            credential.iterations >= 100_000 &&
            credential.iterations <= 1_000_000,
        ),
    )
  } catch {
    return {}
  }
}

export async function derivePasswordHash(
  password,
  salt,
  iterations = ADMIN_PASSWORD_ITERATIONS,
) {
  const material = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  )
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: decodeBase64Url(salt),
      iterations,
    },
    material,
    256,
  )
  return encodeBase64Url(new Uint8Array(bits))
}

async function verifyAdminPassword(password, credential) {
  if (
    typeof password !== "string" ||
    password.length < 1 ||
    password.length > 256
  ) {
    return false
  }
  try {
    const derived = await derivePasswordHash(
      password,
      credential.salt,
      credential.iterations,
    )
    const actual = decodeBase64Url(derived)
    const expected = decodeBase64Url(credential.hash)
    if (actual.length !== expected.length) return false
    let difference = 0
    for (let index = 0; index < actual.length; index += 1) {
      difference |= actual[index] ^ expected[index]
    }
    return difference === 0
  } catch {
    return false
  }
}

function sessionSecret(env) {
  const secret = String(env.ADMIN_SESSION_SECRET || "")
  if (secret.length < 32) {
    throw new RequestError(503, "Owner sign-in is not configured yet.")
  }
  return secret
}

async function sessionKey(env) {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(sessionSecret(env)),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  )
}

export async function createAdminSession(email, env, now = Date.now()) {
  const issuedAt = Math.floor(now / 1000)
  const payload = encodeBase64Url(
    JSON.stringify({
      v: 1,
      email: email.toLowerCase(),
      iat: issuedAt,
      exp: issuedAt + ADMIN_SESSION_SECONDS,
      nonce: crypto.randomUUID(),
    }),
  )
  const signature = await crypto.subtle.sign(
    "HMAC",
    await sessionKey(env),
    new TextEncoder().encode(payload),
  )
  return `${payload}.${encodeBase64Url(new Uint8Array(signature))}`
}

export async function verifyAdminSession(token, env, now = Date.now()) {
  if (typeof token !== "string") return null
  const parts = token.split(".")
  if (parts.length !== 2) return null
  try {
    const valid = await crypto.subtle.verify(
      "HMAC",
      await sessionKey(env),
      decodeBase64Url(parts[1]),
      new TextEncoder().encode(parts[0]),
    )
    if (!valid) return null
    const payload = JSON.parse(
      new TextDecoder().decode(decodeBase64Url(parts[0])),
    )
    const timestamp = Math.floor(now / 1000)
    if (
      payload?.v !== 1 ||
      typeof payload.email !== "string" ||
      typeof payload.iat !== "number" ||
      typeof payload.exp !== "number" ||
      payload.iat > timestamp + 60 ||
      payload.exp <= timestamp ||
      payload.exp - payload.iat !== ADMIN_SESSION_SECONDS
    ) {
      return null
    }
    return payload
  } catch (error) {
    if (error instanceof RequestError) throw error
    return null
  }
}

function readCookie(request, name) {
  const cookie = request.headers.get("cookie") || ""
  for (const part of cookie.split(";")) {
    const separator = part.indexOf("=")
    if (separator === -1) continue
    if (part.slice(0, separator).trim() === name) {
      return part.slice(separator + 1).trim()
    }
  }
  return ""
}

async function applyAdminLoginRateLimit(request, env) {
  if (!env.SUBMISSIONS_DB || !env.SUBMISSION_RATE_LIMITER) {
    throw new RequestError(503, "Owner sign-in is not configured yet.")
  }
  if (!env.SUBMISSION_HASH_SECRET) {
    throw new RequestError(503, "Owner sign-in is not configured yet.")
  }
  const address = request.headers.get("CF-Connecting-IP") || "unknown"
  const identifier = await hashIdentifier(
    `admin-login:${address}`,
    env.SUBMISSION_HASH_SECRET,
  )
  const edgeResult = await env.SUBMISSION_RATE_LIMITER.limit({
    key: `admin-login:${identifier}`,
  })
  if (!edgeResult.success) {
    throw new RequestError(429, "Too many sign-in attempts. Try again later.")
  }
  const recent = await env.SUBMISSIONS_DB.prepare(
    "SELECT COUNT(*) AS count FROM admin_login_events WHERE identifier_hash = ? AND created_at >= datetime('now', '-30 minutes')",
  )
    .bind(identifier)
    .first()
  if (Number(recent?.count || 0) >= 8) {
    throw new RequestError(429, "Too many sign-in attempts. Try again later.")
  }
  await env.SUBMISSIONS_DB.prepare(
    "INSERT INTO admin_login_events (identifier_hash) VALUES (?)",
  )
    .bind(identifier)
    .run()
  if (Math.random() < 0.05) {
    await env.SUBMISSIONS_DB.prepare(
      "DELETE FROM admin_login_events WHERE created_at < datetime('now', '-2 days')",
    ).run()
  }
  return identifier
}

async function loginOwner(request, env) {
  requireTrustedRequestOrigin(request)
  const body = await readBody(request)
  const email = cleanText(body?.email, 160).toLowerCase()
  const password = typeof body?.password === "string" ? body.password : ""
  const identifier = await applyAdminLoginRateLimit(request, env)
  const adminEmails = getAdminEmails(env)
  const credentials = getAdminCredentialMap(env)
  const credential = credentials[email] || DUMMY_ADMIN_CREDENTIAL
  const passwordMatches = await verifyAdminPassword(password, credential)
  if (!adminEmails.includes(email) || !credentials[email] || !passwordMatches) {
    throw new RequestError(401, "Email or password is incorrect.")
  }
  const token = await createAdminSession(email, env)
  await env.SUBMISSIONS_DB.prepare(
    "DELETE FROM admin_login_events WHERE identifier_hash = ?",
  )
    .bind(identifier)
    .run()
  return json({ message: "Signed in securely.", email }, 200, {
    "set-cookie": `${ADMIN_SESSION_COOKIE}=${token}; Max-Age=${ADMIN_SESSION_SECONDS}; Path=/; HttpOnly; Secure; SameSite=Strict`,
  })
}

function logoutOwner(request) {
  requireTrustedRequestOrigin(request)
  return json({ message: "Signed out." }, 200, {
    "set-cookie": `${ADMIN_SESSION_COOKIE}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict`,
  })
}

async function verifyOwner(request, env) {
  const adminEmails = getAdminEmails(env)
  if (isLocalOwnerPreview(request, env)) {
    return { email: adminEmails[0] || "local-owner" }
  }
  if (
    adminEmails.length === 0 ||
    Object.keys(getAdminCredentialMap(env)).length === 0
  ) {
    throw new RequestError(503, "Owner review access is not configured.")
  }
  const token = readCookie(request, ADMIN_SESSION_COOKIE)
  if (!token) throw new RequestError(401, "Owner sign-in is required.")
  const payload = await verifyAdminSession(token, env)
  if (!payload)
    throw new RequestError(401, "Owner session expired. Sign in again.")
  if (!adminEmails.includes(cleanText(payload.email, 160).toLowerCase())) {
    throw new RequestError(
      403,
      "This account is not allowed to review submissions.",
    )
  }
  return payload
}

async function listSubmissions(request, env) {
  const owner = await verifyOwner(request, env)
  if (!env.SUBMISSIONS_DB)
    throw new RequestError(503, "Submission storage is not configured.")
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
    reviewer: owner.email,
    submissions: (result.results || []).map((record) => ({
      ...record,
      payload: JSON.parse(record.payload_json || "{}"),
      payload_json: undefined,
    })),
  })
}

async function updateSubmission(request, env, id) {
  await verifyOwner(request, env)
  requireTrustedRequestOrigin(request)
  if (!env.SUBMISSIONS_DB)
    throw new RequestError(503, "Submission storage is not configured.")
  const body = await readBody(request)
  const status = cleanText(body.status, 30)
  if (!REVIEW_STATUSES.has(status))
    throw new RequestError(400, "Choose a valid review status.")
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
      throw new RequestError(
        409,
        `“${canonical.word}” is already in the dictionary.`,
      )
    }
    const otherSuggestion = await env.SUBMISSIONS_DB.prepare(
      "SELECT id FROM submissions WHERE id != ? AND kind = 'suggestion' AND normalized_word = ? AND status IN ('pending', 'needs-review', 'approved') LIMIT 1",
    )
      .bind(id, normalizedWord)
      .first()
    if (otherSuggestion) {
      throw new RequestError(
        409,
        "Another active suggestion already uses that word.",
      )
    }
    payloadJson = JSON.stringify(edited)
  }
  const result = await env.SUBMISSIONS_DB.prepare(
    "UPDATE submissions SET status = ?, owner_note = ?, payload_json = ?, normalized_word = COALESCE(?, normalized_word), reviewed_at = datetime('now') WHERE id = ?",
  )
    .bind(status, ownerNote, payloadJson, normalizedWord, id)
    .run()
  if (!result.meta?.changes)
    throw new RequestError(500, "The review was not saved.")
  return json({ message: "Review saved." })
}

async function handleApi(request, env) {
  const url = new URL(request.url)
  if (url.pathname === "/api/submissions" && request.method === "POST") {
    return createSubmission(request, env)
  }
  if (url.pathname === "/api/admin/login" && request.method === "POST") {
    return loginOwner(request, env)
  }
  if (url.pathname === "/api/admin/logout" && request.method === "POST") {
    return logoutOwner(request)
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
      if (url.pathname.startsWith("/api/")) {
        return secureResponse(await handleApi(request, env))
      }
      return secureResponse(await env.ASSETS.fetch(request))
    } catch (error) {
      if (error instanceof RequestError) {
        return secureResponse(json({ message: error.message }, error.status))
      }
      console.error("Unhandled submission worker error", error)
      return secureResponse(
        json({ message: "The service could not complete the request." }, 500),
      )
    }
  },
}
