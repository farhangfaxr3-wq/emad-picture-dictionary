import fs from "node:fs"
import path from "node:path"

import { getVerifiedVocabularyImage } from "../src/app/VocabularyImagery"
import { vocabulary } from "../src/app/vocabulary"

interface Candidate {
  word: string
  kind: string
  score: number
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function candidateScore(group: string, word: string, kind: string) {
  const groupTokens = new Set(normalize(group).split(/\s+/).filter(Boolean))
  const wordTokens = normalize(word).split(/\s+/).filter(Boolean)
  const overlap = wordTokens.filter((token) => groupTokens.has(token)).length

  return (
    overlap * 100 +
    (normalize(group).includes(normalize(word)) ? 40 : 0) +
    (kind === "object" ? 20 : 10) -
    wordTokens.length
  )
}

const groups = new Map<string, Candidate[]>()

for (const word of vocabulary) {
  const image = getVerifiedVocabularyImage(word)
  if (!image) continue

  const key = `${word.topic}|${word.group}`
  const candidates = groups.get(key) || []
  candidates.push({
    word: word.word,
    kind: image.kind,
    score: candidateScore(word.group, word.word, image.kind),
  })
  groups.set(key, candidates)
}

const representatives = Object.fromEntries(
  [...groups.entries()]
    .sort(([first], [second]) => first.localeCompare(second))
    .map(([key, candidates]) => [
      key,
      candidates.sort(
        (first, second) =>
          second.score - first.score || first.word.localeCompare(second.word),
      )[0].word,
    ]),
)

const output = path.resolve(
  "src",
  "app",
  "vocabularyContextRepresentatives.json",
)
fs.writeFileSync(output, `${JSON.stringify(representatives, null, 2)}\n`)

console.log(
  `Generated ${Object.keys(representatives).length} same-group contextual representatives.`,
)
