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
    "“confession” means an admission of misdeeds or faults."
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
    "“confrontation” means discord resulting from a clash of ideas or opinions."
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
    "“conglomerate” means a group of diverse companies under common ownership and run as a single organization."
  ],
  [
    "congress",
    "/ˈkɑŋɡɹəs/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "A national legislative assembly.",
    "“congress” means a national legislative assembly."
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
    "“conscience” means motivation deriving logically from ethical or moral principles that govern a person's thoughts and actions."
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
    "“conspiracy” means a plot to carry out some harmful or illegal act (especially a political plot)."
  ],
  [
    "constellation",
    "/ˌkɒn.stəˈleɪ.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "A configuration of stars as seen from the earth.",
    "“constellation” means a configuration of stars as seen from the earth."
  ],
  [
    "constituency",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "C1",
    "The body of voters who elect a representative for their area.",
    "“constituency” means the body of voters who elect a representative for their area."
  ],
  [
    "constitution",
    "/ˌkɒnstɪˈtjuːʃ(ə)n/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "The way in which someone or something is composed.",
    "“constitution” means the way in which someone or something is composed."
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
    "“consumer” means a person who uses goods or services."
  ],
  [
    "consumption",
    "/kənˈsʌmp.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The process of taking food into the body through the mouth (as by eating).",
    "“consumption” means the process of taking food into the body through the mouth (as by eating)."
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
    "“contemporary” means a person of nearly the same age as another."
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
    "“contest” means a struggle between rivals."
  ],
  [
    "context",
    "/ˈ kɒn.tɛkst/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "Discourse that surrounds a language unit and helps to determine its interpretation.",
    "“context” means discourse that surrounds a language unit and helps to determine its interpretation."
  ],
  [
    "continuation",
    "/kəntɪnjʊˈeɪʃ(ə)n/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "The consequence of being lengthened in duration.",
    "“continuation” means the consequence of being lengthened in duration."
  ],
  [
    "contraction",
    "/kɒnˈtɹæk.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "(physiology) a shortening or tensing of a part or organ (especially of a muscle or muscle fiber).",
    "“contraction” means (physiology) a shortening or tensing of a part or organ (especially of a muscle or muscle fiber)."
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
    "“contribution” means act of giving in common with others for a common purpose especially to a charity."
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
    "“convenience” means a device or control that is very useful for a particular job."
  ],
  [
    "convention",
    "/kənˈvɛn.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Orthodoxy as a consequence of being conventional.",
    "“convention” means orthodoxy as a consequence of being conventional."
  ],
  [
    "conviction",
    "/kənˈvɪkʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "An unshakable belief in something without need for proof or evidence.",
    "“conviction” means an unshakable belief in something without need for proof or evidence."
  ],
  [
    "cook",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A1",
    "Someone who cooks food.",
    "“cook” means someone who cooks food."
  ],
  [
    "copper",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A ductile malleable reddish-brown corrosion-resistant diamagnetic metallic element; occurs in various minerals but is the only metal that occurs abundantly in large masses; used as an electrical and thermal conductor.",
    "“copper” means a ductile malleable reddish-brown corrosion-resistant diamagnetic metallic element; occurs in various minerals but is the only metal that occurs abundantly in large masses; used as an electrical and thermal conductor."
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
    "“copyright” means a document granting exclusive right to publish and sell literary or musical or artistic work."
  ],
  [
    "cord",
    "/kɔɹd/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A cut pile fabric with vertical ribs; usually made of cotton.",
    "“cord” means a cut pile fabric with vertical ribs; usually made of cotton."
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
    "“corn” means ears of corn that can be prepared and served for human food."
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
    "“correction” means the act of offering an improvement to replace a mistake; setting right."
  ],
  [
    "correlation",
    "/kɔɹəˈleɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A reciprocal relation between two or more things.",
    "“correlation” means a reciprocal relation between two or more things."
  ],
  [
    "correspondence",
    "/ˌkɒɹɪˈspɒndəns/",
    "Communication",
    "Language & communication",
    "noun",
    "C1",
    "Communication by the exchange of letters.",
    "“correspondence” means communication by the exchange of letters."
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
    "“cottage” means a small house with a single story."
  ],
  [
    "counter",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Table consisting of a horizontal surface over which business is transacted.",
    "“counter” means table consisting of a horizontal surface over which business is transacted."
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
    "“coup” means a sudden and decisive change of government illegally or by force."
  ],
  [
    "courage",
    "/ˈkʌɹɪdʒ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A quality of spirit that enables you to face danger or pain without showing fear.",
    "“courage” means a quality of spirit that enables you to face danger or pain without showing fear."
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
    "“courtesy” means a courteous or respectful or considerate act."
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
    "“crack” means witty remark."
  ],
  [
    "craft",
    "/kɹɑːft/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "Shrewdness as demonstrated by being skilled in deception.",
    "“craft” means shrewdness as demonstrated by being skilled in deception."
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
    "“creation” means the human act of creating."
  ],
  [
    "credibility",
    "/kɹɛd.ə.ˈbɪ.ɫɪ.ti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The quality of being believable or trustworthy.",
    "“credibility” means the quality of being believable or trustworthy."
  ],
  [
    "credit",
    "/ˈkɹɛdɪt/",
    "School",
    "University & academic English",
    "noun",
    "A2",
    "Recognition by a college or university that a course of studies has been successfully completed; typically measured in semester hours.",
    "“credit” means recognition by a college or university that a course of studies has been successfully completed; typically measured in semester hours."
  ],
  [
    "creed",
    "/kɹiːd/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "Any system of principles or beliefs.",
    "“creed” means any system of principles or beliefs."
  ],
  [
    "crew",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "The men and women who man a vehicle (ship, aircraft, etc.).",
    "“crew” means the men and women who man a vehicle (ship, aircraft, etc.)."
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
    "“criminal” means someone who has committed a crime or has been legally convicted of a crime."
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
    "“critic” means a person who is professionally engaged in the analysis and interpretation of works of art."
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
    "“crop” means the yield from plants in a single growing season."
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
    "“crossing” means a path (often marked) where something (as a street or railroad) can be crossed to get from one side to the other."
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
    "“crown” means an ornamental jeweled headdress signifying sovereignty."
  ],
  [
    "cruelty",
    "/ˈkɹuː(ə)lti/",
    "People",
    "Feelings & emotions",
    "noun",
    "B1",
    "Feelings of extreme heartlessness.",
    "“cruelty” means feelings of extreme heartlessness."
  ],
  [
    "crutch",
    "/kɹʌtʃ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A wooden or metal staff that fits under the armpit and reaches to the ground; used by disabled person while walking.",
    "“crutch” means a wooden or metal staff that fits under the armpit and reaches to the ground; used by disabled person while walking."
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
    "“curve” means curved segment (of a road or river or railroad track etc.)."
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
    "“cylinder” means a solid bounded by a cylindrical surface and two parallel planes (the bases)."
  ],
  [
    "dairy",
    "/ˈdɛəɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A farm where dairy products are produced.",
    "“dairy” means a farm where dairy products are produced."
  ],
  [
    "damage",
    "/ˈdæmɪdʒ/",
    "Community",
    "Events",
    "noun",
    "A2",
    "The occurrence of a change for the worse.",
    "“damage” means the occurrence of a change for the worse."
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
    "“date” means sweet edible fruit of the date palm with a single long woody seed."
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
    "“daylight” means light during the daytime."
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
    "“dealer” means someone who purchases and maintains an inventory of goods to be sold."
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
    "“debt” means money or goods or services owed by one person to another."
  ],
  [
    "decade",
    "/ˈdɛkeɪd/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A2",
    "A period of 10 years.",
    "“decade” means a period of 10 years."
  ],
  [
    "decay",
    "/dɪˈkeɪ/",
    "Nature",
    "Natural phenomena",
    "noun",
    "A2",
    "The organic phenomenon of rotting.",
    "“decay” means the organic phenomenon of rotting."
  ],
  [
    "deck",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Any of various platforms built into a vessel.",
    "“deck” means any of various platforms built into a vessel."
  ],
  [
    "declaration",
    "/ˌdɛkləˈɹeɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A statement that is emphatic and explicit (spoken or written).",
    "“declaration” means a statement that is emphatic and explicit (spoken or written)."
  ],
  [
    "decoration",
    "/ˌdɛkəˈɹeɪʃən/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "Something used to beautify.",
    "“decoration” means something used to beautify."
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
