import { useState } from "react"
import type { Word } from "./content"
import { categoryImages } from "./CategoryImagery"
import library from "./vocabularyPhotos.json"

export interface VocabularyImage {
  src: string
  source: string
  author: string
  license: string
  licenseUrl: string
  description: string
  filename?: string
  kind: string
}
const photographs: Record<string, VocabularyImage> = library
export function contextPhotograph(word: Word): VocabularyImage {
  const category =
    categoryImages.find((image) => image.category === word.topic) ||
    categoryImages[0]
  return {
    src: `/images/categories/${category.photoId}.jpg`,
    source: `https://unsplash.com/@${category.username}`,
    author: category.photographer,
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
    description: category.alt,
    kind: "context",
  }
}
export function getVocabularyPhoto(word: Word): VocabularyImage {
  return (
    photographs[`${word.topic}|${word.word}`] ||
    photographs[word.word] ||
    contextPhotograph(word)
  )
}
export function visualVocabulary(words: Word[]): Word[] {
  const seen = new Set<string>()
  const distinct = words.filter((word) => {
    const image = getVocabularyPhoto(word)
    if (seen.has(image.src)) return false
    seen.add(image.src)
    return true
  })
  const recognizable = distinct.filter(
    (word) => getVocabularyPhoto(word).kind !== "context",
  )
  return recognizable.length >= 4 ? recognizable : distinct
}
export function VocabularyPhoto({
  word,
  className = "",
}: {
  word: Word
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const image = failed ? contextPhotograph(word) : getVocabularyPhoto(word)
  return (
    <img
      src={image.src}
      alt={
        image.kind === "context"
          ? `${word.word}: a real-life ${word.topic.toLowerCase()} context. ${image.description}`
          : `Photograph of ${word.word}`
      }
      title={`${image.author} · ${image.license}. ${
        image.kind === "context"
          ? "Context photograph"
          : "Vocabulary photograph"
      }. Open word details for source and license.`}
      width={600}
      height={450}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (!failed) setFailed(true)
      }}
      className={`rounded-xl bg-white object-contain ${className}`}
    />
  )
}
export function VocabularyPhotoCredit({ word }: { word: Word }) {
  const image = getVocabularyPhoto(word)
  return (
    <div className="border-b border-border bg-card px-7 py-3 text-xs leading-5 text-muted-foreground">
      <p>
        {image.kind === "context"
          ? `Context photograph · ${word.topic}. Use the definition and example to understand this word.`
          : `Real-life vocabulary photograph · ${word.word}`}
      </p>
      <p className="mt-1 break-words">
        Photo: {image.author} ·{" "}
        <a
          href={image.licenseUrl}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
        >
          {image.license}
        </a>{" "}
        ·{" "}
        <a
          href={image.source}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
        >
          Original source
        </a>
      </p>
      <p className="mt-1 text-xs">
        Resized or cropped for learning. No endorsement by the photographer is
        implied.
      </p>
    </div>
  )
}
export function VocabularyPhotographyCredits() {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(0)
  const entries = Object.entries(photographs).filter(([word, image]) =>
    `${word} ${image.author}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  )
  return (
    <details className="mt-4 rounded-xl border border-border p-4">
      <summary className="cursor-pointer text-xs font-semibold text-primary">
        Vocabulary photographs & source licenses
      </summary>
      <p className="mt-3 text-xs leading-6 text-muted-foreground">
        Vocabulary photographs come from Wikimedia Commons and Unsplash, with
        individual licenses and creator attribution. Scene object photographs
        are crops from their credited environment. Abstract terms may use
        clearly labeled context photographs. Each word detail includes its
        source and license.
      </p>
      <label
        className="mt-4 block text-xs font-medium"
        htmlFor="photography-search"
      >
        Find a photograph or creator
      </label>
      <input
        id="photography-search"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setPage(0)
        }}
        placeholder="Search a word or photographer…"
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
      />
      <p className="my-3 text-xs text-muted-foreground">
        {entries.length} credited images
      </p>
      <ul className="grid gap-3 text-xs md:grid-cols-2">
        {entries.slice(page * 20, page * 20 + 20).map(([word, image]) => (
          <li
            key={word}
            className="min-w-0 rounded-xl bg-background p-3 leading-5"
          >
            <a
              href={image.source}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              {word.replace("|", " · ")}
            </a>
            <p className="break-words text-muted-foreground">{image.author}</p>
            <a
              href={image.licenseUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {image.license}
            </a>
          </li>
        ))}
      </ul>
      {!entries.length && (
        <p role="status" className="py-4 text-xs text-muted-foreground">
          No matching credits. Try another word or creator.
        </p>
      )}
      <div className="mt-4 flex items-center justify-between gap-3 text-xs">
        <button
          disabled={page === 0}
          onClick={() => setPage((previous) => previous - 1)}
          className="rounded-lg border border-border px-3 py-2 hover:bg-secondary disabled:opacity-40"
        >
          Previous credits
        </button>
        <span>
          {page + 1} / {Math.max(1, Math.ceil(entries.length / 20))}
        </span>
        <button
          disabled={(page + 1) * 20 >= entries.length}
          onClick={() => setPage((previous) => previous + 1)}
          className="rounded-lg border border-border px-3 py-2 hover:bg-secondary disabled:opacity-40"
        >
          Next credits
        </button>
      </div>
    </details>
  )
}
