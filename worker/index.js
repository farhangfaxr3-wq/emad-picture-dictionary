import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
} from "@simplewebauthn/server"

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",

  "cache-control": "no-store",

  "x-content-type-options": "nosniff",
}

const TURNSTILE_ACTION = "submit_feedback"

const TURNSTILE_LOCAL_TEST_SECRET = "1x0000000000000000000000000000000AA"

const FORM_MINIMUM_REVIEW_MS = 1500

const FORM_MAX_AGE_MS = 2 * 60 * 60 * 1000

const CLIENT_CLOCK_SKEW_TOLERANCE_MS = 24 * 60 * 60 * 1000

const ADMIN_SESSION_COOKIE = "__Host-emad_admin"

const ADMIN_SESSION_SECONDS = 8 * 60 * 60

const ADMIN_PASSWORD_ITERATIONS = 210_000

const ADMIN_SETUP_PROOF_HEADER = "x-emad-admin-setup-proof"

const CHAT_SESSION_COOKIE = "__Host-emad_chat"

const CHAT_CHALLENGE_COOKIE = "__Host-emad_chat_challenge"

const CHAT_SESSION_SECONDS = 14 * 24 * 60 * 60

const CHAT_CHALLENGE_SECONDS = 5 * 60

const CHAT_MESSAGE_RETENTION_DAYS = 7

const DUMMY_ADMIN_ACCESS_CODE_HASH =
  "u4aGqZxB3wJGvCPk6EKBGfZxK1ZfJw7uRk2vK7gMx5M"

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

  "strict-transport-security": "max-age=31536000; includeSubDomains",

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

const ASSESSMENT_REVIEW_STATUSES = new Set([
  "draft",

  "approved",

  "rejected",

  "needs-review",
])

const ASSESSMENT_SKILLS = new Set([
  "vocabulary",

  "grammar",

  "reading",

  "listening",
])

const CEFR_LEVELS = new Set(["A1", "A2", "B1", "B2", "C1", "C2"])

const ASSESSMENT_SELECT = `
  SELECT id, status, bank_version, skill, cefr_level, prompt, options_json,
    correct_index, explanation, passage, audio_text, source_id, source_label,
    source_confidence, created_at, reviewed_at
  FROM assessment_questions`

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

export function validateAssessmentQuestion(input) {
  if (!input || typeof input !== "object") {
    throw new RequestError(400, "A valid assessment question is required.")
  }

  const id = cleanText(input.id, 180)

  const bankVersion = cleanText(input.bankVersion, 80)

  const skill = cleanText(input.skill, 30)

  const level = cleanText(input.level, 10)

  const prompt = cleanText(input.prompt, 600)

  const explanation = cleanText(input.explanation, 1000)

  const passage = cleanText(input.passage, 3000) || null

  const audioText = cleanText(input.audioText, 1500) || null

  const sourceId = cleanText(input.sourceId, 180) || null

  const sourceLabel = cleanText(input.sourceLabel, 240) || null

  const sourceConfidence = cleanText(input.sourceConfidence, 20) || null

  const options = Array.isArray(input.options)
    ? input.options.map((option) => cleanText(option, 500))
    : []

  const correctIndex = Number(input.correctIndex)

  if (!/^[a-z0-9][a-z0-9._-]{2,179}$/i.test(id)) {
    throw new RequestError(400, "Question id is invalid.")
  }

  if (
    !bankVersion ||
    !ASSESSMENT_SKILLS.has(skill) ||
    !CEFR_LEVELS.has(level)
  ) {
    throw new RequestError(400, "Question metadata is invalid.")
  }

  if (prompt.length < 8 || explanation.length < 8) {
    throw new RequestError(400, "Question text is incomplete.")
  }

  if (
    options.length !== 4 ||
    options.some((option) => option.length < 1) ||
    new Set(options.map((option) => option.toLowerCase())).size !== 4
  ) {
    throw new RequestError(400, "Questions require four unique answer options.")
  }

  if (!Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex > 3) {
    throw new RequestError(400, "Question answer key is invalid.")
  }

  if (skill === "listening" && !audioText) {
    throw new RequestError(
      400,
      "Listening questions require verified audio text.",
    )
  }

  if (
    sourceConfidence &&
    !["low", "medium", "high"].includes(sourceConfidence)
  ) {
    throw new RequestError(400, "Question confidence is invalid.")
  }

  return {
    id,

    bankVersion,

    skill,

    level,

    prompt,

    options,

    correctIndex,

    explanation,

    passage,

    audioText,

    sourceId,

    sourceLabel,

    sourceConfidence,
  }
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

  const elapsed = Date.now() - started

  // Browser clocks can differ substantially from Cloudflare's edge clock. A

  // future client timestamp is therefore not proof of an automated submit;

  // Turnstile, the honeypot, origin checks, and both rate limiters remain the

  // authoritative anti-abuse controls.

  if (
    !Number.isFinite(started) ||
    (elapsed >= 0 && elapsed < FORM_MINIMUM_REVIEW_MS)
  ) {
    throw new RequestError(
      400,

      "Please take a moment to review your submission.",
    )
  }

  if (elapsed > FORM_MAX_AGE_MS + CLIENT_CLOCK_SKEW_TOLERANCE_MS) {
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

async function readBody(request, maxLength = 24_000) {
  if (
    !request.headers

      .get("content-type")

      ?.toLowerCase()

      .startsWith("application/json")
  ) {
    throw new RequestError(415, "The submission must use JSON.")
  }

  const length = Number(request.headers.get("content-length") || 0)

  if (length > maxLength)
    throw new RequestError(413, "The submission is too large.")

  const text = await request.text()

  if (text.length > maxLength)
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

export function getAdminAccessCodeHashMap(env) {
  try {
    const storedValue = String(env.ADMIN_ACCESS_CODE_HASHES || "{}")

    const serialized = storedValue.startsWith("v1.")
      ? new TextDecoder().decode(decodeBase64Url(storedValue.slice(3)))
      : storedValue

    const parsed = JSON.parse(serialized)

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return {}

    return Object.fromEntries(
      Object.entries(parsed)

        .map(([email, hash]) => [email.trim().toLowerCase(), hash])

        .filter(
          ([email, hash]) =>
            email &&
            typeof hash === "string" &&
            /^[A-Za-z0-9_-]{43}$/.test(hash),
        ),
    )
  } catch {
    return {}
  }
}

export async function hashAdminAccessCode(code) {
  if (typeof code !== "string" || code.length < 24 || code.length > 128) {
    return ""
  }

  const digest = await crypto.subtle.digest(
    "SHA-256",

    new TextEncoder().encode(code),
  )

  return encodeBase64Url(new Uint8Array(digest))
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

async function secretsMatch(first, second) {
  if (typeof first !== "string" || typeof second !== "string") return false

  const encoder = new TextEncoder()

  const [firstDigest, secondDigest] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(first)),

    crypto.subtle.digest("SHA-256", encoder.encode(second)),
  ])

  const firstBytes = new Uint8Array(firstDigest)

  const secondBytes = new Uint8Array(secondDigest)

  let difference = 0

  for (let index = 0; index < firstBytes.length; index += 1) {
    difference |= firstBytes[index] ^ secondBytes[index]
  }

  return difference === 0
}

async function hasValidAdminSetupProof(request, env, now = Date.now()) {
  const stored = String(env.ADMIN_SETUP_PROOF || "")

  const supplied = request.headers.get(ADMIN_SETUP_PROOF_HEADER) || ""

  const separator = stored.indexOf(".")

  if (separator < 1 || !supplied) return false

  const expiresAt = Number(stored.slice(0, separator))

  if (
    !Number.isFinite(expiresAt) ||
    expiresAt <= now ||
    expiresAt > now + 15 * 60 * 1000
  ) {
    return false
  }

  return secretsMatch(stored, supplied)
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

  const setupVerified = await hasValidAdminSetupProof(request, env)

  const identifier = setupVerified
    ? null
    : await applyAdminLoginRateLimit(request, env)

  const adminEmails = getAdminEmails(env)

  const credentials = getAdminCredentialMap(env)

  const accessCodeHashes = getAdminAccessCodeHashMap(env)

  const credential = credentials[email] || DUMMY_ADMIN_CREDENTIAL

  const passwordMatches = await verifyAdminPassword(password, credential)

  const accessCodeHash = accessCodeHashes[email] || DUMMY_ADMIN_ACCESS_CODE_HASH

  const submittedAccessCodeHash = await hashAdminAccessCode(password)

  const accessCodeMatches = await secretsMatch(
    accessCodeHash,

    submittedAccessCodeHash,
  )

  const hasConfiguredMethod = Boolean(
    credentials[email] || accessCodeHashes[email],
  )

  if (
    !adminEmails.includes(email) ||
    !hasConfiguredMethod ||
    (!passwordMatches && !accessCodeMatches)
  ) {
    throw new RequestError(401, "Email or password is incorrect.")
  }

  const token = await createAdminSession(email, env)

  if (identifier) {
    await env.SUBMISSIONS_DB.prepare(
      "DELETE FROM admin_login_events WHERE identifier_hash = ?",
    )

      .bind(identifier)

      .run()
  }

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

function serializeAssessmentQuestion(record, includeReviewState = false) {
  let options = []

  try {
    options = JSON.parse(record.options_json || "[]")
  } catch {}

  return {
    id: record.id,

    ...(includeReviewState ? { status: record.status } : {}),

    bankVersion: record.bank_version,

    skill: record.skill,

    level: record.cefr_level,

    prompt: record.prompt,

    options,

    correctIndex: record.correct_index,

    explanation: record.explanation,

    passage: record.passage || undefined,

    audioText: record.audio_text || undefined,

    sourceId: record.source_id || undefined,

    sourceLabel: record.source_label || undefined,

    sourceConfidence: record.source_confidence || undefined,

    ...(includeReviewState
      ? {
          createdAt: record.created_at,

          reviewedAt: record.reviewed_at,
        }
      : {}),
  }
}

async function listApprovedAssessmentQuestions(env) {
  if (!env.SUBMISSIONS_DB) {
    return json({ questions: [], bankStatus: "curated-only" })
  }

  const result = await env.SUBMISSIONS_DB.prepare(
    `${ASSESSMENT_SELECT}
     WHERE status = 'approved'
     ORDER BY reviewed_at DESC, created_at DESC
     LIMIT 240`,
  ).all()

  return json({
    questions: (result.results || []).map((record) =>
      serializeAssessmentQuestion(record),
    ),

    bankStatus: "connected",
  })
}

async function listAssessmentQuestionsForReview(request, env) {
  await verifyOwner(request, env)

  if (!env.SUBMISSIONS_DB) {
    throw new RequestError(503, "Assessment storage is not configured.")
  }

  const requested = new URL(request.url).searchParams.get("status")

  const status = ASSESSMENT_REVIEW_STATUSES.has(requested) ? requested : "draft"

  const result = await env.SUBMISSIONS_DB.prepare(
    `${ASSESSMENT_SELECT}
     WHERE status = ?
     ORDER BY created_at DESC
     LIMIT 100`,
  )

    .bind(status)

    .all()

  return json({
    questions: (result.results || []).map((record) =>
      serializeAssessmentQuestion(record, true),
    ),
  })
}

async function syncAssessmentQuestions(request, env) {
  await verifyOwner(request, env)

  requireTrustedRequestOrigin(request)

  if (!env.SUBMISSIONS_DB) {
    throw new RequestError(503, "Assessment storage is not configured.")
  }

  // Owner-only candidate batches include four definitions per vocabulary

  // question. Keep the public submission cap small, but allow this trusted,

  // same-origin review endpoint to accept its documented 60-question batch.

  const body = await readBody(request, 128_000)

  if (!Array.isArray(body?.questions) || body.questions.length < 1) {
    throw new RequestError(400, "At least one question candidate is required.")
  }

  if (body.questions.length > 60) {
    throw new RequestError(
      400,
      "Sync question candidates in batches of 60 or fewer.",
    )
  }

  const questions = body.questions.map(validateAssessmentQuestion)

  const statements = questions.map((item) =>
    env.SUBMISSIONS_DB.prepare(
      `INSERT INTO assessment_questions
        (id, status, bank_version, skill, cefr_level, prompt, options_json,
         correct_index, explanation, passage, audio_text, source_id,
         source_label, source_confidence)
       VALUES (?, 'draft', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET
         bank_version = excluded.bank_version,
         skill = excluded.skill,
         cefr_level = excluded.cefr_level,
         prompt = excluded.prompt,
         options_json = excluded.options_json,
         correct_index = excluded.correct_index,
         explanation = excluded.explanation,
         passage = excluded.passage,
         audio_text = excluded.audio_text,
         source_id = excluded.source_id,
         source_label = excluded.source_label,
         source_confidence = excluded.source_confidence
       WHERE assessment_questions.status IN ('draft', 'needs-review')`,
    ).bind(
      item.id,

      item.bankVersion,

      item.skill,

      item.level,

      item.prompt,

      JSON.stringify(item.options),

      item.correctIndex,

      item.explanation,

      item.passage,

      item.audioText,

      item.sourceId,

      item.sourceLabel,

      item.sourceConfidence,
    ),
  )

  const results = await env.SUBMISSIONS_DB.batch(statements)

  const created = results.reduce(
    (total, result) => total + Number(result.meta?.changes || 0),

    0,
  )

  return json({
    message: "Assessment candidates synchronized for private review.",

    created,

    received: questions.length,
  })
}

async function updateAssessmentQuestion(request, env, id) {
  await verifyOwner(request, env)

  requireTrustedRequestOrigin(request)

  if (!env.SUBMISSIONS_DB) {
    throw new RequestError(503, "Assessment storage is not configured.")
  }

  const body = await readBody(request)

  const status = cleanText(body?.status, 30)

  if (!ASSESSMENT_REVIEW_STATUSES.has(status)) {
    throw new RequestError(400, "Choose a valid assessment review status.")
  }

  const result = await env.SUBMISSIONS_DB.prepare(
    `UPDATE assessment_questions
     SET status = ?, reviewed_at = datetime('now')
     WHERE id = ?`,
  )

    .bind(status, id)

    .run()

  if (!result.meta?.changes) {
    throw new RequestError(404, "Assessment question not found.")
  }

  return json({
    message:
      status === "approved"
        ? "Question approved for the live assessment pool."
        : "Assessment review saved.",
  })
}

function requireChatDatabase(env) {
  if (!env.SUBMISSIONS_DB) {
    throw new RequestError(503, "English Chat storage is not configured yet.")
  }
}

function chatCookieNames(request) {
  const hostname = new URL(request.url).hostname.toLowerCase()

  const local =
    hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1"

  return {
    challenge: local ? "emad_chat_challenge_local" : CHAT_CHALLENGE_COOKIE,

    session: local ? "emad_chat_local" : CHAT_SESSION_COOKIE,

    secure: !local,
  }
}

function chatCookie(request, name, value, maxAge) {
  const { secure } = chatCookieNames(request)

  return `${name}=${value}; Max-Age=${maxAge}; Path=/; HttpOnly; ${
    secure ? "Secure; " : ""
  }SameSite=Strict`
}

function webAuthnConfiguration(request) {
  const url = new URL(request.url)

  return {
    rpID: url.hostname,

    expectedOrigin: url.origin,
  }
}

export function validateDisplayName(value) {
  const displayName = cleanText(value, 24).replace(/\s+/g, " ")

  const key = displayName.toLowerCase()

  if (!/^[a-z0-9][a-z0-9 ._-]{2,23}$/i.test(displayName)) {
    throw new RequestError(
      400,

      "Use 3–24 English letters, numbers, spaces, dots, hyphens, or underscores.",
    )
  }

  if (
    /(?:@|https?:|www\.|\d{7,})/i.test(displayName) ||
    /\b(?:admin|administrator|moderator|support|soran university|emad team)\b/i.test(
      displayName,
    )
  ) {
    throw new RequestError(
      400,
      "Choose a safe display name without contact details or reserved words.",
    )
  }

  return { displayName, key }
}

export function validateChatMessage(value) {
  const body = cleanText(value, 301).replace(/\s+/g, " ")

  if (body.length < 1 || body.length > 300) {
    throw new RequestError(400, "Messages must contain 1–300 characters.")
  }

  if (
    /(?:https?:\/\/|www\.|\b[\w.+-]+@[\w.-]+\.[a-z]{2,}\b|(?:\+?\d[\d ()-]{6,}\d)|@[a-z0-9_]{2,})/i.test(
      body,
    )
  ) {
    throw new RequestError(
      400,
      "For privacy, do not share links, emails, phone numbers, or social handles.",
    )
  }

  if (
    /\b(?:fuck|shit|bitch|idiot|stupid|hate you|kill yourself)\b/i.test(body)
  ) {
    throw new RequestError(
      400,
      "Please rewrite the message using respectful language.",
    )
  }

  const letters = [...body].filter((character) => /\p{L}/u.test(character))

  const latinLetters = letters.filter((character) =>
    /\p{Script=Latin}/u.test(character),
  )

  if (
    !latinLetters.length ||
    latinLetters.length / Math.max(1, letters.length) < 0.85
  ) {
    throw new RequestError(
      400,
      "English Practice Room accepts English messages only.",
    )
  }

  return body
}

async function sha256(value) {
  const bytes =
    value instanceof Uint8Array ? value : new TextEncoder().encode(value)

  const digest = await crypto.subtle.digest("SHA-256", bytes)

  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("")
}

function randomToken(byteLength = 32) {
  return encodeBase64Url(crypto.getRandomValues(new Uint8Array(byteLength)))
}

async function applyChatEdgeLimit(request, env, scope) {
  if (!env.SUBMISSION_RATE_LIMITER) {
    throw new RequestError(
      503,
      "English Chat rate limiting is not configured yet.",
    )
  }

  const identifier = await requesterIdentifier(request, env)

  const result = await env.SUBMISSION_RATE_LIMITER.limit({
    key: `chat:${scope}:${identifier}`,
  })

  if (!result.success) {
    throw new RequestError(
      429,
      "Too many chat requests. Please wait and try again.",
    )
  }
}

async function cleanupChatData(env) {
  if (!env.SUBMISSIONS_DB) return

  await env.SUBMISSIONS_DB.batch([
    env.SUBMISSIONS_DB.prepare(
      `DELETE FROM chat_messages WHERE created_at < datetime('now', '-${CHAT_MESSAGE_RETENTION_DAYS} days')`,
    ),

    env.SUBMISSIONS_DB.prepare(
      "DELETE FROM chat_challenges WHERE expires_at <= datetime('now')",
    ),

    env.SUBMISSIONS_DB.prepare(
      "DELETE FROM chat_sessions WHERE expires_at <= datetime('now')",
    ),

    env.SUBMISSIONS_DB.prepare(
      "UPDATE chat_accounts SET status = 'active', restricted_until = NULL, updated_at = datetime('now') WHERE status = 'restricted' AND restricted_until IS NOT NULL AND restricted_until <= datetime('now')",
    ),
  ])
}

async function createChatSession(accountId, request, env) {
  const token = randomToken()

  const tokenHash = await sha256(token)

  await env.SUBMISSIONS_DB.prepare(
    `INSERT INTO chat_sessions (token_hash, account_id, expires_at)
     VALUES (?, ?, datetime('now', '+14 days'))`,
  )

    .bind(tokenHash, accountId)

    .run()

  const { session } = chatCookieNames(request)

  return {
    token,

    header: chatCookie(request, session, token, CHAT_SESSION_SECONDS),
  }
}

async function getChatSession(request, env, required = true) {
  requireChatDatabase(env)

  const { session } = chatCookieNames(request)

  const token = readCookie(request, session)

  if (!token) {
    if (required)
      throw new RequestError(
        401,
        "Sign in with your passkey to use English Chat.",
      )

    return null
  }

  const tokenHash = await sha256(token)

  const account = await env.SUBMISSIONS_DB.prepare(
    `SELECT a.id, a.display_name, a.status, a.restricted_until
     FROM chat_sessions s
     JOIN chat_accounts a ON a.id = s.account_id
     WHERE s.token_hash = ? AND s.expires_at > datetime('now')
     LIMIT 1`,
  )

    .bind(tokenHash)

    .first()

  if (!account) {
    if (required)
      throw new RequestError(
        401,
        "Your English Chat session expired. Sign in again.",
      )

    return null
  }

  if (
    account.status === "restricted" &&
    account.restricted_until &&
    account.restricted_until <=
      new Date().toISOString().replace("T", " ").slice(0, 19)
  ) {
    await env.SUBMISSIONS_DB.prepare(
      "UPDATE chat_accounts SET status = 'active', restricted_until = NULL, updated_at = datetime('now') WHERE id = ?",
    )

      .bind(account.id)

      .run()

    account.status = "active"

    account.restricted_until = null
  }

  return { ...account, tokenHash }
}

async function beginChatRegistration(request, env) {
  requireChatDatabase(env)

  requireTrustedRequestOrigin(request)

  await applyChatEdgeLimit(request, env, "register")

  const body = await readBody(request)

  const { displayName, key } = validateDisplayName(body?.displayName)

  const existing = await env.SUBMISSIONS_DB.prepare(
    "SELECT id FROM chat_accounts WHERE display_name_key = ? LIMIT 1",
  )

    .bind(key)

    .first()

  if (existing)
    throw new RequestError(409, "That display name is already in use.")

  const accountId = crypto.randomUUID()

  const challengeId = crypto.randomUUID()

  const { rpID } = webAuthnConfiguration(request)

  const options = await generateRegistrationOptions({
    rpName: "Emad WordLink English Chat",

    rpID,

    userID: new TextEncoder().encode(accountId),

    userName: displayName,

    userDisplayName: displayName,

    timeout: CHAT_CHALLENGE_SECONDS * 1000,

    attestationType: "none",

    authenticatorSelection: {
      residentKey: "preferred",

      userVerification: "required",
    },
  })

  await env.SUBMISSIONS_DB.prepare(
    `INSERT INTO chat_challenges
      (id, purpose, account_id, display_name, challenge, expires_at)
     VALUES (?, 'register', ?, ?, ?, datetime('now', '+5 minutes'))`,
  )

    .bind(challengeId, accountId, displayName, options.challenge)

    .run()

  const { challenge } = chatCookieNames(request)

  return json({ options }, 200, {
    "set-cookie": chatCookie(
      request,
      challenge,
      challengeId,
      CHAT_CHALLENGE_SECONDS,
    ),
  })
}

async function finishChatRegistration(request, env) {
  requireChatDatabase(env)

  requireTrustedRequestOrigin(request)

  const body = await readBody(request, 80_000)

  const { challenge } = chatCookieNames(request)

  const challengeId = readCookie(request, challenge)

  if (!challengeId)
    throw new RequestError(400, "Passkey registration expired. Start again.")

  const pending = await env.SUBMISSIONS_DB.prepare(
    `SELECT id, account_id, display_name, challenge
     FROM chat_challenges
     WHERE id = ? AND purpose = 'register' AND expires_at > datetime('now')`,
  )

    .bind(challengeId)

    .first()

  if (!pending)
    throw new RequestError(400, "Passkey registration expired. Start again.")

  const { displayName, key } = validateDisplayName(pending.display_name)

  const { rpID, expectedOrigin } = webAuthnConfiguration(request)

  let verification

  try {
    verification = await verifyRegistrationResponse({
      response: body?.response,

      expectedChallenge: pending.challenge,

      expectedOrigin,

      expectedRPID: rpID,

      requireUserVerification: true,
    })
  } catch {
    throw new RequestError(
      400,
      "The passkey could not be verified. Please try again.",
    )
  }

  if (!verification.verified || !verification.registrationInfo) {
    throw new RequestError(
      400,
      "The passkey could not be verified. Please try again.",
    )
  }

  const info = verification.registrationInfo

  const credential = info.credential

  const exists = await env.SUBMISSIONS_DB.prepare(
    "SELECT id FROM chat_accounts WHERE display_name_key = ? LIMIT 1",
  )

    .bind(key)

    .first()

  if (exists)
    throw new RequestError(409, "That display name is already in use.")

  await env.SUBMISSIONS_DB.batch([
    env.SUBMISSIONS_DB.prepare(
      "INSERT INTO chat_accounts (id, display_name, display_name_key) VALUES (?, ?, ?)",
    ).bind(pending.account_id, displayName, key),

    env.SUBMISSIONS_DB.prepare(
      `INSERT INTO chat_credentials
        (credential_id, account_id, public_key, counter, transports_json, device_type, backed_up)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    ).bind(
      credential.id,

      pending.account_id,

      encodeBase64Url(credential.publicKey),

      credential.counter,

      JSON.stringify(
        credential.transports || body?.response?.response?.transports || [],
      ),

      info.credentialDeviceType,

      info.credentialBackedUp ? 1 : 0,
    ),

    env.SUBMISSIONS_DB.prepare("DELETE FROM chat_challenges WHERE id = ?").bind(
      challengeId,
    ),
  ])

  const session = await createChatSession(pending.account_id, request, env)

  return json(
    { account: { id: pending.account_id, displayName, status: "active" } },

    201,

    { "set-cookie": session.header },
  )
}

async function beginChatLogin(request, env) {
  requireChatDatabase(env)

  requireTrustedRequestOrigin(request)

  await applyChatEdgeLimit(request, env, "login")

  const body = await readBody(request)

  const { key } = validateDisplayName(body?.displayName)

  const account = await env.SUBMISSIONS_DB.prepare(
    "SELECT id, display_name FROM chat_accounts WHERE display_name_key = ? LIMIT 1",
  )

    .bind(key)

    .first()

  if (!account)
    throw new RequestError(404, "No passkey account matches that display name.")

  const result = await env.SUBMISSIONS_DB.prepare(
    "SELECT credential_id, transports_json FROM chat_credentials WHERE account_id = ?",
  )

    .bind(account.id)

    .all()

  const allowCredentials = (result.results || []).map((record) => ({
    id: record.credential_id,

    transports: JSON.parse(record.transports_json || "[]"),
  }))

  if (!allowCredentials.length)
    throw new RequestError(409, "This account has no usable passkey.")

  const challengeId = crypto.randomUUID()

  const { rpID } = webAuthnConfiguration(request)

  const options = await generateAuthenticationOptions({
    rpID,

    allowCredentials,

    timeout: CHAT_CHALLENGE_SECONDS * 1000,

    userVerification: "required",
  })

  await env.SUBMISSIONS_DB.prepare(
    `INSERT INTO chat_challenges
      (id, purpose, account_id, display_name, challenge, expires_at)
     VALUES (?, 'login', ?, ?, ?, datetime('now', '+5 minutes'))`,
  )

    .bind(challengeId, account.id, account.display_name, options.challenge)

    .run()

  const { challenge } = chatCookieNames(request)

  return json({ options }, 200, {
    "set-cookie": chatCookie(
      request,
      challenge,
      challengeId,
      CHAT_CHALLENGE_SECONDS,
    ),
  })
}

async function finishChatLogin(request, env) {
  requireChatDatabase(env)

  requireTrustedRequestOrigin(request)

  const body = await readBody(request, 80_000)

  const { challenge } = chatCookieNames(request)

  const challengeId = readCookie(request, challenge)

  if (!challengeId)
    throw new RequestError(400, "Passkey sign-in expired. Start again.")

  const pending = await env.SUBMISSIONS_DB.prepare(
    `SELECT c.id, c.account_id, c.display_name, c.challenge,
      a.status, a.restricted_until
     FROM chat_challenges c
     JOIN chat_accounts a ON a.id = c.account_id
     WHERE c.id = ? AND c.purpose = 'login' AND c.expires_at > datetime('now')`,
  )

    .bind(challengeId)

    .first()

  if (!pending)
    throw new RequestError(400, "Passkey sign-in expired. Start again.")

  const credentialId = cleanText(body?.response?.id, 1500)

  const record = await env.SUBMISSIONS_DB.prepare(
    `SELECT credential_id, public_key, counter, transports_json, device_type, backed_up
     FROM chat_credentials WHERE credential_id = ? AND account_id = ? LIMIT 1`,
  )

    .bind(credentialId, pending.account_id)

    .first()

  if (!record)
    throw new RequestError(
      400,
      "The passkey is not registered to this account.",
    )

  const { rpID, expectedOrigin } = webAuthnConfiguration(request)

  let verification

  try {
    verification = await verifyAuthenticationResponse({
      response: body?.response,

      expectedChallenge: pending.challenge,

      expectedOrigin,

      expectedRPID: rpID,

      requireUserVerification: true,

      credential: {
        id: record.credential_id,

        publicKey: decodeBase64Url(record.public_key),

        counter: Number(record.counter || 0),

        transports: JSON.parse(record.transports_json || "[]"),
      },
    })
  } catch {
    throw new RequestError(401, "The passkey could not be verified.")
  }

  if (!verification.verified)
    throw new RequestError(401, "The passkey could not be verified.")

  await env.SUBMISSIONS_DB.batch([
    env.SUBMISSIONS_DB.prepare(
      "UPDATE chat_credentials SET counter = ?, last_used_at = datetime('now') WHERE credential_id = ?",
    ).bind(verification.authenticationInfo.newCounter, record.credential_id),

    env.SUBMISSIONS_DB.prepare("DELETE FROM chat_challenges WHERE id = ?").bind(
      challengeId,
    ),
  ])

  const session = await createChatSession(pending.account_id, request, env)

  return json(
    {
      account: {
        id: pending.account_id,

        displayName: pending.display_name,

        status: pending.status,

        restrictedUntil: pending.restricted_until,
      },
    },

    200,

    { "set-cookie": session.header },
  )
}

async function chatSessionResponse(request, env) {
  const account = await getChatSession(request, env, false)

  return json({
    account: account
      ? {
          id: account.id,

          displayName: account.display_name,

          status: account.status,

          restrictedUntil: account.restricted_until,
        }
      : null,
  })
}

async function chatLogout(request, env) {
  requireTrustedRequestOrigin(request)

  const account = await getChatSession(request, env, false)

  if (account) {
    await env.SUBMISSIONS_DB.prepare(
      "DELETE FROM chat_sessions WHERE token_hash = ?",
    )

      .bind(account.tokenHash)

      .run()
  }

  const { session } = chatCookieNames(request)

  return json({ message: "Signed out of English Chat." }, 200, {
    "set-cookie": chatCookie(request, session, "", 0),
  })
}

async function deleteChatAccount(request, env) {
  requireTrustedRequestOrigin(request)

  const account = await getChatSession(request, env)

  await env.SUBMISSIONS_DB.batch([
    env.SUBMISSIONS_DB.prepare(
      "DELETE FROM chat_reports WHERE reporter_account_id = ?",
    ).bind(
      account.id,
    ),

    env.SUBMISSIONS_DB.prepare(
      "DELETE FROM chat_reports WHERE message_id IN (SELECT id FROM chat_messages WHERE account_id = ?)",
    ).bind(account.id),

    env.SUBMISSIONS_DB.prepare(
      "DELETE FROM chat_messages WHERE account_id = ?",
    ).bind(account.id),

    env.SUBMISSIONS_DB.prepare(
      "DELETE FROM chat_sessions WHERE account_id = ?",
    ).bind(account.id),

    env.SUBMISSIONS_DB.prepare(
      "DELETE FROM chat_credentials WHERE account_id = ?",
    ).bind(account.id),

    env.SUBMISSIONS_DB.prepare("DELETE FROM chat_accounts WHERE id = ?").bind(
      account.id,
    ),
  ])

  const { session } = chatCookieNames(request)

  return json(
    { message: "Your English Chat account and messages were deleted." },
    200,
    {
      "set-cookie": chatCookie(request, session, "", 0),
    },
  )
}

async function listChatMessages(request, env) {
  await applyChatEdgeLimit(request, env, "read")

  const account = await getChatSession(request, env)

  await cleanupChatData(env)

  const url = new URL(request.url)

  const before = cleanText(url.searchParams.get("before"), 40)

  const limit = Math.min(
    50,

    Math.max(10, Math.trunc(Number(url.searchParams.get("limit")) || 30)),
  )

  const statement = before
    ? env.SUBMISSIONS_DB.prepare(
        `SELECT m.id, m.account_id, m.body, m.created_at, a.display_name
         FROM chat_messages m JOIN chat_accounts a ON a.id = m.account_id
         WHERE m.hidden_at IS NULL AND m.created_at < ?
         ORDER BY m.created_at DESC LIMIT ?`,
      ).bind(before, limit)
    : env.SUBMISSIONS_DB.prepare(
        `SELECT m.id, m.account_id, m.body, m.created_at, a.display_name
         FROM chat_messages m JOIN chat_accounts a ON a.id = m.account_id
         WHERE m.hidden_at IS NULL
         ORDER BY m.created_at DESC LIMIT ?`,
      ).bind(limit)

  const result = await statement.all()

  const messages = (result.results || []).reverse().map((record) => ({
    id: record.id,

    displayName: record.display_name,

    body: record.body,

    createdAt: record.created_at,

    own: record.account_id === account.id,
  }))

  return json({
    messages,

    retentionDays: CHAT_MESSAGE_RETENTION_DAYS,

    nextBefore: messages.length === limit ? messages[0]?.createdAt : null,
  })
}

async function createChatMessage(request, env) {
  requireTrustedRequestOrigin(request)

  await applyChatEdgeLimit(request, env, "message")

  const account = await getChatSession(request, env)

  if (account.status === "restricted") {
    throw new RequestError(
      403,
      "This account is temporarily restricted from sending messages.",
    )
  }

  const body = await readBody(request)

  const message = validateChatMessage(body?.message)

  const recent = await env.SUBMISSIONS_DB.prepare(
    "SELECT created_at FROM chat_messages WHERE account_id = ? ORDER BY created_at DESC LIMIT 1",
  )

    .bind(account.id)

    .first()

  if (recent && Date.now() - Date.parse(`${recent.created_at}Z`) < 3_000) {
    throw new RequestError(
      429,
      "Please wait a few seconds before sending another message.",
    )
  }

  const hourly = await env.SUBMISSIONS_DB.prepare(
    "SELECT COUNT(*) AS count FROM chat_messages WHERE account_id = ? AND created_at >= datetime('now', '-1 hour')",
  )

    .bind(account.id)

    .first()

  if (Number(hourly?.count || 0) >= 60) {
    throw new RequestError(
      429,
      "Hourly message limit reached. Please return later.",
    )
  }

  const id = crypto.randomUUID()

  await env.SUBMISSIONS_DB.prepare(
    "INSERT INTO chat_messages (id, account_id, body) VALUES (?, ?, ?)",
  )

    .bind(id, account.id, message)

    .run()

  return json(
    {
      message: {
        id,

        displayName: account.display_name,

        body: message,

        createdAt: new Date().toISOString(),

        own: true,
      },
    },

    201,
  )
}

async function reportChatMessage(request, env, messageId) {
  requireTrustedRequestOrigin(request)

  const account = await getChatSession(request, env)

  const body = await readBody(request)

  const reason = cleanText(body?.reason, 240)

  if (reason.length < 4)
    throw new RequestError(
      400,
      "Briefly explain why this message needs review.",
    )

  const message = await env.SUBMISSIONS_DB.prepare(
    "SELECT account_id FROM chat_messages WHERE id = ? AND hidden_at IS NULL LIMIT 1",
  )

    .bind(messageId)

    .first()

  if (!message) throw new RequestError(404, "Message not found.")

  if (message.account_id === account.id)
    throw new RequestError(400, "You cannot report your own message.")

  try {
    await env.SUBMISSIONS_DB.prepare(
      "INSERT INTO chat_reports (id, message_id, reporter_account_id, reason) VALUES (?, ?, ?, ?)",
    )

      .bind(crypto.randomUUID(), messageId, account.id, reason)

      .run()
  } catch {
    throw new RequestError(409, "You already reported this message.")
  }

  return json({ message: "Report sent privately to the site owners." }, 201)
}

async function listChatModeration(request, env) {
  await verifyOwner(request, env)

  const reports = await env.SUBMISSIONS_DB.prepare(
    `SELECT r.id, r.message_id, r.reason, r.status, r.created_at,
      m.body, author.display_name AS author_name, author.id AS author_id,
      reporter.display_name AS reporter_name
     FROM chat_reports r
     JOIN chat_messages m ON m.id = r.message_id
     JOIN chat_accounts author ON author.id = m.account_id
     JOIN chat_accounts reporter ON reporter.id = r.reporter_account_id
     ORDER BY CASE r.status WHEN 'pending' THEN 0 ELSE 1 END, r.created_at DESC
     LIMIT 100`,
  ).all()

  const accounts = await env.SUBMISSIONS_DB.prepare(
    `SELECT id, display_name, status, restricted_until, created_at
     FROM chat_accounts ORDER BY created_at DESC LIMIT 100`,
  ).all()

  return json({
    reports: reports.results || [],
    accounts: accounts.results || [],
  })
}

async function moderateChatMessage(request, env, messageId) {
  const owner = await verifyOwner(request, env)

  requireTrustedRequestOrigin(request)

  const body = await readBody(request)

  const action = cleanText(body?.action, 20)

  if (!["hide", "restore", "dismiss-report"].includes(action)) {
    throw new RequestError(400, "Choose a valid moderation action.")
  }

  if (action === "hide") {
    await env.SUBMISSIONS_DB.prepare(
      "UPDATE chat_messages SET hidden_at = datetime('now'), hidden_by = ? WHERE id = ?",
    )
      .bind(owner.email, messageId)
      .run()

    await env.SUBMISSIONS_DB.prepare(
      "UPDATE chat_reports SET status = 'reviewed', reviewed_at = datetime('now'), reviewed_by = ? WHERE message_id = ?",
    )
      .bind(owner.email, messageId)
      .run()
  } else if (action === "restore") {
    await env.SUBMISSIONS_DB.prepare(
      "UPDATE chat_messages SET hidden_at = NULL, hidden_by = NULL WHERE id = ?",
    )
      .bind(messageId)
      .run()
  } else {
    await env.SUBMISSIONS_DB.prepare(
      "UPDATE chat_reports SET status = 'dismissed', reviewed_at = datetime('now'), reviewed_by = ? WHERE message_id = ?",
    )
      .bind(owner.email, messageId)
      .run()
  }

  return json({ message: "Chat moderation saved." })
}

async function moderateChatAccount(request, env, accountId) {
  await verifyOwner(request, env)

  requireTrustedRequestOrigin(request)

  const body = await readBody(request)

  const action = cleanText(body?.action, 20)

  if (!["restrict", "unrestrict"].includes(action)) {
    throw new RequestError(400, "Choose a valid account action.")
  }

  if (action === "unrestrict") {
    await env.SUBMISSIONS_DB.prepare(
      "UPDATE chat_accounts SET status = 'active', restricted_until = NULL, updated_at = datetime('now') WHERE id = ?",
    )
      .bind(accountId)
      .run()
  } else {
    const minutes = Math.min(10_080, Math.max(10, Number(body?.minutes) || 60))

    await env.SUBMISSIONS_DB.prepare(
      "UPDATE chat_accounts SET status = 'restricted', restricted_until = datetime('now', ?), updated_at = datetime('now') WHERE id = ?",
    )
      .bind(`+${minutes} minutes`, accountId)
      .run()
  }

  return json({ message: "Chat account moderation saved." })
}

async function handleApi(request, env) {
  const url = new URL(request.url)

  if (
    url.pathname === "/api/chat/register/options" &&
    request.method === "POST"
  ) {
    return beginChatRegistration(request, env)
  }

  if (
    url.pathname === "/api/chat/register/verify" &&
    request.method === "POST"
  ) {
    return finishChatRegistration(request, env)
  }

  if (url.pathname === "/api/chat/login/options" && request.method === "POST") {
    return beginChatLogin(request, env)
  }

  if (url.pathname === "/api/chat/login/verify" && request.method === "POST") {
    return finishChatLogin(request, env)
  }

  if (url.pathname === "/api/chat/session" && request.method === "GET") {
    return chatSessionResponse(request, env)
  }

  if (url.pathname === "/api/chat/logout" && request.method === "POST") {
    return chatLogout(request, env)
  }

  if (url.pathname === "/api/chat/account" && request.method === "DELETE") {
    return deleteChatAccount(request, env)
  }

  if (url.pathname === "/api/chat/messages" && request.method === "GET") {
    return listChatMessages(request, env)
  }

  if (url.pathname === "/api/chat/messages" && request.method === "POST") {
    return createChatMessage(request, env)
  }

  const chatReportMatch = url.pathname.match(
    /^\/api\/chat\/messages\/([0-9a-f-]+)\/report$/i,
  )

  if (chatReportMatch && request.method === "POST") {
    return reportChatMessage(request, env, chatReportMatch[1])
  }

  if (
    url.pathname === "/api/assessment/questions" &&
    request.method === "GET"
  ) {
    return listApprovedAssessmentQuestions(env)
  }

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

  if (url.pathname === "/api/admin/chat" && request.method === "GET") {
    return listChatModeration(request, env)
  }

  const chatModerationMessageMatch = url.pathname.match(
    /^\/api\/admin\/chat\/messages\/([0-9a-f-]+)$/i,
  )

  if (chatModerationMessageMatch && request.method === "PATCH") {
    return moderateChatMessage(request, env, chatModerationMessageMatch[1])
  }

  const chatModerationAccountMatch = url.pathname.match(
    /^\/api\/admin\/chat\/accounts\/([0-9a-f-]+)$/i,
  )

  if (chatModerationAccountMatch && request.method === "PATCH") {
    return moderateChatAccount(request, env, chatModerationAccountMatch[1])
  }

  if (
    url.pathname === "/api/admin/assessment/questions" &&
    request.method === "GET"
  ) {
    return listAssessmentQuestionsForReview(request, env)
  }

  if (
    url.pathname === "/api/admin/assessment/questions/sync" &&
    request.method === "POST"
  ) {
    return syncAssessmentQuestions(request, env)
  }

  const assessmentMatch = url.pathname.match(
    /^\/api\/admin\/assessment\/questions\/([a-z0-9._-]+)$/i,
  )

  if (assessmentMatch && request.method === "PATCH") {
    return updateAssessmentQuestion(request, env, assessmentMatch[1])
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

  async scheduled(_controller, env, context) {
    context.waitUntil(cleanupChatData(env))
  },
}
