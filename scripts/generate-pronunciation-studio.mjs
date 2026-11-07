import fs from "node:fs"
import path from "node:path"
import zlib from "node:zlib"
import { createServer } from "vite"

const sourcePath = path.resolve("tmp", "sources", "english-wordnet-2025.xml.gz")
const outputPath = path.resolve("src", "app", "pronunciationStudioData.json")

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Missing pronunciation source: ${sourcePath}`)
}

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
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
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
  if (!us || !uk || !us.includes("ˈ") || !uk.includes("ˈ")) continue
  if (!/[. ]/.test(us) || !/[. ]/.test(uk)) continue

  const key = `${normalize(decodeXml(match[1]))}|${match[2]}`
  if (!sourceEntries.has(key)) sourceEntries.set(key, { us, uk })
}

const server = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { hmr: false, middlewareMode: true },
})

try {
  const { vocabulary } = await server.ssrLoadModule("/src/app/vocabulary.ts")
  const seen = new Set()
  const entries = []

  for (const word of vocabulary) {
    const sourcePartOfSpeech = partOfSpeechMap.get(
      word.partOfSpeech.toLocaleLowerCase("en"),
    )
    if (!sourcePartOfSpeech) continue

    const key = `${normalize(word.word)}|${sourcePartOfSpeech}`
    const pronunciation = sourceEntries.get(key)
    if (!pronunciation || seen.has(normalize(word.word))) continue

    seen.add(normalize(word.word))
    entries.push({
      id: word.id,
      word: word.word,
      partOfSpeech: word.partOfSpeech,
      topic: word.topic,
      us: pronunciation.us,
      uk: pronunciation.uk,
    })
  }

  entries.sort((first, second) => first.word.localeCompare(second.word, "en"))
  fs.writeFileSync(outputPath, `${JSON.stringify(entries, null, 2)}\n`)
  console.log(
    `Wrote ${entries.length} verified US/UK pronunciation records to ${outputPath}`,
  )
} finally {
  await server.close()
}
