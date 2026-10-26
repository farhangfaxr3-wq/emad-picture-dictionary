import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "proper",
    "/ˈpɹɔp.ə/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Marked by suitability or rightness or appropriateness.",
    "Proper medical treatment."
  ],
  [
    "proportional",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Having a constant ratio.",
    "The lesson uses “proportional” in a carefully reviewed vocabulary context."
  ],
  [
    "provincial",
    "/pɹəˈvɪn(t)ʃəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Characteristic of the provinces or their people.",
    "Deeply provincial and conformist."
  ],
  [
    "public",
    "/ˈpʌblɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not private; open to or concerning the people as a whole.",
    "The public good."
  ],
  [
    "pure",
    "/ˈpjʊə/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "(used of persons or behaviors) having no faults; sinless.",
    "Pure as the driven snow."
  ],
  [
    "qualified",
    "/ˈkwɑl.ɪ.faɪd/",
    "Sports",
    "Sports vocabulary",
    "adjective",
    "B2",
    "Meeting the proper standards and requirements and training for an office or position or task.",
    "Many qualified applicants for the job."
  ],
  [
    "quantitative",
    "/ˈkwɒntətɪv/",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Relating to the measurement of quantity.",
    "Quantitative studies."
  ],
  [
    "racial",
    "/ˈɹeɪʃəl/",
    "Sports",
    "Sports vocabulary",
    "adjective",
    "A2",
    "Of or characteristic of race or races or arising from differences among groups.",
    "Racial differences."
  ],
  [
    "random",
    "/ˈɹændəm/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Lacking any definite plan or order or purpose; governed by or depending on chance.",
    "A random choice."
  ],
  [
    "rare",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Recurring only at long intervals.",
    "A rare appearance."
  ],
  [
    "rational",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Consistent with or based on or using reason.",
    "Rational behavior."
  ],
  [
    "raw",
    "/ɹɔː/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Not treated with heat to prepare it for eating.",
    "The lesson uses “raw” in a carefully reviewed vocabulary context."
  ],
  [
    "ready",
    "/ˈɹɛ.di/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Completely prepared or in condition for immediate action or use or progress.",
    "Get ready."
  ],
  [
    "real",
    "/ˈɹiːəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Being or occurring in fact or actuality; having verified existence; not illusory.",
    "Real objects."
  ],
  [
    "realistic",
    "/ˌɹɪəˈlɪstɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Aware or expressing awareness of things as they really are.",
    "A realistic description."
  ],
  [
    "reasonable",
    "/ˈɹiː.zən.ə.bəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Showing reason or sound judgment.",
    "A sensible choice."
  ],
  [
    "reckless",
    "/ˈɹɛkləs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Marked by defiant disregard for danger or consequences.",
    "A reckless driver."
  ],
  [
    "regional",
    "/ˈɹiːdʒənəl/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Characteristic of a region.",
    "Regional flora."
  ],
  [
    "regular",
    "/ˈɹɛɡjʊlə/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "In accordance with fixed order or procedure or principle.",
    "His regular calls on his customers."
  ],
  [
    "related",
    "/ɹɪˈleɪtɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Connected by kinship, common origin, or marriage.",
    "The lesson uses “related” in a carefully reviewed vocabulary context."
  ],
  [
    "relative",
    "/ˈɹɛl.ə.tɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Estimated by comparison; not absolute or complete.",
    "A relative stranger."
  ],
  [
    "relevant",
    "/ˈɹɛləvənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having a bearing on or connection with the subject at issue.",
    "The scientist corresponds with colleagues in order to learn about matters relevant to her own research."
  ],
  [
    "reliable",
    "/ɹɪˈlaɪəbəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Worthy of reliance or trust.",
    "A reliable source of information."
  ],
  [
    "religious",
    "/ɹɪ.ˈlɪ.d͡ʒəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having or showing belief in and reverence for a deity.",
    "A religious man."
  ],
  [
    "representative",
    "/ˌɹɛpɹɪˈzɛnt(ət)ɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Standing for something else.",
    "The bald eagle is representative of the United States."
  ],
  [
    "residential",
    "Listen for pronunciation",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Of or relating to or connected with residence.",
    "A residential requirement for the doctorate."
  ],
  [
    "respectable",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Characterized by socially or conventionally acceptable morals.",
    "A respectable woman."
  ],
  [
    "responsible",
    "/ɹɪˈspɒnsəbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Worthy of or requiring responsibility or trust; or held accountable.",
    "A responsible adult."
  ],
  [
    "restricted",
    "/ɹɪˈstɹɪktɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Subject to restriction or subjected to restriction.",
    "Of restricted importance."
  ],
  [
    "retired",
    "/ɹɪˈtʌɪəd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "No longer active in your work or profession.",
    "The lesson uses “retired” in a carefully reviewed vocabulary context."
  ],
  [
    "revolutionary",
    "/ˌɹɛvəˈluʃənɛɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Advocating or engaged in revolution.",
    "Revolutionary pamphlets."
  ],
  [
    "rich",
    "/ɹɪt͡ʃ/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Possessing material wealth.",
    "Her father is extremely rich."
  ],
  [
    "right",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Free from error; especially conforming to fact or truth.",
    "The right answer."
  ],
  [
    "romantic",
    "/ɹəʊˈmæntɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Expressive of or exciting sexual love or romance.",
    "A romantic adventure."
  ],
  [
    "rotten",
    "/ˈɹɑtn̩/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Damaged by decay; hence unsound and useless.",
    "Rotten floor boards."
  ],
  [
    "rough",
    "/ɹʌf/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having or caused by an irregular surface.",
    "Trees with rough bark."
  ],
  [
    "round",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having the shape or form of a circle.",
    "The lesson uses “round” in a carefully reviewed vocabulary context."
  ],
  [
    "sacred",
    "/ˈseɪkɹɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Concerned with religion or religious purposes.",
    "Sacred texts."
  ],
  [
    "safe",
    "/seɪf/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Free from danger or the risk of harm.",
    "A safe trip."
  ],
  [
    "satisfactory",
    "/sætɪsˈfækt(ə)ɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Giving satisfaction.",
    "Satisfactory living conditions."
  ],
  [
    "scientific",
    "/ˌsaɪ.ənˈtɪf.ɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Conforming with the principles or methods used in science.",
    "A scientific approach."
  ],
  [
    "seasonal",
    "/ˈsiːzənəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Occurring at or dependent on a particular season.",
    "Seasonal labor."
  ],
  [
    "secondary",
    "/ˈsɛkənd(ə)ɹɪ/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Being of second rank or importance or value; not direct or immediate.",
    "The stone will be hauled to a secondary crusher."
  ],
  [
    "sensitive",
    "/ˈsɛnsɪtɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Being susceptible to the attitudes, feelings, or circumstances of others.",
    "Sensitive to the local community and its needs."
  ],
  [
    "separate",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Independent; not united or joint.",
    "A problem consisting of two separate issues."
  ],
  [
    "serious",
    "/ˈsɪəɹ.i.əs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Completely lacking in playfulness.",
    "The lesson uses “serious” in a carefully reviewed vocabulary context."
  ],
  [
    "shallow",
    "/ˈʃaləʊ/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Lacking physical depth; having little spatial extension downward or inward from an outer surface or backward or outward from a center.",
    "Shallow water."
  ],
  [
    "sharp",
    "/ʃɑːp/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having or made by a thin edge or sharp point; suitable for cutting or piercing.",
    "A sharp knife."
  ],
  [
    "sick",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Affected by an impairment of normal physical or mental function.",
    "Ill from the monotony of his suffering."
  ],
  [
    "similar",
    "/ˈsɪmələ/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having the same or similar characteristics.",
    "All politicians are alike."
  ],
  [
    "single",
    "/ˈsɪŋɡəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not married or related to the unmarried state.",
    "Single parenthood."
  ],
  [
    "skilled",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having or showing or requiring special skill.",
    "Only the most skilled gymnasts make an Olympic team."
  ],
  [
    "slippery",
    "/ˈslɪpəɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Causing or tending to cause things to slip or slide.",
    "Slippery sidewalks."
  ],
  [
    "slow",
    "/sləʊ/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Not moving quickly; taking a comparatively long time.",
    "A slow walker."
  ],
  [
    "small",
    "/smɔːl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Limited or below average in number or quantity or magnitude or extent.",
    "A small car."
  ],
  [
    "smart",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Showing mental alertness and calculation and resourcefulness.",
    "The lesson uses “smart” in a carefully reviewed vocabulary context."
  ],
  [
    "smooth",
    "/smuːð/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having a surface free from roughness or bumps or ridges or irregularities.",
    "Smooth skin."
  ],
  [
    "social",
    "/ˈsəʊʃəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Living together or enjoying life in communities or organized groups.",
    "A human being is a social animal."
  ],
  [
    "socialist",
    "/ˈsəʊʃəlɪst/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Advocating or following the socialist principles.",
    "Socialistic government."
  ],
  [
    "soft",
    "/sɒft/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Yielding readily to pressure or weight.",
    "The lesson uses “soft” in a carefully reviewed vocabulary context."
  ],
  [
    "solar",
    "Listen for pronunciation",
    "School",
    "Academic description",
    "adjective",
    "A2",
    "Relating to or derived from the sun or utilizing the energies of the sun.",
    "Solar eclipse."
  ],
  [
    "solid",
    "/ˈsɑlɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of definite shape and volume; firm; neither liquid nor gaseous.",
    "Ice is water in the solid state."
  ],
  [
    "sophisticated",
    "Listen for pronunciation",
    "School",
    "University & academic English",
    "adjective",
    "C1",
    "Having or appealing to those having worldly knowledge and refinement and savoir-faire.",
    "Sophisticated young socialites."
  ],
  [
    "sound",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "In good condition; free from defect or damage or decay.",
    "A sound timber."
  ],
  [
    "sour",
    "/ˈsaʊ(ə)ɹ/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Having a sharp biting taste.",
    "The lesson uses “sour” in a carefully reviewed vocabulary context."
  ],
  [
    "spatial",
    "/ˈspeɪʃəl/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Pertaining to or involving or having the nature of space.",
    "The first dimension to concentrate on is the spatial one."
  ],
  [
    "specified",
    "/ˈspɛsɪfaɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Clearly and explicitly stated.",
    "Meals are at specified times."
  ],
  [
    "spontaneous",
    "/spɒnˈteɪ.ni.əs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Happening or arising without apparent external cause.",
    "Spontaneous laughter."
  ],
  [
    "stable",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Resistant to change of position or condition.",
    "A stable ladder."
  ],
  [
    "standard",
    "/ˈstændəd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Conforming to or constituting a standard of measurement or value; or of the usual or regularized or accepted kind.",
    "Windows of standard width."
  ],
  [
    "statistical",
    "/stəˈtɪstɪkəl/",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Of or relating to statistics.",
    "Statistical population."
  ],
  [
    "steady",
    "/ˈstɛdi/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not subject to change or variation especially in behavior.",
    "A steady beat."
  ],
  [
    "steep",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having a sharp inclination.",
    "The steep attic stairs."
  ],
  [
    "sticky",
    "/ˈstɪki/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having the sticky properties of an adhesive.",
    "The lesson uses “sticky” in a carefully reviewed vocabulary context."
  ],
  [
    "still",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not in physical motion.",
    "She remained motionless, yet poised to take flight."
  ],
  [
    "straight",
    "/stɹeɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Characterized by honesty and fairness.",
    "Straight dealing."
  ],
  [
    "strange",
    "/ˈstɹeɪnd͡ʒ/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Being definitely out of the ordinary and unexpected; slightly odd or even a bit weird.",
    "A strange exaltation that was indefinable."
  ],
  [
    "strategic",
    "/stɹəˈtiː.dʒɪk/",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Relating to or concerned with strategy.",
    "Strategic weapon."
  ],
  [
    "strict",
    "/stɹɪkt/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Characterized by strictness, severity, or restraint.",
    "The lesson uses “strict” in a carefully reviewed vocabulary context."
  ],
  [
    "strong",
    "/stɹɒŋ/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having a strong physiological or chemical effect.",
    "A potent toxin."
  ],
  [
    "structural",
    "Listen for pronunciation",
    "Jobs",
    "Architecture & construction",
    "adjective",
    "B2",
    "Relating to or having or characterized by structure.",
    "Structural engineer."
  ],
  [
    "stubborn",
    "/ˈstʌbɚn/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Tenaciously unwilling or marked by tenacious unwillingness to yield.",
    "The lesson uses “stubborn” in a carefully reviewed vocabulary context."
  ],
  [
    "stunning",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Strikingly beautiful or attractive.",
    "Quite stunning with large dark eyes and a beautiful high-bosomed figure."
  ],
  [
    "stupid",
    "/ˈstjuːpɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Lacking or marked by lack of intellectual acuity.",
    "The lesson uses “stupid” in a carefully reviewed vocabulary context."
  ],
  [
    "subjective",
    "/səbˈdʒɛktɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Taking place within the mind and modified by individual bias.",
    "A subjective judgment."
  ],
  [
    "subsequent",
    "/ˈsʌbsɪkwənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Following in time or order.",
    "Subsequent developments."
  ],
  [
    "successful",
    "/səkˈsɛsfl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having succeeded or being marked by a favorable outcome.",
    "A successful architect."
  ],
  [
    "sudden",
    "/ˈsʌdən/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Happening without warning or in a short space of time.",
    "A sudden storm."
  ],
  [
    "sufficient",
    "/səˈfɪʃənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Of a quantity that can fulfill a need or requirement but without being abundant.",
    "Sufficient food."
  ],
  [
    "superior",
    "/suːˈpɪə.ɹi.ə/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Of high or superior quality or performance.",
    "Superior wisdom derived from experience."
  ],
  [
    "supplementary",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Functioning in a supporting capacity.",
    "The main library and its auxiliary branches."
  ],
  [
    "surprised",
    "/sɚˈpɹaɪzd/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Taken unawares or suddenly and feeling wonder or astonishment.",
    "Surprised by her student's ingenuity."
  ],
  [
    "surprising",
    "/səˈpɹaɪzɪŋ/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Causing surprise or wonder or amazement.",
    "The report shows a surprising lack of hard factual data."
  ],
  [
    "sweet",
    "/swiːt/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having or denoting the characteristic taste of sugar.",
    "The lesson uses “sweet” in a carefully reviewed vocabulary context."
  ],
  [
    "sympathetic",
    "/ˌsɪm.pəˈθɛt.ɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "(of characters in literature or drama) evoking empathic or sympathetic feelings.",
    "The sympathetic characters in the play."
  ],
  [
    "systematic",
    "/ˌsɪs.təˈmæt.ɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Characterized by order and planning.",
    "The investigation was very systematic."
  ],
  [
    "talented",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Endowed with talent or talents.",
    "A gifted writer."
  ],
  [
    "talkative",
    "/ˈtɔːkətɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Full of trivial conversation.",
    "Kept from her housework by gabby neighbors."
  ],
  [
    "tasty",
    "/ˈteɪsti/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Pleasing to the sense of taste.",
    "A tasty morsel."
  ],
  [
    "technical",
    "/ˈtɛk.nɪk.əl/",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Of or relating to technique or proficiency in a practical skill.",
    "His technical innovation was his brushwork."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch013 = createVocabularyBatch({
  id: "batch-013",
  source,
  entries,
})

export const batch013Metadata = {
  id: "batch-013",
  title: "Open English WordNet core vocabulary 401–500",
  addedWords: batch013.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
