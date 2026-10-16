import assert from "node:assert/strict"
import { readdir, stat } from "node:fs/promises"
import path from "node:path"

const ASSET_DIRECTORY = path.resolve("dist/assets")
const MAX_CHUNK_BYTES = 500 * 1024

const files = await readdir(ASSET_DIRECTORY)
const chunks = await Promise.all(
  files
    .filter((file) => file.endsWith(".js"))
    .map(async (file) => ({
      file,
      bytes: (await stat(path.join(ASSET_DIRECTORY, file))).size,
    })),
)

assert.ok(chunks.length > 0, "No production JavaScript chunks were found")

const oversized = chunks.filter((chunk) => chunk.bytes > MAX_CHUNK_BYTES)
assert.deepEqual(
  oversized,
  [],
  `JavaScript chunks exceed 500 KiB: ${oversized
    .map((chunk) => `${chunk.file} (${(chunk.bytes / 1024).toFixed(1)} KiB)`)
    .join(", ")}`,
)

const largest = chunks.sort((left, right) => right.bytes - left.bytes)[0]
console.log(
  `Bundle QA passed: ${chunks.length} JavaScript chunks; largest is ${largest.file} at ${(largest.bytes / 1024).toFixed(1)} KiB.`,
)
