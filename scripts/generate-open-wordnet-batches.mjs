import { readFile, readdir, writeFile } from "node:fs/promises"
import { basename, dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { createServer } from "vite"

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const sourceRoot = join(projectRoot, ".tmp-lexical-source", "open-english-wordnet")
const corePath = join(projectRoot, ".tmp-lexical-source", "core-wordnet.txt")
const outputRoot = join(projectRoot, "src", "app", "vocabularyBatches")
const targetCount = 1_877
const firstBatchNumber = 9
const batchSize = 100

function lexicalKey(value) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9' -]/g, "")
    .replace(/\s+/g, " ")
}

function sentence(value) {
  const clean = String(value || "").replace(/\s+/g, " ").trim()
  if (!clean) return ""
  const initial = clean[0].toUpperCase() + clean.slice(1)
  return /[.!?]$/.test(initial) ? initial : `${initial}.`
}

function levelFor(word) {
  const letters = word.replace(/[^a-z]/g, "").length
  const words = word.split(/\s+/).length
  const score = letters + Math.max(0, words - 1) * 4
  if (score <= 4) return "A1"
  if (score <= 6) return "A2"
  if (score <= 8) return "B1"
  if (score <= 11) return "B2"
  if (score <= 14) return "C1"
  return "C2"
}

const keywordRules = [
  {
    topic: "Technology",
    group: "IT & computers",
    pattern:
      /\b(computer|software|hardware|digital|internet|website|network|database|algorithm|programming|cyber|electronic|processor|keyboard|telecommunication|data processing)\b/i,
  },
  {
    topic: "Sports",
    group: "Sports vocabulary",
    pattern:
      /\b(sport|athlete|athletic|tournament|competition|race|game|team|player|ball|exercise|training|championship|stadium|coach)\b/i,
  },
  {
    topic: "Health",
    group: "Medicine & healthcare",
    pattern:
      /\b(medical|medicine|patient|disease|illness|doctor|hospital|surgery|treatment|symptom|therapy|clinical|diagnosis|health|anatomy|drug|pharmaceutical)\b/i,
  },
  {
    topic: "Jobs",
    group: "Architecture & construction",
    pattern:
      /\b(architect|architecture|building|construction|builder|concrete|brick|beam|foundation|structural|blueprint|roof|wall|engineering|engineer|masonry)\b/i,
  },
  {
    topic: "School",
    group: "University & academic English",
    pattern:
      /\b(university|academic|research|student|teacher|education|learning|theory|study|lecture|curriculum|scholar|examination|knowledge)\b/i,
  },
]

const lexnameTopics = {
  "noun.food": ["Food", "Food & cooking"],
  "noun.animal": ["Animals", "Animals & wildlife"],
  "noun.plant": ["Nature", "Plants & ecosystems"],
  "noun.phenomenon": ["Nature", "Natural phenomena"],
  "noun.body": ["Health", "Body & anatomy"],
  "noun.person": ["People", "People & roles"],
  "noun.location": ["Places", "Places & locations"],
  "noun.artifact": ["Home", "Objects & equipment"],
  "noun.communication": ["Communication", "Language & communication"],
  "noun.cognition": ["School", "Knowledge & ideas"],
  "noun.group": ["Community", "Groups & organizations"],
  "noun.act": ["Daily Activities", "Actions & activities"],
  "noun.event": ["Community", "Events"],
  "noun.feeling": ["People", "Feelings & emotions"],
  "noun.possession": ["Community", "Money & possessions"],
  "noun.time": ["Daily Activities", "Time & schedules"],
  "verb.communication": ["Communication", "Speaking & writing"],
  "verb.cognition": ["School", "Thinking & learning"],
  "verb.competition": ["Sports", "Competition"],
  "verb.consumption": ["Food", "Eating & drinking"],
  "verb.motion": ["Transportation", "Movement & travel"],
  "verb.social": ["Community", "Social actions"],
  "verb.creation": ["Jobs", "Making & creating"],
  "verb.body": ["Health", "Body actions"],
  "verb.weather": ["Nature", "Weather"],
  "adj.all": ["Communication", "Describing things"],
  "adj.pert": ["School", "Academic description"],
  "adv.all": ["Communication", "How actions happen"],
}

function classify(word, definition, lexname) {
  const searchable = `${word} ${definition}`
  const keyword = keywordRules.find(({ pattern }) => pattern.test(searchable))
  if (keyword) return [keyword.topic, keyword.group]
  return lexnameTopics[lexname] || ["Communication", "General academic vocabulary"]
}

function acceptable(word, definition) {
  return (
    /^[a-z][a-z '-]{1,39}$/.test(word) &&
    word.split(/\s+/).length <= 3 &&
    definition.length >= 12 &&
    definition.length <= 360 &&
    !/^(?:bitch|heroin|killer|murder|sexual|homosexual|suicide|rape|pornography)$/i.test(
      word,
    ) &&
    !/\b(vulgar|offensive|ethnic slur|obscene|derogatory|slang term for)\b/i.test(
      definition,
    )
  )
}

const server = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { hmr: false, middlewareMode: true },
})

try {
  const { vocabulary } = await server.ssrLoadModule("/src/app/vocabulary.ts")
  const existing = new Set(
    vocabulary
      .filter(({ id }) => !/^batch-0(?:0[9]|1\d|2[0-7])--/.test(id))
      .map(({ word }) => lexicalKey(word)),
  )
  const compact = new Set([...existing].map((word) => word.replace(/[ -]/g, "")))
  const files = await readdir(sourceRoot)
  const senseIndex = new Map()
  const synsets = new Map()

  for (const file of files.filter((name) => /^entries-.+\.json$/.test(name))) {
    const entries = JSON.parse(await readFile(join(sourceRoot, file), "utf8"))
    for (const [lemma, parts] of Object.entries(entries)) {
      for (const [part, record] of Object.entries(parts)) {
        const pronunciation = record.pronunciation?.[0]?.value
        for (const sense of record.sense || []) {
          senseIndex.set(sense.id, { lemma, part, pronunciation, synset: sense.synset })
        }
      }
    }
  }

  for (const file of files.filter(
    (name) =>
      /\.json$/.test(name) &&
      !name.startsWith("entries-") &&
      name !== "frames.json",
  )) {
    const lexname = basename(file, ".json")
    const records = JSON.parse(await readFile(join(sourceRoot, file), "utf8"))
    for (const [id, record] of Object.entries(records)) {
      synsets.set(id, { ...record, lexname })
    }
  }

  const coreLines = (await readFile(corePath, "utf8")).split(/\r?\n/)
  const candidates = []
  const selected = new Set()
  for (const line of coreLines) {
    const match = line.match(/^[anrvs]\s+\[([^\]]+%[^\]]+)\]/)
    if (!match) continue
    const entry = senseIndex.get(match[1])
    if (!entry) continue
    const word = lexicalKey(entry.lemma.replaceAll("_", " "))
    const key = lexicalKey(word)
    const synset = synsets.get(entry.synset)
    const definition = sentence(synset?.definition?.[0])
    if (
      !synset ||
      !acceptable(word, definition) ||
      existing.has(key) ||
      compact.has(key.replace(/[ -]/g, "")) ||
      selected.has(key)
    ) {
      continue
    }
    const [topic, group] = classify(word, definition, synset.lexname)
    const safeExamples = (synset.example || []).filter(
      (value) =>
        !/\b(?:sex|kill|murder|suicide|rape|pornography|heroin|cocaine)\b/i.test(value),
    )
    const example = sentence(
      safeExamples.find((value) =>
        new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(
          value,
        ),
      ) ||
        safeExamples[0] ||
        `The lesson uses “${word}” in a carefully reviewed vocabulary context`,
    )
    const partOfSpeech =
      entry.part === "n"
        ? "noun"
        : entry.part === "v"
          ? "verb"
          : entry.part === "r"
            ? "adverb"
            : "adjective"
    candidates.push([
      word,
      entry.pronunciation ? `/${entry.pronunciation}/` : "Listen for pronunciation",
      topic,
      group,
      partOfSpeech,
      levelFor(word),
      definition,
      example,
    ])
    selected.add(key)
    if (candidates.length === targetCount) break
  }

  if (candidates.length !== targetCount) {
    throw new Error(`Expected ${targetCount} entries, found ${candidates.length}.`)
  }

  const groups = new Map()
  for (const item of candidates) {
    const key = item[2]
    groups.set(key, (groups.get(key) || 0) + 1)
  }
  for (let offset = 0; offset < candidates.length; offset += batchSize) {
    const number = firstBatchNumber + Math.floor(offset / batchSize)
    const suffix = String(number).padStart(3, "0")
    const entries = candidates.slice(offset, offset + batchSize)
    const source =
      "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"
    const output = `import { createVocabularyBatch, type BatchEntry } from "./batchFactory"\n\nconst entries: BatchEntry[] = ${JSON.stringify(entries, null, 2)}\n\nconst source = ${JSON.stringify(source)}\n\nexport const batch${suffix} = createVocabularyBatch({\n  id: "batch-${suffix}",\n  source,\n  entries,\n})\n\nexport const batch${suffix}Metadata = {\n  id: "batch-${suffix}",\n  title: "Open English WordNet core vocabulary ${offset + 1}–${offset + entries.length}",\n  addedWords: batch${suffix}.length,\n  reviewStatus: "educator-review-required" as const,\n  source,\n}\n`
    await writeFile(join(outputRoot, `batch${suffix}.ts`), output, "utf8")
  }

  console.log(`Generated ${candidates.length} reviewed-source entries in ${Math.ceil(candidates.length / batchSize)} batches.`)
  console.log(
    [...groups.entries()]
      .sort((first, second) => second[1] - first[1])
      .map(([topic, count]) => `${topic}: ${count}`)
      .join(", "),
  )
} finally {
  await server.close()
}

