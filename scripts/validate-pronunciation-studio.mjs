import fs from "node:fs"
import path from "node:path"
import zlib from "node:zlib"
import { createServer } from "vite"

const sourcePath = path.resolve("tmp", "sources", "english-wordnet-2025.xml.gz")
const dataPath = path.resolve("src", "app", "pronunciationStudioData.json")
const reportPath = path.resolve("reports", "pronunciation-studio-coverage.json")

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

for (const filePath of [sourcePath, dataPath, reportPath]) {
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
const report = JSON.parse(fs.readFileSync(reportPath, "utf8"))
if (!Array.isArray(entries) || entries.length < 500) {
  throw new Error("Pronunciation Studio needs at least 500 verified records.")
}

const ids = new Set()
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

    const vocabularyEntry = vocabularyById.get(entry.id)
    if (!vocabularyEntry || vocabularyEntry.word !== entry.word) {
      throw new Error(`${entry.id} is not an unchanged vocabulary entry.`)
    }
    if (vocabularyEntry.partOfSpeech !== entry.partOfSpeech) {
      throw new Error(`${entry.id} has a mismatched part of speech.`)
    }
    if (
      entry.sourceId !== "oewn-2025" ||
      entry.verified !== true ||
      !entry.us.startsWith("/") ||
      !entry.uk.startsWith("/")
    ) {
      throw new Error(`${entry.id} lacks a complete verified source record.`)
    }

    const sourcePartOfSpeech = partOfSpeechMap.get(
      entry.partOfSpeech.toLocaleLowerCase("en"),
    )
    const source = sourceEntries.get(`${normalizedWord}|${sourcePartOfSpeech}`)
    if (!source || source.us !== entry.us || source.uk !== entry.uk) {
      throw new Error(`${entry.id} does not exactly match the open source.`)
    }
  }

  const gapIds = new Set(report.gaps.map((gap) => gap.id))
  if (
    report.totalVocabulary !== vocabulary.length ||
    report.verifiedPairedRecords !== entries.length ||
    report.awaitingVerification !== gapIds.size ||
    entries.length + gapIds.size !== vocabulary.length
  ) {
    throw new Error(
      "Pronunciation coverage report does not partition the catalogue.",
    )
  }
  for (const word of vocabulary) {
    if (!ids.has(word.id) && !gapIds.has(word.id)) {
      throw new Error(`Pronunciation audit omitted ${word.id}.`)
    }
  }
} finally {
  await server.close()
}

console.log(
  `Pronunciation Studio QA passed: ${entries.length} records exactly match Open English WordNet US/GB IPA; ${report.awaitingVerification} explicit gaps remain.`,
)
