import { AlertCircle, BookOpenText, Languages, Puzzle } from "lucide-react"

import type { Word } from "./content"

function NoteSection({
  title,
  icon: Icon,
  children,
}: {
  title: string
  icon: typeof BookOpenText
  children: React.ReactNode
}) {
  return (
    <section className="rounded-xl border border-border bg-background p-4">
      <h4 className="flex items-center gap-2 text-xs font-semibold text-foreground">
        <Icon size={15} className="text-primary" aria-hidden="true" />
        {title}
      </h4>
      <div className="mt-2 text-xs leading-5 text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

export default function WordLearningDetails({ word }: { word: Word }) {
  const details = word.learningDetails
  if (!details) return null

  return (
    <section
      className="mt-5 rounded-2xl border border-border bg-secondary/35 p-4 sm:p-5"
      aria-labelledby={`usage-notes-${word.id}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-widest text-primary">
            REVIEWED LEARNER NOTES
          </p>
          <h3
            id={`usage-notes-${word.id}`}
            className="mt-1 font-display text-base font-bold"
          >
            Use “{word.word}” naturally
          </h3>
        </div>
        <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold text-primary">
          Checked content
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {details.collocations?.length ? (
          <NoteSection title="Common collocations" icon={Puzzle}>
            <ul
              className="flex flex-wrap gap-2"
              aria-label="Common collocations"
            >
              {details.collocations.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-card px-2.5 py-1.5 text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </NoteSection>
        ) : null}

        {details.wordFamily?.length ? (
          <NoteSection title="Word family" icon={Languages}>
            <ul className="space-y-1.5">
              {details.wordFamily.map((item) => (
                <li
                  key={`${item.form}-${item.role}`}
                  className="flex flex-wrap gap-x-2"
                >
                  <strong className="text-foreground">{item.form}</strong>
                  <span>{item.role}</span>
                </li>
              ))}
            </ul>
          </NoteSection>
        ) : null}

        {details.grammarPatterns?.length ? (
          <NoteSection title="Grammar patterns" icon={BookOpenText}>
            <ul className="space-y-1.5">
              {details.grammarPatterns.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </NoteSection>
        ) : null}

        {details.register ? (
          <NoteSection title="Register & formality" icon={Languages}>
            <p>{details.register}</p>
          </NoteSection>
        ) : null}
      </div>

      {details.commonMistakes?.length ? (
        <section className="mt-3 rounded-xl border border-[#e8c89d] bg-[#fff8ed] p-4 text-[#664317] dark:border-[#765a35] dark:bg-[#3a3022] dark:text-[#f5dfbe]">
          <h4 className="flex items-center gap-2 text-xs font-semibold">
            <AlertCircle size={15} aria-hidden="true" />
            Common mistakes
          </h4>
          <ul className="mt-2 space-y-1.5 text-xs leading-5">
            {details.commonMistakes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </section>
  )
}
