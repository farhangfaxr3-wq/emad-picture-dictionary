import type { ReactNode } from "react"

export interface SceneObject {
  id: string
  x: number
  y: number
  width: number
  height: number
  markerX?: number
  markerY?: number
}
export interface Scene {
  id: string
  title: string
  topic: string
  description: string
  photographer: string
  username: string
  photoId: string
  objects: SceneObject[]
}
const object = (
  id: string,
  x: number,
  y: number,
  width: number,
  height: number,
  markerX?: number,
  markerY?: number,
): SceneObject => ({ id, x, y, width, height, markerX, markerY })
export const sceneObjectName = (id: string) =>
  (id.includes("--") ? id.split("--").at(-1)! : id).replace(/-/g, " ")
export const scenes: Scene[] = [
  {
    id: "house",
    title: "An afternoon in the living room",
    topic: "Home",
    description:
      "Look around a real living room. Find the sofa, books, clock, and other familiar objects.",
    photographer: "Maiar Shalaby",
    username: "maiarshalaby",
    photoId: "1619992525255-3bed3879b0d6",
    objects: [
      object("sofa", 0, 285, 600, 220),
      object("table", 359, 409, 329, 120),
      object("clock", 312, 30, 104, 119),
      object("book", 118, 79, 64, 105),
      object("home--plant", 490, 177, 95, 124),
      object("home--bookshelf", 60, 149, 420, 37),
      object("home--cushion", 353, 315, 115, 80),
      object("home--glass", 289, 463, 32, 42),
    ],
  },
  {
    id: "kitchen",
    title: "Let's make something delicious",
    topic: "Home",
    description:
      "Explore a real kitchen, from the refrigerator to the sink and cooking surfaces.",
    photographer: "Lotus Design N Print",
    username: "lotusdnp",
    photoId: "1668026694348-b73c5eb5e299",
    objects: [
      object("refrigerator", 666, 122, 147, 218),
      object("oven", 537, 142, 98, 91),
      object("home--sink", 308, 319, 121, 28, 420, 333),
      object("home--faucet", 315, 224, 57, 107),
      object("home--cabinet", 534, 42, 272, 80),
      object("home--stove", 5, 415, 420, 124),
      object("home--countertop", 625, 330, 374, 133),
      object("lamp", 852, 9, 87, 97),
    ],
  },
  {
    id: "bedroom",
    title: "A peaceful bedroom",
    topic: "Home",
    description:
      "A quiet room for resting. Explore the bed, bedding, bedside table, and window.",
    photographer: "Franco Debartolo",
    username: "francotheshooter",
    photoId: "1779239358567-8a8e26f503d1",
    objects: [
      object("bed", 749, 266, 247, 270, 946, 494),
      object("home--pillow", 767, 126, 140, 169),
      object("home--blanket", 759, 308, 235, 181),
      object("home--bedside-table", 449, 300, 225, 231),
      object("lamp", 539, 87, 74, 154),
      object("home--plant", 466, 216, 63, 88),
      object("window", 33, 11, 238, 331),
      object("home--curtain", 248, 2, 49, 343),
    ],
  },
  {
    id: "classroom",
    title: "A new day in the classroom",
    topic: "Classroom",
    description:
      "Take a seat in a sunlit classroom. Explore the desks, chairs, windows, and bookshelf.",
    photographer: "2y.kang",
    username: "2ykang",
    photoId: "1635424239131-32dc44986b56",
    objects: [
      object("desk", 298, 322, 295, 97),
      object("chair", 502, 445, 152, 91),
      object("window", 252, 3, 286, 308),
      object("home--bookshelf", 1, 218, 145, 227),
      object("home--window-frame", 550, 3, 48, 310),
      object("home--wall", 2, 3, 149, 194),
    ],
  },
  {
    id: "supermarket",
    title: "A colorful trip to the supermarket",
    topic: "Food",
    description:
      "Explore real produce shelves. Notice the shapes and colors of vegetables and citrus fruit.",
    photographer: "nrd",
    username: "nicotitto",
    photoId: "1542838132-92c53300491e",
    objects: [
      object("food--lettuce", 10, 30, 136, 157),
      object("food--bell-pepper", 389, 211, 133, 86),
      object("food--lemon", 713, 26, 112, 144),
      object("food--cucumber", 503, 422, 199, 99),
      object("food--cabbage", 40, 416, 184, 117),
      object("food--ginger", 329, 428, 163, 106),
    ],
  },
  {
    id: "hospital",
    title: "A visit to the hospital",
    topic: "Health",
    description:
      "Get to know a hospital room and the everyday objects used to make patients comfortable.",
    photographer: "Zoshua Colah",
    username: "zoshuacolah",
    photoId: "1710074213379-2a9c2653046a",
    objects: [
      object("bed", 145, 350, 392, 185),
      object("home--pillow", 416, 357, 168, 99),
      object("health--iv-stand", 383, 96, 79, 322),
      object("clothing--handbag", 529, 291, 69, 55),
      object("chair", 687, 325, 114, 150),
      object("table", 524, 365, 217, 43),
      object("home--air-conditioner", 201, 1, 215, 78),
    ],
  },
  {
    id: "airport",
    title: "Ready for takeoff",
    topic: "Travel",
    description:
      "Look through an airport terminal window. Spot the airplane, boarding bridge, seats, and wing.",
    photographer: "Oskar Kadaksoo",
    username: "oskark",
    photoId: "1553619948-505cc1cdc320",
    objects: [
      object("airplane", 349, 263, 220, 217),
      object("travel--wing", 225, 305, 172, 56),
      object("travel--aircraft-engine", 218, 353, 92, 111),
      object("travel--boarding-bridge", 580, 289, 167, 166),
      object("chair", 7, 341, 280, 185),
      object("window", 1, 2, 987, 284),
      object("home--floor", 335, 485, 326, 51),
    ],
  },
  {
    id: "office",
    title: "Good ideas at work",
    topic: "Jobs",
    description:
      "Explore a real shared workspace with computers, keyboards, desks, chairs, and colleagues.",
    photographer: "Austin Distel",
    username: "austindistel",
    photoId: "1556761175-b413da4baf72",
    objects: [
      object("desk", 137, 337, 408, 188),
      object("laptop", 299, 187, 157, 163),
      object("keyboard", 449, 374, 84, 66),
      object("chair", 587, 410, 269, 119),
      object("colleague", 542, 123, 171, 207),
      object("home--plant", 44, 111, 70, 180),
      object("whiteboard", 691, 3, 215, 193),
      object("home--ceiling", 193, 5, 548, 68),
    ],
  },
  {
    id: "restaurant",
    title: "A table at the restaurant",
    topic: "Food",
    description:
      "Discover a welcoming dining room. Look for tables, chairs, glasses, windows, and lights.",
    photographer: "Jason Leung",
    username: "ninjason",
    photoId: "1517248135467-4c7edcad34c4",
    objects: [
      object("table", 303, 288, 339, 124),
      object("chair", 616, 330, 142, 153),
      object("home--glass", 930, 350, 34, 35),
      object("window", 780, 97, 191, 193),
      object("lamp", 815, 1, 174, 54),
      object("home--floor", 480, 483, 140, 54),
    ],
  },
  {
    id: "street",
    title: "Around the neighborhood",
    topic: "Transportation",
    description:
      "Look around a real city street. Explore vehicles, traffic signals, buildings, and sidewalks.",
    photographer: "Deval Parikh",
    username: "devalpp",
    photoId: "1593981206169-021cb48514ae",
    objects: [
      object("car", 633, 421, 117, 109),
      object("transportation--pedestrian-signal", 451, 305, 48, 39),
      object("transportation--pedestrian", 225, 432, 81, 106),
      object("transportation--sidewalk", 289, 478, 154, 59),
      object("places--building", 682, 6, 270, 396),
      object("transportation--streetlight", 389, 219, 34, 251),
    ],
  },
  {
    id: "park",
    title: "A breath of fresh air",
    topic: "Nature",
    description:
      "Take a slow walk in a real park. Notice the bench, trees, grass, path, and leaves.",
    photographer: "Nazarii Taran",
    username: "nazariitaran",
    photoId: "1778007446967-61d06abbe6d8",
    objects: [
      object("nature--bench", 729, 440, 118, 95),
      object("tree", 113, 245, 73, 170),
      object("nature--path", 324, 407, 311, 132),
      object("nature--grass", 40, 458, 240, 80),
      object("leaf", 860, 230, 120, 80),
    ],
  },
  {
    id: "station",
    title: "On the train platform",
    topic: "Transportation",
    description:
      "Get ready for a train journey. Explore the train, platform, doors, windows, and track.",
    photographer: "Alviansyah Kuswidyatama",
    username: "alvianwidyatama",
    photoId: "1693572322416-9ea4b36482ce",
    objects: [
      object("train", 10, 16, 489, 504, 430, 193),
      object("transportation--platform", 656, 328, 259, 204),
      object("transportation--railway-track", 402, 399, 183, 135),
      object("door", 257, 103, 78, 390),
      object("window", 22, 4, 197, 197),
      object("transportation--passenger", 858, 80, 29, 102),
    ],
  },
]
interface SceneCanvasProps {
  scene: Scene
  renderArt: (id: string) => ReactNode
  selectedId?: string | null
  onSelect?: (id: string) => void
  labels?: boolean
  challenge?: boolean
  interactive?: boolean
}
export default function SceneCanvas({
  scene,
  selectedId,
  onSelect,
  labels = false,
  challenge = false,
  interactive = true,
}: SceneCanvasProps) {
  return (
    <div className="relative isolate aspect-[1000/540] w-full overflow-hidden rounded-xl bg-muted">
      <img
        src={"/images/scenes/" + scene.id + ".jpg"}
        alt={scene.title + ", a real photographic vocabulary environment"}
        width={1600}
        height={864}
        loading={interactive ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {interactive &&
        scene.objects
          .filter((item) => item.id === selectedId)
          .map((item) => (
            <div
              key={item.id}
              aria-hidden="true"
              className="pointer-events-none absolute rounded-lg border-2 border-primary bg-primary/10"
              style={{
                left: item.x / 10 + "%",
                top: item.y / 5.4 + "%",
                width: item.width / 10 + "%",
                height: item.height / 5.4 + "%",
              }}
            />
          ))}
      {interactive &&
        scene.objects.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onSelect?.(item.id)}
            aria-label={
              challenge
                ? "Select scene object " + (index + 1)
                : "Explore " + sceneObjectName(item.id)
            }
            aria-pressed={selectedId === item.id}
            className={
              "group absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold shadow-md ring-2 ring-card/80 transition-all focus-visible:z-30 focus-visible:ring-offset-0 md:h-9 md:w-9 " +
              (selectedId === item.id
                ? "bg-primary text-primary-foreground"
                : "bg-card text-primary hover:bg-primary hover:text-primary-foreground")
            }
            style={{
              left: (item.markerX ?? item.x + item.width / 2) / 10 + "%",
              top: (item.markerY ?? item.y + item.height / 2) / 5.4 + "%",
            }}
          >
            {index + 1}
            {!challenge && (
              <span
                className={
                  "pointer-events-none absolute top-full left-1/2 z-20 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-card px-2 py-1 text-xs font-semibold text-foreground shadow-sm " +
                  (labels || selectedId === item.id
                    ? "block"
                    : "hidden group-hover:block group-focus-visible:block")
                }
              >
                {sceneObjectName(item.id)}
              </span>
            )}
          </button>
        ))}
    </div>
  )
}
