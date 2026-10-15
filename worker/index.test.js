import test from "node:test"
import assert from "node:assert/strict"
import { normalizeWord, validateSubmission } from "./index.js"

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
