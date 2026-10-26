import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "minority",
    "/maɪˈnɒɹ.ɪ.ti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Being or relating to the smaller in number of two parts.",
    "When the vote was taken they were in the minority."
  ],
  [
    "minute",
    "/ˈmɪnɪt/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A2",
    "A unit of time equal to 60 seconds or 1/60th of an hour.",
    "He ran a 4 minute mile."
  ],
  [
    "miracle",
    "/ˈmɪɹəkəl/",
    "Community",
    "Events",
    "noun",
    "B1",
    "A marvellous event manifesting a supernatural act of a divine agent.",
    "The lesson uses “miracle” in a carefully reviewed vocabulary context."
  ],
  [
    "miscarriage",
    "/ˈmɪskaɹɪdʒ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "A natural loss of the products of conception.",
    "The lesson uses “miscarriage” in a carefully reviewed vocabulary context."
  ],
  [
    "misery",
    "/ˈmɪz(ə)ɹɪ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A state of ill-being due to affliction or misfortune.",
    "The misery and wretchedness of those slums is intolerable."
  ],
  [
    "missile",
    "/ˈmɪsaɪl/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A weapon that is forcibly thrown or projected at a targets but is not self-propelled.",
    "The lesson uses “missile” in a carefully reviewed vocabulary context."
  ],
  [
    "mist",
    "/mɪst/",
    "Nature",
    "Natural phenomena",
    "noun",
    "A1",
    "A thin fog with condensation near the ground.",
    "The lesson uses “mist” in a carefully reviewed vocabulary context."
  ],
  [
    "mixture",
    "/ˈmɪkstʃɚ/",
    "Community",
    "Events",
    "noun",
    "B1",
    "An event that combines things in a mixture.",
    "A gradual mixture of cultures."
  ],
  [
    "model",
    "/ˈmɒdl̩/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Representation of something (sometimes on a smaller scale).",
    "The lesson uses “model” in a carefully reviewed vocabulary context."
  ],
  [
    "module",
    "/ˈmɒdjuːl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A self-contained component (unit or item) that is used in combination with other components.",
    "The lesson uses “module” in a carefully reviewed vocabulary context."
  ],
  [
    "mole",
    "/məʊl/",
    "Animals",
    "Animals & wildlife",
    "adjective",
    "A1",
    "Small velvety-furred burrowing mammal having small eyes and fossorial forefeet.",
    "The lesson uses “mole” in a carefully reviewed vocabulary context."
  ],
  [
    "molecule",
    "/ˈmɒləkjuːl/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "B1",
    "(physics and chemistry) the simplest structural unit of an element or compound.",
    "The lesson uses “molecule” in a carefully reviewed vocabulary context."
  ],
  [
    "moment",
    "/ˈməʊmənt/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A2",
    "At this time.",
    "She is studying at the moment."
  ],
  [
    "momentum",
    "/ˌmə(ʊ)ˈmɛntəm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The product of a body's mass and its velocity.",
    "The momentum of the particles was deduced from meteoritic velocities."
  ],
  [
    "monarch",
    "/ˈmɒnək/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A nation's ruler or head of state usually by hereditary right.",
    "The lesson uses “monarch” in a carefully reviewed vocabulary context."
  ],
  [
    "monarchy",
    "/ˈmɒnəki/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "An autocracy governed by a monarch who usually inherits the authority.",
    "The lesson uses “monarchy” in a carefully reviewed vocabulary context."
  ],
  [
    "monastery",
    "/ˈmɒnəstɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "The residence of a religious community.",
    "The lesson uses “monastery” in a carefully reviewed vocabulary context."
  ],
  [
    "money",
    "/ˈmʌni/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "The official currency issued by a government or national bank.",
    "He changed his money into francs."
  ],
  [
    "monk",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A male religious living in a cloister and devoting himself to contemplation and prayer and work.",
    "The lesson uses “monk” in a carefully reviewed vocabulary context."
  ],
  [
    "monkey",
    "/ˈmʌŋki/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A2",
    "Any of various long-tailed primates (excluding the prosimians).",
    "The lesson uses “monkey” in a carefully reviewed vocabulary context."
  ],
  [
    "monopoly",
    "/məˈnɒpəˌli/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Exclusive control or possession of something.",
    "They have no monopoly on intelligence."
  ],
  [
    "monster",
    "/ˈmɒnstə(ɹ)/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person or animal that is markedly unusual or deformed.",
    "The lesson uses “monster” in a carefully reviewed vocabulary context."
  ],
  [
    "month",
    "/mʌnθ/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A2",
    "One of the twelve divisions of the calendar year.",
    "He paid the bill last month."
  ],
  [
    "mood",
    "Listen for pronunciation",
    "People",
    "Feelings & emotions",
    "noun",
    "A1",
    "A characteristic (habitual or relatively temporary) state of feeling.",
    "Whether he praised or cursed me depended on his temper at the time."
  ],
  [
    "morale",
    "/məˈɹɑːl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The spirit of a group that makes the members want the group to succeed.",
    "The lesson uses “morale” in a carefully reviewed vocabulary context."
  ],
  [
    "morning",
    "/ˈmɔːnɪŋ/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "B1",
    "The time period between dawn and noon.",
    "I spent the morning running errands."
  ],
  [
    "morsel",
    "/ˈmɔːsəl/",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "A small amount of solid food; a mouthful.",
    "All they had left was a bit of bread."
  ],
  [
    "mortgage",
    "/ˈmɔː.ɡɪdʒ/",
    "Community",
    "Money & possessions",
    "noun",
    "B1",
    "A conditional conveyance of property as security for the repayment of a loan.",
    "The lesson uses “mortgage” in a carefully reviewed vocabulary context."
  ],
  [
    "mosaic",
    "/məʊˈzeɪk/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Art consisting of a design made of small pieces of colored stone or glass.",
    "The lesson uses “mosaic” in a carefully reviewed vocabulary context."
  ],
  [
    "mosque",
    "/mɑsk/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "(Islam) a Muslim place of worship that usually has a minaret.",
    "The lesson uses “mosque” in a carefully reviewed vocabulary context."
  ],
  [
    "mosquito",
    "/məˈski.toʊ/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "B1",
    "Two-winged insect whose female has a long proboscis to pierce the skin and suck the blood of humans and animals.",
    "The lesson uses “mosquito” in a carefully reviewed vocabulary context."
  ],
  [
    "motif",
    "/moʊˈtiːf/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "A design or figure that consists of recurring shapes or colors, as in architecture or decoration.",
    "The lesson uses “motif” in a carefully reviewed vocabulary context."
  ],
  [
    "motivation",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The psychological feature that arouses an organism to action toward a desired goal; the reason for the action; that which gives purpose and direction to behavior.",
    "We did not understand his motivation."
  ],
  [
    "motorist",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "B1",
    "Someone who drives (or travels in) an automobile.",
    "The lesson uses “motorist” in a carefully reviewed vocabulary context."
  ],
  [
    "motorway",
    "/ˈməʊtəweɪ/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A broad highway designed for high-speed traffic.",
    "The lesson uses “motorway” in a carefully reviewed vocabulary context."
  ],
  [
    "mould",
    "Listen for pronunciation",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A2",
    "A fungus that produces a superficial growth on various kinds of damp or decaying organic matter.",
    "The lesson uses “mould” in a carefully reviewed vocabulary context."
  ],
  [
    "mourning",
    "/ˈmʊɹnɪŋ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "State of sorrow over the death or departure of a loved one.",
    "The lesson uses “mourning” in a carefully reviewed vocabulary context."
  ],
  [
    "move",
    "/muːv/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "The act of changing your residence or place of business.",
    "They say that three moves equal one fire."
  ],
  [
    "movement",
    "/ˈmuːv.mənt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A change of position that does not entail a change of location.",
    "Movement is a sign of life."
  ],
  [
    "mud",
    "/ˈmʌd/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Water soaked soil; soft wet earth.",
    "The lesson uses “mud” in a carefully reviewed vocabulary context."
  ],
  [
    "mug",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "With handle and usually cylindrical.",
    "The lesson uses “mug” in a carefully reviewed vocabulary context."
  ],
  [
    "multimedia",
    "/mʌltiˈmiːdi.ə/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "Transmission that combine media of communication (text and graphics and sound etc.).",
    "The lesson uses “multimedia” in a carefully reviewed vocabulary context."
  ],
  [
    "muscle",
    "/ˈmʌ.sl̩/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "One of the contractile organs of the body.",
    "The lesson uses “muscle” in a carefully reviewed vocabulary context."
  ],
  [
    "mushroom",
    "/ˈmʌʃˌɹuːm/",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "B1",
    "Any of various fleshy fungi of the subdivision Basidiomycota consisting of a cap at the end of a stem arising from an underground mycelium.",
    "The lesson uses “mushroom” in a carefully reviewed vocabulary context."
  ],
  [
    "mutation",
    "/mjuˈteɪʃən/",
    "Community",
    "Events",
    "noun",
    "B1",
    "(genetics) any event that changes genetic structure; any alteration in the inherited nucleic acid sequence of the genotype of an organism.",
    "The lesson uses “mutation” in a carefully reviewed vocabulary context."
  ],
  [
    "myth",
    "/mɪθ/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A traditional story accepted as history; serves to explain the world view of a people.",
    "The lesson uses “myth” in a carefully reviewed vocabulary context."
  ],
  [
    "nail",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A thin pointed piece of metal that is hammered into materials as a fastener.",
    "The lesson uses “nail” in a carefully reviewed vocabulary context."
  ],
  [
    "name",
    "/neɪm/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A language unit by which a person or thing is known.",
    "His name really is George Washington."
  ],
  [
    "nationalism",
    "/ˈnæʃənəlɪzəm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Love of country and willingness to sacrifice for it.",
    "British nationalism was in the air and patriotic sentiments ran high."
  ],
  [
    "nationalist",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "B2",
    "One who loves and defends his or her country.",
    "The lesson uses “nationalist” in a carefully reviewed vocabulary context."
  ],
  [
    "nature",
    "/ˈneɪ.tʃə/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The essential qualities or characteristics by which something is recognized.",
    "It is the nature of fire to burn."
  ],
  [
    "navy",
    "/ˈneɪvi/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A dark shade of blue.",
    "The lesson uses “navy” in a carefully reviewed vocabulary context."
  ],
  [
    "need",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A condition requiring relief.",
    "She satisfied his need for affection."
  ],
  [
    "needle",
    "/ˈniː.dl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A sharp pointed implement (usually steel).",
    "The lesson uses “needle” in a carefully reviewed vocabulary context."
  ],
  [
    "neglect",
    "/nɪˈɡlɛkt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Willful lack of care and attention.",
    "The lesson uses “neglect” in a carefully reviewed vocabulary context."
  ],
  [
    "negligence",
    "/ˈnɛɡlɪd͡ʒəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The trait of neglecting responsibilities and lacking concern.",
    "The lesson uses “negligence” in a carefully reviewed vocabulary context."
  ],
  [
    "negotiation",
    "/nɪˌɡoʊʃiˈeɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A discussion intended to produce an agreement.",
    "The buyout negotiation lasted several days."
  ],
  [
    "neighbour",
    "/ˈneɪbə/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person who lives (or is located) near another.",
    "The lesson uses “neighbour” in a carefully reviewed vocabulary context."
  ],
  [
    "neighbourhood",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "C1",
    "A surrounding or nearby region.",
    "The plane crashed in the vicinity of Asheville."
  ],
  [
    "nephew",
    "/ˈnɛf.ju/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A son of your brother or sister.",
    "The lesson uses “nephew” in a carefully reviewed vocabulary context."
  ],
  [
    "nerve",
    "/nɝv/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "Any bundle of nerve fibers running to various organs and tissues of the body.",
    "The lesson uses “nerve” in a carefully reviewed vocabulary context."
  ],
  [
    "nest",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A structure in which animals lay eggs or give birth to their young.",
    "The lesson uses “nest” in a carefully reviewed vocabulary context."
  ],
  [
    "network",
    "/nɛtwɜːk/",
    "Technology",
    "IT & computers",
    "noun",
    "B1",
    "(broadcasting) a communication system consisting of a group of broadcasting stations that all transmit the same programs.",
    "The networks compete to broadcast important sports events."
  ],
  [
    "newcomer",
    "/ˈnjuːkʌmə/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A recent arrival.",
    "He's a newcomer to Boston."
  ],
  [
    "news",
    "/n(j)uːz/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "Information about recent and important events.",
    "They awaited news of the outcome."
  ],
  [
    "night",
    "/naɪt/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "A2",
    "The time after sunset and before sunrise while it is dark outside.",
    "The lesson uses “night” in a carefully reviewed vocabulary context."
  ],
  [
    "nightmare",
    "/ˈnaɪt.mɛə/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A terrifying or deeply upsetting dream.",
    "The lesson uses “nightmare” in a carefully reviewed vocabulary context."
  ],
  [
    "node",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A connecting point at which several lines come together.",
    "The lesson uses “node” in a carefully reviewed vocabulary context."
  ],
  [
    "noise",
    "/nɔɪz/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The quality of lacking any predictable order or plan.",
    "The lesson uses “noise” in a carefully reviewed vocabulary context."
  ],
  [
    "nomination",
    "/ˌnɑmɪˈneɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of officially naming a candidate.",
    "The Republican nomination for Governor."
  ],
  [
    "nonsense",
    "/ˈnɑnsɛns/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A message that seems to convey no meaning.",
    "The lesson uses “nonsense” in a carefully reviewed vocabulary context."
  ],
  [
    "norm",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A standard or model or pattern regarded as typical.",
    "The current middle-class norm of two children per family."
  ],
  [
    "north",
    "/nɔːθ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The cardinal compass point that is at 0 or 360 degrees.",
    "The lesson uses “north” in a carefully reviewed vocabulary context."
  ],
  [
    "notice",
    "/ˈnəʊtɪs/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "An announcement containing information about an event.",
    "You didn't give me enough notice."
  ],
  [
    "notion",
    "/ˈnəʊʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "A general inclusive concept.",
    "The lesson uses “notion” in a carefully reviewed vocabulary context."
  ],
  [
    "noun",
    "/naʊn/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A content word that can be used to refer to a person, place, thing, quality, or action.",
    "The lesson uses “noun” in a carefully reviewed vocabulary context."
  ],
  [
    "novel",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "An extended fictional work in prose; usually in the form of a story.",
    "The lesson uses “novel” in a carefully reviewed vocabulary context."
  ],
  [
    "number",
    "/ˈnʌmbə/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The property possessed by a sum or total or indefinite quantity of units or individuals.",
    "The number of parameters is small."
  ],
  [
    "nun",
    "/nʌn/",
    "People",
    "People & roles",
    "adjective",
    "A1",
    "A woman religious.",
    "The lesson uses “nun” in a carefully reviewed vocabulary context."
  ],
  [
    "nursery",
    "/ˈnɜːsəɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A child's room for a baby.",
    "The lesson uses “nursery” in a carefully reviewed vocabulary context."
  ],
  [
    "nut",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A whimsically eccentric person.",
    "The lesson uses “nut” in a carefully reviewed vocabulary context."
  ],
  [
    "oak",
    "/oʊk/",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A1",
    "A deciduous tree of the genus Quercus; has acorns and lobed leaves.",
    "Great oaks grow from little acorns."
  ],
  [
    "object",
    "/ˈɒb.d͡ʒɛkt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A tangible and visible entity; an entity that can cast a shadow.",
    "It was full of rackets, balls and other objects."
  ],
  [
    "objection",
    "/əbˈdʒɛkʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "The speech act of objecting.",
    "The lesson uses “objection” in a carefully reviewed vocabulary context."
  ],
  [
    "obligation",
    "/ɑb.ləˈɡeɪ.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The social force that binds you to the courses of action demanded by that force.",
    "We must instill a sense of duty in our children."
  ],
  [
    "observation",
    "/ˌɒbzəˈveɪʃ(ə)n/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "Facts learned by observing.",
    "He reported his observations to the mayor."
  ],
  [
    "observer",
    "/əbˈzɝvɚ/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person who becomes aware (of things or events) through the senses.",
    "The lesson uses “observer” in a carefully reviewed vocabulary context."
  ],
  [
    "obstacle",
    "/ˈɒbstəkl̩/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "An obstruction that stands in the way (and must be removed or surmounted or circumvented).",
    "The lesson uses “obstacle” in a carefully reviewed vocabulary context."
  ],
  [
    "occasion",
    "/əˈkeɪʒən/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "B1",
    "The time of a particular event.",
    "On the occasion of his 60th birthday."
  ],
  [
    "offence",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The action of attacking an enemy.",
    "The lesson uses “offence” in a carefully reviewed vocabulary context."
  ],
  [
    "offender",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person who transgresses moral or civil law.",
    "The lesson uses “offender” in a carefully reviewed vocabulary context."
  ],
  [
    "offer",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "The verbal act of offering.",
    "A generous offer of assistance."
  ],
  [
    "officer",
    "/ˈɒfɪsə/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A member of a police force.",
    "It was an accident, officer."
  ],
  [
    "offspring",
    "/ˈɒfspɹɪŋ/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "B2",
    "Any immature animal.",
    "The lesson uses “offspring” in a carefully reviewed vocabulary context."
  ],
  [
    "oil",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Any of a group of liquid edible fats that are obtained from plants.",
    "The lesson uses “oil” in a carefully reviewed vocabulary context."
  ],
  [
    "omission",
    "/əˈmɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A mistake resulting from neglect.",
    "The lesson uses “omission” in a carefully reviewed vocabulary context."
  ],
  [
    "opera",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A drama set to music; consists of singing with orchestral accompaniment and an orchestral overture and interludes.",
    "The lesson uses “opera” in a carefully reviewed vocabulary context."
  ],
  [
    "operation",
    "/ˌɒpəˈɹeɪʃən/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "B2",
    "A medical procedure involving an incision with instruments; performed to repair damage or arrest disease in a living body.",
    "They will schedule the operation as soon as an operating room is available."
  ],
  [
    "opinion",
    "/əˈpɪnjən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A belief or sentiment shared by most people; the voice of the people.",
    "He asked for a poll of public opinion."
  ],
  [
    "opposite",
    "/ˈɒpəzɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A relation of direct opposition.",
    "We thought Sue was older than Bill but just the reverse was true."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch025 = createVocabularyBatch({
  id: "batch-025",
  source,
  entries,
})

export const batch025Metadata = {
  id: "batch-025",
  title: "Open English WordNet core vocabulary 1601–1700",
  addedWords: batch025.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
