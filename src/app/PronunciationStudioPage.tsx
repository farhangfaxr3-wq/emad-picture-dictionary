import { useEffect, useMemo, useRef, useState } from "react"
import {
  BookOpen,
  CheckCircle2,
  Gauge,
  Headphones,
  LoaderCircle,
  Mic2,
  Play,
  RotateCcw,
  Search,
  ShieldCheck,
  Volume2,
} from "lucide-react"
import { Link, useSearchParams } from "react-router"

import { vocabulary } from "./vocabulary"
import {
  pronunciationForAccent,
  pronunciationStudioById,
  pronunciationStudioEntries,
  splitIpaSyllables,
  type PronunciationAccent,
  type PronunciationStudioEntry,
} from "./pronunciationStudio"

interface PronunciationStudioPageProps {
  audioEnabled: boolean
  notify: (message: string) => void
}

type PlaybackState = "idle" | "loading" | "playing"

const accentDetails: Record<PronunciationAccent, {
  label: string
  language: string
  longLabel: string
}> = {
  US: { label: "US", language: "en-US", longLabel: "American English" },
  UK: { label: "UK", language: "en-GB", longLabel: "British English" },
}

function SyllableGuide({ ipa }: { ipa: string }) {
  const syllables = splitIpaSyllables(ipa)

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        aria-label={`IPA syllables: ${syllables.join(", ")}`}
      >
        {syllables.map((syllable, index) => {
          const hasPrimaryStress = syllable.includes("ˈ")
          const hasSecondaryStress = syllable.includes("ˌ")
          return (
            <span
              key={`${syllable}-${index}`}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border px-3 py-2 font-mono text-sm ${
                hasPrimaryStress
                  ? "border-primary bg-primary font-bold text-primary-foreground"
                  : hasSecondaryStress
                    ? "border-primary/50 bg-secondary font-semibold text-primary"
                    : "border-border bg-background"
              }`}
              aria-label={`${syllable.replace(/[ˈˌ]/g, "")}${
                hasPrimaryStress
                  ? ", primary stress"
                  : hasSecondaryStress
                    ? ", secondary stress"
                    : ""
              }`}
            >
              {syllable}
            </span>
          )
        })}
      </div>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">
        The solid block marks primary stress. A pale block marks secondary
        stress. The symbols are IPA syllables, not spelling chunks.
      </p>
    </div>
  )
}

export default function PronunciationStudioPage({
  audioEnabled,
  notify,
}: PronunciationStudioPageProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedId = searchParams.get("word") || "airport"
  const requestedWord = vocabulary.find((word) => word.id === requestedId)
  const requestedEntry = pronunciationStudioById.get(requestedId)
  const selected = requestedEntry || pronunciationStudioEntries[0]
  const [query, setQuery] = useState("")
  const [accent, setAccent] = useState<PronunciationAccent>("US")
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [playback, setPlayback] = useState<PlaybackState>("idle")
  const [practiceStep, setPracticeStep] = useState(0)
  const [heardPractice, setHeardPractice] = useState(false)
  const [practiceComplete, setPracticeComplete] = useState(false)
  const activeUtterance = useRef<SpeechSynthesisUtterance | null>(null)

  const filteredEntries = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("en")
    if (!normalized) return pronunciationStudioEntries.slice(0, 8)
    return pronunciationStudioEntries
      .filter(
        (entry) =>
          entry.word.toLocaleLowerCase("en").includes(normalized) ||
          entry.topic.toLocaleLowerCase("en").includes(normalized),
      )
      .slice(0, 8)
  }, [query])

  const selectedIndex = pronunciationStudioEntries.findIndex(
    (entry) => entry.id === selected.id,
  )
  const practiceEntries = Array.from(
    { length: 3 },
    (_, offset) =>
      pronunciationStudioEntries[
        (selectedIndex + offset) % pronunciationStudioEntries.length
      ],
  )
  const practiceEntry = practiceEntries[practiceStep]
  const currentIpa = pronunciationForAccent(selected, accent)
  const currentLanguage = accentDetails[accent].language
  const matchingVoice = voices.find(
    (voice) =>
      voice.lang.toLocaleLowerCase("en") ===
      currentLanguage.toLocaleLowerCase("en"),
  )

  useEffect(() => {
    if (!("speechSynthesis" in window)) return
    const updateVoices = () => setVoices(window.speechSynthesis.getVoices())
    updateVoices()
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices)
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", updateVoices)
      window.speechSynthesis.cancel()
    }
  }, [])

  useEffect(() => {
    setPracticeStep(0)
    setHeardPractice(false)
    setPracticeComplete(false)
  }, [selected.id])

  const play = (
    entry: PronunciationStudioEntry,
    playbackAccent: PronunciationAccent,
    slow: boolean,
    practice = false,
  ) => {
    if (!audioEnabled) {
      notify("Audio is turned off. Enable it in Settings to listen.")
      return
    }
    if (!("speechSynthesis" in window)) {
      notify("Speech audio is not supported by this browser.")
      return
    }

    window.speechSynthesis.cancel()
    const details = accentDetails[playbackAccent]
    const utterance = new SpeechSynthesisUtterance(entry.word)
    const voice = voices.find(
      (candidate) =>
        candidate.lang.toLocaleLowerCase("en") ===
        details.language.toLocaleLowerCase("en"),
    )
    utterance.lang = details.language
    utterance.rate = slow ? 0.58 : 0.82
    if (voice) utterance.voice = voice
    activeUtterance.current = utterance
    setPlayback("loading")

    utterance.onstart = () => {
      if (activeUtterance.current === utterance) setPlayback("playing")
    }
    utterance.onend = () => {
      if (activeUtterance.current === utterance) {
        setPlayback("idle")
        if (practice) setHeardPractice(true)
      }
    }
    utterance.onerror = (event) => {
      if (activeUtterance.current !== utterance) return
      setPlayback("idle")
      if (event.error !== "canceled" && event.error !== "interrupted") {
        notify(
          "Audio couldn't play. Try another browser or check the voices installed on this device.",
        )
      }
    }
    window.speechSynthesis.speak(utterance)
  }

  const selectEntry = (entry: PronunciationStudioEntry) => {
    setSearchParams({ word: entry.id })
    setQuery("")
  }

  const confirmRepeated = () => {
    if (!heardPractice) return
    if (practiceStep === practiceEntries.length - 1) {
      setPracticeComplete(true)
      return
    }
    setPracticeStep((step) => step + 1)
    setHeardPractice(false)
  }

  return (
    <div className="mx-auto max-w-6xl">
      <header className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-primary">
              <Headphones size={16} aria-hidden="true" />
              Listen · notice · repeat
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Pronunciation Studio
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Compare verified American and British IPA, notice the stressed
              syllable, then practise with a slower replay.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-5 text-center">
            <p className="text-3xl font-bold text-primary">
              {pronunciationStudioEntries.length}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              verified US/UK entries
            </p>
          </div>
        </div>
      </header>

      <section
        className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-7"
        aria-labelledby="find-pronunciation"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              Verified catalogue
            </p>
            <h2
              id="find-pronunciation"
              className="mt-1 font-display text-xl font-bold"
            >
              Find a word
            </h2>
          </div>
          <Link
            to="/dictionary?level=all"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold hover:bg-secondary"
          >
            <BookOpen size={16} aria-hidden="true" />
            Open dictionary
          </Link>
        </div>
        <label className="relative mt-4 block">
          <span className="sr-only">Search verified pronunciation words</span>
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by word or topic"
            className="min-h-12 w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </label>
        {query ? (
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {filteredEntries.length ? (
              filteredEntries.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => selectEntry(entry)}
                  className="min-h-12 rounded-xl border border-border bg-background px-4 py-2 text-left hover:border-primary hover:bg-secondary"
                >
                  <span className="block text-sm font-semibold">
                    {entry.word}
                  </span>
                  <span className="block text-[10px] text-muted-foreground">
                    {entry.topic} · {entry.partOfSpeech}
                  </span>
                </button>
              ))
            ) : (
              <p className="text-sm text-muted-foreground sm:col-span-2 lg:col-span-4">
                No verified US/UK entry matches this search.
              </p>
            )}
          </div>
        ) : null}
      </section>

      {!requestedEntry && requestedWord ? (
        <aside
          role="status"
          className="mt-6 rounded-2xl border border-[#d9b45d] bg-[#fff8df] p-4 text-sm leading-6 text-[#604812] dark:border-[#806c3d] dark:bg-[#39321f] dark:text-[#f8dda0]"
        >
          <strong>{requestedWord.word}</strong> has a dictionary pronunciation,
          but a verified paired US/UK record with syllable boundaries is not
          available yet. Nothing has been guessed. Choose a verified word above.
        </aside>
      ) : null}

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
        <section
          className="rounded-3xl border border-border bg-card p-5 sm:p-7"
          aria-labelledby="selected-pronunciation"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                {selected.topic} · {selected.partOfSpeech}
              </p>
              <h2
                id="selected-pronunciation"
                className="mt-1 font-display text-3xl font-bold"
              >
                {selected.word}
              </h2>
            </div>
            <div
              className="grid grid-cols-2 rounded-xl border border-border bg-background p-1"
              aria-label="Pronunciation accent"
            >
              {(["US", "UK"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setAccent(item)}
                  aria-pressed={accent === item}
                  className={`min-h-11 min-w-14 rounded-lg px-3 text-sm font-bold ${
                    accent === item
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-secondary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-secondary/45 p-4 sm:p-5">
            <p className="text-xs font-semibold text-muted-foreground">
              {accentDetails[accent].longLabel} · verified IPA
            </p>
            <p className="mt-2 break-words font-mono text-xl font-semibold sm:text-2xl">
              {currentIpa}
            </p>
            <div className="mt-4">
              <SyllableGuide ipa={currentIpa} />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => play(selected, accent, false)}
              disabled={!audioEnabled || playback !== "idle"}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
            >
              {playback === "loading" ? (
                <LoaderCircle
                  className="animate-spin"
                  size={17}
                  aria-hidden="true"
                />
              ) : (
                <Play size={17} aria-hidden="true" />
              )}
              Play normal
            </button>
            <button
              type="button"
              onClick={() => play(selected, accent, true)}
              disabled={!audioEnabled || playback !== "idle"}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-45"
            >
              <Gauge size={17} aria-hidden="true" />
              Play slowly
            </button>
          </div>

          <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
            <ShieldCheck
              className="mt-0.5 shrink-0"
              size={15}
              aria-hidden="true"
            />
            <p>
              IPA comes from Open English WordNet 2025. Audio is generated by
              your browser, not a claimed studio recording.{" "}
              {matchingVoice ? (
                <>Your device selected “{matchingVoice.name}”.</>
              ) : (
                <>
                  Your device has not exposed an exact {currentLanguage} voice,
                  so its default English voice may be used.
                </>
              )}
            </p>
          </div>
        </section>

        <section
          className="rounded-3xl border border-border bg-card p-5 sm:p-7"
          aria-labelledby="repeat-heading"
        >
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
            <Mic2 size={15} aria-hidden="true" />
            Short activity
          </p>
          <h2
            id="repeat-heading"
            className="mt-1 font-display text-xl font-bold"
          >
            Listen and repeat
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Listen carefully, repeat aloud, then confirm it yourself. No
            microphone or speech recording is used.
          </p>

          {practiceComplete ? (
            <div className="mt-5 rounded-2xl bg-secondary p-5 text-center">
              <CheckCircle2
                className="mx-auto text-primary"
                size={34}
                aria-hidden="true"
              />
              <p className="mt-3 font-display text-lg font-bold">
                Three careful repetitions
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                This activity is complete. Your saved learning data was not
                changed.
              </p>
              <button
                type="button"
                onClick={() => {
                  setPracticeStep(0)
                  setHeardPractice(false)
                  setPracticeComplete(false)
                }}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-semibold hover:bg-background"
              >
                <RotateCcw size={16} aria-hidden="true" />
                Practise again
              </button>
            </div>
          ) : (
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-muted-foreground">
                  Word {practiceStep + 1} of {practiceEntries.length}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold text-primary">
                  {accent}
                </span>
              </div>
              <p className="mt-4 font-display text-3xl font-bold">
                {practiceEntry.word}
              </p>
              <p className="mt-2 font-mono text-sm text-muted-foreground">
                {pronunciationForAccent(practiceEntry, accent)}
              </p>
              <button
                type="button"
                onClick={() => play(practiceEntry, accent, true, true)}
                disabled={!audioEnabled || playback !== "idle"}
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
              >
                <Volume2 size={17} aria-hidden="true" />
                Listen slowly
              </button>
              <button
                type="button"
                onClick={confirmRepeated}
                disabled={!heardPractice}
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-45"
              >
                <CheckCircle2 size={17} aria-hidden="true" />I repeated it
              </button>
              {!heardPractice ? (
                <p className="mt-2 text-center text-[10px] text-muted-foreground">
                  Listen once before confirming.
                </p>
              ) : null}
            </div>
          )}
        </section>
      </div>

      {!audioEnabled ? (
        <aside className="mt-6 rounded-2xl border border-border bg-card p-4 text-sm leading-6">
          Audio is currently off. Enable it in{" "}
          <Link className="font-semibold text-primary underline" to="/settings">
            Settings
          </Link>{" "}
          to use playback.
        </aside>
      ) : null}
    </div>
  )
}
