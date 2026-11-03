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
    "“fig” means fleshy sweet pear-shaped yellowish or purple multiple fruit eaten fresh or preserved or dried."
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
    "“filter” means device that removes something from whatever passes through it."
  ],
  [
    "final",
    "/ˈfaɪ.nəl/",
    "School",
    "University & academic English",
    "noun",
    "A2",
    "An examination administered at the end of an academic term.",
    "“final” means an examination administered at the end of an academic term."
  ],
  [
    "finance",
    "/ˈfaɪnæns/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The management of money and credit and banking and investments.",
    "“finance” means the management of money and credit and banking and investments."
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
    "“fisherman” means a man whose occupation is catching fish."
  ],
  [
    "fist",
    "Listen for pronunciation",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "A hand with the fingers clenched in the palm (as for hitting).",
    "“fist” means a hand with the fingers clenched in the palm (as for hitting)."
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
    "“fitness” means good physical condition; being in shape or in condition."
  ],
  [
    "fixture",
    "/ˈfɪkstʃɚ/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "An object firmly fixed in place (especially in a household).",
    "“fixture” means an object firmly fixed in place (especially in a household)."
  ],
  [
    "flag",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Emblem usually consisting of a rectangular piece of cloth of distinctive design.",
    "“flag” means emblem usually consisting of a rectangular piece of cloth of distinctive design."
  ],
  [
    "flash",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A lamp for providing momentary light to take a photograph.",
    "“flash” means a lamp for providing momentary light to take a photograph."
  ],
  [
    "flavour",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The taste experience when a savoury condiment is taken into the mouth.",
    "“flavour” means the taste experience when a savoury condiment is taken into the mouth."
  ],
  [
    "fleet",
    "/fliːt/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A group of steamships operating together under the same ownership.",
    "“fleet” means a group of steamships operating together under the same ownership."
  ],
  [
    "flesh",
    "/flɛʃ/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "The soft tissue of the body of a vertebrate: mainly muscle tissue and fat.",
    "“flesh” means the soft tissue of the body of a vertebrate: mainly muscle tissue and fat."
  ],
  [
    "flock",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A group of sheep or goats.",
    "“flock” means a group of sheep or goats."
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
    "“flu” means an acute febrile highly contagious viral disease."
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
    "“fluid” means continuous amorphous matter that tends to flow and to conform to the outline of its container: a liquid or a gas."
  ],
  [
    "fly",
    "Listen for pronunciation",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "Two-winged insects characterized by active flight.",
    "“fly” means two-winged insects characterized by active flight."
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
    "“folk” means the traditional and typically anonymous music that is an expression of the life of people in a community."
  ],
  [
    "folklore",
    "/ˈfəʊk.lɔː/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The unwritten lore (stories and proverbs and riddles and songs) of a culture.",
    "“folklore” means the unwritten lore (stories and proverbs and riddles and songs) of a culture."
  ],
  [
    "food",
    "/fuːd/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Any substance that can be metabolized by an animal to give energy and build tissue.",
    "“food” means any substance that can be metabolized by an animal to give energy and build tissue."
  ],
  [
    "fool",
    "/fuːl/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A person who lacks good judgment.",
    "“fool” means a person who lacks good judgment."
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
    "“forecast” means a prediction about how something (as the weather) will develop."
  ],
  [
    "forehead",
    "/ˈfɔːhɛd/",
    "Health",
    "Body & anatomy",
    "noun",
    "B1",
    "The part of the face above the eyes.",
    "“forehead” means the part of the face above the eyes."
  ],
  [
    "foreigner",
    "/ˈfɒɹ.ɪ.nə(ɹ)/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person who comes from a foreign country; someone who does not owe allegiance to your country.",
    "“foreigner” means a person who comes from a foreign country; someone who does not owe allegiance to your country."
  ],
  [
    "forestry",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The science of planting and caring for forests and the management of growing timber.",
    "“forestry” means the science of planting and caring for forests and the management of growing timber."
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
    "“format” means the organization of information according to preset specifications (usually for computer processing)."
  ],
  [
    "formation",
    "/fɔɹ.ˈmeɪ.ʃən/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "A particular spatial arrangement.",
    "“formation” means a particular spatial arrangement."
  ],
  [
    "formula",
    "/ˈfɔː.mjʊ.lə/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A conventionalized statement expressing some fundamental principle.",
    "“formula” means a conventionalized statement expressing some fundamental principle."
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
    "“forum” means a public meeting or assembly for open discussion."
  ],
  [
    "foundation",
    "/faʊnˈdeɪʃən/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "B2",
    "An institution supported by an endowment.",
    "“foundation” means an institution supported by an endowment."
  ],
  [
    "fountain",
    "/ˈfaʊn.tn̩/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A plumbing fixture that provides a flow of water.",
    "“fountain” means a plumbing fixture that provides a flow of water."
  ],
  [
    "fraction",
    "/ˈfɹæk.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The quotient of two rational numbers.",
    "“fraction” means the quotient of two rational numbers."
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
    "“frame” means the hard structure (bones and cartilages) that provides a frame for the body of an animal."
  ],
  [
    "franchise",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A business established or operated under an authorization to sell or distribute a company's goods or services in a particular area.",
    "“franchise” means a business established or operated under an authorization to sell or distribute a company's goods or services in a particular area."
  ],
  [
    "fraud",
    "/fɹɔːd/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "Something intended to deceive; deliberate trickery intended to gain an advantage.",
    "“fraud” means something intended to deceive; deliberate trickery intended to gain an advantage."
  ],
  [
    "freckle",
    "/ˈfɹɛkəl/",
    "Health",
    "Body & anatomy",
    "noun",
    "B1",
    "A small brownish spot (of the pigment melanin) on the skin.",
    "“freckle” means a small brownish spot (of the pigment melanin) on the skin."
  ],
  [
    "freedom",
    "/ˈfɹiːdəm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The condition of being free; the power to act or speak or think without externally imposed restraints.",
    "“freedom” means the condition of being free; the power to act or speak or think without externally imposed restraints."
  ],
  [
    "freight",
    "/fɹeɪt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Transporting goods commercially at rates cheaper than express rates.",
    "“freight” means transporting goods commercially at rates cheaper than express rates."
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
    "“freshman” means a first-year undergraduate."
  ],
  [
    "fridge",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A refrigerator in which the coolant is pumped around by an electric motor.",
    "“fridge” means a refrigerator in which the coolant is pumped around by an electric motor."
  ],
  [
    "friendship",
    "/ˈfɹɛndʃɪp/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The state of being friends (or friendly).",
    "“friendship” means the state of being friends (or friendly)."
  ],
  [
    "front",
    "/fɹʌnt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "The side that is seen or that goes first.",
    "“front” means the side that is seen or that goes first."
  ],
  [
    "fruit",
    "/fɹuːt/",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A2",
    "The ripened reproductive body of a seed plant.",
    "“fruit” means the ripened reproductive body of a seed plant."
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
    "“fund” means a reserve of money set aside for some purpose."
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
    "“fur” means the dressed hairy coat of a mammal."
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
    "“fuss” means a rapid active commotion."
  ],
  [
    "future",
    "/ˈfjuːt͡ʃə/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A2",
    "The time yet to come.",
    "“future” means the time yet to come."
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
    "“gallery” means a room or series of rooms where works of art are exhibited."
  ],
  [
    "gallon",
    "/ˈɡælən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "United States liquid unit equal to 4 quarts or 3.785 liters.",
    "“gallon” means united States liquid unit equal to 4 quarts or 3.785 liters."
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
    "“garbage” means food that is discarded (as from a kitchen)."
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
    "“gear” means a mechanism for transmitting motion for some specific purpose (as the steering gear of a vehicle)."
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
    "“genius” means unusual mental ability."
  ],
  [
    "gentleman",
    "/ˈdʒɛn.təl.mən/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A man of refinement.",
    "“gentleman” means a man of refinement."
  ],
  [
    "ghost",
    "/ɡəʊst/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "The visible disembodied soul of a dead person.",
    "“ghost” means the visible disembodied soul of a dead person."
  ],
  [
    "giant",
    "/ˈdʒaɪ.ənt/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A very large person; impressive in size or qualities.",
    "“giant” means a very large person; impressive in size or qualities."
  ],
  [
    "gift",
    "/ɡɪft/",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "Something acquired without compensation.",
    "“gift” means something acquired without compensation."
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
    "“glacier” means a slowly moving mass of ice."
  ],
  [
    "glance",
    "/ɡlɑːns/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "A quick look.",
    "“glance” means a quick look."
  ],
  [
    "glasses",
    "/ˈɡlæsɪz/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "(plural) optical instrument consisting of a frame that holds a pair of lenses for correcting defective vision.",
    "“glasses” means (plural) optical instrument consisting of a frame that holds a pair of lenses for correcting defective vision."
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
    "“glow” means a steady even light without flames."
  ],
  [
    "goalkeeper",
    "Listen for pronunciation",
    "Sports",
    "Sports vocabulary",
    "noun",
    "B2",
    "The soccer or hockey player assigned to protect the goal.",
    "“goalkeeper” means the soccer or hockey player assigned to protect the goal."
  ],
  [
    "god",
    "/ɡɒd/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "Any supernatural being worshipped as controlling some part of the world or some aspect of life or who is the personification of a force.",
    "“god” means any supernatural being worshipped as controlling some part of the world or some aspect of life or who is the personification of a force."
  ],
  [
    "gold",
    "/ɡəʊld/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A soft yellow malleable ductile (trivalent and univalent) metallic element; occurs mainly as nuggets in rocks and alluvial deposits; does not react with most chemicals but is attacked by chlorine and aqua regia.",
    "“gold” means a soft yellow malleable ductile (trivalent and univalent) metallic element; occurs mainly as nuggets in rocks and alluvial deposits; does not react with most chemicals but is attacked by chlorine and aqua regia."
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
    "“governor” means the head of a state government."
  ],
  [
    "gown",
    "/ɡaʊn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Outerwear consisting of a long flowing garment used for official or ceremonial occasions.",
    "“gown” means outerwear consisting of a long flowing garment used for official or ceremonial occasions."
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
    "“graduate” means a person who has received a degree from a school (high school or college or university)."
  ],
  [
    "grain",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "Foodstuff prepared from the starchy grains of cereal grasses.",
    "“grain” means foodstuff prepared from the starchy grains of cereal grasses."
  ],
  [
    "grant",
    "/ɡɹɑːnt/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "Any monetary aid.",
    "“grant” means any monetary aid."
  ],
  [
    "graph",
    "/ɡɹɑːf/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A visual representation of the relations between certain quantities, represented as points, plotted with reference to a set of axes.",
    "“graph” means a visual representation of the relations between certain quantities, represented as points, plotted with reference to a set of axes."
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
