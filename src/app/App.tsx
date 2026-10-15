import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  Navigate,
  Link,
  useNavigate,
  useLocation,
  useRouteError,
  useSearchParams,
} from "react-router"
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Award,
  Bell,
  BookOpen,
  Bookmark,
  Check,
  CheckCircle2,
  Copy,
  Download,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Flame,
  Grid2X2,
  Headphones,
  Heart,
  Home,
  Leaf,
  LoaderCircle,
  Mail,
  Menu,
  MessageSquare,
  Pause,
  PictureInPicture2,
  Play,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Upload,
  UserRound,
  Volume2,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react"
import {
  topicIntroductions,
  localDay,
  learningStreak,
  type Word,
} from "./content"
import SceneCanvas, { scenes, type Scene } from "./SceneCanvas"
import CategoryCourse from "./CategoryCourse"
import FeedbackPage from "./FeedbackPage"
import SubmissionReviewPage from "./SubmissionReviewPage"
import {
  vocabulary,
  vocabularyAudit,
  vocabularyBatches,
} from "./vocabulary"
import {
  VocabularyPhoto,
  VocabularyPhotoCredit,
  VocabularyPhotographyCredits,
  getVocabularyPhoto,
  visualVocabulary,
} from "./VocabularyImagery"
import { CategoryPhoto, CategoryHero, categoryImages } from "./CategoryImagery"
import WordPicture from "./WordPicture"
import {
  cefrLabels,
  cefrLevels,
  isCEFRLevel,
  resolveCEFRSelection,
  type CEFRLevel,
} from "./cefr"
import {
  getWordVisual,
  vocabularyVisuals,
  sceneVisuals,
  sceneObjectVisuals,
} from "./visualAssets"

const wordById = new Map(vocabulary.map((word) => [word.id, word]))
for (const scene of scenes) {
  for (const object of scene.objects) {
    if (!wordById.has(object.id)) {
      const word = vocabulary.find(
        (word) => word.word.toLowerCase() === object.id.replace(/-/g, " "),
      )
      if (word) wordById.set(object.id, word)
    }
  }
}
function sceneWord(scene: Scene, id: string): Word {
  const original = wordById.get(id)!
  return (
    vocabulary.find(
      (word) =>
        word.topic === scene.topic &&
        word.word.toLowerCase() === original.word.toLowerCase(),
    ) || original
  )
}
const getGroups = (topic: string) => [
  ...new Set(
    vocabulary.filter((word) => word.topic === topic).map((word) => word.group),
  ),
]
const topicNames = [
  "Food",
  "Home",
  "People",
  "Daily Activities",
  "Family",
  "School",
  "Classroom",
  "Clothing",
  "Health",
  "Jobs",
  "Transportation",
  "Places",
  "Nature",
  "Animals",
  "Sports",
  "Technology",
  "Communication",
  "Travel",
  "Community",
]
const topicColors = [
  "bg-[#f6ece1]",
  "bg-[#e9efef]",
  "bg-[#eeedf6]",
  "bg-[#ecf2e5]",
  "bg-[#f8e9e7]",
  "bg-[#e6eef6]",
]
const topicDescriptions: Record<string, string> = {
  Food: "A delicious way to learn",
  Home: "Words that feel like home",
  People: "Everyone has a story",
  "Daily Activities": "Make every day a lesson",
}

function Illustration({
  word,
  className = "",
}: {
  word: string
  className?: string
}) {
  const item =
    wordById.get(word) || vocabulary.find((item) => item.word === word)
  return (
    <WordPicture
      key={item?.id || word}
      word={item?.word || word}
      topic={item?.topic}
      className={className}
    />
  )
}
function LegacyIllustration({
  word,
  className = "",
}: {
  word: string
  className?: string
}) {
  const item = vocabulary.find((item) => item.word === word || item.id === word)
  if (item)
    return <VocabularyPhoto key={item.id} word={item} className={className} />
  const common = {
    stroke: "#345954",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }
  let drawing: ReactNode
  switch (word) {
    case "apple":
      drawing = (
        <>
          <path d="M101 55c-4-14 7-24 17-28" fill="none" {...common} />
          <path d="M104 48c2-20 23-24 35-17-5 15-18 22-35 17" fill="#6b9b65" />
          <path
            d="M100 68c-47-25-75 18-59 54 12 28 34 36 59 29 25 7 45-2 58-29 17-37-12-79-58-54Z"
            fill="#e67e64"
          />
          <path
            d="M64 82c-10 9-14 22-11 32"
            stroke="#f9b19d"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </>
      )
      break
    case "banana":
      drawing = (
        <>
          <path
            d="M42 66c15 67 81 82 123 19-6 63-96 101-128 17Z"
            fill="#efc457"
          />
          <path
            d="M47 74c22 65 77 68 114 18"
            fill="none"
            stroke="#d8a93e"
            strokeWidth="4"
          />
          <path d="m37 62 10-5 9 19-15 7Z" fill="#6c8461" />
          <path d="m162 83 9-9 7 8-11 15" fill="#6c8461" />
        </>
      )
      break
    case "bread":
      drawing = (
        <>
          <path
            d="M43 75c-5-31 111-40 115-1l8 59c-24 28-88 25-124 7Z"
            fill="#bd8651"
          />
          <path
            d="M32 71c1-35 104-37 104-2l7 66c-30 17-73 14-105-2Z"
            fill="#e2b878"
          />
          <path
            d="m56 71 9 22m18-29 8 25m17-27 8 25"
            stroke="#f7dca4"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </>
      )
      break
    case "house":
    case "school":
    case "library":
    case "market":
      drawing = (
        <>
          <path
            d="M26 93 100 34l75 59"
            fill="#de957b"
            stroke="#c17d65"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path d="M42 87 100 45l58 42v68H42Z" fill="#f9e5c4" />
          <path d="M83 109h34v46H83Z" fill="#6c9990" />
          <rect x="54" y="97" width="20" height="24" rx="3" fill="#aed0d0" />
          <rect x="127" y="97" width="20" height="24" rx="3" fill="#aed0d0" />
          <path d="M142 65V41h14v38" fill="#8eaaa2" />
          <circle cx="110" cy="132" r="2" fill="#f6d099" />
          <path
            d="M24 155h152"
            stroke="#a4b5a0"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </>
      )
      break
    case "chair":
      drawing = (
        <>
          <rect x="65" y="33" width="71" height="73" rx="15" fill="#d9a078" />
          <path d="M72 101h69v19H65v-13" fill="#bc825d" />
          <path d="m70 120-7 39m68-39 7 39" {...common} />
          <path d="M77 47h47v41H77Z" fill="#e7b78e" />
        </>
      )
      break
    case "sofa":
      drawing = (
        <>
          <rect x="41" y="62" width="122" height="68" rx="18" fill="#689487" />
          <rect x="28" y="90" width="145" height="47" rx="11" fill="#80aa98" />
          <rect x="41" y="93" width="56" height="26" rx="7" fill="#a1c0ad" />
          <rect x="103" y="93" width="56" height="26" rx="7" fill="#a1c0ad" />
          <path d="M42 137v13m117-13v13" {...common} />
          <rect x="62" y="68" width="25" height="25" rx="6" fill="#eecb8e" />
        </>
      )
      break
    case "book":
    case "reading":
      drawing = (
        <>
          <path
            d="M100 57c-23-18-51-19-72-11v95c25-8 49-3 72 12 26-15 50-20 73-12V46c-23-8-49-7-73 11Z"
            fill="#70a698"
          />
          <path
            d="M100 58C77 43 54 43 35 49v85c25-4 45 3 65 17 24-14 43-21 66-17V49c-22-6-43-5-66 9Z"
            fill="#fff8e7"
          />
          <path d="M100 59v88" stroke="#dbc9a5" strokeWidth="3" />
          <path
            d="m48 67 36 8m-36 6 36 8m-36 6 36 8m32-28 36-8m-36 22 36-8m-36 22 36-8"
            stroke="#b8c7b3"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M119 49v48l9-7 9 2V46" fill="#e2a271" />
        </>
      )
      break
    case "pencil":
      drawing = (
        <>
          <g transform="rotate(35 100 95)">
            <rect x="88" y="37" width="24" height="103" rx="3" fill="#e4b855" />
            <path d="M88 140h24l-12 26Z" fill="#ecd8b5" />
            <path d="m95 155 5 11 5-11" fill="#41625b" />
            <path d="M96 42v97" stroke="#f7db88" strokeWidth="6" />
            <rect x="88" y="25" width="24" height="19" rx="6" fill="#e5968b" />
            <path d="M88 43h24" stroke="#a9b9ae" strokeWidth="8" />
          </g>
        </>
      )
      break
    case "shirt":
      drawing = (
        <path
          d="m70 45-39 24 22 34 17-11v62h61V92l18 11 22-34-41-24c-13 20-43 20-60 0Z"
          fill="#81aabc"
          stroke="#5d8fa6"
          strokeWidth="3"
        />
      )
      break
    case "shoe":
      drawing = (
        <>
          <path
            d="M41 70h37c10 27 35 29 64 39 21 6 27 13 26 29H34c-9-20-1-46 7-68Z"
            fill="#d18f70"
          />
          <path
            d="M32 134h138v13H32Z"
            fill="#fff6e2"
            stroke="#bac8b8"
            strokeWidth="2"
          />
          <path
            d="m90 97-13 12m27-6-13 12m29-6-13 12"
            stroke="#fff5e4"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </>
      )
      break
    case "medicine":
      drawing = (
        <>
          <rect x="67" y="54" width="69" height="103" rx="15" fill="#aac9bf" />
          <rect x="64" y="38" width="75" height="28" rx="7" fill="#688f84" />
          <rect x="68" y="84" width="67" height="47" rx="3" fill="#fff9e9" />
          <path d="M102 94v27m-13-13h26" stroke="#de917b" strokeWidth="9" />
          <path
            d="M75 44v17m10-17v17m10-17v17m10-17v17m10-17v17m10-17v17"
            stroke="#a6c3b4"
            strokeWidth="2"
          />
        </>
      )
      break
    case "bus":
      drawing = (
        <>
          <rect x="24" y="54" width="150" height="82" rx="18" fill="#ebbd64" />
          <rect x="36" y="67" width="30" height="35" rx="5" fill="#d8ece8" />
          <rect x="74" y="67" width="30" height="35" rx="5" fill="#d8ece8" />
          <rect x="112" y="67" width="30" height="35" rx="5" fill="#d8ece8" />
          <path d="M157 69v57" stroke="#b58c46" strokeWidth="3" />
          <circle cx="58" cy="138" r="17" fill="#426059" />
          <circle cx="144" cy="138" r="17" fill="#426059" />
          <circle cx="58" cy="138" r="7" fill="#c5d2c9" />
          <circle cx="144" cy="138" r="7" fill="#c5d2c9" />
        </>
      )
      break
    case "bicycle":
      drawing = (
        <>
          <circle
            cx="48"
            cy="124"
            r="31"
            fill="#e5efde"
            stroke="#58796c"
            strokeWidth="6"
          />
          <circle
            cx="153"
            cy="124"
            r="31"
            fill="#e5efde"
            stroke="#58796c"
            strokeWidth="6"
          />
          <path
            d="m48 124 40-51 27 51H48l24-69m44 68 30-63 8 63m-67-51h54"
            fill="none"
            stroke="#d49471"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path d="M60 55h23m59 4 8-14h17" {...common} />
        </>
      )
      break
    case "tree":
    case "park":
      drawing = (
        <>
          <path
            d="M98 97v60m0-39-20-14m20 22 19-17"
            stroke="#a47f5f"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <circle cx="75" cy="79" r="33" fill="#8daf79" />
          <circle cx="122" cy="82" r="36" fill="#82a472" />
          <circle cx="100" cy="51" r="33" fill="#a1bd85" />
          <ellipse cx="100" cy="158" rx="51" ry="8" fill="#c5d8aa" />
        </>
      )
      break
    case "flower":
      drawing = (
        <>
          <path
            d="M100 92v66m0-26c-26 0-39-17-36-27 25-3 36 13 36 27m0 13c25-1 39-18 35-27-24-3-35 14-35 27"
            fill="#8fb184"
            stroke="#789b6c"
            strokeWidth="4"
          />
          <circle cx="100" cy="48" r="22" fill="#e8ae8e" />
          <circle cx="124" cy="64" r="22" fill="#e8ae8e" />
          <circle cx="116" cy="89" r="22" fill="#e8ae8e" />
          <circle cx="85" cy="89" r="22" fill="#e8ae8e" />
          <circle cx="76" cy="63" r="22" fill="#e8ae8e" />
          <circle cx="100" cy="69" r="20" fill="#f1cc73" />
        </>
      )
      break
    case "cat":
    case "dog":
      drawing = (
        <>
          <ellipse
            cx="101"
            cy="127"
            rx="44"
            ry="31"
            fill={word === "cat" ? "#d5aa83" : "#c1a082"}
          />
          <path d="M65 84 65 39l27 23m17 0 28-23v48" fill="#d5aa83" />
          <circle cx="101" cy="85" r="39" fill="#e5bd98" />
          {word === "dog" && (
            <>
              <ellipse cx="63" cy="79" rx="12" ry="27" fill="#987858" />
              <ellipse cx="138" cy="79" rx="12" ry="27" fill="#987858" />
            </>
          )}
          <circle cx="86" cy="80" r="3" fill="#466155" />
          <circle cx="116" cy="80" r="3" fill="#466155" />
          <path d="m96 95 5 5 5-5" fill="#a97c65" />
          <path d="M102 102v7m-8 0h16" {...common} />
          <path
            d="M141 126c37 5 28-37 16-30"
            stroke="#c59c78"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M78 138v18m40-18v18"
            stroke="#e5bd98"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </>
      )
      break
    case "ball":
      drawing = (
        <>
          <circle
            cx="100"
            cy="95"
            r="60"
            fill="#f8f4df"
            stroke="#799587"
            strokeWidth="3"
          />
          <path
            d="m100 74 23 17-9 27H85l-9-27Zm-47-22 16 15-9 29-19-1m117-33-25 7-6-17m-5 97-11-23m-58 17 18-19"
            fill="#729486"
            stroke="#729486"
            strokeWidth="3"
          />
        </>
      )
      break
    case "tennis":
      drawing = (
        <>
          <g transform="rotate(30 100 90)">
            <ellipse
              cx="100"
              cy="67"
              rx="32"
              ry="44"
              fill="#eaf0da"
              stroke="#7fa087"
              strokeWidth="6"
            />
            <path d="M100 112v52" stroke="#cf9a77" strokeWidth="13" />
            <path
              d="M83 28v79m11-82v84m12-84v84m11-81v76M69 48h61m-63 13h67m-67 13h67m-64 13h60"
              stroke="#abc0a1"
              strokeWidth="1.5"
            />
          </g>
          <circle cx="151" cy="129" r="17" fill="#d2cd70" />
          <path
            d="M144 114c-2 14 4 22 17 25"
            fill="none"
            stroke="#fff9dc"
            strokeWidth="3"
          />
        </>
      )
      break
    case "laptop":
      drawing = (
        <>
          <rect x="43" y="44" width="115" height="82" rx="7" fill="#688a83" />
          <rect x="51" y="52" width="99" height="65" rx="3" fill="#d5e7df" />
          <path d="m43 126-21 27h158l-22-27" fill="#a1bcb3" />
          <path
            d="M27 153h147"
            stroke="#688a83"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M78 74h47m-47 12h32m-32 12h39"
            stroke="#96b6a7"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </>
      )
      break
    case "phone":
    case "message":
      drawing = (
        <>
          <rect x="66" y="29" width="72" height="133" rx="14" fill="#658f85" />
          <rect x="73" y="43" width="58" height="100" rx="5" fill="#dce9e0" />
          <rect x="81" y="69" width="42" height="28" rx="8" fill="#e6b676" />
          <path d="m88 97-4 10 17-10" fill="#e6b676" />
          <circle cx="102" cy="153" r="4" fill="#dce9e0" />
          <path d="M88 83h27" stroke="#fff6e3" strokeWidth="3" />
        </>
      )
      break
    case "letter":
      drawing = (
        <>
          <rect x="29" y="55" width="141" height="93" rx="8" fill="#f0d9ad" />
          <path
            d="m30 57 70 51 69-51"
            fill="#faeaca"
            stroke="#d4b88a"
            strokeWidth="3"
          />
          <path
            d="m31 146 53-49m84 49-51-49"
            stroke="#d4b88a"
            strokeWidth="2"
          />
          <rect x="143" y="65" width="17" height="22" rx="2" fill="#8dab94" />
        </>
      )
      break
    case "airplane":
      drawing = (
        <>
          <path
            d="m27 103 53-19 20-49c5-13 17-15 18 0l-5 40 45-14c26-6 31 9 8 20l-51 21-4 47-12 6-5-43-44 14-5 18-9 4-4-24-15-13Z"
            fill="#9dbfba"
            stroke="#688f8a"
            strokeWidth="3"
          />
          <path d="m85 83 28-8m-19 37 21-10" stroke="#c7dbd2" strokeWidth="3" />
        </>
      )
      break
    case "suitcase":
      drawing = (
        <>
          <path
            d="M82 50V34h35v16"
            fill="none"
            stroke="#6c8673"
            strokeWidth="8"
          />
          <rect x="47" y="50" width="106" height="104" rx="14" fill="#d7a273" />
          <path d="M67 51v102m65-102v102" stroke="#ad7f53" strokeWidth="9" />
          <path d="M63 154v9m76-9v9" {...common} />
          <rect x="86" y="79" width="27" height="30" rx="4" fill="#f4ddb0" />
        </>
      )
      break
    case "cooking":
    case "chef":
      drawing = (
        <>
          <path d="M43 89h117v37c0 24-117 25-117 0Z" fill="#7b9c8b" />
          <path
            d="M35 88h133M42 99H26m136 0h14"
            stroke="#567767"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path d="M48 82c1-24 105-24 106 0" fill="#a7be9d" />
          <path d="M93 63v-8h19v8" stroke="#567767" strokeWidth="7" />
          <path
            d="M79 46c-15-13 12-19 0-32m33 32c-15-13 12-19 0-32"
            stroke="#b7c5b0"
            strokeWidth="3"
            fill="none"
          />
        </>
      )
      break
    default:
      drawing = (
        <>
          <path
            d="M52 159v-30c0-27 20-44 49-44s48 17 48 44v30"
            fill={word === "doctor" ? "#e8eee5" : "#97b4a4"}
          />
          <path d="M84 87v15c8 10 24 10 32 0V87" fill="#d6aa86" />
          <circle cx="100" cy="64" r="31" fill="#e5bd98" />
          <path
            d="M70 62c-11-45 65-52 63-8-18-3-28-13-33-20-6 14-18 21-30 28"
            fill="#66584a"
          />
          <circle cx="90" cy="65" r="2" fill="#526557" />
          <circle cx="111" cy="65" r="2" fill="#526557" />
          <path
            d="M93 78c6 5 10 5 16 0"
            stroke="#b78066"
            strokeWidth="2"
            fill="none"
          />
          {word === "doctor" ? (
            <path d="M116 119v22m-11-11h22" stroke="#d58b75" strokeWidth="7" />
          ) : (
            <path d="M76 121h49v39H76Z" fill="#eac984" />
          )}
        </>
      )
  }
  return (
    <svg
      viewBox="0 0 200 180"
      className={className}
      role="img"
      aria-label={`Illustration of ${word}`}
    >
      <ellipse cx="100" cy="162" rx="69" ry="7" fill="#557264" opacity=".08" />
      {drawing}
    </svg>
  )
}

function KitchenScene() {
  return (
    <img
      src="/images/scenes/kitchen.jpg"
      alt="A real kitchen with cooking appliances, cabinets, and work surfaces"
      width={1600}
      height={864}
      className="h-full w-full rounded-2xl object-cover"
    />
  )
}

type Preferences = {
  name: string
  language: string
  audio: boolean
  speed: string
  dark: boolean
  notifications: boolean
  goal: number
  reduceMotion: boolean
  largeText: boolean
  cefrLevel: CEFRLevel | "All levels"
}
interface WordMastery {
  attempts: number
  correct: number
  streak: number
  lastReviewed: string
  nextReview: string
}
export interface ReviewOutcome {
  id: string
  correct: boolean
  answer?: string
}
interface LastLesson {
  category: string
  section: string
  url: string
}
export type Stored = {
  schemaVersion: number
  lastLesson: LastLesson | null
  favorites: string[]
  learned: string[]
  recent: string[]
  reviewed: string[]
  explored: string[]
  mastery: Record<string, WordMastery>
  mistakes: string[]
  sceneProgress: Record<string, string[]>
  sceneScores: Record<string, number>
  categoryCards: Record<string, Record<string, "known" | "review">>
  activity: {
    date: string
    type: "learned" | "reviewed" | "topic"
    target: string
  }[]
  sessions: {
    date: string
    score: number
    total: number
    mode?: string
    topic?: string
    section?: "practice" | "write" | "flashcards" | "games"
  }[]
  preferences: Preferences
}
const STORE_KEY = "emad-dictionary"
const STORE_VERSION = 2
const initial: Stored = {
  schemaVersion: STORE_VERSION,
  lastLesson: null,
  favorites: [],
  learned: [],
  recent: [],
  reviewed: [],
  explored: [],
  mastery: {},
  mistakes: [],
  sceneProgress: {},
  sceneScores: {},
  categoryCards: {},
  activity: [],
  sessions: [],
  preferences: {
    name: "",
    language: "English",
    audio: true,
    speed: "Normal",
    dark: false,
    notifications: false,
    goal: 10,
    reduceMotion: false,
    largeText: false,
    cefrLevel: "All levels",
  },
}
function normalizeStore(saved: any): Stored {
  return saved && typeof saved === "object"
      ? {
          ...initial,
          ...saved,
          schemaVersion: STORE_VERSION,
          lastLesson:
            saved.lastLesson &&
            topicNames.includes(saved.lastLesson.category) &&
            ["vocabulary", "practice", "write", "flashcards", "games"].includes(
              saved.lastLesson.section,
            ) &&
            typeof saved.lastLesson.url === "string" &&
            saved.lastLesson.url.startsWith("/topics/")
              ? saved.lastLesson
              : null,
          favorites: Array.isArray(saved.favorites)
            ? saved.favorites.filter((id: string) => wordById.has(id))
            : [],
          learned: Array.isArray(saved.learned)
            ? saved.learned.filter((id: string) => wordById.has(id))
            : [],
          recent: Array.isArray(saved.recent)
            ? saved.recent.filter((id: string) => wordById.has(id))
            : [],
          reviewed: Array.isArray(saved.reviewed)
            ? saved.reviewed.filter((id: string) => wordById.has(id))
            : [],
          explored: Array.isArray(saved.explored)
            ? saved.explored.filter((topic: string) =>
                topicNames.includes(topic),
              )
            : [],
          mastery: Object.fromEntries(
            Object.entries(saved.mastery || {}).filter(([id, value]) => {
              const entry = value as WordMastery
              return (
                wordById.has(id) &&
                entry &&
                Number.isFinite(entry.attempts) &&
                Number.isFinite(entry.correct) &&
                Number.isFinite(entry.streak) &&
                !Number.isNaN(new Date(entry.nextReview).getTime()) &&
                !Number.isNaN(new Date(entry.lastReviewed).getTime())
              )
            }),
          ) as Record<string, WordMastery>,
          mistakes: Array.isArray(saved.mistakes)
            ? saved.mistakes.filter((id: string) => wordById.has(id))
            : [],
          sceneProgress: Object.fromEntries(
            scenes.map((scene) => [
              scene.id,
              Array.isArray(saved.sceneProgress?.[scene.id])
                ? saved.sceneProgress[scene.id].filter((id: string) =>
                    scene.objects.some((object) => object.id === id),
                  )
                : [],
            ]),
          ),
          sceneScores: Object.fromEntries(
            scenes.map((scene) => [
              scene.id,
              Number.isFinite(saved.sceneScores?.[scene.id])
                ? Math.max(
                    0,
                    Math.min(scene.objects.length, saved.sceneScores[scene.id]),
                  )
                : 0,
            ]),
          ),
          categoryCards: Object.fromEntries(
            topicNames.map((topic) => [
              topic,
              Object.fromEntries(
                Object.entries(saved.categoryCards?.[topic] || {}).filter(
                  ([id, status]) =>
                    wordById.get(id)?.topic === topic &&
                    ["known", "review"].includes(status as string),
                ),
              ),
            ]),
          ),
          activity: Array.isArray(saved.activity)
            ? saved.activity
                .filter(
                  (item: Stored["activity"][number]) =>
                    item && !Number.isNaN(new Date(item.date).getTime()),
                )
                .slice(-100)
            : [],
          sessions: Array.isArray(saved.sessions)
            ? saved.sessions.filter(
                (session: Stored["sessions"][number]) =>
                  session &&
                  Number.isFinite(session.score) &&
                  session.total > 0 &&
                  !Number.isNaN(new Date(session.date).getTime()),
              )
            : [],
          preferences: {
            ...initial.preferences,
            ...saved.preferences,
            cefrLevel: isCEFRLevel(saved.preferences?.cefrLevel)
              ? saved.preferences.cefrLevel
              : "All levels",
          },
        }
      : initial
}
function readStore(): Stored {
  try {
    return normalizeStore(JSON.parse(localStorage.getItem(STORE_KEY) || "null"))
  } catch {
    return initial
  }
}
function reviewDue(data: Stored) {
  return vocabulary.filter((word) => {
    const mastery = data.mastery[word.id]
    return mastery
      ? new Date(mastery.nextReview).getTime() <= Date.now()
      : data.learned.includes(word.id) || data.reviewed.includes(word.id)
  })
}
function recordReview(previous: Stored, outcomes: ReviewOutcome[]): Stored {
  const mastery = { ...previous.mastery }
  const mistakes = new Set(previous.mistakes)
  const now = new Date()
  for (const id of new Set(outcomes.map((outcome) => outcome.id))) {
    const results = outcomes.filter((outcome) => outcome.id === id)
    const correct = results.every((outcome) => outcome.correct)
    const entry = mastery[id]
    const streak = correct ? (entry?.streak || 0) + 1 : 0
    const next = new Date(now)
    if (correct)
      next.setDate(next.getDate() + [1, 3, 7, 14, 30][Math.min(streak - 1, 4)])
    mastery[id] = {
      attempts: (entry?.attempts || 0) + results.length,
      correct:
        (entry?.correct || 0) +
        results.filter((outcome) => outcome.correct).length,
      streak,
      lastReviewed: now.toISOString(),
      nextReview: next.toISOString(),
    }
    if (correct) mistakes.delete(id)
    else mistakes.add(id)
  }
  return { ...previous, mastery, mistakes: [...mistakes] }
}
interface AudioState {
  word: string
  status: "loading" | "playing" | "paused" | "completed"
}
interface WordCardProps {
  word: Word
  compact?: boolean
}
interface WordDialogProps {
  word: Word
  onClose: () => void
}
type AppContextType = {
  data: Stored
  update: (fn: (data: Stored) => Stored) => void
  openWord: (word: Word) => void
  visitWord: (word: Word) => void
  learnWord: (word: Word) => void
  favorite: (id: string) => void
  speak: (word: string) => void
  audioState: AudioState | null
  notify: (message: string) => void
}
const AppContext = createContext<AppContextType>(null!)
const useApp = () => useContext(AppContext)
const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
const card = "rounded-2xl border border-border bg-card"
const titleClass = "font-display font-bold"
function ProgressBar({
  value,
  className = "",
}: {
  value: number
  className?: string
}) {
  return (
    <div
      role="progressbar"
      aria-label="Learning progress"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`h-1.5 overflow-hidden rounded-full bg-muted ${className}`}
    >
      <div
        className="h-full rounded-full bg-primary transition-all duration-500"
        style={{ width: `${Math.min(100, value)}%` }}
      />
    </div>
  )
}
function SectionTitle({
  title,
  link,
  to,
  icon: Icon,
}: {
  title: string
  link?: string
  to?: string
  icon?: LucideIcon
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className={`${titleClass} flex items-center gap-2 text-[18px]`}>
        {Icon && <Icon size={19} />} {title}
      </h2>
      {link && (
        <Link
          to={to || "/topics"}
          className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5"
        >
          {link}
          <ArrowRight size={14} />
        </Link>
      )}
    </div>
  )
}
function AudioButton({
  word,
  large = false,
}: {
  word: string
  large?: boolean
}) {
  const { speak, audioState } = useApp()
  const active = audioState?.word === word
  return (
    <button
      onClick={(event) => {
        event.stopPropagation()
        speak(word)
      }}
      aria-label={
        active && audioState?.status === "playing"
          ? `Pause pronunciation of ${word}`
          : active && audioState?.status === "paused"
            ? `Resume pronunciation of ${word}`
            : `Listen to ${word}`
      }
      aria-busy={active && audioState?.status === "loading"}
      aria-pressed={
        active && ["playing", "paused"].includes(audioState?.status || "")
      }
      title={
        active
          ? `${
              audioState?.status === "completed"
                ? "Completed — play again"
                : audioState?.status
            }`
          : "Ready to listen"
      }
      className={`flex shrink-0 items-center justify-center rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground ${
        large ? "h-12 w-12" : "h-8 w-8"
      }`}
    >
      {active && audioState?.status === "loading" ? (
        <LoaderCircle size={large ? 22 : 16} className="animate-spin" />
      ) : active && audioState?.status === "playing" ? (
        <AudioLines size={large ? 22 : 16} className="animate-pulse" />
      ) : active && audioState?.status === "paused" ? (
        <Play size={large ? 22 : 16} />
      ) : active && audioState?.status === "completed" ? (
        <Check size={large ? 22 : 16} />
      ) : (
        <Volume2 size={large ? 22 : 16} />
      )}
    </button>
  )
}

const cefrColors: Record<CEFRLevel, string> = {
  A1: "border-[#b9d9cc] bg-[#edf7f2] text-[#246553]",
  A2: "border-[#c9dfbd] bg-[#f2f8ed] text-[#52703f]",
  B1: "border-[#d9d6ad] bg-[#faf8e8] text-[#766c2f]",
  B2: "border-[#ead0ad] bg-[#fcf3e7] text-[#8a5b2e]",
  C1: "border-[#ddc6df] bg-[#f8eef8] text-[#744b76]",
  C2: "border-[#c8d2e7] bg-[#eef2fa] text-[#425b88]",
}

function CEFRBadge({ word, detailed = false }: { word: Word; detailed?: boolean }) {
  if (!word.cefr) return null
  return (
    <span
      title={`${word.cefr.source}. ${word.cefr.confidence} confidence.`}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${cefrColors[word.cefr.level]}`}
    >
      {word.cefr.level}
      {detailed && <span>· {cefrLabels[word.cefr.level]}</span>}
      {word.cefr.status === "provisional" && (
        <span className="font-normal opacity-75">· provisional</span>
      )}
    </span>
  )
}

const navigation: {
  path: string
  label: string
  icon: LucideIcon
}[] = [
  { path: "/", label: "Home", icon: Home },
  { path: "/dictionary", label: "Dictionary", icon: BookOpen },
  { path: "/topics", label: "Topics", icon: Grid2X2 },
  { path: "/practice", label: "Practice", icon: AudioLines },
  { path: "/progress", label: "My Progress", icon: TrendingUp },
  { path: "/favorites", label: "Favorites", icon: Heart },
  { path: "/feedback", label: "Feedback & Ideas", icon: MessageSquare },
  { path: "/about", label: "About Me", icon: UserRound },
  { path: "/settings", label: "Settings", icon: Settings },
]

function SoranUniversityMark({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex min-w-0 items-center rounded-xl border border-[#d7e2eb] bg-[#f8fbfd] ${
        compact ? "gap-3 px-3 py-3" : "gap-3.5 px-3.5 py-3.5"
      }`}
      aria-label="Presented at Soran University"
    >
      <span
        className={`flex shrink-0 items-center justify-center overflow-hidden ${
          compact ? "h-12 w-12" : "h-14 w-14"
        }`}
      >
        <img
          src="/images/brand/soran-university.png"
          alt="Soran University logo"
          width={603}
          height={610}
          className="h-full w-full scale-[1.55] object-contain"
        />
      </span>
      <span className="min-w-0">
        <span className="block text-[8px] font-semibold tracking-[.14em] text-[#42647e]">
          PRESENTED AT
        </span>
        <span className="mt-0.5 block font-display text-[13px] font-bold leading-4 text-[#0b6491]">
          Soran University
        </span>
      </span>
    </div>
  )
}

function Layout() {
  const [data, setData] = useState<Stored>(readStore)
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState("")
  const [audioState, setAudioState] =
    useState<AppContextType["audioState"]>(null)
  const activeSpeech = useRef<SpeechSynthesisUtterance | null>(null)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    const category = topicNames.find(
      (topic) => location.pathname === `/topics/${encodeURIComponent(topic)}`,
    )
    if (!category) return
    const params = new URLSearchParams(location.search)
    const section =
      params.get("section") ||
      (params.has("scene") || params.has("view") ? "vocabulary" : "dashboard")
    if (
      !["vocabulary", "practice", "write", "flashcards", "games"].includes(
        section,
      )
    )
      return
    params.delete("entry")
    params.delete("activity")
    const url = `${location.pathname}?${params.toString()}`
    setData((previous) =>
      previous.lastLesson?.url === url
        ? previous
        : {
            ...previous,
            lastLesson: { category, section, url },
          },
    )
  }, [location.pathname, location.search])
  const entryId = new URLSearchParams(location.search).get("entry")
  const selected = wordById.get(entryId || "") || null
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(data))
    } catch {}
    document.documentElement.classList.toggle("dark", data.preferences.dark)
    document.documentElement.classList.toggle(
      "reduce-motion",
      data.preferences.reduceMotion,
    )
    document.documentElement.classList.toggle(
      "large-text",
      data.preferences.largeText,
    )
  }, [data])
  useEffect(() => {
    if (!data.preferences.audio && "speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      activeSpeech.current = null
      setAudioState(null)
    }
  }, [data.preferences.audio])
  useEffect(() => {
    setMenuOpen(false)
    const target = location.hash
      ? document.getElementById(location.hash.slice(1))
      : null
    if (target) target.scrollIntoView({ block: "start", behavior: "instant" })
    else window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname, location.hash])
  useEffect(() => {
    if (selected)
      setData((previous) => ({
        ...previous,
        recent: [
          selected.id,
          ...previous.recent.filter((id) => id !== selected.id),
        ].slice(0, 12),
      }))
  }, [selected?.id])
  useEffect(() => {
    if (!menuOpen) return
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", closeMenu)
    return () => window.removeEventListener("keydown", closeMenu)
  }, [menuOpen])
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
      if ("speechSynthesis" in window) window.speechSynthesis.cancel()
    },
    [],
  )
  const update = (fn: (data: Stored) => Stored) => setData(fn)
  const notify = (message: string) => {
    setNotice(message)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setNotice(""), 4500)
  }
  const favorite = (id: string) =>
    update((previous) => ({
      ...previous,
      favorites: previous.favorites.includes(id)
        ? previous.favorites.filter((value) => value !== id)
        : [...previous.favorites, id],
    }))
  const visitWord = (word: Word) => {
    update((previous) => ({
      ...previous,
      recent: [
        word.id,
        ...previous.recent.filter((id) => id !== word.id),
      ].slice(0, 12),
    }))
  }
  const openWord = (word: Word) => {
    const params = new URLSearchParams(location.search)
    params.set("entry", word.id)
    navigate({ pathname: location.pathname, search: params.toString() }, {
      replace: Boolean(selected),
      preventScrollReset: true,
    })
  }
  const closeWord = () => {
    const params = new URLSearchParams(location.search)
    params.delete("entry")
    navigate({ pathname: location.pathname, search: params.toString() }, {
      replace: true,
      preventScrollReset: true,
    })
  }
  const learnWord = (word: Word) =>
    update((previous) =>
      previous.learned.includes(word.id)
        ? previous
        : {
            ...previous,
            learned: [...previous.learned, word.id],
            activity: [
              ...previous.activity,
              {
                type: "learned" as const,
                target: word.id,
                date: new Date().toISOString(),
              },
            ].slice(-100),
          },
    )
  const speak = (word: string) => {
    if (!data.preferences.audio) {
      notify("Audio is turned off. Enable it in Settings to listen.")
      return
    }
    if (!("speechSynthesis" in window)) {
      notify("Speech audio is not supported by this browser.")
      return
    }
    if (audioState?.word === word && audioState.status === "playing") {
      window.speechSynthesis.pause()
      setAudioState({ word, status: "paused" })
      return
    }
    if (audioState?.word === word && audioState.status === "paused") {
      window.speechSynthesis.resume()
      setAudioState({ word, status: "playing" })
      return
    }
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = "en-US"
    utterance.rate = data.preferences.speed === "Slow" ? 0.65 : 0.85
    window.speechSynthesis.cancel()
    activeSpeech.current = utterance
    setAudioState({ word, status: "loading" })
    utterance.onstart = () => {
      if (activeSpeech.current === utterance)
        setAudioState({ word, status: "playing" })
    }
    utterance.onend = () => {
      if (activeSpeech.current === utterance)
        setAudioState({ word, status: "completed" })
    }
    utterance.onerror = (event) => {
      if (activeSpeech.current === utterance) {
        setAudioState(null)
        if (event.error !== "canceled" && event.error !== "interrupted")
          notify(
            "Audio couldn't play. Please try again or check your browser's speech support.",
          )
      }
    }
    window.speechSynthesis.speak(utterance)
  }
  const page =
    navigation.find(
      (item) => item.path !== "/" && location.pathname.startsWith(item.path),
    )?.label || (location.pathname === "/settings" ? "Settings" : "Home")
  const links = (
    <>
      {navigation.map(({ path, label, icon: Icon }) => (
        <div key={path}>
          <NavLink
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `relative flex items-center gap-3.5 rounded-xl px-4 py-3 text-[13px] font-medium ${
                isActive
                  ? "bg-secondary font-semibold text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <Icon size={19} strokeWidth={1.8} />
            {label}
            {path === "/favorites" && data.favorites.length > 0 && (
              <span className="ml-auto text-xs">{data.favorites.length}</span>
            )}
          </NavLink>
          {path === "/topics" && (
            <Link
              to="/topics?view=scenes"
              className={`ml-9 mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                location.pathname === "/topics" &&
                new URLSearchParams(location.search).get("view") === "scenes"
                  ? "bg-secondary font-semibold text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
              }`}
            >
              <PictureInPicture2 size={14} /> Illustrated scenes
            </Link>
          )}
        </div>
      ))}
    </>
  )
  return (
    <AppContext.Provider
      value={{
        data,
        update,
        openWord,
        visitWord,
        learnWord,
        favorite,
        speak,
        audioState,
        notify,
      }}
    >
      <div className="min-h-screen bg-background">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-xl focus:translate-y-0"
        >
          Skip to learning content
        </a>
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-[228px] flex-col overflow-y-auto border-r border-border bg-card px-5 py-6 lg:flex xl:w-[242px] xl:py-8">
          <Link to="/" className="mb-4 flex items-center gap-3 px-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <BookOpen size={23} />
            </span>
            <span>
              <span className="font-display block text-[23px] font-extrabold leading-7">
                emad<span className="text-primary">.</span>
              </span>
              <span className="block text-[9px] font-medium tracking-[.1em] text-muted-foreground">
                PICTURE DICTIONARY
              </span>
            </span>
          </Link>
          <div className="mb-8">
            <SoranUniversityMark />
          </div>
          <p className="mb-3 px-4 text-[9px] font-semibold tracking-[.15em] text-muted-foreground">
            YOUR LEARNING SPACE
          </p>
          <nav aria-label="Main navigation" className="space-y-1">
            {links}
          </nav>
          <div className="mt-auto pt-8">
            <div className="rounded-2xl bg-secondary p-4">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-card text-primary">
                <Leaf size={18} />
              </div>
              <p className="text-sm font-semibold">Small steps. Big growth.</p>
              <p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">
                A few new words today.
                <br />
                More possibilities tomorrow.
              </p>
              <Link
                to="/practice"
                className="mt-3 flex items-center gap-2 text-xs font-semibold text-primary"
              >
                Keep learning <ArrowRight size={13} />
              </Link>
            </div>
            <div className="mt-4 flex items-center gap-3 border-t border-border px-3 pt-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#efdfc6] text-xs font-bold text-[#816b4b]">
                {data.preferences.name
                  ? data.preferences.name.slice(0, 2).toUpperCase()
                  : "EL"}
              </span>
              <div>
                <p className="text-xs font-semibold">
                  {data.preferences.name || "English learner"}
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  Your next chapter starts here
                </p>
              </div>
            </div>
          </div>
        </aside>
        <div className="lg:ml-[228px] xl:ml-[242px]">
          <header className="flex h-[82px] items-center justify-between gap-3 border-b border-border bg-card px-4 sm:gap-5 md:px-8 xl:px-10">
            <div className="flex shrink-0 items-center gap-3">
              <button
                className="rounded-lg p-2 lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open navigation"
                aria-expanded={menuOpen}
              >
                <Menu size={23} />
              </button>
              <span className="hidden text-xs text-muted-foreground md:block">
                Your learning space{" "}
                <ChevronRight className="mx-2 inline" size={12} />
                <span className="font-medium text-foreground">{page}</span>
              </span>
              <Link
                to="/"
                className="font-display text-xl font-extrabold md:hidden"
              >
                emad<span className="text-primary">.</span>
              </Link>
            </div>
            <HeaderSearch />
            <div className="hidden shrink-0 items-center gap-4 sm:flex">
              <button
                aria-label="Learning reminders"
                className="relative p-1.5 text-muted-foreground"
                onClick={() =>
                  notify(
                    data.preferences.notifications
                      ? "Your daily reminder: make room for a few new words."
                      : "Enable learning reminders in Settings to stay on track.",
                  )
                }
              >
                <Bell size={19} />
              </button>
              <span className="h-6 w-px bg-border" />
              <Link to="/settings" className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6eee7] text-[11px] font-bold text-[#648475]">
                  {data.preferences.name
                    ? data.preferences.name[0].toUpperCase()
                    : "E"}
                </span>
                <ChevronDown size={12} />
              </Link>
            </div>
          </header>
          {menuOpen && (
            <div
              className="fixed inset-0 top-[82px] z-40 bg-black/25 lg:hidden"
              onClick={() => setMenuOpen(false)}
            >
              <nav
                aria-label="Mobile navigation"
                className="max-h-[calc(100vh-82px)] w-[min(19rem,88vw)] overflow-y-auto rounded-br-2xl bg-card p-5 shadow-xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-4">
                  <SoranUniversityMark compact />
                </div>
                {links}
              </nav>
            </div>
          )}
          <main
            id="main-content"
            tabIndex={-1}
            className="mx-auto max-w-[1500px] px-5 py-7 md:px-8 xl:px-10 xl:py-8"
          >
            <Outlet />
          </main>
          <footer className="mx-5 mt-2 flex flex-col justify-between gap-3 border-t border-border py-6 text-[10px] text-muted-foreground md:mx-8 md:flex-row xl:mx-10">
            <span>
              <span className="font-semibold text-foreground">
                Emad Picture Dictionary
              </span>
              <span className="mx-2">·</span>See it. Hear it. Learn it. Practice
              it.
            </span>
            <span>
              Designed &amp; Built by{" "}
              <span className="font-medium text-foreground">
                Emad A. Mohammed
              </span>
            </span>
          </footer>
        </div>
        {selected && <WordDialog word={selected} onClose={closeWord} />}
        {notice && (
          <div
            role="status"
            className="fixed bottom-6 left-1/2 z-50 flex w-[min(90vw,440px)] -translate-x-1/2 items-center gap-3 rounded-2xl bg-foreground p-4 text-sm text-background shadow-xl"
          >
            <CircleHelp size={19} className="shrink-0" />
            {notice}
            <button
              aria-label="Dismiss notification"
              onClick={() => setNotice("")}
              className="ml-auto"
            >
              <X size={17} />
            </button>
          </div>
        )}
      </div>
    </AppContext.Provider>
  )
}

function HeaderSearch() {
  const { openWord } = useApp()
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const [expanded, setExpanded] = useState(false)
  const root = useRef<HTMLFormElement>(null)
  const matches = vocabulary
    .filter((word) =>
      `${word.word} ${word.topic} ${word.definition}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
    )
    .sort(
      (first, second) =>
        Number(second.word.startsWith(query.trim().toLowerCase())) -
        Number(first.word.startsWith(query.trim().toLowerCase())),
    )
    .slice(0, 5)
  const showSuggestions = expanded && Boolean(query.trim())
  return (
    <form
      ref={root}
      className="relative min-w-0 flex-1 sm:max-w-[390px]"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setExpanded(false)
      }}
      onSubmit={(event) => {
        event.preventDefault()
        setExpanded(false)
        navigate(`/dictionary?q=${encodeURIComponent(query.trim())}`)
      }}
    >
      <Search
        size={16}
        className="absolute left-3.5 top-3 text-muted-foreground"
      />
      <input
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setExpanded(true)
        }}
        onFocus={() => setExpanded(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setExpanded(false)
          if (event.key === "ArrowDown" && showSuggestions) {
            event.preventDefault()
            root.current
              ?.querySelector<HTMLButtonElement>("[data-search-result]")
              ?.focus()
          }
        }}
        aria-label="Search vocabulary"
        aria-controls={showSuggestions ? "vocabulary-suggestions" : undefined}
        placeholder="Search for a word…"
        className="h-10 w-full rounded-xl border border-border bg-background pl-10 pr-10 text-xs placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="absolute right-2 top-2 rounded p-1 text-muted-foreground hover:text-primary"
      >
        <ArrowRight size={16} />
      </button>
      {showSuggestions && (
        <div
          id="vocabulary-suggestions"
          role="region"
          aria-label="Vocabulary suggestions"
          className="absolute right-0 top-full z-50 mt-2 w-full min-w-0 overflow-hidden rounded-xl border border-border bg-card shadow-xl"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              root.current?.querySelector("input")?.focus()
              setExpanded(false)
            }
            if (!["ArrowDown", "ArrowUp"].includes(event.key)) return
            event.preventDefault()
            const buttons = Array.from(
              root.current?.querySelectorAll<HTMLButtonElement>(
                "[data-search-result]",
              ) || [],
            )
            const index = buttons.indexOf(
              document.activeElement as HTMLButtonElement,
            )
            buttons[
              (index + (event.key === "ArrowDown" ? 1 : -1) + buttons.length) %
                buttons.length
            ]?.focus()
          }}
        >
          <p className="px-3 pb-1 pt-3 text-xs font-semibold text-muted-foreground">
            Words to explore
          </p>
          {matches.length ? (
            matches.map((word) => (
              <button
                key={word.id}
                data-search-result
                type="button"
                onClick={() => {
                  setExpanded(false)
                  openWord(word)
                }}
                className="flex w-full items-center gap-2 p-3 text-left hover:bg-secondary focus-visible:bg-secondary"
              >
                <span className="hidden shrink-0 rounded-lg bg-background sm:block">
                  <Illustration word={word.id} className="h-10 w-12" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">
                    {word.word}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {word.pronunciation} · {word.topic}
                  </span>
                </span>
                <ArrowUpRight size={13} className="shrink-0 text-primary" />
              </button>
            ))
          ) : (
            <p
              role="status"
              className="px-3 py-4 text-xs leading-5 text-muted-foreground"
            >
              No quick matches. Try another word or search the full dictionary.
            </p>
          )}
          <button
            type="submit"
            data-search-result
            className="flex w-full items-center justify-between gap-2 border-t border-border bg-background p-3 text-xs font-semibold text-primary"
          >
            Search the full dictionary <ArrowRight size={14} />
          </button>
        </div>
      )}
    </form>
  )
}
function TopicArt({ topic }: { topic: string }) {
  return <CategoryPhoto category={topic} className="rounded-xl" />
}
function TopicCard({
  topic,
  index,
  compact = false,
}: {
  topic: string
  index: number
  compact?: boolean
}) {
  const { data } = useApp()
  const words = vocabulary.filter((word) => word.topic === topic)
  const learned = words.filter((word) => data.learned.includes(word.id)).length
  return (
    <Link
      to={`/topics/${encodeURIComponent(topic)}`}
      className={`${card} group block overflow-hidden hover:-translate-y-1 hover:shadow-md`}
    >
      <div
        className={`${
          compact ? "h-[112px]" : "h-[155px]"
        } ${topicColors[index % topicColors.length]} mx-2 mt-2 overflow-hidden rounded-xl`}
      >
        <CategoryPhoto
          category={topic}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-sm font-bold">{topic}</h3>
          <ArrowUpRight
            size={16}
            className="text-muted-foreground transition group-hover:text-primary"
          />
        </div>
        <p className="mt-1 text-[10px] text-muted-foreground">
          {topicDescriptions[topic] ||
            `Discover the world of ${topic.toLowerCase()}`}
        </p>
        <div className="mb-2 mt-4 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>{words.length} words</span>
          <span>
            {learned}/{words.length} learned
          </span>
        </div>
        <ProgressBar value={(learned / words.length) * 100} />
        {!compact && (
          <span className="mt-4 block text-xs font-semibold text-primary">
            Explore topic →
          </span>
        )}
      </div>
    </Link>
  )
}
function WordCard({ word, compact = false }: WordCardProps) {
  const { data, favorite, openWord } = useApp()
  return (
    <article
      className={`${card} group relative overflow-hidden transition hover:-translate-y-1 hover:shadow-md`}
    >
      <button
        className="absolute right-3 top-3 z-10 rounded-full bg-card/80 p-1.5 text-muted-foreground hover:text-primary"
        aria-label={`${
          data.favorites.includes(word.id) ? "Remove" : "Add"
        } ${word.word} ${
          data.favorites.includes(word.id) ? "from" : "to"
        } favorites`}
        aria-pressed={data.favorites.includes(word.id)}
        onClick={() => favorite(word.id)}
      >
        <Heart
          size={15}
          className={
            data.favorites.includes(word.id)
              ? "fill-[#d99179] text-[#d99179]"
              : ""
          }
        />
      </button>
      <button
        onClick={() => openWord(word)}
        aria-label={`View ${word.word}`}
        className="block w-full"
      >
        <div
          className={`${
            compact ? "h-[105px]" : "h-[150px]"
          } mx-2 mt-2 overflow-hidden rounded-xl bg-[#f3f5ef]`}
        >
          <Illustration word={word.id} className="mx-auto h-full w-full" />
        </div>
      </button>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => openWord(word)} className="text-left">
            <h3 className="font-display text-[15px] font-bold">{word.word}</h3>
            <p className="mt-1 text-[10px] text-muted-foreground">
              {word.pronunciation}
            </p>
          </button>
          <AudioButton word={word.word} />
        </div>
        {!compact && (
          <>
            <Link
              to={`/topics/${encodeURIComponent(word.topic)}`}
              className="mt-3 inline-block rounded-md bg-secondary px-2 py-1 text-[9px] font-medium text-primary hover:underline"
            >
              {word.topic} / {word.group}
            </Link>
            <span className="ml-2 text-[9px] text-muted-foreground">
              {word.group}
            </span>
            <span className="ml-2 inline-flex align-middle">
              <CEFRBadge word={word} />
            </span>
            {getVocabularyPhoto(word).kind === "context" && (
              <p className="mt-2 text-[10px] text-muted-foreground">
                Context photograph · Read the meaning and example.
              </p>
            )}
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              {word.definition}
            </p>
            <p className="mt-2 text-[11px] italic leading-5 text-muted-foreground">
              “{word.example}”
            </p>
            <div
              className="mt-3 flex flex-wrap gap-1.5"
              aria-label={`Words related to ${word.word}`}
            >
              {word.related.slice(0, 2).map((id) => (
                <button
                  key={id}
                  onClick={() => openWord(wordById.get(id)!)}
                  className="rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground hover:bg-secondary hover:text-primary"
                >
                  {wordById.get(id)?.word}
                  <ArrowUpRight size={10} className="ml-1 inline" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  )
}

function HomePage() {
  const { data, openWord } = useApp()
  const continueTopics = [
    ...new Set([
      ...data.recent
        .map((id) => vocabulary.find((word) => word.id === id)?.topic)
        .filter((topic): topic is string => Boolean(topic)),
      "Food",
      "Home",
    ]),
  ].slice(0, 2)
  const daily = data.sessions
    .filter((session) => localDay(new Date(session.date)) === localDay())
    .reduce((total, session) => total + session.score, 0)
  const goalProgress = Math.min(100, (daily / data.preferences.goal) * 100)
  return (
    <div className="space-y-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />A good day
            to learn something new
          </div>
          <h1 className={`${titleClass} text-[27px] md:text-[29px]`}>
            Hello, {data.preferences.name || "curious mind"}
            <span className="ml-2 inline-block origin-bottom-right text-[25px]">
              👋
            </span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Welcome to Emad Picture Dictionary — an interactive space to see,
            hear, learn, and practice English vocabulary.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Created by{" "}
            <Link
              to="/about"
              className="font-medium text-primary hover:underline"
            >
              Emad A. Mohammed
            </Link>
          </p>
        </div>
        <Link
          to="/progress"
          className="hidden items-center gap-2 rounded-xl border border-[#efe3cf] bg-[#fcf7ee] px-3.5 py-2.5 text-xs text-[#a58043] sm:flex"
        >
          <Flame size={16} className="fill-[#e5b566] text-[#cf9845]" />
          <span className="font-semibold">
            {data.sessions.length
              ? `${learningStreak([...data.sessions.map((session) => session.date), ...data.activity.map((activity) => activity.date)])} day learning streak`
              : "A fresh start"}
          </span>
        </Link>
      </div>
      <HomeSearch />
      <section className="relative flex min-h-[253px] overflow-hidden rounded-[20px] bg-[#eaf0e8]">
        <div className="relative z-10 w-full p-7 md:w-[55%] md:p-8 xl:p-9">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/60 px-2.5 py-1 text-[8px] font-semibold tracking-[.12em] text-[#4b7967]">
            <Sparkles size={10} /> SEE IT. HEAR IT. LEARN IT.
          </span>
          <h2 className="font-display text-[34px] font-extrabold leading-[1.2] text-[#294c40] md:text-[38px]">
            Your world,
            <br />
            in English<span className="text-[#dfaa68]">.</span>
          </h2>
          <p className="mb-5 mt-3 max-w-[315px] text-[11px] leading-5 text-[#6d8176]">
            Discover everyday words through pictures.
            <br />
            Build your vocabulary, one little moment at a time.
          </p>
          <Link
            to="/dictionary"
            className={`${primaryButton} !rounded-lg !px-4 !py-2.5 !text-[11px]`}
          >
            Start exploring <ArrowRight size={14} />
          </Link>
        </div>
        <div className="absolute bottom-0 right-[-18px] hidden h-[270px] w-[55%] md:block">
          <KitchenScene />
        </div>
        <span className="absolute right-7 top-6 hidden rounded-lg bg-[#fffaf0] px-2.5 py-1.5 text-[9px] font-medium text-[#8f7d59] md:block">
          Every picture tells a word.
        </span>
      </section>
      <div className="grid gap-5 xl:grid-cols-[1fr_285px]">
        <section>
          <SectionTitle title="Pick up where you left off" link="All topics" />
          <div className="grid gap-4 sm:grid-cols-2">
            {continueTopics.map((topic, index) => {
              const words = vocabulary.filter((word) => word.topic === topic)
              const count = words.filter((word) =>
                data.learned.includes(word.id),
              ).length
              return (
                <Link
                  key={topic}
                  to={`/topics/${topic}`}
                  className={`${card} group flex items-center gap-4 p-4 hover:border-primary/30`}
                >
                  <div
                    className={`h-[92px] w-[96px] shrink-0 rounded-xl ${topicColors[index]}`}
                  >
                    <TopicArt topic={topic} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[8px] font-medium uppercase tracking-[.12em] text-muted-foreground">
                      {count ? "CONTINUE LEARNING" : "YOUR NEXT LESSON"}
                    </span>
                    <h3 className="mt-1.5 font-display text-sm font-bold">
                      {topic === "Food"
                        ? "Food & everyday flavors"
                        : topic === "Home"
                          ? "Home, sweet home"
                          : `Discover ${topic.toLowerCase()}`}
                    </h3>
                    <p className="mb-3 mt-1 text-[10px] text-muted-foreground">
                      {count} of {words.length} words learned
                    </p>
                    <ProgressBar value={(count / words.length) * 100} />
                  </div>
                  <ChevronRight
                    size={17}
                    className="shrink-0 text-muted-foreground group-hover:text-primary"
                  />
                </Link>
              )
            })}
          </div>
        </section>
        <section className={`${card} flex items-center gap-4 p-5 xl:mt-[38px]`}>
          <div className="relative flex h-[70px] w-[70px] shrink-0 items-center justify-center">
            <svg viewBox="0 0 80 80" className="absolute inset-0 -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth="6"
              />
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="6"
                strokeDasharray={`${goalProgress * 2.136} 213.6`}
                strokeLinecap="round"
              />
            </svg>
            <Target size={25} className="text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-semibold">Your daily goal</h2>
            <p className="mt-1 text-[10px] text-muted-foreground">
              <span className="font-semibold text-primary">{daily}</span> /{" "}
              {data.preferences.goal} correct answers
            </p>
            <Link
              to="/practice"
              className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-primary"
            >
              {daily >= data.preferences.goal
                ? "Goal complete! Keep going"
                : "A little more every day"}
              <ArrowRight size={12} />
            </Link>
          </div>
        </section>
      </div>
      <section>
        <SectionTitle
          title="A world of words to explore"
          link="View all topics"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {topicNames.slice(0, 4).map((topic, index) => (
            <TopicCard key={topic} topic={topic} index={index} compact />
          ))}
        </div>
      </section>
      <div className="grid gap-6 xl:grid-cols-[1fr_285px]">
        <section>
          <SectionTitle
            title="Little words. Everyday wonders."
            link="Open dictionary"
            to="/dictionary"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["apple", "bicycle", "book", "flower"].map((id) => (
              <WordCard
                key={id}
                word={vocabulary.find((word) => word.id === id)!}
                compact
              />
            ))}
          </div>
        </section>
        <section className="relative overflow-hidden rounded-2xl bg-[#f9efdd] p-6 xl:mt-[38px]">
          <span className="inline-flex rounded-lg bg-white/65 p-2 text-[#b28c4e]">
            <Zap size={19} />
          </span>
          <h2 className="mt-3 font-display text-[18px] font-bold text-[#655037]">
            A quick practice,
            <br />a lasting memory.
          </h2>
          <p className="mb-4 mt-2 max-w-[210px] text-[11px] leading-5 text-[#9a8669]">
            Make your new words stick with a fun, five-question challenge.
          </p>
          <Link
            to="/practice"
            className="inline-flex items-center gap-2 rounded-lg bg-[#e5b472] px-4 py-2.5 text-[11px] font-semibold text-[#614625] hover:bg-[#dca359]"
          >
            Let's practice <ArrowRight size={14} />
          </Link>
          <span className="absolute right-5 top-5 text-[9px] text-[#a18b68]">
            ~ 2 MINUTES
          </span>
        </section>
      </div>
      {data.recent.length > 0 && (
        <section>
          <SectionTitle title="Recently viewed" />
          <div className="flex flex-wrap gap-3">
            {data.recent.slice(0, 6).map((id) => {
              const word = vocabulary.find((item) => item.id === id)!
              return (
                <button
                  key={id}
                  onClick={() => openWord(word)}
                  className={`${secondaryButton} !gap-3 !text-xs`}
                >
                  <Illustration word={word.id} className="h-8 w-9" />
                  {word.word}
                  <ChevronRight size={13} />
                </button>
              )
            })}
          </div>
        </section>
      )}
      <DashboardDiscoveries />
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4">
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <BookOpen size={15} className="text-primary" />
          Interactive English Vocabulary Learning
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            { to: "/dictionary", label: "Dictionary" },
            { to: "/topics", label: "Topics" },
            { to: "/practice", label: "Practice" },
            { to: "/progress", label: "Progress" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[10px] font-medium text-primary hover:underline"
            >
              {item.label}
              <ArrowUpRight size={11} className="ml-1 inline" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function HomeSearch() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        navigate(`/dictionary?q=${encodeURIComponent(query)}`)
      }}
      className={`${card} flex items-center gap-3 p-3 md:gap-4 md:p-4`}
    >
      <Search size={22} className="ml-2 shrink-0 text-primary" />
      <input
        aria-label="Search your picture dictionary"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={`Search ${vocabulary.length} words, topics, or everyday situations…`}
        className="min-w-0 flex-1 bg-transparent py-2 text-sm placeholder:text-muted-foreground"
      />
      <button type="submit" className={`${primaryButton} !px-3 sm:!px-5`}>
        <span className="hidden sm:inline">Find a word</span>
        <ArrowRight size={17} />
        <span className="sr-only sm:hidden">Search</span>
      </button>
    </form>
  )
}
function DashboardDiscoveries() {
  const { data, openWord } = useApp()
  const picturedWords = vocabulary.filter((word) => word.image)
  const todayWord =
    picturedWords[
      Math.floor(new Date(`${localDay()}T12:00:00`).getTime() / 86400000) %
        picturedWords.length
    ]
  const recentLearned = data.learned
    .slice(-4)
    .reverse()
    .map((id) => wordById.get(id)!)
    .filter(Boolean)
  const recommended =
    topicNames.find(
      (topic) =>
        topic !== data.explored[data.explored.length - 1] &&
        vocabulary
          .filter((word) => word.topic === topic)
          .some((word) => !data.learned.includes(word.id)),
    ) || "Home"
  return (
    <div className="space-y-7">
      {data.lastLesson && (
        <section
          className={`${card} flex flex-wrap items-center justify-between gap-4 bg-secondary/50 p-5`}
        >
          <div>
            <p className="text-xs font-semibold text-primary">
              Continue your last lesson
            </p>
            <h2 className="mt-2 font-display text-xl font-bold">
              {data.lastLesson.category} ·{" "}
              {data.lastLesson.section === "vocabulary"
                ? "Explore Vocabulary"
                : data.lastLesson.section.charAt(0).toUpperCase() +
                  data.lastLesson.section.slice(1)}
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Your saved words and progress are right where you left them.
            </p>
          </div>
          <Link className={primaryButton} to={data.lastLesson.url}>
            Continue learning <ArrowRight size={16} />
          </Link>
        </section>
      )}
      <ReviewHub compact />
      <section>
        <SectionTitle
          title="Step inside a picture"
          link="All illustrated scenes"
          to="/topics?view=scenes"
        />
        <p className="-mt-1 mb-4 text-xs text-muted-foreground">
          {scenes.length} real-life places. Click an object, hear its name, and
          make the scene your own.
        </p>
        <SceneGallery compact />
      </section>
      <div className="grid gap-5 xl:grid-cols-[1.3fr_1fr]">
        <section className={`${card} p-5`}>
          <SectionTitle title="Vocabulary of the day" icon={Sparkles} />
          <div className="flex flex-wrap items-center gap-5">
            <button
              aria-label={`View ${todayWord.word}, vocabulary of the day`}
              onClick={() => openWord(todayWord)}
              className="flex h-36 w-36 shrink-0 items-center justify-center rounded-2xl bg-[#f2f3e9]"
            >
              <Illustration word={todayWord.id} className="h-32 w-36" />
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => openWord(todayWord)}
                  className="text-left"
                >
                  <h3 className="font-display text-2xl font-bold">
                    {todayWord.word}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {todayWord.pronunciation}
                  </p>
                </button>
                <AudioButton word={todayWord.word} />
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                {todayWord.definition}
              </p>
              <p className="mt-2 text-[11px] italic leading-5">
                “{todayWord.example}”
              </p>
              <Link
                to={`/topics/${encodeURIComponent(todayWord.topic)}?section=practice&word=${todayWord.id}`}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
              >
                Practice today's word
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
        <section className={`${card} p-5`}>
          <SectionTitle
            title="Your learning, at a glance"
            link="Full progress"
            to="/progress"
          />
          <div className="my-5 grid grid-cols-3 gap-3">
            {[
              { label: "Learned", value: data.learned.length },
              { label: "Reviewed", value: data.reviewed.length },
              { label: "Topics explored", value: data.explored.length },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-2xl font-bold text-primary">
                  {item.value}
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-2 flex justify-between text-xs text-muted-foreground">
            <span>Your vocabulary journey</span>
            <span>
              {Math.round((data.learned.length / vocabulary.length) * 100)}%
            </span>
          </div>
          <ProgressBar
            value={(data.learned.length / vocabulary.length) * 100}
          />
          <Link
            to={`/topics/${encodeURIComponent(recommended)}`}
            className="mt-5 flex items-center justify-between gap-2 rounded-xl bg-secondary p-3"
          >
            <div>
              <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
                RECOMMENDED NEXT
              </p>
              <p className="mt-1 text-sm font-semibold text-primary">
                Explore {recommended.toLowerCase()}
              </p>
            </div>
            <ArrowRight size={17} className="text-primary" />
          </Link>
        </section>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <section className={`${card} p-5`}>
          <SectionTitle
            title="Recently learned"
            link="My Progress"
            to="/progress"
          />
          {recentLearned.length ? (
            <div className="space-y-2">
              {recentLearned.map((word) => (
                <button
                  key={word.id}
                  onClick={() => openWord(word)}
                  className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-muted"
                >
                  <Illustration word={word.id} className="h-12 w-14" />
                  <div>
                    <p className="text-sm font-semibold">{word.word}</p>
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      {word.topic} / {word.group}
                    </p>
                  </div>
                  <CheckCircle2
                    size={16}
                    className="ml-auto shrink-0 text-primary"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-background p-5">
              <Leaf size={24} className="text-primary" />
              <p className="mt-3 text-sm font-semibold">
                Your first discovery is waiting.
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Mark a word as learned or answer correctly in practice. Your
                latest discoveries will appear here.
              </p>
              <Link
                to="/dictionary"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary"
              >
                Find your first word
                <ArrowRight size={13} />
              </Link>
            </div>
          )}
        </section>
        <section className={`${card} p-5`}>
          <SectionTitle
            title="Words close to your heart"
            link="All favorites"
            to="/favorites"
          />
          {data.favorites.length ? (
            <>
              <div className="flex flex-wrap gap-2">
                {data.favorites
                  .slice(-8)
                  .reverse()
                  .map((id) => (
                    <button
                      key={id}
                      onClick={() => openWord(wordById.get(id)!)}
                      className={`${secondaryButton} !px-3 !text-xs`}
                    >
                      <Heart size={12} className="text-primary" />
                      {wordById.get(id)?.word}
                    </button>
                  ))}
              </div>
              <Link
                to="/practice?favorites=true"
                className={`${primaryButton} mt-5`}
              >
                <Play size={14} />A quick favorites review
              </Link>
            </>
          ) : (
            <div className="rounded-xl bg-background p-5">
              <Heart size={24} className="text-primary" />
              <p className="mt-3 text-sm font-semibold">
                Make your own little collection.
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Tap a heart anywhere in the dictionary to save a word. Come back
                here for a personal quick review.
              </p>
              <Link
                to="/favorites"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary"
              >
                Open favorites
                <ArrowRight size={13} />
              </Link>
            </div>
          )}
        </section>
      </div>
      {!data.recent.length && (
        <section
          className={`${card} flex flex-wrap items-center justify-between gap-3 p-5`}
        >
          <div>
            <h2 className="font-display text-lg font-bold">Recently viewed</h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Follow your curiosity. The words you open will leave a little
              trail here.
            </p>
          </div>
          <Link to="/dictionary" className={secondaryButton}>
            Start discovering
            <ArrowRight size={14} />
          </Link>
        </section>
      )}
    </div>
  )
}

function PageHeading({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0 flex-1">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.14em] text-primary">
          {eyebrow}
        </p>
        <h1 className={`${titleClass} break-words text-3xl`}>{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  )
}
function TopicsPage() {
  const [search, setSearch] = useState("")
  const [params, setParams] = useSearchParams()
  const sceneView = params.get("view") === "scenes"
  const topics = topicNames.filter((topic) =>
    [topic, topicIntroductions[topic], ...getGroups(topic)]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase().trim()),
  )
  return (
    <>
      <PageHeading
        eyebrow="Discover your world"
        title="One topic. So many possibilities."
        description="Explore familiar places, people, and moments through pictures."
      />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-xl border border-border bg-card p-1">
          <button
            aria-pressed={!sceneView}
            onClick={() => setParams({})}
            className={`rounded-lg px-4 py-2.5 text-xs font-semibold ${
              !sceneView ? "bg-secondary text-primary" : "text-muted-foreground"
            }`}
          >
            <Grid2X2 size={14} className="mr-1.5 inline" />
            All topics
          </button>
          <button
            aria-pressed={sceneView}
            onClick={() => {
              setParams({ view: "scenes" })
              setSearch("")
            }}
            className={`rounded-lg px-4 py-2.5 text-xs font-semibold ${
              sceneView ? "bg-secondary text-primary" : "text-muted-foreground"
            }`}
          >
            <Sparkles size={14} className="mr-1.5 inline" />
            Illustrated scenes
            <span className="ml-1.5 opacity-60">{scenes.length}</span>
          </button>
        </div>
        {!sceneView && (
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-3 text-muted-foreground"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Find a topic"
              placeholder="Find a topic or group…"
              className="w-full rounded-xl border border-border bg-card py-2.5 pl-9 pr-3 text-xs"
            />
          </div>
        )}
      </div>
      {sceneView ? (
        <>
          <div className="mb-5 rounded-2xl bg-secondary p-5">
            <h2 className="font-display text-lg font-bold">
              Real places. Words you can point to.
            </h2>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Step into a room or out into the world. Every numbered object
              opens a little lesson with pronunciation, examples, favorites, and
              practice.
            </p>
          </div>
          <SceneGallery />
        </>
      ) : (
        <>
          <p className="mb-5 text-xs text-muted-foreground">
            {topics.length} topics • {vocabulary.length} illustrated words •{" "}
            {topicNames.reduce(
              (total, topic) => total + getGroups(topic).length,
              0,
            )}{" "}
            vocabulary groups
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {topics.map((topic) => (
              <TopicCard
                key={topic}
                topic={topic}
                index={topicNames.indexOf(topic)}
              />
            ))}
          </div>
          {!topics.length && (
            <EmptyState
              title="No topics found"
              description="Try a different topic or a situation such as kitchen, weather, or work."
              action={
                <button className={primaryButton} onClick={() => setSearch("")}>
                  Show all topics
                </button>
              }
            />
          )}
        </>
      )}
    </>
  )
}
function SceneGallery({ compact = false }: { compact?: boolean }) {
  const { data } = useApp()
  const featured = compact
    ? scenes.filter((scene) =>
        ["house", "classroom", "supermarket"].includes(scene.id),
      )
    : scenes
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 ${
        compact ? "xl:grid-cols-3" : "xl:grid-cols-3"
      }`}
    >
      {featured.map((scene) => (
        <Link
          key={scene.id}
          to={`/topics/${encodeURIComponent(scene.topic)}?scene=${scene.id}`}
          className={`${card} group overflow-hidden p-2 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md`}
        >
          <SceneCanvas
            scene={scene}
            renderArt={(id) => (
              <Illustration word={id} className="h-full w-full" />
            )}
            interactive={false}
          />
          <div className="p-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-widest text-primary">
                {
                  sceneVisuals.find((visual) => visual.sceneId === scene.id)
                    ?.name
                }{" "}
                • {scene.objects.length} discoveries
              </span>
              <ArrowUpRight size={15} />
            </div>
            <h3 className="mt-2 font-display text-sm font-bold">
              {scene.title}
            </h3>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {scene.description}
            </p>
            <div className="mb-2 mt-3 flex justify-between text-xs text-muted-foreground">
              <span>
                {data.sceneProgress[scene.id]?.filter((id) =>
                  scene.objects.some((object) => object.id === id),
                ).length || 0}{" "}
                / {scene.objects.length} explored
              </span>
              {data.sessions.some(
                (session) =>
                  (session.mode === "Scene Challenge" &&
                    session.topic === scene.title) ||
                  (session.mode === `Scene Challenge · ${scene.title}` &&
                    session.topic === scene.topic),
              ) && (
                <span className="text-primary">
                  Best: {data.sceneScores[scene.id] || 0}/{scene.objects.length}
                </span>
              )}
            </div>
            <ProgressBar
              value={
                ((data.sceneProgress[scene.id]?.filter((id) =>
                  scene.objects.some((object) => object.id === id),
                ).length || 0) /
                  scene.objects.length) *
                100
              }
            />
            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
              Step inside
              <ArrowRight size={13} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
function SceneLesson({ scene }: { scene: Scene }) {
  const { data, update, openWord, visitWord, favorite, learnWord } = useApp()
  const [selectedId, setSelectedId] = useState(scene.objects[0].id)
  const [labels, setLabels] = useState(false)
  const discovered = (data.sceneProgress[scene.id] || []).filter((id) =>
    scene.objects.some((object) => object.id === id),
  )
  const [challenge, setChallenge] = useState(false)
  const [challengeIndex, setChallengeIndex] = useState(0)
  const [challengeFeedback, setChallengeFeedback] =
    useState<"correct" | "incorrect" | null>(null)
  const [challengeFailures, setChallengeFailures] = useState<string[]>([])
  const [challengeComplete, setChallengeComplete] = useState(false)
  const challengeWord = sceneWord(scene, scene.objects[challengeIndex].id)
  const word = sceneWord(scene, selectedId)
  const position = scene.objects.findIndex((object) => object.id === selectedId)
  const select = (id: string) => {
    if (challenge) {
      if (challengeComplete || challengeFeedback === "correct") return
      if (id !== scene.objects[challengeIndex].id) {
        setChallengeFeedback("incorrect")
        setChallengeFailures((previous) => [
          ...new Set([...previous, challengeWord.id]),
        ])
        return
      }
      setChallengeFeedback("correct")
    }
    setSelectedId(id)
    update((previous) => ({
      ...previous,
      sceneProgress: {
        ...previous.sceneProgress,
        [scene.id]: [
          ...new Set([...(previous.sceneProgress[scene.id] || []), id]),
        ],
      },
    }))
    visitWord(sceneWord(scene, id))
  }
  function startChallenge() {
    setChallenge(true)
    setChallengeIndex(0)
    setChallengeFeedback(null)
    setChallengeFailures([])
    setChallengeComplete(false)
  }
  function nextChallenge() {
    if (challengeIndex + 1 < scene.objects.length) {
      setChallengeIndex((previous) => previous + 1)
      setChallengeFeedback(null)
      return
    }
    setChallengeComplete(true)
    const outcomes = scene.objects.map((object) => ({
      id: sceneWord(scene, object.id).id,
      correct: !challengeFailures.includes(sceneWord(scene, object.id).id),
    }))
    const score = outcomes.filter((outcome) => outcome.correct).length
    update((previous) => ({
      ...recordReview(previous, outcomes),
      learned: [
        ...new Set([
          ...previous.learned,
          ...outcomes
            .filter((outcome) => outcome.correct)
            .map((outcome) => outcome.id),
        ]),
      ],
      reviewed: [
        ...new Set([
          ...previous.reviewed,
          ...outcomes.map((outcome) => outcome.id),
        ]),
      ],
      sceneScores: {
        ...previous.sceneScores,
        [scene.id]: Math.max(previous.sceneScores[scene.id] || 0, score),
      },
      sessions: [
        ...previous.sessions,
        {
          date: new Date().toISOString(),
          score,
          total: outcomes.length,
          mode: `Scene Challenge · ${scene.title}`,
          topic: scene.topic,
          section: "games",
        },
      ],
      activity: [
        ...previous.activity,
        ...outcomes.map((outcome): Stored["activity"][number] => ({
          date: new Date().toISOString(),
          type: "reviewed",
          target: outcome.id,
        })),
      ].slice(-100),
    }))
  }
  return (
    <section className={`${card} mb-7 p-4 md:p-5`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-lg font-bold">{scene.title}</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            {challenge
              ? "Find each word in the picture. Listen, look, and select its object."
              : "Click a numbered object. A whole world of words is hiding in plain sight."}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => (challenge ? setChallenge(false) : startChallenge())}
            className={secondaryButton}
          >
            {challenge ? <BookOpen size={15} /> : <Target size={15} />}
            {challenge ? "Explore freely" : "Find the objects"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
            <input
              type="checkbox"
              disabled={challenge}
              checked={labels && !challenge}
              onChange={(event) => setLabels(event.target.checked)}
              className="h-4 w-4 accent-[#16796c]"
            />
            Show word labels
          </label>
        </div>
      </div>
      <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1.9fr)_minmax(240px,1fr)]">
        <div>
          <SceneCanvas
            scene={scene}
            selectedId={
              challenge
                ? challengeFeedback === "correct"
                  ? scene.objects[challengeIndex].id
                  : ""
                : selectedId
            }
            onSelect={select}
            labels={!challenge && labels}
            challenge={challenge}
            renderArt={(id) => (
              <Illustration word={id} className="h-full w-full" />
            )}
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Environment photo:{" "}
            <a
              href={`https://unsplash.com/@${scene.username}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {scene.photographer}
            </a>{" "}
            ·{" "}
            <a
              href="https://unsplash.com/license"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary hover:underline"
            >
              Unsplash License
            </a>
          </p>
          <div className="mt-3 flex items-center justify-between gap-2 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-primary" />
              {discovered.length} of {scene.objects.length} objects discovered
            </span>
            <span>Tap a numbered spot or use the buttons below</span>
          </div>
          <ProgressBar
            value={(discovered.length / scene.objects.length) * 100}
            className="mt-2"
          />
          <div
            className="mt-4 flex flex-wrap gap-2"
            aria-label="Scene vocabulary"
          >
            {scene.objects.map((object, index) => (
              <button
                key={object.id}
                onClick={() => select(object.id)}
                aria-pressed={!challenge && selectedId === object.id}
                className={`min-h-11 rounded-lg border px-3 py-2 text-xs ${
                  !challenge && selectedId === object.id
                    ? "border-primary bg-secondary font-semibold text-primary"
                    : "border-border hover:bg-muted"
                }`}
              >
                <span className="mr-1.5 text-[10px] text-muted-foreground">
                  {index + 1}.
                </span>
                {challenge
                  ? `Object ${index + 1}`
                  : sceneWord(scene, object.id).word}
                {!challenge &&
                  data.learned.includes(sceneWord(scene, object.id).id) && (
                    <Check size={12} className="ml-1 inline text-primary" />
                  )}
              </button>
            ))}
          </div>
        </div>
        {challenge ? (
          <div className="rounded-xl bg-background p-5" aria-live="polite">
            {challengeComplete ? (
              <>
                <span className="inline-flex rounded-2xl bg-secondary p-4 text-primary">
                  <Trophy size={30} />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">
                  Scene complete!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  You found every object.{" "}
                  {scene.objects.length - challengeFailures.length} of{" "}
                  {scene.objects.length} correct on the first try.
                </p>
                <p className="mt-3 text-xs text-primary">
                  Best score: {data.sceneScores[scene.id] || 0} /{" "}
                  {scene.objects.length}
                </p>
                <button
                  onClick={startChallenge}
                  className={`${primaryButton} mt-5 w-full`}
                >
                  Try Again <ArrowRight size={15} />
                </button>
                <Link
                  to={`/topics/${encodeURIComponent(scene.topic)}?section=practice&scene=${scene.id}`}
                  className={`${secondaryButton} mt-2 w-full`}
                >
                  Review this scene
                </Link>
                <Link
                  to={`/topics/${encodeURIComponent(scene.topic)}?section=progress`}
                  className={`${secondaryButton} mt-2 w-full`}
                >
                  <TrendingUp size={15} /> Category Progress
                </Link>
              </>
            ) : (
              <>
                <span className="text-xs font-semibold text-primary">
                  Scene challenge · {challengeIndex + 1} /{" "}
                  {scene.objects.length}
                </span>
                <ProgressBar
                  value={(challengeIndex / scene.objects.length) * 100}
                  className="mt-3"
                />
                <p className="mt-6 text-xs text-muted-foreground">
                  Look around the picture and find…
                </p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold">
                    {challengeWord.word}
                  </h3>
                  <AudioButton word={challengeWord.word} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {challengeWord.pronunciation}
                </p>
                <p className="mt-5 text-xs leading-5 text-muted-foreground">
                  Select the object in the scene, or its numbered button below
                  the picture.
                </p>
                {challengeFeedback && (
                  <div
                    role="status"
                    className={`mt-5 rounded-xl p-4 text-sm ${
                      challengeFeedback === "correct"
                        ? "bg-secondary text-primary"
                        : "bg-accent/15 text-foreground"
                    }`}
                  >
                    {challengeFeedback === "correct"
                      ? `That's it! ${challengeWord.example}`
                      : "Not that object yet. Look carefully and try another one."}
                  </div>
                )}
                <button
                  disabled={challengeFeedback !== "correct"}
                  onClick={nextChallenge}
                  className={`${primaryButton} mt-5 w-full`}
                >
                  {challengeIndex + 1 === scene.objects.length
                    ? "See my results"
                    : "Next object"}
                  <ArrowRight size={15} />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="rounded-xl bg-background p-5" aria-live="polite">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-widest text-primary">
                WORD {position + 1} / {scene.objects.length}
              </span>
              <button
                onClick={() => favorite(word.id)}
                aria-label={`${
                  data.favorites.includes(word.id) ? "Remove" : "Add"
                } ${word.word} favorite`}
                aria-pressed={data.favorites.includes(word.id)}
                className="rounded-full p-2 text-primary"
              >
                <Heart
                  size={18}
                  className={
                    data.favorites.includes(word.id) ? "fill-primary" : ""
                  }
                />
              </button>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 className="font-display text-2xl font-bold">{word.word}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {word.pronunciation}
                </p>
              </div>
              <AudioButton word={word.word} large />
            </div>
            <p className="mt-3 text-[10px] text-muted-foreground">
              {word.partOfSpeech} •{" "}
              <Link
                to={`/topics/${encodeURIComponent(word.topic)}`}
                className="text-primary hover:underline"
              >
                {word.topic}
              </Link>{" "}
              / {word.group}
            </p>
            <p className="mt-4 text-sm leading-6">{word.definition}</p>
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-card p-3">
              <p className="flex-1 text-xs italic leading-5 text-muted-foreground">
                “{word.example}”
              </p>
              <AudioButton word={word.example} />
            </div>
            <button
              onClick={() => openWord(word)}
              className={`${secondaryButton} mt-4 w-full`}
            >
              Full word details
              <ArrowUpRight size={14} />
            </button>
            <Link
              to={`/topics/${encodeURIComponent(word.topic)}?section=practice&word=${word.id}`}
              className={`${primaryButton} mt-2 w-full`}
            >
              <Play size={14} />
              Practice this word
            </Link>
            <button
              disabled={data.learned.includes(word.id)}
              onClick={() => learnWord(word)}
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold text-primary disabled:opacity-60"
            >
              <CheckCircle2 size={14} />
              {data.learned.includes(word.id)
                ? "Word learned"
                : "Mark as learned"}
            </button>
            <div className="mt-4 flex justify-between border-t border-border pt-4">
              <button
                disabled={position === 0}
                onClick={() => select(scene.objects[position - 1].id)}
                className="flex items-center gap-1 rounded-lg p-1 text-xs text-muted-foreground disabled:opacity-30"
              >
                <ChevronLeft size={15} />
                Previous
              </button>
              <button
                disabled={position === scene.objects.length - 1}
                onClick={() => select(scene.objects[position + 1].id)}
                className="flex items-center gap-1 rounded-lg p-1 text-xs text-primary disabled:opacity-30"
              >
                Next
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <p className="text-xs text-muted-foreground">
          Practice the words from this scene that belong to {scene.topic}.
        </p>
        <Link
          to={`/topics/${encodeURIComponent(scene.topic)}?section=practice&scene=${scene.id}`}
          className={secondaryButton}
        >
          <Play size={14} />
          Practice this scene
        </Link>
      </div>
    </section>
  )
}
function TopicDetail() {
  const { data, update, openWord, visitWord, favorite } = useApp()
  const category = decodeURIComponent(
    useLocation().pathname.split("/").pop() || "",
  )
  const words = vocabulary.filter((word) => word.topic === category)
  useEffect(() => {
    if (!topicNames.includes(category)) return
    update((previous) =>
      previous.explored.includes(category)
        ? previous
        : {
            ...previous,
            explored: [...previous.explored, category],
            activity: [
              ...previous.activity,
              {
                date: new Date().toISOString(),
                type: "topic" as const,
                target: category,
              },
            ].slice(-100),
          },
    )
  }, [category])
  if (!words.length) return <TopicVocabulary />
  return (
    <CategoryCourse
      key={category}
      category={category}
      words={words}
      data={data}
      update={update}
      openWord={openWord}
      visitWord={visitWord}
      favorite={favorite}
      art={(word, className) => (
        <Illustration word={word.id} className={className} />
      )}
      audio={(text) => <AudioButton word={text} />}
      topicArt={<TopicArt topic={category} />}
      vocabularyContent={<TopicVocabulary />}
      sceneWordIds={Object.fromEntries(
        scenes.map((scene) => [
          scene.id,
          scene.objects.map((object) => sceneWord(scene, object.id).id),
        ]),
      )}
      complete={(section, mode, outcomes) => {
        const valid = outcomes.filter(
          (outcome) => wordById.get(outcome.id)?.topic === category,
        )
        if (!valid.length) return
        update((previous) => ({
          ...recordReview(previous, valid),
          learned: [
            ...new Set([
              ...previous.learned,
              ...valid
                .filter((outcome) => outcome.correct)
                .map((outcome) => outcome.id),
            ]),
          ],
          reviewed: [
            ...new Set([
              ...previous.reviewed,
              ...valid.map((outcome) => outcome.id),
            ]),
          ],
          activity: [
            ...previous.activity,
            ...[...new Set(valid.map((outcome) => outcome.id))].map(
              (id): Stored["activity"][number] => ({
                date: new Date().toISOString(),
                type: "reviewed",
                target: id,
              }),
            ),
          ].slice(-100),
          sessions: [
            ...previous.sessions,
            {
              date: new Date().toISOString(),
              score: valid.filter((outcome) => outcome.correct).length,
              total: valid.length,
              topic: category,
              section,
              mode,
            },
          ],
        }))
      }}
    />
  )
}
function TopicVocabulary() {
  const { data, update } = useApp()
  const [params, setParams] = useSearchParams()
  const topic = decodeURIComponent(
    useLocation().pathname.split("/").pop() || "Food",
  )
  const requestedCEFR = params.get("cefr")
  const cefr = resolveCEFRSelection(
    requestedCEFR,
    data.preferences.cefrLevel,
  )
  const allWords = vocabulary.filter((word) => word.topic === topic)
  const words =
    cefr === "All levels"
      ? allWords
      : allWords.filter((word) => word.cefr?.level === cefr)
  const groups = [...new Set(words.map((word) => word.group))]
  const [group, setGroup] = useState(params.get("group") || "All vocabulary")
  const topicScenes = scenes.filter((scene) => scene.topic === topic)
  const selectedScene =
    topicScenes.find((scene) => scene.id === params.get("scene")) ||
    topicScenes[0]
  const showScene = Boolean(selectedScene) && params.get("view") !== "cards"
  const learned = words.filter((word) => data.learned.includes(word.id)).length
  useEffect(() => {
    setGroup(params.get("group") || "All vocabulary")
    if (topicNames.includes(topic))
      update((previous) =>
        previous.explored.includes(topic)
          ? previous
          : {
              ...previous,
              explored: [...previous.explored, topic],
              activity: [
                ...previous.activity,
                {
                  date: new Date().toISOString(),
                  type: "topic" as const,
                  target: topic,
                },
              ].slice(-100),
            },
      )
  }, [topic])
  if (!allWords.length)
    return (
      <EmptyState
        title="This topic isn't here yet"
        description="Choose one of our illustrated topics to start learning."
        action={
          <Link to="/topics" className={primaryButton}>
            Explore topics
          </Link>
        }
      />
    )
  if (!words.length)
    return (
      <>
        <PageHeading
          eyebrow="CEFR vocabulary"
          title={`No ${cefr} words are ready in ${topic} yet.`}
          description="This level is available in the learning framework, but this topic still needs educator-reviewed vocabulary for it."
        />
        <EmptyState
          title="Try another CEFR level"
          description="Existing progress is unchanged. Show every level or choose another level from Dictionary and Settings."
          action={
            <button
              onClick={() => {
                const next = new URLSearchParams(params)
                next.set("cefr", "all")
                setParams(next)
              }}
              className={primaryButton}
            >
              Show all CEFR levels
            </button>
          }
        />
      </>
    )
  return (
    <>
      <Link
        to="/topics"
        className="mb-5 inline-flex items-center gap-1 text-xs text-muted-foreground"
      >
        <ChevronLeft size={15} />
        All topics
        <ChevronRight size={12} />
        <span className="text-foreground">{topic}</span>
      </Link>
      <CategoryHero
        category={topic}
        eyebrow={`Picture lesson · ${words.length} words · ${groups.length} groups`}
        title={topic}
        description={topicIntroductions[topic]}
      >
        <div className="mb-2 mt-6 flex justify-between text-xs">
          <span>
            {learned} of {words.length} learned
          </span>
          <span>{Math.round((learned / words.length) * 100)}%</span>
        </div>
        <ProgressBar value={(learned / words.length) * 100} />
      </CategoryHero>
      <div className={`${card} mb-5 flex flex-wrap items-center justify-between gap-4 p-4`}>
        <div>
          <p className="text-sm font-semibold">Learn at your CEFR level</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Provisional estimates · filtering never removes saved progress
          </p>
        </div>
        <select
          aria-label="Topic CEFR level"
          value={cefr}
          onChange={(event) => {
            const next = new URLSearchParams(params)
            next.set(
              "cefr",
              event.target.value === "All levels" ? "all" : event.target.value,
            )
            next.delete("group")
            setGroup("All vocabulary")
            setParams(next)
          }}
          className="rounded-xl border border-border bg-background px-4 py-3 text-xs"
        >
          <option value="All levels">All CEFR levels</option>
          {cefrLevels.map((level) => (
            <option key={level} value={level}>
              {level} · {cefrLabels[level]}
            </option>
          ))}
        </select>
      </div>
      {selectedScene && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex rounded-xl border border-border bg-card p-1">
            <button
              aria-pressed={showScene}
              onClick={() => setParams({ scene: selectedScene.id })}
              className={`rounded-lg px-4 py-2.5 text-xs font-semibold ${
                showScene
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <Sparkles size={14} className="mr-1.5 inline" />
              Illustrated scene
            </button>
            <button
              aria-pressed={!showScene}
              onClick={() => setParams({ view: "cards" })}
              className={`rounded-lg px-4 py-2.5 text-xs font-semibold ${
                !showScene
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <Grid2X2 size={14} className="mr-1.5 inline" />
              Vocabulary cards
            </button>
          </div>
          {topicScenes.length > 1 && (
            <select
              aria-label="Choose an illustrated scene"
              value={selectedScene.id}
              onChange={(event) => setParams({ scene: event.target.value })}
              className="rounded-xl border border-border bg-card px-4 py-2.5 text-xs"
            >
              {topicScenes.map((scene) => (
                <option key={scene.id} value={scene.id}>
                  {scene.title}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
      {showScene && (
        <SceneLesson key={selectedScene.id} scene={selectedScene} />
      )}
      <TopicLearningPath
        topic={topic}
        onChoose={(name) => {
          setGroup(name)
          document.getElementById("topic-vocabulary")?.scrollIntoView({
            behavior: data.preferences.reduceMotion ? "instant" : "smooth",
            block: "start",
          })
        }}
      />
      <div id="topic-vocabulary" className="scroll-mt-24" />
      <SectionTitle title="Explore the vocabulary groups" />
      <div className="mb-6 flex flex-wrap gap-2">
        {["All vocabulary", ...groups].map((name) => (
          <button
            key={name}
            onClick={() => setGroup(name)}
            aria-pressed={group === name}
            className={`rounded-xl border px-3 py-2.5 text-xs ${
              group === name
                ? "border-primary bg-secondary font-semibold text-primary"
                : "border-border bg-card text-muted-foreground hover:border-primary/40"
            }`}
          >
            {name}
            <span className="ml-2 text-[10px] opacity-65">
              {name === "All vocabulary"
                ? words.length
                : words.filter((word) => word.group === name).length}
            </span>
          </button>
        ))}
      </div>
      <div className="space-y-8">
        {groups
          .filter((name) => group === "All vocabulary" || group === name)
          .map((name) => {
            const items = words.filter((word) => word.group === name)
            return (
              <section key={name}>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-display text-lg font-bold">
                    {name}
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      {items.length} words
                    </span>
                  </h2>
                  <Link
                    to={`/topics/${encodeURIComponent(topic)}?section=practice&group=${encodeURIComponent(name)}&cefr=${cefr === "All levels" ? "all" : cefr}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-primary"
                  >
                    <Play size={13} />
                    Practice this group
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((word) => (
                    <WordCard key={word.id} word={word} />
                  ))}
                </div>
              </section>
            )
          })}
      </div>
      <div
        className={`${card} mt-8 flex flex-wrap items-center justify-between gap-4 p-6`}
      >
        <div>
          <h2 className="font-semibold">Ready to put your words to work?</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Review the whole topic, or practice a smaller vocabulary group.
          </p>
        </div>
        <Link
          to={`/topics/${encodeURIComponent(topic)}?section=practice&cefr=${cefr === "All levels" ? "all" : cefr}`}
          className={primaryButton}
        >
          <Play size={15} />
          Practice this topic
        </Link>
      </div>
    </>
  )
}
function WordListRow({ word }: { word: Word }) {
  const { data, favorite, openWord } = useApp()
  return (
    <article className={`${card} flex items-start gap-4 p-4`}>
      <button
        aria-label={`View ${word.word}`}
        onClick={() => openWord(word)}
        className="hidden shrink-0 rounded-xl bg-[#f3f5ef] sm:block"
      >
        <Illustration word={word.id} className="h-28 w-32" />
      </button>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => openWord(word)}
            className="font-display text-lg font-bold"
          >
            {word.word}
          </button>
          <span className="text-xs text-muted-foreground">
            {word.pronunciation}
          </span>
          <span className="rounded-md bg-secondary px-2 py-1 text-[10px] text-primary">
            {word.topic} / {word.group}
          </span>
          <CEFRBadge word={word} />
        </div>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {word.definition}
        </p>
        <p className="mt-1 text-xs italic leading-5">“{word.example}”</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {word.related.slice(0, 3).map((id) => (
            <button
              key={id}
              onClick={() => openWord(wordById.get(id)!)}
              className="rounded-lg border border-border px-2 py-1 text-[10px] text-muted-foreground hover:bg-secondary"
            >
              {wordById.get(id)?.word}
              <ArrowUpRight size={10} className="ml-1 inline" />
            </button>
          ))}
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-center gap-3">
        <AudioButton word={word.word} />
        <button
          aria-label={`${
            data.favorites.includes(word.id) ? "Remove" : "Add"
          } ${word.word} favorite`}
          aria-pressed={data.favorites.includes(word.id)}
          onClick={() => favorite(word.id)}
          className="rounded-full p-2 text-primary"
        >
          <Heart
            size={16}
            className={data.favorites.includes(word.id) ? "fill-primary" : ""}
          />
        </button>
      </div>
    </article>
  )
}
function DictionaryPage() {
  const { data } = useApp()
  const [params, setParams] = useSearchParams()
  const query = params.get("q") || ""
  const topic = params.get("topic") || "All topics"
  const requestedLevel = params.get("level")
  const level = resolveCEFRSelection(
    requestedLevel,
    data.preferences.cefrLevel,
  )
  const group = params.get("group") || "All groups"
  const letter = params.get("letter") || ""
  const status = params.get("status") || "All words"
  const imageFilter =
    params.get("images") ||
    (query || letter || topic !== "All topics" ? "all" : "verified")
  const verifiedCount = vocabulary.filter(
    (word) => word.imageStatus === "verified",
  ).length
  const view = params.get("view") || "grid"
  const sort = params.get("sort") || "Relevance"
  const setFilter = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    value ? next.set(key, value) : next.delete(key)
    next.delete("page")
    if (key === "topic") next.delete("group")
    setParams(next, { replace: true })
  }
  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  const dueIds = new Set(reviewDue(data).map((word) => word.id))
  const results = vocabulary
    .filter((word) => {
      const text = [
        word.word,
        word.definition,
        word.example,
        word.topic,
        word.group,
        ...word.related.map((id) => wordById.get(id)?.word),
      ]
        .join(" ")
        .toLowerCase()
      return (
        tokens.every((token) => text.includes(token)) &&
        (topic === "All topics" || word.topic === topic) &&
        (level === "All levels" || word.cefr?.level === level) &&
        (group === "All groups" || word.group === group) &&
        (!letter || word.word.startsWith(letter.toLowerCase())) &&
        (imageFilter === "all" ||
          (imageFilter === "verified"
            ? word.imageStatus === "verified"
            : word.imageStatus !== "verified")) &&
        (status === "All words" ||
          (status === "Learned" && data.learned.includes(word.id)) ||
          (status === "Not learned" && !data.learned.includes(word.id)) ||
          (status === "Favorites" && data.favorites.includes(word.id)) ||
          (status === "Ready to review" && dueIds.has(word.id)) ||
          (status === "Words to revisit" && data.mistakes.includes(word.id)) ||
          (status === "Confident" && (data.mastery[word.id]?.streak || 0) >= 3))
      )
    })
    .sort((first, second) => {
      if (sort === "Z–A") return second.word.localeCompare(first.word)
      if (sort === "Relevance" && query.trim()) {
        const rank = (word: Word) =>
          word.word === query.toLowerCase().trim()
            ? 0
            : word.word.startsWith(query.toLowerCase().trim())
              ? 1
              : word.word.includes(query.toLowerCase().trim())
                ? 2
                : 3
        return (
          rank(first) - rank(second) || first.word.localeCompare(second.word)
        )
      }
      return first.word.localeCompare(second.word)
    })
  const pageSize = 24
  const pages = Math.max(1, Math.ceil(results.length / pageSize))
  const currentPage = Math.max(
    1,
    Math.min(pages, Number(params.get("page")) || 1),
  )
  const visible = results.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )
  const pageTo = (page: number) => {
    const next = new URLSearchParams(params)
    next.set("page", String(page))
    setParams(next)
    window.scrollTo({
      top: 0,
      behavior: data.preferences.reduceMotion ? "instant" : "smooth",
    })
  }
  return (
    <>
      <PageHeading
        eyebrow="Your visual vocabulary"
        title="Real words. Pictures you can trust."
        description={`${verifiedCount} entries have a checked word-specific photograph. ${vocabulary.length - verifiedCount} entries currently use a clearly labelled learning-context image while their exact photograph is reviewed.`}
      />
      <div className={`${card} mb-6 p-5`}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2" aria-label="Image availability">
            {[
              { id: "verified", label: "Verified pictures" },
              { id: "all", label: "All vocabulary" },
              { id: "pending", label: "Images awaiting review" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={imageFilter === item.id}
                onClick={() => setFilter("images", item.id)}
                className={`rounded-lg border px-3 py-2 text-xs font-semibold ${
                  imageFilter === item.id
                    ? "border-primary bg-secondary text-primary"
                    : "border-border hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            Exact word → checked photo → pronunciation → meaning
          </span>
        </div>
        <div className="relative">
          <Search
            size={22}
            className="absolute left-4 top-4 text-muted-foreground"
          />
          <input
            value={query}
            onChange={(event) => setFilter("q", event.target.value)}
            aria-label="Search dictionary"
            placeholder="Search a word, meaning, or everyday situation…"
            className="w-full rounded-xl border border-border bg-background py-4 pl-12 pr-10 text-sm"
          />
          {query && (
            <button
              className="absolute right-3 top-4 text-muted-foreground"
              onClick={() => setFilter("q", "")}
              aria-label="Clear search"
            >
              <X size={19} />
            </button>
          )}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <select
            aria-label="Filter by topic"
            value={topic}
            onChange={(event) =>
              setFilter(
                "topic",
                event.target.value === "All topics" ? "" : event.target.value,
              )
            }
            className="rounded-xl border border-border bg-background px-3 py-3 text-xs"
          >
            <option>All topics</option>
            {topicNames.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
          <select
            aria-label="Filter by vocabulary group"
            disabled={topic === "All topics"}
            value={group}
            onChange={(event) =>
              setFilter(
                "group",
                event.target.value === "All groups" ? "" : event.target.value,
              )
            }
            className="rounded-xl border border-border bg-background px-3 py-3 text-xs disabled:opacity-40"
          >
            <option>All groups</option>
            {getGroups(topic).map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
          <select
            aria-label="Filter by level"
            value={level}
            onChange={(event) =>
              setFilter(
                "level",
                event.target.value === "All levels" ? "all" : event.target.value,
              )
            }
            className="rounded-xl border border-border bg-background px-3 py-3 text-xs"
          >
            <option value="All levels">All CEFR levels</option>
            {cefrLevels.map((item) => (
              <option key={item} value={item}>
                {item} · {cefrLabels[item]}
              </option>
            ))}
          </select>
          <select
            aria-label="Filter by learning status"
            value={status}
            onChange={(event) =>
              setFilter(
                "status",
                event.target.value === "All words" ? "" : event.target.value,
              )
            }
            className="rounded-xl border border-border bg-background px-3 py-3 text-xs"
          >
            <option>All words</option>
            <option>Not learned</option>
            <option>Learned</option>
            <option>Favorites</option>
            <option>Ready to review</option>
            <option>Words to revisit</option>
            <option>Confident</option>
          </select>
        </div>
        <p className="mt-3 rounded-xl bg-secondary/60 px-4 py-3 text-xs leading-5 text-muted-foreground">
          CEFR labels are provisional learning estimates while the vocabulary is
          reviewed by an educator. They filter content without changing your
          saved progress.
        </p>
        <div className="mt-5 flex flex-wrap gap-1">
          <button
            onClick={() => setFilter("letter", "")}
            aria-pressed={!letter}
            className={`rounded-lg px-3 py-2 text-[10px] font-semibold ${
              !letter ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            All
          </button>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((value) => (
            <button
              key={value}
              aria-pressed={letter === value}
              onClick={() => setFilter("letter", value)}
              className={`h-9 w-7 rounded-lg text-[10px] font-medium ${
                letter === value
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p role="status" className="text-xs text-muted-foreground">
          {results.length} {results.length === 1 ? "word" : "words"}
          {query ? ` matching “${query}”` : " waiting to be discovered"}
          {results.length > pageSize && (
            <span className="ml-2">
              • showing {(currentPage - 1) * pageSize + 1}–
              {Math.min(currentPage * pageSize, results.length)}
            </span>
          )}
        </p>
        <div className="flex items-center gap-3">
          <select
            aria-label="Sort vocabulary"
            value={sort}
            onChange={(event) => setFilter("sort", event.target.value)}
            className="rounded-lg border border-border bg-card px-3 py-2 text-xs"
          >
            <option>Relevance</option>
            <option>A–Z</option>
            <option>Z–A</option>
          </select>
          <div className="inline-flex rounded-lg border border-border bg-card p-1">
            <button
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              onClick={() => setFilter("view", "grid")}
              className={`rounded-md p-2 ${
                view === "grid"
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <Grid2X2 size={16} />
            </button>
            <button
              aria-label="List view"
              aria-pressed={view === "list"}
              onClick={() => setFilter("view", "list")}
              className={`rounded-md px-3 py-2 text-xs ${
                view === "list"
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          view === "grid"
            ? "grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
            : "space-y-3"
        }
      >
        {visible.map((word) =>
          view === "grid" ? (
            <WordCard key={word.id} word={word} />
          ) : (
            <WordListRow key={word.id} word={word} />
          ),
        )}
      </div>
      {!results.length && (
        <EmptyState
          title="No words found — yet."
          description="Try part of a word, a meaning such as cold, or an everyday situation such as kitchen. You can also clear the filters."
          action={
            <button className={primaryButton} onClick={() => setParams({})}>
              Reset filters
            </button>
          }
        />
      )}{" "}
      {pages > 1 && (
        <nav
          aria-label="Dictionary pages"
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            className={secondaryButton}
            disabled={currentPage === 1}
            onClick={() => pageTo(currentPage - 1)}
          >
            <ChevronLeft size={15} />
            Previous
          </button>
          <span className="text-xs text-muted-foreground">
            Page {currentPage} of {pages}
          </span>
          <button
            className={secondaryButton}
            disabled={currentPage === pages}
            onClick={() => pageTo(currentPage + 1)}
          >
            Next
            <ChevronRight size={15} />
          </button>
        </nav>
      )}
    </>
  )
}

function WordDialog({ word, onClose }: WordDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const { data, favorite, learnWord, openWord, audioState, notify } = useApp()
  const navigate = useNavigate()
  const learned = data.learned.includes(word.id)
  const siblings = vocabulary.filter((item) => item.topic === word.topic)
  const position = siblings.findIndex((item) => item.id === word.id)
  useEffect(() => {
    dialog.current?.scrollTo({ top: 0 })
  }, [word.id])
  useEffect(() => {
    const element = dialog.current
    element?.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      element?.close()
      document.body.style.overflow = previous
    }
  }, [])
  return (
    <dialog
      ref={dialog}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === dialog.current) onClose()
      }}
      aria-labelledby="word-title"
      className="fixed inset-0 m-auto max-h-[90vh] w-[min(92vw,650px)] overflow-y-auto rounded-3xl border border-border bg-card p-0 text-foreground shadow-2xl"
    >
      <button
        autoFocus
        onClick={onClose}
        aria-label="Close vocabulary details"
        className="absolute right-4 top-4 z-10 rounded-full bg-card p-2 text-muted-foreground hover:text-primary"
      >
        <X size={20} />
      </button>
      <div className="flex h-[220px] items-center justify-center bg-[#eef2e9]">
        <Illustration
          word={word.id}
          className="h-[200px] w-full max-w-[460px]"
        />
      </div>
      <VocabularyPhotoCredit word={word} />
      <div className="p-7">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-widest text-primary">
              {word.topic} / {word.group}
            </span>
            <div className="mt-2">
              <CEFRBadge word={word} detailed />
            </div>
            <h2
              id="word-title"
              className="mt-2 font-display text-3xl font-bold"
            >
              {word.word}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {word.pronunciation}
              <span className="mx-2">·</span>
              {word.partOfSpeech}
            </p>
          </div>
          <AudioButton word={word.word} large />
        </div>
        <p className="mt-6 text-sm leading-6">{word.definition}</p>
        <p className="mt-2 flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <Volume2 size={12} />
          {!data.preferences.audio
            ? "Audio is off in Settings"
            : audioState?.word === word.word
              ? audioState.status === "completed"
                ? "Pronunciation complete. Tap to hear it again."
                : audioState.status === "paused"
                  ? "Audio paused. Tap to resume."
                  : audioState.status === "playing"
                    ? "Playing pronunciation. Tap to pause."
                    : "Preparing pronunciation…"
              : "Ready to listen. Tap the speaker."}
        </p>
        <div className="mt-4 rounded-xl bg-background p-4">
          <p className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
            IN A SENTENCE
          </p>
          <div className="flex items-center gap-3">
            <p className="flex-1 text-sm leading-6">“{word.example}”</p>
            <AudioButton word={word.example} />
          </div>
        </div>
        <WordLearningStatus word={word} />
        <p className="mb-2 mt-5 text-xs font-semibold">Explore related words</p>
        <div className="flex flex-wrap gap-2">
          {word.related.map((id) => (
            <button
              key={id}
              onClick={() =>
                openWord(vocabulary.find((item) => item.id === id)!)
              }
              className="rounded-lg bg-secondary px-3 py-2 text-xs text-primary hover:brightness-95"
            >
              {wordById.get(id)?.word}
              <ArrowUpRight size={12} className="ml-1 inline" />
            </button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            className={primaryButton}
            onClick={() => {
              onClose()
              navigate(
                `/topics/${encodeURIComponent(word.topic)}?section=practice&word=${word.id}`,
              )
            }}
          >
            <Play size={15} />
            Practice this word
          </button>
          <button onClick={() => favorite(word.id)} className={secondaryButton}>
            <Heart
              size={15}
              className={
                data.favorites.includes(word.id)
                  ? "fill-primary text-primary"
                  : ""
              }
            />
            {data.favorites.includes(word.id)
              ? "Saved to favorites"
              : "Add to Favorites"}
          </button>
          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(window.location.href)
                notify(
                  `Link to “${word.word}” copied. Share it with your study partner.`,
                )
              } catch {
                notify(
                  "Copy the link from your browser's address bar to share this word.",
                )
              }
            }}
            className={secondaryButton}
          >
            <Copy size={15} />
            Copy word link
          </button>
          <button
            disabled={learned}
            onClick={() => learnWord(word)}
            className={`${secondaryButton} w-full !text-primary`}
          >
            <CheckCircle2 size={16} />
            {learned ? "You've learned this word" : "Mark as learned"}
          </button>
        </div>
        <div className="mt-6 flex items-center justify-between gap-2 border-t border-border pt-5">
          <button
            onClick={() => openWord(siblings[position - 1])}
            disabled={position === 0}
            className="flex items-center gap-1 rounded-lg p-2 text-xs text-muted-foreground disabled:opacity-30"
          >
            <ChevronLeft size={15} />
            Previous word
          </button>
          <button
            onClick={() => {
              onClose()
              navigate(
                `/topics/${encodeURIComponent(word.topic)}?section=vocabulary`,
              )
            }}
            className="rounded-lg p-2 text-xs font-semibold text-primary"
          >
            Explore {word.topic}
          </button>
          <button
            onClick={() => openWord(siblings[position + 1])}
            disabled={position === siblings.length - 1}
            className="flex items-center gap-1 rounded-lg p-2 text-xs text-primary disabled:opacity-30"
          >
            Next word
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </dialog>
  )
}

function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description: string
  action?: ReactNode
}) {
  return (
    <div
      className={`${card} flex min-h-[260px] flex-col items-center justify-center p-8 text-center`}
    >
      <span className="mb-4 rounded-2xl bg-secondary p-4 text-primary">
        <BookOpen size={29} />
      </span>
      <h2 className={`${titleClass} text-xl`}>{title}</h2>
      <p className="mb-5 mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      {action}
    </div>
  )
}
function FavoritesPage() {
  const { data, favorite } = useApp()
  const [params, setParams] = useSearchParams()
  const query = params.get("q") || ""
  const topic = params.get("topic") || "All topics"
  const sort = params.get("sort") || "Recently saved"
  const saved = vocabulary.filter((word) => data.favorites.includes(word.id))
  const words = saved
    .filter(
      (word) =>
        (topic === "All topics" || word.topic === topic) &&
        `${word.word} ${word.topic} ${word.definition}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    )
    .sort((first, second) =>
      sort === "A–Z"
        ? first.word.localeCompare(second.word)
        : data.favorites.indexOf(second.id) - data.favorites.indexOf(first.id),
    )
  const setFilter = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    value ? next.set(key, value) : next.delete(key)
    setParams(next, { replace: true })
  }
  const practiceParams = new URLSearchParams({ favorites: "true" })
  if (topic !== "All topics") practiceParams.set("topic", topic)
  if (query.trim()) practiceParams.set("q", query.trim())
  return (
    <>
      <PageHeading
        eyebrow="Keep them close"
        title="Your favorite words"
        description="A little collection of words worth coming back to."
      >
        {words.length > 0 && (
          <Link
            to={`/practice?${practiceParams.toString()}`}
            className={primaryButton}
          >
            <Play size={15} />
            Practice favorites
          </Link>
        )}
      </PageHeading>
      {saved.length > 0 && (
        <section className={`${card} mb-6 p-5`}>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr]">
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3 top-3 text-muted-foreground"
              />
              <input
                aria-label="Search favorites"
                value={query}
                onChange={(event) => setFilter("q", event.target.value)}
                placeholder="Find a saved word…"
                className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-3 text-xs"
              />
            </div>
            <select
              aria-label="Filter favorite topics"
              value={topic}
              onChange={(event) =>
                setFilter(
                  "topic",
                  event.target.value === "All topics" ? "" : event.target.value,
                )
              }
              className="rounded-xl border border-border bg-background px-3 py-3 text-xs"
            >
              <option>All topics</option>
              {[
                ...new Set([
                  ...saved.map((word) => word.topic),
                  ...(topic !== "All topics" ? [topic] : []),
                ]),
              ]
                .sort()
                .map((name) => (
                  <option key={name}>{name}</option>
                ))}
            </select>
            <select
              aria-label="Sort favorites"
              value={sort}
              onChange={(event) => setFilter("sort", event.target.value)}
              className="rounded-xl border border-border bg-background px-3 py-3 text-xs"
            >
              <option>Recently saved</option>
              <option>A–Z</option>
            </select>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>
              {words.length} of {saved.length} saved words
            </span>
            {(query || topic !== "All topics") && (
              <button
                onClick={() => setParams({})}
                className="rounded-lg font-semibold text-primary"
              >
                Clear filters
              </button>
            )}
          </div>
        </section>
      )}
      {words.length ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {words.map((word) => (
            <div key={word.id}>
              <WordCard word={word} />
              <button
                onClick={() => favorite(word.id)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card py-2 text-xs text-muted-foreground hover:text-primary"
              >
                <Heart size={13} />
                Remove favorite
              </button>
              <Link
                to={`/topics/${encodeURIComponent(word.topic)}?section=practice&word=${word.id}`}
                className={`${secondaryButton} mt-2 w-full`}
              >
                <Play size={13} />
                Practice
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          title={
            saved.length
              ? "No favorites match just yet."
              : "Make room for your favorites."
          }
          description={
            saved.length
              ? "Try another search or clear the topic filter to see your saved collection."
              : "Tap the heart on any vocabulary card to save it here. Your own picture dictionary starts with one word."
          }
          action={
            saved.length ? (
              <button onClick={() => setParams({})} className={primaryButton}>
                Clear filters
              </button>
            ) : (
              <Link to="/dictionary" className={primaryButton}>
                Discover your first favorite
                <ArrowRight size={15} />
              </Link>
            )
          }
        />
      )}
    </>
  )
}

const modes = [
  {
    id: "multiple",
    title: "Multiple Choice",
    description: "Read a meaning. Choose the right word.",
    icon: CircleHelp,
    color: "bg-[#f5ebdf]",
  },
  {
    id: "topic-review",
    title: "Topic Review",
    description: "One topic, several ways to remember it.",
    icon: Target,
    color: "bg-[#e6f1ee]",
  },
  {
    id: "picture",
    title: "Picture → Word",
    description: "See the picture. Find the word.",
    icon: Grid2X2,
    color: "bg-[#edf3e9]",
  },
  {
    id: "word",
    title: "Word → Picture",
    description: "Read a word. Pick its picture.",
    icon: BookOpen,
    color: "bg-[#e9eff7]",
  },
  {
    id: "listening",
    title: "Listening Practice",
    description: "Listen closely. Choose what you hear.",
    icon: Headphones,
    color: "bg-[#f5ebdf]",
  },
  {
    id: "matching",
    title: "Matching",
    description: "Bring pictures and words together.",
    icon: Sparkles,
    color: "bg-[#efebf6]",
  },
  {
    id: "spelling",
    title: "Spelling",
    description: "A picture, a hint, and your keyboard.",
    icon: Bookmark,
    color: "bg-[#f5e9e7]",
  },
  {
    id: "review",
    title: "Quick Review",
    description: "Make familiar words feel effortless.",
    icon: Zap,
    color: "bg-[#e6f1ee]",
  },
]
function shuffled<T>(items: T[]): T[] {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[other]] = [result[other], result[index]]
  }
  return result
}
function PracticePage() {
  const { data, update, speak, audioState } = useApp()
  const [params] = useSearchParams()
  const [mode, setMode] = useState<string | null>(null)
  const [questions, setQuestions] = useState<Word[]>([])
  const [options, setOptions] = useState<Word[]>([])
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [score, setScore] = useState(0)
  const [complete, setComplete] = useState(false)
  const [correctWords, setCorrectWords] = useState<string[]>([])
  const [outcomes, setOutcomes] = useState<ReviewOutcome[]>([])
  const [matchingFailures, setMatchingFailures] = useState<string[]>([])
  const [matchLeft, setMatchLeft] = useState<string | null>(null)
  const [matched, setMatched] = useState<string[]>([])
  const [wrongMatch, setWrongMatch] = useState<string | null>(null)
  const [matchingAttempts, setMatchingAttempts] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [questionCount, setQuestionCount] = useState(5)
  const [selectedTopic, setSelectedTopic] = useState(
    params.get("topic") || "All topics",
  )
  const [selectedGroup, setSelectedGroup] = useState(
    params.get("group") || "All groups",
  )
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | "All levels">(
    resolveCEFRSelection(params.get("level"), data.preferences.cefrLevel),
  )
  const [sessionTopic, setSessionTopic] = useState("")
  const topic = params.get("topic"),
    wordId = params.get("word"),
    favorites = params.get("favorites")
  const practiceScene = scenes.find((scene) => scene.id === params.get("scene"))
  const collection = params.get("collection")
  const [collectionIds] = useState(() =>
    collection === "due"
      ? reviewDue(data).map((word) => word.id)
      : collection === "mistakes"
        ? [...data.mistakes]
        : null,
  )
  let pool = vocabulary.filter(
    (word) =>
      (selectedTopic === "All topics" || word.topic === selectedTopic) &&
      (selectedGroup === "All groups" || word.group === selectedGroup) &&
      (selectedLevel === "All levels" || word.cefr?.level === selectedLevel) &&
      (!wordId || word.id === wordId) &&
      (!practiceScene ||
        practiceScene.objects.some((object) => object.id === word.id)) &&
      (!collectionIds || collectionIds.includes(word.id)) &&
      (!favorites || data.favorites.includes(word.id)),
  )
  if (params.get("q"))
    pool = pool.filter((word) =>
      `${word.word} ${word.topic} ${word.definition}`
        .toLowerCase()
        .includes(params.get("q")!.trim().toLowerCase()),
    )
  const makeOptions = (question: Word) =>
    shuffled([
      question,
      ...shuffled(
        vocabulary.filter(
          (item) =>
            [
              "apple",
              "banana",
              "bread",
              "bicycle",
              "cat",
              "dog",
              "ball",
              "tree",
              "flower",
              "book",
              "laptop",
              "phone",
              "house",
              "chair",
              "sofa",
              "medicine",
              "airplane",
              "shirt",
              "shoe",
              "carrot",
              "refrigerator",
              "clock",
              "table",
              "bed",
              "sun",
              "printer",
              "coffee",
            ].includes(item.id) &&
            item.id !== question.id &&
            !(
              ["reading", "studying", "shelf"].includes(question.id) &&
              item.id === "book"
            ) &&
            getVocabularyPhoto(item).src !== getVocabularyPhoto(question).src &&
            item.topic !== question.topic &&
            !(
              ["house", "school", "library", "market"].includes(question.id) &&
              ["house", "school", "library", "market"].includes(item.id)
            ),
        ),
      ).slice(0, 3),
    ])
  function start(nextMode: string) {
    const reviewIds = [
      ...new Set([
        ...data.learned.slice(-12),
        ...data.reviewed.slice(-12),
        ...data.recent,
      ]),
    ]
    const reviewPool = reviewIds.length
      ? vocabulary.filter((word) => reviewIds.includes(word.id))
      : pool
    const source =
      nextMode === "topic-review"
        ? pool.filter(
            (word) =>
              word.topic ===
              (selectedTopic === "All topics" ? pool[0]?.topic : selectedTopic),
          )
        : nextMode === "review" &&
            selectedTopic === "All topics" &&
            selectedLevel === "All levels" &&
            !wordId &&
            !favorites &&
            !practiceScene &&
            !collection &&
            selectedGroup === "All groups"
          ? reviewPool
          : pool
    if (!source.length) return
    const count =
      nextMode === "matching" ? Math.min(4, source.length) : questionCount
    const sample = shuffled(
      ["picture", "word", "matching", "spelling"].includes(nextMode)
        ? visualVocabulary(source)
        : source,
    )
    const nextQuestions = Array.from(
      { length: count },
      (_, position) => sample[position % sample.length],
    )
    setQuestions(nextQuestions)
    setOptions(
      nextMode === "matching"
        ? shuffled(nextQuestions)
        : makeOptions(nextQuestions[0]),
    )
    setMode(nextMode)
    setIndex(0)
    setAnswer(null)
    setInput("")
    setScore(0)
    setCorrectWords([])
    setOutcomes([])
    setMatchingFailures([])
    setComplete(false)
    setMatched([])
    setMatchLeft(null)
    setWrongMatch(null)
    setMatchingAttempts(0)
    setRevealed(false)
    setSessionTopic(
      practiceScene
        ? practiceScene.title
        : collection === "due"
          ? "Scheduled review"
          : collection === "mistakes"
            ? "Words to revisit"
            : nextMode === "topic-review"
              ? source[0].topic
              : selectedTopic === "All topics"
                ? "Mixed topics"
                : selectedTopic,
    )
  }
  function submit(value: string) {
    if (answer !== null) return
    const correct = value.toLowerCase().trim() === questions[index].word
    setOutcomes((previous) => [
      ...previous,
      { id: questions[index].id, correct, answer: value.trim() },
    ])
    setAnswer(value.toLowerCase().trim())
    if (correct) {
      setScore((previous) => previous + 1)
      setCorrectWords((previous) => [...previous, questions[index].id])
    }
  }
  function finish(
    finalScore = score,
    learned = correctWords,
    total = questions.length,
  ) {
    setScore(finalScore)
    setComplete(true)
    update((previous) => ({
      ...recordReview(
        previous,
        mode === "matching"
          ? questions.map((word) => ({
              id: word.id,
              correct: !matchingFailures.includes(word.id),
            }))
          : outcomes,
      ),
      learned: [...new Set([...previous.learned, ...learned])],
      reviewed: [
        ...new Set([...previous.reviewed, ...questions.map((word) => word.id)]),
      ],
      activity: [
        ...previous.activity,
        ...[...new Set(questions.map((word) => word.id))].map(
          (id): Stored["activity"][number] => ({
            date: new Date().toISOString(),
            type: "reviewed",
            target: id,
          }),
        ),
      ].slice(-100),
      sessions: [
        ...previous.sessions,
        {
          date: new Date().toISOString(),
          score: finalScore,
          total,
          mode: modes.find((activity) => activity.id === mode)?.title,
          topic: sessionTopic,
        },
      ],
    }))
  }
  function next() {
    if (index + 1 === questions.length) {
      finish()
      return
    }
    setIndex(index + 1)
    setAnswer(null)
    setInput("")
    setRevealed(false)
    setOptions(makeOptions(questions[index + 1]))
  }
  function match(id: string) {
    if (!matchLeft || matched.includes(id)) return
    const attempts = matchingAttempts + 1
    setMatchingAttempts(attempts)
    if (matchLeft === id) {
      const nextMatched = [...matched, id]
      setMatched(nextMatched)
      setMatchLeft(null)
      setWrongMatch(null)
      if (nextMatched.length === questions.length)
        finish(
          Math.max(0, questions.length - (attempts - questions.length)),
          nextMatched,
          questions.length,
        )
    } else {
      setWrongMatch(id)
      setMatchingFailures((previous) => [...new Set([...previous, matchLeft])])
    }
  }
  const current = questions[index]
  const requestedQuestionMode =
    mode === "topic-review"
      ? [
          "picture",
          "word",
          data.preferences.audio ? "listening" : "multiple",
          "spelling",
          "multiple",
        ][index % 5]
      : mode
  const questionMode =
    !current?.image && ["picture", "word"].includes(requestedQuestionMode || "")
      ? "multiple"
      : requestedQuestionMode
  const isCorrect = answer === current?.word
  return (
    <>
      {(practiceScene || favorites) && (
        <Link
          to={
            practiceScene
              ? `/topics/${encodeURIComponent(practiceScene.topic)}?scene=${practiceScene.id}`
              : "/favorites"
          }
          className="mb-4 inline-flex items-center gap-1 rounded-lg text-xs text-muted-foreground"
        >
          <ChevronLeft size={14} />
          {practiceScene
            ? "Back to the illustrated scene"
            : "Back to favorites"}
        </Link>
      )}
      <PageHeading
        eyebrow="A little practice goes a long way"
        title="See it. Know it. Make it stick."
        description={
          practiceScene
            ? `Practice all ${practiceScene.objects.length} words from “${practiceScene.title}”.`
            : collection === "due"
              ? "A little review at the right time helps vocabulary stay with you."
              : collection === "mistakes"
                ? "Turn tricky words into familiar ones. Your last mistakes are ready to revisit."
                : topic
                  ? `You're practicing vocabulary from ${topic}.`
                  : wordId
                    ? `Let's get to know “${wordId}”.`
                    : favorites
                      ? "Practice the words you've saved."
                      : "Build your confidence with a few minutes of playful learning."
        }
      />
      {!mode ? (
        <>
          {!collection && !practiceScene && !wordId && !favorites && (
            <ReviewHub compact />
          )}
          <div className="mb-7 flex items-center gap-3 rounded-2xl bg-secondary p-5">
            <Target size={24} className="text-primary" />
            <div>
              <p className="text-sm font-semibold">Find your way to learn.</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Eight activities. One step closer to confident English.
              </p>
            </div>
            <span className="ml-auto hidden rounded-full bg-card px-3 py-1.5 text-[10px] text-primary sm:block">
              No pressure. Just progress.
            </span>
          </div>
          <section className={`${card} mb-6 p-5`}>
            <h2 className="mb-4 text-sm font-semibold">
              Make this practice yours
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <label className="text-xs text-muted-foreground">
                Topic
                <select
                  disabled={Boolean(wordId || practiceScene || collection)}
                  aria-label="Practice topic"
                  value={selectedTopic}
                  onChange={(event) => {
                    setSelectedTopic(event.target.value)
                    setSelectedGroup("All groups")
                  }}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-3 text-xs disabled:opacity-50"
                >
                  <option>All topics</option>
                  {topicNames.map((name) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
              </label>
              <label className="text-xs text-muted-foreground">
                Vocabulary group
                <select
                  aria-label="Practice vocabulary group"
                  disabled={
                    selectedTopic === "All topics" ||
                    Boolean(wordId || practiceScene || collection)
                  }
                  value={selectedGroup}
                  onChange={(event) => setSelectedGroup(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-3 text-xs disabled:opacity-50"
                >
                  <option>All groups</option>
                  {getGroups(selectedTopic).map((name) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
              </label>
              <label className="text-xs text-muted-foreground">
                Level
                <select
                  aria-label="Practice level"
                  value={selectedLevel}
                  disabled={Boolean(wordId || practiceScene || collection)}
                  onChange={(event) =>
                    setSelectedLevel(
                      event.target.value as CEFRLevel | "All levels",
                    )
                  }
                  className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-3 text-xs disabled:opacity-50"
                >
                  <option value="All levels">All CEFR levels</option>
                  {cefrLevels.map((level) => (
                    <option key={level} value={level}>
                      {level} · {cefrLabels[level]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-xs text-muted-foreground">
                Session length
                <select
                  aria-label="Practice session length"
                  value={questionCount}
                  onChange={(event) =>
                    setQuestionCount(Number(event.target.value))
                  }
                  className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-3 text-xs"
                >
                  <option value={5}>5 questions · a quick start</option>
                  <option value={10}>10 questions · a daily habit</option>
                  <option value={15}>15 questions · a little challenge</option>
                </select>
              </label>
            </div>
            <p className="mt-3 text-[10px] text-muted-foreground">
              {pool.length} {pool.length === 1 ? "word" : "words"} in your
              practice collection. Matching uses up to 4 pairs; Topic Review
              mixes question types.
            </p>
          </section>
          {!pool.length ? (
            <EmptyState
              title={
                collection
                  ? "You're all caught up!"
                  : favorites && !data.favorites.length
                    ? "Save a few words first"
                    : "No words in this collection"
              }
              description={
                collection
                  ? "There are no words waiting in this review collection. Explore a topic or start a new activity."
                  : favorites && !data.favorites.length
                    ? "Add words to your favorites before starting this practice."
                    : "Choose a different topic, group, or level to start practicing."
              }
              action={
                <Link to="/dictionary" className={primaryButton}>
                  Open dictionary
                </Link>
              }
            />
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {modes.map(({ id, title, description, icon: Icon, color }) => (
                <button
                  key={id}
                  onClick={() => start(id)}
                  disabled={id === "listening" && !data.preferences.audio}
                  className={`${card} group p-6 text-left hover:-translate-y-1 hover:border-primary/30 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-45`}
                >
                  <span
                    className={`inline-flex rounded-2xl p-4 ${color} text-[#577b6d]`}
                  >
                    <Icon size={27} />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-bold">
                    {title}
                  </h2>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {description}
                  </p>
                  <span className="mt-6 flex items-center justify-between text-xs font-semibold text-primary">
                    Start activity
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </button>
              ))}
            </div>
          )}
        </>
      ) : complete ? (
        <section className={`${card} mx-auto max-w-xl p-9 text-center`}>
          <span className="inline-flex rounded-full bg-[#faf0da] p-6 text-[#bb914c]">
            <Trophy size={50} />
          </span>
          <p className="mb-2 mt-6 text-[10px] font-semibold tracking-widest text-primary">
            PRACTICE COMPLETE
          </p>
          <h2 className="font-display text-3xl font-bold">
            {score === questions.length ||
            (mode === "matching" && matchingAttempts === questions.length)
              ? "Beautifully done!"
              : "Every try is a step forward."}
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {mode === "matching"
              ? `You matched all ${questions.length} pairs in ${matchingAttempts} attempts.`
              : `You got ${score} of ${questions.length} answers right.`}
            <br />
            Your practice and learned words have been saved.
          </p>
          <div className="my-7 flex justify-center gap-10">
            <div>
              <p className="text-3xl font-bold text-primary">
                {mode === "matching"
                  ? Math.max(
                      0,
                      questions.length - (matchingAttempts - questions.length),
                    )
                  : score}
                <span className="text-lg text-muted-foreground">
                  /{questions.length}
                </span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Score</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">
                {mode === "matching"
                  ? matched.length
                  : new Set(questions.map((word) => word.id)).size}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Words practiced
              </p>
            </div>
          </div>
          <div className="mb-6 rounded-xl bg-background p-4 text-left">
            <p className="text-xs font-semibold">Your next learning step</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Correct words return for review after 1, 3, 7, 14, then 30 days.
              Tricky words stay ready to revisit.
            </p>
            {questions.some((word) => data.mistakes.includes(word.id)) && (
              <Link
                to="/practice?collection=mistakes"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-primary"
              >
                Practice words to revisit <ArrowRight size={14} />
              </Link>
            )}
          </div>
          <PracticeAnswerReview
            outcomes={
              mode === "matching"
                ? questions.map((word) => ({
                    id: word.id,
                    correct: !matchingFailures.includes(word.id),
                  }))
                : outcomes
            }
          />
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => start(mode)} className={primaryButton}>
              Try Again
              <ArrowRight size={15} />
            </button>
            <button onClick={() => setMode(null)} className={secondaryButton}>
              More activities
            </button>
            <Link to="/progress" className={secondaryButton}>
              My Progress
            </Link>
          </div>
        </section>
      ) : (
        <section className={`${card} mx-auto max-w-[800px] p-5 md:p-8`}>
          <div className="mb-3 flex items-center justify-between text-xs">
            <button
              onClick={() => setMode(null)}
              className="flex items-center gap-1 text-muted-foreground"
            >
              <ChevronLeft size={14} />
              All activities
            </button>
            <span className="font-semibold text-primary">
              {modes.find((item) => item.id === mode)?.title}
            </span>
            <span className="text-muted-foreground">
              {mode === "matching"
                ? `${matched.length}/${questions.length} matched`
                : `Question ${index + 1} of ${questions.length}`}
            </span>
          </div>
          <ProgressBar
            value={
              ((mode === "matching" ? matched.length : index) /
                questions.length) *
              100
            }
            className="mb-8"
          />
          {mode === "matching" ? (
            <>
              <h2 className="mb-2 text-center font-display text-xl font-bold">
                Which picture belongs to each word?
              </h2>
              <p className="mb-6 text-center text-xs text-muted-foreground">
                Select a word on the left, then its picture on the right.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  {questions.map((word) => (
                    <button
                      disabled={matched.includes(word.id)}
                      key={word.id}
                      onClick={() => {
                        setMatchLeft(word.id)
                        setWrongMatch(null)
                      }}
                      className={`min-h-[100px] rounded-xl border-2 p-4 text-sm font-semibold disabled:opacity-60 ${
                        matched.includes(word.id)
                          ? "border-primary bg-secondary"
                          : matchLeft === word.id
                            ? "border-primary bg-secondary"
                            : "border-border hover:border-primary/40"
                      }`}
                    >
                      {word.word}
                      {matched.includes(word.id) && (
                        <Check className="ml-2 inline" size={15} />
                      )}
                    </button>
                  ))}
                </div>
                <div className="grid gap-3">
                  {options.map((word) => (
                    <button
                      key={word.id}
                      disabled={matched.includes(word.id) || !matchLeft}
                      aria-label={`Match picture of ${word.word}`}
                      onClick={() => match(word.id)}
                      className={`flex min-h-[100px] flex-col items-center justify-center rounded-xl border-2 p-2 disabled:opacity-60 ${
                        matched.includes(word.id)
                          ? "border-primary bg-secondary"
                          : wrongMatch === word.id
                            ? "border-[#d58c79] bg-[#fbede8]"
                            : "border-border hover:border-primary/40"
                      }`}
                    >
                      <Illustration word={word.id} className="h-24 w-28" />
                      <span className="max-w-[210px] text-[10px] leading-4 text-muted-foreground">
                        {word.definition}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              {wrongMatch && (
                <p
                  role="status"
                  className="mt-4 text-center text-sm text-[#a36250]"
                >
                  Not quite — try another picture. You've got this!
                </p>
              )}
            </>
          ) : (
            <>
              <h2 className="text-center font-display text-xl font-bold">
                {questionMode === "word"
                  ? `Which picture shows “${current.word}”?`
                  : questionMode === "listening"
                    ? "What word do you hear?"
                    : questionMode === "spelling"
                      ? "Can you spell what you see?"
                      : questionMode === "review"
                        ? "A familiar picture. Do you remember the word?"
                        : questionMode === "multiple"
                          ? "Which word matches this meaning?"
                          : "What's in the picture?"}
              </h2>
              {questionMode === "multiple" && (
                <div className="my-7 rounded-2xl bg-secondary p-8 text-center">
                  <span className="text-[10px] font-semibold tracking-widest text-primary">
                    FIND THE WORD
                  </span>
                  <p className="mt-4 font-display text-xl font-semibold leading-8">
                    {current.definition}
                  </p>
                  <span className="mt-3 inline-block text-xs text-muted-foreground">
                    {current.topic} / {current.group}
                  </span>
                </div>
              )}
              {questionMode === "listening" ? (
                <div className="my-7 flex flex-col items-center gap-3">
                  <button
                    onClick={() => speak(current.word)}
                    className="rounded-full bg-secondary p-8 text-primary hover:bg-primary hover:text-primary-foreground"
                    aria-label="Play the vocabulary audio"
                  >
                    {audioState?.word === current.word &&
                    audioState.status === "loading" ? (
                      <LoaderCircle size={45} className="animate-spin" />
                    ) : audioState?.word === current.word &&
                      audioState.status === "playing" ? (
                      <AudioLines size={45} className="animate-pulse" />
                    ) : audioState?.word === current.word &&
                      audioState.status === "paused" ? (
                      <Play size={45} />
                    ) : audioState?.word === current.word &&
                      audioState.status === "completed" ? (
                      <Check size={45} />
                    ) : (
                      <Volume2 size={45} />
                    )}
                  </button>
                  <span className="text-xs text-muted-foreground">
                    {audioState?.word === current.word
                      ? audioState.status === "playing"
                        ? "Playing. Tap to pause."
                        : audioState.status === "paused"
                          ? "Paused. Tap to resume."
                          : audioState.status === "completed"
                            ? "Finished. Tap to hear it again."
                            : "Preparing pronunciation…"
                      : "Ready. Tap to listen."}
                  </span>
                </div>
              ) : (
                questionMode !== "word" &&
                questionMode !== "multiple" && (
                  <div className="my-6 flex justify-center rounded-2xl bg-[#f2f5ed]">
                    <Illustration
                      word={current.word}
                      className="h-[210px] w-[245px]"
                    />
                  </div>
                )
              )}
              {questionMode === "review" ? (
                <div className="mt-5 text-center">
                  {!revealed ? (
                    <button
                      onClick={() => setRevealed(true)}
                      className={primaryButton}
                    >
                      Reveal the word
                      <Sparkles size={15} />
                    </button>
                  ) : (
                    <>
                      <div className="mb-4 rounded-xl bg-secondary p-5">
                        <div className="flex items-center justify-center gap-4">
                          <h3 className="font-display text-2xl font-bold">
                            {current.word}
                          </h3>
                          <AudioButton word={current.word} />
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {current.pronunciation}
                        </p>
                        <p className="mt-3 text-sm leading-6">
                          {current.definition}
                        </p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3">
                        <button
                          disabled={answer !== null}
                          onClick={() => submit(current.word)}
                          className={primaryButton}
                        >
                          <Check size={15} />I remembered it
                        </button>
                        <button
                          disabled={answer !== null}
                          onClick={() => submit("__review_again__")}
                          className={secondaryButton}
                        >
                          Review again
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : questionMode === "spelling" ? (
                <form
                  onSubmit={(event) => {
                    event.preventDefault()
                    if (input.trim()) submit(input)
                  }}
                  className="mt-5 flex gap-3"
                >
                  <input
                    value={input}
                    disabled={answer !== null}
                    onChange={(event) => setInput(event.target.value)}
                    aria-label="Spell the word"
                    placeholder="Type the word here…"
                    autoComplete="off"
                    className="min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm"
                  />
                  <button
                    disabled={answer !== null || !input.trim()}
                    className={primaryButton}
                  >
                    Check
                  </button>
                </form>
              ) : (
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {options.map((word) => (
                    <button
                      key={word.id}
                      disabled={answer !== null}
                      onClick={() => submit(word.word)}
                      aria-label={
                        questionMode === "word"
                          ? `Choose picture of ${word.word}`
                          : `Choose ${word.word}`
                      }
                      className={`rounded-xl border-2 p-4 text-sm font-semibold disabled:cursor-default ${
                        answer !== null && word.id === current.id
                          ? "border-primary bg-secondary text-primary"
                          : answer === word.word
                            ? "border-[#d99179] bg-[#fcf0eb] text-[#a36250]"
                            : "border-border hover:border-primary/40 hover:bg-secondary/40"
                      }`}
                    >
                      {questionMode === "word" ? (
                        <Illustration
                          word={word.word}
                          className="mx-auto h-[115px] w-[130px]"
                        />
                      ) : (
                        word.word
                      )}
                      {answer !== null && word.id === current.id && (
                        <Check size={15} className="ml-2 inline" />
                      )}
                    </button>
                  ))}
                </div>
              )}
              {answer !== null && (
                <div
                  role="status"
                  className={`mt-5 flex items-start gap-3 rounded-xl p-4 ${
                    isCorrect
                      ? "bg-secondary text-primary"
                      : "bg-[#faf0e8] text-[#a16e4d]"
                  }`}
                >
                  <span className="mt-0.5">
                    {isCorrect ? (
                      <CheckCircle2 size={19} />
                    ) : (
                      <CircleHelp size={19} />
                    )}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">
                      {isCorrect
                        ? "That's right! Nicely done."
                        : questionMode === "review"
                          ? "No rush. We'll keep this word in your review collection."
                          : `Good try! The word is “${current.word}”.`}
                    </p>
                    <p className="mt-1 text-xs leading-5">{current.example}</p>
                  </div>
                  <AudioButton word={current.word} />
                </div>
              )}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Score:{" "}
                  <span className="font-semibold text-primary">{score}</span>
                </span>
                <button
                  onClick={next}
                  disabled={answer === null}
                  className={primaryButton}
                >
                  {index + 1 === questions.length
                    ? "See my results"
                    : "Next question"}
                  <ArrowRight size={15} />
                </button>
              </div>
            </>
          )}
        </section>
      )}
    </>
  )
}

interface PracticeAnswerReviewProps {
  outcomes: ReviewOutcome[]
}
function PracticeAnswerReview({ outcomes }: PracticeAnswerReviewProps) {
  const { openWord } = useApp()
  return (
    <details className="mb-6 rounded-xl border border-border p-4 text-left">
      <summary className="cursor-pointer rounded-lg text-sm font-semibold text-primary">
        Review your answers{" "}
        <span className="ml-1 text-xs font-normal text-muted-foreground">
          {outcomes.length} questions
        </span>
      </summary>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Revisit a word, listen to its example, and learn from each attempt.
      </p>
      <div className="mt-4 space-y-3">
        {outcomes.map((outcome, index) => {
          const word = wordById.get(outcome.id)!
          return (
            <article
              key={`${outcome.id}-${index}`}
              className="rounded-xl bg-background p-3"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => openWord(word)}
                  aria-label={`Review answer ${index + 1}: ${word.word}`}
                  className="shrink-0 rounded-lg bg-card"
                >
                  <Illustration word={word.id} className="h-14 w-16" />
                </button>
                <div className="min-w-0 flex-1">
                  <button
                    onClick={() => openWord(word)}
                    className="rounded-lg text-sm font-semibold text-primary"
                  >
                    {index + 1}. {word.word}
                  </button>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {word.pronunciation}
                  </p>
                </div>
                <span className="flex shrink-0 items-center gap-1 text-xs text-primary">
                  {outcome.correct ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <Target size={16} />
                  )}
                  <span className="hidden sm:inline">
                    {outcome.correct ? "Correct" : "Revisit"}
                  </span>
                </span>
              </div>
              {!outcome.correct && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {outcome.answer && !outcome.answer.startsWith("__")
                    ? `Your answer: ${outcome.answer}. `
                    : ""}
                  The word to remember is “{word.word}”.
                </p>
              )}
              <div className="mt-3 flex items-center gap-3 border-t border-border pt-3">
                <p className="flex-1 text-xs leading-5 text-muted-foreground">
                  “{word.example}”
                </p>
                <AudioButton word={word.example} />
              </div>
            </article>
          )
        })}
      </div>
    </details>
  )
}
function ProgressPage() {
  const { data, openWord } = useApp()
  const completed = topicNames.filter((topic) =>
    vocabulary
      .filter((word) => word.topic === topic)
      .every((word) => data.learned.includes(word.id)),
  ).length
  const average = data.sessions.length
    ? Math.round(
        (data.sessions.reduce((sum, session) => sum + session.score, 0) /
          data.sessions.reduce((sum, session) => sum + session.total, 0)) *
          100,
      )
    : 0
  const recent = data.learned
    .slice(-5)
    .reverse()
    .map((id) => vocabulary.find((word) => word.id === id))
    .filter((word): word is Word => Boolean(word))
  const days = Array.from({ length: 7 }, (_, index) => {
    const day = new Date()
    day.setDate(day.getDate() - 6 + index)
    const date = localDay(day)
    return {
      label: day.toLocaleDateString("en", { weekday: "short" }),
      value: data.sessions.filter(
        (session) => localDay(new Date(session.date)) === date,
      ).length,
    }
  })
  const max = Math.max(4, ...days.map((day) => day.value))
  return (
    <>
      <PageHeading
        eyebrow="Every word is a little win"
        title="Look how far you're growing."
        description="Your learning story, one picture and one practice at a time."
      />
      <div className="mb-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
        {[
          {
            icon: BookOpen,
            label: "Words learned",
            value: data.learned.length,
            suffix: `of ${vocabulary.length} words`,
          },
          {
            icon: CheckCircle2,
            label: "Topics completed",
            value: completed,
            suffix: `of ${topicNames.length} topics`,
          },
          {
            icon: Target,
            label: "Practice sessions",
            value: data.sessions.length,
            suffix: "little steps forward",
          },
          {
            icon: Award,
            label: "Average practice score",
            value: `${average}%`,
            suffix: "keep building confidence",
          },
          {
            icon: Bookmark,
            label: "Words reviewed",
            value: data.reviewed.length,
            suffix: "returned to and remembered",
          },
          {
            icon: Grid2X2,
            label: "Topics explored",
            value: data.explored.length,
            suffix: `of ${topicNames.length} worlds to discover`,
          },
          {
            icon: Flame,
            label: "Learning streak",
            value: learningStreak([
              ...data.sessions.map((session) => session.date),
              ...data.activity.map((activity) => activity.date),
            ]),
            suffix: "consecutive days of learning",
          },
          {
            icon: Heart,
            label: "Favorite words",
            value: data.favorites.length,
            suffix: "your own little collection",
          },
        ].map(({ icon: Icon, label, value, suffix }) => (
          <div key={label} className={`${card} p-5`}>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{label}</span>
              <Icon size={18} className="text-primary" />
            </div>
            <p className="font-display text-3xl font-bold">{value}</p>
            <p className="mt-2 text-[10px] text-muted-foreground">{suffix}</p>
          </div>
        ))}
      </div>
      <div className="mb-6 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <section className={`${card} p-6`}>
          <SectionTitle title="Your week in little steps" />
          <p className="text-xs text-muted-foreground">
            Practice sessions over the last seven days
          </p>
          <div className="mt-6 grid h-[180px] grid-cols-7 items-end gap-3 border-b border-border pb-0">
            {days.map((day, index) => (
              <div
                key={index}
                className="flex h-full flex-col items-center justify-end gap-2"
              >
                <span className="text-[10px] text-muted-foreground">
                  {day.value}
                </span>
                <div
                  title={`${day.label}: ${day.value} practice sessions`}
                  className={`w-full max-w-[48px] rounded-t-lg ${
                    index === 6 ? "bg-primary" : "bg-[#acd2c2]"
                  }`}
                  style={{
                    height: `${Math.max(3, (day.value / max) * 130)}px`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-7 gap-3 text-center text-[10px] text-muted-foreground">
            {days.map((day, index) => (
              <span key={index}>{day.label}</span>
            ))}
          </div>
        </section>
        <section className={`${card} p-6`}>
          <SectionTitle title="The bigger picture" />
          <div className="my-5 flex items-end gap-2">
            <span className="font-display text-4xl font-bold text-primary">
              {Math.round((data.learned.length / vocabulary.length) * 100)}%
            </span>
            <span className="pb-1 text-xs text-muted-foreground">
              of your dictionary learned
            </span>
          </div>
          <ProgressBar
            value={(data.learned.length / vocabulary.length) * 100}
          />
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            You don't have to learn it all today. Every new word opens a little
            more of the world.
          </p>
          <Link to="/dictionary" className={`${primaryButton} mt-5`}>
            Keep exploring
            <ArrowRight size={15} />
          </Link>
        </section>
      </div>
      <div className="mb-6 grid gap-5 md:grid-cols-2">
        <section className={`${card} p-6`}>
          <SectionTitle title="Your latest discoveries" />
          {recent.length ? (
            recent.map((word) => (
              <button
                key={word.id}
                onClick={() => openWord(word)}
                className="flex w-full items-center gap-3 border-b border-border py-2 text-left last:border-0"
              >
                <Illustration word={word.id} className="h-12 w-14" />
                <div>
                  <p className="text-sm font-semibold">{word.word}</p>
                  <p className="mt-1 text-[10px] text-muted-foreground">
                    {word.topic}
                  </p>
                </div>
                <CheckCircle2 size={16} className="ml-auto text-primary" />
              </button>
            ))
          ) : (
            <p className="py-8 text-sm leading-6 text-muted-foreground">
              Your learned words will appear here. Open a word and mark it as
              learned, or answer correctly in practice.
            </p>
          )}
        </section>
        <section className={`${card} p-6`}>
          <SectionTitle title="A little recognition" />
          {[
            {
              label: "First discovery",
              description: "Learn your first word",
              earned: data.learned.length >= 1,
              icon: Leaf,
            },
            {
              label: "Practice makes progress",
              description: "Complete your first practice",
              earned: data.sessions.length >= 1,
              icon: Target,
            },
            {
              label: "Word collector",
              description: "Learn 10 different words",
              earned: data.learned.length >= 10,
              icon: Award,
            },
            {
              label: "A whole new world",
              description: "Complete 3 topics",
              earned: completed >= 3,
              icon: Trophy,
            },
          ].map(({ label, description, earned, icon: Icon }) => (
            <div
              key={label}
              className={`flex items-center gap-3 py-3 ${
                earned ? "" : "opacity-45"
              }`}
            >
              <span
                className={`rounded-xl p-3 ${
                  earned
                    ? "bg-[#faf0da] text-[#ab813b]"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold">{label}</p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  {description}
                </p>
              </div>
              {earned && <Check size={16} className="ml-auto text-primary" />}
            </div>
          ))}
        </section>
      </div>
      <ProgressDetails />
      <section className={`${card} p-6`}>
        <SectionTitle
          title="Words close to your heart"
          link="All favorites"
          to="/favorites"
        />
        <div className="flex flex-wrap gap-2">
          {data.favorites.length ? (
            data.favorites.map((id) => (
              <button
                key={id}
                className={secondaryButton}
                onClick={() =>
                  openWord(vocabulary.find((word) => word.id === id)!)
                }
              >
                <Heart size={13} className="text-primary" />
                {id}
              </button>
            ))
          ) : (
            <p className="text-xs text-muted-foreground">
              Save your favorites by tapping the heart on a word card.
            </p>
          )}
        </div>
      </section>
    </>
  )
}

interface ReviewHubProps {
  compact?: boolean
}
function ReviewHub({ compact = false }: ReviewHubProps) {
  const { data, openWord } = useApp()
  const due = reviewDue(data)
  const mastered = vocabulary.filter(
    (word) => (data.mastery[word.id]?.streak || 0) >= 3,
  )
  const developing = vocabulary.filter(
    (word) => data.mastery[word.id] && data.mastery[word.id].streak < 3,
  )
  const waiting = vocabulary.filter(
    (word) => data.mastery[word.id] && !due.some((item) => item.id === word.id),
  )
  const next = waiting.sort(
    (first, second) =>
      new Date(data.mastery[first.id].nextReview).getTime() -
      new Date(data.mastery[second.id].nextReview).getTime(),
  )[0]
  return (
    <section className={`${card} mb-6 p-5 md:p-6`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Remember a little longer
          </span>
          <h2 className="mt-2 font-display text-xl font-bold">
            Your personal review desk
          </h2>
          <p className="mt-2 max-w-xl text-xs leading-5 text-muted-foreground">
            A thoughtful rhythm: revisit new words, work on tricky ones, and
            build lasting confidence.
          </p>
        </div>
        <span className="rounded-xl bg-secondary p-3 text-primary">
          <Bookmark size={24} />
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 md:gap-4">
        {[
          { label: "Ready to review", count: due.length, icon: BookOpen },
          {
            label: "Words to revisit",
            count: data.mistakes.length,
            icon: Target,
          },
          { label: "Confident words", count: mastered.length, icon: Award },
        ].map(({ label, count, icon: Icon }) => (
          <div key={label} className="rounded-xl bg-background p-3 md:p-4">
            <Icon size={16} className="mb-2 text-primary" />
            <p className="font-display text-2xl font-bold">{count}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {due.length ? (
          <Link to="/practice?collection=due" className={primaryButton}>
            <Play size={14} />
            Review today's words
          </Link>
        ) : (
          <p className="mr-2 text-xs text-muted-foreground">
            {next
              ? `Next review: ${new Date(data.mastery[next.id].nextReview).toLocaleDateString("en", { month: "short", day: "numeric" })}. You're caught up for now.`
              : "Learn or practice a word to start your review rhythm."}
          </p>
        )}
        {data.mistakes.length > 0 && (
          <Link to="/practice?collection=mistakes" className={secondaryButton}>
            <Target size={14} />
            Revisit tricky words
          </Link>
        )}
        {!due.length && !data.mistakes.length && (
          <Link to="/dictionary" className={secondaryButton}>
            Find new words
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
      {!compact && (
        <>
          <div className="mt-5 border-t border-border pt-5">
            <div className="mb-3 flex flex-wrap justify-between gap-2 text-xs">
              <span className="font-semibold">
                From recognition to confidence
              </span>
              <span className="text-muted-foreground">
                {developing.length} developing · {mastered.length} confident
              </span>
            </div>
            <ProgressBar value={(mastered.length / vocabulary.length) * 100} />
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              A word becomes confident after three successful practice sessions.
              Repeated questions in one session count as one step, not three.
            </p>
          </div>
          {(due.length > 0 || data.mistakes.length > 0) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {[...new Set([...data.mistakes, ...due.map((word) => word.id)])]
                .slice(0, 8)
                .map((id) => (
                  <button
                    key={id}
                    onClick={() => openWord(wordById.get(id)!)}
                    className="rounded-lg border border-border px-3 py-2 text-xs hover:bg-secondary"
                  >
                    {wordById.get(id)!.word}
                    {data.mistakes.includes(id) && (
                      <Target size={12} className="ml-2 inline text-primary" />
                    )}
                  </button>
                ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}
function WordLearningStatus({ word }: WordCardProps) {
  const { data } = useApp()
  const mastery = data.mastery[word.id]
  const needsReview = data.mistakes.includes(word.id)
  return (
    <div className="mt-4 rounded-xl border border-border p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="flex items-center gap-2 text-xs font-semibold">
          <TrendingUp size={15} className="text-primary" />
          Your learning journey
        </p>
        <span className="rounded-lg bg-secondary px-2 py-1 text-xs text-primary">
          {mastery?.streak >= 3
            ? "Confident"
            : needsReview
              ? "Revisit"
              : mastery
                ? "Developing"
                : data.learned.includes(word.id)
                  ? "Recognized"
                  : "New word"}
        </span>
      </div>
      <ProgressBar
        value={(Math.min(3, mastery?.streak || 0) / 3) * 100}
        className="mt-3"
      />
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        {mastery
          ? `${mastery.correct} of ${mastery.attempts} answers correct · ${Math.min(3, mastery.streak)} / 3 successful sessions toward confidence.`
          : "Recognize it, practice it, then return for a quick review."}
      </p>
      {mastery && (
        <p className="mt-2 text-xs text-primary">
          {new Date(mastery.nextReview).getTime() <= Date.now()
            ? "Ready to review now"
            : `Next review: ${new Date(mastery.nextReview).toLocaleDateString("en", { month: "short", day: "numeric" })}`}
        </p>
      )}
    </div>
  )
}
interface TopicLearningPathProps {
  topic: string
  onChoose: (group: string) => void
}
function TopicLearningPath({ topic, onChoose }: TopicLearningPathProps) {
  const { data } = useApp()
  const groups = getGroups(topic)
  const nextGroup = groups.find((group) =>
    vocabulary.some(
      (word) =>
        word.topic === topic &&
        word.group === group &&
        !data.learned.includes(word.id),
    ),
  )
  return (
    <details className={`${card} mb-7 p-5`}>
      <summary className="cursor-pointer rounded-lg text-sm font-semibold text-primary">
        Your lesson pathway
        <span className="ml-2 text-xs font-normal text-muted-foreground">
          {groups.length} bite-sized vocabulary groups
        </span>
      </summary>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        Explore a group, listen to each word, then practice.{" "}
        {nextGroup
          ? `Suggested next stop: ${nextGroup}.`
          : "You've recognized every word in this topic. Keep your confidence growing with review."}
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {groups.map((group, index) => {
          const words = vocabulary.filter(
            (word) => word.topic === topic && word.group === group,
          )
          const learned = words.filter((word) =>
            data.learned.includes(word.id),
          ).length
          const practiced = words.filter((word) => data.mastery[word.id]).length
          return (
            <div
              key={group}
              className={`rounded-xl border p-4 ${
                nextGroup === group
                  ? "border-primary/40 bg-secondary/40"
                  : "border-border bg-background"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs text-primary">
                  {learned === words.length ? <Check size={14} /> : index + 1}
                </span>
                <h3 className="text-sm font-semibold">{group}</h3>
              </div>
              <p className="mb-3 mt-3 text-xs text-muted-foreground">
                {learned}/{words.length} recognized · {practiced} practiced
              </p>
              <ProgressBar value={(learned / words.length) * 100} />
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onChoose(group)}
                  className="rounded-lg text-xs font-semibold text-primary"
                >
                  Explore words
                </button>
                <Link
                  to={`/topics/${encodeURIComponent(topic)}?section=practice&group=${encodeURIComponent(group)}`}
                  className="inline-flex items-center gap-1 rounded-lg text-xs font-semibold text-primary"
                >
                  <Play size={12} />
                  Practice
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </details>
  )
}
function ProgressDetails() {
  const { data, openWord } = useApp()
  const topics = [
    ...new Set([...data.explored.slice(-6).reverse(), ...topicNames]),
  ].slice(0, 6)
  const activity = data.activity.slice(-8).reverse()
  return (
    <div className="mb-6 space-y-5">
      <ReviewHub />
      <div className="grid gap-5 xl:grid-cols-2">
        <section className={`${card} p-6`}>
          <SectionTitle title="Progress through your world" link="All topics" />
          <div className="space-y-5">
            {topics.map((topic) => {
              const words = vocabulary.filter((word) => word.topic === topic)
              const count = words.filter((word) =>
                data.learned.includes(word.id),
              ).length
              return (
                <Link
                  key={topic}
                  to={`/topics/${encodeURIComponent(topic)}?section=progress`}
                  className="block rounded-lg focus-visible:ring-primary"
                >
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="font-semibold">
                      {topic}
                      <span className="ml-2 text-[9px] font-normal text-muted-foreground">
                        {data.explored.includes(topic)
                          ? "Explored"
                          : "Waiting for you"}
                      </span>
                    </span>
                    <span className="text-muted-foreground">
                      {count} / {words.length}
                    </span>
                  </div>
                  <ProgressBar value={(count / words.length) * 100} />
                </Link>
              )
            })}
          </div>
        </section>
        <section className={`${card} p-6`}>
          <SectionTitle title="Your recent learning activity" />
          {activity.length ? (
            <div className="space-y-2">
              {activity.map((item, index) => {
                const word = wordById.get(item.target)
                const text =
                  item.type === "topic"
                    ? `Explored ${item.target}`
                    : `${
                        item.type === "learned" ? "Learned" : "Reviewed"
                      } ${word?.word || item.target}`
                const content = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      {item.type === "topic" ? (
                        <Grid2X2 size={16} />
                      ) : item.type === "learned" ? (
                        <CheckCircle2 size={16} />
                      ) : (
                        <Bookmark size={16} />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold">{text}</p>
                      <p className="mt-1 text-[10px] text-muted-foreground">
                        {new Date(item.date).toLocaleDateString("en", {
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        ·{" "}
                        {new Date(item.date).toLocaleTimeString("en", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <ChevronRight
                      size={13}
                      className="shrink-0 text-muted-foreground"
                    />
                  </>
                )
                return item.type === "topic" ? (
                  <Link
                    key={`${item.date}-${index}`}
                    to={`/topics/${encodeURIComponent(item.target)}`}
                    className="flex items-center gap-3 rounded-xl p-2 hover:bg-muted"
                  >
                    {content}
                  </Link>
                ) : (
                  <button
                    key={`${item.date}-${index}`}
                    onClick={() => {
                      if (word) openWord(word)
                    }}
                    className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-muted"
                  >
                    {content}
                  </button>
                )
              })}
            </div>
          ) : (
            <p className="py-8 text-sm leading-6 text-muted-foreground">
              Every lesson leaves a little trace. Explore a topic, learn a word,
              or finish a practice to start your activity timeline.
            </p>
          )}
        </section>
      </div>
      <section className={`${card} p-6`}>
        <SectionTitle
          title="Practice history"
          link="Practice again"
          to="/practice"
        />
        {data.sessions.length ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-xs">
              <thead className="border-b border-border text-[10px] text-muted-foreground">
                <tr>
                  <th className="pb-3 font-medium">Activity</th>
                  <th className="pb-3 font-medium">Collection</th>
                  <th className="pb-3 font-medium">Score</th>
                  <th className="pb-3 font-medium">Accuracy</th>
                  <th className="pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.sessions
                  .slice(-6)
                  .reverse()
                  .map((session, index) => (
                    <tr
                      key={`${session.date}-${index}`}
                      className="border-b border-border last:border-0"
                    >
                      <td className="py-4 font-semibold">
                        {session.mode || "Vocabulary practice"}
                      </td>
                      <td className="py-4 text-muted-foreground">
                        {session.topic || "Mixed topics"}
                      </td>
                      <td className="py-4 text-primary">
                        {session.score}/{session.total}
                      </td>
                      <td className="py-4">
                        {Math.round((session.score / session.total) * 100)}%
                      </td>
                      <td className="py-4 text-muted-foreground">
                        {new Date(session.date).toLocaleDateString("en", {
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-background p-5">
            <p className="text-xs leading-5 text-muted-foreground">
              No practice sessions yet. Five questions are a great place to
              begin.
            </p>
            <Link to="/practice" className={secondaryButton}>
              <Play size={14} />
              Find your first activity
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: () => void
  label: string
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 ${
        checked ? "bg-primary" : "bg-muted-foreground/30"
      }`}
    >
      <span
        className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )
}
function SettingsPage() {
  const { data, update, notify } = useApp()
  const importInput = useRef<HTMLInputElement>(null)
  const preferences = data.preferences
  const change = <Key extends keyof Preferences,>(
    key: Key,
    value: Preferences[Key],
  ) =>
    update((previous) => ({
      ...previous,
      preferences: { ...previous.preferences, [key]: value },
    }))
  const exportProgress = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `emad-wordlink-backup-${localDay(new Date())}.json`
    link.click()
    URL.revokeObjectURL(url)
    notify("Your learning backup is ready in Downloads.")
  }
  const importProgress = async (file?: File) => {
    if (!file) return
    try {
      const parsed = JSON.parse(await file.text())
      if (
        !parsed ||
        typeof parsed !== "object" ||
        (!Array.isArray(parsed.learned) &&
          !Array.isArray(parsed.sessions) &&
          !parsed.preferences)
      )
        throw new Error("Invalid backup")
      const restored = normalizeStore(parsed)
      update(() => restored)
      notify("Backup restored. Your learning progress is ready.")
    } catch {
      notify("That file is not a valid Emad WordLink backup.")
    } finally {
      if (importInput.current) importInput.current.value = ""
    }
  }
  return (
    <>
      <PageHeading
        eyebrow="Make yourself at home"
        title="Your learning, your way."
        description="A few small preferences for a more personal learning experience."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        <section className={`${card} p-6`}>
          <SectionTitle title="Your profile" />
          <label
            className="mb-2 block text-xs font-medium"
            htmlFor="profile-name"
          >
            What should we call you?
          </label>
          <input
            id="profile-name"
            value={preferences.name}
            onChange={(event) => change("name", event.target.value)}
            placeholder="Your name"
            maxLength={40}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          />
          <p className="mt-2 text-[10px] text-muted-foreground">
            Saved automatically, just on this device.
          </p>
          <label
            className="mb-2 mt-6 block text-xs font-medium"
            htmlFor="learning-language"
          >
            Learning language
          </label>
          <select
            id="learning-language"
            value={preferences.language}
            onChange={(event) => change("language", event.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          >
            <option>English</option>
          </select>
          <p className="mt-2 text-[10px] text-muted-foreground">
            More learning languages are on our wish list.
          </p>
          <label
            className="mb-2 mt-6 block text-xs font-medium"
            htmlFor="cefr-level"
          >
            Preferred CEFR level
          </label>
          <select
            id="cefr-level"
            value={preferences.cefrLevel}
            onChange={(event) =>
              change(
                "cefrLevel",
                event.target.value as Preferences["cefrLevel"],
              )
            }
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          >
            <option value="All levels">All CEFR levels</option>
            {cefrLevels.map((level) => (
              <option key={level} value={level}>
                {level} · {cefrLabels[level]}
              </option>
            ))}
          </select>
          <p className="mt-2 text-[10px] leading-5 text-muted-foreground">
            Used as the default Dictionary and Practice filter. You can change
            it any time without losing progress.
          </p>
          <details className="mt-4 rounded-xl border border-border bg-background p-4">
            <summary className="cursor-pointer text-xs font-semibold text-primary">
              Help me choose a starting level
            </summary>
            <div className="mt-3 grid gap-2 text-xs leading-5 text-muted-foreground sm:grid-cols-2">
              {cefrLevels.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => change("cefrLevel", level)}
                  className="rounded-lg border border-border p-3 text-left hover:bg-secondary"
                >
                  <span className="font-semibold text-foreground">
                    {level} · {cefrLabels[level]}
                  </span>
                  <span className="mt-1 block">
                    {level === "A1"
                      ? "Start with familiar everyday words and short phrases."
                      : level === "A2"
                        ? "Build routine vocabulary for home, school, travel, and work."
                        : level === "B1"
                          ? "Grow independent vocabulary for common situations and ideas."
                          : level === "B2"
                            ? "Explore more precise vocabulary and longer expressions."
                            : level === "C1"
                              ? "Work with advanced, academic, and nuanced language."
                              : "Refine highly precise, flexible, and specialized language."}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-3 text-[10px] leading-5 text-muted-foreground">
              This is a self-selection guide, not a formal language assessment.
            </p>
          </details>
        </section>
        <section className={`${card} p-6`}>
          <SectionTitle title="Listen & learn" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Vocabulary audio</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Hear English pronunciation using your browser.
              </p>
            </div>
            <Toggle
              checked={preferences.audio}
              onChange={() => change("audio", !preferences.audio)}
              label="Vocabulary audio"
            />
          </div>
          <label
            htmlFor="audio-speed"
            className="mb-2 mt-6 block text-xs font-medium"
          >
            Speaking speed
          </label>
          <select
            id="audio-speed"
            value={preferences.speed}
            onChange={(event) => change("speed", event.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          >
            <option>Normal</option>
            <option>Slow</option>
          </select>
          <div className="mt-5 flex items-center gap-3">
            <AudioButton word="Welcome to Emad Picture Dictionary" />
            <span className="text-xs text-muted-foreground">
              Listen to a sample
            </span>
          </div>
        </section>
        <section className={`${card} p-6`}>
          <SectionTitle title="A comfortable routine" />
          <label
            htmlFor="daily-goal"
            className="mb-2 block text-xs font-medium"
          >
            Daily goal
          </label>
          <select
            id="daily-goal"
            value={preferences.goal}
            onChange={(event) => change("goal", Number(event.target.value))}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          >
            <option value={5}>5 correct answers — a gentle start</option>
            <option value={10}>10 correct answers — a daily habit</option>
            <option value={20}>20 correct answers — a little challenge</option>
          </select>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Dark mode</p>
              <p className="mt-1 text-xs text-muted-foreground">
                A softer screen for evening learning.
              </p>
            </div>
            <Toggle
              checked={preferences.dark}
              onChange={() => change("dark", !preferences.dark)}
              label="Dark mode"
            />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Learning reminders</p>
              <p className="mt-1 text-xs text-muted-foreground">
                See a gentle reminder using the bell.
              </p>
            </div>
            <Toggle
              checked={preferences.notifications}
              onChange={() => {
                change("notifications", !preferences.notifications)
                notify(
                  !preferences.notifications
                    ? "In-app learning reminders enabled. Tap the bell for a little motivation."
                    : "Learning reminders turned off.",
                )
              }}
              label="Learning reminders"
            />
          </div>
        </section>
        <section className={`${card} p-6`}>
          <SectionTitle title="Accessibility & comfort" />
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Reduce motion</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Keep interactions still, including scene highlights and audio
                animations.
              </p>
            </div>
            <Toggle
              checked={preferences.reduceMotion}
              onChange={() => change("reduceMotion", !preferences.reduceMotion)}
              label="Reduce motion"
            />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Larger learning text</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Make descriptions, examples, and controls easier to read.
              </p>
            </div>
            <Toggle
              checked={preferences.largeText}
              onChange={() => change("largeText", !preferences.largeText)}
              label="Larger learning text"
            />
          </div>
          <div className="mt-6 rounded-xl bg-background p-4">
            <h3 className="text-xs font-semibold">
              Built for your keyboard, too
            </h3>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              Use Tab to move between controls, Enter or Space to select a scene
              object, and Escape to close word details. Numbered scene words
              remain available below every illustration.
            </p>
          </div>
        </section>
        <section className={`${card} p-6 xl:col-span-2`}>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <SectionTitle title="Backup & portability" />
              <p className="text-sm leading-6 text-muted-foreground">
                Your progress stays on this browser. Download a private backup
                before changing device, clearing browser data, or moving to a
                new website address.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Backup version {data.schemaVersion} · {data.learned.length} words
                learned · {data.sessions.length} practice sessions
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Catalogue check: {vocabularyAudit.totalWords} words ·{" "}
                {vocabularyAudit.totalTopics} topics ·{" "}
                {vocabularyAudit.valid ? "structure passed" : "review required"} ·{" "}
                {vocabularyAudit.issues.length === 0
                  ? "0 issues"
                  : `${vocabularyAudit.issues.length} review notes`}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Expansion progress: {vocabularyAudit.totalWords.toLocaleString()} /{" "}
                8,000 words · {vocabularyBatches.length} controlled batches
              </p>
              <div
                className="mt-3 flex flex-wrap gap-2"
                aria-label="Vocabulary count by CEFR level"
              >
                {cefrLevels.map((level) => (
                  <span
                    key={level}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {level} ·{" "}
                    {
                      vocabulary.filter((word) => word.cefr?.level === level)
                        .length
                    }
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Latest controlled batch: {vocabularyBatches.at(-1)?.addedWords}{" "}
                words · educator review required ·{" "}
                {vocabularyBatches.at(-1)?.audit.errors.length} errors ·{" "}
                {vocabularyBatches.at(-1)?.audit.reviewNotes.length} review
                notes
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={exportProgress} className={primaryButton}>
                <Download size={16} />
                Download backup
              </button>
              <button
                onClick={() => importInput.current?.click()}
                className={secondaryButton}
              >
                <Upload size={16} />
                Restore backup
              </button>
              <input
                ref={importInput}
                type="file"
                accept="application/json,.json"
                className="hidden"
                onChange={(event) => importProgress(event.target.files?.[0])}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageHeading
        eyebrow="The story behind the project"
        title="About Me & the Dictionary"
        description="Meet the creator and learn how Emad Picture Dictionary was designed for everyday English learning."
      />
      <section className={`${card} overflow-hidden`}>
        <div className="grid md:grid-cols-[minmax(240px,320px)_1fr]">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted md:aspect-auto md:min-h-[520px]">
            <img
              src="/images/brand/emad-a-mohammed.jpg"
              alt="Emad A. Mohammed, creator of Emad Picture Dictionary"
              width={896}
              height={993}
              className="absolute inset-0 h-full w-full object-cover object-[center_24%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102f2b]/85 to-transparent px-5 pb-5 pt-16 text-white md:px-6">
              <p className="font-display text-lg font-bold">Emad A. Mohammed</p>
              <p className="mt-1 text-xs text-white/80">
                Creator &amp; Designer
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <SectionTitle title="About & Creator" />
            <div className="mb-4 inline-flex rounded-xl bg-primary p-3 text-primary-foreground">
              <BookOpen size={26} />
            </div>
            <h3 className="font-display text-xl font-bold">
              Emad Picture Dictionary
            </h3>
            <p className="mt-1 text-xs font-medium text-primary">
              Interactive English Vocabulary Learning
            </p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              An independent learning experience built to make English feel
              familiar. Original learning activities, licensed vocabulary and
              environment photography, everyday examples, and a little
              encouragement along the way.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Created and designed by{" "}
              <span className="font-medium text-foreground">
                Emad A. Mohammed
              </span>
              , English Department, Faculty of Arts.
            </p>
            <a
              href="mailto:em20323115@soran.edu.iq"
              className="mt-5 inline-flex max-w-full items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-primary hover:border-primary hover:bg-secondary"
            >
              <Mail size={18} className="shrink-0" />
              <span className="break-all sm:break-normal">
                em20323115@soran.edu.iq
              </span>
            </a>
            <p className="mt-6 border-t border-border pt-5 text-xs">
              Designed &amp; Built by{" "}
              <span className="font-semibold">Emad A. Mohammed</span>
            </p>
            <p className="mt-3 text-[10px] leading-5 text-muted-foreground">
              Version 2.0 • {vocabulary.length} vocabulary entries •{" "}
              {topicNames.length} topics • {scenes.length} interactive scenes •
              11 category practice activities, plus Write, Flashcards, and Games
              <br />
              Not affiliated with Oxford University Press. Progress is saved in
              this browser; no account is required.
            </p>
          </div>
        </div>

        <div className="border-t border-border p-6 md:p-8">
          <details className="rounded-xl border border-border p-4">
            <summary className="cursor-pointer text-xs font-semibold text-primary">
              Category photography & credits
            </summary>
            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              Category photos are sourced from{" "}
              <a
                href="https://unsplash.com/license"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Unsplash under its photo license
              </a>
              . Our learning interface and hotspot activities are original;
              photographic environments are credited to their photographers.
            </p>
            <ul className="mt-4 grid gap-2 text-xs sm:grid-cols-2 lg:grid-cols-3">
              {categoryImages.map((image) => (
                <li key={image.category} className="leading-5">
                  <span className="text-muted-foreground">
                    {image.category} ·{" "}
                  </span>
                  <a
                    href={`https://unsplash.com/@${image.username}?utm_source=emad_picture_dictionary&utm_medium=referral`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    {image.photographer}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          <VocabularyPhotographyCredits />
          <details className="mt-4 rounded-xl border border-border p-4">
            <summary className="cursor-pointer text-xs font-semibold text-primary">
              Photographic environment credits
            </summary>
            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              These real-life environments are used under the Unsplash License.
              Vocabulary hotspots and all learning interactions are designed for
              Emad Picture Dictionary. Photos are resized and scene-object crops
              are used for vocabulary learning.
            </p>
            <ul className="mt-4 grid gap-3 text-xs sm:grid-cols-2 lg:grid-cols-3">
              {scenes.map((scene) => (
                <li key={scene.id} className="leading-5">
                  <span className="text-muted-foreground">
                    {scene.title} ·{" "}
                  </span>
                  <a
                    href={`https://unsplash.com/@${scene.username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    {scene.photographer}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>
    </>
  )
}

function PracticeRoute() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  params.delete("entry")
  const legacyWord = wordById.get(params.get("word") || "")
  const legacyScene = scenes.find((scene) => scene.id === params.get("scene"))
  const category =
    legacyWord?.topic || legacyScene?.topic || params.get("topic")
  if (category && topicNames.includes(category)) {
    params.delete("topic")
    params.set("section", "practice")
    return (
      <Navigate
        to={`/topics/${encodeURIComponent(category)}?${params.toString()}`}
        replace
      />
    )
  }
  if (!params.toString()) return <CategoryLearningHub />
  return <PracticePage key={params.toString()} />
}
function CategoryLearningHub() {
  return (
    <>
      <PageHeading
        eyebrow="A complete mini-course for every topic"
        title="First, choose your category."
        description="Your vocabulary, Practice, Write, Flashcards, Games, and Progress stay together. Choose a category to begin."
      />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-secondary p-5">
        <p className="text-sm font-semibold">
          {topicNames.length} categories · 60+ words in every category
        </p>
        <Link to="/practice?collection=due" className={secondaryButton}>
          <Bookmark size={15} />
          Scheduled review
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {topicNames.map((topic, index) => (
          <section key={topic} className={`${card} overflow-hidden p-5`}>
            <div
              className={`mb-4 h-32 rounded-xl ${topicColors[index % topicColors.length]}`}
            >
              <TopicArt topic={topic} />
            </div>
            <h2 className="font-display text-lg font-bold">{topic}</h2>
            <p className="mb-4 mt-2 text-xs text-muted-foreground">
              {vocabulary.filter((word) => word.topic === topic).length} words ·
              Your own category learning system
            </p>
            <div className="flex flex-wrap gap-2">
              {["practice", "write", "flashcards", "games"].map((section) => (
                <Link
                  key={section}
                  to={`/topics/${encodeURIComponent(topic)}?section=${section}`}
                  className="rounded-lg bg-secondary px-3 py-2 text-xs font-semibold capitalize text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {section}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

function RouteErrorPage() {
  const error = useRouteError()
  useEffect(() => {
    console.error("Emad WordLink route error", error)
  }, [error])
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-12 text-foreground">
      <section className={`${card} w-full max-w-xl p-7 text-center md:p-10`}>
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
          <BookOpen size={27} />
        </span>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[.16em] text-primary">
          A small pause
        </p>
        <h1 className="mt-3 font-display text-2xl font-bold md:text-3xl">
          This activity could not open.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
          Your saved learning progress is safe. Return home or refresh the page
          and try the activity again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/" className={primaryButton}>
            Back home
          </Link>
          <button onClick={() => window.location.reload()} className={secondaryButton}>
            Refresh page
          </button>
        </div>
      </section>
    </main>
  )
}

const router = createBrowserRouter([
  {
    Component: Layout,
    ErrorBoundary: RouteErrorPage,
    children: [
      { index: true, Component: HomePage },
      { path: "dictionary", Component: DictionaryPage },
      { path: "topics", Component: TopicsPage },
      { path: "topics/:topic", Component: TopicDetail },
      { path: "practice", Component: PracticeRoute },
      { path: "progress", Component: ProgressPage },
      { path: "favorites", Component: FavoritesPage },
      { path: "feedback", Component: FeedbackPage },
      { path: "about", Component: AboutPage },
      { path: "settings", Component: SettingsPage },
      { path: "review-submissions", Component: SubmissionReviewPage },
      {
        path: "*",
        Component: () => (
          <EmptyState
            title="Let's find your way back."
            description="This page doesn't exist, but a world of words is waiting for you."
            action={
              <Link to="/" className={primaryButton}>
                Back home
              </Link>
            }
          />
        ),
      },
    ],
  },
])
export default function App() {
  return <RouterProvider router={router} />
}
