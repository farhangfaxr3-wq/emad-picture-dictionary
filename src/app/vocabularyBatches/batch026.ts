import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "opposition",
    "/ɒpəˈzɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The action of opposing something that you disapprove or disagree with.",
    "Despite opposition from the newspapers he went ahead."
  ],
  [
    "optimism",
    "/ˈɑptɪmɪzəm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A general disposition to expect the best in all things.",
    "The lesson uses “optimism” in a carefully reviewed vocabulary context."
  ],
  [
    "option",
    "/ˈɒpʃən/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "The right to buy or sell property at an agreed price; the right is purchased and if it is not exercised by a stated date the money is forfeited.",
    "The lesson uses “option” in a carefully reviewed vocabulary context."
  ],
  [
    "orbit",
    "/ˈɔː.bɪt/",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "The (usually elliptical) path described by one celestial body in its revolution about another.",
    "He plotted the orbit of the moon."
  ],
  [
    "orchestra",
    "/ˈɔɹkəstɹə/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A musical organization consisting of a group of instrumentalists including string players.",
    "The lesson uses “orchestra” in a carefully reviewed vocabulary context."
  ],
  [
    "order",
    "/ˈɔːdə/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A legally binding command or decision entered on the court record (as if issued by a court or judge).",
    "A friend in New Mexico said that the order caused no trouble out there."
  ],
  [
    "organ",
    "/ˈɔɹ.ɡən/",
    "Technology",
    "IT & computers",
    "noun",
    "A2",
    "Wind instrument whose sound is produced by means of pipes arranged in sets supplied with air from a bellows and controlled from a large complex musical keyboard.",
    "The lesson uses “organ” in a carefully reviewed vocabulary context."
  ],
  [
    "organisation",
    "/ˈɔː(ɹ).ɡən.aɪˌzeɪ.ʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "C1",
    "A group of people who work together.",
    "The lesson uses “organisation” in a carefully reviewed vocabulary context."
  ],
  [
    "orientation",
    "/ˌɔɹiɛnˈteɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Position or alignment relative to points of the compass or other specific directions.",
    "The lesson uses “orientation” in a carefully reviewed vocabulary context."
  ],
  [
    "origin",
    "/ˈɒɹ.ɪ.dʒɪn/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Properties attributable to your ancestry.",
    "He comes from good origins."
  ],
  [
    "outfit",
    "/ˈaʊtfɪt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A set of clothing (with accessories).",
    "His getup was exceedingly elegant."
  ],
  [
    "outlet",
    "/ˈaʊtlɛt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A place of business for retailing goods.",
    "The lesson uses “outlet” in a carefully reviewed vocabulary context."
  ],
  [
    "outline",
    "/ˈaʊtlaɪn/",
    "School",
    "University & academic English",
    "noun",
    "B1",
    "A sketchy summary of the main points of an argument or theory.",
    "The lesson uses “outline” in a carefully reviewed vocabulary context."
  ],
  [
    "outlook",
    "/ˈaʊtˌlʊk/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A habitual or characteristic mental attitude that determines how you will interpret and respond to situations.",
    "The lesson uses “outlook” in a carefully reviewed vocabulary context."
  ],
  [
    "output",
    "/ˈaʊtpʊt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Final product; the things produced.",
    "The lesson uses “output” in a carefully reviewed vocabulary context."
  ],
  [
    "overall",
    "/ˌəʊvəɹˈɔːl/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "(usually plural) work clothing consisting of denim trousers (usually with a bib and shoulder straps).",
    "The lesson uses “overall” in a carefully reviewed vocabulary context."
  ],
  [
    "overview",
    "/ˈəʊvə(ɹ)ˌvjuː/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A general summary of a subject.",
    "The treasurer gave a brief overview of the financial consequences."
  ],
  [
    "owner",
    "/ˈoʊnɚ/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "(law) someone who owns (is legal possessor of) a business.",
    "He is the owner of a chain of restaurants."
  ],
  [
    "ownership",
    "/ˈoʊnɚʃɪp/",
    "Community",
    "Money & possessions",
    "noun",
    "B2",
    "The relation of an owner to the thing possessed; possession with the right to transfer possession to others.",
    "The lesson uses “ownership” in a carefully reviewed vocabulary context."
  ],
  [
    "oxygen",
    "/ˈɒksɪdʒən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A nonmetallic bivalent element that is normally a colorless odorless tasteless nonflammable diatomic gas; constitutes 21 percent of the atmosphere by volume; the most abundant element in the earth's crust.",
    "The lesson uses “oxygen” in a carefully reviewed vocabulary context."
  ],
  [
    "pace",
    "/peɪs/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A1",
    "The rate of some repeating event.",
    "The lesson uses “pace” in a carefully reviewed vocabulary context."
  ],
  [
    "pack",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A bundle (especially one carried on the back).",
    "The lesson uses “pack” in a carefully reviewed vocabulary context."
  ],
  [
    "package",
    "/ˈpækɪdʒ/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "A collection of things wrapped or boxed together.",
    "The lesson uses “package” in a carefully reviewed vocabulary context."
  ],
  [
    "packet",
    "/ˈpak.ɪt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A small package or bundle.",
    "The lesson uses “packet” in a carefully reviewed vocabulary context."
  ],
  [
    "page",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "One side of one leaf (of a book or magazine or newspaper or letter etc.) or the written or pictorial matter it contains.",
    "The lesson uses “page” in a carefully reviewed vocabulary context."
  ],
  [
    "pain",
    "/peɪn/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "A somatic sensation of acute discomfort.",
    "As the intensity increased, the sensation changed from tickle to pain."
  ],
  [
    "paint",
    "/peɪnt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A substance used as a coating to protect or decorate a surface (especially a mixture of pigment suspended in a liquid); dries to form a hard coating.",
    "Artists use ‘paint’ and ‘pigment’ interchangeably."
  ],
  [
    "pair",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "Two people considered as a unit.",
    "The lesson uses “pair” in a carefully reviewed vocabulary context."
  ],
  [
    "palace",
    "/ˈpælɪs/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Official residence of an exalted person (as a sovereign).",
    "The lesson uses “palace” in a carefully reviewed vocabulary context."
  ],
  [
    "palm",
    "Listen for pronunciation",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A1",
    "Any plant of the family Palmae having an unbranched trunk crowned by large pinnate or palmate leaves.",
    "The lesson uses “palm” in a carefully reviewed vocabulary context."
  ],
  [
    "pan",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Cooking utensil consisting of a wide metal vessel.",
    "The lesson uses “pan” in a carefully reviewed vocabulary context."
  ],
  [
    "panel",
    "/ˈpænəl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Sheet that forms a distinct (usually flat and rectangular) section or component of something.",
    "The lesson uses “panel” in a carefully reviewed vocabulary context."
  ],
  [
    "panic",
    "Listen for pronunciation",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "An overwhelming feeling of fear and anxiety.",
    "The lesson uses “panic” in a carefully reviewed vocabulary context."
  ],
  [
    "paper",
    "/ˈpeɪpə/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "An essay (especially one written as an assignment).",
    "He got an A on his composition."
  ],
  [
    "paradox",
    "/ˈpaɹədɒks/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "(logic) a statement that contradicts itself.",
    "‘I always lie’ is a paradox because if it is true it must be false."
  ],
  [
    "parameter",
    "/pəˈɹæm.ɪ.tə/",
    "Community",
    "Events",
    "noun",
    "B2",
    "Any factor that defines a system and determines (or limits) its performance.",
    "The lesson uses “parameter” in a carefully reviewed vocabulary context."
  ],
  [
    "pardon",
    "/ˈpɑɹ.dən/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A warrant granting release from punishment for an offense.",
    "The lesson uses “pardon” in a carefully reviewed vocabulary context."
  ],
  [
    "parliament",
    "/ˈpɑːləmənt/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A legislative assembly in certain countries.",
    "The lesson uses “parliament” in a carefully reviewed vocabulary context."
  ],
  [
    "part",
    "/pɑːt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Something determined in relation to something that includes it.",
    "He wanted to feel a part of something bigger than himself."
  ],
  [
    "participant",
    "/pɑːˈtɪsɪpənt/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "Someone who takes part in an activity.",
    "He was a major player in setting up the corporation."
  ],
  [
    "particle",
    "/ˈpɑːtɪk(ə)l/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A body having finite mass and internal structure but negligible dimensions.",
    "The lesson uses “particle” in a carefully reviewed vocabulary context."
  ],
  [
    "partnership",
    "/ˈpɑːtnəʃɪp/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A contract between two or more persons who agree to pool talent and money and share profits or losses.",
    "The lesson uses “partnership” in a carefully reviewed vocabulary context."
  ],
  [
    "party",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A gathering of people for pleasure.",
    "She joined the party after dinner."
  ],
  [
    "pass",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "Success in satisfying a test or requirement.",
    "He got a pass in introductory chemistry."
  ],
  [
    "passage",
    "/ˈpæsɪd͡ʒ/",
    "Health",
    "Body & anatomy",
    "noun",
    "B1",
    "A path or channel or duct through or along which something may pass.",
    "The nasal passages."
  ],
  [
    "passion",
    "/ˈpæʃən/",
    "People",
    "Feelings & emotions",
    "noun",
    "B1",
    "A strong feeling or emotion.",
    "The lesson uses “passion” in a carefully reviewed vocabulary context."
  ],
  [
    "pastel",
    "/ˈpæstəl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Any of various pale or light colors.",
    "The lesson uses “pastel” in a carefully reviewed vocabulary context."
  ],
  [
    "pasture",
    "/ˈpɑːstjə/",
    "Places",
    "Places & locations",
    "noun",
    "B1",
    "A field covered with grass or herbage and suitable for grazing by livestock.",
    "The lesson uses “pasture” in a carefully reviewed vocabulary context."
  ],
  [
    "patch",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A piece of cloth used as decoration or to mend or cover a hole.",
    "The lesson uses “patch” in a carefully reviewed vocabulary context."
  ],
  [
    "patent",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A document granting an inventor sole rights to an invention.",
    "The lesson uses “patent” in a carefully reviewed vocabulary context."
  ],
  [
    "patience",
    "/ˈpeɪʃəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Good-natured tolerance of delay or incompetence.",
    "The lesson uses “patience” in a carefully reviewed vocabulary context."
  ],
  [
    "patrol",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A detachment used for security or reconnaissance.",
    "The lesson uses “patrol” in a carefully reviewed vocabulary context."
  ],
  [
    "pattern",
    "/ˈpat(ə)n/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A model considered worthy of imitation.",
    "The American constitution has provided a pattern for many republics."
  ],
  [
    "pause",
    "/pɔːz/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "Temporary inactivity.",
    "The lesson uses “pause” in a carefully reviewed vocabulary context."
  ],
  [
    "pavement",
    "/ˈpeɪvmənt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Walk consisting of a paved area for pedestrians; usually beside a street or roadway.",
    "The lesson uses “pavement” in a carefully reviewed vocabulary context."
  ],
  [
    "payment",
    "/ˈpeɪmənt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The act of paying money.",
    "The lesson uses “payment” in a carefully reviewed vocabulary context."
  ],
  [
    "peace",
    "/piːs/",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "The absence of mental stress or anxiety.",
    "The lesson uses “peace” in a carefully reviewed vocabulary context."
  ],
  [
    "peak",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "A1",
    "The highest point (of something).",
    "At the peak of the pyramid."
  ],
  [
    "peanut",
    "/ˈpiːˌnʌt/",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "Pod of the peanut vine containing usually 2 nuts or seeds; ‘groundnut’ and ‘monkey nut’ are British terms.",
    "The lesson uses “peanut” in a carefully reviewed vocabulary context."
  ],
  [
    "peasant",
    "/ˈpɛzənt/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "One of a (chiefly European) class of agricultural laborers.",
    "The lesson uses “peasant” in a carefully reviewed vocabulary context."
  ],
  [
    "penalty",
    "/ˈpɛnəlti/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The act of punishing, or the infliction of a penalty.",
    "The lesson uses “penalty” in a carefully reviewed vocabulary context."
  ],
  [
    "penny",
    "/ˈpɛ.ni/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "A coin worth one-hundredth of the value of the basic unit.",
    "The lesson uses “penny” in a carefully reviewed vocabulary context."
  ],
  [
    "pension",
    "/ˈpɛnʃ(ə)n/",
    "Community",
    "Money & possessions",
    "noun",
    "B1",
    "A regular payment to a person that is intended to allow them to subsist without working.",
    "The lesson uses “pension” in a carefully reviewed vocabulary context."
  ],
  [
    "pensioner",
    "/ˈpɛnʃənɚ/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "The beneficiary of a pension fund.",
    "The lesson uses “pensioner” in a carefully reviewed vocabulary context."
  ],
  [
    "people",
    "/ˈpiːpəl/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "(plural) any group of human beings (men or women or children) collectively.",
    "Old people."
  ],
  [
    "percent",
    "/pəˈsɛnt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A proportion in relation to a whole (which is usually the amount per hundred); ten percent.",
    "The lesson uses “percent” in a carefully reviewed vocabulary context."
  ],
  [
    "perception",
    "/pəˈsɛpʃ(ə)n/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "The process of perceiving.",
    "The lesson uses “perception” in a carefully reviewed vocabulary context."
  ],
  [
    "performance",
    "/pəɹ.ˈfɔɹ.məns/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "The act of performing; of doing something successfully; using knowledge as distinguished from merely possessing it.",
    "They criticized his performance as mayor."
  ],
  [
    "performer",
    "/pɚˈfɔɹmɚ/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "An entertainer who performs a dramatic or musical work for an audience.",
    "The lesson uses “performer” in a carefully reviewed vocabulary context."
  ],
  [
    "period",
    "/ˈpɪə.rɪ.əd/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A punctuation mark (‘.’) placed at the end of a declarative sentence to indicate a full stop or after abbreviations.",
    "In England they call a period a ‘stop’."
  ],
  [
    "permission",
    "/pəˈmɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "Approval to do something.",
    "He asked permission to leave."
  ],
  [
    "person",
    "/ˈpɜːsən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A human being; person, singular, assertive existential pronoun; pronoun, person, singular; quantifier: assertive existential.",
    "There was too much for one person to do."
  ],
  [
    "personality",
    "/pɜːsəˈnælətɪ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The complex of all the attributes — behavioral, temperamental, emotional and mental — that characterize a unique individual.",
    "Their different reactions reflected their very different personalities."
  ],
  [
    "pest",
    "/pɛst/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A persistently annoying person.",
    "The lesson uses “pest” in a carefully reviewed vocabulary context."
  ],
  [
    "pet",
    "Listen for pronunciation",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "A domesticated animal kept for companionship or amusement.",
    "The lesson uses “pet” in a carefully reviewed vocabulary context."
  ],
  [
    "phenomenon",
    "/fɪˈnɒmənɒn/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Any state or process known through the senses rather than by intuition or reasoning.",
    "The lesson uses “phenomenon” in a carefully reviewed vocabulary context."
  ],
  [
    "philosopher",
    "/fɪˈlɒs.ə.fə(ɹ)/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A specialist in philosophy.",
    "The lesson uses “philosopher” in a carefully reviewed vocabulary context."
  ],
  [
    "philosophy",
    "/fɪˈlɒsəfi/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "The rational investigation of questions about existence and knowledge and ethics.",
    "The lesson uses “philosophy” in a carefully reviewed vocabulary context."
  ],
  [
    "photograph",
    "/ˈfəʊ.tə.ˌɡɹɑːf/",
    "Technology",
    "IT & computers",
    "noun",
    "B2",
    "A representation of a person or scene in the form of a print or transparent slide or in digital format.",
    "The lesson uses “photograph” in a carefully reviewed vocabulary context."
  ],
  [
    "photography",
    "/fəˈtɒɡɹəfi/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of taking and printing photographs.",
    "The lesson uses “photography” in a carefully reviewed vocabulary context."
  ],
  [
    "piano",
    "/piˈænoʊ/",
    "Technology",
    "IT & computers",
    "noun",
    "A2",
    "A keyboard instrument that is played by depressing keys that cause hammers to strike tuned strings and produce sounds.",
    "The lesson uses “piano” in a carefully reviewed vocabulary context."
  ],
  [
    "picture",
    "/ˈpɪktʃə/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A visual representation (of an object or scene or person or abstraction) produced on a surface.",
    "They showed us the pictures of their wedding."
  ],
  [
    "piece",
    "/piːs/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A separate part of a whole.",
    "An important piece of the evidence."
  ],
  [
    "pier",
    "/pɪə/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A support for two adjacent bridge spans.",
    "The lesson uses “pier” in a carefully reviewed vocabulary context."
  ],
  [
    "pile",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "A collection of objects laid on top of each other.",
    "The lesson uses “pile” in a carefully reviewed vocabulary context."
  ],
  [
    "pill",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A contraceptive in the form of a pill containing estrogen and progestin to inhibit ovulation and so prevent conception.",
    "The lesson uses “pill” in a carefully reviewed vocabulary context."
  ],
  [
    "pin",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A number you choose and use to gain access to various accounts.",
    "The lesson uses “pin” in a carefully reviewed vocabulary context."
  ],
  [
    "pioneer",
    "/ˌpaɪəˈnɪəɹ/",
    "School",
    "University & academic English",
    "noun",
    "B1",
    "Someone who helps to open up a new line of research or technology or art.",
    "The lesson uses “pioneer” in a carefully reviewed vocabulary context."
  ],
  [
    "pipe",
    "/paɪp/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A hollow cylindrical shape.",
    "The lesson uses “pipe” in a carefully reviewed vocabulary context."
  ],
  [
    "pit",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A trap in the form of a concealed hole.",
    "The lesson uses “pit” in a carefully reviewed vocabulary context."
  ],
  [
    "pitch",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The property of sound that varies with variation in the frequency of vibration.",
    "The lesson uses “pitch” in a carefully reviewed vocabulary context."
  ],
  [
    "pity",
    "/ˈpɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The humane quality of understanding the suffering of others and wanting to do something about it.",
    "The lesson uses “pity” in a carefully reviewed vocabulary context."
  ],
  [
    "place",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "A point located with respect to surface features of some region.",
    "This is a nice place for a picnic."
  ],
  [
    "plaintiff",
    "/ˈpleɪntɪf/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person who brings an action in a court of law.",
    "The lesson uses “plaintiff” in a carefully reviewed vocabulary context."
  ],
  [
    "plan",
    "/plæn/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "An arrangement scheme.",
    "A plan for seating guests."
  ],
  [
    "plane",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "An aircraft that has a fixed wing and is powered by propellers or jets.",
    "The flight was delayed due to trouble with the airplane."
  ],
  [
    "planet",
    "/ˈplænɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "(astronomy) any of the nine large celestial bodies in the solar system that revolve around the sun and shine by reflected light; Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto in order of their proximity to the sun; viewed from the constellation Hercules, all the planets rotate around the sun in a counterclockwise direction.",
    "The lesson uses “planet” in a carefully reviewed vocabulary context."
  ],
  [
    "plaster",
    "/ˈplæstɚ/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Adhesive tape used in dressing wounds.",
    "The lesson uses “plaster” in a carefully reviewed vocabulary context."
  ],
  [
    "plastic",
    "/ˈplæstɪk/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Generic name for certain synthetic or semisynthetic materials that can be molded or extruded into objects or films or filaments or used for making e.g. coatings and adhesives.",
    "The lesson uses “plastic” in a carefully reviewed vocabulary context."
  ],
  [
    "play",
    "/pleɪ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "Activity by children that is guided more by imagination than by fixed rules.",
    "Freud believed in the utility of play to a small child."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch026 = createVocabularyBatch({
  id: "batch-026",
  source,
  entries,
})

export const batch026Metadata = {
  id: "batch-026",
  title: "Open English WordNet core vocabulary 1701–1800",
  addedWords: batch026.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
