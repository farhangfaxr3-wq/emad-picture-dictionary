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
    "“miracle” means a marvellous event manifesting a supernatural act of a divine agent."
  ],
  [
    "miscarriage",
    "/ˈmɪskaɹɪdʒ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "A natural loss of the products of conception.",
    "“miscarriage” means a natural loss of the products of conception."
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
    "“missile” means a weapon that is forcibly thrown or projected at a targets but is not self-propelled."
  ],
  [
    "mist",
    "/mɪst/",
    "Nature",
    "Natural phenomena",
    "noun",
    "A1",
    "A thin fog with condensation near the ground.",
    "“mist” means a thin fog with condensation near the ground."
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
    "“model” means representation of something (sometimes on a smaller scale)."
  ],
  [
    "module",
    "/ˈmɒdjuːl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A self-contained component (unit or item) that is used in combination with other components.",
    "“module” means a self-contained component (unit or item) that is used in combination with other components."
  ],
  [
    "mole",
    "/məʊl/",
    "Animals",
    "Animals & wildlife",
    "adjective",
    "A1",
    "Small velvety-furred burrowing mammal having small eyes and fossorial forefeet.",
    "“mole” means small velvety-furred burrowing mammal having small eyes and fossorial forefeet."
  ],
  [
    "molecule",
    "/ˈmɒləkjuːl/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "B1",
    "(physics and chemistry) the simplest structural unit of an element or compound.",
    "“molecule” means (physics and chemistry) the simplest structural unit of an element or compound."
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
    "“monarch” means a nation's ruler or head of state usually by hereditary right."
  ],
  [
    "monarchy",
    "/ˈmɒnəki/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "An autocracy governed by a monarch who usually inherits the authority.",
    "“monarchy” means an autocracy governed by a monarch who usually inherits the authority."
  ],
  [
    "monastery",
    "/ˈmɒnəstɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "The residence of a religious community.",
    "“monastery” means the residence of a religious community."
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
    "“monk” means a male religious living in a cloister and devoting himself to contemplation and prayer and work."
  ],
  [
    "monkey",
    "/ˈmʌŋki/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A2",
    "Any of various long-tailed primates (excluding the prosimians).",
    "“monkey” means any of various long-tailed primates (excluding the prosimians)."
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
    "“monster” means a person or animal that is markedly unusual or deformed."
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
    "“morale” means the spirit of a group that makes the members want the group to succeed."
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
    "“mortgage” means a conditional conveyance of property as security for the repayment of a loan."
  ],
  [
    "mosaic",
    "/məʊˈzeɪk/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Art consisting of a design made of small pieces of colored stone or glass.",
    "“mosaic” means art consisting of a design made of small pieces of colored stone or glass."
  ],
  [
    "mosque",
    "/mɑsk/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "(Islam) a Muslim place of worship that usually has a minaret.",
    "“mosque” means (Islam) a Muslim place of worship that usually has a minaret."
  ],
  [
    "mosquito",
    "/məˈski.toʊ/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "B1",
    "Two-winged insect whose female has a long proboscis to pierce the skin and suck the blood of humans and animals.",
    "“mosquito” means two-winged insect whose female has a long proboscis to pierce the skin and suck the blood of humans and animals."
  ],
  [
    "motif",
    "/moʊˈtiːf/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "A design or figure that consists of recurring shapes or colors, as in architecture or decoration.",
    "“motif” means a design or figure that consists of recurring shapes or colors, as in architecture or decoration."
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
    "“motorist” means someone who drives (or travels in) an automobile."
  ],
  [
    "motorway",
    "/ˈməʊtəweɪ/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A broad highway designed for high-speed traffic.",
    "“motorway” means a broad highway designed for high-speed traffic."
  ],
  [
    "mould",
    "Listen for pronunciation",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A2",
    "A fungus that produces a superficial growth on various kinds of damp or decaying organic matter.",
    "“mould” means a fungus that produces a superficial growth on various kinds of damp or decaying organic matter."
  ],
  [
    "mourning",
    "/ˈmʊɹnɪŋ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "State of sorrow over the death or departure of a loved one.",
    "“mourning” means state of sorrow over the death or departure of a loved one."
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
    "“mud” means water soaked soil; soft wet earth."
  ],
  [
    "mug",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "With handle and usually cylindrical.",
    "“mug” means with handle and usually cylindrical."
  ],
  [
    "multimedia",
    "/mʌltiˈmiːdi.ə/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "Transmission that combine media of communication (text and graphics and sound etc.).",
    "“multimedia” means transmission that combine media of communication (text and graphics and sound etc.)."
  ],
  [
    "muscle",
    "/ˈmʌ.sl̩/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "One of the contractile organs of the body.",
    "“muscle” means one of the contractile organs of the body."
  ],
  [
    "mushroom",
    "/ˈmʌʃˌɹuːm/",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "B1",
    "Any of various fleshy fungi of the subdivision Basidiomycota consisting of a cap at the end of a stem arising from an underground mycelium.",
    "“mushroom” means any of various fleshy fungi of the subdivision Basidiomycota consisting of a cap at the end of a stem arising from an underground mycelium."
  ],
  [
    "mutation",
    "/mjuˈteɪʃən/",
    "Community",
    "Events",
    "noun",
    "B1",
    "(genetics) any event that changes genetic structure; any alteration in the inherited nucleic acid sequence of the genotype of an organism.",
    "“mutation” means (genetics) any event that changes genetic structure; any alteration in the inherited nucleic acid sequence of the genotype of an organism."
  ],
  [
    "myth",
    "/mɪθ/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A traditional story accepted as history; serves to explain the world view of a people.",
    "“myth” means a traditional story accepted as history; serves to explain the world view of a people."
  ],
  [
    "nail",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A thin pointed piece of metal that is hammered into materials as a fastener.",
    "“nail” means a thin pointed piece of metal that is hammered into materials as a fastener."
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
    "“nationalist” means one who loves and defends his or her country."
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
    "“navy” means a dark shade of blue."
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
    "“needle” means a sharp pointed implement (usually steel)."
  ],
  [
    "neglect",
    "/nɪˈɡlɛkt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Willful lack of care and attention.",
    "“neglect” means willful lack of care and attention."
  ],
  [
    "negligence",
    "/ˈnɛɡlɪd͡ʒəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The trait of neglecting responsibilities and lacking concern.",
    "“negligence” means the trait of neglecting responsibilities and lacking concern."
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
    "“neighbour” means a person who lives (or is located) near another."
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
    "“nephew” means a son of your brother or sister."
  ],
  [
    "nerve",
    "/nɝv/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "Any bundle of nerve fibers running to various organs and tissues of the body.",
    "“nerve” means any bundle of nerve fibers running to various organs and tissues of the body."
  ],
  [
    "nest",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A structure in which animals lay eggs or give birth to their young.",
    "“nest” means a structure in which animals lay eggs or give birth to their young."
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
    "“night” means the time after sunset and before sunrise while it is dark outside."
  ],
  [
    "nightmare",
    "/ˈnaɪt.mɛə/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A terrifying or deeply upsetting dream.",
    "“nightmare” means a terrifying or deeply upsetting dream."
  ],
  [
    "node",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A connecting point at which several lines come together.",
    "“node” means a connecting point at which several lines come together."
  ],
  [
    "noise",
    "/nɔɪz/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The quality of lacking any predictable order or plan.",
    "“noise” means the quality of lacking any predictable order or plan."
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
    "“nonsense” means a message that seems to convey no meaning."
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
    "“north” means the cardinal compass point that is at 0 or 360 degrees."
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
    "“notion” means a general inclusive concept."
  ],
  [
    "noun",
    "/naʊn/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A content word that can be used to refer to a person, place, thing, quality, or action.",
    "“noun” means a content word that can be used to refer to a person, place, thing, quality, or action."
  ],
  [
    "novel",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "An extended fictional work in prose; usually in the form of a story.",
    "“novel” means an extended fictional work in prose; usually in the form of a story."
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
    "“nun” means a woman religious."
  ],
  [
    "nursery",
    "/ˈnɜːsəɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A child's room for a baby.",
    "“nursery” means a child's room for a baby."
  ],
  [
    "nut",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A whimsically eccentric person.",
    "“nut” means a whimsically eccentric person."
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
    "“objection” means the speech act of objecting."
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
    "“observer” means a person who becomes aware (of things or events) through the senses."
  ],
  [
    "obstacle",
    "/ˈɒbstəkl̩/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "An obstruction that stands in the way (and must be removed or surmounted or circumvented).",
    "“obstacle” means an obstruction that stands in the way (and must be removed or surmounted or circumvented)."
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
    "“offence” means the action of attacking an enemy."
  ],
  [
    "offender",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person who transgresses moral or civil law.",
    "“offender” means a person who transgresses moral or civil law."
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
    "“offspring” means any immature animal."
  ],
  [
    "oil",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Any of a group of liquid edible fats that are obtained from plants.",
    "“oil” means any of a group of liquid edible fats that are obtained from plants."
  ],
  [
    "omission",
    "/əˈmɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A mistake resulting from neglect.",
    "“omission” means a mistake resulting from neglect."
  ],
  [
    "opera",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A drama set to music; consists of singing with orchestral accompaniment and an orchestral overture and interludes.",
    "“opera” means a drama set to music; consists of singing with orchestral accompaniment and an orchestral overture and interludes."
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
