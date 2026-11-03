import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "graphics",
    "/ˈɡɹæfɪks/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "The drawings and photographs in the layout of a book.",
    "“graphics” means the drawings and photographs in the layout of a book."
  ],
  [
    "grave",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A place for the burial of a corpse (especially beneath the ground and marked by a tombstone).",
    "He put flowers on his mother's grave."
  ],
  [
    "gravel",
    "/ˈɡɹævəl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Rock fragments and pebbles.",
    "“gravel” means rock fragments and pebbles."
  ],
  [
    "gravity",
    "/ˈɡɹævɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A manner that is serious and solemn.",
    "“gravity” means a manner that is serious and solemn."
  ],
  [
    "grief",
    "/ɡɹiːf/",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "Intense sorrow caused by loss of a loved one (especially by death).",
    "“grief” means intense sorrow caused by loss of a loved one (especially by death)."
  ],
  [
    "grimace",
    "/ˈɡɹɪm.əs/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A contorted facial expression.",
    "She made a grimace at the prospect."
  ],
  [
    "grip",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "An intellectual hold or understanding.",
    "A good grip on French history."
  ],
  [
    "ground",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The solid part of the earth's surface.",
    "He dropped the logs on the ground."
  ],
  [
    "grounds",
    "Listen for pronunciation",
    "School",
    "University & academic English",
    "noun",
    "B1",
    "Your basis for belief or disbelief; knowledge on which to base belief.",
    "The evidence that smoking causes lung cancer is very compelling."
  ],
  [
    "growth",
    "/ɡɹoʊθ/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "Vegetation that has grown.",
    "A growth of trees."
  ],
  [
    "guarantee",
    "/ˌɡæɹənˈtiː/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A written assurance that some product or service will be provided or will meet certain specifications.",
    "“guarantee” means a written assurance that some product or service will be provided or will meet certain specifications."
  ],
  [
    "guard",
    "/ɡɑːd/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A military unit serving to protect some place or person.",
    "“guard” means a military unit serving to protect some place or person."
  ],
  [
    "guerrilla",
    "/ɡəˈɹɪlə/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A member of an irregular armed force that fights a stronger force by sabotage and harassment.",
    "“guerrilla” means a member of an irregular armed force that fights a stronger force by sabotage and harassment."
  ],
  [
    "guide",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "Something that offers basic information or instruction.",
    "“guide” means something that offers basic information or instruction."
  ],
  [
    "guideline",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A rule or principle that provides guidance to appropriate behavior.",
    "“guideline” means a rule or principle that provides guidance to appropriate behavior."
  ],
  [
    "guilt",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The state of having committed an offense.",
    "“guilt” means the state of having committed an offense."
  ],
  [
    "guitar",
    "/ɡɪˈtɑː(ɹ)/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A stringed instrument usually having six strings; played by strumming or plucking.",
    "“guitar” means a stringed instrument usually having six strings; played by strumming or plucking."
  ],
  [
    "gun",
    "/ɡʌn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A weapon that discharges a missile at high velocity (especially from a metal tube or barrel).",
    "“gun” means a weapon that discharges a missile at high velocity (especially from a metal tube or barrel)."
  ],
  [
    "gutter",
    "Listen for pronunciation",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "A channel along the eaves or on the roof; collects and carries away rainwater.",
    "“gutter” means a channel along the eaves or on the roof; collects and carries away rainwater."
  ],
  [
    "habit",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "An established custom.",
    "It was their habit to dine at 7 every evening."
  ],
  [
    "haircut",
    "Listen for pronunciation",
    "Health",
    "Body & anatomy",
    "noun",
    "B1",
    "The style in which hair has been cut.",
    "“haircut” means the style in which hair has been cut."
  ],
  [
    "half",
    "/hɑːf/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "One of two equal parts of a divisible whole.",
    "Half a loaf."
  ],
  [
    "hall",
    "/hɔːl/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A1",
    "A large building for meetings or entertainment.",
    "“hall” means a large building for meetings or entertainment."
  ],
  [
    "halt",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "An interruption or temporary suspension of progress or movement.",
    "A halt in the arms race."
  ],
  [
    "ham",
    "/ˈhæm/",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Meat cut from the thigh of a hog (usually smoked).",
    "“ham” means meat cut from the thigh of a hog (usually smoked)."
  ],
  [
    "harbour",
    "/ˈhɑːbə/",
    "Places",
    "Places & locations",
    "noun",
    "B1",
    "A sheltered port where ships can take on or discharge cargo.",
    "“harbour” means a sheltered port where ships can take on or discharge cargo."
  ],
  [
    "hardship",
    "/ˈhɑɹdˌʃɪp/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A state of misfortune or affliction.",
    "A life of hardship."
  ],
  [
    "hardware",
    "/ˈhɑːdˌwɛə/",
    "Technology",
    "IT & computers",
    "noun",
    "B1",
    "(computer science) the mechanical, magnetic, electronic, and electrical components making up a computer system.",
    "“hardware” means (computer science) the mechanical, magnetic, electronic, and electrical components making up a computer system."
  ],
  [
    "harmony",
    "/ˈhɑɹməni/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Compatibility in opinion and action.",
    "“harmony” means compatibility in opinion and action."
  ],
  [
    "harvest",
    "/ˈhɑɹ.vəst/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The season for gathering crops.",
    "“harvest” means the season for gathering crops."
  ],
  [
    "hay",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Grass mowed and cured for use as fodder.",
    "“hay” means grass mowed and cured for use as fodder."
  ],
  [
    "headline",
    "/ˈhɛd.laɪn/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "The heading or caption of a newspaper article.",
    "“headline” means the heading or caption of a newspaper article."
  ],
  [
    "headquarters",
    "/ˌhɛd.ˈkwɔː.təz/",
    "Home",
    "Objects & equipment",
    "noun",
    "C1",
    "(usually plural) the office that serves as the administrative center of an enterprise.",
    "Many companies have their headquarters in New York."
  ],
  [
    "health",
    "/hɛlθ/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "A2",
    "A healthy state of wellbeing free from disease.",
    "Physicians should be held responsible for the health of their patients."
  ],
  [
    "heart",
    "/hɑːt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A playing card in the major suit that has one or more red hearts on it.",
    "He led the queen of hearts."
  ],
  [
    "heat",
    "Listen for pronunciation",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A1",
    "Utility to warm a building.",
    "The heating system wasn't working."
  ],
  [
    "heaven",
    "/ˈhɛvən/",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "Any place of complete bliss and delight and peace.",
    "“heaven” means any place of complete bliss and delight and peace."
  ],
  [
    "height",
    "/haɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Elevation especially above sea level or above the earth's surface.",
    "The altitude gave her a headache."
  ],
  [
    "heir",
    "/ɛəɹ/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A person who is entitled by law or by the terms of a will to inherit the estate of another.",
    "“heir” means a person who is entitled by law or by the terms of a will to inherit the estate of another."
  ],
  [
    "hell",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "(religion) the world of the dead.",
    "[object Object]."
  ],
  [
    "help",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "The activity of contributing to the fulfillment of a need or furtherance of an effort or purpose.",
    "Offered his help in unloading."
  ],
  [
    "hemisphere",
    "/ˈhɛmɪsfɪə/",
    "Health",
    "Body & anatomy",
    "noun",
    "B2",
    "Either half of the cerebrum.",
    "“hemisphere” means either half of the cerebrum."
  ],
  [
    "hen",
    "Listen for pronunciation",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "Adult female chicken.",
    "“hen” means adult female chicken."
  ],
  [
    "herb",
    "/hɜːb/",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Aromatic potherb used in cookery for its savory qualities.",
    "“herb” means aromatic potherb used in cookery for its savory qualities."
  ],
  [
    "herd",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "A group of cattle or sheep or other domestic mammals all of the same kind that are herded by humans.",
    "“herd” means a group of cattle or sheep or other domestic mammals all of the same kind that are herded by humans."
  ],
  [
    "hero",
    "/ˈhɪɹ.oʊ/",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "A large sandwich made of a long crusty roll split lengthwise and filled with meats and cheese (and tomato and onion and lettuce and condiments); different names are used in different sections of the United States.",
    "“hero” means a large sandwich made of a long crusty roll split lengthwise and filled with meats and cheese (and tomato and onion and lettuce and condiments); different names are used in different sections of the United States."
  ],
  [
    "hierarchy",
    "/ˈhaɪ.ə.ɹɑː(ɹ).ki/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "The organization of people at different ranks in an administrative body.",
    "“hierarchy” means the organization of people at different ranks in an administrative body."
  ],
  [
    "highlight",
    "/ˈhaɪ.ˌlaɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The most interesting or memorable part.",
    "The highlight of the tour was our visit to the Vatican."
  ],
  [
    "hip",
    "/hɪp/",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "Either side of the body below the waist and above the thigh.",
    "“hip” means either side of the body below the waist and above the thigh."
  ],
  [
    "historian",
    "/hɪˈstɔːɹɪən/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person who is an authority on history and who studies it and writes about it.",
    "“historian” means a person who is an authority on history and who studies it and writes about it."
  ],
  [
    "hold",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A state of being confined (usually for a short time).",
    "The prisoner is on hold."
  ],
  [
    "hole",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "An opening into or through something.",
    "“hole” means an opening into or through something."
  ],
  [
    "holiday",
    "/ˈhɒlɪdeɪ/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "B1",
    "Leisure time away from work devoted to rest or pleasure.",
    "We took a short holiday in Puerto Rico."
  ],
  [
    "home",
    "/(h)əʊm/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Housing that someone is living in.",
    "He built a modest dwelling near the pond."
  ],
  [
    "honey",
    "/ˈhʌni/",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "A sweet yellow liquid produced by bees.",
    "“honey” means a sweet yellow liquid produced by bees."
  ],
  [
    "honour",
    "/ˈɒnə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The quality of being honorable and having a good name.",
    "A man of honor."
  ],
  [
    "hook",
    "/hʊk/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A curved or bent implement for suspending or pulling something.",
    "“hook” means a curved or bent implement for suspending or pulling something."
  ],
  [
    "hope",
    "Listen for pronunciation",
    "People",
    "Feelings & emotions",
    "noun",
    "A1",
    "The general feeling that some desire will be fulfilled.",
    "In spite of his troubles he never gave up hope."
  ],
  [
    "horn",
    "/hɔːn/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "One of the bony outgrowths on the heads of certain ungulates.",
    "“horn” means one of the bony outgrowths on the heads of certain ungulates."
  ],
  [
    "horoscope",
    "/ˈhɒ.ɹə.skəʊp/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A prediction of someone's future based on the relative positions of the planets.",
    "“horoscope” means a prediction of someone's future based on the relative positions of the planets."
  ],
  [
    "horror",
    "/ˈhɔɹɚ/",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "Intense aversion.",
    "“horror” means intense aversion."
  ],
  [
    "hospitality",
    "/hɑs.pɪˈtæl.ɪ.ti/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "Kindness in welcoming guests or strangers.",
    "“hospitality” means kindness in welcoming guests or strangers."
  ],
  [
    "hostage",
    "/ˈhɒstɪdʒ/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A prisoner who is held by one party to insure that another party will meet specified terms.",
    "“hostage” means a prisoner who is held by one party to insure that another party will meet specified terms."
  ],
  [
    "hostility",
    "/hɒˈstɪlɪti/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Violent action that is hostile and usually unprovoked.",
    "“hostility” means violent action that is hostile and usually unprovoked."
  ],
  [
    "hour",
    "/ˈaʊə(ɹ)/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A1",
    "A period of time equal to 1/24th of a day.",
    "The job will take more than an hour."
  ],
  [
    "houseplant",
    "Listen for pronunciation",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "B2",
    "Any of a variety of plants grown indoors for decorative purposes.",
    "“houseplant” means any of a variety of plants grown indoors for decorative purposes."
  ],
  [
    "housewife",
    "/ˈhaʊs.waɪf/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A wife who manages a household while her husband earns the family income.",
    "“housewife” means a wife who manages a household while her husband earns the family income."
  ],
  [
    "human body",
    "Listen for pronunciation",
    "Health",
    "Body & anatomy",
    "noun",
    "C1",
    "Alternative names for the body of a human being.",
    "Leonardo studied the human body."
  ],
  [
    "humanity",
    "/hjuˈmænɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The quality of being human.",
    "He feared the speedy decline of all manhood."
  ],
  [
    "humour",
    "/ˈhjuː.mə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The trait of appreciating (and being able to express) the humorous.",
    "She didn't appreciate my humor."
  ],
  [
    "hunter",
    "/ˈhʌntɚ/",
    "Sports",
    "Sports vocabulary",
    "noun",
    "A2",
    "Someone who hunts game.",
    "“hunter” means someone who hunts game."
  ],
  [
    "hunting",
    "Listen for pronunciation",
    "Sports",
    "Sports vocabulary",
    "noun",
    "B1",
    "The pursuit and killing or capture of wild animals regarded as a sport.",
    "“hunting” means the pursuit and killing or capture of wild animals regarded as a sport."
  ],
  [
    "hut",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Small crude shelter used as a dwelling.",
    "“hut” means small crude shelter used as a dwelling."
  ],
  [
    "hypothesis",
    "/haɪˈpɒθɪsɪs/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A message expressing an opinion based on incomplete evidence.",
    "“hypothesis” means a message expressing an opinion based on incomplete evidence."
  ],
  [
    "ice",
    "/aɪs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Water frozen in the solid state.",
    "Americans like ice in their drinks."
  ],
  [
    "idea",
    "/aɪˈdɪə/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "The content of cognition; the main thing you are thinking about.",
    "It was not a good idea."
  ],
  [
    "ideal",
    "/aɪˈdɪəl/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "Model of excellence or perfection of a kind; one having no equal.",
    "“ideal” means model of excellence or perfection of a kind; one having no equal."
  ],
  [
    "identification",
    "/ɪˌdɛntɪfɪˈkeɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "C1",
    "Evidence of identity; something that identifies a person or thing.",
    "“identification” means evidence of identity; something that identifies a person or thing."
  ],
  [
    "identity",
    "/aɪˈdɛntəti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The distinct personality of an individual regarded as a persisting entity.",
    "You can lose your identity when you join the army."
  ],
  [
    "ideology",
    "/aɪ.di.ˈɑl.ə.d͡ʒi/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "An orientation that characterizes the thinking of a group or nation.",
    "“ideology” means an orientation that characterizes the thinking of a group or nation."
  ],
  [
    "ignorance",
    "/ˈɪɡnəɹəns/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "The lack of knowledge or education.",
    "“ignorance” means the lack of knowledge or education."
  ],
  [
    "illness",
    "/ˈɪl.nəs/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "B1",
    "Impairment of normal physiological function affecting part or all of an organism.",
    "“illness” means impairment of normal physiological function affecting part or all of an organism."
  ],
  [
    "illusion",
    "/ɪˈl(j)uːʒ(ə)n/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "An erroneous mental representation.",
    "Artists use perspective in art to create an illusion of depth."
  ],
  [
    "illustration",
    "/ˌɪləˈstɹeɪʃən/",
    "Home",
    "Objects & equipment",
    "noun",
    "C1",
    "A visual representation (a picture or diagram) that is used to make some subject more pleasing or easier to understand.",
    "“illustration” means a visual representation (a picture or diagram) that is used to make some subject more pleasing or easier to understand."
  ],
  [
    "image",
    "/ˈɪmɪd͡ʒ/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "An iconic mental representation.",
    "Her imagination forced images upon her too awful to contemplate."
  ],
  [
    "imagination",
    "/ɪˌmædʒəˈneɪʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "The ability to form mental images of things or events.",
    "He could still hear her in his imagination."
  ],
  [
    "immigrant",
    "/ˈɪmɪɡɹənt/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person who comes to a country where they were not born in order to settle there.",
    "“immigrant” means a person who comes to a country where they were not born in order to settle there."
  ],
  [
    "immigration",
    "/ɪmɪˈɡɹeɪʃn/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Migration into a place (especially migration to a country of which you are not a native in order to settle there).",
    "“immigration” means migration into a place (especially migration to a country of which you are not a native in order to settle there)."
  ],
  [
    "impact",
    "/ˈɪmpækt/",
    "Community",
    "Events",
    "noun",
    "A2",
    "The striking of one body against another.",
    "“impact” means the striking of one body against another."
  ],
  [
    "implication",
    "/ˌɪmpləˈkeɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A logical relation between propositions p and q of the form ‘if p then q’; if p is true then q cannot be false.",
    "“implication” means a logical relation between propositions p and q of the form ‘if p then q’; if p is true then q cannot be false."
  ],
  [
    "import",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Commodities (goods or services) bought from a foreign country.",
    "“import” means commodities (goods or services) bought from a foreign country."
  ],
  [
    "importance",
    "/ɪmˈpɔːtəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The quality of being important and worthy of note.",
    "The importance of a well-balanced diet."
  ],
  [
    "improvement",
    "/ɪmˈpɹuːvmənt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A condition superior to an earlier condition.",
    "The new school represents a great improvement."
  ],
  [
    "impulse",
    "/ˈɪmpʌls/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "An impelling force or strength.",
    "The car's momentum carried it off the road."
  ],
  [
    "incentive",
    "/ɪnˈsɛntɪv/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A positive motivational influence.",
    "“incentive” means a positive motivational influence."
  ],
  [
    "inch",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A unit of length equal to one twelfth of a foot.",
    "“inch” means a unit of length equal to one twelfth of a foot."
  ],
  [
    "incident",
    "/ˈɪn.sɪ.dənt/",
    "Community",
    "Events",
    "noun",
    "B1",
    "A single distinct event.",
    "“incident” means a single distinct event."
  ],
  [
    "income",
    "/ˈɪnˌkʌm/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "The financial gain (earned or unearned) accruing over a given period of time.",
    "“income” means the financial gain (earned or unearned) accruing over a given period of time."
  ],
  [
    "increase",
    "/ɪnˈkɹiːs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The amount by which something increases.",
    "They proposed an increase of 15 percent in the fare."
  ],
  [
    "index",
    "/ˈɪndɛks/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "The finger next to the thumb.",
    "“index” means the finger next to the thumb."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch022 = createVocabularyBatch({
  id: "batch-022",
  source,
  entries,
})

export const batch022Metadata = {
  id: "batch-022",
  title: "Open English WordNet core vocabulary 1301–1400",
  addedWords: batch022.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
