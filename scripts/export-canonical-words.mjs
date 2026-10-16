import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { createServer } from "vite"
import { normalizeWord } from "../worker/index.js"

const outputPath = path.resolve(process.argv[2] || ".tmp-canonical-words.sql")
const server = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { hmr: false, middlewareMode: true },
})

function sqlString(value) {
  return `'${value.replaceAll("'", "''")}'`
}

try {
  const { vocabulary } = await server.ssrLoadModule("/src/app/vocabulary.ts")
  const canonical = new Map()

  for (const word of vocabulary) {
    const normalized = normalizeWord(word.word)
    if (!normalized || canonical.has(normalized)) continue
    canonical.set(normalized, { id: word.id, word: word.word, normalized })
  }

  const rows = [...canonical.values()]
  // Wrangler uploads remote D1 SQL files atomically. Explicit BEGIN/COMMIT
  // statements are rejected by the current D1 execution API.
  const statements = ["DELETE FROM canonical_words;"]

  for (let index = 0; index < rows.length; index += 200) {
    const values = rows
      .slice(index, index + 200)
      .map(
        (row) =>
          `(${sqlString(row.id)}, ${sqlString(row.word)}, ${sqlString(row.normalized)})`,
      )
      .join(",\n")
    statements.push(
      `INSERT INTO canonical_words (id, word, normalized_word) VALUES\n${values};`,
    )
  }

  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, `${statements.join("\n\n")}\n`, "utf8")
  console.log(
    `Exported ${rows.length} unique canonical spellings from ${vocabulary.length} vocabulary records to ${outputPath}.`,
  )
} finally {
  await server.close()
}
