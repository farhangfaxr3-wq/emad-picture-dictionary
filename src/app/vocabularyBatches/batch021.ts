import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "fig",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Fleshy sweet pear-shaped yellowish or purple multiple fruit eaten fresh or preserved or dried.",
    "The lesson uses “fig” in a carefully reviewed vocabulary context."
  ],
  [
    "fight",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "The act of fighting; any contest or struggle.",
    "A fight broke out at the hockey game."
  ],
  [
    "figure",
    "/ˈfɪɡjɚ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A decorative or artistic work.",
    "The coach had a design on the doors."
  ],
  [
    "film",
    "/fɪlm/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A thin coating or layer.",
    "The table was covered with a film of dust."
  ],
  [
    "filter",
    "/ˈfɪltə/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Device that removes something from whatever passes through it.",
    "The lesson uses “filter” in a carefully reviewed vocabulary context."
  ],
  [
    "final",
    "/ˈfaɪ.nəl/",
    "School",
    "University & academic English",
    "noun",
    "A2",
    "An examination administered at the end of an academic term.",
    "The lesson uses “final” in a carefully reviewed vocabulary context."
  ],
  [
    "finance",
    "/ˈfaɪnæns/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The management of money and credit and banking and investments.",
    "The lesson uses “finance” in a carefully reviewed vocabulary context."
  ],
  [
    "fire",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A fireplace in which a relatively small fire is burning.",
    "They sat by the fire and talked."
  ],
  [
    "firm",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "The members of a business organization that owns or operates one or more establishments.",
    "He worked for a brokerage house."
  ],
  [
    "fisherman",
    "/ˈfɪʃɚmən/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A man whose occupation is catching fish.",
    "The lesson uses “fisherman” in a carefully reviewed vocabulary context."
  ],
  [
    "fist",
    "Listen for pronunciation",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "A hand with the fingers clenched in the palm (as for hitting).",
    "The lesson uses “fist” in a carefully reviewed vocabulary context."
  ],
  [
    "fit",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A sudden uncontrollable attack.",
    "A fit of coughing."
  ],
  [
    "fitness",
    "/ˈfɪtnəs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Good physical condition; being in shape or in condition.",
    "The lesson uses “fitness” in a carefully reviewed vocabulary context."
  ],
  [
    "fixture",
    "/ˈfɪkstʃɚ/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "An object firmly fixed in place (especially in a household).",
    "The lesson uses “fixture” in a carefully reviewed vocabulary context."
  ],
  [
    "flag",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Emblem usually consisting of a rectangular piece of cloth of distinctive design.",
    "The lesson uses “flag” in a carefully reviewed vocabulary context."
  ],
  [
    "flash",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A lamp for providing momentary light to take a photograph.",
    "The lesson uses “flash” in a carefully reviewed vocabulary context."
  ],
  [
    "flavour",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The taste experience when a savoury condiment is taken into the mouth.",
    "The lesson uses “flavour” in a carefully reviewed vocabulary context."
  ],
  [
    "fleet",
    "/fliːt/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A group of steamships operating together under the same ownership.",
    "The lesson uses “fleet” in a carefully reviewed vocabulary context."
  ],
  [
    "flesh",
    "/flɛʃ/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "The soft tissue of the body of a vertebrate: mainly muscle tissue and fat.",
    "The lesson uses “flesh” in a carefully reviewed vocabulary context."
  ],
  [
    "flock",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A group of sheep or goats.",
    "The lesson uses “flock” in a carefully reviewed vocabulary context."
  ],
  [
    "flood",
    "/flʌd/",
    "Nature",
    "Natural phenomena",
    "noun",
    "A2",
    "The rising of a body of water and its overflowing onto normally dry land.",
    "Plains fertilized by annual inundations."
  ],
  [
    "flu",
    "/fluː/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "A1",
    "An acute febrile highly contagious viral disease.",
    "The lesson uses “flu” in a carefully reviewed vocabulary context."
  ],
  [
    "fluctuation",
    "/flʌktʃuːˈeɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The quality of being unsteady and subject to changes.",
    "He kept a record of price fluctuations."
  ],
  [
    "fluid",
    "/ˈfluːɪd/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Continuous amorphous matter that tends to flow and to conform to the outline of its container: a liquid or a gas.",
    "The lesson uses “fluid” in a carefully reviewed vocabulary context."
  ],
  [
    "fly",
    "Listen for pronunciation",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "Two-winged insects characterized by active flight.",
    "The lesson uses “fly” in a carefully reviewed vocabulary context."
  ],
  [
    "fold",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "An angular or rounded shape made by folding.",
    "A fold in the napkin."
  ],
  [
    "folk",
    "/fəʊk/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "The traditional and typically anonymous music that is an expression of the life of people in a community.",
    "The lesson uses “folk” in a carefully reviewed vocabulary context."
  ],
  [
    "folklore",
    "/ˈfəʊk.lɔː/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The unwritten lore (stories and proverbs and riddles and songs) of a culture.",
    "The lesson uses “folklore” in a carefully reviewed vocabulary context."
  ],
  [
    "food",
    "/fuːd/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Any substance that can be metabolized by an animal to give energy and build tissue.",
    "The lesson uses “food” in a carefully reviewed vocabulary context."
  ],
  [
    "fool",
    "/fuːl/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A person who lacks good judgment.",
    "The lesson uses “fool” in a carefully reviewed vocabulary context."
  ],
  [
    "foot",
    "/fʊt/",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "The part of the leg of a human being below the ankle joint.",
    "Armored from head to foot."
  ],
  [
    "force",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "An act of aggression (as one against a person who resists).",
    "He may accomplish by craft in the long run what he cannot do by force and violence in the short one."
  ],
  [
    "forecast",
    "/ˈfɔɹkæst/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A prediction about how something (as the weather) will develop.",
    "The lesson uses “forecast” in a carefully reviewed vocabulary context."
  ],
  [
    "forehead",
    "/ˈfɔːhɛd/",
    "Health",
    "Body & anatomy",
    "noun",
    "B1",
    "The part of the face above the eyes.",
    "The lesson uses “forehead” in a carefully reviewed vocabulary context."
  ],
  [
    "foreigner",
    "/ˈfɒɹ.ɪ.nə(ɹ)/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person who comes from a foreign country; someone who does not owe allegiance to your country.",
    "The lesson uses “foreigner” in a carefully reviewed vocabulary context."
  ],
  [
    "forestry",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The science of planting and caring for forests and the management of growing timber.",
    "The lesson uses “forestry” in a carefully reviewed vocabulary context."
  ],
  [
    "form",
    "/fɔːm/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "A perceptual structure.",
    "The composition presents problems for students of musical form."
  ],
  [
    "format",
    "/ˈfɔː(ɹ).mæt/",
    "Technology",
    "IT & computers",
    "noun",
    "A2",
    "The organization of information according to preset specifications (usually for computer processing).",
    "The lesson uses “format” in a carefully reviewed vocabulary context."
  ],
  [
    "formation",
    "/fɔɹ.ˈmeɪ.ʃən/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "A particular spatial arrangement.",
    "The lesson uses “formation” in a carefully reviewed vocabulary context."
  ],
  [
    "formula",
    "/ˈfɔː.mjʊ.lə/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A conventionalized statement expressing some fundamental principle.",
    "The lesson uses “formula” in a carefully reviewed vocabulary context."
  ],
  [
    "fortune",
    "/ˈfɔːtʃuːn/",
    "Nature",
    "Natural phenomena",
    "noun",
    "B1",
    "An unknown and unpredictable phenomenon that leads to a favorable outcome.",
    "It was as if fortune guided his hand."
  ],
  [
    "forum",
    "/ˈfɔːɹəm/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A public meeting or assembly for open discussion.",
    "The lesson uses “forum” in a carefully reviewed vocabulary context."
  ],
  [
    "foundation",
    "/faʊnˈdeɪʃən/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "B2",
    "An institution supported by an endowment.",
    "The lesson uses “foundation” in a carefully reviewed vocabulary context."
  ],
  [
    "fountain",
    "/ˈfaʊn.tn̩/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A plumbing fixture that provides a flow of water.",
    "The lesson uses “fountain” in a carefully reviewed vocabulary context."
  ],
  [
    "fraction",
    "/ˈfɹæk.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The quotient of two rational numbers.",
    "The lesson uses “fraction” in a carefully reviewed vocabulary context."
  ],
  [
    "fragment",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A piece broken off or cut off of something else.",
    "A fragment of rock."
  ],
  [
    "frame",
    "/fɹeɪm/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "The hard structure (bones and cartilages) that provides a frame for the body of an animal.",
    "The lesson uses “frame” in a carefully reviewed vocabulary context."
  ],
  [
    "franchise",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A business established or operated under an authorization to sell or distribute a company's goods or services in a particular area.",
    "The lesson uses “franchise” in a carefully reviewed vocabulary context."
  ],
  [
    "fraud",
    "/fɹɔːd/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "Something intended to deceive; deliberate trickery intended to gain an advantage.",
    "The lesson uses “fraud” in a carefully reviewed vocabulary context."
  ],
  [
    "freckle",
    "/ˈfɹɛkəl/",
    "Health",
    "Body & anatomy",
    "noun",
    "B1",
    "A small brownish spot (of the pigment melanin) on the skin.",
    "The lesson uses “freckle” in a carefully reviewed vocabulary context."
  ],
  [
    "freedom",
    "/ˈfɹiːdəm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The condition of being free; the power to act or speak or think without externally imposed restraints.",
    "The lesson uses “freedom” in a carefully reviewed vocabulary context."
  ],
  [
    "freight",
    "/fɹeɪt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Transporting goods commercially at rates cheaper than express rates.",
    "The lesson uses “freight” in a carefully reviewed vocabulary context."
  ],
  [
    "frequency",
    "/ˈfɹiːkwənsi/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "B2",
    "The number of occurrences within a given time period.",
    "The frequency of modulation was 40 cycles per second."
  ],
  [
    "freshman",
    "/ˈfɹɛʃmən/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A first-year undergraduate.",
    "The lesson uses “freshman” in a carefully reviewed vocabulary context."
  ],
  [
    "fridge",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A refrigerator in which the coolant is pumped around by an electric motor.",
    "The lesson uses “fridge” in a carefully reviewed vocabulary context."
  ],
  [
    "friendship",
    "/ˈfɹɛndʃɪp/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The state of being friends (or friendly).",
    "The lesson uses “friendship” in a carefully reviewed vocabulary context."
  ],
  [
    "front",
    "/fɹʌnt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "The side that is seen or that goes first.",
    "The lesson uses “front” in a carefully reviewed vocabulary context."
  ],
  [
    "fruit",
    "/fɹuːt/",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A2",
    "The ripened reproductive body of a seed plant.",
    "The lesson uses “fruit” in a carefully reviewed vocabulary context."
  ],
  [
    "frustration",
    "/fɹʌsˈtɹeɪʃən/",
    "People",
    "Feelings & emotions",
    "noun",
    "B2",
    "A feeling of annoyance at being hindered or criticized.",
    "Her constant complaints were the main source of his frustration."
  ],
  [
    "fun",
    "/fʌn/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "Activities that are enjoyable or amusing.",
    "I do it for the fun of it."
  ],
  [
    "function",
    "/ˈfʌŋ(k)ʃən/",
    "Community",
    "Events",
    "noun",
    "B1",
    "A formal or official social gathering or ceremony of people.",
    "The party was quite an affair."
  ],
  [
    "fund",
    "/ˈfʌnd/",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "A reserve of money set aside for some purpose.",
    "The lesson uses “fund” in a carefully reviewed vocabulary context."
  ],
  [
    "funeral",
    "/ˈfjuːnəɹəl/",
    "Community",
    "Events",
    "noun",
    "B1",
    "A ceremony at which a dead person is buried or cremated.",
    "Hundreds of people attended his funeral."
  ],
  [
    "fur",
    "/fɜː(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The dressed hairy coat of a mammal.",
    "The lesson uses “fur” in a carefully reviewed vocabulary context."
  ],
  [
    "furniture",
    "/ˈfɜːnɪtʃə/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "Furnishings that make a room or other area ready for occupancy.",
    "They had too much furniture for the small apartment."
  ],
  [
    "fuss",
    "/fʌs/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "A rapid active commotion.",
    "The lesson uses “fuss” in a carefully reviewed vocabulary context."
  ],
  [
    "future",
    "/ˈfjuːt͡ʃə/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A2",
    "The time yet to come.",
    "The lesson uses “future” in a carefully reviewed vocabulary context."
  ],
  [
    "galaxy",
    "/ˈɡaləksi/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "(astronomy) a collection of star systems; any of the billions of systems each having many stars and nebulae and dust.",
    "‘extragalactic nebula’ is a former name for ‘galaxy’."
  ],
  [
    "gallery",
    "/ˈɡæləɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A room or series of rooms where works of art are exhibited.",
    "The lesson uses “gallery” in a carefully reviewed vocabulary context."
  ],
  [
    "gallon",
    "/ˈɡælən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "United States liquid unit equal to 4 quarts or 3.785 liters.",
    "The lesson uses “gallon” in a carefully reviewed vocabulary context."
  ],
  [
    "game",
    "Listen for pronunciation",
    "Sports",
    "Sports vocabulary",
    "noun",
    "A1",
    "A contest with rules to determine a winner.",
    "You need four people to play this game."
  ],
  [
    "gap",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A narrow opening.",
    "He opened the window a crack."
  ],
  [
    "garbage",
    "/ˈɡɑɹbɪd͡ʒ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Food that is discarded (as from a kitchen).",
    "The lesson uses “garbage” in a carefully reviewed vocabulary context."
  ],
  [
    "gas",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A pedal that controls the throttle valve.",
    "He stepped on the gas."
  ],
  [
    "gear",
    "/ɡɪə(ɹ)/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A mechanism for transmitting motion for some specific purpose (as the steering gear of a vehicle).",
    "The lesson uses “gear” in a carefully reviewed vocabulary context."
  ],
  [
    "gene",
    "/dʒiːn/",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "(genetics) a segment of DNA that is involved in producing a polypeptide chain; it can include regions preceding and following the coding DNA as well as introns between the exons; it is considered a unit of heredity.",
    "Genes were formerly called factors."
  ],
  [
    "genius",
    "/ˈdʒin.jəs/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "Unusual mental ability.",
    "The lesson uses “genius” in a carefully reviewed vocabulary context."
  ],
  [
    "gentleman",
    "/ˈdʒɛn.təl.mən/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A man of refinement.",
    "The lesson uses “gentleman” in a carefully reviewed vocabulary context."
  ],
  [
    "ghost",
    "/ɡəʊst/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "The visible disembodied soul of a dead person.",
    "The lesson uses “ghost” in a carefully reviewed vocabulary context."
  ],
  [
    "giant",
    "/ˈdʒaɪ.ənt/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A very large person; impressive in size or qualities.",
    "The lesson uses “giant” in a carefully reviewed vocabulary context."
  ],
  [
    "gift",
    "/ɡɪft/",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "Something acquired without compensation.",
    "The lesson uses “gift” in a carefully reviewed vocabulary context."
  ],
  [
    "girl",
    "/ɡɜːl/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A girl or young woman with whom a man is romantically involved.",
    "His girlfriend kicked him out."
  ],
  [
    "glacier",
    "/ˈɡlæs.jə/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A slowly moving mass of ice.",
    "The lesson uses “glacier” in a carefully reviewed vocabulary context."
  ],
  [
    "glance",
    "/ɡlɑːns/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "A quick look.",
    "The lesson uses “glance” in a carefully reviewed vocabulary context."
  ],
  [
    "glasses",
    "/ˈɡlæsɪz/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "(plural) optical instrument consisting of a frame that holds a pair of lenses for correcting defective vision.",
    "The lesson uses “glasses” in a carefully reviewed vocabulary context."
  ],
  [
    "glimpse",
    "/ɡlɪmps/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A brief or incomplete view.",
    "From the window he could catch a glimpse of the lake."
  ],
  [
    "gloom",
    "/ɡluːm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "An atmosphere of depression and melancholy.",
    "Gloom pervaded the office."
  ],
  [
    "glory",
    "/ˈɡlɔːɹi/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A state of high honor.",
    "He valued glory above life itself."
  ],
  [
    "glow",
    "/ɡləʊ/",
    "Nature",
    "Natural phenomena",
    "noun",
    "A1",
    "A steady even light without flames.",
    "The lesson uses “glow” in a carefully reviewed vocabulary context."
  ],
  [
    "goalkeeper",
    "Listen for pronunciation",
    "Sports",
    "Sports vocabulary",
    "noun",
    "B2",
    "The soccer or hockey player assigned to protect the goal.",
    "The lesson uses “goalkeeper” in a carefully reviewed vocabulary context."
  ],
  [
    "god",
    "/ɡɒd/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "Any supernatural being worshipped as controlling some part of the world or some aspect of life or who is the personification of a force.",
    "The lesson uses “god” in a carefully reviewed vocabulary context."
  ],
  [
    "gold",
    "/ɡəʊld/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A soft yellow malleable ductile (trivalent and univalent) metallic element; occurs mainly as nuggets in rocks and alluvial deposits; does not react with most chemicals but is attacked by chlorine and aqua regia.",
    "The lesson uses “gold” in a carefully reviewed vocabulary context."
  ],
  [
    "government",
    "/ˈɡʌvə(n)mənt/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "The organization that is the governing authority of a political unit.",
    "The government reduced taxes."
  ],
  [
    "governor",
    "/ˈɡʌvəɹnəɹ/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "The head of a state government.",
    "The lesson uses “governor” in a carefully reviewed vocabulary context."
  ],
  [
    "gown",
    "/ɡaʊn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Outerwear consisting of a long flowing garment used for official or ceremonial occasions.",
    "The lesson uses “gown” in a carefully reviewed vocabulary context."
  ],
  [
    "grace",
    "/ɡɹeɪs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Elegance and beauty of movement or expression.",
    "A beautiful figure which she used in subtle movements of unparalleled grace."
  ],
  [
    "graduate",
    "/ˈɡɹædjuət/",
    "School",
    "University & academic English",
    "noun",
    "B1",
    "A person who has received a degree from a school (high school or college or university).",
    "The lesson uses “graduate” in a carefully reviewed vocabulary context."
  ],
  [
    "grain",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "Foodstuff prepared from the starchy grains of cereal grasses.",
    "The lesson uses “grain” in a carefully reviewed vocabulary context."
  ],
  [
    "grant",
    "/ɡɹɑːnt/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "Any monetary aid.",
    "The lesson uses “grant” in a carefully reviewed vocabulary context."
  ],
  [
    "graph",
    "/ɡɹɑːf/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A visual representation of the relations between certain quantities, represented as points, plotted with reference to a set of axes.",
    "The lesson uses “graph” in a carefully reviewed vocabulary context."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch021 = createVocabularyBatch({
  id: "batch-021",
  source,
  entries,
})

export const batch021Metadata = {
  id: "batch-021",
  title: "Open English WordNet core vocabulary 1201–1300",
  addedWords: batch021.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
