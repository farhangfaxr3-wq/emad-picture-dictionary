import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "pleasure",
    "/ˈplɛʒə/",
    "People",
    "Feelings & emotions",
    "noun",
    "B1",
    "A fundamental feeling that is hard to define but that people desire to experience.",
    "He was tingling with pleasure."
  ],
  [
    "plot",
    "/plɒt/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "A secret scheme to do something (especially something underhand or illegal).",
    "They concocted a plot to discredit the governor."
  ],
  [
    "pneumonia",
    "/njuˈməʊniə/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "B2",
    "Respiratory disease characterized by inflammation of the lung parenchyma (excluding the bronchi) with congestion caused by viruses or bacteria or irritants.",
    "The lesson uses “pneumonia” in a carefully reviewed vocabulary context."
  ],
  [
    "poem",
    "/ˈpəʊ̯ɪm/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A composition written in metrical feet forming rhythmical lines.",
    "The lesson uses “poem” in a carefully reviewed vocabulary context."
  ],
  [
    "poetry",
    "/ˈpəʊɪtɹi/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "Literature in metrical form.",
    "The lesson uses “poetry” in a carefully reviewed vocabulary context."
  ],
  [
    "point",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "An isolated fact that is considered separately from the whole.",
    "A point of information."
  ],
  [
    "poison",
    "/ˈpɔɪz(ə)n/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "A2",
    "Any substance that causes injury or illness or death of a living organism.",
    "The lesson uses “poison” in a carefully reviewed vocabulary context."
  ],
  [
    "pole",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A long (usually round) rod of wood or metal or plastic.",
    "The lesson uses “pole” in a carefully reviewed vocabulary context."
  ],
  [
    "policy",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "Written contract or certificate of insurance.",
    "You should have read the small print on your policy."
  ],
  [
    "politician",
    "/ˈpɒl.ɪ.tɪʃ.ən/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person active in party politics.",
    "The lesson uses “politician” in a carefully reviewed vocabulary context."
  ],
  [
    "politics",
    "/ˈpɑl.ɪˌtɪks/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Social relations involving intrigue to gain authority or power.",
    "Office politics is often counterproductive."
  ],
  [
    "poll",
    "/pɔl/",
    "Daily Activities",
    "Actions & activities",
    "adjective",
    "A1",
    "The counting of votes (as in an election).",
    "The lesson uses “poll” in a carefully reviewed vocabulary context."
  ],
  [
    "pony",
    "Listen for pronunciation",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "Any of various breeds of small gentle horses usually less than five feet high at the shoulder.",
    "The lesson uses “pony” in a carefully reviewed vocabulary context."
  ],
  [
    "pool",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A small body of standing water (rainwater) or other liquid.",
    "The body lay in a pool of blood."
  ],
  [
    "pop",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "Music of general appeal to teenagers; a bland watered-down version of rock'n'roll with more rhythm and harmony and an emphasis on romantic love.",
    "The lesson uses “pop” in a carefully reviewed vocabulary context."
  ],
  [
    "population",
    "/ˌpɒpjʊˈleɪʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "The people who inhabit a territory or state.",
    "The population seemed to be well fed and clothed."
  ],
  [
    "porter",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A person employed to carry luggage and supplies.",
    "The lesson uses “porter” in a carefully reviewed vocabulary context."
  ],
  [
    "portion",
    "/ˈpɔɹʃən/",
    "Food",
    "Food & cooking",
    "noun",
    "B1",
    "An individual quantity of food or drink taken as part of a meal.",
    "His portion was larger than hers."
  ],
  [
    "portrait",
    "/ˈpɔːtɹeɪt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Any likeness of a person, in any medium.",
    "The photographer made excellent portraits."
  ],
  [
    "position",
    "/pəˈzɪ.ʃ(ə)n/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The act of putting something in a certain place.",
    "The lesson uses “position” in a carefully reviewed vocabulary context."
  ],
  [
    "possession",
    "/pəˈzɛʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of having and controlling property.",
    "The lesson uses “possession” in a carefully reviewed vocabulary context."
  ],
  [
    "possibility",
    "/ˌpɑsɪˈbɪliti/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A possible alternative.",
    "Bankruptcy is always a possibility."
  ],
  [
    "post",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "The system whereby messages are transmitted via the post office.",
    "In England they call mail ‘the post’."
  ],
  [
    "pot",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Metal or earthenware cooking vessel that is usually round and deep; often has a handle and lid.",
    "The lesson uses “pot” in a carefully reviewed vocabulary context."
  ],
  [
    "potential",
    "/pəˈtɛnʃəl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The inherent capacity for coming into being.",
    "The lesson uses “potential” in a carefully reviewed vocabulary context."
  ],
  [
    "pottery",
    "/ˈpɒtəɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Ceramic ware made from clay and baked in a kiln.",
    "The lesson uses “pottery” in a carefully reviewed vocabulary context."
  ],
  [
    "pound",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A public enclosure for stray or unlicensed dogs.",
    "Unlicensed dogs will be taken to the pound."
  ],
  [
    "powder",
    "/ˈpaʊ.də(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A solid substance in the form of tiny loose particles; a solid that has been pulverized.",
    "The lesson uses “powder” in a carefully reviewed vocabulary context."
  ],
  [
    "power",
    "/ˈpaʊə(ɹ)/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A state powerful enough to influence events throughout the world.",
    "The lesson uses “power” in a carefully reviewed vocabulary context."
  ],
  [
    "practice",
    "/ˈpɹæktɪs/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A customary way of operation or behavior.",
    "It is their practice to give annual raises."
  ],
  [
    "praise",
    "/pɹeɪz/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "An expression of approval and commendation.",
    "He always appreciated praise for his work."
  ],
  [
    "prayer",
    "/pɹɛə(ɹ)/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "The act of communicating with a deity (especially as a petition or in adoration or contrition or thanksgiving).",
    "The priest sank to his knees in prayer."
  ],
  [
    "precedent",
    "/pɹɪˈsiː.dənt/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "An example that is used to justify similar occurrences at a later time.",
    "The lesson uses “precedent” in a carefully reviewed vocabulary context."
  ],
  [
    "precision",
    "/pɹɪˈsɪ.ʒ(ə)n/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The quality of being reproducible in amount or performance.",
    "Note the meticulous precision of his measurements."
  ],
  [
    "predator",
    "/ˈpɹɛd.ə.təɹ/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "B1",
    "Any animal that lives by preying on other animals.",
    "The lesson uses “predator” in a carefully reviewed vocabulary context."
  ],
  [
    "predecessor",
    "/ˈpɹiːdɪsɛsə(ɹ)/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "One who precedes you in time (as in holding a position or office).",
    "The lesson uses “predecessor” in a carefully reviewed vocabulary context."
  ],
  [
    "preference",
    "/ˈpɹɛf(ə)ɹ(ə)ns/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A predisposition in favor of something.",
    "A predilection for expensive cars."
  ],
  [
    "prejudice",
    "/ˈpɹɛd͡ʒədɪs/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A partiality that prevents objective consideration of an issue or situation.",
    "The lesson uses “prejudice” in a carefully reviewed vocabulary context."
  ],
  [
    "premium",
    "/ˈpɹimiəm/",
    "Community",
    "Money & possessions",
    "noun",
    "B1",
    "Payment for insurance.",
    "The lesson uses “premium” in a carefully reviewed vocabulary context."
  ],
  [
    "preoccupation",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "C1",
    "An idea that preoccupies the mind and holds the attention.",
    "The lesson uses “preoccupation” in a carefully reviewed vocabulary context."
  ],
  [
    "preparation",
    "/pɹɛpəˈɹeɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The state of having been made ready or prepared for use or action (especially military action).",
    "Their preparation was more than adequate."
  ],
  [
    "presence",
    "/ˈpɹɛzəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Dignified manner or conduct.",
    "The lesson uses “presence” in a carefully reviewed vocabulary context."
  ],
  [
    "preservation",
    "/pɹɛ.zɝˈveɪ.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "The condition of being (well or ill) preserved.",
    "The lesson uses “preservation” in a carefully reviewed vocabulary context."
  ],
  [
    "presidency",
    "/ˈpɹɛzɪdənsi/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The office and function of president.",
    "Andrew Jackson expanded the power of the presidency beyond what was customary before his time."
  ],
  [
    "president",
    "/ˈpɹɛzɨdənt/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "The chief executive of a republic.",
    "The lesson uses “president” in a carefully reviewed vocabulary context."
  ],
  [
    "press",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A machine used for printing.",
    "The lesson uses “press” in a carefully reviewed vocabulary context."
  ],
  [
    "pressure",
    "/ˈpɹɛʃə(ɹ)/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The somatic sensation that results from applying force to an area of skin.",
    "The sensitivity of his skin to pressure and temperature was normal."
  ],
  [
    "prestige",
    "/pɹɛsˈti(d)ʒ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A high standing achieved through success or influence or wealth etc.",
    "He wanted to achieve power and prestige."
  ],
  [
    "prevalence",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A superiority in numbers or amount.",
    "A preponderance of evidence against the defendant."
  ],
  [
    "prey",
    "/pɹeɪ/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A1",
    "Animal hunted or caught for food.",
    "The lesson uses “prey” in a carefully reviewed vocabulary context."
  ],
  [
    "price",
    "/pɹaɪs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The property of having material worth (often indicated by the amount of money something would bring if sold).",
    "He puts a high price on his services."
  ],
  [
    "pride",
    "/pɹaɪd/",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "Satisfaction with your (or another's) achievements.",
    "He takes pride in his son's success."
  ],
  [
    "prince",
    "/pɹɪns/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A male member of a royal family other than the sovereign (especially the son of a sovereign).",
    "The lesson uses “prince” in a carefully reviewed vocabulary context."
  ],
  [
    "princess",
    "/pɹɪnˈsɛs/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A female member of a royal family other than the queen (especially the daughter of a sovereign).",
    "The lesson uses “princess” in a carefully reviewed vocabulary context."
  ],
  [
    "principle",
    "/ˈpɹɪnsɪpəl/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A basic truth or law or assumption.",
    "The principles of democracy."
  ],
  [
    "print",
    "/pɹɪnt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A picture or design printed from an engraving.",
    "The lesson uses “print” in a carefully reviewed vocabulary context."
  ],
  [
    "priority",
    "/pɹaɪˈɒɹɨti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Status established in order of importance or urgency.",
    "National independence takes priority over class struggle."
  ],
  [
    "prison",
    "/ˈpɹɪzən/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A correctional institution where persons are confined while on trial or for punishment.",
    "The lesson uses “prison” in a carefully reviewed vocabulary context."
  ],
  [
    "prisoner",
    "/ˈpɹɪzənə/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person who is confined; especially a prisoner of war.",
    "The lesson uses “prisoner” in a carefully reviewed vocabulary context."
  ],
  [
    "privilege",
    "/ˈpɹɪv(ɪ)lɪdʒ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A special advantage or immunity or benefit not enjoyed by all.",
    "The lesson uses “privilege” in a carefully reviewed vocabulary context."
  ],
  [
    "prize",
    "/pɹaɪz/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Something given as a token of victory.",
    "The lesson uses “prize” in a carefully reviewed vocabulary context."
  ],
  [
    "probability",
    "/pɹɒbəˈbɪlɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The quality of being probable; a probable event or the most probable event.",
    "For a while mutiny seemed a probability."
  ],
  [
    "problem",
    "/ˈpɹɒbləm/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A source of difficulty.",
    "What's the problem?"
  ],
  [
    "procedure",
    "/pɹəˈsiːdʒə/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "A mode of conducting legal and parliamentary proceedings.",
    "The lesson uses “procedure” in a carefully reviewed vocabulary context."
  ],
  [
    "process",
    "/ˈpɹəʊsɛs/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A particular course of action intended to achieve a result.",
    "It was a process of trial and error."
  ],
  [
    "produce",
    "/pɹəˈdjuːs/",
    "Food",
    "Food & cooking",
    "noun",
    "B1",
    "Fresh fruits and vegetable grown for the market.",
    "The lesson uses “produce” in a carefully reviewed vocabulary context."
  ],
  [
    "producer",
    "/pɹəˈdjuːsə/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "Someone who finds financing for and supervises the making and presentation of a show (play or film or program or similar work).",
    "The lesson uses “producer” in a carefully reviewed vocabulary context."
  ],
  [
    "product",
    "/ˈpɹɒd.əkt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Items for sale to the individual consumer.",
    "Good business depends on having good merchandise."
  ],
  [
    "production",
    "/pɹəˈdʌkʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act or process of producing something.",
    "Shakespeare's production of poetry was enormous."
  ],
  [
    "profession",
    "/pɹəˈfɛʃən/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "An occupation requiring special education (especially in the liberal arts or sciences).",
    "The lesson uses “profession” in a carefully reviewed vocabulary context."
  ],
  [
    "profile",
    "/ˈpɹəʊfaɪl/",
    "Places",
    "Places & locations",
    "noun",
    "B1",
    "An outline of something (especially a human face as seen from one side).",
    "The lesson uses “profile” in a carefully reviewed vocabulary context."
  ],
  [
    "profit",
    "/ˈpɹɒfɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The advantageous quality of being beneficial.",
    "The lesson uses “profit” in a carefully reviewed vocabulary context."
  ],
  [
    "program",
    "/ˈpɹəʊɡɹæm/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A series of steps to be carried out or goals to be accomplished.",
    "They drew up a six-step plan."
  ],
  [
    "progress",
    "/ˈpɹəʊɡɹɛs/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Gradual improvement or growth or development.",
    "Great progress in the arts."
  ],
  [
    "projection",
    "/pɹəˈdʒɛkʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A prediction made by extrapolating from past observations.",
    "The lesson uses “projection” in a carefully reviewed vocabulary context."
  ],
  [
    "promise",
    "/ˈpɹɒmɪs/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A verbal commitment by one person to another agreeing to do (or not to do) something in the future.",
    "The lesson uses “promise” in a carefully reviewed vocabulary context."
  ],
  [
    "proof",
    "/pɹuːf/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "Any factual evidence that helps to establish the truth of something.",
    "If you have any proof for what you say, now is the time to produce it."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch027 = createVocabularyBatch({
  id: "batch-027",
  source,
  entries,
})

export const batch027Metadata = {
  id: "batch-027",
  title: "Open English WordNet core vocabulary 1801–1877",
  addedWords: batch027.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
