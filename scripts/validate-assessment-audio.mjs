import { readFile, stat } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const assessmentSource = await readFile(
  join(projectRoot, "src", "app", "assessment.ts"),
  "utf8",
)
const sources = [...assessmentSource.matchAll(/audioSrc:\s*"([^"]+)"/g)].map(
  (match) => match[1],
)

if (sources.length !== 5 || new Set(sources).size !== 5) {
  throw new Error(`Expected five unique listening recordings; found ${sources.length}.`)
}

for (const source of sources) {
  const filePath = join(projectRoot, "public", source.replace(/^\//, ""))
  const details = await stat(filePath)
  if (details.size < 10_000) {
    throw new Error(`${source} is too small to be a complete recording.`)
  }
  const header = await readFile(filePath)
  if (header.subarray(0, 4).toString("ascii") !== "RIFF" || header.subarray(8, 12).toString("ascii") !== "WAVE") {
    throw new Error(`${source} is not a valid WAV container.`)
  }
}

console.log(`Assessment audio QA passed: ${sources.length} valid WAV recordings.`)
