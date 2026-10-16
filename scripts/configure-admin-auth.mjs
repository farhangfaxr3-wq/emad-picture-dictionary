import { pbkdf2Sync, randomBytes } from "node:crypto"
import { readFileSync } from "node:fs"
import { spawnSync } from "node:child_process"

const ITERATIONS = 210_000
const config = JSON.parse(readFileSync("wrangler.jsonc", "utf8"))
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

function putSecret(name, value) {
  const executable = process.platform === "win32" ? "pnpm.cmd" : "pnpm"
  const result = spawnSync(
    executable,
    ["exec", "wrangler", "secret", "put", name],
    {
      cwd: process.cwd(),
      input: `${value}\n`,
      stdio: ["pipe", "inherit", "inherit"],
    },
  )
  if (result.error) throw result.error
  if (result.status !== 0) {
    throw new Error(`Cloudflare did not save ${name}.`)
  }
}

const credentials = {}
for (const email of adminEmails) {
  const password = await choosePassword(email)
  const salt = randomBytes(16)
  credentials[email] = {
    salt: base64Url(salt),
    hash: base64Url(pbkdf2Sync(password, salt, ITERATIONS, 32, "sha256")),
    iterations: ITERATIONS,
  }
}

console.log("Saving encrypted authentication secrets in Cloudflare...")
putSecret("ADMIN_PASSWORD_HASHES", JSON.stringify(credentials))
putSecret("ADMIN_SESSION_SECRET", base64Url(randomBytes(32)))
console.log(
  "Admin authentication is configured. No password was printed or saved locally.",
)
