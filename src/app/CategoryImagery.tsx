import { useState, type ReactNode } from "react"

import {
  BookOpenCheck,
  BookOpenText,
  Brain,
  BriefcaseBusiness,
  Building2,
  Cpu,
  FlaskConical,
  GraduationCap,
  Landmark,
  Leaf,
  Newspaper,
  Palette,
  Stethoscope,
  type LucideIcon,
} from "lucide-react"

interface CategoryImage {
  category: string

  photoId: string

  alt: string

  photographer: string

  username: string
}

export const categoryImages: CategoryImage[] = [
  {
    category: "Food",

    photoId: "1605522283494-4901a98d458e",

    alt: "Fresh vegetables and ingredients arranged on a wooden kitchen counter",

    photographer: "THLT LCX",

    username: "thlt_lcx",
  },

  {
    category: "Home",

    photoId: "1619992525255-3bed3879b0d6",

    alt: "A bright living room with a sofa, cushions, and a coffee table",

    photographer: "Maiar Shalaby",

    username: "maiarshalaby",
  },

  {
    category: "School",

    photoId: "1503676260728-1c00da094a0b",

    alt: "An apple resting on a stack of school books",

    photographer: "Element5 Digital",

    username: "element5digital",
  },

  {
    category: "Classroom",

    photoId: "1635424239131-32dc44986b56",

    alt: "A sunlit classroom with rows of wooden desks and windows",

    photographer: "2y.kang",

    username: "2ykang",
  },

  {
    category: "Health",

    photoId: "1666886573531-48d2e3c2b684",

    alt: "A doctor discussing information on a tablet with a patient",

    photographer: "Nappy",

    username: "nappystudio",
  },

  {
    category: "Transportation",

    photoId: "1632276536839-84cad7fd03b0",

    alt: "A blue public bus traveling along a city street",

    photographer: "Egor Litvinov",

    username: "litvinov",
  },

  {
    category: "Nature",

    photoId: "1559310589-2673bfe16970",

    alt: "A turquoise lake surrounded by mountains and pine forests",

    photographer: "Adam Vradenburg",

    username: "vradenburg",
  },

  {
    category: "Jobs",

    photoId: "1556761175-b413da4baf72",

    alt: "Colleagues working together around tables in an office",

    photographer: "Austin Distel",

    username: "austindistel",
  },

  {
    category: "Family",

    photoId: "1681311311317-a0561a8eef74",

    alt: "A family enjoying a picnic together on the grass",

    photographer: "Reba Spike",

    username: "rebaspike",
  },

  {
    category: "Travel",

    photoId: "1553619948-505cc1cdc320",

    alt: "An airplane parked beside a passenger boarding bridge at an airport",

    photographer: "Oskar Kadaksoo",

    username: "oskark",
  },

  {
    category: "Sports",

    photoId: "1546608235-3310a2494cdf",

    alt: "An overhead view of a green football field with clearly marked lines",

    photographer: "Timothy Tan",

    username: "timtanzy",
  },

  {
    category: "Technology",

    photoId: "1496181133206-80ce9b88a853",

    alt: "A laptop computer on a wooden desk",

    photographer: "Kari Shea",

    username: "karishea",
  },

  {
    category: "Animals",

    photoId: "1623387641168-d9803ddd3f35",

    alt: "A dog and a cat resting together in the grass",

    photographer: "Andrew S",

    username: "sita2",
  },

  {
    category: "People",

    photoId: "1610070835951-156b6921281d",

    alt: "Friends sitting together outdoors on a green lawn",

    photographer: "Beth Macdonald",

    username: "elsbethcat",
  },

  {
    category: "Clothing",

    photoId: "1558769132-cb1aea458c5e",

    alt: "An assortment of clothing arranged on a wardrobe rail",

    photographer: "Alyssa Strohmann",

    username: "anotherlovely",
  },

  {
    category: "Places",

    photoId: "1627927518258-b67557570840",

    alt: "Buildings and houses lining a neighborhood street",

    photographer: "Jane Sorensen",

    username: "janerette",
  },

  {
    category: "Communication",

    photoId: "1604881988758-f76ad2f7aac1",

    alt: "Two people sharing a conversation over mugs at a table",

    photographer: "Priscilla Du Preez",

    username: "priscilladupreez",
  },

  {
    category: "Community",

    photoId: "1621460248083-6271cc4437a8",

    alt: "A gardener planting young seedlings in a raised garden bed",

    photographer: "Jonathan Kemper",

    username: "jupp",
  },

  {
    category: "Daily Activities",

    photoId: "1707241358597-bafcc8a8e73d",

    alt: "A coffee machine preparing a fresh cup of coffee",

    photographer: "Jakub Żerdzicki",

    username: "jakubzerdzicki",
  },
]

interface CategoryArtwork {
  icon: LucideIcon

  background: string

  accent: string

  detail: string
}

export const categoryArtworks: Record<string, CategoryArtwork> = {
  "Education & University Life": {
    icon: GraduationCap,

    background: "linear-gradient(145deg, #173c36 0%, #2d7a68 100%)",

    accent: "#9ce2cc",

    detail: "Campus learning",
  },

  "Science & Research": {
    icon: FlaskConical,

    background: "linear-gradient(145deg, #18334f 0%, #2d6f8f 100%)",

    accent: "#9eddf0",

    detail: "Evidence and discovery",
  },

  "Business & Economics": {
    icon: BriefcaseBusiness,

    background: "linear-gradient(145deg, #3d2f1d 0%, #8a642e 100%)",

    accent: "#f2d38b",

    detail: "Markets and work",
  },

  "Law & Government": {
    icon: Landmark,

    background: "linear-gradient(145deg, #31264d 0%, #664f91 100%)",

    accent: "#d4c4ff",

    detail: "Rights and institutions",
  },

  "Environment & Sustainability": {
    icon: Leaf,

    background: "linear-gradient(145deg, #1c402d 0%, #4b8a53 100%)",

    accent: "#bce8a8",

    detail: "Planet and resources",
  },

  "Psychology & Human Behavior": {
    icon: Brain,

    background: "linear-gradient(145deg, #4c263e 0%, #9b577d 100%)",

    accent: "#ffc6e3",

    detail: "Mind and behavior",
  },

  "Media & Journalism": {
    icon: Newspaper,

    background: "linear-gradient(145deg, #243344 0%, #526f8b 100%)",

    accent: "#c7e3ff",

    detail: "News and publishing",
  },

  "Art, Literature & Culture": {
    icon: Palette,

    background: "linear-gradient(145deg, #532c2a 0%, #b36a4b 100%)",

    accent: "#ffd0a7",

    detail: "Ideas and expression",
  },

  "Academic Writing & Research": {
    icon: BookOpenCheck,

    background: "linear-gradient(145deg, #283451 0%, #596fa8 100%)",

    accent: "#cfdaff",

    detail: "Sources and arguments",
  },

  "Medicine & Healthcare": {
    icon: Stethoscope,

    background: "linear-gradient(145deg, #17434a 0%, #347f88 100%)",

    accent: "#b7eef0",

    detail: "Care and clinical practice",
  },

  "Architecture & Construction": {
    icon: Building2,

    background: "linear-gradient(145deg, #3d3630 0%, #81705e 100%)",

    accent: "#ead5b7",

    detail: "Buildings and design",
  },

  "IT & Computers": {
    icon: Cpu,

    background: "linear-gradient(145deg, #202d48 0%, #395e9b 100%)",

    accent: "#bcd1ff",

    detail: "Systems and software",
  },
}

interface PhotoProps {
  category: string

  className?: string

  priority?: boolean
}

export function CategoryPhoto({
  category,

  className = "",

  priority = false,
}: PhotoProps) {
  const [failed, setFailed] = useState(false)

  const image = categoryImages.find((image) => image.category === category)

  if (!image || failed) {
    const artwork = categoryArtworks[category]

    const ArtworkIcon = artwork?.icon || BookOpenText

    return (
      <div
        role="img"
        aria-label={`${category} illustrated category cover`}
        className={`relative flex h-full w-full items-center justify-center overflow-hidden p-6 text-white ${className}`}
        style={{
          background:
            artwork?.background ||
            "linear-gradient(145deg, var(--secondary), var(--muted))",
        }}
      >
        <span className="absolute -right-8 -top-10 h-28 w-28 rounded-full border-[18px] border-white/10" />
        <span className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-white/10" />
        <span className="absolute left-6 top-6 h-2 w-2 rounded-full bg-white/45" />
        <span className="absolute right-8 top-1/2 h-1.5 w-1.5 rounded-full bg-white/35" />
        <div className="relative flex max-w-[18rem] flex-col items-center text-center">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm"
            style={{ color: artwork?.accent || "currentColor" }}
          >
            <ArtworkIcon aria-hidden="true" size={34} strokeWidth={1.7} />
          </span>
          <span className="mt-4 font-display text-sm font-bold leading-5 sm:text-base">
            {category}
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[.16em] text-white/65">
            {artwork?.detail || "Vocabulary topic"}
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={`/images/categories/${image.photoId}.jpg`}
      srcSet={`/images/categories/${image.photoId}-small.jpg 600w, /images/categories/${image.photoId}.jpg 1400w`}
      sizes={
        priority
          ? "(min-width: 1024px) 50vw, 100vw"
          : "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
      }
      alt={image.alt}
      width={1400}
      height={933}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

interface HeroProps {
  category: string

  eyebrow: string

  title: ReactNode

  description: string

  children?: ReactNode
}

export function CategoryHero({
  category,

  eyebrow,

  title,

  description,

  children,
}: HeroProps) {
  const image = categoryImages.find((image) => image.category === category)

  return (
    <section className="mb-6 grid overflow-hidden rounded-2xl bg-secondary lg:grid-cols-2">
      <div className="flex flex-col justify-center p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold">{title}</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
          {description}
        </p>
        {children}
      </div>
      <figure className="relative order-first min-w-0 lg:order-last">
        <div className="aspect-video h-full min-h-56 lg:aspect-auto">
          <CategoryPhoto key={category} category={category} priority />
        </div>
        {image && (
          <figcaption className="absolute bottom-3 right-3 max-w-full rounded-lg bg-card/95 px-3 py-1.5 text-xs text-muted-foreground">
            Photo:{" "}
            <a
              href={`https://unsplash.com/@${image.username}?utm_source=emad_picture_dictionary&utm_medium=referral`}
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:text-primary hover:underline"
            >
              {image.photographer}
            </a>{" "}
            / Unsplash
          </figcaption>
        )}
      </figure>
    </section>
  )
}
