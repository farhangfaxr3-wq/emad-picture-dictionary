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
    "“edition” means the form in which a text (especially a printed book) is published."
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
    "“ego” means an inflated feeling of pride in your superiority to others."
  ],
  [
    "electorate",
    "/ɪˈlɛktəɹət/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "The body of enfranchised citizens; those qualified to vote.",
    "“electorate” means the body of enfranchised citizens; those qualified to vote."
  ],
  [
    "electricity",
    "/ˌiːlekˈtɹɪsɪti/",
    "Nature",
    "Natural phenomena",
    "noun",
    "B2",
    "A physical phenomenon associated with stationary or moving electrons and protons.",
    "“electricity” means a physical phenomenon associated with stationary or moving electrons and protons."
  ],
  [
    "electron",
    "/ɪˈlɛk.tɹɒn/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "An elementary particle with negative charge.",
    "“electron” means an elementary particle with negative charge."
  ],
  [
    "electronics",
    "Listen for pronunciation",
    "Technology",
    "IT & computers",
    "noun",
    "B2",
    "The branch of physics that deals with the emission and effects of electrons and with the use of electronic devices.",
    "“electronics” means the branch of physics that deals with the emission and effects of electrons and with the use of electronic devices."
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
    "“elite” means a group or class of persons enjoying superior intellectual or social or economic status."
  ],
  [
    "embarrassment",
    "/ɪmˈbæɹəsmənt/",
    "People",
    "Feelings & emotions",
    "noun",
    "C1",
    "The shame you feel when your inadequacy or guilt is made public.",
    "“embarrassment” means the shame you feel when your inadequacy or guilt is made public."
  ],
  [
    "embryo",
    "/ˈɛmbɹi.əʊ/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A2",
    "An animal organism in the early stages of growth and differentiation that in higher forms merge into fetal stages but in lower forms terminate in commencement of larval life.",
    "“embryo” means an animal organism in the early stages of growth and differentiation that in higher forms merge into fetal stages but in lower forms terminate in commencement of larval life."
  ],
  [
    "emotion",
    "/ɪˈmoʊʃən/",
    "People",
    "Feelings & emotions",
    "noun",
    "B1",
    "Any strong feeling.",
    "“emotion” means any strong feeling."
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
    "“empire” means a monarchy with an emperor as head of state."
  ],
  [
    "employee",
    "/ɛmplɔɪˈiː/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A worker who is hired to perform a job.",
    "“employee” means a worker who is hired to perform a job."
  ],
  [
    "employer",
    "/ɪmˈplɔɪɚ/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person or firm that employs workers.",
    "“employer” means a person or firm that employs workers."
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
    "“entertainment” means an activity that is diverting and that holds the attention."
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
    "“episode” means a part of a broadcast serial."
  ],
  [
    "equation",
    "/ɪˈkweɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A mathematical statement that two expressions are equal.",
    "“equation” means a mathematical statement that two expressions are equal."
  ],
  [
    "equilibrium",
    "/ɛkwɪˈlɪbɹɪəm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A stable situation in which forces cancel one another.",
    "“equilibrium” means a stable situation in which forces cancel one another."
  ],
  [
    "equipment",
    "/ɪˈkwɪpmənt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "An instrumentality needed for an undertaking or to perform a service.",
    "“equipment” means an instrumentality needed for an undertaking or to perform a service."
  ],
  [
    "era",
    "/ˈɪə̯ɹ.ə/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A1",
    "A period marked by distinctive character or reckoned from a fixed point or event.",
    "“era” means a period marked by distinctive character or reckoned from a fixed point or event."
  ],
  [
    "erosion",
    "/əˈɹoʊʒən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Condition in which the earth's surface is worn away by the action of water and wind.",
    "“erosion” means condition in which the earth's surface is worn away by the action of water and wind."
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
    "“essay” means an analytic or interpretive literary composition."
  ],
  [
    "essence",
    "/ˈɛsəns/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A toiletry that emits and diffuses a fragrant odor.",
    "“essence” means a toiletry that emits and diffuses a fragrant odor."
  ],
  [
    "estate",
    "/ɪsˈteɪt/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "Everything you own; all of your assets (whether real property or personal property) and liabilities.",
    "“estate” means everything you own; all of your assets (whether real property or personal property) and liabilities."
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
    "“ethics” means the philosophical study of moral values and rules."
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
    "“evolution” means (biology) the sequence of events involved in the evolutionary development of a species or taxonomic group of organisms."
  ],
  [
    "examination",
    "/ɪɡˌzæmɪˈneɪʃən/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "The act of giving students or candidates a test (as by questions) to determine what they know or have learned.",
    "“examination” means the act of giving students or candidates a test (as by questions) to determine what they know or have learned."
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
    "“excess” means a quantity much larger than is needed."
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
    "“excitement” means disturbance usually in protest."
  ],
  [
    "execution",
    "/ˌek.sɪˈkjuː.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Putting a condemned person to death.",
    "“execution” means putting a condemned person to death."
  ],
  [
    "executive",
    "/ɪɡˈzɛkjʊtɪv/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "Persons who administer the law.",
    "“executive” means persons who administer the law."
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
    "“exhibition” means a collection of things (goods or works of art etc.) for public display."
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
    "“expansion” means the act of increasing (something) in size or volume or quantity or scope."
  ],
  [
    "expectation",
    "/ɛkspɛkˈteɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Anticipating with confidence of fulfillment.",
    "“expectation” means anticipating with confidence of fulfillment."
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
    "“expenditure” means money paid out; an amount spent."
  ],
  [
    "expert",
    "/ˈɛkspɚt/",
    "School",
    "University & academic English",
    "noun",
    "A2",
    "A person with special knowledge or ability who performs skillfully.",
    "“expert” means a person with special knowledge or ability who performs skillfully."
  ],
  [
    "expertise",
    "/ˌɛkspəˈtiːz/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "Skillfulness by virtue of possessing special knowledge.",
    "“expertise” means skillfulness by virtue of possessing special knowledge."
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
    "“exploration” means to travel for the purpose of discovery."
  ],
  [
    "explosion",
    "/ɪkˈspləʊ.ʒən/",
    "Community",
    "Events",
    "noun",
    "B2",
    "A violent release of energy caused by a chemical or nuclear reaction.",
    "“explosion” means a violent release of energy caused by a chemical or nuclear reaction."
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
    "“extension” means an addition that extends a main building."
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
    "“extraterrestrial” means a form of life assumed to exist outside the Earth or its atmosphere."
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
    "“eyebrow” means the arch of hair above each eye."
  ],
  [
    "facade",
    "/fəˈsaːd/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "The face or front of a building.",
    "“facade” means the face or front of a building."
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
    "“failure” means a person with a record of failing; someone who loses consistently."
  ],
  [
    "fairy",
    "/ˈfɛə̯ɹi/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A small being, human in form, playful and having magical powers.",
    "“fairy” means a small being, human in form, playful and having magical powers."
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
    "“fame” means the state or quality of being widely honored and acclaimed."
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
    "“fan” means an ardent follower and admirer."
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
    "“fashion” means the latest and most admired style in clothes and cosmetics and behavior."
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
    "“favor” means an act of gracious kindness."
  ],
  [
    "favour",
    "/ˈfeɪ.və/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "An act of gracious kindness.",
    "“favour” means an act of gracious kindness."
  ],
  [
    "favourite",
    "/ˈfeɪv.ɹɪt/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A special loved one.",
    "“favourite” means a special loved one."
  ],
  [
    "fax",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Duplicator that transmits the copy by wire or radio.",
    "“fax” means duplicator that transmits the copy by wire or radio."
  ],
  [
    "fear",
    "Listen for pronunciation",
    "People",
    "Feelings & emotions",
    "noun",
    "A1",
    "An emotion experienced in anticipation of some specific pain or danger (usually accompanied by a desire to flee or fight).",
    "“fear” means an emotion experienced in anticipation of some specific pain or danger (usually accompanied by a desire to flee or fight)."
  ],
  [
    "feast",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A ceremonial dinner party for many people.",
    "“feast” means a ceremonial dinner party for many people."
  ],
  [
    "feather",
    "/ˈfɛð.ə(ɹ)/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "B1",
    "Branching, hair-like structure that grows on the bodies of birds.",
    "“feather” means branching, hair-like structure that grows on the bodies of birds."
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
    "“federation” means a union of political organizations."
  ],
  [
    "fee",
    "/fiː/",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "A fixed charge for a privilege or for professional services.",
    "“fee” means a fixed charge for a privilege or for professional services."
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
    "“feminist” means a supporter of feminism."
  ],
  [
    "fibre",
    "/ˈfaɪ.bə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A slender and greatly elongated substance capable of being spun into yarn.",
    "“fibre” means a slender and greatly elongated substance capable of being spun into yarn."
  ],
  [
    "fiction",
    "/ˈfɪk.ʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A literary work based on the imagination and not necessarily on fact.",
    "“fiction” means a literary work based on the imagination and not necessarily on fact."
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
