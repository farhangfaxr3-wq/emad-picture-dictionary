import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "belief",
    "/bɪˈliːf/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "Any cognitive content held as true.",
    "The lesson uses “belief” in a carefully reviewed vocabulary context."
  ],
  [
    "bell",
    "/bɛl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A push button at an outer door that gives a ringing or buzzing signal when pushed.",
    "The lesson uses “bell” in a carefully reviewed vocabulary context."
  ],
  [
    "belly",
    "/ˈbɛli/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "The region of the body of a vertebrate between the thorax and the pelvis.",
    "The lesson uses “belly” in a carefully reviewed vocabulary context."
  ],
  [
    "beneficiary",
    "/ˌbɛn.ɪˈfɪʃ.əɹ.i/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "The recipient of funds or other benefits.",
    "The lesson uses “beneficiary” in a carefully reviewed vocabulary context."
  ],
  [
    "benefit",
    "/ˈbɛn.ɪ.fɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Something that aids or promotes well-being.",
    "For the benefit of all."
  ],
  [
    "berry",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "Any of numerous small and pulpy edible fruits; used as desserts or in making jams and jellies and preserves.",
    "The lesson uses “berry” in a carefully reviewed vocabulary context."
  ],
  [
    "bet",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "The act of gambling.",
    "He did it on a bet."
  ],
  [
    "bible",
    "/ˈbaɪbəl/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "The sacred writings of the Christian religions.",
    "He went to carry the Word to the heathen."
  ],
  [
    "bike",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A motor vehicle with two wheels and a strong frame.",
    "The lesson uses “bike” in a carefully reviewed vocabulary context."
  ],
  [
    "bill",
    "Listen for pronunciation",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "Horny projecting mouth of a bird.",
    "The lesson uses “bill” in a carefully reviewed vocabulary context."
  ],
  [
    "bin",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A container; usually has a lid.",
    "The lesson uses “bin” in a carefully reviewed vocabulary context."
  ],
  [
    "biography",
    "/baɪˈɒɡɹəfi/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "An account of the series of events making up a person's life.",
    "The lesson uses “biography” in a carefully reviewed vocabulary context."
  ],
  [
    "biscuit",
    "/ˈbɪskɪt/",
    "Food",
    "Food & cooking",
    "noun",
    "B1",
    "Any of various small flat sweet cakes.",
    "The lesson uses “biscuit” in a carefully reviewed vocabulary context."
  ],
  [
    "bishop",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A senior member of the Christian clergy having spiritual and administrative authority; appointed in Christian churches to oversee priests or ministers; considered in some churches to be successors of the twelve Apostles of Christ.",
    "The lesson uses “bishop” in a carefully reviewed vocabulary context."
  ],
  [
    "bite",
    "/baɪt/",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "A light informal meal.",
    "The lesson uses “bite” in a carefully reviewed vocabulary context."
  ],
  [
    "blackmail",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Extortion of money by threats to divulge discrediting information.",
    "The lesson uses “blackmail” in a carefully reviewed vocabulary context."
  ],
  [
    "blade",
    "/bleɪd/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "The flat part of a tool or weapon that (usually) has a cutting edge.",
    "The lesson uses “blade” in a carefully reviewed vocabulary context."
  ],
  [
    "blast",
    "Listen for pronunciation",
    "Community",
    "Events",
    "noun",
    "A2",
    "An explosion (as of dynamite).",
    "The lesson uses “blast” in a carefully reviewed vocabulary context."
  ],
  [
    "block",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "A rectangular area in a city surrounded by streets and usually containing several buildings.",
    "He lives in the next block."
  ],
  [
    "blood",
    "/blʌd/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "The fluid (red in vertebrates) that is pumped through the body by the heart and contains plasma, blood cells, and platelets.",
    "Blood carries oxygen and nutrients to the tissues and carries away waste products."
  ],
  [
    "bloodshed",
    "/ˈblʌdˌʃɛd/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The shedding of blood resulting in murder.",
    "He avenged the bloodshed of his kinsmen."
  ],
  [
    "blow",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "A powerful stroke with the fist or a weapon.",
    "A blow on the head."
  ],
  [
    "blue",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Blue color or pigment; resembling the color of the clear sky in the daytime.",
    "He had eyes of bright blue."
  ],
  [
    "board",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A flat portable surface (usually rectangular) designed for board games.",
    "He got out the board and set up the pieces."
  ],
  [
    "body",
    "/ˈbɒdi/",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "The entire physical structure of an organism (an animal, plant, or human being).",
    "He felt as if his whole body were on fire."
  ],
  [
    "bolt",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A screw that screws into a nut to form a fastener.",
    "The lesson uses “bolt” in a carefully reviewed vocabulary context."
  ],
  [
    "bomb",
    "/bɑm/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "An explosive device fused to explode under specific conditions.",
    "The lesson uses “bomb” in a carefully reviewed vocabulary context."
  ],
  [
    "bomber",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A military aircraft that drops bombs during flight.",
    "The lesson uses “bomber” in a carefully reviewed vocabulary context."
  ],
  [
    "bond",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A restraint that confines or restricts freedom (especially something used to tie down or restrain a prisoner).",
    "The lesson uses “bond” in a carefully reviewed vocabulary context."
  ],
  [
    "bone",
    "Listen for pronunciation",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "Rigid connective tissue that makes up the skeleton of vertebrates.",
    "The lesson uses “bone” in a carefully reviewed vocabulary context."
  ],
  [
    "boom",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A state of economic prosperity.",
    "The lesson uses “boom” in a carefully reviewed vocabulary context."
  ],
  [
    "border",
    "/ˈbɔədə/",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "A line that indicates a boundary.",
    "The lesson uses “border” in a carefully reviewed vocabulary context."
  ],
  [
    "bottle",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A glass or plastic vessel used for storing drinks or other liquids; typically cylindrical without handles and with a narrow neck that can be plugged or capped.",
    "The lesson uses “bottle” in a carefully reviewed vocabulary context."
  ],
  [
    "bottom",
    "/ˈbɒtəm/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A cargo ship.",
    "They did much of their overseas trade in foreign bottoms."
  ],
  [
    "bow",
    "/bəʊ/",
    "Home",
    "Objects & equipment",
    "adjective",
    "A1",
    "A weapon for shooting arrows, composed of a curved piece of resilient wood with a taut cord to propel the arrow.",
    "The lesson uses “bow” in a carefully reviewed vocabulary context."
  ],
  [
    "bowel",
    "/ˈbaʊ.əl/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "The part of the alimentary canal between the stomach and the anus.",
    "The lesson uses “bowel” in a carefully reviewed vocabulary context."
  ],
  [
    "box",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A (usually rectangular) container; may have a lid.",
    "He rummaged through a box of spare parts."
  ],
  [
    "boy",
    "/bɔɪ/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A youthful male person.",
    "The baby was a boy."
  ],
  [
    "bracket",
    "Listen for pronunciation",
    "Technology",
    "IT & computers",
    "noun",
    "B1",
    "Either of two punctuation marks (‘<’ or ‘>’) used in computer programming and sometimes used to enclose textual material.",
    "The lesson uses “bracket” in a carefully reviewed vocabulary context."
  ],
  [
    "brain",
    "/bɹeɪn/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "That part of the central nervous system that includes all the higher nervous centers; enclosed within the skull; continuous with the spinal cord.",
    "The lesson uses “brain” in a carefully reviewed vocabulary context."
  ],
  [
    "brand",
    "/bɹænd/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "A recognizable kind.",
    "There's a new brand of hero in the movies now."
  ],
  [
    "break",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Breaking of hard tissue such as bone.",
    "The break seems to have been caused by a fall."
  ],
  [
    "breakdown",
    "/ˈbɹeɪkdaʊn/",
    "Community",
    "Events",
    "noun",
    "B2",
    "A cessation of normal operation.",
    "There was a power breakdown."
  ],
  [
    "breast",
    "/bɹɛst/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "Either of two soft fleshy milk-secreting glandular organs on the chest of a woman.",
    "The lesson uses “breast” in a carefully reviewed vocabulary context."
  ],
  [
    "breeze",
    "Listen for pronunciation",
    "Nature",
    "Natural phenomena",
    "noun",
    "A2",
    "A slight wind (usually refreshing).",
    "The breeze was cooled by the lake."
  ],
  [
    "brewery",
    "/ˈbɹuːəɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A plant where beer is brewed by fermentation.",
    "The lesson uses “brewery” in a carefully reviewed vocabulary context."
  ],
  [
    "brick",
    "/bɹɪk/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "Rectangular block of clay baked by the sun or in a kiln; used as a building or paving material.",
    "The lesson uses “brick” in a carefully reviewed vocabulary context."
  ],
  [
    "bride",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A woman participant in her own marriage ceremony.",
    "The lesson uses “bride” in a carefully reviewed vocabulary context."
  ],
  [
    "broadcast",
    "/ˈbɹɔːdkɑːst/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "Message that is transmitted by radio or television.",
    "The lesson uses “broadcast” in a carefully reviewed vocabulary context."
  ],
  [
    "bronze",
    "/bɹɒnz/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A sculpture made of bronze.",
    "The lesson uses “bronze” in a carefully reviewed vocabulary context."
  ],
  [
    "brush",
    "/bɹʌʃ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "An implement that has hairs or bristles firmly set into a handle.",
    "The lesson uses “brush” in a carefully reviewed vocabulary context."
  ],
  [
    "bubble",
    "/ˈbʌb.əl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A hollow globule of gas (e.g., air or carbon dioxide).",
    "The lesson uses “bubble” in a carefully reviewed vocabulary context."
  ],
  [
    "buffet",
    "/ˈbʊfeɪ/",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "A meal set out on a buffet at which guests help themselves.",
    "The lesson uses “buffet” in a carefully reviewed vocabulary context."
  ],
  [
    "bulb",
    "/bʌlb/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Electric lamp consisting of a transparent or translucent glass housing containing a wire filament (usually tungsten) that emits light when heated by electricity.",
    "The lesson uses “bulb” in a carefully reviewed vocabulary context."
  ],
  [
    "bullet",
    "/ˈbʊl.ɪt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A projectile that is fired from a gun.",
    "The lesson uses “bullet” in a carefully reviewed vocabulary context."
  ],
  [
    "bulletin",
    "/ˈbʊlɪtɪn/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A brief report (especially an official statement issued for immediate publication or broadcast).",
    "The lesson uses “bulletin” in a carefully reviewed vocabulary context."
  ],
  [
    "bundle",
    "/ˈbʌnd(ə)l/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A package of several things tied together for carrying or storing.",
    "The lesson uses “bundle” in a carefully reviewed vocabulary context."
  ],
  [
    "bureaucracy",
    "/bjʊəˈɹɒkɹəsi/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "Any organization in which action is obstructed by insistence on unnecessary procedures and red tape.",
    "The lesson uses “bureaucracy” in a carefully reviewed vocabulary context."
  ],
  [
    "burial",
    "/ˈbɛɹɪəl/",
    "Community",
    "Events",
    "noun",
    "A2",
    "The ritual placing of a corpse in a grave.",
    "The lesson uses “burial” in a carefully reviewed vocabulary context."
  ],
  [
    "burn",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "An injury caused by exposure to heat or chemicals or radiation.",
    "The lesson uses “burn” in a carefully reviewed vocabulary context."
  ],
  [
    "bush",
    "Listen for pronunciation",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A1",
    "A low woody perennial plant usually having several major stems.",
    "The lesson uses “bush” in a carefully reviewed vocabulary context."
  ],
  [
    "business",
    "/ˈbɪz.nɪs/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The principal activity in your life that you do to earn money.",
    "He's not in my line of business."
  ],
  [
    "businessman",
    "/ˈbɪznəsmən/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A man engaged in commercial or industrial business.",
    "The lesson uses “businessman” in a carefully reviewed vocabulary context."
  ],
  [
    "cabin",
    "/ˈkæbɪn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "The enclosed compartment of an aircraft or spacecraft where passengers are carried.",
    "The lesson uses “cabin” in a carefully reviewed vocabulary context."
  ],
  [
    "cable",
    "/keɪ.bl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A very strong thick rope made of twisted hemp or steel wire.",
    "The lesson uses “cable” in a carefully reviewed vocabulary context."
  ],
  [
    "cage",
    "/keɪdʒ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "An enclosure made or wire or metal bars in which birds or animals can be kept.",
    "The lesson uses “cage” in a carefully reviewed vocabulary context."
  ],
  [
    "calculation",
    "/kælkjuˈleɪʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "Problem solving that involves numbers or quantities.",
    "The lesson uses “calculation” in a carefully reviewed vocabulary context."
  ],
  [
    "calf",
    "Listen for pronunciation",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "Young of domestic cattle.",
    "The lesson uses “calf” in a carefully reviewed vocabulary context."
  ],
  [
    "call",
    "/kɔːl/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "A brief social visit.",
    "Senior professors' wives no longer make afternoon calls on newcomers."
  ],
  [
    "calorie",
    "/ˈkæləɹi/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A unit of heat equal to the amount of heat required to raise the temperature of one kilogram of water by one degree at one atmosphere pressure; used by nutritionists to characterize the energy-producing potential in food.",
    "The lesson uses “calorie” in a carefully reviewed vocabulary context."
  ],
  [
    "camp",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A penal institution (often for forced labor).",
    "China has many camps for political prisoners."
  ],
  [
    "campaign",
    "/kæmˈpeɪn/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Several related operations aimed at achieving a particular goal (usually within geographical and temporal constraints).",
    "The lesson uses “campaign” in a carefully reviewed vocabulary context."
  ],
  [
    "cancer",
    "/ˈkænsə/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Any malignant growth or tumor caused by abnormal and uncontrolled cell division; it may spread to other parts of the body through the lymphatic system or the blood stream.",
    "The lesson uses “cancer” in a carefully reviewed vocabulary context."
  ],
  [
    "candidate",
    "/ˈkæn.dɪdət/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A politician who is running for public office.",
    "The lesson uses “candidate” in a carefully reviewed vocabulary context."
  ],
  [
    "candle",
    "/ˈkændəl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Stick of wax with a wick in the middle.",
    "The lesson uses “candle” in a carefully reviewed vocabulary context."
  ],
  [
    "cane",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A stick that people can lean on to help them walk.",
    "The lesson uses “cane” in a carefully reviewed vocabulary context."
  ],
  [
    "canvas",
    "/ˈkæn.vəs/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A heavy, closely woven fabric.",
    "The lesson uses “canvas” in a carefully reviewed vocabulary context."
  ],
  [
    "capital",
    "/ˈkæ.pɪ.təl/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "One of the large alphabetic characters used as the first letter in writing or printing proper names and sometimes for emphasis.",
    "Printers once kept the type for capitals and for small letters in separate cases; capitals were kept in the upper half of the type case and so became known as upper-case letters."
  ],
  [
    "capitalism",
    "/ˈkapɪt(ə)lɪz(ə)m/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "An economic system based on private ownership of capital.",
    "The lesson uses “capitalism” in a carefully reviewed vocabulary context."
  ],
  [
    "carbon",
    "/ˈkɑɹbən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "An abundant nonmetallic tetravalent element occurring in three allotropic forms: amorphous carbon and graphite and diamond; occurs in all organic compounds.",
    "The lesson uses “carbon” in a carefully reviewed vocabulary context."
  ],
  [
    "card",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "One of a set of small pieces of stiff paper marked in various ways and used for playing games or for telling fortunes.",
    "He collected cards and traded them with the other boys."
  ],
  [
    "care",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "Activity involved in maintaining something in good working order.",
    "He wrote the manual on car care."
  ],
  [
    "career",
    "/kəˈɹɪɹ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "The particular occupation for which you are trained.",
    "The lesson uses “career” in a carefully reviewed vocabulary context."
  ],
  [
    "carriage",
    "/ˈkæɹɪdʒ/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A small vehicle with four wheels in which a baby or child is pushed around.",
    "The lesson uses “carriage” in a carefully reviewed vocabulary context."
  ],
  [
    "carrier",
    "/ˈkæ.ɹɪ.ə/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person who delivers the mail.",
    "The lesson uses “carrier” in a carefully reviewed vocabulary context."
  ],
  [
    "cart",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Wheeled vehicle that can be pushed by a person; may have one or two or four wheels.",
    "He used a handcart to carry the rocks away."
  ],
  [
    "case",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "A comprehensive term for any proceeding in a court of law whereby an individual seeks a legal remedy.",
    "The family brought suit against the landlord."
  ],
  [
    "cash",
    "Listen for pronunciation",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "Money in the form of bills or coins.",
    "There is a desperate shortage of hard cash."
  ],
  [
    "cassette",
    "/kəˈsɛt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A container that holds a magnetic tape used for recording or playing sound or video.",
    "The lesson uses “cassette” in a carefully reviewed vocabulary context."
  ],
  [
    "cast",
    "/kɑːst/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Bandage consisting of a firm covering (often made of plaster of Paris) that immobilizes broken bones while they heal.",
    "The lesson uses “cast” in a carefully reviewed vocabulary context."
  ],
  [
    "castle",
    "/ˈkɑːsəl/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "A large building formerly occupied by a ruler and fortified against attack.",
    "The lesson uses “castle” in a carefully reviewed vocabulary context."
  ],
  [
    "casualty",
    "/ˈkaʒ(ʊ)əlti/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "Someone injured or killed or captured or missing in a military engagement.",
    "The lesson uses “casualty” in a carefully reviewed vocabulary context."
  ],
  [
    "catalogue",
    "/ˈkæt.əˌlɒɡ/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A book or pamphlet containing an enumeration of things.",
    "He found it in the Sears catalog."
  ],
  [
    "catch",
    "/kæt͡ʃ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A drawback or difficulty that is not readily evident.",
    "It sounds good but what's the catch?"
  ],
  [
    "category",
    "/ˈkætəˌɡɔɹi/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A general concept that marks divisions or coordinations in a conceptual scheme.",
    "The lesson uses “category” in a carefully reviewed vocabulary context."
  ],
  [
    "cathedral",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "Any large and important church.",
    "The lesson uses “cathedral” in a carefully reviewed vocabulary context."
  ],
  [
    "cattle",
    "/ˈkæt(ə)l/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A2",
    "Domesticated bovine animals as a group regardless of sex or age.",
    "So many head of cattle."
  ],
  [
    "cause",
    "/kɔːz/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Any entity that produces an effect or is responsible for events or results.",
    "The lesson uses “cause” in a carefully reviewed vocabulary context."
  ],
  [
    "celebration",
    "/ˌsɛlɪˈbɹeiʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Any joyous diversion.",
    "The lesson uses “celebration” in a carefully reviewed vocabulary context."
  ],
  [
    "cell",
    "Listen for pronunciation",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A1",
    "(biology) the basic structural and functional unit of all organisms; they may exist as independent units of life (as in monads) or may form colonies or tissues as in higher plants and animals.",
    "The lesson uses “cell” in a carefully reviewed vocabulary context."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch016 = createVocabularyBatch({
  id: "batch-016",
  source,
  entries,
})

export const batch016Metadata = {
  id: "batch-016",
  title: "Open English WordNet core vocabulary 701–800",
  addedWords: batch016.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
