import { useState } from "react"

import { BookOpenText, ImageOff } from "lucide-react"

import type { Word } from "./content"

import { categoryImages } from "./CategoryImagery"

import { getWordVisual } from "./visualAssets"

import library from "./vocabularyPhotos.json"

import contextRepresentatives from "./vocabularyContextRepresentatives.json"

export interface VocabularyImage {
  src: string

  source: string

  author: string

  license: string

  licenseUrl: string

  description: string

  filename?: string

  kind: "object" | "scene-object" | "context"

  contextLabel?: string
}

const photographs = library as Record<string, VocabularyImage>

const representatives: Record<string, string> = contextRepresentatives

function libraryPhotograph(word: Pick<Word, "word" | "topic" | "sourceTopic">) {
  return (
    photographs[`${word.topic}|${word.word}`] ||
    (word.sourceTopic
      ? photographs[`${word.sourceTopic}|${word.word}`]
      : undefined) ||
    photographs[word.word]
  )
}

export function getVerifiedVocabularyPhoto(
  word: Pick<Word, "word" | "topic" | "sourceTopic">,
): VocabularyImage | undefined {
  const photograph = libraryPhotograph(word)

  return photograph?.kind === "context" ? undefined : photograph
}

export function getVerifiedVocabularyImage(
  word: Pick<Word, "word" | "topic" | "sourceTopic">,
): VocabularyImage | undefined {
  const visual = getWordVisual(word.word, word.topic)

  if (visual) {
    return {
      src: visual.src,

      source: `https://unsplash.com/@${visual.username}`,

      author: visual.photographer,

      license: "Unsplash License",

      licenseUrl: "https://unsplash.com/license",

      description: visual.alt,

      kind: "object",
    }
  }

  return getVerifiedVocabularyPhoto(word)
}

export function hasVerifiedVocabularyImage(
  word: Pick<Word, "word" | "topic" | "sourceTopic">,
) {
  return Boolean(getVerifiedVocabularyImage(word))
}

export type VocabularyImageQuality = "exact" | "related" | "contextual"

export interface VocabularyImageMatch {
  image: VocabularyImage
  quality: VocabularyImageQuality
  practiceEligible: boolean
  contextScope?: "word" | "group" | "topic"
  representativeWord?: string
}

export function contextPhotograph(word: Word): VocabularyImage {
  const category =
    categoryImages.find((image) => image.category === word.topic) ||
    categoryImages[0]

  return {
    src: `/images/categories/${category.photoId}.jpg`,

    source: category.sourceUrl || `https://unsplash.com/@${category.username}`,

    author: category.photographer,

    license:
      category.sourceName === "Pexels" ? "Pexels License" : "Unsplash License",

    licenseUrl:
      category.sourceName === "Pexels"
        ? "https://www.pexels.com/license/"
        : "https://unsplash.com/license",

    description: category.alt,

    kind: "context",

    contextLabel: `${word.topic} topic context`,
  }
}

export function getVocabularyImageMatch(word: Word): VocabularyImageMatch {
  const exact = getVerifiedVocabularyImage(word)
  if (exact) {
    return { image: exact, quality: "exact", practiceEligible: true }
  }

  const curatedContext = libraryPhotograph(word)
  if (curatedContext?.kind === "context") {
    return {
      image: {
        ...curatedContext,
        contextLabel: `Related real-life context for ${word.word}`,
      },
      quality: "related",
      practiceEligible: false,
      contextScope: "word",
    }
  }

  const representativeWord = representatives[`${word.topic}|${word.group}`]
  if (
    representativeWord &&
    representativeWord.toLowerCase() !== word.word.toLowerCase()
  ) {
    const representative = getVerifiedVocabularyImage({
      word: representativeWord,
      topic: word.topic,
      sourceTopic: word.sourceTopic,
    })

    if (representative) {
      return {
        image: {
          ...representative,
          kind: "context",
          contextLabel: `${word.group} context: ${representativeWord}`,
        },
        quality: "contextual",
        practiceEligible: false,
        contextScope: "group",
        representativeWord,
      }
    }
  }

  return {
    image: contextPhotograph(word),
    quality: "contextual",
    practiceEligible: false,
    contextScope: "topic",
  }
}

export function getVocabularyPhoto(word: Word): VocabularyImage {
  return getVocabularyImageMatch(word).image
}

export function visualVocabulary(words: Word[]): Word[] {
  const seen = new Set<string>()

  const distinct = words.filter((word) => {
    const image = getVerifiedVocabularyImage(word)

    if (!image) return false

    if (seen.has(image.src)) return false

    seen.add(image.src)

    return true
  })

  return distinct
}

export function VocabularyPhoto({
  word,

  className = "",
}: {
  word: Word

  className?: string
}) {
  const [failed, setFailed] = useState(false)

  const match = failed ? undefined : getVocabularyImageMatch(word)

  const image = match?.image

  if (!image)
    return (
      <div
        role="img"
        aria-label={`The learning image for ${word.word} could not be loaded`}
        className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-[linear-gradient(145deg,var(--secondary),var(--background))] px-5 py-6 text-center ${className}`}
      >
        <span className="absolute -right-6 -top-8 h-24 w-24 rounded-full border-[16px] border-primary/5" />
        <span className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-primary/5" />
        <div className="relative flex max-w-[18rem] flex-col items-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-card text-primary shadow-sm ring-1 ring-border">
            <BookOpenText aria-hidden="true" size={23} />
          </span>
          <span className="mt-3 line-clamp-2 font-display text-sm font-bold text-foreground">
            {word.word}
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[.14em] text-primary">
            {word.topic}
          </span>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
            <ImageOff aria-hidden="true" size={13} /> Image unavailable
          </span>
        </div>
      </div>
    )

  return (
    <img
      src={image.src}
      alt={
        match.quality === "exact"
          ? `Photograph illustrating ${word.word}`
          : match.contextScope === "word"
            ? `Related real-life context for ${word.word}`
            : match.contextScope === "group"
              ? `Context for ${word.group}`
              : `Context for the ${word.topic} topic`
      }
      title={`${image.author} · ${image.license}. ${
        match.quality === "exact"
          ? "Checked word-specific photograph"
          : "Context photograph; not used as an image-answer clue"
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
  const match = getVocabularyImageMatch(word)

  const image = match.image

  return (
    <div className="border-b border-border bg-card px-7 py-3 text-xs leading-5 text-muted-foreground">
      <p>
        {match.quality === "exact"
          ? `Checked word-specific photograph · ${word.word}`
          : match.contextScope === "word"
            ? `Related real-life photograph · ${word.word}. This contextual image is not used as an image-answer clue.`
            : match.contextScope === "group"
              ? `Learning-group context · ${word.group}. Representative image: ${match.representativeWord}. This image is not used as an answer clue.`
              : `Topic context · ${word.topic}. This image supports the topic but does not claim to depict ${word.word} exactly.`}
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
        are crops from their credited environment. When an accurate image is
        unavailable, a clearly labeled related, learning-group, or topic context
        may be shown. Context images are never used as answer clues in
        image-dependent practice. Each displayed image includes its source and
        license.
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
