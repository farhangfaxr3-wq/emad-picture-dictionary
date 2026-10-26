import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "marine",
    "/məˈɹiːn/",
    "School",
    "Academic description",
    "adjective",
    "A2",
    "Of or relating to the sea.",
    "Marine explorations."
  ],
  [
    "married",
    "/ˈmæɹ.ɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Joined in matrimony.",
    "A married man."
  ],
  [
    "mathematical",
    "/ˌmæθəˈmætɪkəl/",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Of or pertaining to or of the nature of mathematics.",
    "A mathematical textbook."
  ],
  [
    "mature",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having reached full natural growth or development.",
    "A mature cell."
  ],
  [
    "maximum",
    "/ˈmæksɪməm/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "The greatest or most complete or best possible.",
    "Maximum pressure."
  ],
  [
    "meaningful",
    "/ˈminɪŋfʊl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having a meaning or purpose.",
    "A meaningful explanation."
  ],
  [
    "mechanical",
    "/mɪˈkænɪk(ə)l/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Using (or as if using) mechanisms or tools or devices.",
    "A mechanical process."
  ],
  [
    "medieval",
    "/ˌmɛd.i.ˈiː.vəl/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Relating to or belonging to the Middle Ages.",
    "Medieval scholars."
  ],
  [
    "memorable",
    "/ˈmɛm(ə)ɹəbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Worth remembering.",
    "The lesson uses “memorable” in a carefully reviewed vocabulary context."
  ],
  [
    "mental",
    "Listen for pronunciation",
    "School",
    "Academic description",
    "adjective",
    "A2",
    "Of or relating to the mind.",
    "Mental powers."
  ],
  [
    "middle-class",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Occupying a socioeconomic position intermediate between those of the lower classes and the wealthy.",
    "The lesson uses “middle-class” in a carefully reviewed vocabulary context."
  ],
  [
    "mild",
    "/ˈmaɪld/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Moderate in type or degree or effect or force; far from extreme.",
    "A mild winter storm."
  ],
  [
    "military",
    "/ˈmɪl.ɪ.tɹi/",
    "School",
    "University & academic English",
    "adjective",
    "B1",
    "Of or relating to the study of the principles of warfare.",
    "Military law."
  ],
  [
    "minimum",
    "/ˈmɪn.ɪ.məm/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "The least possible.",
    "Minimum wage."
  ],
  [
    "minor",
    "/ˈmaɪ.nə(ɹ)/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Lesser in scope or effect.",
    "Had minor differences."
  ],
  [
    "miserable",
    "/ˈmɪz(ə)ɹəbəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Of the most contemptible kind.",
    "His miserable treatment of his family."
  ],
  [
    "mobile",
    "/ˈməʊbaɪl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Moving or capable of moving readily (especially from place to place).",
    "A mobile missile system."
  ],
  [
    "modern",
    "/ˈmɒd(ə)n/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Belonging to the modern era; since the Middle Ages.",
    "Modern art."
  ],
  [
    "molecular",
    "/məˈlɛkjʊlə/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Relating to simple or elementary organization.",
    "[object Object]."
  ],
  [
    "monstrous",
    "/ˈmɑnstɹəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Shockingly brutal or cruel.",
    "No excess was too monstrous for them to commit."
  ],
  [
    "moving",
    "/ˈmuːvɪŋ/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Arousing or capable of arousing deep emotion.",
    "[object Object]."
  ],
  [
    "multiple",
    "/ˈmʌltɪpl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having or involving or consisting of more than one part or entity or individual.",
    "Multiple birth."
  ],
  [
    "municipal",
    "/mjuˈnɪsɪpəl/",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Relating or belonging to or characteristic of a municipality.",
    "Municipal government."
  ],
  [
    "musical",
    "/ˈmju.zɪ.kəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Talented in or devoted to music.",
    "Comes from a very musical family."
  ],
  [
    "mutual",
    "/ˈmjuːt͡ʃuəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Concerning each of two or more persons or things; especially given or done in return.",
    "Mutual respect."
  ],
  [
    "narrow",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Lacking tolerance or flexibility or breadth of view.",
    "A brilliant but narrow-minded judge."
  ],
  [
    "national",
    "/ˈnaʃn̩(ə)l/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Of or relating to or belonging to a nation or country.",
    "National hero."
  ],
  [
    "native",
    "/ˈneɪtɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Belonging to one by birth.",
    "My native land."
  ],
  [
    "necessary",
    "/ˈnɛsəˌsɛɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Absolutely essential.",
    "The lesson uses “necessary” in a carefully reviewed vocabulary context."
  ],
  [
    "negative",
    "/ˈnɛɡətɪv/",
    "Health",
    "Medicine & healthcare",
    "adjective",
    "B1",
    "Not indicating the presence of microorganisms or disease or a specific condition.",
    "The HIV test was negative."
  ],
  [
    "nervous",
    "/ˈnɜːvəs/",
    "School",
    "Academic description",
    "adjective",
    "B1",
    "Of or relating to the nervous system.",
    "Nervous disease."
  ],
  [
    "neutral",
    "/ˈnjuːtɹəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Possessing no distinctive quality or characteristics.",
    "The lesson uses “neutral” in a carefully reviewed vocabulary context."
  ],
  [
    "new",
    "/njuː/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Not of long duration; having just (or relatively recently) come into being or been made or acquired or discovered.",
    "A new law."
  ],
  [
    "nice",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Pleasant or pleasing or agreeable in nature or appearance.",
    "Nice manners."
  ],
  [
    "noble",
    "/ˈnəʊbəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Having or showing or indicative of high or elevated character.",
    "A noble spirit."
  ],
  [
    "noisy",
    "/ˈnɔɪzi/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Full of or characterized by loud and nonmusical sounds.",
    "A noisy cafeteria."
  ],
  [
    "normal",
    "/ˈnɔːməl/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Conforming with or constituting a norm or standard or level or type or social norm; not abnormal.",
    "Serve wine at normal room temperature."
  ],
  [
    "notorious",
    "/nəˈtɔɹiəs/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Known widely and usually unfavorably.",
    "A notorious gangster."
  ],
  [
    "nuclear",
    "/ˈn(j)ukliɚ/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "(weapons) deriving destructive energy from the release of atomic energy.",
    "Nuclear war."
  ],
  [
    "obese",
    "/oʊˈbis/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Excessively fat.",
    "A weighty man."
  ],
  [
    "objective",
    "/ɒbˈd͡ʒɛk.tɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Undistorted by emotion or personal bias; based on observable phenomena.",
    "An objective appraisal."
  ],
  [
    "obscure",
    "/əbˈskjʊə(ɹ)/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Not famous or acclaimed.",
    "An obscure family."
  ],
  [
    "obvious",
    "/ˈɑb.vi.əs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Easily perceived and understood.",
    "Obvious errors."
  ],
  [
    "occupational",
    "Listen for pronunciation",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Of or relating to the activity or business for which you are trained.",
    "Occupational hazard."
  ],
  [
    "odd",
    "/ɒd/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Not divisible by two.",
    "The lesson uses “odd” in a carefully reviewed vocabulary context."
  ],
  [
    "offensive",
    "/əˈfɛnsɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Unpleasant or disgusting especially to the senses.",
    "Offensive odors."
  ],
  [
    "official",
    "/əˈfɪʃəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having official authority or sanction.",
    "Official permission."
  ],
  [
    "old",
    "/ˈəʊld/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "(used especially of persons) having lived for a relatively long time or attained a specific age.",
    "His mother is very old."
  ],
  [
    "open",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Affording free passage or access.",
    "Open drains."
  ],
  [
    "operational",
    "Listen for pronunciation",
    "School",
    "Academic description",
    "adjective",
    "B2",
    "Pertaining to a process or series of actions for achieving a result.",
    "Operational difficulties."
  ],
  [
    "opposed",
    "/əˈpoʊzd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Being in opposition or having an opponent.",
    "Two bitterly opposed schools of thought."
  ],
  [
    "optimistic",
    "/ˌɒptɪˈmɪstɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Expecting the best in this best of all possible worlds.",
    "In an optimistic mood."
  ],
  [
    "optional",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Possible but not necessary; left to personal choice.",
    "The lesson uses “optional” in a carefully reviewed vocabulary context."
  ],
  [
    "oral",
    "/ˈɔːɹəl/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Of or involving the mouth or mouth region or the surface on which the mouth is located.",
    "The oral cavity."
  ],
  [
    "ordinary",
    "/ˈɔːdɪnəɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Not exceptional in any way especially in quality or ability or size or degree.",
    "Ordinary everyday objects."
  ],
  [
    "organic",
    "/ɔːˈɡænɪk/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Being or relating to or derived from or having properties characteristic of living organisms.",
    "Organic life."
  ],
  [
    "original",
    "/əˈɹɪdʒɪnəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Being or productive of something fresh and unusual; or being as first made or thought of.",
    "A truly original approach."
  ],
  [
    "orthodox",
    "/ˈɔːθədɒks/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Adhering to what is commonly accepted.",
    "An orthodox view of the world."
  ],
  [
    "other",
    "/ˈʌðə(ɹ)/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Not the same one or ones already mentioned or implied; quantifier, other.",
    "The construction of highways and other public works."
  ],
  [
    "outer",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Being on the outside or further from a center.",
    "Spent hours adorning the outer man."
  ],
  [
    "outside",
    "/ˈaʊtsaɪd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Located, suited for, or taking place in the open air.",
    "Outdoor clothes."
  ],
  [
    "painful",
    "/ˈpeɪn.fəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Causing physical or psychological pain.",
    "Worked with painful slowness."
  ],
  [
    "parallel",
    "/ˈpæɹəˌlɛl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Being everywhere equidistant and not intersecting.",
    "Parallel lines never converge."
  ],
  [
    "paralyzed",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Affected with paralysis.",
    "The lesson uses “paralyzed” in a carefully reviewed vocabulary context."
  ],
  [
    "parental",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Relating to or characteristic of or befitting a parent.",
    "Parental guidance."
  ],
  [
    "particular",
    "/pəˈtɪkjəlɚ/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Exacting especially about details.",
    "Very particular about how her food was prepared."
  ],
  [
    "part-time",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Involving less than the standard or customary time for an activity.",
    "Part-time employees."
  ],
  [
    "passionate",
    "/ˈpæʃənɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having or expressing strong emotions.",
    "The lesson uses “passionate” in a carefully reviewed vocabulary context."
  ],
  [
    "passive",
    "/ˈpæs.ɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Lacking in energy or will.",
    "[object Object]."
  ],
  [
    "past",
    "/pɑːst/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Earlier than the present time; no longer current.",
    "Time past."
  ],
  [
    "peaceful",
    "/ˈpiːsfəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Not disturbed by strife or turmoil or war.",
    "A peaceful nation."
  ],
  [
    "perfect",
    "/ˈpɜː.fɪkt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Being complete of its kind and without defect or blemish.",
    "A perfect circle."
  ],
  [
    "permanent",
    "/ˈpɝmənənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Continuing or enduring without marked change in status or condition or place.",
    "Permanent secretary to the president."
  ],
  [
    "persistent",
    "/pɚˈsɪstənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Retained; not shed.",
    "Persistent leaves remain attached past maturity."
  ],
  [
    "personal",
    "/ˈpɜː.sən.əl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Concerning or affecting a particular person or his or her private life and personality.",
    "A personal favor."
  ],
  [
    "petty",
    "/ˈpɛti/",
    "Communication",
    "Describing things",
    "adjective",
    "A2",
    "Contemptibly narrow in outlook.",
    "Petty little comments."
  ],
  [
    "philosophical",
    "/ˌfɪləˈsɑfɪkl̩/",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Of or relating to philosophy or philosophers.",
    "Philosophical writing."
  ],
  [
    "physical",
    "/ˈfɪzɪkəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Involving the body as distinguished from the mind or spirit.",
    "Physical exercise."
  ],
  [
    "pleasant",
    "/ˈplɛzənt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Affording pleasure; being in harmony with your taste or likings.",
    "We had a pleasant evening together."
  ],
  [
    "political",
    "/pəˈlɪtɪkəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Involving or characteristic of politics or parties or politicians.",
    "Political pressure."
  ],
  [
    "poor",
    "/pʊɹ/",
    "Communication",
    "Describing things",
    "adjective",
    "A1",
    "Characterized by or indicating poverty.",
    "The country had a poor economy."
  ],
  [
    "popular",
    "/ˈpɒpjʊlə/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Regarded with great favor, approval, or affection especially by the general public.",
    "A popular tourist attraction."
  ],
  [
    "portable",
    "/ˈpɔː(ɹ)təbəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Of a motor designed to be attached to the outside of a boat's hull.",
    "A portable outboard motor."
  ],
  [
    "positive",
    "/ˈpɒzɪ̈tɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Indicating existence or presence of a suspected condition or pathogen.",
    "A positive pregnancy test."
  ],
  [
    "possible",
    "/ˈpɒsɪbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Existing in possibility.",
    "Possible uses of nuclear power."
  ],
  [
    "powerful",
    "/ˈpaʊɚfəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Having great power or force or potency or effect.",
    "The most powerful government in western Europe."
  ],
  [
    "practical",
    "/ˈpɹæktɪkəl/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Concerned with actual use or practice.",
    "He is a very practical person."
  ],
  [
    "precise",
    "/pɹɪˈsaɪs/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Sharply exact or accurate or delimited.",
    "A precise mind."
  ],
  [
    "predictable",
    "/pɹɪˈdɪktəbl̩/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Capable of being foretold.",
    "The lesson uses “predictable” in a carefully reviewed vocabulary context."
  ],
  [
    "pregnant",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Carrying developing offspring within the body or being about to produce new life.",
    "The lesson uses “pregnant” in a carefully reviewed vocabulary context."
  ],
  [
    "premature",
    "/ˌpɹɛ.məˈtjʊə/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Uncommonly early or before the expected time.",
    "Illness led to his premature death."
  ],
  [
    "present",
    "Listen for pronunciation",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Temporal sense; intermediate between past and future; now existing or happening or in consideration.",
    "The present leader."
  ],
  [
    "presidential",
    "/pɹɛzɪˈdɛnʃ(ə)l/",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Relating to a president or presidency.",
    "Presidential aides."
  ],
  [
    "primary",
    "/ˈpɹaɪməɹi/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Of first rank or importance or value; direct and immediate rather than secondary.",
    "Primary goals."
  ],
  [
    "private",
    "/ˈpɹaɪvɪt/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Concerning things deeply private and personal.",
    "Private family matters."
  ],
  [
    "privileged",
    "/ˈpɹɪv(ɪ)lɪdʒd/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Blessed with privileges.",
    "The privileged few."
  ],
  [
    "productive",
    "/pɹəˈdʌktɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Having the ability to produce or originate.",
    "Generative power."
  ],
  [
    "professional",
    "/pɹəˈfɛʃənəl/",
    "School",
    "Academic description",
    "adjective",
    "C1",
    "Of or relating to a profession.",
    "We need professional advice."
  ],
  [
    "profound",
    "/pɹəˈfaʊnd/",
    "Communication",
    "Describing things",
    "adjective",
    "B1",
    "Showing intellectual penetration or emotional depth.",
    "The differences are profound."
  ],
  [
    "progressive",
    "/pɹəˈɡɹɛsɪv/",
    "Communication",
    "Describing things",
    "adjective",
    "B2",
    "Favoring or promoting progress.",
    "Progressive schools."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch012 = createVocabularyBatch({
  id: "batch-012",
  source,
  entries,
})

export const batch012Metadata = {
  id: "batch-012",
  title: "Open English WordNet core vocabulary 301–400",
  addedWords: batch012.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
