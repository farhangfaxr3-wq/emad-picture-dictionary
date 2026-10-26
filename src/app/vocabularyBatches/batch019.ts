import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "decrease",
    "/dɪˈkɹiːs/",
    "Community",
    "Events",
    "noun",
    "B1",
    "A change downward.",
    "There was a decrease in his temperature as the fever subsided."
  ],
  [
    "default",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "An option that is selected automatically unless an alternative is specified.",
    "The lesson uses “default” in a carefully reviewed vocabulary context."
  ],
  [
    "defeat",
    "Listen for pronunciation",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "The feeling that accompanies an experience of being thwarted in attaining your goals.",
    "The lesson uses “defeat” in a carefully reviewed vocabulary context."
  ],
  [
    "defendant",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person or institution against whom an action is brought in a court of law; the person being sued or accused.",
    "The lesson uses “defendant” in a carefully reviewed vocabulary context."
  ],
  [
    "deficiency",
    "/dɪˈfɪʃənsi/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Lack of an adequate quantity or number.",
    "The inadequacy of unemployment benefits."
  ],
  [
    "deficit",
    "/ˈdɛfɪsɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The property of being an amount by which something is less than expected or required.",
    "New blood vessels bud out from the already dilated vascular bed to make up the nutritional deficit."
  ],
  [
    "definition",
    "/ˌdɛfɪˈnɪʃ(ə)n/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A concise explanation of the meaning of a word or phrase or symbol.",
    "The lesson uses “definition” in a carefully reviewed vocabulary context."
  ],
  [
    "delegate",
    "/ˈdɛlɪɡət/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person appointed or elected to represent others.",
    "The lesson uses “delegate” in a carefully reviewed vocabulary context."
  ],
  [
    "demand",
    "/dɪˈmɑːnd/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "An urgent or peremptory request.",
    "His demands for attention were unceasing."
  ],
  [
    "democracy",
    "/dɪˈmɒkɹəsi/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A political system in which the supreme power lies in a body of citizens who can elect people to represent them.",
    "The lesson uses “democracy” in a carefully reviewed vocabulary context."
  ],
  [
    "demonstrator",
    "/ˈdɛmənstɹeɪtə(ɹ)/",
    "People",
    "People & roles",
    "noun",
    "C1",
    "Someone who participates in a public display of group feeling.",
    "The lesson uses “demonstrator” in a carefully reviewed vocabulary context."
  ],
  [
    "denial",
    "/dɪˈnaɪ.əl/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "The act of asserting that something alleged is not true.",
    "The lesson uses “denial” in a carefully reviewed vocabulary context."
  ],
  [
    "density",
    "/ˈdɛn.sɪ.ti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The amount per unit size.",
    "The lesson uses “density” in a carefully reviewed vocabulary context."
  ],
  [
    "dependence",
    "/dɪˈpɛndəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Being abnormally tolerant to and dependent on something that is psychologically or physically habit-forming (especially alcohol or narcotic drugs).",
    "The lesson uses “dependence” in a carefully reviewed vocabulary context."
  ],
  [
    "deposit",
    "/dɪˈpɒzɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Matter that has been deposited by some natural process.",
    "The lesson uses “deposit” in a carefully reviewed vocabulary context."
  ],
  [
    "depression",
    "/dɪˈpɹɛʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A sunken or depressed geological formation.",
    "The lesson uses “depression” in a carefully reviewed vocabulary context."
  ],
  [
    "deprivation",
    "/dɛp.ɹɪ.veɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A state of extreme poverty.",
    "The lesson uses “deprivation” in a carefully reviewed vocabulary context."
  ],
  [
    "deputy",
    "/ˈdɛpjəti/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A person appointed to represent or act on behalf of others.",
    "The lesson uses “deputy” in a carefully reviewed vocabulary context."
  ],
  [
    "descent",
    "/dɪˈsɛnt/",
    "Community",
    "Events",
    "noun",
    "B1",
    "A movement downward.",
    "The rise and fall of the tides."
  ],
  [
    "design",
    "/dɪˈzaɪn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A preliminary sketch indicating the plan for something.",
    "The design of a building."
  ],
  [
    "desire",
    "/dɪˈzaɪə/",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "The feeling that accompanies an unsatisfied state.",
    "The lesson uses “desire” in a carefully reviewed vocabulary context."
  ],
  [
    "despair",
    "/dɪˈspɛə(ɹ)/",
    "People",
    "Feelings & emotions",
    "noun",
    "B1",
    "The feeling that everything is wrong and nothing will turn out well.",
    "They moaned in despair and dismay."
  ],
  [
    "destruction",
    "/ˌdɪsˈtɹʌkʃən/",
    "Community",
    "Events",
    "noun",
    "B2",
    "An event that completely destroys something.",
    "The lesson uses “destruction” in a carefully reviewed vocabulary context."
  ],
  [
    "detail",
    "/ˈdiːteɪl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A small part that can be considered separately from the whole.",
    "It was perfect in all details."
  ],
  [
    "detective",
    "/dɪˈtɛktɪv/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A police officer who investigates crimes.",
    "The lesson uses “detective” in a carefully reviewed vocabulary context."
  ],
  [
    "detector",
    "/dɪˈtɛktə(ɹ)/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Any device that receives a signal or stimulus (as heat or pressure or light or motion etc.) and responds to it in a distinctive manner.",
    "The lesson uses “detector” in a carefully reviewed vocabulary context."
  ],
  [
    "development",
    "/dɪˈvɛləpmənt/",
    "Places",
    "Places & locations",
    "noun",
    "B2",
    "A district that has been developed to serve some purpose.",
    "Such land is practical for small park developments."
  ],
  [
    "deviation",
    "/diviˈeɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "A turning aside (of your course or attention or concern).",
    "A diversion from the main highway."
  ],
  [
    "diagram",
    "/ˈdaɪ.ə.ɡɹæm/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A drawing intended to explain how something works; a drawing showing the relation between the parts.",
    "The lesson uses “diagram” in a carefully reviewed vocabulary context."
  ],
  [
    "dialect",
    "/ˈdaɪ.əˌlɛkt/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "The usage or vocabulary that is characteristic of a specific group of people.",
    "The immigrants spoke an odd dialect of English."
  ],
  [
    "dialogue",
    "/ˈdaɪəlɒɡ/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "The lines spoken by characters in drama or fiction.",
    "The lesson uses “dialogue” in a carefully reviewed vocabulary context."
  ],
  [
    "diameter",
    "/daɪˈæmɪtə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A straight line connecting the center of a circle with two points on its perimeter (or the center of a sphere with two points on its surface).",
    "The lesson uses “diameter” in a carefully reviewed vocabulary context."
  ],
  [
    "diamond",
    "Listen for pronunciation",
    "Community",
    "Money & possessions",
    "noun",
    "B1",
    "A transparent piece of diamond that has been cut and polished and is valued as a precious gem.",
    "The lesson uses “diamond” in a carefully reviewed vocabulary context."
  ],
  [
    "diet",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "The act of restricting your food intake (or your intake of particular foods).",
    "The lesson uses “diet” in a carefully reviewed vocabulary context."
  ],
  [
    "difference",
    "/ˈdɪfɹən(t)s/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A disagreement or argument about something important.",
    "He had a dispute with his wife."
  ],
  [
    "difficulty",
    "/ˈdɪfɪkəlti/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "An effort that is inconvenient.",
    "Had difficulty walking."
  ],
  [
    "dignity",
    "/ˈdɪɡnɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The quality of being worthy of esteem or respect.",
    "It was beneath his dignity to cheat."
  ],
  [
    "dilemma",
    "/daɪˈlɛmə/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "State of uncertainty or perplexity especially as requiring a choice between equally unfavorable options.",
    "The lesson uses “dilemma” in a carefully reviewed vocabulary context."
  ],
  [
    "dimension",
    "/daɪˈmɛnʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The magnitude of something in a particular direction (especially length or width or height).",
    "The lesson uses “dimension” in a carefully reviewed vocabulary context."
  ],
  [
    "dinner",
    "/ˈdɪnə/",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "The main meal of the day served in the evening or at midday.",
    "Dinner will be at 8."
  ],
  [
    "diplomat",
    "/ˈdɪ.plə.mæt/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "An official engaged in international negotiations.",
    "The lesson uses “diplomat” in a carefully reviewed vocabulary context."
  ],
  [
    "direction",
    "/d(a)ɪˈɹɛk.ʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A general course along which something has a tendency to develop.",
    "I couldn't follow the direction of his thoughts."
  ],
  [
    "director",
    "/dɪˈɹɛktə(ɹ)/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "The person who leads a musical group.",
    "The lesson uses “director” in a carefully reviewed vocabulary context."
  ],
  [
    "directory",
    "/dɪˈɹɛktəɹi/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "An alphabetical list of names and addresses.",
    "The lesson uses “directory” in a carefully reviewed vocabulary context."
  ],
  [
    "disability",
    "/dɪsəˈbɪlɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The condition of being unable to perform as a consequence of physical or mental unfitness.",
    "Reading disability."
  ],
  [
    "disadvantage",
    "/ˌdɪsədˈvɑːntɪdʒ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "The quality of having an inferior or less favorable position.",
    "The lesson uses “disadvantage” in a carefully reviewed vocabulary context."
  ],
  [
    "disappointment",
    "/dɪsəˈpɔɪntmənt/",
    "People",
    "Feelings & emotions",
    "noun",
    "C1",
    "A feeling of dissatisfaction that results when your expectations are not realized.",
    "His hopes were so high he was doomed to disappointment."
  ],
  [
    "disaster",
    "/dɪˈzæs.tɚ/",
    "Community",
    "Events",
    "noun",
    "B1",
    "An event resulting in great loss and misfortune.",
    "The earthquake was a disaster."
  ],
  [
    "discipline",
    "/ˈdɪ.sə.plɪn/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of disciplining.",
    "The offenders deserved the harsh discipline they received."
  ],
  [
    "disco",
    "/ˈdɪskəʊ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A public dance hall for dancing to recorded popular music.",
    "The lesson uses “disco” in a carefully reviewed vocabulary context."
  ],
  [
    "discount",
    "/dɪsˈkaʊnt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The act of reducing the selling price of merchandise.",
    "The lesson uses “discount” in a carefully reviewed vocabulary context."
  ],
  [
    "discourse",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "An address of a religious nature (usually delivered during a church service).",
    "The lesson uses “discourse” in a carefully reviewed vocabulary context."
  ],
  [
    "discovery",
    "/dɪsˈkʌvəɹi/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A productive insight.",
    "The lesson uses “discovery” in a carefully reviewed vocabulary context."
  ],
  [
    "discrimination",
    "/dɪskɹɪmɪˈneɪʃən/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "C1",
    "Unfair treatment of a person or group on the basis of prejudice.",
    "The lesson uses “discrimination” in a carefully reviewed vocabulary context."
  ],
  [
    "disease",
    "/dɪˈziːz/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "B1",
    "An impairment of health or a condition of abnormal functioning.",
    "The lesson uses “disease” in a carefully reviewed vocabulary context."
  ],
  [
    "dish",
    "/dɪʃ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A piece of dishware normally used as a container for holding or serving food.",
    "We gave them a set of dishes for a wedding present."
  ],
  [
    "disk",
    "/dɪsk/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A flat circular plate.",
    "The lesson uses “disk” in a carefully reviewed vocabulary context."
  ],
  [
    "dismissal",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "Official notice that you have been fired from your job.",
    "The lesson uses “dismissal” in a carefully reviewed vocabulary context."
  ],
  [
    "disorder",
    "/dɪsˈɔːdə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A condition in which things are not in their expected places.",
    "The files are in complete disorder."
  ],
  [
    "display",
    "/dɪsˈpleɪ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Something shown to the public.",
    "The museum had many exhibits of oriental art."
  ],
  [
    "disposition",
    "/ˌdɪs.pəˈzɪ.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Your usual mood.",
    "He has a happy disposition."
  ],
  [
    "distance",
    "/ˈdɪs.tɪns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The property created by the space between two objects or points.",
    "The lesson uses “distance” in a carefully reviewed vocabulary context."
  ],
  [
    "distortion",
    "/dɪsˈtɔːʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The mistake of misrepresenting the facts.",
    "The lesson uses “distortion” in a carefully reviewed vocabulary context."
  ],
  [
    "distributor",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A company that markets merchandise.",
    "His company is a large distributor of software products."
  ],
  [
    "district",
    "/ˈdɪstɹɪkt/",
    "Places",
    "Places & locations",
    "noun",
    "B1",
    "A region marked off for administrative or other purposes.",
    "The lesson uses “district” in a carefully reviewed vocabulary context."
  ],
  [
    "disturbance",
    "/dɪˈstɜːbn̩s/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A disorderly outburst or tumult.",
    "They were amazed by the furious disturbance they had caused."
  ],
  [
    "dividend",
    "/ˈdɪvɪdɛnd/",
    "Community",
    "Money & possessions",
    "noun",
    "B1",
    "A bonus; something extra (especially a share of a surplus).",
    "The lesson uses “dividend” in a carefully reviewed vocabulary context."
  ],
  [
    "division",
    "/dɪˈvɪʒən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "An arithmetic operation that is the inverse of multiplication; the quotient of two numbers is computed.",
    "The lesson uses “division” in a carefully reviewed vocabulary context."
  ],
  [
    "divorce",
    "/dɪˈvɔːs/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The legal dissolution of a marriage.",
    "The lesson uses “divorce” in a carefully reviewed vocabulary context."
  ],
  [
    "doll",
    "/dɒl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A small replica of a person; used as a toy.",
    "The lesson uses “doll” in a carefully reviewed vocabulary context."
  ],
  [
    "dollar",
    "/ˈdɒlə/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "A piece of paper money worth one dollar.",
    "The lesson uses “dollar” in a carefully reviewed vocabulary context."
  ],
  [
    "dome",
    "/dəʊm/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A1",
    "A hemispherical roof.",
    "The lesson uses “dome” in a carefully reviewed vocabulary context."
  ],
  [
    "domination",
    "/ˌdɒməˈneɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Power to dominate or defeat.",
    "Mastery of the seas."
  ],
  [
    "donor",
    "/ˈdoʊnɚ/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "A2",
    "(medicine) someone who gives blood or tissue or an organ to be used in another person (the host).",
    "The lesson uses “donor” in a carefully reviewed vocabulary context."
  ],
  [
    "dose",
    "/dəʊs/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "A1",
    "A measured portion of medicine taken at any one time.",
    "The lesson uses “dose” in a carefully reviewed vocabulary context."
  ],
  [
    "double",
    "/ˈdʌb.əl/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "A quantity that is twice as great as another.",
    "36 is the double of 18."
  ],
  [
    "doubt",
    "/daʊt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Uncertainty about the truth or factuality or existence of something.",
    "The dubiousness of his claim."
  ],
  [
    "dough",
    "/dəʊ/",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "A flour mixture stiff enough to knead or roll.",
    "The lesson uses “dough” in a carefully reviewed vocabulary context."
  ],
  [
    "dozen",
    "/ˈdʌzən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The cardinal number that is the sum of eleven and one.",
    "The lesson uses “dozen” in a carefully reviewed vocabulary context."
  ],
  [
    "draft",
    "/dɹɑːft/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "Compulsory military service.",
    "The lesson uses “draft” in a carefully reviewed vocabulary context."
  ],
  [
    "dragon",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A creature of Teutonic mythology; usually represented as breathing fire and having a reptilian body and sometimes wings.",
    "The lesson uses “dragon” in a carefully reviewed vocabulary context."
  ],
  [
    "drain",
    "/dʒɹeɪn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A pipe through which liquid is carried away.",
    "The lesson uses “drain” in a carefully reviewed vocabulary context."
  ],
  [
    "drawer",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A boxlike container in a piece of furniture; made so as to slide in and out.",
    "The lesson uses “drawer” in a carefully reviewed vocabulary context."
  ],
  [
    "dream",
    "/dɹiːm/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "A series of mental images and emotions occurring during sleep.",
    "I had a dream about you last night."
  ],
  [
    "dressing",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A cloth covering for a wound or sore.",
    "The lesson uses “dressing” in a carefully reviewed vocabulary context."
  ],
  [
    "drift",
    "/dɹɪft/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A large mass of material that is heaped up by the wind or by water currents.",
    "The lesson uses “drift” in a carefully reviewed vocabulary context."
  ],
  [
    "drink",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "The act of drinking alcoholic beverages to excess.",
    "Drink was his downfall."
  ],
  [
    "drive",
    "/dɹaɪv/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "A journey in a vehicle (usually an automobile).",
    "He took the family for a drive in his new car."
  ],
  [
    "drop",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A steep high face of rock.",
    "A steep drop."
  ],
  [
    "drug",
    "Listen for pronunciation",
    "Health",
    "Medicine & healthcare",
    "noun",
    "A1",
    "A substance that is used as a medicine or narcotic.",
    "The lesson uses “drug” in a carefully reviewed vocabulary context."
  ],
  [
    "drum",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A musical percussion instrument; usually consists of a hollow cylinder with a membrane stretched across each end.",
    "The lesson uses “drum” in a carefully reviewed vocabulary context."
  ],
  [
    "duke",
    "/djuːk/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A nobleman (in various countries) of high rank.",
    "The lesson uses “duke” in a carefully reviewed vocabulary context."
  ],
  [
    "duration",
    "/djʊˈɹeɪʃn̩/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "B1",
    "The period of time during which something continues.",
    "The lesson uses “duration” in a carefully reviewed vocabulary context."
  ],
  [
    "dust",
    "/dʌst/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Fine powdery material such as dry earth or pollen that can be blown about in the air.",
    "The furniture was covered with dust."
  ],
  [
    "duty",
    "/ˈdjuːti/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "Work that you are obliged to perform for moral or legal reasons.",
    "The duties of the job."
  ],
  [
    "earthquake",
    "/ˈɜːθkweɪk/",
    "Community",
    "Events",
    "noun",
    "B2",
    "Shaking and vibration at the surface of the earth resulting from underground movement along a fault plane or from volcanic activity.",
    "The lesson uses “earthquake” in a carefully reviewed vocabulary context."
  ],
  [
    "east",
    "/iːst/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The cardinal compass point that is at 90 degrees.",
    "The lesson uses “east” in a carefully reviewed vocabulary context."
  ],
  [
    "echo",
    "/ˈɛkəʊ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The repetition of a sound resulting from reflection of the sound waves.",
    "She could hear echoes of her own footsteps."
  ],
  [
    "economics",
    "/ˌiːkəˈnɒmɪks/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "The branch of social science that deals with the production and distribution and consumption of goods and services and their management.",
    "The lesson uses “economics” in a carefully reviewed vocabulary context."
  ],
  [
    "economist",
    "/iːˈkɒn.ə.mɪst/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "An expert in the science of economics.",
    "The lesson uses “economist” in a carefully reviewed vocabulary context."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch019 = createVocabularyBatch({
  id: "batch-019",
  source,
  entries,
})

export const batch019Metadata = {
  id: "batch-019",
  title: "Open English WordNet core vocabulary 1001–1100",
  addedWords: batch019.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
