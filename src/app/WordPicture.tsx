import { useState } from "react"
import type { Word } from "./content"
import { getWordVisual } from "./visualAssets"
import { getVerifiedVocabularyPhoto } from "./VocabularyImagery"

interface Props {
  word: string
  topic?: string
  className?: string
}
export default function WordPicture({ word, topic, className = "" }: Props) {
  const verified = getWordVisual(word, topic)
  const photo = verified
    ? undefined
    : getVerifiedVocabularyPhoto({ word, topic } as Word)
  const visual = verified
    ? {
        src: verified.src,
        alt: verified.alt,
        credit: `${verified.photographer} / Unsplash`,
      }
    : photo
      ? {
          src: photo.src,
          alt: `Photograph of ${word}`,
          credit: `${photo.author} · ${photo.license}`,
        }
      : undefined
  const [failed, setFailed] = useState(false)
  if (!visual || failed)
    return (
      <div
        data-image-status="pending"
        role="img"
        aria-label={`No verified image is available for ${word}`}
        className={`@container flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-border bg-background text-center ${className}`}
      >
        <span className="text-[7px] text-muted-foreground @[5rem]:hidden">
          Pending
        </span>
        <span className="hidden px-3 text-xs font-semibold text-muted-foreground @[5rem]:block">
          Image pending review
        </span>
        <span className="hidden max-w-48 px-3 text-xs leading-5 text-muted-foreground @[10rem]:block">
          No verified visual available. No substitute image is shown.
        </span>
      </div>
    )
  return (
    <img
      data-image-status={verified ? "verified" : "library"}
      data-vocabulary-word={word}
      src={visual.src}
      alt={visual.alt}
      title={`Photo for ${word} · ${visual.credit}`}
      width={900}
      height={600}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`max-w-full rounded-xl object-contain ${className}`}
    />
  )
}
