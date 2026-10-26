import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "economy",
    "/iːˈkɒn.ə.mi/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Frugality in the expenditure of money or resources.",
    "The Scots are famous for their economy."
  ],
  [
    "edge",
    "/ɛdʒ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A sharp side formed by the intersection of two surfaces of an object.",
    "He rounded the edges of the box."
  ],
  [
    "edition",
    "/ɪˈdɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "The form in which a text (especially a printed book) is published.",
    "The lesson uses “edition” in a carefully reviewed vocabulary context."
  ],
  [
    "education",
    "/ˌɛd͡ʒʊˈkeɪʃn̩/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "The activities of educating or instructing; activities that impart knowledge or skill.",
    "He received no formal education."
  ],
  [
    "effect",
    "/ɪˈfɛkt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "An outward appearance.",
    "She retained that bold effect in her reproductions of the original painting."
  ],
  [
    "effort",
    "/ˈɛfət/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "Earnest and conscientious activity intended to do or accomplish something.",
    "Made an effort to cover all the reading material."
  ],
  [
    "ego",
    "/ˈiːɡəʊ/",
    "People",
    "Feelings & emotions",
    "noun",
    "A1",
    "An inflated feeling of pride in your superiority to others.",
    "The lesson uses “ego” in a carefully reviewed vocabulary context."
  ],
  [
    "electorate",
    "/ɪˈlɛktəɹət/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "The body of enfranchised citizens; those qualified to vote.",
    "The lesson uses “electorate” in a carefully reviewed vocabulary context."
  ],
  [
    "electricity",
    "/ˌiːlekˈtɹɪsɪti/",
    "Nature",
    "Natural phenomena",
    "noun",
    "B2",
    "A physical phenomenon associated with stationary or moving electrons and protons.",
    "The lesson uses “electricity” in a carefully reviewed vocabulary context."
  ],
  [
    "electron",
    "/ɪˈlɛk.tɹɒn/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "An elementary particle with negative charge.",
    "The lesson uses “electron” in a carefully reviewed vocabulary context."
  ],
  [
    "electronics",
    "Listen for pronunciation",
    "Technology",
    "IT & computers",
    "noun",
    "B2",
    "The branch of physics that deals with the emission and effects of electrons and with the use of electronic devices.",
    "The lesson uses “electronics” in a carefully reviewed vocabulary context."
  ],
  [
    "element",
    "/ˈɛlɪmənt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "An artifact that is one of the individual parts of which a composite entity is made up; especially a part that can be separated from or attached to a system.",
    "A component or constituent element of a system."
  ],
  [
    "elite",
    "/ɪˈliːt/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A group or class of persons enjoying superior intellectual or social or economic status.",
    "The lesson uses “elite” in a carefully reviewed vocabulary context."
  ],
  [
    "embarrassment",
    "/ɪmˈbæɹəsmənt/",
    "People",
    "Feelings & emotions",
    "noun",
    "C1",
    "The shame you feel when your inadequacy or guilt is made public.",
    "The lesson uses “embarrassment” in a carefully reviewed vocabulary context."
  ],
  [
    "embryo",
    "/ˈɛmbɹi.əʊ/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A2",
    "An animal organism in the early stages of growth and differentiation that in higher forms merge into fetal stages but in lower forms terminate in commencement of larval life.",
    "The lesson uses “embryo” in a carefully reviewed vocabulary context."
  ],
  [
    "emotion",
    "/ɪˈmoʊʃən/",
    "People",
    "Feelings & emotions",
    "noun",
    "B1",
    "Any strong feeling.",
    "The lesson uses “emotion” in a carefully reviewed vocabulary context."
  ],
  [
    "emphasis",
    "/ˈɛmfəsɪs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Special importance or significance.",
    "The red light gave the central figure increased emphasis."
  ],
  [
    "empire",
    "/ˈɛmpaɪə/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A monarchy with an emperor as head of state.",
    "The lesson uses “empire” in a carefully reviewed vocabulary context."
  ],
  [
    "employee",
    "/ɛmplɔɪˈiː/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A worker who is hired to perform a job.",
    "The lesson uses “employee” in a carefully reviewed vocabulary context."
  ],
  [
    "employer",
    "/ɪmˈplɔɪɚ/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person or firm that employs workers.",
    "The lesson uses “employer” in a carefully reviewed vocabulary context."
  ],
  [
    "employment",
    "/ɪmˈplɔɪmənt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The state of being employed or having a job.",
    "They are looking for employment."
  ],
  [
    "end",
    "/ɛnd/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "The state of affairs that a plan is intended to achieve and that (when achieved) terminates behavior intended to achieve it.",
    "The ends justify the means."
  ],
  [
    "enemy",
    "/ˈɛnəmi/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "Any hostile group of people.",
    "He viewed lawyers as the real enemy."
  ],
  [
    "energy",
    "/ˈɛnəd͡ʒi/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Forceful exertion.",
    "He plays tennis with great energy."
  ],
  [
    "entertainment",
    "/ˈɛn.tɚˈteɪn.mənt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "C1",
    "An activity that is diverting and that holds the attention.",
    "The lesson uses “entertainment” in a carefully reviewed vocabulary context."
  ],
  [
    "enthusiasm",
    "/ɪnˈθjuːzɪæz(ə)m/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A lively interest.",
    "Enthusiasm for his program is growing."
  ],
  [
    "entitlement",
    "/ənˈtaɪtəlmənt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Right granted by law or contract (especially a right to benefits).",
    "Entitlements make up the major part of the federal budget."
  ],
  [
    "entry",
    "/ˈɛntɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Something that provides access (to get in or get out).",
    "They waited at the entrance to the garden."
  ],
  [
    "environment",
    "/ɪnˈvaɪɹə(n)mənt/",
    "Places",
    "Places & locations",
    "noun",
    "B2",
    "The area in which something exists or lives.",
    "The country — the flat agricultural surround."
  ],
  [
    "episode",
    "/ˈɛpɪsəʊd/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A part of a broadcast serial.",
    "The lesson uses “episode” in a carefully reviewed vocabulary context."
  ],
  [
    "equation",
    "/ɪˈkweɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A mathematical statement that two expressions are equal.",
    "The lesson uses “equation” in a carefully reviewed vocabulary context."
  ],
  [
    "equilibrium",
    "/ɛkwɪˈlɪbɹɪəm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A stable situation in which forces cancel one another.",
    "The lesson uses “equilibrium” in a carefully reviewed vocabulary context."
  ],
  [
    "equipment",
    "/ɪˈkwɪpmənt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "An instrumentality needed for an undertaking or to perform a service.",
    "The lesson uses “equipment” in a carefully reviewed vocabulary context."
  ],
  [
    "era",
    "/ˈɪə̯ɹ.ə/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A1",
    "A period marked by distinctive character or reckoned from a fixed point or event.",
    "The lesson uses “era” in a carefully reviewed vocabulary context."
  ],
  [
    "erosion",
    "/əˈɹoʊʒən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Condition in which the earth's surface is worn away by the action of water and wind.",
    "The lesson uses “erosion” in a carefully reviewed vocabulary context."
  ],
  [
    "error",
    "/ˈɛɹə(ɹ)/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "A wrong action attributable to bad judgment or ignorance or inattention.",
    "He made a bad mistake."
  ],
  [
    "essay",
    "/ˈɛˌseɪ/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "An analytic or interpretive literary composition.",
    "The lesson uses “essay” in a carefully reviewed vocabulary context."
  ],
  [
    "essence",
    "/ˈɛsəns/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A toiletry that emits and diffuses a fragrant odor.",
    "The lesson uses “essence” in a carefully reviewed vocabulary context."
  ],
  [
    "estate",
    "/ɪsˈteɪt/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "Everything you own; all of your assets (whether real property or personal property) and liabilities.",
    "The lesson uses “estate” in a carefully reviewed vocabulary context."
  ],
  [
    "estimate",
    "/ˈɛstɨmɨt/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "An approximate calculation of quantity or degree or worth.",
    "An estimate of what it would cost."
  ],
  [
    "ethics",
    "/ˈɛθ.ɪks/",
    "School",
    "University & academic English",
    "noun",
    "A2",
    "The philosophical study of moral values and rules.",
    "The lesson uses “ethics” in a carefully reviewed vocabulary context."
  ],
  [
    "evening",
    "/ˈiːvnɪŋ/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "B1",
    "The latter part of the day (the period of decreasing daylight from late afternoon until nightfall).",
    "He enjoyed the evening light across the lake."
  ],
  [
    "evolution",
    "/ˌiːvəˈluːʃ(ə)n/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "(biology) the sequence of events involved in the evolutionary development of a species or taxonomic group of organisms.",
    "The lesson uses “evolution” in a carefully reviewed vocabulary context."
  ],
  [
    "examination",
    "/ɪɡˌzæmɪˈneɪʃən/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "The act of giving students or candidates a test (as by questions) to determine what they know or have learned.",
    "The lesson uses “examination” in a carefully reviewed vocabulary context."
  ],
  [
    "excavation",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "B2",
    "The site of an archeological exploration.",
    "They set up camp next to the dig."
  ],
  [
    "exception",
    "/əkˈsɛpʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "An instance that does not conform to a rule or generalization.",
    "All her children were brilliant; the only exception was her last child."
  ],
  [
    "excess",
    "/əkˈsɛs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A quantity much larger than is needed.",
    "The lesson uses “excess” in a carefully reviewed vocabulary context."
  ],
  [
    "exchange",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The act of changing one thing for another thing.",
    "Adam was promised immortality in exchange for his disobedience."
  ],
  [
    "excitement",
    "/ɪkˈsaɪtmənt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Disturbance usually in protest.",
    "The lesson uses “excitement” in a carefully reviewed vocabulary context."
  ],
  [
    "execution",
    "/ˌek.sɪˈkjuː.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Putting a condemned person to death.",
    "The lesson uses “execution” in a carefully reviewed vocabulary context."
  ],
  [
    "executive",
    "/ɪɡˈzɛkjʊtɪv/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "Persons who administer the law.",
    "The lesson uses “executive” in a carefully reviewed vocabulary context."
  ],
  [
    "exemption",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "An act exempting someone.",
    "He was granted immunity from prosecution."
  ],
  [
    "exhibition",
    "/ɛksɪˈbɪʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A collection of things (goods or works of art etc.) for public display.",
    "The lesson uses “exhibition” in a carefully reviewed vocabulary context."
  ],
  [
    "exile",
    "/ˈɛɡˌzaɪl/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "The act of expelling a person from their native land.",
    "Men in exile dream of hope."
  ],
  [
    "exit",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "An opening that permits escape or release.",
    "He blocked the way out."
  ],
  [
    "expansion",
    "/ɪkˈspænʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of increasing (something) in size or volume or quantity or scope.",
    "The lesson uses “expansion” in a carefully reviewed vocabulary context."
  ],
  [
    "expectation",
    "/ɛkspɛkˈteɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Anticipating with confidence of fulfillment.",
    "The lesson uses “expectation” in a carefully reviewed vocabulary context."
  ],
  [
    "expedition",
    "/ɛkspəˈdɪʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "An organized group of people undertaking a journey for a particular purpose.",
    "An expedition was sent to explore Mars."
  ],
  [
    "expenditure",
    "/ɛkˈspɛndɪt͡ʃɚ/",
    "Community",
    "Money & possessions",
    "noun",
    "B2",
    "Money paid out; an amount spent.",
    "The lesson uses “expenditure” in a carefully reviewed vocabulary context."
  ],
  [
    "expert",
    "/ˈɛkspɚt/",
    "School",
    "University & academic English",
    "noun",
    "A2",
    "A person with special knowledge or ability who performs skillfully.",
    "The lesson uses “expert” in a carefully reviewed vocabulary context."
  ],
  [
    "expertise",
    "/ˌɛkspəˈtiːz/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "Skillfulness by virtue of possessing special knowledge.",
    "The lesson uses “expertise” in a carefully reviewed vocabulary context."
  ],
  [
    "explanation",
    "/ˌɛkspləˈneɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "The act of explaining; making something plain or intelligible.",
    "I heard his explanation of the accident."
  ],
  [
    "exploration",
    "/ˌɛkspləˈɹeɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "To travel for the purpose of discovery.",
    "The lesson uses “exploration” in a carefully reviewed vocabulary context."
  ],
  [
    "explosion",
    "/ɪkˈspləʊ.ʒən/",
    "Community",
    "Events",
    "noun",
    "B2",
    "A violent release of energy caused by a chemical or nuclear reaction.",
    "The lesson uses “explosion” in a carefully reviewed vocabulary context."
  ],
  [
    "exposure",
    "/ɪkˈspoʊʒɚ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Vulnerability to the elements; to the action of heat or cold or wind or rain.",
    "Exposure to the weather."
  ],
  [
    "extension",
    "/ɪkˈstɛnʃən/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "B2",
    "An addition that extends a main building.",
    "The lesson uses “extension” in a carefully reviewed vocabulary context."
  ],
  [
    "extent",
    "/ɪksˈtɛnt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The point or degree to which something extends.",
    "The extent of the damage."
  ],
  [
    "extraterrestrial",
    "/ˌɛkstɹətɚˈɛstɹi.əl/",
    "People",
    "People & roles",
    "noun",
    "C2",
    "A form of life assumed to exist outside the Earth or its atmosphere.",
    "The lesson uses “extraterrestrial” in a carefully reviewed vocabulary context."
  ],
  [
    "extreme",
    "/ɪkˈstɹiːm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The furthest or highest degree of something.",
    "He carried it to extremes."
  ],
  [
    "eyebrow",
    "/ˈaɪˌbɹaʊ/",
    "Health",
    "Body & anatomy",
    "noun",
    "B1",
    "The arch of hair above each eye.",
    "The lesson uses “eyebrow” in a carefully reviewed vocabulary context."
  ],
  [
    "facade",
    "/fəˈsaːd/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "The face or front of a building.",
    "The lesson uses “facade” in a carefully reviewed vocabulary context."
  ],
  [
    "face",
    "/feɪs/",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "The front of the human head from the forehead to the chin and ear to ear.",
    "He washed his face."
  ],
  [
    "facility",
    "/fəˈsɪlɪti/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "B1",
    "A building or place that provides a particular service or is used for a particular industry.",
    "The assembly plant is an enormous facility."
  ],
  [
    "fact",
    "/fækt/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A statement or assertion of verified information about something that is the case or has happened.",
    "He supported his argument with an impressive array of facts."
  ],
  [
    "factor",
    "/ˈfæktə/",
    "Community",
    "Events",
    "noun",
    "A2",
    "Anything that contributes causally to a result.",
    "A number of factors determined the outcome."
  ],
  [
    "failure",
    "/ˈfeɪl.jə/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person with a record of failing; someone who loses consistently.",
    "The lesson uses “failure” in a carefully reviewed vocabulary context."
  ],
  [
    "fairy",
    "/ˈfɛə̯ɹi/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A small being, human in form, playful and having magical powers.",
    "The lesson uses “fairy” in a carefully reviewed vocabulary context."
  ],
  [
    "faith",
    "/feɪθ/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "A strong belief in a supernatural power or powers that control human destiny.",
    "He lost his faith but not his morality."
  ],
  [
    "fall",
    "/fɔːl/",
    "Community",
    "Events",
    "noun",
    "A1",
    "A free and rapid descent by the force of gravity.",
    "It was a miracle that he survived the drop from that height."
  ],
  [
    "fame",
    "/feɪm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The state or quality of being widely honored and acclaimed.",
    "The lesson uses “fame” in a carefully reviewed vocabulary context."
  ],
  [
    "family",
    "/ˈfæm(ɪ)li/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "People descended from a common ancestor.",
    "His family has lived in Massachusetts since the Mayflower."
  ],
  [
    "fan",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A1",
    "An ardent follower and admirer.",
    "The lesson uses “fan” in a carefully reviewed vocabulary context."
  ],
  [
    "fantasy",
    "/ˈfæntəsi/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "Something many people believe that is false.",
    "They have the illusion that I am very wealthy."
  ],
  [
    "fashion",
    "/ˈfæʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The latest and most admired style in clothes and cosmetics and behavior.",
    "The lesson uses “fashion” in a carefully reviewed vocabulary context."
  ],
  [
    "fault",
    "/fɔːlt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Responsibility for a bad situation or event.",
    "It was John's fault."
  ],
  [
    "favor",
    "/ˈfeɪvɚ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "An act of gracious kindness.",
    "The lesson uses “favor” in a carefully reviewed vocabulary context."
  ],
  [
    "favour",
    "/ˈfeɪ.və/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "An act of gracious kindness.",
    "The lesson uses “favour” in a carefully reviewed vocabulary context."
  ],
  [
    "favourite",
    "/ˈfeɪv.ɹɪt/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A special loved one.",
    "The lesson uses “favourite” in a carefully reviewed vocabulary context."
  ],
  [
    "fax",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Duplicator that transmits the copy by wire or radio.",
    "The lesson uses “fax” in a carefully reviewed vocabulary context."
  ],
  [
    "fear",
    "Listen for pronunciation",
    "People",
    "Feelings & emotions",
    "noun",
    "A1",
    "An emotion experienced in anticipation of some specific pain or danger (usually accompanied by a desire to flee or fight).",
    "The lesson uses “fear” in a carefully reviewed vocabulary context."
  ],
  [
    "feast",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A ceremonial dinner party for many people.",
    "The lesson uses “feast” in a carefully reviewed vocabulary context."
  ],
  [
    "feather",
    "/ˈfɛð.ə(ɹ)/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "B1",
    "Branching, hair-like structure that grows on the bodies of birds.",
    "The lesson uses “feather” in a carefully reviewed vocabulary context."
  ],
  [
    "feature",
    "/ˈfiːtʃə/",
    "Health",
    "Body & anatomy",
    "noun",
    "B1",
    "The characteristic parts of a person's face: eyes and nose and mouth and chin.",
    "An expression of pleasure crossed his features."
  ],
  [
    "federation",
    "/ˌfɛdəˈɹeɪʃn̩/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A union of political organizations.",
    "The lesson uses “federation” in a carefully reviewed vocabulary context."
  ],
  [
    "fee",
    "/fiː/",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "A fixed charge for a privilege or for professional services.",
    "The lesson uses “fee” in a carefully reviewed vocabulary context."
  ],
  [
    "feeling",
    "/ˈfiːlɪŋ/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "An intuitive understanding of something.",
    "He had a great feeling for music."
  ],
  [
    "feminist",
    "/ˈfɛmənɪst/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A supporter of feminism.",
    "The lesson uses “feminist” in a carefully reviewed vocabulary context."
  ],
  [
    "fibre",
    "/ˈfaɪ.bə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A slender and greatly elongated substance capable of being spun into yarn.",
    "The lesson uses “fibre” in a carefully reviewed vocabulary context."
  ],
  [
    "fiction",
    "/ˈfɪk.ʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A literary work based on the imagination and not necessarily on fact.",
    "The lesson uses “fiction” in a carefully reviewed vocabulary context."
  ],
  [
    "field",
    "/fiːld/",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "A piece of land cleared of trees and usually enclosed.",
    "He planted a field of wheat."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch020 = createVocabularyBatch({
  id: "batch-020",
  source,
  entries,
})

export const batch020Metadata = {
  id: "batch-020",
  title: "Open English WordNet core vocabulary 1101–1200",
  addedWords: batch020.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
