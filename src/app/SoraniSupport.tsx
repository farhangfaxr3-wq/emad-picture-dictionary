import type { Word } from "./content"

export const reviewedSoraniGlosses = {
  apple: "سێو",
  banana: "مۆز",
  bread: "نان",
  house: "ماڵ",
  chair: "کورسی",
  mother: "دایک",
  father: "باوک",
  child: "منداڵ",
  friend: "هاوڕێ",
  school: "قوتابخانە",
  student: "خوێندکار",
  book: "کتێب",
  pencil: "قەڵەم",
  shirt: "کراس",
  shoe: "پێڵاو",
  doctor: "پزیشک",
  teacher: "مامۆستا",
  bus: "پاس",
  park: "پارک",
  tree: "دار",
  flower: "گوڵ",
  cat: "پشیلە",
  dog: "سەگ",
  ball: "تۆپ",
  phone: "تەلەفۆن",
  letter: "نامە",
  message: "پەیام",
  market: "بازاڕ",
  orange: "پرتەقاڵ",
  grapes: "ترێ",
  strawberry: "فرەنگی",
  carrot: "گێزەر",
  tomato: "تەماتە",
  potato: "پەتاتە",
  onion: "پیاز",
  chicken: "مریشک",
  fish: "ماسی",
  milk: "شیر",
  cheese: "پەنیر",
  egg: "هێلکە",
  water: "ئاو",
  coffee: "قاوە",
  tea: "چا",
  juice: "ئاوی میوە",
  rice: "برنج",
  soup: "شۆربا",
  sandwich: "ساندویچ",
  breakfast: "نانی بەیانی",
  bedroom: "ژووری نوستن",
  bathroom: "حەمام",
  kitchen: "چێشتخانە",
  table: "مێز",
  bed: "جێگا",
  lamp: "چرا",
  shelf: "ڕەف",
  door: "دەرگا",
  window: "پەنجەرە",
  clock: "کاتژمێر",
} as const

export type SoraniGlossId = keyof typeof reviewedSoraniGlosses

export const soraniInstructions = {
  default: "ڕێنماییەکە بخوێنەوە و پاشان وەڵام بدە.",
  picture: "وێنەکە ببینە و وشەی دروست هەڵبژێرە.",
  word: "ئەو وێنەیە هەڵبژێرە کە نوێنەرایەتی وشەکە دەکات.",
  multiple: "ئەو وشەیە هەڵبژێرە کە لەگەڵ پێناسەکە دەگونجێت.",
  listening: "گوێ بگرە، پاشان وەڵامی دروست هەڵبژێرە.",
  "listen-choose": "گوێ بگرە و وێنەی دروست هەڵبژێرە.",
  spelling: "گوێ بگرە و وشەکە بە تەواوی بنووسە.",
  dictation: "گوێ بگرە و وشەکە بە تەواوی بنووسە.",
  matching: "وشەکە لەگەڵ وێنەی دروست هاوتا بکە.",
  "word-match": "وشەکە لەگەڵ واتای دروست هاوتا بکە.",
  sentence: "وشەی ونبوو هەڵبژێرە.",
  choose: "وشەی ونبوو هەڵبژێرە.",
  builder: "پیتەکان ڕێک بخە بۆ دروستکردنی وشەکە.",
  review: "سەرەتا بیر بکەوە، پاشان وشەکە ئاشکرا بکە.",
  flashcards: "کارتەکە وەرگێڕە و واتاکەی پشکنین بکە.",
} as const

export function getReviewedSoraniGloss(word: Word): string | null {
  return reviewedSoraniGlosses[(word.id as SoraniGlossId)] ?? null
}

interface SoraniGlossProps {
  word: Word
  enabled: boolean
  compact?: boolean
  showUnavailable?: boolean
}

export function SoraniGloss({
  word,
  enabled,
  compact = false,
  showUnavailable = true,
}: SoraniGlossProps) {
  if (!enabled) return null

  const gloss = getReviewedSoraniGloss(word)

  if (!gloss && !showUnavailable) return null

  return (
    <div
      className={`${
        compact ? "mt-2 px-3 py-2" : "mt-3 px-4 py-3"
      } rounded-xl border border-primary/20 bg-secondary/60`}
      data-testid="sorani-gloss"
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
        Sorani help · Manually reviewed
      </p>
      {gloss ? (
        <p
          lang="ckb"
          dir="rtl"
          className={`${
            compact ? "text-sm" : "text-base"
          } mt-1 text-right font-semibold leading-7`}
        >
          {gloss}
        </p>
      ) : (
        <>
          <p className="mt-1 text-xs font-medium">Sorani gloss unavailable</p>
          <p
            lang="ckb"
            dir="rtl"
            className="mt-1 text-right text-xs leading-6 text-muted-foreground"
          >
            وەرگێڕانی پشکنراوی سۆرانی بۆ ئەم وشەیە بەردەست نییە.
          </p>
        </>
      )}
    </div>
  )
}

interface SoraniInstructionProps {
  enabled: boolean
  mode?: string | null
}

export function SoraniInstruction({ enabled, mode }: SoraniInstructionProps) {
  if (!enabled) return null

  const instruction =
    soraniInstructions[(mode as keyof typeof soraniInstructions)] ??
    soraniInstructions.default

  return (
    <div
      className="mb-5 rounded-xl border border-primary/20 bg-secondary/60 px-4 py-3"
      data-testid="sorani-instruction"
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
        Sorani instruction
      </p>
      <p lang="ckb" dir="rtl" className="mt-1 text-right text-sm leading-7">
        {instruction}
      </p>
    </div>
  )
}
