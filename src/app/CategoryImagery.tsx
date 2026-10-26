import { useState, type ReactNode } from "react"

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
  if (!image || failed)
    return (
      <div
        role="img"
        aria-label={`${category} illustrated category cover`}
        className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(145deg,var(--secondary),var(--muted))] p-6 text-primary ${className}`}
      >
        <span className="absolute -right-8 -top-10 h-28 w-28 rounded-full border-[18px] border-primary/10" />
        <span className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-primary/10" />
        <svg
          aria-hidden="true"
          viewBox="0 0 96 96"
          className="absolute h-28 w-28 opacity-15"
        >
          <path d="M20 24h24c8 0 14 6 14 14v38H34c-8 0-14-6-14-14V24Z" fill="currentColor" />
          <path d="M76 24H52c-8 0-14 6-14 14v38h24c8 0 14-6 14-14V24Z" fill="currentColor" />
        </svg>
        <span className="relative max-w-[18rem] text-center font-display text-sm font-bold leading-5">
          {category}
        </span>
      </div>
    )
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
