import { readFileSync } from "node:fs"

const config = JSON.parse(readFileSync("wrangler.jsonc", "utf8"))
const errors = []
const placeholder = (value) =>
  !value || String(value).startsWith("REPLACE_WITH_YOUR_")

const database = config.d1_databases?.find(
  (entry) => entry.binding === "SUBMISSIONS_DB",
)
if (!database || placeholder(database.database_id)) {
  errors.push("Replace the SUBMISSIONS_DB database_id in wrangler.jsonc.")
}
if (placeholder(config.vars?.ACCESS_TEAM_DOMAIN)) {
  errors.push("Replace ACCESS_TEAM_DOMAIN in wrangler.jsonc.")
}
if (placeholder(config.vars?.ACCESS_AUD)) {
  errors.push("Replace ACCESS_AUD in wrangler.jsonc.")
}
if (placeholder(config.vars?.TURNSTILE_HOSTNAMES)) {
  errors.push("Replace TURNSTILE_HOSTNAMES in wrangler.jsonc.")
}
if (!config.vars?.ADMIN_EMAIL) {
  errors.push("Set ADMIN_EMAIL in wrangler.jsonc.")
}

if (errors.length) {
  console.error("Cloudflare production configuration is incomplete:\n")
  for (const error of errors) console.error(`- ${error}`)
  console.error(
    "\nNo deployment was attempted. See docs/submissions-setup.md.",
  )
  process.exit(1)
}

console.log("Cloudflare public configuration check passed.")
console.log(
  "Confirm TURNSTILE_SECRET_KEY and SUBMISSION_HASH_SECRET are stored as encrypted Worker secrets before deployment.",
)
