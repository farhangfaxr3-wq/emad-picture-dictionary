import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "temporary",
    "/ˈtɛmpəɹəɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Not permanent; not lasting.",
    "A temporary arrangement."
  ],
  [
    "tender",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Easy to cut or chew.",
    "Tender beef."
  ],
  [
    "tense",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Taut or rigid; stretched tight.",
    "Tense piano strings."
  ],
  [
    "thick",
    "/θɘk/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not thin; of a specific thickness or of relatively great extent from one surface to the opposite usually in the smallest of the three solid dimensions.",
    "An inch thick."
  ],
  [
    "thin",
    "/ˈθɪn/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Lacking excess flesh.",
    "You can't be too rich or too thin."
  ],
  [
    "thirsty",
    "/ˈθɜː(ɹ)st.i/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Feeling a need or desire to drink.",
    "After playing hard the children were thirsty."
  ],
  [
    "thoughtful",
    "/ˈθɔːtfʊl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Considerate of the feelings or well-being of others.",
    "The lesson uses “thoughtful” in a carefully reviewed vocabulary context."
  ],
  [
    "tidy",
    "/ˈtaɪdi/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Marked by order and cleanliness in appearance or habits.",
    "A tidy person."
  ],
  [
    "tolerant",
    "/ˈtɒləɹənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Showing respect for the rights or opinions or practices of others.",
    "The lesson uses “tolerant” in a carefully reviewed vocabulary context."
  ],
  [
    "tough",
    "/tʌf/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Physically toughened.",
    "The tough bottoms of his feet."
  ],
  [
    "toxic",
    "/ˈtɒk.sɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of or relating to or caused by a toxin or poison.",
    "Suffering from exposure to toxic substances."
  ],
  [
    "traditional",
    "/tɹəˈdɪʃənəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Consisting of or derived from tradition.",
    "Traditional history."
  ],
  [
    "transparent",
    "/tɹæn(t)sˈpæɹənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "So thin as to transmit light.",
    "Transparent chiffon."
  ],
  [
    "tropical",
    "/ˈtɹɒp.ɪ.kəl/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Of or relating to the tropics, or either tropic.",
    "Tropical year."
  ],
  [
    "true",
    "/tɹuː/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Consistent with fact or reality; not false.",
    "The story is true."
  ],
  [
    "typical",
    "/ˈtɪpɪkl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Exhibiting the qualities or characteristics that identify a group or kind or category.",
    "A typical American girl."
  ],
  [
    "ugly",
    "/ˈʌɡli/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Displeasing to the senses.",
    "An ugly face."
  ],
  [
    "ultimate",
    "/ˈʌltɪmɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Furthest or highest in degree or order; utmost or extreme.",
    "The ultimate achievement."
  ],
  [
    "unanimous",
    "/juːˈnanɪməs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "In complete agreement.",
    "A unanimous decision."
  ],
  [
    "uncomfortable",
    "/ʌnˈkʌmf.tə.bəl/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Conducive to or feeling mental discomfort.",
    "This kind of life can prove disruptive and uncomfortable."
  ],
  [
    "uneasy",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Lacking a sense of security or affording no ease or reassurance.",
    "Farmers were uneasy until rain finally came."
  ],
  [
    "unemployed",
    "/ˌʌnɪmˈplɔɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Not engaged in a gainful occupation.",
    "Unemployed workers marched on the capital."
  ],
  [
    "unexpected",
    "/ʌnɪkˈspɛktɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Not expected or anticipated.",
    "Unexpected guests."
  ],
  [
    "unfortunate",
    "/ʌnˈfɔːtjʊnət/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Not favored by fortune; marked or accompanied by or resulting in ill fortune.",
    "An unfortunate turn of events."
  ],
  [
    "unique",
    "/juːˈniːk/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Radically distinctive and without equal.",
    "Bach was unique in his handling of counterpoint."
  ],
  [
    "universal",
    "/ˌjuːnɪˈvɜːsl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Of worldwide scope or applicability.",
    "Universal experience."
  ],
  [
    "unlawful",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Contrary to or forbidden by law.",
    "Unlawful measures."
  ],
  [
    "unlike",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not equal in amount.",
    "They distributed unlike (or unequal) sums to the various charities."
  ],
  [
    "unlikely",
    "/ʌnˈlaɪkli/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Not likely to be true or to occur or to have occurred.",
    "Legislation on the question is highly unlikely."
  ],
  [
    "urban",
    "/ˈɜːbən/",
    "School",
    "Academic description",
    "adjective",
    "A2",
    "Relating to or concerned with a city or densely populated area.",
    "Urban sociology."
  ],
  [
    "useful",
    "/ˈjuːsfəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Being of use or service.",
    "The girl felt motherly and useful."
  ],
  [
    "useless",
    "/ˈjuːs.ləs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having no beneficial use or incapable of functioning usefully.",
    "A kitchen full of useless gadgets."
  ],
  [
    "usual",
    "/ˈjuːʒʊəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Occurring or encountered or experienced or observed frequently or in accordance with regular practice or procedure.",
    "Grew the usual vegetables."
  ],
  [
    "vague",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not precisely limited, determined, or distinguished.",
    "Vague feelings of sadness."
  ],
  [
    "vain",
    "/veɪn/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Characteristic of false pride; having an exaggerated sense of self-importance.",
    "Vain about her clothes."
  ],
  [
    "valid",
    "/ˈvælɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Well grounded in logic or truth or having legal force.",
    "A valid inference."
  ],
  [
    "valuable",
    "/ˈvælju(ə)bl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having great material or monetary value especially for use or exchange.",
    "A valuable diamond."
  ],
  [
    "varied",
    "/ˈvɛəɹid/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Characterized by variety.",
    "Immigrants' varied ethnic and religious traditions."
  ],
  [
    "verbal",
    "/ˈvɜː.bəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Relating to or having facility in the use of words.",
    "A good poet is a verbal artist."
  ],
  [
    "vertical",
    "/ˈvɜːtɪkəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "At right angles to the plane of the horizon or a base line.",
    "A vertical camera angle."
  ],
  [
    "viable",
    "/ˈvaɪəbəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Capable of being done with means at hand and circumstances as they are.",
    "The lesson uses “viable” in a carefully reviewed vocabulary context."
  ],
  [
    "vicious",
    "/ˈvɪʃəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Marked by deep ill will; deliberately harmful.",
    "Vicious gossip."
  ],
  [
    "vigorous",
    "/ˈvɪɡəɹəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Strong and active physically or mentally.",
    "[object Object]."
  ],
  [
    "violent",
    "/ˈvaɪ.ə.lənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Acting with or marked by or resulting from great force or energy or emotional intensity.",
    "A violent attack."
  ],
  [
    "visible",
    "/ˈvɪzəb(ə)l/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Capable of being seen; or open to easy view.",
    "A visible object."
  ],
  [
    "visual",
    "/ˈvɪʒʊəl/",
    "School",
    "Academic description",
    "adjective",
    "A2",
    "Relating to or using sight.",
    "Visual powers."
  ],
  [
    "vocational",
    "Listen for pronunciation",
    "Sports",
    "Sports vocabulary",
    "adjective",
    "B2",
    "Of or relating to a vocation or occupation; especially providing or undergoing training in special skills.",
    "Vocational school."
  ],
  [
    "voluntary",
    "/ˈvɒ.lən.tɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Of your own free will or design; done by choice; not forced or compelled.",
    "Man is a voluntary agent."
  ],
  [
    "vulnerable",
    "/ˈvʌln(ə)ɹəbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Susceptible to attack.",
    "A vulnerable bridge."
  ],
  [
    "warm",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Having or producing a comfortable and agreeable degree of heat or imparting or maintaining heat.",
    "A warm body."
  ],
  [
    "weak",
    "/wiːk/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Wanting in physical strength.",
    "A weak pillar."
  ],
  [
    "welcome",
    "/ˈwɛlkəm/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Giving pleasure or satisfaction or received with pleasure or freely granted.",
    "A welcome relief."
  ],
  [
    "well",
    "Listen for pronunciation",
    "Health",
    "Medicine & healthcare",
    "adjective",
    "A1",
    "In good health especially after having suffered illness or injury.",
    "Appears to be entirely well."
  ],
  [
    "wet",
    "/wɛt/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Covered or soaked with a liquid such as water.",
    "A wet bathing suit."
  ],
  [
    "white",
    "/waɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Being of the achromatic color of maximum lightness; having little or no hue owing to reflection of almost all incident light.",
    "As white as fresh snow."
  ],
  [
    "whole",
    "/həʊl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Including all components without exception; being one unit or constituting the full amount or extent or duration; complete.",
    "Gave his whole attention."
  ],
  [
    "wild",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "In a natural state; not tamed or domesticated or cultivated.",
    "Wild geese."
  ],
  [
    "wise",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Having or prompted by wisdom or discernment.",
    "A wise leader."
  ],
  [
    "written",
    "/ˈɹɪtn̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Set down in writing in any of various ways.",
    "Written evidence."
  ],
  [
    "wrong",
    "/ɹɒŋ/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Contrary to conscience or morality or law.",
    "It is wrong for the rich to take advantage of the poor."
  ],
  [
    "abbey",
    "/ˈæb.i/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A monastery ruled by an abbot.",
    "The lesson uses “abbey” in a carefully reviewed vocabulary context."
  ],
  [
    "ability",
    "/əˈbɪl.ə.ti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The quality of being able to perform; a quality that permits or facilitates achievement or accomplishment.",
    "The lesson uses “ability” in a carefully reviewed vocabulary context."
  ],
  [
    "abortion",
    "/əˈbɔɹ.ʃn̩/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Termination of pregnancy.",
    "The lesson uses “abortion” in a carefully reviewed vocabulary context."
  ],
  [
    "absence",
    "/ˈæb.s(ə)n̩s/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Failure to be present.",
    "The lesson uses “absence” in a carefully reviewed vocabulary context."
  ],
  [
    "absorption",
    "/əbˈzɔːp.ʃn̩/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "The mental state of being preoccupied by something.",
    "The lesson uses “absorption” in a carefully reviewed vocabulary context."
  ],
  [
    "abuse",
    "/əˈbjuːs/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "A2",
    "Cruel or inhumane treatment.",
    "The child showed signs of physical abuse."
  ],
  [
    "academy",
    "/əˈkæd.ə.mi/",
    "School",
    "University & academic English",
    "noun",
    "B1",
    "A learned establishment for the advancement of knowledge.",
    "The lesson uses “academy” in a carefully reviewed vocabulary context."
  ],
  [
    "acceptance",
    "/ək.ˈsɛp.təns/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of accepting with approval; favorable reception.",
    "The proposal found wide acceptance."
  ],
  [
    "access",
    "/ˈæksɛs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The right to enter.",
    "The lesson uses “access” in a carefully reviewed vocabulary context."
  ],
  [
    "accident",
    "/ˈæk.sə.dənt/",
    "Community",
    "Events",
    "noun",
    "B1",
    "Anything that happens suddenly or by chance without an apparent cause.",
    "Winning the lottery was a happy accident."
  ],
  [
    "account",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A statement that makes something comprehensible by describing the relevant structure or operation or circumstances etc.",
    "I expected a brief account."
  ],
  [
    "accumulation",
    "/ə.ˌkjuːm.jə.ˈleɪ.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "An increase by natural growth or addition.",
    "The lesson uses “accumulation” in a carefully reviewed vocabulary context."
  ],
  [
    "achievement",
    "/əˈtʃiːvmənt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The action of accomplishing something.",
    "The lesson uses “achievement” in a carefully reviewed vocabulary context."
  ],
  [
    "acid",
    "/ˈæs.ɪd/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Any of various water-soluble compounds having a sour taste and capable of turning litmus red and reacting with a base to form a salt.",
    "The lesson uses “acid” in a carefully reviewed vocabulary context."
  ],
  [
    "acquaintance",
    "/əˈkweɪntəns/",
    "School",
    "University & academic English",
    "noun",
    "C1",
    "Personal knowledge or information about someone or something.",
    "The lesson uses “acquaintance” in a carefully reviewed vocabulary context."
  ],
  [
    "acquisition",
    "/æ.kwɪ.ˈzɪ.ʃən/",
    "Community",
    "Money & possessions",
    "noun",
    "B2",
    "Something acquired.",
    "A recent acquisition by the museum."
  ],
  [
    "act",
    "/ækt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Something that people do or cause to happen.",
    "The lesson uses “act” in a carefully reviewed vocabulary context."
  ],
  [
    "action",
    "/ˈæk.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "A judicial proceeding brought by one party against another; one party prosecutes another for a wrong done or for protection of a right or for prevention of a wrong.",
    "The lesson uses “action” in a carefully reviewed vocabulary context."
  ],
  [
    "activity",
    "/ækˈtɪ.vɪ.ti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The trait of being active; moving or acting rapidly and energetically.",
    "The level of activity declines with age."
  ],
  [
    "addition",
    "/əˈdɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The arithmetic operation of summing; calculating the sum of two or more numbers.",
    "The summation of four and three gives seven."
  ],
  [
    "administration",
    "/ədˌmɪnəˈstɹeɪʃən/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "C1",
    "The tenure of a president.",
    "Things were quiet during the Eisenhower administration."
  ],
  [
    "administrator",
    "/ədˈmɪnɪstɹeɪtə/",
    "People",
    "People & roles",
    "noun",
    "C1",
    "Someone who administers a business.",
    "The lesson uses “administrator” in a carefully reviewed vocabulary context."
  ],
  [
    "admiration",
    "/ˌæd.mɚˈeɪʃ.ən/",
    "People",
    "Feelings & emotions",
    "noun",
    "B2",
    "A feeling of delighted approval and liking.",
    "The lesson uses “admiration” in a carefully reviewed vocabulary context."
  ],
  [
    "admission",
    "/ædˈmɪʃ.ən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "An acknowledgment of the truth of something.",
    "The lesson uses “admission” in a carefully reviewed vocabulary context."
  ],
  [
    "adoption",
    "/əˈdɑp.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A legal proceeding that creates a parent-child relation between persons not related by blood; the adopted child is entitled to all privileges belonging to a natural child of the adoptive parents (including the right to inherit).",
    "The lesson uses “adoption” in a carefully reviewed vocabulary context."
  ],
  [
    "advance",
    "/ədˈvæns/",
    "Community",
    "Money & possessions",
    "noun",
    "B1",
    "An amount paid before it is earned.",
    "The lesson uses “advance” in a carefully reviewed vocabulary context."
  ],
  [
    "advantage",
    "/ədˈvɑːn.tɪdʒ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Benefit resulting from some event or action.",
    "It turned out to my advantage."
  ],
  [
    "adventure",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "A wild and exciting undertaking (not necessarily lawful).",
    "The lesson uses “adventure” in a carefully reviewed vocabulary context."
  ],
  [
    "advertising",
    "/ˈædvɚˌtaɪzɪŋ/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A public promotion of some product or service.",
    "The lesson uses “advertising” in a carefully reviewed vocabulary context."
  ],
  [
    "advice",
    "/ədˈvaɪs/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A proposal for an appropriate course of action.",
    "The lesson uses “advice” in a carefully reviewed vocabulary context."
  ],
  [
    "adviser",
    "/ædˈvaɪz.ɚ/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "An expert who gives advice.",
    "An adviser helped students select their courses."
  ],
  [
    "advocate",
    "/ˈæd.və.kət/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A person who pleads for a cause or propounds an idea.",
    "The lesson uses “advocate” in a carefully reviewed vocabulary context."
  ],
  [
    "affair",
    "/əˈfɛɹ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A usually secretive or illicit sexual relationship.",
    "The lesson uses “affair” in a carefully reviewed vocabulary context."
  ],
  [
    "affinity",
    "/əˈfɪnɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A natural attraction or feeling of kinship.",
    "An affinity for politics."
  ],
  [
    "afternoon",
    "/ˌɑːf.tə.ˈnuːn/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "B2",
    "The part of the day between noon and evening.",
    "He spent a quiet afternoon in the park."
  ],
  [
    "agency",
    "/ˈeɪ.dʒən.si/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A business or organization that provides a particular service, especially the mediation of transactions between two parties.",
    "The lesson uses “agency” in a carefully reviewed vocabulary context."
  ],
  [
    "agenda",
    "/əˈdʒɛn.də/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A list of matters to be taken up (as at a meeting).",
    "The lesson uses “agenda” in a carefully reviewed vocabulary context."
  ],
  [
    "agent",
    "/ˈeɪ.dʒənt/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A representative who acts on behalf of other persons or organizations.",
    "The lesson uses “agent” in a carefully reviewed vocabulary context."
  ],
  [
    "agony",
    "/ˈæ.ɡə.niː/",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "Intense feelings of suffering; acute mental or physical pain.",
    "An agony of doubt."
  ],
  [
    "agriculture",
    "/ˈæɡɹɪˌkʌltʃə/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The practice of cultivating the land or raising stock.",
    "The lesson uses “agriculture” in a carefully reviewed vocabulary context."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch014 = createVocabularyBatch({
  id: "batch-014",
  source,
  entries,
})

export const batch014Metadata = {
  id: "batch-014",
  title: "Open English WordNet core vocabulary 501–600",
  addedWords: batch014.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
