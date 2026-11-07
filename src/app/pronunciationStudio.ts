import pronunciationStudioData from "./pronunciationStudioData.json"

export type PronunciationAccent = "US" | "UK"

export interface PronunciationStudioEntry {
  id: string
  word: string
  partOfSpeech: string
  topic: string
  us: string
  uk: string
}

export const pronunciationStudioEntries =
  pronunciationStudioData as PronunciationStudioEntry[]

export const pronunciationStudioById = new Map(
  pronunciationStudioEntries.map((entry) => [entry.id, entry]),
)

export function pronunciationForAccent(
  entry: PronunciationStudioEntry,
  accent: PronunciationAccent,
) {
  return accent === "US" ? entry.us : entry.uk
}

export function splitIpaSyllables(ipa: string) {
  return ipa
    .replace(/^\/+|\/+$/g, "")
    .split(/(?<=[. ])|(?=[. ])/)
    .filter((part) => part !== "." && part.trim())
    .flatMap((part) =>
      part === " "
        ? []
        : part
            .split(".")
            .map((syllable) => syllable.trim())
            .filter(Boolean),
    )
}
