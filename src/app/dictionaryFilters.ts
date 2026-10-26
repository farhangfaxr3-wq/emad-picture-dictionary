import { resolveCEFRSelection, type CEFRSelection } from "./cefr"

export function resolveDictionaryLevel(
  requestedLevel: string | null,
  query: string,
  preferredLevel: CEFRSelection,
): CEFRSelection {
  return resolveCEFRSelection(
    requestedLevel,
    query.trim() ? "All levels" : preferredLevel,
  )
}

interface DictionaryImageFilterOptions {
  explicitFilter: string | null
  query: string
  letter: string
  topic: string
  level: CEFRSelection
}

export function resolveDictionaryImageFilter({
  explicitFilter,
  query,
  letter,
  topic,
  level,
}: DictionaryImageFilterOptions): string {
  if (explicitFilter) return explicitFilter
  return query.trim() ||
    letter ||
    topic !== "All topics" ||
    level !== "All levels"
    ? "all"
    : "verified"
}
