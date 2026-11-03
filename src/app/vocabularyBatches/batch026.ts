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
    "“optimism” means a general disposition to expect the best in all things."
  ],
  [
    "option",
    "/ˈɒpʃən/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "The right to buy or sell property at an agreed price; the right is purchased and if it is not exercised by a stated date the money is forfeited.",
    "“option” means the right to buy or sell property at an agreed price; the right is purchased and if it is not exercised by a stated date the money is forfeited."
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
    "“orchestra” means a musical organization consisting of a group of instrumentalists including string players."
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
    "“organ” means wind instrument whose sound is produced by means of pipes arranged in sets supplied with air from a bellows and controlled from a large complex musical keyboard."
  ],
  [
    "organisation",
    "/ˈɔː(ɹ).ɡən.aɪˌzeɪ.ʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "C1",
    "A group of people who work together.",
    "“organisation” means a group of people who work together."
  ],
  [
    "orientation",
    "/ˌɔɹiɛnˈteɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Position or alignment relative to points of the compass or other specific directions.",
    "“orientation” means position or alignment relative to points of the compass or other specific directions."
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
    "“outlet” means a place of business for retailing goods."
  ],
  [
    "outline",
    "/ˈaʊtlaɪn/",
    "School",
    "University & academic English",
    "noun",
    "B1",
    "A sketchy summary of the main points of an argument or theory.",
    "“outline” means a sketchy summary of the main points of an argument or theory."
  ],
  [
    "outlook",
    "/ˈaʊtˌlʊk/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A habitual or characteristic mental attitude that determines how you will interpret and respond to situations.",
    "“outlook” means a habitual or characteristic mental attitude that determines how you will interpret and respond to situations."
  ],
  [
    "output",
    "/ˈaʊtpʊt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Final product; the things produced.",
    "“output” means final product; the things produced."
  ],
  [
    "overall",
    "/ˌəʊvəɹˈɔːl/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "(usually plural) work clothing consisting of denim trousers (usually with a bib and shoulder straps).",
    "“overall” means (usually plural) work clothing consisting of denim trousers (usually with a bib and shoulder straps)."
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
    "“ownership” means the relation of an owner to the thing possessed; possession with the right to transfer possession to others."
  ],
  [
    "oxygen",
    "/ˈɒksɪdʒən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A nonmetallic bivalent element that is normally a colorless odorless tasteless nonflammable diatomic gas; constitutes 21 percent of the atmosphere by volume; the most abundant element in the earth's crust.",
    "“oxygen” means a nonmetallic bivalent element that is normally a colorless odorless tasteless nonflammable diatomic gas; constitutes 21 percent of the atmosphere by volume; the most abundant element in the earth's crust."
  ],
  [
    "pace",
    "/peɪs/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A1",
    "The rate of some repeating event.",
    "“pace” means the rate of some repeating event."
  ],
  [
    "pack",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A bundle (especially one carried on the back).",
    "“pack” means a bundle (especially one carried on the back)."
  ],
  [
    "package",
    "/ˈpækɪdʒ/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "A collection of things wrapped or boxed together.",
    "“package” means a collection of things wrapped or boxed together."
  ],
  [
    "packet",
    "/ˈpak.ɪt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A small package or bundle.",
    "“packet” means a small package or bundle."
  ],
  [
    "page",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "One side of one leaf (of a book or magazine or newspaper or letter etc.) or the written or pictorial matter it contains.",
    "“page” means one side of one leaf (of a book or magazine or newspaper or letter etc.) or the written or pictorial matter it contains."
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
    "“pair” means two people considered as a unit."
  ],
  [
    "palace",
    "/ˈpælɪs/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Official residence of an exalted person (as a sovereign).",
    "“palace” means official residence of an exalted person (as a sovereign)."
  ],
  [
    "palm",
    "Listen for pronunciation",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A1",
    "Any plant of the family Palmae having an unbranched trunk crowned by large pinnate or palmate leaves.",
    "“palm” means any plant of the family Palmae having an unbranched trunk crowned by large pinnate or palmate leaves."
  ],
  [
    "pan",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Cooking utensil consisting of a wide metal vessel.",
    "“pan” means cooking utensil consisting of a wide metal vessel."
  ],
  [
    "panel",
    "/ˈpænəl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Sheet that forms a distinct (usually flat and rectangular) section or component of something.",
    "“panel” means sheet that forms a distinct (usually flat and rectangular) section or component of something."
  ],
  [
    "panic",
    "Listen for pronunciation",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "An overwhelming feeling of fear and anxiety.",
    "“panic” means an overwhelming feeling of fear and anxiety."
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
    "“parameter” means any factor that defines a system and determines (or limits) its performance."
  ],
  [
    "pardon",
    "/ˈpɑɹ.dən/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A warrant granting release from punishment for an offense.",
    "“pardon” means a warrant granting release from punishment for an offense."
  ],
  [
    "parliament",
    "/ˈpɑːləmənt/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A legislative assembly in certain countries.",
    "“parliament” means a legislative assembly in certain countries."
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
    "“particle” means a body having finite mass and internal structure but negligible dimensions."
  ],
  [
    "partnership",
    "/ˈpɑːtnəʃɪp/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A contract between two or more persons who agree to pool talent and money and share profits or losses.",
    "“partnership” means a contract between two or more persons who agree to pool talent and money and share profits or losses."
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
    "“passion” means a strong feeling or emotion."
  ],
  [
    "pastel",
    "/ˈpæstəl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Any of various pale or light colors.",
    "“pastel” means any of various pale or light colors."
  ],
  [
    "pasture",
    "/ˈpɑːstjə/",
    "Places",
    "Places & locations",
    "noun",
    "B1",
    "A field covered with grass or herbage and suitable for grazing by livestock.",
    "“pasture” means a field covered with grass or herbage and suitable for grazing by livestock."
  ],
  [
    "patch",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A piece of cloth used as decoration or to mend or cover a hole.",
    "“patch” means a piece of cloth used as decoration or to mend or cover a hole."
  ],
  [
    "patent",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A document granting an inventor sole rights to an invention.",
    "“patent” means a document granting an inventor sole rights to an invention."
  ],
  [
    "patience",
    "/ˈpeɪʃəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Good-natured tolerance of delay or incompetence.",
    "“patience” means good-natured tolerance of delay or incompetence."
  ],
  [
    "patrol",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A detachment used for security or reconnaissance.",
    "“patrol” means a detachment used for security or reconnaissance."
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
    "“pause” means temporary inactivity."
  ],
  [
    "pavement",
    "/ˈpeɪvmənt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Walk consisting of a paved area for pedestrians; usually beside a street or roadway.",
    "“pavement” means walk consisting of a paved area for pedestrians; usually beside a street or roadway."
  ],
  [
    "payment",
    "/ˈpeɪmənt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The act of paying money.",
    "“payment” means the act of paying money."
  ],
  [
    "peace",
    "/piːs/",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "The absence of mental stress or anxiety.",
    "“peace” means the absence of mental stress or anxiety."
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
    "“peanut” means pod of the peanut vine containing usually 2 nuts or seeds; ‘groundnut’ and ‘monkey nut’ are British terms."
  ],
  [
    "peasant",
    "/ˈpɛzənt/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "One of a (chiefly European) class of agricultural laborers.",
    "“peasant” means one of a (chiefly European) class of agricultural laborers."
  ],
  [
    "penalty",
    "/ˈpɛnəlti/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The act of punishing, or the infliction of a penalty.",
    "“penalty” means the act of punishing, or the infliction of a penalty."
  ],
  [
    "penny",
    "/ˈpɛ.ni/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "A coin worth one-hundredth of the value of the basic unit.",
    "“penny” means a coin worth one-hundredth of the value of the basic unit."
  ],
  [
    "pension",
    "/ˈpɛnʃ(ə)n/",
    "Community",
    "Money & possessions",
    "noun",
    "B1",
    "A regular payment to a person that is intended to allow them to subsist without working.",
    "“pension” means a regular payment to a person that is intended to allow them to subsist without working."
  ],
  [
    "pensioner",
    "/ˈpɛnʃənɚ/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "The beneficiary of a pension fund.",
    "“pensioner” means the beneficiary of a pension fund."
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
    "“percent” means a proportion in relation to a whole (which is usually the amount per hundred); ten percent."
  ],
  [
    "perception",
    "/pəˈsɛpʃ(ə)n/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "The process of perceiving.",
    "“perception” means the process of perceiving."
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
    "“performer” means an entertainer who performs a dramatic or musical work for an audience."
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
    "“pest” means a persistently annoying person."
  ],
  [
    "pet",
    "Listen for pronunciation",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "A domesticated animal kept for companionship or amusement.",
    "“pet” means a domesticated animal kept for companionship or amusement."
  ],
  [
    "phenomenon",
    "/fɪˈnɒmənɒn/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Any state or process known through the senses rather than by intuition or reasoning.",
    "“phenomenon” means any state or process known through the senses rather than by intuition or reasoning."
  ],
  [
    "philosopher",
    "/fɪˈlɒs.ə.fə(ɹ)/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A specialist in philosophy.",
    "“philosopher” means a specialist in philosophy."
  ],
  [
    "philosophy",
    "/fɪˈlɒsəfi/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "The rational investigation of questions about existence and knowledge and ethics.",
    "“philosophy” means the rational investigation of questions about existence and knowledge and ethics."
  ],
  [
    "photograph",
    "/ˈfəʊ.tə.ˌɡɹɑːf/",
    "Technology",
    "IT & computers",
    "noun",
    "B2",
    "A representation of a person or scene in the form of a print or transparent slide or in digital format.",
    "“photograph” means a representation of a person or scene in the form of a print or transparent slide or in digital format."
  ],
  [
    "photography",
    "/fəˈtɒɡɹəfi/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of taking and printing photographs.",
    "“photography” means the act of taking and printing photographs."
  ],
  [
    "piano",
    "/piˈænoʊ/",
    "Art, Literature & Culture",
    "Music & performance",
    "noun",
    "A2",
    "A keyboard instrument that is played by depressing keys that cause hammers to strike tuned strings and produce sounds.",
    "She practices the piano after class."
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
    "“pier” means a support for two adjacent bridge spans."
  ],
  [
    "pile",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "A collection of objects laid on top of each other.",
    "“pile” means a collection of objects laid on top of each other."
  ],
  [
    "pill",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A contraceptive in the form of a pill containing estrogen and progestin to inhibit ovulation and so prevent conception.",
    "“pill” means a contraceptive in the form of a pill containing estrogen and progestin to inhibit ovulation and so prevent conception."
  ],
  [
    "pin",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A number you choose and use to gain access to various accounts.",
    "“pin” means a number you choose and use to gain access to various accounts."
  ],
  [
    "pioneer",
    "/ˌpaɪəˈnɪəɹ/",
    "School",
    "University & academic English",
    "noun",
    "B1",
    "Someone who helps to open up a new line of research or technology or art.",
    "“pioneer” means someone who helps to open up a new line of research or technology or art."
  ],
  [
    "pipe",
    "/paɪp/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A hollow cylindrical shape.",
    "“pipe” means a hollow cylindrical shape."
  ],
  [
    "pit",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A trap in the form of a concealed hole.",
    "“pit” means a trap in the form of a concealed hole."
  ],
  [
    "pitch",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The property of sound that varies with variation in the frequency of vibration.",
    "“pitch” means the property of sound that varies with variation in the frequency of vibration."
  ],
  [
    "pity",
    "/ˈpɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The humane quality of understanding the suffering of others and wanting to do something about it.",
    "“pity” means the humane quality of understanding the suffering of others and wanting to do something about it."
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
    "“plaintiff” means a person who brings an action in a court of law."
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
    "Transportation",
    "Air travel",
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
    "A large, nearly round object in space that moves around a star; our solar system has eight planets.",
    "Earth is the third planet from the Sun."
  ],
  [
    "plaster",
    "/ˈplæstɚ/",
    "Architecture & Construction",
    "Building materials",
    "noun",
    "B1",
    "A material spread over walls or ceilings that becomes hard and smooth when it dries.",
    "Workers applied fresh plaster to the damaged wall."
  ],
  [
    "plastic",
    "/ˈplæstɪk/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Generic name for certain synthetic or semisynthetic materials that can be molded or extruded into objects or films or filaments or used for making e.g. coatings and adhesives.",
    "“plastic” means generic name for certain synthetic or semisynthetic materials that can be molded or extruded into objects or films or filaments or used for making e.g. coatings and adhesives."
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
