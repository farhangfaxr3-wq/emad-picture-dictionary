import fs from "node:fs"
import path from "node:path"
import zlib from "node:zlib"
import { createServer } from "vite"

const sourcePath = path.resolve("tmp", "sources", "english-wordnet-2025.xml.gz")
const dataPath = path.resolve("src", "app", "pronunciationStudioData.json")

function normalize(value) {
  return value
    .toLocaleLowerCase("en")
    .replaceAll("’", "'")
    .replace(/\s+/g, " ")
    .trim()
}

function decodeXml(value) {
  return value
    .replaceAll("&apos;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
}

function cleanIpa(value) {
  const cleaned = decodeXml(value)
    .trim()
    .replace(/^\/+|\/+$/g, "")
  return cleaned ? `/${cleaned}/` : ""
}

const partOfSpeechMap = new Map([
  ["noun", "n"],
  ["verb", "v"],
  ["adjective", "a"],
  ["adverb", "r"],
])

for (const filePath of [sourcePath, dataPath]) {
  if (!fs.existsSync(filePath)) throw new Error(`Missing file: ${filePath}`)
}

const sourceEntries = new Map()
const xml = zlib.gunzipSync(fs.readFileSync(sourcePath)).toString("utf8")
const lemmaPattern =
  /<Lemma writtenForm="([^"]+)" partOfSpeech="([^"]+)"[^>]*(?<!\/)>([\s\S]*?)<\/Lemma>/g

for (const match of xml.matchAll(lemmaPattern)) {
  const pronunciations = new Map(
    [
      ...match[3].matchAll(
        /<Pronunciation(?: variety="([^"]+)")?>([^<]+)<\/Pronunciation>/g,
      ),
    ].map((pronunciation) => [
      pronunciation[1] || "",
      cleanIpa(pronunciation[2]),
    ]),
  )
  const us = pronunciations.get("US")
  const uk = pronunciations.get("GB")
  if (!us || !uk) continue
  const key = `${normalize(decodeXml(match[1]))}|${match[2]}`
  if (!sourceEntries.has(key)) sourceEntries.set(key, { us, uk })
}

const entries = JSON.parse(fs.readFileSync(dataPath, "utf8"))
if (!Array.isArray(entries) || entries.length < 150) {
  throw new Error("Pronunciation Studio needs at least 150 verified records.")
}

const ids = new Set()
const words = new Set()
const server = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { hmr: false, middlewareMode: true },
})

try {
  const { vocabulary } = await server.ssrLoadModule("/src/app/vocabulary.ts")
  const vocabularyById = new Map(vocabulary.map((word) => [word.id, word]))

  for (const entry of entries) {
    if (ids.has(entry.id)) throw new Error(`Duplicate studio ID: ${entry.id}`)
    ids.add(entry.id)
    const normalizedWord = normalize(entry.word)
    if (words.has(normalizedWord)) {
      throw new Error(`Duplicate studio word: ${entry.word}`)
    }
    words.add(normalizedWord)

    const vocabularyEntry = vocabularyById.get(entry.id)
    if (!vocabularyEntry || vocabularyEntry.word !== entry.word) {
      throw new Error(`${entry.id} is not an unchanged vocabulary entry.`)
    }
    if (vocabularyEntry.partOfSpeech !== entry.partOfSpeech) {
      throw new Error(`${entry.id} has a mismatched part of speech.`)
    }
    if (
      !entry.us.includes("ˈ") ||
      !entry.uk.includes("ˈ") ||
      !/[. ]/.test(entry.us) ||
      !/[. ]/.test(entry.uk)
    ) {
      throw new Error(`${entry.id} lacks verified stress or syllable data.`)
    }

    const sourcePartOfSpeech = partOfSpeechMap.get(
      entry.partOfSpeech.toLocaleLowerCase("en"),
    )
    const source = sourceEntries.get(`${normalizedWord}|${sourcePartOfSpeech}`)
    if (!source || source.us !== entry.us || source.uk !== entry.uk) {
      throw new Error(`${entry.id} does not exactly match the open source.`)
    }
  }
} finally {
  await server.close()
}

console.log(
  `Pronunciation Studio QA passed: ${entries.length} unique entries exactly match Open English WordNet US/GB IPA records.`,
)
