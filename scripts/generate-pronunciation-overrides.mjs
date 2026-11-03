import fs from "node:fs"
import path from "node:path"
import zlib from "node:zlib"
import { createServer } from "vite"

const ipaDictionaryPath = path.resolve("tmp", "sources", "ipa-dict-en_US.txt")
const wordNetPath = path.resolve(
  "tmp",
  "sources",
  "english-wordnet-2025.xml.gz",
)
const outputPath = path.resolve("src", "app", "pronunciationOverrides.json")
const reportPath = path.resolve("reports", "pronunciation-coverage.json")
const existingOverrides = fs.existsSync(outputPath)
  ? JSON.parse(fs.readFileSync(outputPath, "utf8"))
  : {}

for (const sourcePath of [ipaDictionaryPath, wordNetPath]) {
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing pronunciation source: ${sourcePath}`)
  }
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
  const cleaned = value.trim().replace(/^\/+|\/+$/g, "")
  return cleaned ? `/${cleaned}/` : ""
}

const generalAmerican = new Map()
for (const line of fs.readFileSync(ipaDictionaryPath, "utf8").split(/\r?\n/)) {
  const [surface, ipa] = line.split("\t")
  if (!surface || !ipa) continue
  generalAmerican.set(normalize(surface), cleanIpa(ipa))
}

const wordNetByPartOfSpeech = new Map()
const xml = zlib.gunzipSync(fs.readFileSync(wordNetPath)).toString("utf8")
const lemmaPattern =
  /<Lemma writtenForm="([^"]+)" partOfSpeech="([^"]+)"[^>]*(?<!\/)>([\s\S]*?)<\/Lemma>/g

for (const match of xml.matchAll(lemmaPattern)) {
  const surface = normalize(decodeXml(match[1]))
  const pronunciations = [
    ...match[3].matchAll(
      /<Pronunciation(?: variety="([^"]+)")?>([^<]+)<\/Pronunciation>/g,
    ),
  ]
    .map((pronunciation) => ({
      variety: pronunciation[1] || "",
      value: cleanIpa(decodeXml(pronunciation[2])),
    }))
    .filter(({ value }) => value)
    .sort((first, second) => {
      const rank = (variety) =>
        variety === "US" ? 0 : variety === "" ? 1 : variety === "GB" ? 2 : 3
      return rank(first.variety) - rank(second.variety)
    })

  if (pronunciations.length) {
    wordNetByPartOfSpeech.set(`${surface}|${match[2]}`, pronunciations[0].value)
  }
}

const partOfSpeechMap = new Map([
  ["noun", "n"],
  ["verb", "v"],
  ["adjective", "a"],
  ["adverb", "r"],
])

// These learner terms are absent from the machine-readable US source files.
// They stay in a small, auditable exception list: hoodie/offence follow the
// linked Wiktionary entries; compounds, spelling variants, and initialisms
// combine source-backed component pronunciations.
const curatedPronunciations = new Map([
  ["hoodie|noun", "/ˈhʊdi/"],
  ["handwashing|noun", "/ˈhændˌwɑʃɪŋ/"],
  ["smartwatch|noun", "/ˈsmɑɹtˌwɑtʃ/"],
  ["3d printer|noun", "/ˌθɹiˈdi ˈpɹɪntɝ/"],
  ["iv drip|noun", "/ˌaɪˈvi ˈdɹɪp/"],
  ["iv stand|noun", "/ˌaɪˈvi ˈstænd/"],
  ["offence|noun", "/əˈfɛns/"],
  ["stepbrother|noun", "/ˈstɛpˌbɹʌðɝ/"],
  ["noticeboard|noun", "/ˈnoʊtɪsˌbɔɹd/"],
  ["touchscreen|noun", "/ˈtʌtʃˌskɹin/"],
  ["streetlight|noun", "/ˈstɹitˌlaɪt/"],
  ["colourful|adjective", "/ˈkʌlɚfəl/"],
  ["flavour|noun", "/ˈfleɪvɚ/"],
  ["houseplant|noun", "/ˈhaʊsˌplænt/"],
  ["godparent|noun", "/ˈɡɑdˌpɛɹənt/"],
  ["highlighter|noun", "/ˈhaɪˌlaɪtɚ/"],
  ["seahorse|noun", "/ˈsiˌhɔɹs/"],
  ["snowboarding|noun", "/ˈsnoʊˌbɔɹdɪŋ/"],
])

function lookup(word, partOfSpeech) {
  const surface = normalize(word)
  const asciiSurface = surface.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
  const normalizedPartOfSpeech = partOfSpeech.toLocaleLowerCase("en")
  const wordNetPartOfSpeech = partOfSpeechMap.get(normalizedPartOfSpeech)
  const candidateSurfaces = [...new Set([surface, asciiSurface])]
  return (
    curatedPronunciations.get(`${surface}|${normalizedPartOfSpeech}`) ||
    (wordNetPartOfSpeech &&
      candidateSurfaces
        .map((candidate) =>
          wordNetByPartOfSpeech.get(`${candidate}|${wordNetPartOfSpeech}`),
        )
        .find(Boolean)) ||
    candidateSurfaces
      .map((candidate) => generalAmerican.get(candidate))
      .find(Boolean) ||
    ""
  )
}

function primaryIpa(value) {
  return value
    .split(/\s*,\s*/)[0]
    .replace(/^\/+|\/+$/g, "")
    .trim()
}

function lookupPhrase(word) {
  const tokens = normalize(word)
    .split(/[\s-]+/)
    .filter(Boolean)
  if (tokens.length < 2) return ""
  const pronunciations = tokens.map((token) => generalAmerican.get(token) || "")
  if (pronunciations.some((pronunciation) => !pronunciation)) return ""
  return `/${pronunciations.map(primaryIpa).join(" ")}/`
}

const server = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { hmr: false, middlewareMode: true },
})

try {
  const { vocabulary } = await server.ssrLoadModule("/src/app/vocabulary.ts")
  const missingBefore = vocabulary.filter(
    (word) => word.pronunciation === "Listen for pronunciation",
  )
  const overrides = { ...existingOverrides }
  const unresolved = []
  const sourceCounts = {
    openEnglishWordNet: 0,
    ipaDictCmu: 0,
    curatedExceptions: 0,
    composedFromIpaDictWords: 0,
  }

  for (const word of missingBefore) {
    const key = `${normalize(word.word)}|${word.partOfSpeech.toLocaleLowerCase("en")}`
    if (overrides[key]) continue
    const directPronunciation = lookup(word.word, word.partOfSpeech)
    const pronunciation = directPronunciation || lookupPhrase(word.word)
    if (!pronunciation) {
      unresolved.push({
        id: word.id,
        word: word.word,
        partOfSpeech: word.partOfSpeech,
      })
      continue
    }
    overrides[key] = pronunciation
    const wordNetPartOfSpeech = partOfSpeechMap.get(
      word.partOfSpeech.toLocaleLowerCase("en"),
    )
    if (curatedPronunciations.has(key)) {
      sourceCounts.curatedExceptions += 1
    } else if (!directPronunciation) {
      sourceCounts.composedFromIpaDictWords += 1
    } else if (
      wordNetPartOfSpeech &&
      wordNetByPartOfSpeech.has(
        `${normalize(word.word)}|${wordNetPartOfSpeech}`,
      )
    ) {
      sourceCounts.openEnglishWordNet += 1
    } else {
      sourceCounts.ipaDictCmu += 1
    }
  }

  const sortedOverrides = Object.fromEntries(
    Object.entries(overrides).sort(([first], [second]) =>
      first.localeCompare(second, "en"),
    ),
  )
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, `${JSON.stringify(sortedOverrides, null, 2)}\n`)

  const report = {
    generatedAt: new Date().toISOString(),
    totalVocabulary: vocabulary.length,
    missingBefore: missingBefore.length,
    newMatches:
      Object.keys(sortedOverrides).length -
      Object.keys(existingOverrides).length,
    totalOverrides: Object.keys(sortedOverrides).length,
    unresolvedRecords: unresolved.length,
    sourceCounts,
    sources: [
      {
        name: "Open English WordNet 2025",
        url: "https://en-word.net/static/english-wordnet-2025.xml.gz",
        license: "CC BY 4.0",
      },
      {
        name: "ipa-dict English (General American), derived from CMUdict",
        url: "https://github.com/open-dict-data/ipa-dict/blob/master/data/en_US.txt",
        license: "MIT-derived data; CMUdict origin acknowledged",
      },
      {
        name: "Wiktionary and source-backed component composition",
        url: "https://en.wiktionary.org/wiki/hoodie",
        license: "CC BY-SA 4.0",
        scope:
          "Eighteen explicitly listed learner terms absent from the source files",
      },
    ],
    unresolved: unresolved.slice(0, 500),
    note: "Direct entries use exact spelling matches. Multiword expressions are composed only when every written component has a source pronunciation. Unresolved entries stay explicitly marked for review rather than receiving a guessed transcription.",
  }
  fs.mkdirSync(path.dirname(reportPath), { recursive: true })
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)
  console.log(JSON.stringify(report, null, 2))
} finally {
  await server.close()
}
