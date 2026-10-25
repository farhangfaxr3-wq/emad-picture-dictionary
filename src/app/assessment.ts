import type { Word } from "./content"
import { cefrLevels, type CEFRLevel } from "./cefr"
import { vocabulary } from "./vocabulary"

export const ASSESSMENT_BANK_VERSION = "2026.10.1"
export const ASSESSMENT_QUESTION_COUNT = 30

export type AssessmentSkill = "vocabulary" | "grammar" | "reading" | "listening"

export interface AssessmentQuestion {
  id: string
  bankVersion: string
  skill: AssessmentSkill
  level: CEFRLevel
  prompt: string
  options: string[]
  correctIndex: number
  explanation: string
  passage?: string
  audioText?: string
  audioSrc?: string
  sourceId?: string
  sourceLabel?: string
  sourceConfidence?: "low" | "medium" | "high"
}

export interface SkillScore {
  correct: number
  total: number
  percent: number
}

export interface AssessmentResult {
  id: string
  completedAt: string
  bankVersion: string
  level: CEFRLevel
  correct: number
  total: number
  percent: number
  weightedPercent: number
  skills: Record<AssessmentSkill, SkillScore>
}

const question = (
  id: string,
  skill: AssessmentSkill,
  level: CEFRLevel,
  prompt: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  extra: Pick<AssessmentQuestion, "passage" | "audioText" | "audioSrc"> = {},
): AssessmentQuestion => ({
  id,
  bankVersion: ASSESSMENT_BANK_VERSION,
  skill,
  level,
  prompt,
  options,
  correctIndex,
  explanation,
  ...extra,
})

export const initialAssessmentQuestions: AssessmentQuestion[] = [
  question(
    "v-a1-house",
    "vocabulary",
    "A1",
    "Which word means a building where people live?",
    ["house", "river", "shirt", "market"],
    0,
    "A house is a building where people live.",
  ),
  question(
    "v-a1-apple",
    "vocabulary",
    "A1",
    "Which word names a round fruit that can have red or green skin?",
    ["bread", "apple", "chair", "flower"],
    1,
    "An apple is a round fruit with red or green skin.",
  ),
  question(
    "v-a2-journey",
    "vocabulary",
    "A2",
    "What is a journey?",
    [
      "A place where food is cooked",
      "The act of travelling from one place to another",
      "A short written answer",
      "A person who repairs machines",
    ],
    1,
    "A journey is the act of travelling from one place to another.",
  ),
  question(
    "v-a2-receipt",
    "vocabulary",
    "A2",
    "After paying in a shop, which document shows what you bought?",
    ["passport", "timetable", "receipt", "invitation"],
    2,
    "A receipt records the items bought and the amount paid.",
  ),
  question(
    "v-b1-reliable",
    "vocabulary",
    "B1",
    "If a person is reliable, they are…",
    [
      "easy to forget",
      "able to be trusted",
      "unwilling to speak",
      "likely to arrive late",
    ],
    1,
    "Reliable people or things can be trusted to behave consistently.",
  ),
  question(
    "v-b1-volunteer",
    "vocabulary",
    "B1",
    "Which sentence uses “volunteer” correctly?",
    [
      "The volunteer offered to help without being paid.",
      "Please volunteer the door before you leave.",
      "The train volunteer at six o'clock.",
      "She bought a volunteer at the market.",
    ],
    0,
    "A volunteer chooses to help without being paid.",
  ),
  question(
    "v-b2-syllabus",
    "vocabulary",
    "B2",
    "What information would you expect to find in a course syllabus?",
    [
      "A passenger's travel history",
      "Course topics, requirements, and dates",
      "A patient's medical results",
      "A city's weather records",
    ],
    1,
    "A syllabus outlines a course's content, requirements, and schedule.",
  ),
  question(
    "v-b2-carbon-footprint",
    "vocabulary",
    "B2",
    "A person's carbon footprint refers to…",
    [
      "the distance they walk each day",
      "the total greenhouse gases linked to their activities",
      "the size of the land they own",
      "the amount of paper they recycle",
    ],
    1,
    "A carbon footprint measures greenhouse-gas emissions linked to an activity, person, or organization.",
  ),
  question(
    "v-c1-plagiarism",
    "vocabulary",
    "C1",
    "Which situation is an example of plagiarism?",
    [
      "Summarizing a source and citing it",
      "Quoting an author with a reference",
      "Presenting another person's ideas as your own",
      "Comparing two published studies",
    ],
    2,
    "Plagiarism is presenting someone else's words or ideas as your own.",
  ),
  question(
    "v-c1-methodology",
    "vocabulary",
    "C1",
    "In a research report, the methodology explains…",
    [
      "how the study was designed and carried out",
      "why the title was selected",
      "who will buy the final report",
      "which result is most surprising",
    ],
    0,
    "Methodology describes the organized methods used to conduct a study.",
  ),
  question(
    "v-c2-ubiquitous",
    "vocabulary",
    "C2",
    "Which meaning is closest to “ubiquitous”?",
    ["carefully hidden", "present almost everywhere", "recently invented", "difficult to prove"],
    1,
    "Ubiquitous means present, found, or appearing everywhere.",
  ),
  question(
    "v-c2-ameliorate",
    "vocabulary",
    "C2",
    "To ameliorate a problem is to…",
    ["make it less severe", "describe it vaguely", "cause it deliberately", "ignore it completely"],
    0,
    "Ameliorate means to make a difficult or unpleasant situation better.",
  ),

  question(
    "g-a1-be",
    "grammar",
    "A1",
    "Choose the correct sentence.",
    ["She are a student.", "She is a student.", "She be a student.", "She am a student."],
    1,
    "Use “is” with the third-person singular subject “she.”",
  ),
  question(
    "g-a1-present-simple",
    "grammar",
    "A1",
    "I ___ coffee every morning.",
    ["drink", "drinks", "drinking", "drank"],
    0,
    "Use the base form “drink” with “I” for a regular habit.",
  ),
  question(
    "g-a2-past-simple",
    "grammar",
    "A2",
    "We ___ the museum yesterday.",
    ["visit", "have visited", "visited", "are visiting"],
    2,
    "“Yesterday” signals a finished past action, so the past simple “visited” is correct.",
  ),
  question(
    "g-b1-first-conditional",
    "grammar",
    "B1",
    "If it rains tomorrow, we ___ at home.",
    ["stay", "stayed", "will stay", "would stay"],
    2,
    "The first conditional uses present simple after “if” and “will” in the result clause.",
  ),
  question(
    "g-b1-present-perfect",
    "grammar",
    "B1",
    "Which sentence is correct?",
    [
      "I live here since 2020.",
      "I am living here since 2020.",
      "I have lived here since 2020.",
      "I lived here since 2020.",
    ],
    2,
    "Use the present perfect for a situation that began in the past and continues now.",
  ),
  question(
    "g-b2-reported-speech",
    "grammar",
    "B2",
    "Mina said, “I am tired.” Choose the best reported form.",
    [
      "Mina said that I am tired.",
      "Mina said that she was tired.",
      "Mina said that she is tired yesterday.",
      "Mina told that she tired.",
    ],
    1,
    "In standard reported speech, “I” changes to “she” and “am” backshifts to “was.”",
  ),
  question(
    "g-c1-inversion",
    "grammar",
    "C1",
    "Complete the sentence: Rarely ___ such a thoughtful presentation.",
    ["I have seen", "have I seen", "I saw", "did I have seen"],
    1,
    "A negative adverb at the beginning triggers subject-auxiliary inversion: “Rarely have I seen.”",
  ),
  question(
    "g-c2-subjunctive",
    "grammar",
    "C2",
    "Choose the most appropriate formal sentence.",
    [
      "It is essential that every applicant is informed immediately.",
      "It is essential that every applicant be informed immediately.",
      "It is essential that every applicant was informed immediately.",
      "It is essential every applicant to be informed immediately.",
    ],
    1,
    "Formal mandative constructions can use the base-form subjunctive: “that every applicant be informed.”",
  ),

  question(
    "r-a1-library",
    "reading",
    "A1",
    "Where does Lina go after class?",
    ["To the library", "To the market", "To the station", "To the hospital"],
    0,
    "The passage says Lina goes to the library.",
    { passage: "Lina finishes class at two o'clock. She goes to the library and reads for one hour." },
  ),
  question(
    "r-a2-bridge",
    "reading",
    "A2",
    "Why should passengers leave home early?",
    [
      "The buses are free today.",
      "The station has moved.",
      "Repairs may make the journey longer.",
      "The morning service is cancelled.",
    ],
    2,
    "Bridge repairs may delay buses, so passengers are advised to allow extra time.",
    {
      passage:
        "Buses will use a different road today because engineers are repairing the bridge. Morning services will still run, but journeys may take fifteen minutes longer. Passengers should leave home early.",
    },
  ),
  question(
    "r-b1-work-pilot",
    "reading",
    "B1",
    "What was the main benefit of the trial?",
    [
      "The company hired more staff.",
      "Employees finished focused work more efficiently.",
      "Meetings became longer.",
      "Customers visited the office more often.",
    ],
    1,
    "The shorter meetings protected focused time, and teams completed key tasks sooner.",
    {
      passage:
        "A small company tested shorter meetings for one month. Managers limited routine meetings to twenty-five minutes and protected two hours of quiet work each morning. Staff reported fewer interruptions, and most teams finished key tasks earlier than before.",
    },
  ),
  question(
    "r-b2-urban-trees",
    "reading",
    "B2",
    "Which statement best reflects the writer's view?",
    [
      "Tree planting is useless without new roads.",
      "Any tree species will improve every neighborhood equally.",
      "Urban trees help, but good planning and maintenance matter.",
      "Cities should replace buildings with forests.",
    ],
    2,
    "The writer supports urban trees while stressing species choice, placement, and long-term care.",
    {
      passage:
        "Urban trees can cool streets, absorb rainwater, and make public spaces more pleasant. Yet planting alone is not enough. Cities must select suitable species, protect roots, and budget for care. Without long-term planning, many young trees fail before their benefits are realized.",
    },
  ),
  question(
    "r-c1-intellectual-humility",
    "reading",
    "C1",
    "What can reasonably be inferred from the passage?",
    [
      "Expertise removes the need to revise beliefs.",
      "Uncertainty always prevents decisive action.",
      "Recognizing limits can improve the quality of judgement.",
      "Confident speakers are usually more accurate.",
    ],
    2,
    "The passage argues that recognizing uncertainty supports better questions and more reliable decisions.",
    {
      passage:
        "Intellectual humility is not the absence of confidence; it is an awareness that one's knowledge may be incomplete. Decision-makers who acknowledge uncertainty can still act firmly, but they remain willing to revise a conclusion when stronger evidence appears. This habit often produces better questions and more dependable judgement.",
    },
  ),

  question(
    "l-a1-notebook",
    "listening",
    "A1",
    "Where is the blue notebook?",
    ["Under the chair", "On the teacher's desk", "Inside the bag", "Beside the window"],
    1,
    "The recording says the blue notebook is on the teacher's desk.",
    {
      audioText: "The blue notebook is on the teacher's desk.",
      audioSrc: "/audio/assessment/l-a1-notebook.wav",
    },
  ),
  question(
    "l-a2-train",
    "listening",
    "A2",
    "When will Maya's train leave?",
    ["At nine o'clock", "At nine fifteen", "At half past nine", "At ten o'clock"],
    2,
    "The announcement changes the departure time to half past nine.",
    {
      audioText:
        "Maya planned to take the nine o'clock train, but a delay means it will now leave at half past nine.",
      audioSrc: "/audio/assessment/l-a2-train.wav",
    },
  ),
  question(
    "l-b1-assignment",
    "listening",
    "B1",
    "What must students do by Thursday?",
    [
      "Give their presentation",
      "Submit the written assignment",
      "Choose a new research topic",
      "Meet the lecturer online",
    ],
    1,
    "The written assignment is due Thursday; presentations begin the following Monday.",
    {
      audioText:
        "Please submit your written assignment by Thursday afternoon. We will begin the short presentations next Monday.",
      audioSrc: "/audio/assessment/l-b1-assignment.wav",
    },
  ),
  question(
    "l-b2-workshop",
    "listening",
    "B2",
    "What will happen first?",
    [
      "The rescheduled workshop will take place.",
      "Participants will receive online materials.",
      "The building will reopen.",
      "Participants will receive refunds.",
    ],
    1,
    "Materials arrive on Friday, before the workshop takes place the following Wednesday.",
    {
      audioText:
        "Although the workshop has been postponed until next Wednesday, participants will receive the online materials this Friday so they can prepare in advance.",
      audioSrc: "/audio/assessment/l-b2-workshop.wav",
    },
  ),
  question(
    "l-c1-committee",
    "listening",
    "C1",
    "Why did the committee commission an independent review?",
    [
      "To replace the proposal immediately",
      "To evaluate its long-term costs before deciding",
      "To identify the proposal's author",
      "To avoid discussing the proposal again",
    ],
    1,
    "The committee wanted independent evidence about long-term costs before reaching a final decision.",
    {
      audioText:
        "The committee did not reject the proposal outright. Instead, it commissioned an independent review to determine whether the projected long-term savings justified the substantial initial cost.",
      audioSrc: "/audio/assessment/l-c1-committee.wav",
    },
  ),
]

const levelWeights: Record<CEFRLevel, number> = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6,
}

const selectionPlan: Record<AssessmentSkill, Partial<Record<CEFRLevel, number>>> = {
  vocabulary: { A1: 2, A2: 2, B1: 2, B2: 2, C1: 2, C2: 2 },
  grammar: { A1: 2, A2: 1, B1: 2, B2: 1, C1: 1, C2: 1 },
  reading: { A1: 1, A2: 1, B1: 1, B2: 1, C1: 1 },
  listening: { A1: 1, A2: 1, B1: 1, B2: 1, C1: 1 },
}

function hash(value: string) {
  let result = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index)
    result = Math.imul(result, 16777619)
  }
  return result >>> 0
}

function shuffled<T>(items: T[], seed: string) {
  return [...items]
    .map((item, index) => ({ item, order: hash(`${seed}:${index}`) }))
    .sort((first, second) => first.order - second.order)
    .map(({ item }) => item)
}

export function selectAssessmentQuestions(
  approvedQuestions: AssessmentQuestion[] = [],
  seed = crypto.randomUUID(),
) {
  const validApproved = approvedQuestions.filter(validateQuestion)
  const pool = [...initialAssessmentQuestions, ...validApproved]
  const selected: AssessmentQuestion[] = []

  for (const skill of Object.keys(selectionPlan) as AssessmentSkill[]) {
    for (const level of cefrLevels) {
      const count = selectionPlan[skill][level] || 0
      const candidates = pool.filter(
        (candidate) => candidate.skill === skill && candidate.level === level,
      )
      selected.push(...shuffled(candidates, `${seed}:${skill}:${level}`).slice(0, count))
    }
  }
  return shuffled(selected, `${seed}:question-order`).slice(0, ASSESSMENT_QUESTION_COUNT)
}

export function validateQuestion(question: AssessmentQuestion) {
  return Boolean(
    question &&
      question.id &&
      question.bankVersion &&
      ["vocabulary", "grammar", "reading", "listening"].includes(question.skill) &&
      cefrLevels.includes(question.level) &&
      question.prompt.trim() &&
      Array.isArray(question.options) &&
      question.options.length === 4 &&
      new Set(question.options.map((option) => option.trim().toLowerCase())).size === 4 &&
      Number.isInteger(question.correctIndex) &&
      question.correctIndex >= 0 &&
      question.correctIndex < 4 &&
      question.explanation.trim() &&
      (question.skill !== "listening" || question.audioText?.trim()),
  )
}

export function scoreAssessment(
  questions: AssessmentQuestion[],
  answers: Record<string, number>,
): AssessmentResult {
  const skillNames: AssessmentSkill[] = [
    "vocabulary",
    "grammar",
    "reading",
    "listening",
  ]
  const skills = Object.fromEntries(
    skillNames.map((skill) => [skill, { correct: 0, total: 0, percent: 0 }]),
  ) as Record<AssessmentSkill, SkillScore>
  let correct = 0
  let earnedWeight = 0
  let possibleWeight = 0
  const levelPerformance = Object.fromEntries(
    cefrLevels.map((level) => [level, { correct: 0, total: 0 }]),
  ) as Record<CEFRLevel, { correct: number; total: number }>

  for (const item of questions) {
    const isCorrect = answers[item.id] === item.correctIndex
    skills[item.skill].total += 1
    levelPerformance[item.level].total += 1
    possibleWeight += levelWeights[item.level]
    if (isCorrect) {
      correct += 1
      skills[item.skill].correct += 1
      levelPerformance[item.level].correct += 1
      earnedWeight += levelWeights[item.level]
    }
  }

  for (const skill of skillNames) {
    const result = skills[skill]
    result.percent = result.total ? Math.round((result.correct / result.total) * 100) : 0
  }

  const weightedPercent = possibleWeight
    ? Math.round((earnedWeight / possibleWeight) * 100)
    : 0
  const rawLevelIndex =
    weightedPercent < 24
      ? 0
      : weightedPercent < 38
        ? 1
        : weightedPercent < 54
          ? 2
          : weightedPercent < 69
            ? 3
            : weightedPercent < 84
              ? 4
              : 5
  const highestSupportedIndex = cefrLevels.reduce((highest, level, index) => {
    const performance = levelPerformance[level]
    return performance.total > 0 && performance.correct / performance.total >= 0.5
      ? index
      : highest
  }, 0)
  const finalLevelIndex = Math.min(rawLevelIndex, highestSupportedIndex + 1, 5)

  return {
    id: crypto.randomUUID(),
    completedAt: new Date().toISOString(),
    bankVersion: ASSESSMENT_BANK_VERSION,
    level: cefrLevels[finalLevelIndex],
    correct,
    total: questions.length,
    percent: questions.length ? Math.round((correct / questions.length) * 100) : 0,
    weightedPercent,
    skills,
  }
}

function optionSetForWord(word: Word, words: Word[]) {
  const peers = words.filter(
    (candidate) =>
      candidate.id !== word.id &&
      candidate.definition.trim() &&
      candidate.cefr?.level === word.cefr?.level,
  )
  const fallback = words.filter(
    (candidate) => candidate.id !== word.id && candidate.definition.trim(),
  )
  const ordered = shuffled(peers.length >= 3 ? peers : fallback, word.id)
  const distractors = ordered
    .map((candidate) => candidate.definition.trim())
    .filter(
      (definition, index, definitions) =>
        definition.toLowerCase() !== word.definition.trim().toLowerCase() &&
        definitions.findIndex((item) => item.toLowerCase() === definition.toLowerCase()) === index,
    )
    .slice(0, 3)
  if (distractors.length < 3) return null
  const correctIndex = hash(word.id) % 4
  const options = [...distractors]
  options.splice(correctIndex, 0, word.definition.trim())
  return { options, correctIndex }
}

export function generateVocabularyQuestionCandidates(
  words: Word[] = vocabulary,
  limit = 300,
): AssessmentQuestion[] {
  const eligible = words.filter(
    (word) =>
      word.cefr &&
      word.word.trim().length >= 2 &&
      word.word.trim().length <= 80 &&
      word.definition.trim().length >= 12 &&
      word.definition.trim().length <= 280,
  )

  return eligible.slice(-limit).reduce<AssessmentQuestion[]>((result, word) => {
      const optionSet = optionSetForWord(word, eligible)
      if (!optionSet || !word.cefr) return result
      result.push({
        id: `auto-vocabulary-${word.id}-v1`,
        bankVersion: "auto-vocabulary-v1",
        skill: "vocabulary",
        level: word.cefr.level,
        prompt: `Which definition best matches “${word.word}”?`,
        options: optionSet.options,
        correctIndex: optionSet.correctIndex,
        explanation: `“${word.word}” means: ${word.definition.trim()}`,
        sourceId: word.id,
        sourceLabel: `${word.topic} · ${word.group}`,
        sourceConfidence: word.cefr.confidence,
      })
      return result
    }, [])
}

export const assessmentSkillLabels: Record<AssessmentSkill, string> = {
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  reading: "Reading",
  listening: "Listening",
}

export function resultRecommendations(level: CEFRLevel) {
  const recommendations: Record<CEFRLevel, string[]> = {
    A1: [
      "Build a strong base with everyday picture vocabulary.",
      "Practice short listening prompts and simple present-tense sentences.",
      "Review five to ten words each day.",
    ],
    A2: [
      "Expand vocabulary for routines, travel, shopping, and study.",
      "Practice short past and future forms in context.",
      "Use flashcards and short listening activities regularly.",
    ],
    B1: [
      "Study topic vocabulary and common word combinations.",
      "Practice reading for main ideas and listening for key details.",
      "Revisit grammar through complete sentences and short texts.",
    ],
    B2: [
      "Work with academic and professional vocabulary.",
      "Practice inference in longer reading and listening passages.",
      "Review complex sentences, reporting, and conditional forms.",
    ],
    C1: [
      "Develop precision with nuanced and academic vocabulary.",
      "Compare arguments, tone, and implied meaning in authentic texts.",
      "Use advanced grammar to express emphasis and stance.",
    ],
    C2: [
      "Refine register, idiomatic language, and highly precise vocabulary.",
      "Engage with complex texts from unfamiliar fields.",
      "Maintain accuracy through deliberate review and varied input.",
    ],
  }
  return recommendations[level]
}
