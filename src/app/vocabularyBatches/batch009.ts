import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "able",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Having inherent physical or mental ability or capacity.",
    "Able to learn."
  ],
  [
    "abnormal",
    "/ˈæbˌnɔɹ.ml̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Not normal; not typical or usual or regular or conforming to a norm.",
    "Abnormal powers of concentration."
  ],
  [
    "absent",
    "/æbˈsɛnt/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not being in a specified place.",
    "The lesson uses “absent” in a carefully reviewed vocabulary context."
  ],
  [
    "absolute",
    "/ˈæb.səˌluːt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Perfect or complete or pure.",
    "Absolute loyalty."
  ],
  [
    "abundant",
    "/əˈbʌn.dn̩t/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Present in great quantity.",
    "An abundant supply of water."
  ],
  [
    "academic",
    "/ˌækəˈdɛmɪk/",
    "School",
    "University & academic English",
    "adjective",
    "B1",
    "Associated with academia or an academy.",
    "The academic curriculum."
  ],
  [
    "acceptable",
    "/æk.ˈsɛp.tə.bəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Worthy of acceptance or satisfactory.",
    "Acceptable levels of radiation."
  ],
  [
    "accessible",
    "/əkˈsɛs.ə.bəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Capable of being reached.",
    "A town accessible by rail."
  ],
  [
    "active",
    "/ˈæk.tɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Characterized by energetic activity.",
    "An active toddler."
  ],
  [
    "acute",
    "/əˈkjuːt/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having or experiencing a rapid onset and short but severe course.",
    "Acute appendicitis."
  ],
  [
    "addicted",
    "/əˈdɪktɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Compulsively or physiologically dependent on something habit-forming.",
    "She is addicted to chocolate."
  ],
  [
    "adequate",
    "/ˈæd.ə.kwɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having the requisite qualities or resources to meet a task.",
    "She had adequate training."
  ],
  [
    "aesthetic",
    "/ɪs.ˈθe.tɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Concerning or characterized by an appreciation of beauty or good taste.",
    "The aesthetic faculties."
  ],
  [
    "afraid",
    "/əˈfɹeɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Filled with fear or apprehension.",
    "Afraid even to turn his head."
  ],
  [
    "aggressive",
    "/əˈɡɹɛs.ɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having or showing determination and energetic pursuit of your ends.",
    "An aggressive businessman."
  ],
  [
    "agile",
    "/ˈæd͡ʒ.aɪl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Moving quickly and lightly.",
    "Sleek and agile as a gymnast."
  ],
  [
    "agricultural",
    "/ˌæɡɹɪˈkʌltjʊəɹəl/",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Relating to or used in or promoting agriculture or farming.",
    "Agricultural engineering."
  ],
  [
    "alert",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Engaged in or accustomed to close observation.",
    "Caught by a couple of alert cops."
  ],
  [
    "alive",
    "/əˈlaɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Possessing life.",
    "The happiest person alive."
  ],
  [
    "aloof",
    "/əˈluːf/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Remote in manner.",
    "Stood apart with aloof dignity."
  ],
  [
    "amber",
    "/ˈam.bə/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of a medium to dark brownish yellow color.",
    "The lesson uses “amber” in a carefully reviewed vocabulary context."
  ],
  [
    "ambiguous",
    "/æmˈbɪɡjuəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Open to two or more interpretations; or of uncertain nature or significance; or (often) intended to mislead.",
    "The polling had a complex and equivocal (or ambiguous) message for potential female candidates."
  ],
  [
    "ambitious",
    "/æmˈbɪʃ.əs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having a strong desire for success or achievement.",
    "The lesson uses “ambitious” in a carefully reviewed vocabulary context."
  ],
  [
    "ample",
    "/ˈæm.pəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Fairly large in size.",
    "An ample waistline."
  ],
  [
    "anonymous",
    "/əˈnɒnəməs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having no known name or identity or known source.",
    "Anonymous authors."
  ],
  [
    "applied",
    "/əˈplaɪd/",
    "Jobs",
    "Architecture & construction",
    "adjective",
    "B1",
    "Concerned with concrete problems or data rather than with fundamental principles.",
    "Applied physics."
  ],
  [
    "appropriate",
    "/əˈpɹəʊ.pɹiː.ɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Suitable for a particular person or place or condition etc.",
    "A book not appropriate for children."
  ],
  [
    "arbitrary",
    "/ˈɑː.bɪ.tɹə.ɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Based on or subject to individual discretion or preference or sometimes impulse or caprice.",
    "An arbitrary decision."
  ],
  [
    "archaeological",
    "Listen for pronunciation",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Related to or dealing with or devoted to archaeology.",
    "An archaeological dig."
  ],
  [
    "arrogant",
    "/ˈæɹəɡənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having or showing feelings of unwarranted importance out of overbearing pride.",
    "An arrogant official."
  ],
  [
    "artificial",
    "/ɑː(ɹ)təˈfɪʃəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Contrived by art rather than nature.",
    "Artificial flowers."
  ],
  [
    "artistic",
    "/ɑɹˈtɪstɪk/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Relating to or characteristic of art or artists.",
    "His artistic background."
  ],
  [
    "ashamed",
    "/əˈʃeɪmd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Feeling shame or guilt or embarrassment or remorse.",
    "Are you ashamed for having lied?"
  ],
  [
    "asleep",
    "/əˈsliːp/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "In a state of sleep.",
    "Were all asleep when the phone rang."
  ],
  [
    "assertive",
    "/əˈsɝtɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Aggressively self-assured.",
    "An energetic assertive boy who was always ready to argue."
  ],
  [
    "astonishing",
    "/əˈstɒnɪʃɪŋ/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "So surprisingly impressive as to stun or overwhelm.",
    "Such an enormous response was astonishing."
  ],
  [
    "attractive",
    "/əˈtɹæktɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Pleasing to the eye or mind especially through beauty or charm.",
    "A remarkably attractive young man."
  ],
  [
    "automatic",
    "/ˌɔːtəˈmætɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Operating with minimal human intervention; independent of external control.",
    "Automatic transmission."
  ],
  [
    "available",
    "/əˈveɪləb(ə)l/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Obtainable or accessible and ready for use or service.",
    "Kept a fire extinguisher available."
  ],
  [
    "awake",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not in a state of sleep; completely conscious.",
    "Lay awake thinking about his new job."
  ],
  [
    "aware",
    "/əˈwɛɚ/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Bearing in mind; attentive to.",
    "Ever mindful of her health."
  ],
  [
    "awkward",
    "/ˈɔːkwəd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Lacking grace or skill in manner or movement or performance.",
    "An awkward dancer."
  ],
  [
    "bad",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Characterized by wickedness or immorality.",
    "Led a very bad life."
  ],
  [
    "balanced",
    "/ˈbælənst/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Being in a state of proper equilibrium.",
    "The carefully balanced seesaw."
  ],
  [
    "bald",
    "/bəʊld/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Lacking hair on all or most of the scalp.",
    "A bald pate."
  ],
  [
    "bare",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Lacking its natural or customary covering.",
    "A bare hill."
  ],
  [
    "basic",
    "/ˈbeɪsɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Pertaining to or constituting a base or basis.",
    "A basic fact."
  ],
  [
    "beautiful",
    "/ˈbjuːtɪfəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Delighting the senses or exciting intellectual or emotional admiration.",
    "A beautiful child."
  ],
  [
    "bitter",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Marked by strong resentment or cynicism.",
    "Bitter about the divorce."
  ],
  [
    "black",
    "/blæk/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Being of the achromatic color of maximum darkness; having little or no hue owing to absorption of almost all incident light.",
    "Black leather jackets."
  ],
  [
    "bland",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Lacking taste or flavor or tang.",
    "A bland diet."
  ],
  [
    "blank",
    "/blæŋk/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "(of a surface) not written or printed on.",
    "Blank pages."
  ],
  [
    "blind",
    "/blaɪnd/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Unable to see.",
    "[object Object]."
  ],
  [
    "blonde",
    "/blɒnd/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Being or having light colored skin and hair and usually blue or grey eyes.",
    "Blond Scandinavians."
  ],
  [
    "bloody",
    "/ˈblʌ.di/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having or covered with or accompanied by blood.",
    "A bloody nose."
  ],
  [
    "bold",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Fearless and daring.",
    "Bold settlers on some foreign shore."
  ],
  [
    "brave",
    "/bɹeɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Possessing or displaying courage; able to face and deal with danger or fear without flinching.",
    "[object Object]."
  ],
  [
    "broken",
    "/ˈbɹəʊkən/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Physically and forcibly separated into pieces or cracked or split.",
    "A broken mirror."
  ],
  [
    "brown",
    "/bɹaʊn/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Of a color similar to that of wood or earth.",
    "The lesson uses “brown” in a carefully reviewed vocabulary context."
  ],
  [
    "bureaucratic",
    "Listen for pronunciation",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Of or relating to or resembling a bureaucrat or bureaucracy.",
    "His bureaucratic behavior annoyed his colleagues."
  ],
  [
    "busy",
    "/ˈbɪzi/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Actively or fully engaged or occupied.",
    "Busy with her work."
  ],
  [
    "capable",
    "/ˈkeɪpəbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "(usually followed by ‘of’) having capacity or ability.",
    "Capable of winning."
  ],
  [
    "careful",
    "/ˈkɛːfəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Exercising caution or showing care or attention.",
    "They were careful when crossing the busy street."
  ],
  [
    "cautious",
    "/ˈkɔːʃəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Showing careful forethought.",
    "Reserved and cautious; never making swift decisions."
  ],
  [
    "central",
    "/ˈsɛntɹəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "In or near a center or constituting a center; the inner area.",
    "A central position."
  ],
  [
    "certain",
    "/ˈsɜːtn̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having or feeling no doubt or uncertainty; confident and assured.",
    "Felt certain of success."
  ],
  [
    "characteristic",
    "/ˌkæɹəktəˈɹɪstɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Typical or distinctive.",
    "Heard my friend's characteristic laugh."
  ],
  [
    "charismatic",
    "/ˌkæɹɪzˈmætɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Possessing an extraordinary ability to attract.",
    "A charismatic leader."
  ],
  [
    "cheap",
    "/t͡ʃip/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Relatively low in price or charging low prices.",
    "It would have been cheap at twice the price."
  ],
  [
    "cheerful",
    "/ˈt͡ʃɪɹfəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Being full of or promoting cheer; having or showing good spirits.",
    "Her cheerful nature."
  ],
  [
    "childish",
    "/ˈtʃaɪldɪʃ/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Indicating a lack of maturity.",
    "Childish tantrums."
  ],
  [
    "chronic",
    "/ˈkɹɒnɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Being long-lasting and recurrent or characterized by long suffering.",
    "Chronic indigestion."
  ],
  [
    "civic",
    "/ˈsɪvɪk/",
    "School",
    "Academic description",
    "adjective",
    "A2",
    "Of or relating or belonging to a city.",
    "Civic center."
  ],
  [
    "civilian",
    "/sɪˈvɪljən/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Associated with civil life or performed by persons who are not active members of the military.",
    "Civilian clothing."
  ],
  [
    "classical",
    "/ˈklæsɪkl̩/",
    "School",
    "University & academic English",
    "adjective",
    "B2",
    "Of or relating to the first significant period of a civilization, culture, area of study, etc.",
    "Classical Marxism."
  ],
  [
    "clean",
    "/kliːn/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Free from dirt or impurities; or having clean habits.",
    "Children with clean shining faces."
  ],
  [
    "close",
    "/kləʊs/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Close in relevance or relationship.",
    "A close family."
  ],
  [
    "cold",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Having a low or inadequate temperature or feeling a sensation of coldness or having been made cold by e.g. ice or refrigeration.",
    "A cold climate."
  ],
  [
    "color-blind",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Unable to distinguish one or more chromatic colors.",
    "The lesson uses “color-blind” in a carefully reviewed vocabulary context."
  ],
  [
    "colourful",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having much or varied color.",
    "Colorful autumn leaves."
  ],
  [
    "comfortable",
    "/ˈkʌmf.tə.bəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Providing or experiencing physical well-being or relief (‘comfy’ is informal).",
    "Comfortable clothes."
  ],
  [
    "commercial",
    "/kəˈmɜːʃəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Connected with or engaged in or sponsored by or used in commerce or commercial enterprises.",
    "Commercial trucker."
  ],
  [
    "common",
    "/ˈkɒmən/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having no special distinction or quality; widely known or commonly encountered; average or ordinary or usual.",
    "The common man."
  ],
  [
    "comparable",
    "/ˈkɒmp(ə)ɹəbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Able to be compared or worthy of comparison.",
    "The lesson uses “comparable” in a carefully reviewed vocabulary context."
  ],
  [
    "compatible",
    "/kəmˈpætəbəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Able to exist and perform in harmonious or agreeable combination.",
    "A compatible married couple."
  ],
  [
    "competent",
    "/ˈkɒmpətənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Properly or sufficiently qualified or capable or efficient.",
    "A competent typist."
  ],
  [
    "competitive",
    "/kəmˈpɛtɪtɪv/",
    "Sports",
    "Sports vocabulary",
    "adjective",
    "B2",
    "Involving competition or competitiveness.",
    "Competitive games."
  ],
  [
    "complete",
    "/kəmˈpliːt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having every necessary or normal part or component or step.",
    "A complete meal."
  ],
  [
    "complex",
    "/kəmˈplɛks/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Complicated in structure; consisting of interconnected parts.",
    "A complex set of variations based on a simple folk melody."
  ],
  [
    "comprehensive",
    "/ˌkɒm.pɹɪˈhɛn.sɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Including all or everything.",
    "Comprehensive coverage."
  ],
  [
    "concrete",
    "/ˈkɒnkɹiːt/",
    "Jobs",
    "Architecture & construction",
    "adjective",
    "B1",
    "Capable of being perceived by the senses; not abstract or imaginary.",
    "Concrete objects such as trees."
  ],
  [
    "conscious",
    "/ˈkɑn.ʃəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Knowing and perceiving; having awareness of surroundings and sensations and thoughts.",
    "Remained conscious during the operation."
  ],
  [
    "conservative",
    "/kənˈsɝvətɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Resistant to change, particularly in relation to politics or religion.",
    "The lesson uses “conservative” in a carefully reviewed vocabulary context."
  ],
  [
    "considerable",
    "/kənˈsɪdəɹəbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Large or relatively large in number or amount or extent or degree.",
    "A considerable quantity."
  ],
  [
    "consistent",
    "/kənˈsɪstənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "(sometimes followed by ‘with’) in agreement or consistent or reliable.",
    "Testimony consistent with the known facts."
  ],
  [
    "constant",
    "/ˈkɒnstənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Steadfast in purpose or devotion or affection.",
    "A man constant in adherence to his ideals."
  ],
  [
    "constructive",
    "/kənˈstɹʌktɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "C1",
    "Constructing or tending to construct or improve or promote development.",
    "Constructive criticism."
  ],
  [
    "content",
    "/kənˈtɛnt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Satisfied or showing satisfaction with things as they are.",
    "A contented smile."
  ],
  [
    "continental",
    "/ˌkɑntɪˈnɛntl̩/",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Of or relating to or characteristic of a continent.",
    "The continental divide."
  ],
  [
    "continuous",
    "/kənˈtɪn.juː.əs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Continuing in time or space without interruption.",
    "A continuous bout of illness lasting six months."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch009 = createVocabularyBatch({
  id: "batch-009",
  source,
  entries,
})

export const batch009Metadata = {
  id: "batch-009",
  title: "Open English WordNet core vocabulary 1–100",
  addedWords: batch009.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
