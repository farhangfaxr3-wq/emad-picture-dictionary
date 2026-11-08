import { useEffect, useMemo, useRef, useState } from "react"
import {
  BookOpen,
  CheckCircle2,
  CircleStop,
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

import type { Word } from "./content"
import {
  ipaSounds,
  pronunciationChallenges,
  type IpaSound,
} from "./pronunciationLearning"
import { splitIpaSyllables } from "./pronunciationStudio"
import { vocabulary } from "./vocabulary"

interface PronunciationStudioPageProps {
  audioEnabled: boolean
  notify: (message: string) => void
}

type PlaybackState = "idle" | "loading" | "playing"
type RecorderState = "idle" | "recording" | "ready"

function displayIpa(ipa: string) {
  const trimmed = ipa.trim()
  if (!trimmed || trimmed === "Listen for pronunciation") {
    return "Pronunciation pending review"
  }
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}/`
}

function MouthDiagram({ sound }: { sound: IpaSound }) {
  const mouthShape = {
    open: { rx: 34, ry: 23 },
    rounded: { rx: 19, ry: 27 },
    smile: { rx: 41, ry: 15 },
    teeth: { rx: 35, ry: 17 },
    tongue: { rx: 34, ry: 20 },
  }[sound.mouth]

  return (
    <figure className="rounded-2xl bg-secondary/55 p-4">
      <svg
        viewBox="0 0 160 110"
        role="img"
        aria-labelledby="mouth-title mouth-description"
        className="mx-auto h-32 w-full max-w-52"
      >
        <title id="mouth-title">Mouth position for /{sound.symbol}/</title>
        <desc id="mouth-description">{sound.guidance}</desc>
        <ellipse cx="80" cy="55" rx="65" ry="44" fill="var(--card)" />
        <ellipse
          cx="80"
          cy="57"
          rx={mouthShape.rx}
          ry={mouthShape.ry}
          fill="#713b45"
          stroke="currentColor"
          strokeWidth="3"
        />
        {sound.mouth === "teeth" || sound.mouth === "tongue" ? (
          <path
            d="M49 50 Q80 38 111 50 L108 59 Q80 51 52 59 Z"
            fill="#fffaf2"
          />
        ) : null}
        {sound.mouth === "tongue" ? (
          <ellipse cx="80" cy="64" rx="25" ry="8" fill="#d98286" />
        ) : null}
        <circle cx="80" cy="57" r="4" fill="var(--primary)" />
      </svg>
      <figcaption className="text-center text-xs leading-5 text-muted-foreground">
        {sound.guidance}
      </figcaption>
    </figure>
  )
}

function IpaBlocks({ ipa }: { ipa: string }) {
  const blocks = splitIpaSyllables(displayIpa(ipa))
  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        aria-label={`Standard IPA: ${displayIpa(ipa)}`}
      >
        {blocks.map((block, index) => {
          const primary = block.includes("ˈ")
          const secondary = block.includes("ˌ")
          return (
            <span
              key={`${block}-${index}`}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border px-3 py-2 font-mono text-sm ${
                primary
                  ? "border-primary bg-primary font-bold text-primary-foreground"
                  : secondary
                    ? "border-primary/50 bg-secondary font-semibold text-primary"
                    : "border-border bg-background"
              }`}
            >
              {block}
            </span>
          )
        })}
      </div>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">
        The solid block marks primary stress. This is the same standard
        pronunciation shown throughout the website.
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
  const selected =
    vocabulary.find((word) => word.id === requestedId) || vocabulary[0]
  const [query, setQuery] = useState("")
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [playback, setPlayback] = useState<PlaybackState>("idle")
  const [practiceStep, setPracticeStep] = useState(0)
  const [heardPractice, setHeardPractice] = useState(false)
  const [practiceComplete, setPracticeComplete] = useState(false)
  const [selectedSound, setSelectedSound] = useState(ipaSounds[0])
  const [soraniOnly, setSoraniOnly] = useState(false)
  const [recorderState, setRecorderState] = useState<RecorderState>("idle")
  const [recordingUrl, setRecordingUrl] = useState("")
  const activeUtterance = useRef<SpeechSynthesisUtterance | null>(null)
  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const recordingChunks = useRef<Blob[]>([])

  const filteredEntries = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("en")
    return vocabulary
      .filter(
        (entry) =>
          !normalized ||
          entry.word.toLocaleLowerCase("en").includes(normalized) ||
          entry.topic.toLocaleLowerCase("en").includes(normalized),
      )
      .slice(0, 16)
  }, [query])
  const filteredChallenges = soraniOnly
    ? pronunciationChallenges.filter((challenge) => challenge.soraniRelevant)
    : pronunciationChallenges
  const selectedIndex = Math.max(
    0,
    vocabulary.findIndex((entry) => entry.id === selected.id),
  )
  const practiceEntries = Array.from(
    { length: 3 },
    (_, offset) => vocabulary[(selectedIndex + offset) % vocabulary.length],
  )
  const practiceEntry = practiceEntries[practiceStep]
  const standardVoice =
    voices.find((voice) =>
      voice.lang.toLocaleLowerCase("en").startsWith("en"),
    ) || null

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

  useEffect(
    () => () => {
      if (recordingUrl) URL.revokeObjectURL(recordingUrl)
      mediaRecorder.current?.stream.getTracks().forEach((track) => track.stop())
    },
    [recordingUrl],
  )

  const playText = (text: string, slow = false, onComplete?: () => void) => {
    if (!audioEnabled) {
      notify("Audio is turned off. Enable it in Settings to listen.")
      return
    }
    if (!("speechSynthesis" in window)) {
      notify("Synthetic speech is not supported by this browser.")
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = standardVoice?.lang || "en"
    if (standardVoice) utterance.voice = standardVoice
    utterance.rate = slow ? 0.58 : 0.82
    activeUtterance.current = utterance
    setPlayback("loading")
    utterance.onstart = () => {
      if (activeUtterance.current === utterance) setPlayback("playing")
    }
    utterance.onend = () => {
      if (activeUtterance.current === utterance) {
        setPlayback("idle")
        onComplete?.()
      }
    }
    utterance.onerror = (event) => {
      if (activeUtterance.current !== utterance) return
      setPlayback("idle")
      if (event.error !== "canceled" && event.error !== "interrupted") {
        notify("Audio could not play. Try another browser or device.")
      }
    }
    window.speechSynthesis.speak(utterance)
  }

  const selectEntry = (entry: Word) => {
    setSearchParams({ word: entry.id })
    setQuery("")
  }

  const startRecording = async () => {
    if (!navigator.mediaDevices?.getUserMedia || !("MediaRecorder" in window)) {
      notify("Microphone self-comparison is not supported by this browser.")
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      recordingChunks.current = []
      const recorder = new MediaRecorder(stream)
      mediaRecorder.current = recorder
      recorder.ondataavailable = (event) => {
        if (event.data.size) recordingChunks.current.push(event.data)
      }
      recorder.onstop = () => {
        if (recordingUrl) URL.revokeObjectURL(recordingUrl)
        const url = URL.createObjectURL(
          new Blob(recordingChunks.current, { type: recorder.mimeType }),
        )
        setRecordingUrl(url)
        setRecorderState("ready")
        stream.getTracks().forEach((track) => track.stop())
      }
      recorder.start()
      setRecorderState("recording")
    } catch {
      notify("Microphone permission was not granted. Recording stays optional.")
    }
  }

  const stopRecording = () => {
    if (mediaRecorder.current?.state === "recording") {
      mediaRecorder.current.stop()
    }
  }

  return (
    <div className="mx-auto max-w-6xl">
      <header className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-primary">
              <Headphones size={16} aria-hidden="true" />
              Listen · notice · try
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Pronunciation Studio
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Learn one clear standard pronunciation for every dictionary entry,
              then practise sounds, stress, linking and intonation.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-5 text-center">
            <p className="text-3xl font-bold text-primary">
              {vocabulary.length}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              standard pronunciations
            </p>
          </div>
        </div>
      </header>

      <section
        className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-7"
        aria-labelledby="sound-library"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              Pronunciation library
            </p>
            <h2
              id="sound-library"
              className="mt-1 font-display text-xl font-bold"
            >
              Find a dictionary headword
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
          <span className="sr-only">Search pronunciation words</span>
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
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {filteredEntries.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => selectEntry(entry)}
              className="min-h-12 rounded-xl border border-border bg-background px-4 py-2 text-left hover:border-primary hover:bg-secondary"
            >
              <span className="block text-sm font-semibold">{entry.word}</span>
              <span className="block text-[10px] text-muted-foreground">
                {entry.topic} · {entry.partOfSpeech}
              </span>
            </button>
          ))}
        </div>
        {!filteredEntries.length ? (
          <p className="mt-3 text-sm text-muted-foreground" role="status">
            No dictionary entry matches this search.
          </p>
        ) : null}
      </section>

      <section
        className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-7"
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
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-[10px] font-semibold text-primary">
            <ShieldCheck size={14} aria-hidden="true" />
            One standard reading
          </span>
        </div>

        <article className="mt-6 rounded-2xl border border-border bg-secondary/35 p-4 sm:p-5">
          <p className="text-xs font-semibold text-muted-foreground">
            Standard dictionary pronunciation
          </p>
          <p className="mt-2 break-words font-mono text-xl font-semibold sm:text-2xl">
            {displayIpa(selected.pronunciation)}
          </p>
          <div className="mt-4">
            <IpaBlocks ipa={selected.pronunciation} />
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => playText(selected.word)}
              disabled={!audioEnabled || playback !== "idle"}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-45"
            >
              {playback === "loading" ? (
                <LoaderCircle
                  className="animate-spin"
                  size={16}
                  aria-hidden="true"
                />
              ) : (
                <Play size={16} aria-hidden="true" />
              )}
              Play pronunciation
            </button>
            <button
              type="button"
              onClick={() => playText(selected.word, true)}
              disabled={!audioEnabled || playback !== "idle"}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-45"
            >
              <Gauge size={16} aria-hidden="true" />
              Play slowly
            </button>
          </div>
          <p className="mt-3 text-[10px] leading-4 text-muted-foreground">
            Synthetic playback
            {standardVoice ? ` · device voice “${standardVoice.name}”` : ""}. No
            separate accent choices are shown.
          </p>
        </article>
      </section>

      <section
        className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-7"
        aria-labelledby="ipa-lab"
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
          Interactive IPA chart
        </p>
        <h2 id="ipa-lab" className="mt-1 font-display text-2xl font-bold">
          See how the sound is formed
        </h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_.75fr]">
          <div
            className="grid grid-cols-3 gap-2 sm:grid-cols-4"
            aria-label="IPA sound choices"
          >
            {ipaSounds.map((sound) => (
              <button
                key={sound.symbol}
                type="button"
                onClick={() => setSelectedSound(sound)}
                aria-pressed={selectedSound.symbol === sound.symbol}
                className={`min-h-16 rounded-xl border p-2 text-center ${
                  selectedSound.symbol === sound.symbol
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-secondary"
                }`}
              >
                <span className="block font-mono text-xl font-bold">
                  /{sound.symbol}/
                </span>
                <span className="block text-[10px]">{sound.example}</span>
              </button>
            ))}
          </div>
          <div>
            <MouthDiagram sound={selectedSound} />
            <button
              type="button"
              onClick={() => playText(selectedSound.example, true)}
              disabled={!audioEnabled || playback !== "idle"}
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-45"
            >
              <Volume2 size={16} aria-hidden="true" />
              Hear “{selectedSound.example}”
            </button>
          </div>
        </div>
      </section>

      <section
        className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-7"
        aria-labelledby="guided-practice"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              Guided listening
            </p>
            <h2
              id="guided-practice"
              className="mt-1 font-display text-2xl font-bold"
            >
              Listen → Compare → Try
            </h2>
          </div>
          <label className="inline-flex min-h-11 items-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-semibold">
            <input
              type="checkbox"
              checked={soraniOnly}
              onChange={(event) => setSoraniOnly(event.target.checked)}
              className="h-5 w-5 accent-[var(--primary)]"
            />
            Challenges useful for Sorani speakers
          </label>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {filteredChallenges.map((challenge) => (
            <article
              key={challenge.id}
              className="rounded-2xl border border-border bg-background p-4 sm:p-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                {challenge.category}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold">
                {challenge.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {challenge.explanation}
              </p>
              <ol className="mt-4 space-y-3">
                <li className="rounded-xl bg-secondary/55 p-3">
                  <strong className="text-xs text-primary">1 · Listen</strong>
                  <p className="mt-1 text-sm">{challenge.listenText}</p>
                  <button
                    type="button"
                    onClick={() => playText(challenge.listenText, true)}
                    disabled={!audioEnabled || playback !== "idle"}
                    className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-card px-3 text-xs font-semibold disabled:opacity-45"
                  >
                    <Play size={14} aria-hidden="true" />
                    Play example
                  </button>
                </li>
                <li className="rounded-xl bg-secondary/55 p-3">
                  <strong className="text-xs text-primary">2 · Compare</strong>
                  <p className="mt-1 text-sm leading-5">{challenge.compare}</p>
                </li>
                <li className="rounded-xl bg-secondary/55 p-3">
                  <strong className="text-xs text-primary">3 · Try</strong>
                  <p className="mt-1 text-sm">{challenge.tryText}</p>
                </li>
              </ol>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section
          className="rounded-3xl border border-border bg-card p-5 sm:p-7"
          aria-labelledby="repeat-heading"
        >
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
            <Mic2 size={15} aria-hidden="true" />
            Self-check activity
          </p>
          <h2
            id="repeat-heading"
            className="mt-1 font-display text-xl font-bold"
          >
            Listen and repeat
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Listen carefully, repeat aloud, then confirm it yourself. No score
            is generated.
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
              <button
                type="button"
                onClick={() => {
                  setPracticeStep(0)
                  setHeardPractice(false)
                  setPracticeComplete(false)
                }}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-semibold"
              >
                <RotateCcw size={16} aria-hidden="true" />
                Practise again
              </button>
            </div>
          ) : (
            <div className="mt-5">
              <p className="text-xs font-semibold text-muted-foreground">
                Word {practiceStep + 1} of {practiceEntries.length}
              </p>
              <p className="mt-3 font-display text-3xl font-bold">
                {practiceEntry.word}
              </p>
              <p className="mt-2 font-mono text-sm text-muted-foreground">
                {displayIpa(practiceEntry.pronunciation)}
              </p>
              <button
                type="button"
                onClick={() =>
                  playText(practiceEntry.word, true, () =>
                    setHeardPractice(true),
                  )
                }
                disabled={!audioEnabled || playback !== "idle"}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground disabled:opacity-45"
              >
                <Volume2 size={17} aria-hidden="true" />
                Listen slowly
              </button>
              <button
                type="button"
                onClick={() => {
                  if (practiceStep === practiceEntries.length - 1) {
                    setPracticeComplete(true)
                  } else {
                    setPracticeStep((step) => step + 1)
                    setHeardPractice(false)
                  }
                }}
                disabled={!heardPractice}
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold disabled:opacity-45"
              >
                <CheckCircle2 size={17} aria-hidden="true" />I repeated it
              </button>
            </div>
          )}
        </section>

        <section
          className="rounded-3xl border border-border bg-card p-5 sm:p-7"
          aria-labelledby="record-heading"
        >
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
            <Mic2 size={15} aria-hidden="true" />
            Optional local recording
          </p>
          <h2
            id="record-heading"
            className="mt-1 font-display text-xl font-bold"
          >
            Record and compare yourself
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Your recording stays in this browser tab. It is not uploaded,
            analysed or scored.
          </p>
          <p className="mt-5 rounded-xl bg-secondary p-4 text-center font-display text-xl font-bold">
            {selected.word}
          </p>
          {recorderState !== "recording" ? (
            <button
              type="button"
              onClick={startRecording}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
            >
              <Mic2 size={17} aria-hidden="true" />
              Start optional recording
            </button>
          ) : (
            <button
              type="button"
              onClick={stopRecording}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#8a3026] px-4 text-sm font-semibold text-white"
            >
              <CircleStop size={17} aria-hidden="true" />
              Stop recording
            </button>
          )}
          {recordingUrl ? (
            <div className="mt-4">
              <audio
                controls
                src={recordingUrl}
                className="w-full"
                aria-label="Your local pronunciation recording"
              />
              <p className="mt-2 text-[10px] text-muted-foreground">
                Compare your rhythm and sounds with the standard example above.
                No accuracy claim is made.
              </p>
            </div>
          ) : null}
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-border bg-card p-4 text-xs leading-5 text-muted-foreground">
        <strong className="text-foreground">Pronunciation note:</strong> All{" "}
        {vocabulary.length} dictionary entries keep their existing words,
        meanings and learning data. The Studio presents one standard
        pronunciation and one synthetic playback option for consistency.
      </section>

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
