import test from "node:test"
import assert from "node:assert/strict"
import {
  isTrustedRequestOrigin,
  normalizeWord,
  validateEditedSuggestion,
  validateSubmission,
  validateTurnstileResult,
} from "./index.js"
import worker from "./index.js"

function startedAt() {
  return new Date(Date.now() - 5000).toISOString()
}

test("normalizes suggested words consistently", () => {
  assert.equal(normalizeWord("  Café   Culture!  "), "cafe culture")
})

test("accepts valid feedback without collecting an email", () => {
  const result = validateSubmission({
    kind: "feedback",
    category: "General feedback",
    message: "The practice activity was clear and useful.",
    formStartedAt: startedAt(),
  })
  assert.equal(result.kind, "feedback")
  assert.equal(result.email, null)
})

test("accepts a bounded vocabulary suggestion", () => {
  const result = validateSubmission({
    kind: "suggestion",
    word: "sustainability",
    meaning: "Using resources without harming the future.",
    formStartedAt: startedAt(),
  })
  assert.equal(result.normalizedWord, "sustainability")
})

test("rejects the honeypot field", () => {
  assert.throws(
    () =>
      validateSubmission({
        kind: "suggestion",
        word: "example",
        website: "spam.example",
        formStartedAt: startedAt(),
      }),
    /could not be verified/,
  )
})

test("rejects invalid email addresses", () => {
  assert.throws(
    () =>
      validateSubmission({
        kind: "feedback",
        category: "General feedback",
        message: "This is a valid length feedback message.",
        email: "not-an-email",
        formStartedAt: startedAt(),
      }),
    /valid email/,
  )
})

test("rejects a form submitted too quickly", () => {
  assert.throws(
    () =>
      validateSubmission({
        kind: "suggestion",
        word: "example",
        formStartedAt: new Date().toISOString(),
      }),
    /take a moment/,
  )
})

test("normalizes owner edits before editorial approval", () => {
  const result = validateEditedSuggestion({
    word: "  Renewable   energy ",
    meaning: "Energy from sources that can be naturally replaced.",
  })
  assert.equal(result.normalizedWord, "renewable energy")
  assert.equal(result.edited.word, "Renewable   energy")
})

test("rejects an empty owner edit", () => {
  assert.throws(() => validateEditedSuggestion({ word: "!" }), /at least two characters/)
})

test("allows same-origin requests and rejects cross-site requests", () => {
  assert.equal(
    isTrustedRequestOrigin(
      new Request("https://example.com/api/submissions", {
        headers: {
          Origin: "https://example.com",
          "Sec-Fetch-Site": "same-origin",
        },
      }),
    ),
    true,
  )
  assert.equal(
    isTrustedRequestOrigin(
      new Request("https://example.com/api/submissions", {
        headers: {
          Origin: "https://attacker.example",
          "Sec-Fetch-Site": "cross-site",
        },
      }),
    ),
    false,
  )
})

test("requires the expected Turnstile action and hostname", () => {
  const request = new Request("https://learn.example/api/submissions")
  const env = { TURNSTILE_HOSTNAMES: "learn.example,preview.example" }
  assert.doesNotThrow(() =>
    validateTurnstileResult(
      {
        success: true,
        action: "submit_feedback",
        hostname: "learn.example",
      },
      request,
      env,
    ),
  )
  assert.throws(
    () =>
      validateTurnstileResult(
        {
          success: true,
          action: "different_action",
          hostname: "learn.example",
        },
        request,
        env,
      ),
    /spam protection check failed/i,
  )
  assert.throws(
    () =>
      validateTurnstileResult(
        {
          success: true,
          action: "submit_feedback",
          hostname: "attacker.example",
        },
        request,
        env,
      ),
    /spam protection check failed/i,
  )
})

test("adds security headers to static responses", async () => {
  const response = await worker.fetch(new Request("https://learn.example/"), {
    ASSETS: {
      fetch: () => new Response("<main>Learning</main>", {
        headers: { "Content-Type": "text/html" },
      }),
    },
  })
  assert.equal(response.status, 200)
  assert.equal(response.headers.get("x-content-type-options"), "nosniff")
  assert.equal(response.headers.get("x-frame-options"), "DENY")
  assert.match(response.headers.get("content-security-policy"), /frame-ancestors 'none'/)
})
