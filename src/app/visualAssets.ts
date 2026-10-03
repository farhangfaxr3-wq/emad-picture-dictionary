export interface VerifiedVisual {
  word: string
  photoId: string
  alt: string
  photographer: string
  username: string
  src: string
  status: "verified"
}
function photo(
  word: string,
  photoId: string,
  alt: string,
  photographer: string,
  username: string,
): VerifiedVisual {
  return {
    word,
    photoId,
    alt,
    photographer,
    username,
    src: `/images/vocabulary/${word.replace(/ /g, "-")}.jpg`,
    status: "verified",
  }
}
export const vocabularyVisuals: VerifiedVisual[] = [
  photo(
    "apple",
    "1619546813926-a78fa6372cd2",
    "A whole red apple with a stalk",
    "Amit Lahav",
    "amit_lahav",
  ),
  photo(
    "banana",
    "1587132137056-bfbf0166836e",
    "A yellow banana against a plain background",
    "Mockup Graphics",
    "mockupgraphics",
  ),
  photo(
    "bread",
    "1598373182133-52452f7691ef",
    "A loaf of bread with sliced pieces",
    "Charles Chen",
    "color0911",
  ),
  photo(
    "television",
    "1574974409771-cebec54deb00",
    "A television with a screen and controls",
    "PJ Gal-Szabo",
    "pjgalszabo",
  ),
  photo(
    "chair",
    "1506439773649-6e0eb8cfb237",
    "A single wooden chair with a back and four legs",
    "Kelly Miller",
    "kellydee",
  ),
  photo(
    "fork",
    "1569702824812-351205c9cde5",
    "A metal dining fork with prongs",
    "Matt Popovich",
    "mattpopovich",
  ),
  photo(
    "spoon",
    "1619367300933-376d8c5cd5f9",
    "A metal spoon with a rounded bowl and handle",
    "Anna Kumpan",
    "ankumpan",
  ),
  photo(
    "knife",
    "1614362705324-8da11fd16754",
    "A kitchen knife with a blade and a black handle",
    "Marios Gkortsilas",
    "mr_mgk",
  ),
  photo(
    "plate",
    "1567934124115-2eca8953796b",
    "An empty round plate",
    "Metin Ozer",
    "metinozer",
  ),
  photo(
    "bowl",
    "1510035618584-c442b241abe7",
    "An empty ceramic bowl",
    "TAN Erica",
    "ericatan5566",
  ),
  photo(
    "cup",
    "1570784332176-fdd73da66f03",
    "A ceramic drinking cup with a handle",
    "Samantha Ram",
    "samantharam",
  ),
  photo(
    "kettle",
    "1594213114663-d94db9b17125",
    "A metal kettle with a spout and handle",
    "laura adai",
    "lauraadaiphoto",
  ),
  photo(
    "frying pan",
    "1624031000828-dba1b7a3e4ce",
    "A round frying pan with a long handle",
    "Towfiqu barbhuiya",
    "towfiqu999999",
  ),
  photo(
    "pot",
    "1518737003272-dac7c4760d5e",
    "A cooking pot with side handles",
    "Gaelle Marcel",
    "gaellemarcel",
  ),
  photo(
    "refrigerator",
    "1721613877687-c9099b698faa",
    "A refrigerator standing in a kitchen",
    "Lisa Anna",
    "lisaanna195",
  ),
  photo(
    "oven",
    "1623114112815-74a4b9fe505d",
    "An oven with a front door beneath a cooking range",
    "Erik Mclean",
    "introspectivedsgn",
  ),
  photo(
    "microwave",
    "1585659722983-3a675dabf23d",
    "A microwave oven with a door and control panel",
    "Erik Mclean",
    "introspectivedsgn",
  ),
  photo(
    "sink",
    "1646592491489-ebdf758b9d11",
    "A kitchen sink basin beneath a faucet",
    "Point3D Commercial Imaging Ltd.",
    "3dottawa",
  ),
  photo(
    "orange",
    "1557800636-894a64c1696f",
    "An orange fruit with bright orange peel",
    "Mae Mu",
    "picoftasty",
  ),
  photo(
    "carrot",
    "1598170845058-32b9d6a5da37",
    "Orange carrots with their green leafy tops",
    "K8",
    "_k8_",
  ),
  photo(
    "tomato",
    "1615486171815-2611a6e3cd02",
    "A red tomato",
    "Mockup Graphics",
    "mockupgraphics",
  ),
  photo(
    "milk",
    "1550583724-b2692b85b150",
    "Milk being poured into a glass",
    "Eiliv Aceron",
    "shootdelicious",
  ),
  photo(
    "cheese",
    "1683314573422-649a3c6ad784",
    "Pieces of cheese on a wooden board",
    "David Foodphototasty",
    "phototastyfood",
  ),
  photo(
    "car",
    "1555353540-64580b51c258",
    "A passenger car parked on a road",
    "Quilia",
    "heyquilia",
  ),
  photo(
    "bicycle",
    "1485965120184-e220f721d03e",
    "A bicycle with two wheels, pedals, and handlebars",
    "Robert Bye",
    "robertbye",
  ),
  photo(
    "table",
    "1657524398377-567034729507",
    "A dining table with a tabletop and legs",
    "ONNO",
    "onnostudio",
  ),
  photo(
    "desk",
    "1613252036716-e1efc9788e5b",
    "A writing desk with a flat work surface",
    "SANDRA REI",
    "sandracarmonarei",
  ),
  photo(
    "book",
    "1591951425600-d09958978584",
    "An open book with many paper pages",
    "Olga Tutunaru",
    "otutunaru",
  ),
  photo(
    "pencil",
    "1595584354232-f07d525d87c1",
    "A sharpened pencil",
    "Glen Carrie",
    "glencarrie",
  ),
  photo(
    "clock",
    "1563861826100-9cb868fdbe1c",
    "A round clock with a dial and hands",
    "Ocean Ng",
    "oceanng",
  ),
  photo(
    "lamp",
    "1517991104123-1d56a6e81ed9",
    "A table lamp with a shade",
    "Joel Henry",
    "joelhenry",
  ),
  photo(
    "bed",
    "1635594202056-9ea3b497e5c0",
    "A bed with a mattress, pillows, and a cover",
    "Zulian Firmansyah",
    "lianfirmansyah",
  ),
  photo(
    "flower",
    "1496062031456-07b8f162a322",
    "A red rose flower with petals",
    "ameenfahmy",
    "ameenfahmy",
  ),
  photo(
    "tree",
    "1528183429752-a97d0bf99b5a",
    "A tree with a trunk and a leafy crown",
    "Simon Wilkes",
    "simonfromengland",
  ),
  photo(
    "bird",
    "1507477338202-487281e6c27e",
    "A small bird with feathers and a beak",
    "Mathew Schwartz",
    "cadop",
  ),
  photo(
    "dog",
    "1724367281416-cf18867ad712",
    "A dog with four legs, fur, and a tail",
    "Jane Thomson",
    "janethomson",
  ),
  photo(
    "butterfly",
    "1599631438215-75bc2640feb8",
    "A butterfly with open wings",
    "AARN GIRI",
    "aarngiri",
  ),
  photo(
    "backpack",
    "1553062407-98eeb64c6a62",
    "A backpack with shoulder straps",
    "Sun Lingyan",
    "sunlingyan",
  ),
  photo(
    "suitcase",
    "1502301197179-65228ab57f78",
    "An open suitcase packed for travel",
    "Marissa Grootes",
    "marissacristina",
  ),
  photo(
    "passport",
    "1581553673739-c4906b5d0de8",
    "An open passport with stamped pages",
    "Kit",
    "kit",
  ),
  photo(
    "airplane",
    "1572198404182-2c115d89fb26",
    "A passenger airplane with wings and a tail",
    "Merve Sensoy",
    "mssbarbe",
  ),
  photo(
    "laptop",
    "1496181133206-80ce9b88a853",
    "An open laptop with a screen and keyboard",
    "Kari Shea",
    "karishea",
  ),
  photo(
    "bus",
    "1632276536839-84cad7fd03b0",
    "A blue passenger bus on a street",
    "Egor Litvinov",
    "litvinov",
  ),
  photo(
    "traffic lights",
    "1581677641984-cf14ca58c5ee",
    "Traffic lights with illuminated signal lamps",
    "Tsvetoslav Hristov",
    "tsvetoslav",
  ),
]
export interface SceneVisual {
  sceneId: string
  name: string
  photoId: string
  alt: string
  photographer: string
  username: string
  word?: string
}
export const sceneVisuals: SceneVisual[] = [
  {
    sceneId: "house",
    name: "Living Room",
    photoId: "1619992525255-3bed3879b0d6",
    alt: "A living room with a sofa, clock, cushions, and a coffee table",
    photographer: "Maiar Shalaby",
    username: "maiarshalaby",
    word: "living room",
  },
  {
    sceneId: "kitchen",
    name: "Kitchen",
    photoId: "1601760561441-16420502c7e0",
    alt: "A kitchen with a refrigerator, oven, sink, and cabinets",
    photographer: "Clay Elliot",
    username: "ibidsy",
    word: "kitchen",
  },
  {
    sceneId: "classroom",
    name: "Classroom",
    photoId: "1635424239131-32dc44986b56",
    alt: "A classroom with desks, chairs, and windows",
    photographer: "2y.kang",
    username: "2ykang",
    word: "classroom",
  },
  {
    sceneId: "supermarket",
    name: "Supermarket",
    photoId: "1542838132-92c53300491e",
    alt: "A supermarket produce display with fruit and vegetables",
    photographer: "nrd",
    username: "nicotitto",
    word: "supermarket",
  },
  {
    sceneId: "hospital",
    name: "Hospital",
    photoId: "1710074213379-2a9c2653046a",
    alt: "A hospital room with a patient bed and medical equipment",
    photographer: "Zoshua Colah",
    username: "zoshuacolah",
    word: "hospital",
  },
  {
    sceneId: "airport",
    name: "Airport",
    photoId: "1553619948-505cc1cdc320",
    alt: "An airport terminal with seats, a boarding bridge, and an airplane",
    photographer: "Oskar Kadaksoo",
    username: "oskark",
    word: "airport",
  },
  {
    sceneId: "office",
    name: "Office",
    photoId: "1556761175-b413da4baf72",
    alt: "An office with desks, computers, chairs, and people working together",
    photographer: "Austin Distel",
    username: "austindistel",
    word: "office",
  },
  {
    sceneId: "street",
    name: "City Street",
    photoId: "1785503670440-4a457b89c588",
    alt: "A city intersection with cars, traffic signals, and a crosswalk",
    photographer: "MChe Lee",
    username: "mclee",
    word: "city street",
  },
  {
    sceneId: "park",
    name: "Park",
    photoId: "1590750456182-4e35e99ca8ae",
    alt: "A park with a wooden bench and leafy trees",
    photographer: "Sonder Quest",
    username: "sonderquest",
    word: "park",
  },
  {
    sceneId: "restaurant",
    name: "Restaurant",
    photoId: "1517248135467-4c7edcad34c4",
    alt: "A restaurant dining area with tables, chairs, windows, and lights",
    photographer: "Jason Leung",
    username: "ninjason",
    word: "restaurant",
  },
  {
    sceneId: "bedroom",
    name: "Bedroom",
    photoId: "1560185893-a55cbc8c57e8",
    alt: "A bedroom with a large bed, bedside tables, and a rug",
    photographer: "Francesca Tosolini",
    username: "fromitaly",
    word: "bedroom",
  },
  {
    sceneId: "bathroom",
    name: "Bathroom",
    photoId: "1630699376443-a79cea41ed80",
    alt: "A bathroom with a sink, toilet, mirror, and bathtub",
    photographer: "Point3D Commercial Imaging Ltd.",
    username: "3dottawa",
    word: "bathroom",
  },
  {
    sceneId: "university",
    name: "University",
    photoId: "1606761568499-6d2451b23c66",
    alt: "A university lecture hall with seats and students",
    photographer: "Dom Fou",
    username: "domlafou",
    word: "lecture hall",
  },
]
export interface VerifiedHotspot {
  word: string
  id: string
  x: number
  y: number
  width: number
  height: number
}
function spot(
  word: string,
  x: number,
  y: number,
  width: number,
  height: number,
): VerifiedHotspot {
  return { word, id: word.replace(/ /g, "-"), x, y, width, height }
}
export const sceneHotspots: Record<string, VerifiedHotspot[]> = {
  house: [
    spot("sofa", 1, 54, 58, 44),
    spot("clock", 29, 8, 10, 22),
    spot("table", 36, 73, 30, 24),
    spot("book", 11, 15, 3, 18),
    spot("cushion", 10, 60, 18, 20),
    spot("plant", 50, 40, 10, 25),
  ],
  kitchen: [
    spot("refrigerator", 1, 13, 22, 84),
    spot("oven", 71, 80, 14, 20),
    spot("sink", 41, 62, 13, 12),
    spot("window", 39, 28, 19, 28),
    spot("dishwasher", 30, 67, 11, 26),
    spot("toaster", 76, 59, 7, 9),
    spot("faucet", 45, 51, 8, 13),
    spot("cabinet", 24, 23, 14, 25),
    spot("countertop", 59, 61, 9, 8),
    spot("stove", 72, 69, 27, 12),
  ],
  classroom: [
    spot("desk", 47, 69, 33, 24),
    spot("chair", 18, 59, 12, 30),
    spot("window", 60, 1, 32, 53),
  ],
  supermarket: [
    spot("lettuce", 0, 3, 21, 24),
    spot("bell pepper", 39, 7, 14, 20),
    spot("cucumber", 56, 61, 12, 18),
    spot("cabbage", 1, 82, 21, 17),
    spot("pumpkin", 75, 83, 15, 13),
    spot("cauliflower", 94, 87, 6, 12),
  ],
  hospital: [
    spot("bed", 14, 60, 44, 38),
    spot("chair", 70, 59, 10, 24),
    spot("table", 52, 70, 21, 16),
  ],
  airport: [
    spot("airplane", 39, 42, 20, 42),
    spot("chair", 7, 57, 14, 36),
    spot("boarding bridge", 55, 46, 19, 24),
  ],
  office: [
    spot("desk", 15, 63, 41, 34),
    spot("laptop", 27, 46, 15, 26),
    spot("monitor", 19, 36, 14, 27),
    spot("keyboard", 42, 70, 10, 10),
    spot("chair", 72, 57, 19, 39),
  ],
  street: [
    spot("car", 88, 73, 12, 15),
    spot("traffic lights", 69, 51, 2.5, 7),
    spot("crosswalk", 3, 82, 59, 17),
    spot("road", 64, 83, 14, 14),
  ],
  park: [
    spot("bench", 37, 68, 36, 30),
    spot("tree", 63, 0, 9, 65),
    spot("gazebo", 1, 1, 44, 38),
    spot("hedge", 0, 36, 37, 61),
  ],
  restaurant: [
    spot("table", 30, 62, 31, 18),
    spot("chair", 40, 75, 13, 23),
    spot("window", 54, 2, 12, 55),
    spot("lamp", 84, 17, 10, 7),
  ],
  bedroom: [
    spot("bed", 49, 48, 39, 38),
    spot("pillow", 64, 51, 8, 10),
    spot("lamp", 92, 36, 8, 27),
    spot("rug", 29, 73, 34, 24),
    spot("window", 28, 25, 17, 35),
    spot("chair", 11, 51, 15, 29),
  ],
  bathroom: [
    spot("sink", 35, 58, 26, 17),
    spot("toilet", 64, 62, 16, 37),
    spot("mirror", 22, 0, 33, 52),
    spot("bathtub", 80, 85, 20, 14),
    spot("faucet", 43, 55, 6, 10),
  ],
  university: [
    spot("screen", 10, 33, 21, 30),
    spot("door", 41, 51, 7, 11),
    spot("stairs", 5, 75, 6, 12),
  ],
}
export const sceneObjectVisuals: VerifiedVisual[] = sceneVisuals.flatMap(
  (scene) =>
    sceneHotspots[scene.sceneId].map((hotspot) => ({
      word: hotspot.word,
      photoId: scene.photoId,
      alt: `A close-up of ${hotspot.word} in the ${scene.name.toLowerCase()} photograph`,
      photographer: scene.photographer,
      username: scene.username,
      src: `/images/vocabulary/scene-${scene.sceneId}-${hotspot.id}.jpg`,
      status: "verified" as const,
    })),
)
const exactImages = new Map(
  vocabularyVisuals.map((visual) => [visual.word, visual]),
)
for (const visual of sceneObjectVisuals) {
  if (!exactImages.has(visual.word)) exactImages.set(visual.word, visual)
}
for (const scene of sceneVisuals) {
  if (scene.word)
    exactImages.set(scene.word, {
      word: scene.word,
      photoId: scene.photoId,
      alt: scene.alt,
      photographer: scene.photographer,
      username: scene.username,
      src: `/images/scenes/${scene.sceneId}.jpg`,
      status: "verified",
    })
}
export function getWordVisual(
  word: string,
  topic?: string,
): VerifiedVisual | undefined {
  const exact = word.trim().toLowerCase()
  const restrictedSenses: Record<string, string[]> = {
    orange: ["Food"],
    plant: ["Home", "Nature"],
    screen: ["Classroom", "School"],
  }
  if (
    topic &&
    restrictedSenses[exact] &&
    !restrictedSenses[exact].includes(topic)
  )
    return undefined
  return exactImages.get(exact)
}
