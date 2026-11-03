import { useState } from "react"

import type { Word } from "./content"

import { getVocabularyImageMatch } from "./VocabularyImagery"

interface Props {
  word: string

  topic?: string

  group?: string

  sourceTopic?: string

  className?: string

  altText?: string
}

export default function WordPicture({
  word,
  topic,
  group,
  sourceTopic,
  className = "",
  altText,
}: Props) {
  const match = getVocabularyImageMatch({
    word,
    topic,
    group: group || "General context",
    sourceTopic,
  } as Word)

  const visual = match.image

  const [failed, setFailed] = useState(false)

  if (!visual || failed)
    return (
      <div
        data-image-status="unavailable"
        role="img"
        aria-label={altText || "The learning image could not be loaded"}
        className={`@container flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-border bg-background text-center ${className}`}
      >
        <span className="text-[7px] text-muted-foreground @[5rem]:hidden">
          Unavailable
        </span>
        <span className="hidden px-3 text-xs font-semibold text-muted-foreground @[5rem]:block">
          Image unavailable
        </span>
        <span className="hidden max-w-48 px-3 text-xs leading-5 text-muted-foreground @[10rem]:block">
          Continue with the definition and example while the image is
          unavailable.
        </span>
      </div>
    )

  return (
    <img
      data-image-status={match.quality === "exact" ? "verified" : "contextual"}
      data-image-quality={match.quality}
      data-vocabulary-word={word}
      src={visual.src}
      alt={
        altText ||
        (match.quality === "exact"
          ? `Photograph illustrating ${word}`
          : match.contextScope === "word"
            ? `Related real-life context for ${word}`
            : match.contextScope === "group"
              ? `Context for ${group || "this learning group"}`
              : `Context for the ${topic || "vocabulary"} topic`)
      }
      title={`${
        match.quality === "exact"
          ? `Checked photo for ${word}`
          : "Context photo; not used as an image-answer clue"
      } · ${visual.author} · ${visual.license}`}
      width={900}
      height={600}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`max-w-full rounded-xl object-contain ${className}`}
    />
  )
}
