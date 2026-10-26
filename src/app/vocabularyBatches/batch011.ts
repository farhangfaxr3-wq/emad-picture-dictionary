import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "free",
    "/fɹiː/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Not limited or hampered; not under compulsion or restraint.",
    "Free enterprise."
  ],
  [
    "frequent",
    "/ˈfɹiː.kwənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Coming at short intervals or habitually.",
    "A frequent guest."
  ],
  [
    "fresh",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Recently made, produced, or harvested.",
    "Fresh bread."
  ],
  [
    "full",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Containing as much or as many as is possible or normal.",
    "A full glass."
  ],
  [
    "full-time",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "For the entire time appropriate to an activity.",
    "A full-time job."
  ],
  [
    "functional",
    "/ˈfʌŋk(t)ʃənəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Designed for or capable of a particular function or use.",
    "A style of writing in which every word is functional."
  ],
  [
    "funny",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Arousing or provoking laughter.",
    "Funny stories that made everybody laugh."
  ],
  [
    "general",
    "/ˈd͡ʒɛnɹəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Applying to all or most members of a category or group.",
    "The general public."
  ],
  [
    "genetic",
    "Listen for pronunciation",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Of or relating to the science of genetics.",
    "Genetic research."
  ],
  [
    "genuine",
    "/ˈdʒɛnjuːˌɪn/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Not fake or counterfeit.",
    "A genuine Picasso."
  ],
  [
    "geological",
    "/ˌdʒiː.əˈlɒdʒ.ɪk.əl/",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Of or relating to or based on geology.",
    "Geological formations."
  ],
  [
    "glad",
    "/ɡlæd/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Showing or causing joy and pleasure; especially made happy.",
    "Glad you are here."
  ],
  [
    "glorious",
    "/ˈɡlɔː.ɹi.əs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having or deserving or conferring glory.",
    "A long and glorious career."
  ],
  [
    "good",
    "Listen for pronunciation",
    "Health",
    "Medicine & healthcare",
    "adjective",
    "A1",
    "Tending to promote physical well-being; beneficial to health.",
    "A good night's sleep."
  ],
  [
    "gradual",
    "/ˈɡɹædʒuəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Proceeding in small stages.",
    "A gradual increase in prices."
  ],
  [
    "grand",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Ostentatiously rich and superior in quality.",
    "A princely sum."
  ],
  [
    "graphic",
    "/ˈɡɹæfɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Describing nudity or sexual activity in graphic detail.",
    "Graphic sexual scenes."
  ],
  [
    "grateful",
    "/ˈɡɹeɪtfəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Feeling or showing gratitude.",
    "A grateful heart."
  ],
  [
    "great",
    "/ɡɹeɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of major significance or importance.",
    "A great work of art."
  ],
  [
    "green",
    "/ɡɹiːn/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not fully developed or mature; not ripe.",
    "Fried green tomatoes."
  ],
  [
    "gregarious",
    "/ɡɹɪˈɡɛə.ɹɪ.əs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "(of animals) tending to form a group with others of the same species.",
    "Gregarious bird species."
  ],
  [
    "hard",
    "/hɑːd/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Resisting weight or pressure.",
    "The lesson uses “hard” in a carefully reviewed vocabulary context."
  ],
  [
    "harsh",
    "/hɑɹʃ/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of textures that are rough to the touch or substances consisting of relatively large particles.",
    "Coarse meal."
  ],
  [
    "heavy",
    "/ˈhɛ.vi/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of comparatively great physical weight or density.",
    "A heavy load."
  ],
  [
    "helpless",
    "/ˈhɛlplɪs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Lacking in or deprived of strength or power.",
    "Lying ill and helpless."
  ],
  [
    "high",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Greater than normal in quantity or amount.",
    "A high temperature."
  ],
  [
    "hilarious",
    "/hɪˈlɛəɹiəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Marked by or causing boisterous merriment or convulsive laughter.",
    "Hilarious broad comedy."
  ],
  [
    "historical",
    "/hɪˈstɒɹɪkəl/",
    "School",
    "University & academic English",
    "adjective",
    "B2",
    "Of or relating to the study of history.",
    "Historical scholars."
  ],
  [
    "holy",
    "/ˈhəʊli/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Belonging to or derived from or associated with a divine power.",
    "The lesson uses “holy” in a carefully reviewed vocabulary context."
  ],
  [
    "horizontal",
    "/ˌhɒɹɪˈzɒntəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Parallel to or in the plane of the horizon or a base line.",
    "A horizontal surface."
  ],
  [
    "hostile",
    "/ˈhɒstaɪl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Characterized by enmity or ill will.",
    "A hostile nation."
  ],
  [
    "hot",
    "/hɒt/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Used of physical heat; having a high or higher than desirable temperature or giving off heat or feeling or causing a sensation of heat or burning.",
    "Hot stove."
  ],
  [
    "huge",
    "/hjuːd͡ʒ/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Unusually great in size or amount or degree or especially extent or scope.",
    "Huge government spending."
  ],
  [
    "human",
    "/ˈ(h)juː.mən/",
    "School",
    "Academic description",
    "adjective",
    "A2",
    "Characteristic of humanity.",
    "Human nature."
  ],
  [
    "hungry",
    "/ˈhʌŋ.ɡɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Feeling hunger; feeling a need or desire to eat food.",
    "A world full of hungry people."
  ],
  [
    "ignorant",
    "/ˈɪɡnəɹənt/",
    "School",
    "University & academic English",
    "adjective",
    "B1",
    "Uneducated in general; lacking knowledge or sophistication.",
    "An ignorant man."
  ],
  [
    "illegal",
    "/ɪˈliːɡəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Prohibited by law or by official or accepted rules.",
    "An illegal chess move."
  ],
  [
    "immune",
    "/ɪˈmjuːn/",
    "Health",
    "Medicine & healthcare",
    "adjective",
    "A2",
    "Relating to or conferring immunity (to disease or infection).",
    "The lesson uses “immune” in a carefully reviewed vocabulary context."
  ],
  [
    "imperial",
    "/ɪmˈpɪ.ɹi.əl/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Relating to or associated with an empire.",
    "Imperial colony."
  ],
  [
    "implicit",
    "/ɪmˈplɪsɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Implied though not directly expressed; inherent in the nature of something.",
    "An implicit agreement not to raise the subject."
  ],
  [
    "important",
    "/ɪmˈpɔːtənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Important in effect or meaning.",
    "A significant change in tax laws."
  ],
  [
    "impossible",
    "/ɪmˈpɒs.ɪ.bəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Not capable of occurring or being accomplished or dealt with.",
    "An impossible dream."
  ],
  [
    "impressive",
    "/ɪmˈpɹɛsɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Making a strong or vivid impression.",
    "An impressive ceremony."
  ],
  [
    "inadequate",
    "/ɪnˈædəkwɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Lacking the requisite qualities or resources to meet a task.",
    "Inadequate training."
  ],
  [
    "inappropriate",
    "/ˌɪnəˈpɹəʊpɹi.ət/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Not suitable for a particular occasion etc.",
    "Noise seems inappropriate at a time of sadness."
  ],
  [
    "incapable",
    "/ɪnˈkeɪpəbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Not meeting requirements.",
    "Unequal to the demands put upon him."
  ],
  [
    "incongruous",
    "/ɪnˈkɒn.ɡɹʊu.ʌs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Lacking in harmony or compatibility or appropriateness.",
    "A plan incongruous with reason."
  ],
  [
    "incredible",
    "/ɪŋˈkɹɛdəbəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Beyond belief or understanding.",
    "At incredible speed."
  ],
  [
    "independent",
    "/ɪndɪˈpɛndənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Free from external control and constraint.",
    "An independent mind."
  ],
  [
    "indigenous",
    "/ɪnˈdɪdʒɪnəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Originating where it is found.",
    "The Ainu are indigenous to the northernmost islands of Japan."
  ],
  [
    "indirect",
    "/ˌɪndaɪˈɹɛkt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Extended senses; not direct in manner or language or behavior or action.",
    "Making indirect but legitimate inquiries."
  ],
  [
    "indoor",
    "/ˈɪndɔː/",
    "Jobs",
    "Architecture & construction",
    "adjective",
    "A2",
    "Located, suited for, or taking place within a building.",
    "Indoor activities for a rainy day."
  ],
  [
    "industrial",
    "/ɪnˈdʌstɹɪəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having highly developed industries.",
    "The industrial revolution."
  ],
  [
    "inevitable",
    "/ɪnˈɛvɪtəbəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Incapable of being avoided or prevented.",
    "The inevitable result."
  ],
  [
    "infinite",
    "/ˈɪnfɪnɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having no limits or boundaries in time or space or extent or magnitude.",
    "The infinite ingenuity of man."
  ],
  [
    "influential",
    "/ɪnfluˈɛnʃəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having or exercising influence or power.",
    "An influential newspaper."
  ],
  [
    "inner",
    "/ˈɪnɚ/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Located or occurring within or closer to a center.",
    "An inner room."
  ],
  [
    "innocent",
    "/ˈɪnəsn̩t/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Free from evil or guilt.",
    "An innocent child."
  ],
  [
    "insufficient",
    "/ɪnsəˈfɪʃənt/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Of a quantity not able to fulfill a need or requirement.",
    "Insufficient funds."
  ],
  [
    "integrated",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Not segregated; designated as available to all races or groups.",
    "Integrated schools."
  ],
  [
    "intense",
    "/ɪnˈtɛns/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Possessing or displaying a distinctive feature to a heightened degree.",
    "Intense heat."
  ],
  [
    "interactive",
    "/ɪntɚˈæktɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Used especially of drugs or muscles that work together so the total effect is greater than the sum of the two (or more).",
    "The lesson uses “interactive” in a carefully reviewed vocabulary context."
  ],
  [
    "interesting",
    "/ˈɪntɹəstɪŋ/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Arousing or holding the attention.",
    "The lesson uses “interesting” in a carefully reviewed vocabulary context."
  ],
  [
    "intermediate",
    "/ˌɪntɚˈmidi.ət/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Lying between two extremes in time or space or state.",
    "Going from sitting to standing without intermediate pushes with the hands."
  ],
  [
    "internal",
    "/ɪnˈtɜː.nəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Happening or arising or located within some limits or especially surface.",
    "Internal organs."
  ],
  [
    "international",
    "/ˌɪn.təˈnæʃ.(ə.)n(ə)l/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Concerning or belonging to all or at least two or more nations.",
    "International affairs."
  ],
  [
    "invisible",
    "/ɪnˈvɪzəb(ə)l/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Impossible or nearly impossible to see; imperceptible by the eye.",
    "The invisible man."
  ],
  [
    "irrelevant",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having no bearing on or connection with the subject at issue.",
    "An irrelevant comment."
  ],
  [
    "jealous",
    "/ˈdʒɛləs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Showing extreme cupidity; painfully desirous of another's advantages.",
    "Jealous of his success and covetous of his possessions."
  ],
  [
    "joint",
    "/dʒɔɪnt/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "United or combined.",
    "A joint session of Congress."
  ],
  [
    "judicial",
    "/dʒuˈdɪʃəl/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Relating to the administration of justice or the function of a judge.",
    "Judicial system."
  ],
  [
    "junior",
    "/ˈdʒuːnɪə/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Younger; lower in rank; shorter in length of tenure or service.",
    "The lesson uses “junior” in a carefully reviewed vocabulary context."
  ],
  [
    "just",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Fair to all parties as dictated by reason and conscience.",
    "Equitable treatment of all citizens."
  ],
  [
    "large",
    "/ˈlɑːd͡ʒ/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Above average in size or number or quantity or magnitude or extent.",
    "A large city."
  ],
  [
    "last",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Occurring at or forming an end or termination.",
    "The last days of the dinosaurs."
  ],
  [
    "late",
    "/leɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "After the expected or usual time; delayed.",
    "I'm late for the plane."
  ],
  [
    "latest",
    "/ˈleɪ.tɪst/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "In the current fashion or style.",
    "The lesson uses “latest” in a carefully reviewed vocabulary context."
  ],
  [
    "lazy",
    "/ˈleɪzi/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Disinclined to work or exertion.",
    "Too lazy to wash the dishes."
  ],
  [
    "left",
    "/lɛft/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Of or belonging to the political or intellectual left.",
    "The lesson uses “left” in a carefully reviewed vocabulary context."
  ],
  [
    "legal",
    "/ˈliː.ɡəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Established by or founded upon law or official or accepted rules.",
    "The lesson uses “legal” in a carefully reviewed vocabulary context."
  ],
  [
    "legislative",
    "/ˈlɛ.dʒɪ.slə.tɪv/",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Relating to a legislature or composed of members of a legislature.",
    "Legislative council."
  ],
  [
    "liberal",
    "/ˈlɪbɹəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Tolerant of change; not bound by authoritarianism, orthodoxy, or tradition.",
    "The lesson uses “liberal” in a carefully reviewed vocabulary context."
  ],
  [
    "light",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of comparatively little physical weight or density.",
    "A light load."
  ],
  [
    "limited",
    "/ˈlɪmɪtɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Small in range or scope.",
    "Limited war."
  ],
  [
    "linear",
    "/ˈlɪn.i.ɚ/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of or in or along or relating to a line; involving or having a single dimension.",
    "A linear measurement."
  ],
  [
    "liquid",
    "/ˈlɪkwɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Existing as or having characteristics of a liquid; especially tending to flow.",
    "Water and milk and blood are liquid substances."
  ],
  [
    "literary",
    "/ˈlɪtəɹɛ(ə)ɹi/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Of or relating to or characteristic of literature.",
    "Literary criticism."
  ],
  [
    "live",
    "/laɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Actually being performed at the time of hearing or viewing.",
    "A live television program."
  ],
  [
    "logical",
    "/ˈlɒdʒɪkəɫ/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Capable of or reflecting the capability for correct and valid reasoning.",
    "A logical mind."
  ],
  [
    "lonely",
    "/ˈləʊnli/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Lacking companions or companionship.",
    "A lonely fisherman stood on a tuft of gravel."
  ],
  [
    "long",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Primarily spatial sense; of relatively great or greater than average spatial extension or extension as specified.",
    "A long road."
  ],
  [
    "lost",
    "/lɒst/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "No longer in your possession or control; unable to be found or recovered.",
    "A lost child."
  ],
  [
    "loud",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Characterized by or producing sound of great volume or intensity.",
    "A group of loud children."
  ],
  [
    "low",
    "/ləʊ/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Being at or having a relatively small elevation or upward extension.",
    "Low ceilings."
  ],
  [
    "loyal",
    "/ˈlɔɪəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Steadfast in allegiance or duty.",
    "Loyal subjects."
  ],
  [
    "lucky",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having or bringing good fortune.",
    "My lucky day."
  ],
  [
    "magnetic",
    "/mæɡˈnɛtɪk/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Of or relating to or caused by magnetism.",
    "Magnetic forces."
  ],
  [
    "main",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Most important element.",
    "The main doors were of solid glass."
  ],
  [
    "major",
    "/ˈmeɪ.dʒə(ɹ)/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Greater in scope or effect.",
    "A major contribution."
  ],
  [
    "manual",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Requiring human effort.",
    "A manual transmission."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch011 = createVocabularyBatch({
  id: "batch-011",
  source,
  entries,
})

export const batch011Metadata = {
  id: "batch-011",
  title: "Open English WordNet core vocabulary 201–300",
  addedWords: batch011.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
