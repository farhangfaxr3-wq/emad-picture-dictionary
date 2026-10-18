import { randomBytes, webcrypto } from "node:crypto"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { spawnSync } from "node:child_process"

const ITERATIONS = 210_000
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
    "Set ADMIN_EMAILS in wrangler.jsonc before configuring sign-in.",
  )
}
if (!process.stdin.isTTY || !process.stdout.isTTY) {
  throw new Error("Run this command in an interactive terminal.")
}

function base64Url(value) {
  return Buffer.from(value).toString("base64url")
}

async function derivePasswordHash(password, salt) {
  const material = await webcrypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  )
  const bits = await webcrypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations: ITERATIONS,
    },
    material,
    256,
  )
  return base64Url(new Uint8Array(bits))
}

function readHidden(prompt) {
  return new Promise((resolve, reject) => {
    let value = ""
    const input = process.stdin
    const output = process.stdout
    const wasRaw = input.isRaw
    const cleanup = () => {
      input.off("data", onData)
      input.setRawMode(Boolean(wasRaw))
      input.pause()
    }
    const onData = (chunk) => {
      for (const character of String(chunk)) {
        if (character === "\u0003") {
          cleanup()
          output.write("\n")
          reject(new Error("Cancelled."))
          return
        }
        if (character === "\r" || character === "\n") {
          cleanup()
          output.write("\n")
          resolve(value)
          return
        }
        if (character === "\u007f" || character === "\b") {
          if (value) {
            value = value.slice(0, -1)
            output.write("\b \b")
          }
          continue
        }
        if (character >= " ") {
          value += character
          output.write("*")
        }
      }
    }
    output.write(prompt)
    input.setEncoding("utf8")
    input.setRawMode(true)
    input.resume()
    input.on("data", onData)
  })
}

function validatePassword(password, email) {
  if (password.length < 14 || password.length > 128) {
    return "Use 14 to 128 characters."
  }
  if (password !== password.trim()) {
    return "Do not put a space at the beginning or end of the password."
  }
  if (password.toLowerCase().includes(email.split("@")[0])) {
    return "Do not include the email username in the password."
  }
  const groups = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/]
  if (groups.filter((pattern) => pattern.test(password)).length < 3) {
    return "Use at least three of: lowercase, uppercase, number, symbol."
  }
  return ""
}

async function choosePassword(email) {
  while (true) {
    const password = await readHidden(`Password for ${email}: `)
    const problem = validatePassword(password, email)
    if (problem) {
      console.error(problem)
      continue
    }
    const confirmation = await readHidden("Type it again: ")
    if (password !== confirmation) {
      console.error("Passwords did not match. Try again.")
      continue
    }
    return password
  }
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
    throw new Error("Cloudflare did not save the authentication secrets.")
  }
}

const wait = (milliseconds) =>
  new Promise((resolvePromise) => setTimeout(resolvePromise, milliseconds))

async function verifyProductionPassword(email, password, setupProof) {
  if (!productionHostname) {
    console.warn(
      "TURNSTILE_HOSTNAMES is empty, so production sign-in was not checked.",
    )
    return
  }

  const origin = `https://${productionHostname}`
  let lastStatus = "no response"
  for (const delay of [15_000, 15_000, 30_000, 30_000]) {
    console.log(
      `Waiting ${delay / 1000} seconds for Cloudflare to activate the new secrets...`,
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
        body: JSON.stringify({ email, password }),
      })
      if (response.ok) {
        console.log(`Production sign-in verified for ${email}.`)
        return
      }
      const result = await response.json().catch(() => ({}))
      lastStatus = `${response.status}${result.message ? `: ${result.message}` : ""}`
      if (response.status === 429) break
    } catch (error) {
      lastStatus = error instanceof Error ? error.message : String(error)
    }
  }

  throw new Error(
    `Production sign-in verification failed for ${email} (${lastStatus}). Run this command again after checking Caps Lock and the keyboard language.`,
  )
}

const credentials = {}
const plaintextPasswords = new Map()
for (const email of adminEmails) {
  const password = await choosePassword(email)
  plaintextPasswords.set(email, password)
  const salt = randomBytes(16)
  credentials[email] = {
    salt: base64Url(salt),
    hash: await derivePasswordHash(password, salt),
    iterations: ITERATIONS,
  }
}

console.log("Saving encrypted authentication secrets in Cloudflare...")
const setupProof = `${Date.now() + 10 * 60 * 1000}.${base64Url(randomBytes(32))}`
putSecrets({
  ADMIN_PASSWORD_HASHES: `v1.${base64Url(JSON.stringify(credentials))}`,
  ADMIN_SESSION_SECRET: base64Url(randomBytes(32)),
  ADMIN_SETUP_PROOF: setupProof,
})

console.log("Checking the new passwords against the public website...")
for (const [email, password] of plaintextPasswords) {
  await verifyProductionPassword(email, password, setupProof)
}
plaintextPasswords.clear()
console.log(
  "Admin authentication is configured and verified. No password was printed or saved locally.",
)
