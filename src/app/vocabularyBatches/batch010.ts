import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "controversial",
    "/ˌkɒn.trəˈvɜː.ʃəl/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Marked by or capable of arousing controversy.",
    "The issue of the death penalty is highly controversial."
  ],
  [
    "convenient",
    "/kənˈviːniənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Suited to your comfort or purpose or needs.",
    "A convenient excuse for not going."
  ],
  [
    "conventional",
    "/kənˈvɛnʃənəl/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Following accepted customs and proprieties.",
    "Conventional wisdom."
  ],
  [
    "cool",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Neither warm nor very cold; giving relief from heat.",
    "A cool autumn day."
  ],
  [
    "cooperative",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Done with or working with others for a common purpose or benefit.",
    "A cooperative effort."
  ],
  [
    "corporate",
    "/ˈkɔɹ.pəɹ.ət/",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Of or belonging to a corporation.",
    "Corporate rates."
  ],
  [
    "critical",
    "/ˈkɹɪtɪkəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Marked by a tendency to find and call attention to errors and flaws.",
    "A critical attitude."
  ],
  [
    "crude",
    "/kɹuːd/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not refined or processed.",
    "Crude oil."
  ],
  [
    "cruel",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "(of persons or their actions) able or disposed to inflict pain or suffering.",
    "Cruel tortures."
  ],
  [
    "cultural",
    "/ˈkʌlt͡ʃəɹəl/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Of or relating to the arts and manners that a group favors.",
    "Cultural events."
  ],
  [
    "curious",
    "/ˈkjʊə.ɹi.əs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Eager to investigate and learn or learn more (sometimes about others' concerns).",
    "A curious child is a teacher's delight."
  ],
  [
    "current",
    "/ˈkʌɹənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Occurring in or belonging to the present time.",
    "Current events."
  ],
  [
    "cute",
    "/kjuːt/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Attractive especially by means of smallness or prettiness or quaintness.",
    "A cute kid with pigtails."
  ],
  [
    "dangerous",
    "/ˈdeɪnʒ(ə)ɹəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Involving or causing danger or risk; liable to hurt or harm.",
    "A dangerous criminal."
  ],
  [
    "dark",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Devoid of or deficient in light or brightness; shadowed or black.",
    "Sitting in a dark corner."
  ],
  [
    "deadly",
    "/ˈdɛd.li/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of an instrument of certain death.",
    "Deadly poisons."
  ],
  [
    "deaf",
    "/dɛf/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Lacking or deprived of the sense of hearing wholly or in part.",
    "The lesson uses “deaf” in a carefully reviewed vocabulary context."
  ],
  [
    "decisive",
    "/dɪˈsaɪsɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Determining or having the power to determine an outcome.",
    "Cast the decisive vote."
  ],
  [
    "decorative",
    "/ˈdɛkɹətɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Serving an esthetic rather than a useful purpose.",
    "The buildings were utilitarian rather than decorative."
  ],
  [
    "deep",
    "/diːp/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Having great spatial extension or penetration downward or inward from an outer surface or backward or laterally or outward from a center; sometimes used in combination.",
    "A deep well."
  ],
  [
    "definite",
    "/ˈdɛfɪnɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Precise; explicit and clearly defined.",
    "I want a definite answer."
  ],
  [
    "delicate",
    "/ˈdɛlɪkət/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Exquisitely fine and subtle and pleasing; susceptible to injury.",
    "A delicate violin passage."
  ],
  [
    "democratic",
    "/dɛməˈkɹætɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Characterized by or advocating or based upon the principles of democracy or social equality.",
    "Democratic government."
  ],
  [
    "dependent",
    "/dɪˈpɛndənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Relying on or requiring a person or thing for support, supply, or what is needed.",
    "Dependent children."
  ],
  [
    "desirable",
    "/dɪˈzaɪəɹəbəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Worth having or seeking or achieving.",
    "A desirable job."
  ],
  [
    "difficult",
    "/ˈdɪfɪkəlt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Not easy; requiring great physical or mental effort to accomplish or comprehend or endure.",
    "A difficult task."
  ],
  [
    "digital",
    "/ˈdɪd͡ʒɪtəɫ/",
    "Technology",
    "IT & computers",
    "adjective",
    "B1",
    "Displaying numbers rather than scale positions.",
    "Digital clock."
  ],
  [
    "diplomatic",
    "/ˌdɪpləˈmætɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Using or marked by tact in dealing with sensitive matters or people.",
    "The hostess averted a confrontation with a diplomatic change of subject."
  ],
  [
    "direct",
    "/d(a)ɪˈɹɛkt/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Direct in spatial dimensions; proceeding without deviation or interruption; straight and short.",
    "A direct route."
  ],
  [
    "dirty",
    "/ˈdɜːti/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Soiled or likely to soil with dirt or grime.",
    "Dirty unswept sidewalks."
  ],
  [
    "discreet",
    "/dɪˈskɹiːt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Marked by prudence or modesty and wise self-restraint.",
    "His trusted discreet aide."
  ],
  [
    "distant",
    "/ˈdɪstənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Separated in space or coming from or going to a distance.",
    "Distant villages."
  ],
  [
    "distinct",
    "/dɪsˈtɪŋkt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Easy to perceive; especially clearly outlined.",
    "A distinct flavor."
  ],
  [
    "domestic",
    "/dəˈmɛstɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Of concern to or concerning the internal affairs of a nation.",
    "Domestic issues such as tax rate and highway construction."
  ],
  [
    "dominant",
    "/ˈdɒmɪnənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Exercising influence or control.",
    "Television plays a dominant role in molding public opinion."
  ],
  [
    "dramatic",
    "/dɹəˈmætɪk/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Pertaining to or characteristic of drama.",
    "Dramatic arts."
  ],
  [
    "dry",
    "/dɹaɪ/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Free from liquid or moisture; lacking natural or normal moisture or depleted of water; or no longer wet.",
    "Dry land."
  ],
  [
    "due",
    "/djuː/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Owed and payable immediately or on demand.",
    "Payment is due."
  ],
  [
    "dull",
    "/dʌl/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Not having a sharp edge or point.",
    "The knife was too dull to be of any use."
  ],
  [
    "dynamic",
    "/daɪˈnæ.mɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Characterized by action or forcefulness or force of personality.",
    "A dynamic market."
  ],
  [
    "eager",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having or showing keen interest or intense desire or impatient expectancy.",
    "Eager to learn."
  ],
  [
    "early",
    "/ˈɝli/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "At or near the beginning of a period of time or course of events or before the usual or expected time.",
    "Early morning."
  ],
  [
    "easy",
    "/ˈiːzi/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Posing no difficulty; requiring little effort.",
    "An easy job."
  ],
  [
    "economic",
    "/ˌiːkəˈnɒmɪk/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Of or relating to the science of economics.",
    "Economic theory."
  ],
  [
    "educational",
    "/ˌɛdʒʊˈkeɪʃənəl/",
    "School",
    "University & academic English",
    "adjective",
    "B2",
    "Relating to the process of education.",
    "Educational psychology."
  ],
  [
    "effective",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Producing or capable of producing an intended result or having a striking effect.",
    "Effective teaching methods."
  ],
  [
    "efficient",
    "/ɪˈfɪʃənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Being effective without wasting time or effort or expense.",
    "An efficient production manager."
  ],
  [
    "electronic",
    "/ˌɛl.ɛkˈtɹɒn.ɪk/",
    "Technology",
    "IT & computers",
    "adjective",
    "B2",
    "Of or relating to electronics; concerned with or using devices that operate on principles governing the behavior of electrons.",
    "Electronic devices."
  ],
  [
    "elegant",
    "/ˈɛl.ə.ɡənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Refined and tasteful in appearance or behavior or style.",
    "Elegant handwriting."
  ],
  [
    "eligible",
    "/ˈɛlɪdʒəb(ə)l/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Qualified for or allowed or worthy of being chosen.",
    "Eligible to run for office."
  ],
  [
    "eloquent",
    "/ˈɛl.əˌkwənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Expressing yourself readily, clearly, effectively.",
    "Able to dazzle with his facile tongue."
  ],
  [
    "emotional",
    "/ɪˈməʊʃənəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Determined or actuated by emotion rather than reason.",
    "It was an emotional judgment."
  ],
  [
    "empirical",
    "/ɪmˈpɪɹɪkəl/",
    "School",
    "University & academic English",
    "adjective",
    "B2",
    "Derived from experiment and observation rather than theory.",
    "An empirical basis for an ethical theory."
  ],
  [
    "empty",
    "/ˈɛmpti/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Holding or containing nothing.",
    "An empty glass."
  ],
  [
    "encouraging",
    "/ɪnˈkʌɹɪd͡ʒɪŋ/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Giving courage or confidence or hope.",
    "Encouraging advances in medical research."
  ],
  [
    "enjoyable",
    "/ɛnˈdʒɔɪ.jə.bəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Affording satisfaction or pleasure.",
    "The company was enjoyable."
  ],
  [
    "enthusiastic",
    "/ɪnˌθjuːzɪˈæstɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Having or showing great excitement and interest.",
    "Enthusiastic crowds filled the streets."
  ],
  [
    "environmental",
    "Listen for pronunciation",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Of or relating to the external conditions or surroundings.",
    "Environmental factors."
  ],
  [
    "essential",
    "/ɪˈsɛn.ʃəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Basic and fundamental.",
    "The essential feature."
  ],
  [
    "established",
    "/ɪˈstæb.lɪʃt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Brought about or set up or accepted; especially long established.",
    "The established social order."
  ],
  [
    "eternal",
    "/ɪˈtɝnəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Continuing forever or indefinitely.",
    "Eternal truths."
  ],
  [
    "ethical",
    "/ˈɛθɪkəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Conforming to accepted standards of social or professional behavior.",
    "An ethical lawyer."
  ],
  [
    "ethnic",
    "/ˈɛθ.nɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Denoting or deriving from or distinctive of the ways of living built up by a group of people.",
    "Ethnic food."
  ],
  [
    "even",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Being level or straight or regular and without variation as e.g. in shape or texture; or being in the same plane or at the same height as something else (i.e. even with).",
    "An even application of varnish."
  ],
  [
    "exact",
    "/ɪɡˈzækt/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Marked by strict and particular and complete accordance with fact.",
    "An exact mind."
  ],
  [
    "exciting",
    "/ɪkˈsaɪtɪŋ/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Creating or arousing excitement.",
    "An exciting account of her trip."
  ],
  [
    "exclusive",
    "/ɪkˈsklu.sɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Excluding much or all; especially all but a particular group or minority.",
    "Exclusive clubs."
  ],
  [
    "exotic",
    "/ɪɡˈzɒtɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Being or from or characteristic of another place or part of the world.",
    "Exotic plants in a greenhouse."
  ],
  [
    "expected",
    "/ɪksˈpɛktɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Considered likely or probable to happen or arrive.",
    "Prepared for the expected attack."
  ],
  [
    "expensive",
    "/ɪkˈspɛnsɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "High in price or charging high prices.",
    "Expensive clothes."
  ],
  [
    "experienced",
    "/ɪkˈspɪɹ.i.ənst/",
    "School",
    "University & academic English",
    "adjective",
    "B2",
    "Having experience; having knowledge or skill from observation or participation.",
    "The lesson uses “experienced” in a carefully reviewed vocabulary context."
  ],
  [
    "experimental",
    "/ɨkspɛɹəˈmɛntəl/",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Relating to or based on experiment.",
    "Experimental physics."
  ],
  [
    "explicit",
    "/ɪkˈsplɪsɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Precisely and clearly expressed or readily observable; leaving nothing to implication.",
    "Explicit instructions."
  ],
  [
    "express",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Without unnecessary stops.",
    "An express train."
  ],
  [
    "external",
    "/ɛksˈtɝnəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Happening or arising or located outside or beyond some limits or especially surface.",
    "The external auditory canal."
  ],
  [
    "extinct",
    "/ɪkˈstɪŋkt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "No longer in existence; lost or especially having died out leaving no living representatives.",
    "An extinct species of fish."
  ],
  [
    "extraordinary",
    "/ɪksˈtɹɔː(ɹ)dɪnəɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Beyond what is ordinary or usual; highly unusual or exceptional or remarkable; special.",
    "Extraordinary authority."
  ],
  [
    "faithful",
    "/ˈfeɪθ.fəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Not having sexual relations with anyone except your husband or wife, or your boyfriend or girlfriend.",
    "He remained faithful to his wife."
  ],
  [
    "false",
    "/fɔls/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not in accordance with the fact or reality or actuality.",
    "Gave false testimony under oath."
  ],
  [
    "familiar",
    "/fəˈmɪl.i.ə/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Well known or easily recognized.",
    "A familiar figure."
  ],
  [
    "far",
    "/fɑː/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Located at a great distance in time or space or degree.",
    "We come from a far country."
  ],
  [
    "fashionable",
    "/ˈfæʃənəbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having elegance or taste or refinement in manners or dress.",
    "A little less posh but every bit as stylish as Lord Peter Wimsey."
  ],
  [
    "fast",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "At a rapid tempo.",
    "The band played a fast fox trot."
  ],
  [
    "fastidious",
    "/fæˈstɪdi.əs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Giving careful attention to detail; hard to please; excessively concerned with cleanliness.",
    "A fastidious and incisive intellect."
  ],
  [
    "fat",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Having an (over)abundance of flesh.",
    "He hadn't remembered how fat she was."
  ],
  [
    "favorable",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Encouraging or approving or pleasing.",
    "A favorable reply."
  ],
  [
    "federal",
    "/ˈfɛdəɹəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Characterized by or constituting a form of government in which power is divided between one central and several regional authorities.",
    "A federal system like that of the United States."
  ],
  [
    "feminine",
    "/ˈfɛmɪnɪn/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Befitting or characteristic of a woman especially a mature woman.",
    "Womanly virtues of gentleness and compassion."
  ],
  [
    "financial",
    "/faɪˈnænʃəl/",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Involving financial matters.",
    "Fiscal responsibility."
  ],
  [
    "fine",
    "/faɪn/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Of textures that are smooth to the touch or substances consisting of relatively small particles.",
    "Wood with a fine grain."
  ],
  [
    "finished",
    "/ˈfɪnɪʃt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Ended or brought to an end.",
    "Are you finished?"
  ],
  [
    "first",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Preceding all others in time or space or degree.",
    "The first house on the right."
  ],
  [
    "firsthand",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Received directly from a source.",
    "Firsthand information."
  ],
  [
    "flat",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Horizontally level.",
    "A flat roof."
  ],
  [
    "flawed",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having a blemish or flaw.",
    "A flawed diamond."
  ],
  [
    "flexible",
    "/ˈflɛk.sɪ.bəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Able to flex; able to bend easily.",
    "Slim flexible birches."
  ],
  [
    "foolish",
    "/ˈfuː.lɪʃ/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Devoid of good sense or judgment.",
    "Foolish remarks."
  ],
  [
    "forward",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "At or near or directed toward the front.",
    "The forward section of the aircraft."
  ],
  [
    "fragrant",
    "/ˈfɹeɪ.ɡɹənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Pleasant-smelling.",
    "The lesson uses “fragrant” in a carefully reviewed vocabulary context."
  ],
  [
    "frank",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Characterized by directness in manner or speech; without subtlety or evasion.",
    "Tell me what you think — and you may just as well be frank."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch010 = createVocabularyBatch({
  id: "batch-010",
  source,
  entries,
})

export const batch010Metadata = {
  id: "batch-010",
  title: "Open English WordNet core vocabulary 101–200",
  addedWords: batch010.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
