import {
  BookOpen,
  CheckCircle2,
  Clock,
  Grid2X2,
  Headphones,
  Layers,
  Pencil,
  RotateCcw,
  Shuffle,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react"

export interface CategoryActivity {
  id: string
  title: string
  text: string
  icon: LucideIcon
}

export const practiceActivities: CategoryActivity[] = [
  {
    id: "picture",
    title: "Picture → Word",
    text: "Choose a word from the picture and its clue.",
    icon: Grid2X2,
  },
  {
    id: "word",
    title: "Word → Picture",
    text: "Find the picture that represents the word.",
    icon: BookOpen,
  },
  {
    id: "multiple",
    title: "Multiple Choice",
    text: "Connect a simple definition to the right word.",
    icon: Target,
  },
  {
    id: "listening",
    title: "Listening",
    text: "Listen, then choose the word you hear.",
    icon: Headphones,
  },
  {
    id: "matching",
    title: "Matching",
    text: "Connect each word to its illustrated meaning.",
    icon: Layers,
  },
  {
    id: "identify",
    title: "Identify the Picture",
    text: "Read a definition and identify its picture.",
    icon: Grid2X2,
  },
  {
    id: "choose",
    title: "Choose the Correct Word",
    text: "Use an everyday example to find the word.",
    icon: CheckCircle2,
  },
  {
    id: "sentence",
    title: "Complete the Sentence",
    text: "Choose the missing word in a real-world sentence.",
    icon: Pencil,
  },
  {
    id: "spelling",
    title: "Spelling",
    text: "Look, listen, and type the whole English word.",
    icon: Pencil,
  },
  {
    id: "topic-review",
    title: "Topic Review",
    text: "Mix pictures, listening, spelling, and meanings from this category.",
    icon: Shuffle,
  },
  {
    id: "review",
    title: "Quick Review",
    text: "Recall recently studied words, then check what you remembered.",
    icon: RotateCcw,
  },
]

export const writingActivities: CategoryActivity[] = [
  {
    id: "spelling",
    title: "Picture Spelling",
    text: "See the picture, then write the whole word.",
    icon: Pencil,
  },
  {
    id: "missing",
    title: "Missing Letters",
    text: "Use the visible letters to recover the word.",
    icon: Grid2X2,
  },
  {
    id: "complete-word",
    title: "Complete the Word",
    text: "Start with a few letters and finish the word.",
    icon: BookOpen,
  },
  {
    id: "dictation",
    title: "Type What You Hear",
    text: "Listen to the pronunciation, then type it.",
    icon: Headphones,
  },
]

export const gameActivities: CategoryActivity[] = [
  {
    id: "picture-match",
    title: "Picture Match",
    text: "Match four words with their pictures.",
    icon: Grid2X2,
  },
  {
    id: "word-match",
    title: "Word Match",
    text: "Match a related word to the definition shown.",
    icon: Layers,
  },
  {
    id: "memory",
    title: "Memory Game",
    text: "Find hidden word and picture pairs.",
    icon: Sparkles,
  },
  {
    id: "speed",
    title: "Speed Round",
    text: "How many can you answer in 60 seconds?",
    icon: Clock,
  },
  {
    id: "listen-choose",
    title: "Listen & Choose",
    text: "Listen to a word and pick its picture.",
    icon: Headphones,
  },
  {
    id: "builder",
    title: "Word Builder",
    text: "Arrange letter tiles to build a word.",
    icon: Pencil,
  },
  {
    id: "picture-challenge",
    title: "Picture Challenge",
    text: "Identify an illustrated word and its meaning.",
    icon: Target,
  },
]
