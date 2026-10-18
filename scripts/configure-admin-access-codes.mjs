import { randomBytes, webcrypto } from "node:crypto"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { spawnSync } from "node:child_process"

const config = JSON.parse(readFileSync("wrangler.jsonc", "utf8"))
const productionHostname = String(config.vars?.TURNSTILE_HOSTNAMES || "")
  .split(",")
  .map((hostname) => hostname.trim())
  .find(Boolean)
const adminEmails = String(config.vars?.ADMIN_EMAILS || "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean)

if (adminEmails.length === 0) {
  throw new Error(
    "Set ADMIN_EMAILS in wrangler.jsonc before configuring access codes.",
  )
}
if (!process.stdout.isTTY) {
  throw new Error("Run this command in an interactive terminal.")
}

function base64Url(value) {
  return Buffer.from(value).toString("base64url")
}

async function hashAccessCode(code) {
  const digest = await webcrypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(code),
  )
  return base64Url(new Uint8Array(digest))
}

function putSecrets(secrets) {
  const result = spawnSync(
    process.execPath,
    [resolve("node_modules/wrangler/bin/wrangler.js"), "secret", "bulk"],
    {
      cwd: process.cwd(),
      input: `${JSON.stringify(secrets)}\n`,
      stdio: ["pipe", "inherit", "inherit"],
    },
  )
  if (result.error) throw result.error
  if (result.status !== 0) {
    throw new Error("Cloudflare did not save the administrator access codes.")
  }
}

const wait = (milliseconds) =>
  new Promise((resolvePromise) => setTimeout(resolvePromise, milliseconds))

async function verifyProductionCode(email, code, setupProof) {
  if (!productionHostname) {
    throw new Error("TURNSTILE_HOSTNAMES is empty; production was not checked.")
  }
  const origin = `https://${productionHostname}`
  let lastStatus = "no response"
  for (const delay of [10_000, 10_000, 20_000, 20_000]) {
    console.log(
      `Waiting ${delay / 1000} seconds for Cloudflare to activate the access codes...`,
    )
    await wait(delay)
    try {
      const response = await fetch(`${origin}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: origin,
          "X-Emad-Admin-Setup-Proof": setupProof,
        },
        body: JSON.stringify({ email, password: code }),
      })
      if (response.ok) {
        console.log(`Production access-code sign-in verified for ${email}.`)
        return
      }
      const result = await response.json().catch(() => ({}))
      lastStatus = `${response.status}${result.message ? `: ${result.message}` : ""}`
    } catch (error) {
      lastStatus = error instanceof Error ? error.message : String(error)
    }
  }
  throw new Error(
    `Production access-code verification failed for ${email} (${lastStatus}). No access code was printed.`,
  )
}

const codes = new Map()
const codeHashes = {}
for (const email of adminEmails) {
  const code = `EPD-${base64Url(randomBytes(24))}`
  codes.set(email, code)
  codeHashes[email] = await hashAccessCode(code)
}

console.log("Saving one-way access-code hashes in Cloudflare...")
const setupProof = `${Date.now() + 10 * 60 * 1000}.${base64Url(randomBytes(32))}`
putSecrets({
  ADMIN_ACCESS_CODE_HASHES: `v1.${base64Url(JSON.stringify(codeHashes))}`,
  ADMIN_SESSION_SECRET: base64Url(randomBytes(32)),
  ADMIN_SETUP_PROOF: setupProof,
})

console.log("Checking the generated access codes against the public website...")
for (const [email, code] of codes) {
  await verifyProductionCode(email, code, setupProof)
}

console.log("\nSECURE ADMINISTRATOR ACCESS CODES")
console.log("Save each code in a password manager. They will not be shown again.\n")
for (const [email, code] of codes) {
  console.log(`${email}: ${code}`)
}
console.log(
  "\nAccess-code authentication is configured and verified. No code was saved locally.",
)
codes.clear()
