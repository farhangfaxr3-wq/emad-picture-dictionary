import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "confession",
    "/kənˈfɛʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "An admission of misdeeds or faults.",
    "The lesson uses “confession” in a carefully reviewed vocabulary context."
  ],
  [
    "confidence",
    "/ˈkɒnfɪdəns/",
    "People",
    "Feelings & emotions",
    "noun",
    "B2",
    "A feeling of trust (in someone or something).",
    "I have confidence in our team."
  ],
  [
    "conflict",
    "/ˈkɒn.flɪkt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "An incompatibility of dates or events.",
    "He noticed a conflict in the dates of the two meetings."
  ],
  [
    "confrontation",
    "/ˌkɒnfɹənˈteɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "C1",
    "Discord resulting from a clash of ideas or opinions.",
    "The lesson uses “confrontation” in a carefully reviewed vocabulary context."
  ],
  [
    "confusion",
    "/kənˈfjuːʒən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "A mistake that results from taking one thing to be another.",
    "He changed his name in order to avoid confusion with the notorious outlaw."
  ],
  [
    "conglomerate",
    "/kənˈɡlɒm.(ə)ɹ.ət/",
    "Community",
    "Groups & organizations",
    "noun",
    "C1",
    "A group of diverse companies under common ownership and run as a single organization.",
    "The lesson uses “conglomerate” in a carefully reviewed vocabulary context."
  ],
  [
    "congress",
    "/ˈkɑŋɡɹəs/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "A national legislative assembly.",
    "The lesson uses “congress” in a carefully reviewed vocabulary context."
  ],
  [
    "connection",
    "/kəˈnɛkʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Shifting from one form of transportation to another.",
    "The plane was late and he missed his connection in Atlanta."
  ],
  [
    "conscience",
    "/ˈkɒnʃəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Motivation deriving logically from ethical or moral principles that govern a person's thoughts and actions.",
    "The lesson uses “conscience” in a carefully reviewed vocabulary context."
  ],
  [
    "consciousness",
    "/ˈkɑnʃəsnəs/",
    "School",
    "Knowledge & ideas",
    "noun",
    "C1",
    "An alert cognitive state in which you are aware of yourself and your situation.",
    "He lost consciousness."
  ],
  [
    "consensus",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Agreement in the judgment or opinion reached by a group as a whole.",
    "The lack of consensus reflected differences in theoretical positions."
  ],
  [
    "consideration",
    "/kənˌsɪdəˈɹeɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "Kind and considerate regard for others.",
    "He showed no consideration for her feelings."
  ],
  [
    "conspiracy",
    "/kənˈspɪɹəsi/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A plot to carry out some harmful or illegal act (especially a political plot).",
    "The lesson uses “conspiracy” in a carefully reviewed vocabulary context."
  ],
  [
    "constellation",
    "/ˌkɒn.stəˈleɪ.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "A configuration of stars as seen from the earth.",
    "The lesson uses “constellation” in a carefully reviewed vocabulary context."
  ],
  [
    "constituency",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "C1",
    "The body of voters who elect a representative for their area.",
    "The lesson uses “constituency” in a carefully reviewed vocabulary context."
  ],
  [
    "constitution",
    "/ˌkɒnstɪˈtjuːʃ(ə)n/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "The way in which someone or something is composed.",
    "The lesson uses “constitution” in a carefully reviewed vocabulary context."
  ],
  [
    "constraint",
    "/kənˈstɹeɪnt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The state of being physically constrained.",
    "Dogs should be kept under restraint."
  ],
  [
    "consultation",
    "/ˌkɒnsl̩ˈteɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "C1",
    "A conference between two or more people to consider a particular question.",
    "A consultation of several medical specialists."
  ],
  [
    "consumer",
    "/kənˈsjuːmə/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person who uses goods or services.",
    "The lesson uses “consumer” in a carefully reviewed vocabulary context."
  ],
  [
    "consumption",
    "/kənˈsʌmp.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The process of taking food into the body through the mouth (as by eating).",
    "The lesson uses “consumption” in a carefully reviewed vocabulary context."
  ],
  [
    "contact",
    "/ˈkɑntækt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Close interaction.",
    "They kept in daily contact."
  ],
  [
    "contemporary",
    "/kənˈtɛm.p(ə).ɹəɹ.i/",
    "People",
    "People & roles",
    "noun",
    "C1",
    "A person of nearly the same age as another.",
    "The lesson uses “contemporary” in a carefully reviewed vocabulary context."
  ],
  [
    "contempt",
    "/kənˈtɛmpt/",
    "People",
    "Feelings & emotions",
    "noun",
    "B1",
    "Lack of respect accompanied by a feeling of intense dislike.",
    "He was held in contempt."
  ],
  [
    "contest",
    "/ˈkɒn.tɛst/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A struggle between rivals.",
    "The lesson uses “contest” in a carefully reviewed vocabulary context."
  ],
  [
    "context",
    "/ˈ kɒn.tɛkst/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "Discourse that surrounds a language unit and helps to determine its interpretation.",
    "The lesson uses “context” in a carefully reviewed vocabulary context."
  ],
  [
    "continuation",
    "/kəntɪnjʊˈeɪʃ(ə)n/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "The consequence of being lengthened in duration.",
    "The lesson uses “continuation” in a carefully reviewed vocabulary context."
  ],
  [
    "contraction",
    "/kɒnˈtɹæk.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "(physiology) a shortening or tensing of a part or organ (especially of a muscle or muscle fiber).",
    "The lesson uses “contraction” in a carefully reviewed vocabulary context."
  ],
  [
    "contradiction",
    "/ˌkɒntɹəˈdɪkʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "C1",
    "(logic) a statement that is necessarily false.",
    "The statement ‘he is brave and he is not brave’ is a contradiction."
  ],
  [
    "contrary",
    "/ˈkɒntɹəɹi/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Exact opposition.",
    "Public opinion to the contrary — that he is not guilty."
  ],
  [
    "contrast",
    "/ˈkɒntɹɑːst/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The opposition or dissimilarity of things that are compared.",
    "In contrast to."
  ],
  [
    "contribution",
    "/ˌkɑntɹɪˈbjuʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "C1",
    "Act of giving in common with others for a common purpose especially to a charity.",
    "The lesson uses “contribution” in a carefully reviewed vocabulary context."
  ],
  [
    "control",
    "/kənˈtɹəʊl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Discipline in personal and social activities.",
    "She never lost control of herself."
  ],
  [
    "convenience",
    "/kənˈviːnɪəns/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "A device or control that is very useful for a particular job.",
    "The lesson uses “convenience” in a carefully reviewed vocabulary context."
  ],
  [
    "convention",
    "/kənˈvɛn.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Orthodoxy as a consequence of being conventional.",
    "The lesson uses “convention” in a carefully reviewed vocabulary context."
  ],
  [
    "conviction",
    "/kənˈvɪkʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "An unshakable belief in something without need for proof or evidence.",
    "The lesson uses “conviction” in a carefully reviewed vocabulary context."
  ],
  [
    "cook",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A1",
    "Someone who cooks food.",
    "The lesson uses “cook” in a carefully reviewed vocabulary context."
  ],
  [
    "copper",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A ductile malleable reddish-brown corrosion-resistant diamagnetic metallic element; occurs in various minerals but is the only metal that occurs abundantly in large masses; used as an electrical and thermal conductor.",
    "The lesson uses “copper” in a carefully reviewed vocabulary context."
  ],
  [
    "copy",
    "/ˈkɒpi/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A thing made to be similar or identical to another thing.",
    "She made a copy of the designer dress."
  ],
  [
    "copyright",
    "/ˈkɑpiˌɹaɪt/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A document granting exclusive right to publish and sell literary or musical or artistic work.",
    "The lesson uses “copyright” in a carefully reviewed vocabulary context."
  ],
  [
    "cord",
    "/kɔɹd/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A cut pile fabric with vertical ribs; usually made of cotton.",
    "The lesson uses “cord” in a carefully reviewed vocabulary context."
  ],
  [
    "core",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "A1",
    "The center of an object.",
    "The ball has a titanium core."
  ],
  [
    "corn",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Ears of corn that can be prepared and served for human food.",
    "The lesson uses “corn” in a carefully reviewed vocabulary context."
  ],
  [
    "corner",
    "/ˈkɔɹnɚ/",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "The point where three areas or surfaces meet or intersect.",
    "The corners of a cube."
  ],
  [
    "correction",
    "/kəˈɹɛkʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of offering an improvement to replace a mistake; setting right.",
    "The lesson uses “correction” in a carefully reviewed vocabulary context."
  ],
  [
    "correlation",
    "/kɔɹəˈleɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A reciprocal relation between two or more things.",
    "The lesson uses “correlation” in a carefully reviewed vocabulary context."
  ],
  [
    "correspondence",
    "/ˌkɒɹɪˈspɒndəns/",
    "Communication",
    "Language & communication",
    "noun",
    "C1",
    "Communication by the exchange of letters.",
    "The lesson uses “correspondence” in a carefully reviewed vocabulary context."
  ],
  [
    "corruption",
    "/kəˈɹʌpʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Inducement (as of a public official) by improper means (as bribery) to violate duty (as by committing a felony).",
    "He was held on charges of corruption and racketeering."
  ],
  [
    "costume",
    "Listen for pronunciation",
    "Sports",
    "Sports vocabulary",
    "noun",
    "B1",
    "The attire worn in a play or at a fancy dress ball.",
    "He won the prize for best costume."
  ],
  [
    "cottage",
    "/ˈkɑtɪdʒ/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A small house with a single story.",
    "The lesson uses “cottage” in a carefully reviewed vocabulary context."
  ],
  [
    "counter",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Table consisting of a horizontal surface over which business is transacted.",
    "The lesson uses “counter” in a carefully reviewed vocabulary context."
  ],
  [
    "country",
    "/ˈkʌntɹi/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "A politically organized body of people under a single government.",
    "The country's largest manufacturer."
  ],
  [
    "coup",
    "/kuː/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "A sudden and decisive change of government illegally or by force.",
    "The lesson uses “coup” in a carefully reviewed vocabulary context."
  ],
  [
    "courage",
    "/ˈkʌɹɪdʒ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A quality of spirit that enables you to face danger or pain without showing fear.",
    "The lesson uses “courage” in a carefully reviewed vocabulary context."
  ],
  [
    "course",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "A mode of action.",
    "If you persist in that course you will surely fail."
  ],
  [
    "court",
    "/kɔːt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "An area wholly or partly surrounded by walls or buildings.",
    "The house was built around an inner court."
  ],
  [
    "courtesy",
    "/ˈkɜːtəsi/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A courteous or respectful or considerate act.",
    "The lesson uses “courtesy” in a carefully reviewed vocabulary context."
  ],
  [
    "cover",
    "/ˈkʌvɚ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Bedding that keeps a person warm in bed.",
    "He pulled the covers over his head and went to sleep."
  ],
  [
    "coverage",
    "/ˈkʌv.əɹ.ɪdʒ/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "The news as presented by reporters for newspapers or radio or television.",
    "They accused the paper of biased coverage of race relations."
  ],
  [
    "crack",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "Witty remark.",
    "The lesson uses “crack” in a carefully reviewed vocabulary context."
  ],
  [
    "craft",
    "/kɹɑːft/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "Shrewdness as demonstrated by being skilled in deception.",
    "The lesson uses “craft” in a carefully reviewed vocabulary context."
  ],
  [
    "crash",
    "Listen for pronunciation",
    "Community",
    "Events",
    "noun",
    "A2",
    "A serious accident (usually involving one or more vehicles).",
    "They are still investigating the crash of the TWA plane."
  ],
  [
    "creation",
    "/kɹiːˈeɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The human act of creating.",
    "The lesson uses “creation” in a carefully reviewed vocabulary context."
  ],
  [
    "credibility",
    "/kɹɛd.ə.ˈbɪ.ɫɪ.ti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The quality of being believable or trustworthy.",
    "The lesson uses “credibility” in a carefully reviewed vocabulary context."
  ],
  [
    "credit",
    "/ˈkɹɛdɪt/",
    "School",
    "University & academic English",
    "noun",
    "A2",
    "Recognition by a college or university that a course of studies has been successfully completed; typically measured in semester hours.",
    "The lesson uses “credit” in a carefully reviewed vocabulary context."
  ],
  [
    "creed",
    "/kɹiːd/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "Any system of principles or beliefs.",
    "The lesson uses “creed” in a carefully reviewed vocabulary context."
  ],
  [
    "crew",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "The men and women who man a vehicle (ship, aircraft, etc.).",
    "The lesson uses “crew” in a carefully reviewed vocabulary context."
  ],
  [
    "crime",
    "/kɹaɪm/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "(criminal law) an act punishable by law; usually considered an evil act.",
    "A long record of crimes."
  ],
  [
    "criminal",
    "/ˈkɹɪmənəl/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "Someone who has committed a crime or has been legally convicted of a crime.",
    "The lesson uses “criminal” in a carefully reviewed vocabulary context."
  ],
  [
    "crisis",
    "/ˈkɹaɪsɪs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "An unstable situation of extreme danger or difficulty.",
    "They went bankrupt during the economic crisis."
  ],
  [
    "critic",
    "/ˈkɹɪt.ɪk/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A person who is professionally engaged in the analysis and interpretation of works of art.",
    "The lesson uses “critic” in a carefully reviewed vocabulary context."
  ],
  [
    "criticism",
    "/ˈkɹɪtɪsɪzəm/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "Disapproval expressed by pointing out faults or shortcomings.",
    "The senator received severe criticism from his opponent."
  ],
  [
    "crop",
    "Listen for pronunciation",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A1",
    "The yield from plants in a single growing season.",
    "The lesson uses “crop” in a carefully reviewed vocabulary context."
  ],
  [
    "cross",
    "/kɹɒs/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A2",
    "(genetics) an organism that is the offspring of genetically dissimilar parents or stock; especially offspring produced by breeding plants or animals of different varieties or breeds or species.",
    "A mule is a cross between a horse and a donkey."
  ],
  [
    "crossing",
    "/ˈkɹɔsɪŋ/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A path (often marked) where something (as a street or railroad) can be crossed to get from one side to the other.",
    "The lesson uses “crossing” in a carefully reviewed vocabulary context."
  ],
  [
    "crowd",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A large number of things or people considered together.",
    "A crowd of insects assembled around the flowers."
  ],
  [
    "crown",
    "/kɹaʊn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "An ornamental jeweled headdress signifying sovereignty.",
    "The lesson uses “crown” in a carefully reviewed vocabulary context."
  ],
  [
    "cruelty",
    "/ˈkɹuː(ə)lti/",
    "People",
    "Feelings & emotions",
    "noun",
    "B1",
    "Feelings of extreme heartlessness.",
    "The lesson uses “cruelty” in a carefully reviewed vocabulary context."
  ],
  [
    "crutch",
    "/kɹʌtʃ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A wooden or metal staff that fits under the armpit and reaches to the ground; used by disabled person while walking.",
    "The lesson uses “crutch” in a carefully reviewed vocabulary context."
  ],
  [
    "culture",
    "/ˈkʌlt͡ʃɚ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "(biology) the growing of microorganisms in a nutrient medium (such as gelatin or agar).",
    "The culture of cells in a Petri dish."
  ],
  [
    "curve",
    "/kɜːv/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Curved segment (of a road or river or railroad track etc.).",
    "The lesson uses “curve” in a carefully reviewed vocabulary context."
  ],
  [
    "custody",
    "/ˈkʌstədiː/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Holding by the police.",
    "The suspect is in custody."
  ],
  [
    "cut",
    "/kʌt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "A refusal to recognize someone you know.",
    "The snub was clearly intentional."
  ],
  [
    "cutting",
    "/ˈkʌtɪŋ/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "An excerpt cut from a newspaper or magazine.",
    "He searched through piles of letters and clippings."
  ],
  [
    "cycle",
    "/ˈsaɪkəl/",
    "Community",
    "Events",
    "noun",
    "A2",
    "A periodically repeated sequence of events.",
    "A cycle of reprisal and retaliation."
  ],
  [
    "cylinder",
    "/ˈsɪlɪndə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A solid bounded by a cylindrical surface and two parallel planes (the bases).",
    "The lesson uses “cylinder” in a carefully reviewed vocabulary context."
  ],
  [
    "dairy",
    "/ˈdɛəɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A farm where dairy products are produced.",
    "The lesson uses “dairy” in a carefully reviewed vocabulary context."
  ],
  [
    "damage",
    "/ˈdæmɪdʒ/",
    "Community",
    "Events",
    "noun",
    "A2",
    "The occurrence of a change for the worse.",
    "The lesson uses “damage” in a carefully reviewed vocabulary context."
  ],
  [
    "danger",
    "/ˈdeɪn.dʒə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The condition of being susceptible to harm or injury.",
    "You are in no danger."
  ],
  [
    "date",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Sweet edible fruit of the date palm with a single long woody seed.",
    "The lesson uses “date” in a carefully reviewed vocabulary context."
  ],
  [
    "day",
    "/deɪ/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A1",
    "Time for Earth to make a complete rotation on its axis.",
    "They put on two performances every day."
  ],
  [
    "daylight",
    "/ˈdeɪlaɪt/",
    "Nature",
    "Natural phenomena",
    "noun",
    "B1",
    "Light during the daytime.",
    "The lesson uses “daylight” in a carefully reviewed vocabulary context."
  ],
  [
    "deal",
    "/ˈdiːl/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "The act of distributing playing cards.",
    "The deal was passed around the table clockwise."
  ],
  [
    "dealer",
    "/ˈdiːlə(ɹ)/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "Someone who purchases and maintains an inventory of goods to be sold.",
    "The lesson uses “dealer” in a carefully reviewed vocabulary context."
  ],
  [
    "death",
    "/dɛθ/",
    "Community",
    "Events",
    "noun",
    "A2",
    "The event of dying or departure from life.",
    "Her death came as a terrible shock."
  ],
  [
    "debt",
    "/dɛt/",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "Money or goods or services owed by one person to another.",
    "The lesson uses “debt” in a carefully reviewed vocabulary context."
  ],
  [
    "decade",
    "/ˈdɛkeɪd/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A2",
    "A period of 10 years.",
    "The lesson uses “decade” in a carefully reviewed vocabulary context."
  ],
  [
    "decay",
    "/dɪˈkeɪ/",
    "Nature",
    "Natural phenomena",
    "noun",
    "A2",
    "The organic phenomenon of rotting.",
    "The lesson uses “decay” in a carefully reviewed vocabulary context."
  ],
  [
    "deck",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Any of various platforms built into a vessel.",
    "The lesson uses “deck” in a carefully reviewed vocabulary context."
  ],
  [
    "declaration",
    "/ˌdɛkləˈɹeɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A statement that is emphatic and explicit (spoken or written).",
    "The lesson uses “declaration” in a carefully reviewed vocabulary context."
  ],
  [
    "decoration",
    "/ˌdɛkəˈɹeɪʃən/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "Something used to beautify.",
    "The lesson uses “decoration” in a carefully reviewed vocabulary context."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch018 = createVocabularyBatch({
  id: "batch-018",
  source,
  entries,
})

export const batch018Metadata = {
  id: "batch-018",
  title: "Open English WordNet core vocabulary 901–1000",
  addedWords: batch018.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
