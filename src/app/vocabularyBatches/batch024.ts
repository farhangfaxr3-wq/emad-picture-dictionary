import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "leftovers",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "B2",
    "Food remaining from a previous meal.",
    "He had leftovers for dinner last night."
  ],
  [
    "leg",
    "/lɛɡ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "One of the supports for a piece of furniture.",
    "The lesson uses “leg” in a carefully reviewed vocabulary context."
  ],
  [
    "legend",
    "/ˈlɛdʒ.ənd/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "Brief description accompanying an illustration.",
    "The lesson uses “legend” in a carefully reviewed vocabulary context."
  ],
  [
    "legislation",
    "/ˌlɛd͡ʒɪsˈleɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of making or enacting laws.",
    "The lesson uses “legislation” in a carefully reviewed vocabulary context."
  ],
  [
    "legislature",
    "/ˈlɛdʒɪsˌleɪtʃɚ/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "Persons who make or amend or repeal laws.",
    "The lesson uses “legislature” in a carefully reviewed vocabulary context."
  ],
  [
    "leisure",
    "/ˈlɛʒə(ɹ)/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Freedom to choose a pastime or enjoyable activity.",
    "He lacked the leisure for golf."
  ],
  [
    "length",
    "/lɛŋ(k)θ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Continuance in time.",
    "He complained about the length of time required."
  ],
  [
    "level",
    "/ˈlɛv.əl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A structure consisting of a room or set of rooms at a single position along a vertical scale.",
    "What level is the office on?"
  ],
  [
    "liability",
    "/laɪəˈbɪlɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The state of being legally obliged and responsible.",
    "The lesson uses “liability” in a carefully reviewed vocabulary context."
  ],
  [
    "liberty",
    "/ˈlɪbɚti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Personal freedom from servitude or confinement or oppression.",
    "The lesson uses “liberty” in a carefully reviewed vocabulary context."
  ],
  [
    "licence",
    "/ˈlaɪsəns/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A legal document giving official permission to do something.",
    "The lesson uses “licence” in a carefully reviewed vocabulary context."
  ],
  [
    "lid",
    "/lɪd/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A movable top or cover (hinged or separate) for closing the opening at the top of a box, chest, jar, pan, etc.",
    "He raised the piano lid."
  ],
  [
    "lie",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A statement that deviates from or perverts the truth.",
    "The lesson uses “lie” in a carefully reviewed vocabulary context."
  ],
  [
    "life",
    "/laɪf/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The course of existence of an individual; the actions and events that occur in living.",
    "He hoped for a new life in Australia."
  ],
  [
    "life style",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "A manner of living that reflects the person's values and attitudes.",
    "The lesson uses “life style” in a carefully reviewed vocabulary context."
  ],
  [
    "lift",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "A ride in a car.",
    "He gave me a lift home."
  ],
  [
    "lily",
    "/ˈlɪli/",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A1",
    "Any liliaceous plant of the genus Lilium having showy pendulous flowers.",
    "The lesson uses “lily” in a carefully reviewed vocabulary context."
  ],
  [
    "limb",
    "Listen for pronunciation",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "One of the jointed appendages of an animal used for locomotion or grasping: arm, leg, wing, flipper.",
    "The lesson uses “limb” in a carefully reviewed vocabulary context."
  ],
  [
    "limit",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "The boundary of a specific area.",
    "The lesson uses “limit” in a carefully reviewed vocabulary context."
  ],
  [
    "limitation",
    "/lɪmɪˈteɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The quality of being limited or restricted.",
    "It is a good plan but it has serious limitations."
  ],
  [
    "line",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "The road consisting of railroad track and roadbed.",
    "The lesson uses “line” in a carefully reviewed vocabulary context."
  ],
  [
    "lip",
    "/lɪp/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "The top edge of a vessel or other container.",
    "The lesson uses “lip” in a carefully reviewed vocabulary context."
  ],
  [
    "list",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The property possessed by a line or surface that departs from the vertical.",
    "The ship developed a list to starboard."
  ],
  [
    "literacy",
    "/ˈlɪt.ɹə.si/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The ability to read and write.",
    "The lesson uses “literacy” in a carefully reviewed vocabulary context."
  ],
  [
    "litigation",
    "/ˌlɪtɪˈɡeɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "A legal proceeding in a court; a judicial contest to determine and enforce legal rights.",
    "The lesson uses “litigation” in a carefully reviewed vocabulary context."
  ],
  [
    "liver",
    "/ˈlɪvə/",
    "Health",
    "Body & anatomy",
    "adjective",
    "A2",
    "Large and complicated reddish-brown glandular organ located in the upper right portion of the abdominal cavity; secretes bile and functions in metabolism of protein and carbohydrate and fat; synthesizes substances involved in the clotting of the blood; synthesizes vitamin A; detoxifies poisonous substances and breaks down worn-out erythrocytes.",
    "The lesson uses “liver” in a carefully reviewed vocabulary context."
  ],
  [
    "load",
    "/loʊd/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Weight to be borne or conveyed.",
    "The lesson uses “load” in a carefully reviewed vocabulary context."
  ],
  [
    "loan",
    "Listen for pronunciation",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "The temporary provision of money (usually at interest).",
    "The lesson uses “loan” in a carefully reviewed vocabulary context."
  ],
  [
    "lobby",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A large entrance or reception room or area.",
    "The lesson uses “lobby” in a carefully reviewed vocabulary context."
  ],
  [
    "location",
    "/loʊˈkeɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A point or extent in space; a point or extent in space.",
    "The lesson uses “location” in a carefully reviewed vocabulary context."
  ],
  [
    "lock",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A fastener fitted to a door or drawer to keep it firmly closed.",
    "The lesson uses “lock” in a carefully reviewed vocabulary context."
  ],
  [
    "log",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "The exponent required to produce a given number.",
    "The lesson uses “log” in a carefully reviewed vocabulary context."
  ],
  [
    "logic",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "The principles that guide reasoning within a given field or situation.",
    "Economic logic requires it."
  ],
  [
    "look",
    "/lʊk/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Physical appearance.",
    "I don't like the looks of this place."
  ],
  [
    "loop",
    "Listen for pronunciation",
    "Technology",
    "IT & computers",
    "noun",
    "A1",
    "(computer science) a single execution of a set of instructions that are to be repeated.",
    "The solution took hundreds of iterations."
  ],
  [
    "loss",
    "/lɒs/",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "The amount by which the cost of a business exceeds its revenue.",
    "The company operated at a loss last year."
  ],
  [
    "lot",
    "/lɒt/",
    "Places",
    "Places & locations",
    "noun",
    "A1",
    "A parcel of land having fixed boundaries.",
    "He bought a lot on the lake."
  ],
  [
    "lounge",
    "/laʊndʒ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A room (as in a hotel or airport) with seating where people can wait.",
    "The lesson uses “lounge” in a carefully reviewed vocabulary context."
  ],
  [
    "love",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "Any object of warm affection or devotion.",
    "The theater was her first love."
  ],
  [
    "lover",
    "/ˈlʌvɚ/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A significant other to whom you are not related by marriage.",
    "The lesson uses “lover” in a carefully reviewed vocabulary context."
  ],
  [
    "loyalty",
    "/ˈlɔɪəlti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The quality of being loyal.",
    "The lesson uses “loyalty” in a carefully reviewed vocabulary context."
  ],
  [
    "lump",
    "/lʌmp/",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "A compact mass.",
    "A ball of mud caught him on the shoulder."
  ],
  [
    "lunch",
    "/lʌnt͡ʃ/",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "A midday meal.",
    "The lesson uses “lunch” in a carefully reviewed vocabulary context."
  ],
  [
    "lung",
    "/ˈlʌŋ/",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "Either of two saclike respiratory organs in the chest of vertebrates; serves to remove carbon dioxide and provide oxygen to the blood.",
    "The lesson uses “lung” in a carefully reviewed vocabulary context."
  ],
  [
    "machine",
    "/məˈʃin/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Any mechanical or electrical device that transmits or modifies energy to perform or assist in the performance of human tasks.",
    "The lesson uses “machine” in a carefully reviewed vocabulary context."
  ],
  [
    "machinery",
    "/məˈʃiːnəɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "Machines or machine systems collectively.",
    "The lesson uses “machinery” in a carefully reviewed vocabulary context."
  ],
  [
    "magnitude",
    "/ˈmæɡnɪtjuːd/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The property of relative size or extent (whether large or small).",
    "They tried to predict the magnitude of the explosion."
  ],
  [
    "maid",
    "/meɪd/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A female domestic.",
    "The lesson uses “maid” in a carefully reviewed vocabulary context."
  ],
  [
    "mail",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "The bags of letters and packages that are transported by the postal service.",
    "The lesson uses “mail” in a carefully reviewed vocabulary context."
  ],
  [
    "mainstream",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "The prevailing current of thought.",
    "His thinking was in the American mainstream."
  ],
  [
    "maintenance",
    "/ˈmeɪnt(ə)nəns/",
    "Community",
    "Money & possessions",
    "noun",
    "B2",
    "Court-ordered support paid by one spouse to another after they are separated.",
    "The lesson uses “maintenance” in a carefully reviewed vocabulary context."
  ],
  [
    "majority",
    "/məˈd͡ʒɒɹɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "(elections) more than half of the votes.",
    "The lesson uses “majority” in a carefully reviewed vocabulary context."
  ],
  [
    "makeup",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Cosmetics applied to the face to improve or change your appearance.",
    "The lesson uses “makeup” in a carefully reviewed vocabulary context."
  ],
  [
    "man",
    "Listen for pronunciation",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "Any living or extinct member of the family Hominidae characterized by superior intelligence, articulate speech, and erect carriage.",
    "The lesson uses “man” in a carefully reviewed vocabulary context."
  ],
  [
    "management",
    "/ˈmænɪdʒmənt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of managing something.",
    "He was given overall management of the program."
  ],
  [
    "manner",
    "/ˈmænə/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A way of acting or behaving.",
    "The lesson uses “manner” in a carefully reviewed vocabulary context."
  ],
  [
    "manufacture",
    "/ˌmænjʊˈfæktʃə/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of making something (a product) from raw materials.",
    "An improvement in the manufacture of explosives."
  ],
  [
    "manufacturer",
    "/ˌmænjuˈfæktʃɚ(ɹ)ɚ/",
    "People",
    "People & roles",
    "noun",
    "C1",
    "Someone who manufactures something.",
    "The lesson uses “manufacturer” in a carefully reviewed vocabulary context."
  ],
  [
    "manuscript",
    "/ˈmænjəˌskɹɪpt/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "The form of a literary work submitted for publication.",
    "The lesson uses “manuscript” in a carefully reviewed vocabulary context."
  ],
  [
    "marathon",
    "/ˈmæɹəθən/",
    "Community",
    "Events",
    "noun",
    "B1",
    "A footrace of 26 miles 385 yards.",
    "The lesson uses “marathon” in a carefully reviewed vocabulary context."
  ],
  [
    "marble",
    "/ˈmɑːbəl/",
    "Sports",
    "Sports vocabulary",
    "noun",
    "A2",
    "A small ball of glass that is used in various games.",
    "The lesson uses “marble” in a carefully reviewed vocabulary context."
  ],
  [
    "march",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "Genre of music written for marching.",
    "Sousa wrote the best marches."
  ],
  [
    "margin",
    "/ˈmɑːdʒɪn/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "The blank space that surrounds the text on a page.",
    "He jotted a note in the margin."
  ],
  [
    "mark",
    "/maːk/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "An indication of damage.",
    "The lesson uses “mark” in a carefully reviewed vocabulary context."
  ],
  [
    "marketing",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The commercial processes involved in promoting and selling and distributing a product or service.",
    "Most companies have a manager in charge of marketing."
  ],
  [
    "marriage",
    "/ˈmæɹɪdʒ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The act of marrying; the nuptial ceremony.",
    "Their marriage was conducted in the chapel."
  ],
  [
    "marsh",
    "/mɑɹʃ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Low-lying wet land with grassy vegetation; usually is a transition zone between land and water.",
    "Thousands of acres of marshland."
  ],
  [
    "mask",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A covering to disguise or conceal the face.",
    "The lesson uses “mask” in a carefully reviewed vocabulary context."
  ],
  [
    "mass",
    "/mæs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A body of matter without definite shape.",
    "A huge ice mass."
  ],
  [
    "master",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A2",
    "An artist of consummate skill.",
    "A master of the violin."
  ],
  [
    "material",
    "/məˈtɪɹi.əl/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Artifact made by weaving or felting or knitting or crocheting natural or synthetic fibers.",
    "She measured off enough material for a dress."
  ],
  [
    "matrix",
    "/ˈmeɪtɹɪks/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "(mathematics) a rectangular array of quantities or expressions set out by rows and columns; treated as a single element and manipulated according to rules.",
    "The lesson uses “matrix” in a carefully reviewed vocabulary context."
  ],
  [
    "matter",
    "/ˈmætə/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "That which has mass and occupies space.",
    "Physicists study both the nature of matter and the forces which govern it."
  ],
  [
    "maze",
    "/ˈmeɪz/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Complex system of paths or tunnels in which it is easy to get lost.",
    "The lesson uses “maze” in a carefully reviewed vocabulary context."
  ],
  [
    "meadow",
    "/ˈmɛdəʊ/",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "A piece of land covered or mostly covered with grass; a field where grass or alfalfa are grown to be made into hay.",
    "The lesson uses “meadow” in a carefully reviewed vocabulary context."
  ],
  [
    "meal",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "The food served and eaten at one time.",
    "The lesson uses “meal” in a carefully reviewed vocabulary context."
  ],
  [
    "meaning",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "The message that is intended or expressed or signified.",
    "What is the meaning of this sentence?"
  ],
  [
    "measure",
    "/ˈmɛʒə/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Measuring instrument having a sequence of marks at regular intervals; used as a reference in making measurements.",
    "The lesson uses “measure” in a carefully reviewed vocabulary context."
  ],
  [
    "meat",
    "/miːt/",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "The flesh of animals (including fishes and birds and snails) used as food.",
    "The lesson uses “meat” in a carefully reviewed vocabulary context."
  ],
  [
    "mechanism",
    "/ˈmɛkənɪzm/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "Device consisting of a piece of machinery; has moving parts that perform some function.",
    "The lesson uses “mechanism” in a carefully reviewed vocabulary context."
  ],
  [
    "medium",
    "/ˈmiːdɪəm/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "(usually plural) transmissions that are disseminated widely to the public.",
    "The lesson uses “medium” in a carefully reviewed vocabulary context."
  ],
  [
    "membership",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The state of being a member.",
    "The lesson uses “membership” in a carefully reviewed vocabulary context."
  ],
  [
    "memorandum",
    "/ˌmɛm.əˈɹæn.dəm/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A written proposal or reminder.",
    "The lesson uses “memorandum” in a carefully reviewed vocabulary context."
  ],
  [
    "memorial",
    "/məˈmɔːɹi.əl/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A structure erected to commemorate persons or events.",
    "The lesson uses “memorial” in a carefully reviewed vocabulary context."
  ],
  [
    "menu",
    "/ˈmɛnjuː/",
    "Technology",
    "IT & computers",
    "noun",
    "A1",
    "(computer science) a list of options available to a computer user.",
    "The lesson uses “menu” in a carefully reviewed vocabulary context."
  ],
  [
    "merchant",
    "/ˈmɝtʃənt/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A businessperson engaged in retail trade.",
    "The lesson uses “merchant” in a carefully reviewed vocabulary context."
  ],
  [
    "mercy",
    "/ˈmɜːsi/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "Leniency and compassion shown toward offenders by a person or agency charged with administering justice.",
    "He threw himself on the mercy of the court."
  ],
  [
    "merit",
    "/ˈmɛɹɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The quality of being deserving (e.g., deserving assistance).",
    "There were many children whose deservingness he recognized and rewarded."
  ],
  [
    "metal",
    "/ˈmɛtəl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Any of several chemical elements that are usually shiny solids that conduct heat or electricity and can be formed into sheets etc.",
    "The lesson uses “metal” in a carefully reviewed vocabulary context."
  ],
  [
    "method",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "A way of doing something, especially a systematic way; implies an orderly logical arrangement (usually in steps).",
    "The lesson uses “method” in a carefully reviewed vocabulary context."
  ],
  [
    "middle",
    "/ˈmɪdəl/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "An intermediate part or section.",
    "[object Object]."
  ],
  [
    "midnight",
    "/ˈmɪdnʌɪt/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "B1",
    "12 o'clock at night; the middle of the night.",
    "Young children should not be allowed to stay up until midnight."
  ],
  [
    "migration",
    "/maɪˈɡɹeɪʃ(ə)n/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The movement of persons from one country or locality to another.",
    "The lesson uses “migration” in a carefully reviewed vocabulary context."
  ],
  [
    "mile",
    "/maɪ̯l/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A large distance.",
    "He missed by a mile."
  ],
  [
    "mill",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Machinery that processes materials by grinding or crushing.",
    "The lesson uses “mill” in a carefully reviewed vocabulary context."
  ],
  [
    "mind",
    "/maɪnd/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "That which is responsible for one's thoughts, feelings, and conscious brain functions; the seat of the faculty of reason.",
    "His mind wandered."
  ],
  [
    "mine",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Explosive device that explodes on contact; designed to destroy vehicles or ships or to kill or maim personnel.",
    "The lesson uses “mine” in a carefully reviewed vocabulary context."
  ],
  [
    "miner",
    "/ˈmaɪnə/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "Laborer who works in a mine.",
    "The lesson uses “miner” in a carefully reviewed vocabulary context."
  ],
  [
    "minister",
    "/ˈmɪnɪstə/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person authorized to conduct religious worship.",
    "Clergymen are usually called ministers in Protestant churches."
  ],
  [
    "ministry",
    "/ˈmɪnɪstɹi/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "A government department under the direction of a minister of state.",
    "The lesson uses “ministry” in a carefully reviewed vocabulary context."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch024 = createVocabularyBatch({
  id: "batch-024",
  source,
  entries,
})

export const batch024Metadata = {
  id: "batch-024",
  title: "Open English WordNet core vocabulary 1501–1600",
  addedWords: batch024.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
