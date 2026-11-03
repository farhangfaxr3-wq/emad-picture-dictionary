import pronunciationOverrides from "./pronunciationOverrides.json"

const overrides = pronunciationOverrides as Record<string, string>

function normalize(value: string) {
  return value
    .toLocaleLowerCase("en")
    .replace(/’/g, "'")
    .replace(/\s+/g, " ")
    .trim()
}

export function resolvePronunciation(
  word: string,
  partOfSpeech: string,
  current: string | undefined,
) {
  if (current && current !== "Listen for pronunciation") return current
  const key = `${normalize(word)}|${partOfSpeech.toLocaleLowerCase("en")}`
  return overrides[key] || current || "Listen for pronunciation"
}
