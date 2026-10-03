import type { ComponentType, ReactNode } from "react"
import {
  Apple,
  Baby,
  Bath,
  BedDouble,
  Bird,
  BookOpen,
  BriefcaseBusiness,
  Brush,
  Building2,
  CalendarDays,
  Calculator,
  Camera,
  CarFront,
  Carrot,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Cloud,
  CloudRain,
  Coffee,
  CookingPot,
  DoorOpen,
  Dumbbell,
  Drumstick,
  Ear,
  Egg,
  Eye,
  Fish,
  Flower2,
  Footprints,
  GraduationCap,
  Globe,
  Headphones,
  Grape,
  Hand,
  HandHeart,
  Heart,
  HeartPulse,
  Hospital,
  Hotel,
  Keyboard,
  Lamp,
  Landmark,
  Leaf,
  LockKeyhole,
  Mail,
  Map,
  MessageCircle,
  Microwave,
  Microscope,
  Monitor,
  Moon,
  Mountain,
  NotebookPen,
  Paintbrush,
  Pill,
  Presentation,
  Printer,
  Rabbit,
  Recycle,
  Refrigerator,
  Ruler,
  Salad,
  Sandwich,
  School,
  Shirt,
  ShoppingBasket,
  ShowerHead,
  Smile,
  Snowflake,
  Sprout,
  Stethoscope,
  Store,
  Sun,
  Thermometer,
  Tablet,
  Ticket,
  TrafficCone,
  TrainFront,
  Truck,
  Trophy,
  UsersRound,
  Utensils,
  Video,
  Volleyball,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react"
const icons: Record<string, ComponentType<Parameters<LucideIcon>[0]>> = {
  globe: Globe,
  headphones: Headphones,
  lock: LockKeyhole,
  trophy: Trophy,
  team: UsersRound,
  moon: Moon,
  grapes: Grape,
  strawberry: Apple,
  carrot: Carrot,
  chicken: Drumstick,
  fish: Fish,
  egg: Egg,
  coffee: Coffee,
  tea: Coffee,
  juice: Coffee,
  soup: CookingPot,
  sandwich: Sandwich,
  breakfast: Utensils,
  bed: BedDouble,
  bath: Bath,
  kitchen: CookingPot,
  table: Presentation,
  lamp: Lamp,
  shelf: BookOpen,
  fridge: Refrigerator,
  oven: Microwave,
  kettle: Coffee,
  plate: Utensils,
  cup: Coffee,
  fork: Utensils,
  spoon: Utensils,
  mirror: Eye,
  towel: ShowerHead,
  soap: Bath,
  door: DoorOpen,
  window: Building2,
  clock: Clock3,
  broom: Brush,
  hammer: Wrench,
  baby: Baby,
  family: UsersRound,
  friendly: HandHeart,
  patient: Clock3,
  happy: Smile,
  tired: Moon,
  desk: Presentation,
  board: Presentation,
  notebook: NotebookPen,
  ruler: Ruler,
  backpack: BriefcaseBusiness,
  calculator: Calculator,
  microscope: Microscope,
  history: Landmark,
  university: GraduationCap,
  exam: ClipboardList,
  jacket: Shirt,
  hat: GraduationCap,
  scarf: Shirt,
  boots: Footprints,
  head: Smile,
  hand: Hand,
  eye: Eye,
  ear: Ear,
  calendar: CalendarDays,
  thermometer: Thermometer,
  cough: HeartPulse,
  bandage: Pill,
  exercise: Dumbbell,
  dentist: Stethoscope,
  engineer: Wrench,
  farmer: Sprout,
  office: Building2,
  meeting: UsersRound,
  report: ClipboardList,
  car: CarFront,
  taxi: CarFront,
  truck: Truck,
  train: TrainFront,
  station: School,
  traffic: TrafficCone,
  hospital: Hospital,
  store: Store,
  restaurant: Utensils,
  bank: Landmark,
  museum: Landmark,
  cinema: Video,
  sun: Sun,
  rain: CloudRain,
  snow: Snowflake,
  cloud: Cloud,
  mountain: Mountain,
  river: Waves,
  leaf: Leaf,
  recycling: Recycle,
  bird: Bird,
  rabbit: Rabbit,
  butterfly: Flower2,
  bee: Flower2,
  football: Volleyball,
  basketball: Volleyball,
  swimming: Waves,
  running: Footprints,
  racket: Volleyball,
  helmet: BikeHelmet,
  computer: Monitor,
  tablet: Tablet,
  keyboard: Keyboard,
  mouse: MouseArt,
  printer: Printer,
  camera: Camera,
  password: LockKeyhole,
  email: Mail,
  conversation: MessageCircle,
  question: MessageCircle,
  answer: CheckCircle2,
  video: Video,
  invitation: Mail,
  airport: Building2,
  passport: BookOpen,
  ticket: Ticket,
  map: Map,
  hotel: Hotel,
  reception: BriefcaseBusiness,
  volunteer: HandHeart,
  community: Building2,
  postoffice: Mail,
  garden: Sprout,
  festival: Sun,
  donation: Heart,
  walking: Footprints,
  shopping: ShoppingBasket,
  cleaning: Brush,
  sleeping: BedDouble,
  brushing: Brush,
  studying: BookOpen,
  drawing: Paintbrush,
}
function BikeHelmet(props: Parameters<LucideIcon>[0]) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3 14C2 2 21 1 21 13l-6 2H3Zm2 0 4 6h8l3-7M10 4v6m5-6v5" />
    </svg>
  )
}
function MouseArt(props: Parameters<LucideIcon>[0]) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="6" y="2" width="12" height="20" rx="6" />
      <path d="M6 9h12M12 3v6" />
    </svg>
  )
}
export default function VocabularyArt({
  art,
  label,
  className = "",
}: {
  art: string
  label: string
  className?: string
}) {
  let drawing: ReactNode
  if (
    ["person", "man", "woman", "elder", "nurse", "tall", "short"].includes(art)
  ) {
    const shirt =
      art === "nurse" ? "#dbe6df" : art === "woman" ? "#c9a58f" : "#93b7a3"
    drawing = (
      <>
        <path d="M53 160v-34c0-25 20-42 47-42s47 17 47 42v34" fill={shirt} />
        <path d="M88 87v18c7 9 19 9 25 0V87" fill="#d6aa86" />
        <circle cx="100" cy="65" r="31" fill="#e3b895" />
        <path
          d="M70 61c-5-39 65-43 61-7-20-2-25-14-32-22-7 12-17 21-29 29"
          fill={art === "elder" ? "#b5b6a5" : "#6e6051"}
        />
        <circle cx="90" cy="65" r="2.5" fill="#456358" />
        <circle cx="110" cy="65" r="2.5" fill="#456358" />
        <path
          d="M92 78q9 9 17 0"
          stroke="#b5806c"
          strokeWidth="2"
          fill="none"
        />
        {art === "nurse" && (
          <path d="M122 124v20m-10-10h20" stroke="#c48170" strokeWidth="7" />
        )}
        {art === "elder" && (
          <path
            d="M78 63h18v12H78Zm26 0h18v12h-18Zm-8 4h8"
            stroke="#7b8474"
            fill="none"
            strokeWidth="2"
          />
        )}
        {["tall", "short"].includes(art) && (
          <path
            d="M163 34v124m-6-118 6-6 6 6m-12 112 6 6 6-6"
            stroke="#779888"
            strokeWidth="3"
            fill="none"
          />
        )}
      </>
    )
  } else if (["orange", "tomato", "potato", "onion"].includes(art)) {
    const color = {
      orange: "#e3ad61",
      tomato: "#de8d77",
      potato: "#c2a47e",
      onion: "#d1b997",
    }[art]
    drawing = (
      <>
        <ellipse
          cx="101"
          cy="103"
          rx={art === "potato" ? 60 : 49}
          ry="49"
          fill={color}
        />
        <path
          d="M74 74c-15 9-18 21-15 34"
          stroke="#fff2d8"
          opacity=".45"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {art === "potato" ? (
          <path
            d="m113 81 3 3m-29 38 3 3m30-11 3 3"
            stroke="#9b815f"
            strokeWidth="3"
          />
        ) : (
          <path d="M100 54c0-15 18-24 28-18-3 14-14 18-28 18Z" fill="#81a17a" />
        )}
      </>
    )
  } else if (art === "milk")
    drawing = (
      <>
        <path
          d="M69 48h61l14 24v84H58V72Z"
          fill="#e6eadc"
          stroke="#8aaa9a"
          strokeWidth="3"
        />
        <path d="M69 48 81 28h39l10 20" fill="#7d9d8e" />
        <path
          d="M81 29v20l-22 23h85"
          fill="none"
          stroke="#b7ccbb"
          strokeWidth="3"
        />
        <rect x="72" y="89" width="58" height="45" rx="5" fill="#a9c6b4" />
        <path
          d="M88 101h27m-27 10h27m-27 10h17"
          stroke="#f5f7ed"
          strokeWidth="3"
        />
      </>
    )
  else if (art === "cheese")
    drawing = (
      <>
        <path d="m38 91 113-43 16 82-121 18Z" fill="#e6c176" />
        <path d="m38 91 9 57 120-18-6-51Z" fill="#efce88" />
        <circle cx="73" cy="115" r="10" fill="#d5b16b" />
        <circle cx="123" cy="102" r="8" fill="#d5b16b" />
        <circle cx="129" cy="126" r="5" fill="#d5b16b" />
      </>
    )
  else if (art === "water")
    drawing = (
      <>
        <path
          d="m65 48 12 108h48l12-108Z"
          fill="#e4f0e8"
          stroke="#87aea6"
          strokeWidth="3"
        />
        <path d="m71 92 7 62h46l7-62c-15-8-30 8-60 0" fill="#a9cdd0" />
        <path
          d="M86 58v23"
          stroke="#fffef1"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "rice")
    drawing = (
      <>
        <ellipse cx="100" cy="93" rx="60" ry="22" fill="#fff9e7" />
        <path d="M41 92c7 70 110 70 119 0" fill="#8aaea1" />
        <path
          d="m61 77 7 4m13-12 8 3m18-2 8 5m11 4 8-4m-40 6 6 3"
          stroke="#e1d7b7"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "crosswalk")
    drawing = (
      <>
        <path d="M23 46h154v110H23Z" fill="#9aa8a0" />
        <path
          d="m45 64-7 72m31-72-5 72m31-72-3 72m29-72 3 72m24-72 7 72"
          stroke="#fcf6e5"
          strokeWidth="14"
        />
      </>
    )
  else if (["horse", "cow", "sheep"].includes(art))
    drawing = (
      <>
        <ellipse
          cx="96"
          cy="100"
          rx="48"
          ry="28"
          fill={art === "sheep" ? "#e8e1ce" : "#c2a083"}
        />
        <path
          d="M60 117v40m61-40v40"
          stroke="#a38a6f"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path d="m129 96 12-39 29 9-13 43" fill="#c6a889" />
        <path d="m147 55 0-14 9 20" fill="#998268" />
        <circle cx="158" cy="77" r="3" fill="#496155" />
        {art === "cow" && (
          <>
            <ellipse cx="80" cy="94" rx="18" ry="14" fill="#6b7566" />
            <path
              d="m147 55-8-11m24 16 10-6"
              stroke="#e1d7bb"
              strokeWidth="6"
            />
          </>
        )}
        {art === "sheep" && (
          <>
            <circle cx="61" cy="85" r="17" fill="#eee9d9" />
            <circle cx="81" cy="76" r="18" fill="#eee9d9" />
            <circle cx="106" cy="77" r="18" fill="#eee9d9" />
          </>
        )}
      </>
    )
  else if (art === "trousers")
    drawing = (
      <path
        d="M66 35h70l10 124h-36l-10-80-11 80H53Z"
        fill="#8eaaa8"
        stroke="#6c8c89"
        strokeWidth="3"
      />
    )
  else if (art === "dress")
    drawing = (
      <path
        d="m79 36-17 22 15 30-32 72h110l-32-72 15-30-18-22c-10 17-32 17-41 0"
        fill="#a1b99a"
        stroke="#7f9c7b"
        strokeWidth="3"
      />
    )
  else if (art === "socks")
    drawing = (
      <>
        <path d="M50 33h35v83l-35 25c-26 9-35-18-17-31l17-9Z" fill="#dfb493" />
        <path d="M114 33h35v83l-35 25c-26 9-35-18-17-31l17-9Z" fill="#a0bbad" />
        <path d="M50 46h35m29 0h35" stroke="#fcf0d9" strokeWidth="7" />
      </>
    )
  else if (art === "eraser")
    drawing = (
      <>
        <path d="m35 116 55-71 74 40-54 68Z" fill="#e0a395" />
        <path d="m35 116 24-30 76 39-25 28Z" fill="#ede6cf" />
        <path d="m111 150 52-65" stroke="#b5ada0" strokeWidth="3" />
      </>
    )
  else if (["table", "desk", "reception"].includes(art))
    drawing = (
      <>
        <path d="M30 86h142v20H30Z" fill="#c9a078" />
        <path
          d="m43 106-8 51m126-51 8 51"
          stroke="#a78160"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {art !== "table" && (
          <>
            <path d="M102 105h57v35h-57Z" fill="#d9bb90" />
            <path
              d="M116 122h28"
              stroke="#a78160"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        )}
        <path d="M35 86h131" stroke="#e7c7a0" strokeWidth="3" />
      </>
    )
  else if (art === "window")
    drawing = (
      <>
        <rect x="43" y="27" width="116" height="126" rx="6" fill="#87aba0" />
        <rect x="51" y="35" width="100" height="110" rx="2" fill="#dbe9df" />
        <path d="m53 141 35-35 24 13 35-51v77H53Z" fill="#b7cca6" />
        <path d="M101 35v110M51 89h100" stroke="#87aba0" strokeWidth="5" />
        <path
          d="M35 153h131"
          stroke="#b8c5ae"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "shelf")
    drawing = (
      <>
        <path d="M41 25h117v133H41Z" fill="#bf9e78" />
        <path
          d="M49 33h101v42H49Zm0 50h101v33H49Zm0 41h101v25H49Z"
          fill="#e9dcc0"
        />
        <path
          d="M62 38v33m13-33v33m14-33v33m12-33 9 33"
          stroke="#94ae96"
          strokeWidth="9"
        />
        <path
          d="M67 88v22m14-22v22m13-22v22"
          stroke="#d7a584"
          strokeWidth="9"
        />
        <path d="M125 92h14v22h-14Z" fill="#a1b59e" />
      </>
    )
  else if (art === "mirror")
    drawing = (
      <>
        <ellipse cx="101" cy="84" rx="43" ry="59" fill="#c6a67e" />
        <ellipse cx="101" cy="84" rx="35" ry="50" fill="#b8d6d1" />
        <path
          d="m91 44-10 28m28-29-19 54"
          stroke="#e4eedf"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M101 140v13m-33 6h66"
          stroke="#a58b68"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "towel")
    drawing = (
      <>
        <path d="M43 41h109v104H43Z" fill="#e0c39a" />
        <path d="M43 52h111v16H43Zm0 57h111v16H43Z" fill="#f9edd2" />
        <path
          d="M57 145v8m13-8v8m13-8v8m13-8v8m13-8v8m13-8v8m13-8v8"
          stroke="#c5a879"
          strokeWidth="3"
        />
      </>
    )
  else if (art === "soap")
    drawing = (
      <>
        <rect x="43" y="76" width="113" height="61" rx="24" fill="#d4bda6" />
        <ellipse cx="100" cy="91" rx="39" ry="12" fill="#ebd9bf" />
        <circle
          cx="65"
          cy="56"
          r="12"
          fill="#f6f5df"
          stroke="#c3d1b8"
          strokeWidth="2"
        />
        <circle
          cx="103"
          cy="40"
          r="17"
          fill="#f6f5df"
          stroke="#c3d1b8"
          strokeWidth="2"
        />
        <circle
          cx="139"
          cy="61"
          r="9"
          fill="#f6f5df"
          stroke="#c3d1b8"
          strokeWidth="2"
        />
      </>
    )
  else if (art === "scarf")
    drawing = (
      <>
        <path d="M61 34h53v20H82v96H55V58Z" fill="#d7a585" />
        <path d="M102 54h36v105h-27V74h-9Z" fill="#bd8f74" />
        <path d="M55 127h27m29 14h27" stroke="#f3dbb6" strokeWidth="7" />
        <path
          d="M57 150v10m8-10v10m8-10v10m8-10v10m32-1v10m8-10v10m8-10v10m8-10v10"
          stroke="#b38b6a"
          strokeWidth="3"
        />
      </>
    )
  else if (art === "hat")
    drawing = (
      <>
        <ellipse cx="100" cy="121" rx="73" ry="23" fill="#dfbc80" />
        <path d="M61 116V76c0-55 78-55 78 0v40" fill="#ebcb91" />
        <path d="M62 95h76v14H62Z" fill="#a7b396" />
      </>
    )
  else if (art === "boots")
    drawing = (
      <>
        <path
          d="M73 30h57v74l27 22c21 17 5 31-7 31H51c-1-21 7-25 22-27Z"
          fill="#b69573"
        />
        <path d="M51 151h112v11H51Z" fill="#6f8777" />
        <path d="M76 39h48m-44 76h41" stroke="#d1b38c" strokeWidth="5" />
      </>
    )
  else if (art === "strawberry")
    drawing = (
      <>
        <path
          d="M47 76c-9 30 31 78 54 83 24-5 64-52 54-84-13-39-94-38-108 1Z"
          fill="#d98b78"
        />
        <path
          d="m69 52 12-23 18 21 13-23 11 26 24-1-27 19-20-8-22 9-26-18Z"
          fill="#86a175"
        />
        <path
          d="m73 87 3 7m24-11 2 7m25-3 2 7m-38 20 2 7m25-7 2 7m-15 13 2 7"
          stroke="#f8d799"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "brushing")
    drawing = (
      <>
        <g transform="rotate(20 100 90)">
          <path d="M88 59v96c0 11 17 11 17 0V59Z" fill="#8ba99b" />
          <path d="M88 65V27h29v32" fill="#a6c2ae" />
          <path
            d="M106 30h21m-21 8h21m-21 8h21m-21 8h21"
            stroke="#f6f2de"
            strokeWidth="5"
          />
        </g>
      </>
    )
  else if (art === "door")
    drawing = (
      <>
        <path d="M53 20h94v141H53Z" fill="#ad9878" />
        <path d="M60 26h76v129H60Z" fill="#dab68a" />
        <path
          d="M72 37h53v47H72Zm0 58h53v45H72Z"
          fill="#e6c9a0"
          stroke="#c8a577"
          strokeWidth="2"
        />
        <circle cx="126" cy="91" r="4" fill="#708878" />
        <path
          d="M43 160h114"
          stroke="#a7b99f"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "clock")
    drawing = (
      <>
        <circle cx="100" cy="92" r="61" fill="#83a798" />
        <circle cx="100" cy="92" r="53" fill="#fff9e8" />
        <path
          d="M100 45v9m0 77v9m-47-48h9m76 0h9"
          stroke="#b6bf9c"
          strokeWidth="4"
        />
        <path
          d="M100 62v31l24 15"
          stroke="#628677"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="100" cy="93" r="4" fill="#628677" />
      </>
    )
  else if (art === "lamp")
    drawing = (
      <>
        <path d="M100 80v67" stroke="#a18c6f" strokeWidth="8" />
        <path d="M77 39h46l28 55H49Z" fill="#e2bd80" />
        <path d="M51 94h98" stroke="#bc9b62" strokeWidth="4" />
        <ellipse cx="100" cy="149" rx="34" ry="8" fill="#9ba78e" />
        <path d="M115 95v23" stroke="#bda277" strokeWidth="2" />
        <circle cx="115" cy="120" r="3" fill="#c8a86d" />
      </>
    )
  else if (art === "fridge")
    drawing = (
      <>
        <rect x="57" y="15" width="86" height="145" rx="10" fill="#b6ccbb" />
        <path d="M57 66h86" stroke="#7f9e8c" strokeWidth="4" />
        <path
          d="M72 35v18m0 28v32"
          stroke="#f9f5df"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <rect x="93" y="29" width="28" height="20" rx="3" fill="#edd6a5" />
        <path d="M69 160v6m62-6v6" stroke="#789281" strokeWidth="5" />
      </>
    )
  else if (art === "oven")
    drawing = (
      <>
        <rect x="42" y="44" width="116" height="114" rx="8" fill="#bac9b6" />
        <path d="M44 67h112" stroke="#7c9685" strokeWidth="3" />
        <circle cx="64" cy="55" r="5" fill="#708d7c" />
        <circle cx="84" cy="55" r="5" fill="#708d7c" />
        <circle cx="116" cy="55" r="5" fill="#708d7c" />
        <circle cx="136" cy="55" r="5" fill="#708d7c" />
        <rect x="56" y="82" width="88" height="59" rx="5" fill="#647f75" />
        <rect x="64" y="93" width="72" height="37" rx="4" fill="#8ea99a" />
        <path
          d="M70 75h61"
          stroke="#fcf5df"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M69 37h22m26 0h22"
          stroke="#758e7e"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "kettle")
    drawing = (
      <>
        <path
          d="M126 66c44-13 44 58 5 52"
          stroke="#809b87"
          strokeWidth="9"
          fill="none"
        />
        <path d="M58 71 34 51l7 39 17 20" fill="#a6bfaa" />
        <path d="M66 53h57l21 73c-4 34-90 34-94 0Z" fill="#9cbaa6" />
        <path
          d="M65 53h60"
          stroke="#728f7c"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path d="M91 44v-7h16v7" stroke="#728f7c" strokeWidth="5" fill="none" />
        <path
          d="M72 72v34"
          stroke="#dce5cf"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </>
    )
  else if (["cup", "coffee", "tea"].includes(art))
    drawing = (
      <>
        <ellipse cx="96" cy="145" rx="60" ry="10" fill="#d0d7b8" />
        <path
          d="M130 79c42-16 42 46 1 40"
          stroke="#7f9b8c"
          strokeWidth="8"
          fill="none"
        />
        <path d="M48 75h84v48c-4 27-78 27-84 0Z" fill="#a6bfb0" />
        <ellipse
          cx="90"
          cy="75"
          rx="42"
          ry="8"
          fill={art === "cup" ? "#dde6d3" : "#947a59"}
        />
        {art !== "cup" && (
          <path
            d="M77 56c-10-13 10-18 0-31m27 31c-10-13 10-18 0-31"
            stroke="#bdc8ac"
            strokeWidth="3"
            fill="none"
          />
        )}
      </>
    )
  else if (art === "plate")
    drawing = (
      <>
        <ellipse
          cx="100"
          cy="105"
          rx="74"
          ry="42"
          fill="#faf4de"
          stroke="#a3b9a7"
          strokeWidth="4"
        />
        <ellipse
          cx="100"
          cy="105"
          rx="52"
          ry="29"
          fill="#e6edda"
          stroke="#c5d2b6"
          strokeWidth="3"
        />
      </>
    )
  else if (art === "fork")
    drawing = (
      <>
        <path
          d="M85 27v35m15-35v35m15-35v35M85 58c0 33 30 33 30 0m-15 26v74"
          stroke="#90aca1"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M100 105v51"
          stroke="#b9cbbd"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "spoon")
    drawing = (
      <>
        <ellipse cx="100" cy="57" rx="24" ry="33" fill="#9bb9ad" />
        <ellipse cx="99" cy="53" rx="15" ry="24" fill="#bed1c1" />
        <path
          d="M100 84v73"
          stroke="#92b1a5"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </>
    )
  else if (["bed", "sleeping"].includes(art))
    drawing = (
      <>
        <path
          d="M33 66v86m135-36v36"
          stroke="#aa8664"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path d="M35 82h115c20 0 21 27 21 39H35Z" fill="#c2d0b3" />
        <path d="M35 112h135v23H35Z" fill="#7f9f87" />
        <rect x="43" y="72" width="46" height="28" rx="9" fill="#faf4df" />
        <path d="M97 82h53c21 1 22 24 22 32H97Z" fill="#9ab39c" />
      </>
    )
  else if (art === "board")
    drawing = (
      <>
        <rect x="24" y="39" width="150" height="100" rx="7" fill="#97ab95" />
        <rect x="32" y="47" width="134" height="84" rx="3" fill="#fcf8e6" />
        <path
          d="M48 65h74m-74 18h102m-102 18h55"
          stroke="#7e9d8c"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M25 139h149" stroke="#b58f6b" strokeWidth="6" />
        <path d="M115 135h21" stroke="#d3947a" strokeWidth="4" />
      </>
    )
  else if (art === "backpack")
    drawing = (
      <>
        <path d="M84 37v-9h32v9" stroke="#7f9280" strokeWidth="7" fill="none" />
        <rect x="53" y="35" width="94" height="119" rx="26" fill="#cea37c" />
        <path
          d="M53 64H43v63h10m94-63h10v63h-10"
          fill="none"
          stroke="#ac8564"
          strokeWidth="8"
        />
        <rect x="64" y="98" width="73" height="46" rx="12" fill="#e4be91" />
        <path d="M64 110h73" stroke="#ad8965" strokeWidth="3" />
        <path
          d="M77 58h46"
          stroke="#eed4ad"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "broom" || art === "cleaning")
    drawing = (
      <>
        <path
          d="m108 26-16 97"
          stroke="#aa8561"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path d="m72 107 44 7 9 43H53Z" fill="#d5b175" />
        <path
          d="m70 112-9 40m26-37-3 39m18-36 5 37"
          stroke="#b48b56"
          strokeWidth="3"
        />
      </>
    )
  else if (art === "hammer")
    drawing = (
      <>
        <g transform="rotate(25 100 90)">
          <rect x="91" y="61" width="19" height="99" rx="6" fill="#c09b6d" />
          <path d="M56 30h79v33h-24v18H86V63H56Z" fill="#95aaa0" />
          <path d="M136 31q25 11 25 31h-26" fill="#95aaa0" />
        </g>
      </>
    )
  else if (art === "thermometer")
    drawing = (
      <>
        <rect
          x="87"
          y="25"
          width="26"
          height="108"
          rx="13"
          fill="#f9f0dc"
          stroke="#97b1a1"
          strokeWidth="3"
        />
        <circle
          cx="100"
          cy="136"
          r="24"
          fill="#f9f0dc"
          stroke="#97b1a1"
          strokeWidth="3"
        />
        <path
          d="M100 55v84"
          stroke="#db9a82"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="100" cy="136" r="15" fill="#db9a82" />
        <path
          d="M112 52h8m-8 18h8m-8 18h8m-8 18h8"
          stroke="#8aa595"
          strokeWidth="2"
        />
      </>
    )
  else if (art === "bandage")
    drawing = (
      <>
        <g transform="rotate(-30 100 90)">
          <rect x="23" y="62" width="155" height="61" rx="25" fill="#d7b68d" />
          <rect x="75" y="66" width="50" height="53" rx="7" fill="#ecd3af" />
          <path
            d="M40 80h3m10 0h3m-16 20h3m10 0h3m91-20h3m10 0h3m-16 20h3m10 0h3"
            stroke="#ba9a70"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </>
    )
  else if (art === "passport")
    drawing = (
      <>
        <rect x="55" y="23" width="92" height="134" rx="9" fill="#70988a" />
        <circle
          cx="101"
          cy="90"
          r="27"
          fill="none"
          stroke="#e3ce94"
          strokeWidth="3"
        />
        <ellipse
          cx="101"
          cy="90"
          rx="13"
          ry="27"
          fill="none"
          stroke="#e3ce94"
          strokeWidth="2"
        />
        <path
          d="M74 90h54m-49-12h44m-44 24h44M75 41h51m-40 13h30"
          stroke="#e3ce94"
          strokeWidth="2"
        />
        <path d="M71 144h62" stroke="#e3ce94" strokeWidth="3" />
      </>
    )
  else if (art === "ticket")
    drawing = (
      <>
        <path
          d="M24 57h151v24a14 14 0 0 0 0 28v27H24v-27a14 14 0 0 0 0-28Z"
          fill="#e4c18b"
        />
        <path
          d="M130 60v72"
          stroke="#b09163"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <path
          d="M41 80h70m-70 15h49m-49 16h64"
          stroke="#ab8964"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "map")
    drawing = (
      <>
        <path
          d="m28 39 46 18 47-18 49 17v102l-49-18-47 18-46-18Z"
          fill="#d6dfb9"
        />
        <path d="M74 57v101m47-119v101" stroke="#93b39b" strokeWidth="2" />
        <path
          d="m33 74 29 24 40-12 21 37 41-24"
          stroke="#faf2d4"
          strokeWidth="9"
          fill="none"
        />
        <path d="M127 78c-29-40 23-55 28-23 1 9-14 24-14 24Z" fill="#d59379" />
        <circle cx="141" cy="57" r="6" fill="#f9e9cc" />
      </>
    )
  else if (["car", "taxi"].includes(art))
    drawing = (
      <>
        <path
          d="m41 87 21-36h73l24 36 17 16v35H25v-34Z"
          fill={art === "taxi" ? "#dbb468" : "#87aa9b"}
        />
        <path d="m69 59-16 29h43V59Zm36 0v29h44l-19-29Z" fill="#d9e9df" />
        <circle cx="57" cy="139" r="17" fill="#526c60" />
        <circle cx="144" cy="139" r="17" fill="#526c60" />
        <circle cx="57" cy="139" r="7" fill="#b9cabc" />
        <circle cx="144" cy="139" r="7" fill="#b9cabc" />
        {art === "taxi" && (
          <rect x="89" y="39" width="28" height="13" rx="3" fill="#f6e1af" />
        )}
      </>
    )
  else if (art === "truck")
    drawing = (
      <>
        <rect x="24" y="54" width="101" height="80" rx="6" fill="#96b3a4" />
        <path d="M125 79h31l22 25v30h-53Z" fill="#d1a47d" />
        <path d="M133 87h21l16 19h-37Z" fill="#e3ead8" />
        <circle cx="54" cy="137" r="17" fill="#577165" />
        <circle cx="149" cy="137" r="17" fill="#577165" />
        <circle cx="54" cy="137" r="7" fill="#c9d4bf" />
        <circle cx="149" cy="137" r="7" fill="#c9d4bf" />
      </>
    )
  else if (art === "traffic")
    drawing = (
      <>
        <path d="M100 106v56" stroke="#7f9584" strokeWidth="8" />
        <rect x="75" y="23" width="50" height="97" rx="10" fill="#6b8579" />
        <circle cx="100" cy="44" r="12" fill="#db947b" />
        <circle cx="100" cy="72" r="12" fill="#e3c078" />
        <circle cx="100" cy="101" r="12" fill="#a5c297" />
        <path
          d="M77 164h46"
          stroke="#91a68d"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "report" || art === "notebook")
    drawing = (
      <>
        <rect
          x="54"
          y="24"
          width="95"
          height="135"
          rx="7"
          fill="#fff4d9"
          stroke="#a4b79e"
          strokeWidth="3"
        />
        <path
          d="M74 54h54m-54 18h54m-54 18h39m-39 18h54m-54 18h45"
          stroke="#a7bca2"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {art === "notebook" && (
          <path d="M65 26v131" stroke="#d6a27b" strokeWidth="5" />
        )}
      </>
    )
  else if (art === "printer")
    drawing = (
      <>
        <path
          d="M59 58V26h83v32"
          fill="#fcf2da"
          stroke="#a4b69d"
          strokeWidth="3"
        />
        <rect x="34" y="60" width="133" height="73" rx="12" fill="#9eb6a6" />
        <path
          d="M64 111h76v45H64Z"
          fill="#faf2dc"
          stroke="#a4b69d"
          strokeWidth="3"
        />
        <path d="M78 126h48m-48 12h35" stroke="#acc0a5" strokeWidth="3" />
        <circle cx="145" cy="79" r="5" fill="#eed09a" />
      </>
    )
  else if (art === "meeting")
    drawing = (
      <>
        <ellipse cx="100" cy="106" rx="77" ry="27" fill="#d4b087" />
        {[45, 101, 156].map((position, index) => (
          <g key={position}>
            <path
              d={`M${position - 19} 87v-13c0-25 38-25 38 0v13`}
              fill={index === 1 ? "#afba99" : "#8bafa0"}
            />
            <circle cx={position} cy="45" r="17" fill="#ddb38d" />
            <path d={`M${position - 18} 43q0-32 36-4`} fill="#7d6e58" />
          </g>
        ))}
        <path d="m47 120-8 38m117-38 8 38" stroke="#b89169" strokeWidth="8" />
        <path d="M77 103h45" stroke="#f8e8c7" strokeWidth="11" />
      </>
    )
  else if (art === "bird")
    drawing = (
      <>
        <ellipse cx="99" cy="94" rx="48" ry="34" fill="#a4b7a1" />
        <circle cx="132" cy="69" r="23" fill="#a4b7a1" />
        <path d="m52 102-34-17 11 34 42-7m62-19 32-5-14-7" fill="#a4b7a1" />
        <path d="m154 66 21 8-21 9" fill="#d8b875" />
        <path d="M80 87q40-20 42 23" fill="#829f89" />
        <circle cx="138" cy="63" r="3" fill="#48645a" />
        <path d="m88 124-5 20m24-20 4 20" stroke="#967e5d" strokeWidth="3" />
      </>
    )
  else if (art === "butterfly")
    drawing = (
      <>
        <path
          d="M98 83C23 4 13 92 85 105c-65-5-62 64 13 28M104 83c75-79 85 9 13 22 65-5 62 64-13 28"
          fill="#d9b591"
        />
        <path
          d="M100 79v56m0-52-13-18m13 18 13-18"
          stroke="#75967f"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="63" cy="75" r="9" fill="#ecd099" />
        <circle cx="139" cy="75" r="9" fill="#ecd099" />
      </>
    )
  else if (art === "sun")
    drawing = (
      <>
        <circle cx="100" cy="92" r="38" fill="#e7bf71" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <path
            key={angle}
            transform={`rotate(${angle} 100 92)`}
            d="M100 33V20"
            stroke="#dfb568"
            strokeWidth="6"
            strokeLinecap="round"
          />
        ))}
      </>
    )
  else if (art === "river")
    drawing = (
      <>
        <path d="M20 53h160v95H20Z" fill="#c6d6ab" />
        <path
          d="M83 53c60 25-66 50-12 96h87c-58-45 53-54-17-96Z"
          fill="#a3c9c7"
        />
        <path
          d="M103 80h23m-41 29h22m20 20h17"
          stroke="#e3ebe0"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </>
    )
  else if (art === "recycling")
    drawing = (
      <>
        <path d="M60 53h82l-9 104H69Z" fill="#a2ba99" />
        <path
          d="M52 48h97m-62-5v-9h27v9"
          stroke="#78967e"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="m96 77 10 1 6 12m0 17-7 10H89m-7-16 2-12 10-5"
          stroke="#f4f0d6"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="m103 89 11 4 5-10m-28 26-7 8 9 8m-10-25-5-11-9 6"
          fill="#f4f0d6"
        />
      </>
    )
  else {
    const Icon = icons[art] || Salad
    drawing = (
      <>
        <circle cx="100" cy="95" r="64" fill="#e7eee1" />
        <path
          d="m37 141 15-4m113-86 7 5"
          stroke="#d9b990"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <g transform="translate(46 40)">
          <Icon
            width="108"
            height="108"
            stroke="#638779"
            strokeWidth="1.35"
            fill="#c9d9c6"
          />
        </g>
      </>
    )
  }
  return (
    <svg
      viewBox="0 0 200 180"
      className={className}
      role="img"
      aria-label={`Illustration of ${label}`}
    >
      <ellipse cx="100" cy="164" rx="68" ry="6" fill="#567565" opacity=".08" />
      {drawing}
    </svg>
  )
}
