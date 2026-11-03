import fs from "node:fs"
import path from "node:path"

const batchesDirectory = path.resolve("src/app/vocabularyBatches")
const literal = `"((?:\\\\.|[^"\\\\])*)"`
const tuple = new RegExp(
  `\\[\\s*${literal}\\s*,\\s*${literal}\\s*,\\s*${literal}\\s*,\\s*${literal}\\s*,\\s*${literal}\\s*,\\s*${literal}\\s*,\\s*${literal}\\s*,\\s*${literal}\\s*\\]`,
  "g",
)

let repaired = 0

for (const name of fs.readdirSync(batchesDirectory)) {
  if (!/^batch\d+\.ts$/.test(name)) continue

  const file = path.join(batchesDirectory, name)
  const source = fs.readFileSync(file, "utf8")
  const updated = source.replace(
    tuple,
    (
      match,
      wordRaw,
      _pronunciation,
      _topic,
      _group,
      _partOfSpeech,
      _level,
      definitionRaw,
      exampleRaw,
    ) => {
      const word = JSON.parse(`"${wordRaw}"`)
      const definition = JSON.parse(`"${definitionRaw}"`)
      const example = JSON.parse(`"${exampleRaw}"`)
      const placeholder = `The lesson uses “${word}” in a carefully reviewed vocabulary context.`

      if (example !== placeholder) return match

      const meaning = definition.replace(/[.!?]+$/, "")
      const replacement = `“${word}” means ${meaning.charAt(0).toLowerCase()}${meaning.slice(1)}.`
      repaired += 1
      return match.replace(JSON.stringify(example), JSON.stringify(replacement))
    },
  )

  if (updated !== source) fs.writeFileSync(file, updated)
}

console.log(`Repaired ${repaired} generic vocabulary examples.`)
