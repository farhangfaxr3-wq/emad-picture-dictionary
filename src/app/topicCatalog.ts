import type { Word } from "./content"

export const legacyTopicNames: string[] = [
  "Food",
  "Home",
  "People",
  "Daily Activities",
  "Family",
  "School",
  "Classroom",
  "Clothing",
  "Health",
  "Jobs",
  "Transportation",
  "Places",
  "Nature",
  "Animals",
  "Sports",
  "Technology",
  "Communication",
  "Travel",
  "Community",
]

export const expandedTopicNames: string[] = [
  "Education & University Life",
  "Science & Research",
  "Business & Economics",
  "Law & Government",
  "Environment & Sustainability",
  "Psychology & Human Behavior",
  "Media & Journalism",
  "Art, Literature & Culture",
  "Academic Writing & Research",
  "Medicine & Healthcare",
  "Architecture & Construction",
  "IT & Computers",
]

export const topicNames: string[] = [...legacyTopicNames, ...expandedTopicNames]

interface TopicRule {
  topic: string
  groups: Set<string>
  wordPattern?: RegExp
  excludeTopics?: Set<string>
  excludeWords?: Set<string>
}

function groups(...values: string[]) {
  return new Set(values.map((value) => value.toLowerCase()))
}

const topicRules: TopicRule[] = [
  {
    topic: "IT & Computers",
    groups: groups(
      "IT & computers",
      "Software",
      "Software development",
      "Internet",
      "Digital safety",
      "Digital files",
      "Files & storage",
      "Data management",
      "Data privacy",
      "Distributed systems",
      "Interface design",
      "Inclusive technology",
      "Networks",
    ),
    wordPattern:
      /\b(?:cybersecurity|algorithm|database|programming|processor|bandwidth|browser extension|source code|user interface|open-source software|two-factor authentication)\b/i,
    excludeWords: new Set(["network", "organ", "photograph", "piano"]),
  },
  {
    topic: "Medicine & Healthcare",
    groups: groups(
      "Medicine & healthcare",
      "Medicine & care",
      "Medicine and care",
      "Medical care",
      "Medical ethics",
      "Medical research",
      "Medical testing",
      "Clinical reasoning",
      "Patient assessment",
      "Health services",
      "Care quality",
      "Healthcare rights",
      "Healthcare information",
      "Hospital equipment",
      "Emergency care",
      "Long-term care",
      "Supportive care",
      "Treatment",
      "Treatment safety",
    ),
    wordPattern:
      /\b(?:diagnosis|diagnostic|prognosis|comorbidity|clinical|patient-centred care|therapeutic adherence|rehabilitation|medical history)\b/i,
  },
  {
    topic: "Architecture & Construction",
    groups: groups(
      "Architecture & construction",
      "Architecture",
      "Building performance",
      "Building economics",
      "Building safety",
      "Sustainable construction",
      "Renovation",
      "Masonry",
    ),
    wordPattern:
      /\b(?:architectural|architect|construction lifecycle|building-envelope|spatial-configuration|acoustic-insulation|adaptive-reuse design|disaster-resistant construction)\b/i,
  },
  {
    topic: "Environment & Sustainability",
    groups: groups(
      "Environment",
      "The environment",
      "Environmental protection",
      "Environmental measurement",
      "Environmental planning",
      "Environmental action",
      "Environmental economics",
      "Environmental assessment",
      "Environmental ethics",
      "Plants & ecosystems",
      "Ecosystems",
      "Ecosystem science",
      "Ecosystem change",
      "Climate",
      "Climate policy",
      "Conservation",
      "Conservation planning",
      "Conservation policy",
      "Conservation practice",
      "Wildlife conservation",
      "Habitat restoration",
      "Land conservation",
      "Land management",
      "Earth systems",
      "Sustainable living",
      "Sustainable food",
      "Sustainable tourism",
      "Sustainable housing",
      "Sustainable systems",
      "Waste",
      "Water governance",
      "Weather and climate",
    ),
    wordPattern:
      /\b(?:carbon footprint|greenhouse gas|water conservation|energy efficiency|environmental impact|sustainable transport|single-use plastic|renewable energy|habitat loss|wildlife corridor)\b/i,
  },
  {
    topic: "Psychology & Human Behavior",
    groups: groups(
      "Feelings & emotions",
      "Feelings",
      "Personality",
      "Behaviour",
      "Mental wellbeing",
      "Motivation",
      "Human behaviour",
      "Emotional wellbeing",
    ),
    wordPattern:
      /\b(?:mindfulness|stress management|emotional resilience|character trait|cognitive|psychological|self-awareness|motivation)\b/i,
    excludeTopics: new Set(["Animals"]),
  },
  {
    topic: "Media & Journalism",
    groups: groups(
      "Media",
      "Journalism",
      "News",
      "Broadcasting",
      "Publishing",
      "Editorial work",
    ),
    wordPattern:
      /\b(?:journalism|journalist|newspaper|magazine|radio|television|podcast|blog|newsletter|social media|broadcast|bulletin|copyright|coverage|headline|journal|multimedia|news|edition|episode|editorial|press conference|mass media|publisher|reporter)\b/i,
  },
  {
    topic: "Art, Literature & Culture",
    groups: groups(
      "Arts & languages",
      "Culture",
      "Culture and history",
      "Culture and society",
      "Storytelling",
      "Literature",
      "Creative professions",
      "Local culture",
      "Traditions",
    ),
    wordPattern:
      /\b(?:literary|literature|poetry|novel|artistic|musical|cultural heritage|museum|theatre|theater|painting|sculpture)\b/i,
  },
  {
    topic: "Business & Economics",
    groups: groups(
      "Money & possessions",
      "Household finances",
      "Business",
      "Business communication",
      "Economics",
      "Environmental economics",
      "Tourism economics",
      "Building economics",
      "Customer service",
      "Commerce",
      "Trade",
    ),
    wordPattern:
      /\b(?:economy|economic|business|commercial|commerce|market price|resource allocation|financial|corporate|entrepreneurship)\b/i,
  },
  {
    topic: "Law & Government",
    groups: groups(
      "Local government",
      "Government",
      "Governance",
      "Public policy",
      "Social policy",
      "Housing policy",
      "Transport policy",
      "Digital policy",
      "Civic life",
      "Civic participation",
      "Law",
      "Legal systems",
      "Healthcare rights",
      "Housing rights",
      "Regulation",
    ),
    wordPattern:
      /\b(?:legal|legislation|regulatory|governance|public policy|local council|civic responsibility|distributive justice|human rights)\b/i,
  },
  {
    topic: "Education & University Life",
    groups: groups(
      "University & academic English",
      "University",
      "University study",
      "University administration",
      "University support",
      "Education places",
      "Learning activities",
      "Learning support",
      "Learning materials",
      "Collaborative learning",
      "Learning strategies",
      "Assessment",
    ),
    wordPattern:
      /\b(?:syllabus|curriculum|academic calendar|enrollment|transcript|prerequisite|elective|coursework|office hours|academic advisor|learning outcome)\b/i,
  },
  {
    topic: "Science & Research",
    groups: groups(
      "Science",
      "Research",
      "Advanced research",
      "Scientific method",
      "Laboratory work",
      "Research design",
      "Research quality",
      "Ecosystem science",
      "Food science",
      "Measurement",
      "Data analysis",
      "Academic theory",
    ),
    wordPattern:
      /\b(?:methodology|peer review|empirical|theoretical implication|conceptual framework|research reproducibility|scientific|experiment|laboratory|evidence synthesis)\b/i,
  },
  {
    topic: "Academic Writing & Research",
    groups: groups(
      "Academic writing",
      "Academic language",
      "Ideas and arguments",
      "Study skills",
      "Reading skills",
      "Presentation",
    ),
    wordPattern:
      /\b(?:citation|bibliography|plagiarism|paraphrase|counterargument|academic discourse|scholarly consensus|literature review|argumentation|thesis statement|research paper|source evaluation)\b/i,
  },
]

const manualCorrections: Record<string, Partial<Word>> = {
  "batch-009--applied": {
    topic: "Communication",
    group: "Describing things",
  },
  "batch-009--concrete": {
    topic: "Communication",
    group: "Describing things",
  },
  "batch-014--abuse": {
    topic: "Community",
    group: "Social issues",
  },
  "batch-015--aids": {
    word: "AIDS",
    topic: "Medicine & Healthcare",
    group: "Conditions",
    definition:
      "A chronic condition caused by HIV when the immune system is severely weakened.",
    example:
      "Modern treatment helps many people with HIV avoid developing AIDS.",
  },
  "batch-016--cell": {
    topic: "Science & Research",
    group: "Biology",
  },
  "batch-017--computing": {
    topic: "IT & Computers",
    group: "Computer science",
  },
  "batch-019--discrimination": {
    topic: "Community",
    group: "Equality & inclusion",
  },
  "batch-021--foundation": {
    topic: "Community",
    group: "Organizations",
  },
  "batch-023--institution": {
    topic: "Community",
    group: "Organizations",
    definition:
      "An established organization created for education, public service, care, or another social purpose.",
    example: "The institution provides education and community support.",
  },
  "batch-023--laser": {
    topic: "Science & Research",
    group: "Physics",
  },
  "batch-025--molecule": {
    topic: "Science & Research",
    group: "Chemistry",
  },
  "batch-025--network": {
    topic: "Media & Journalism",
    group: "Broadcasting",
  },
  "batch-026--organ": {
    topic: "Art, Literature & Culture",
    group: "Music & instruments",
  },
  "batch-026--photograph": {
    topic: "Media & Journalism",
    group: "Visual media",
  },
  "batch-026--piano": {
    topic: "Art, Literature & Culture",
    group: "Music & instruments",
  },
}

export function applyExpandedTopicTaxonomy(words: Word[]): Word[] {
  const mapped = words.map((word) => {
    const correction = manualCorrections[word.id]
    const corrected = correction ? { ...word, ...correction } : word
    if (correction?.topic)
      return correction.topic === word.topic
        ? corrected
        : { ...corrected, sourceTopic: word.topic }
    const group = corrected.group.toLowerCase()
    const searchableWord = `${corrected.word} ${corrected.group}`
    const rule = topicRules.find(
      (candidate) =>
        !candidate.excludeTopics?.has(corrected.topic) &&
        !candidate.excludeWords?.has(corrected.word.toLowerCase()) &&
        (candidate.groups.has(group) ||
          Boolean(candidate.wordPattern?.test(searchableWord))),
    )
    return rule && rule.topic !== corrected.topic
      ? { ...corrected, sourceTopic: corrected.topic, topic: rule.topic }
      : corrected
  })

  const topicWords = new Set<string>()
  const collisionSafe = mapped.map((candidate, index) => {
    const key = `${candidate.topic.toLowerCase()}|${candidate.word.toLowerCase()}`
    if (!topicWords.has(key)) {
      topicWords.add(key)
      return candidate
    }
    const original = words[index]
    const originalKey = `${original.topic.toLowerCase()}|${original.word.toLowerCase()}`
    topicWords.add(originalKey)
    return original
  })

  const topicById = new Map(
    collisionSafe.map((word) => [word.id, word.topic] as const),
  )
  const topicMembers = new Map<string, string[]>()
  const topicGroupMembers = new Map<string, string[]>()
  for (const word of collisionSafe) {
    topicMembers.set(word.topic, [
      ...(topicMembers.get(word.topic) || []),
      word.id,
    ])
    const groupKey = `${word.topic}\u0000${word.group}`
    topicGroupMembers.set(groupKey, [
      ...(topicGroupMembers.get(groupKey) || []),
      word.id,
    ])
  }

  return collisionSafe.map((word) => ({
    ...word,
    related: [
      ...new Set([
        ...word.related.filter((id) => topicById.get(id) === word.topic),
        ...(topicGroupMembers.get(`${word.topic}\u0000${word.group}`) || []),
        ...(topicMembers.get(word.topic) || []),
      ]),
    ]
      .filter((id) => id !== word.id)
      .slice(0, 5),
  }))
}
