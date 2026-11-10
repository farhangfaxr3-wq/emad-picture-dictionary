import type {
  ConfusingWordLesson,
  ConfusionDifficulty,
  ConfusionType,
} from "./confusingWords"
import type { Word } from "./content"
import { vocabulary } from "./vocabulary"

type PairSeed = readonly [id: string, first: string, second: string, difficulty: ConfusionDifficulty, type: ConfusionType]

const pairSeeds: PairSeed[] = [
  ["hear-listen", "hear", "listen", "A1", "Meaning"],
  ["come-go", "come", "go", "A1", "Meaning"],
  ["learn-study", "learn", "study", "A1", "Meaning"],
  ["job-work", "job", "work", "A1", "Grammar and usage"],
  ["big-large", "big", "large", "A1", "Meaning"],
  ["small-little", "small", "little", "A1", "Meaning"],
  ["high-tall", "high", "tall", "A1", "Meaning"],
  ["fast-quick", "fast", "quick", "A1", "Meaning"],
  ["street-road", "street", "road", "A1", "Meaning"],
  ["shop-store", "shop", "store", "A1", "Meaning"],
  ["trip-travel", "trip", "travel", "A2", "Meaning"],
  ["arrive-reach", "arrive", "reach", "A2", "Grammar and usage"],
  ["speak-talk", "speak", "talk", "A2", "Grammar and usage"],
  ["remember-remind", "remember", "remind", "A2", "Meaning"],
  ["win-beat", "win", "beat", "A2", "Grammar and usage"],
  ["wear-carry", "wear", "carry", "A2", "Meaning"],
  ["fit-suit", "fit", "suit", "A2", "Meaning"],
  ["discover-invent", "discover", "invent", "A2", "Meaning"],
  ["find-find-out", "find", "find out", "A2", "Meaning"],
  ["prevent-avoid", "prevent", "avoid", "B1", "Grammar and usage"],
  ["refuse-deny", "refuse", "deny", "B1", "Grammar and usage"],
  ["expect-wait", "expect", "wait", "B1", "Grammar and usage"],
  ["offer-provide", "offer", "provide", "B1", "Grammar and usage"],
  ["explain-describe", "explain", "describe", "B1", "Meaning"],
  ["notice-realize", "notice", "realize", "B1", "Meaning"],
  ["recognize-remember", "recognize", "remember", "B1", "Meaning"],
  ["assure-ensure", "assure", "ensure", "B2", "Meaning"],
  ["beside-besides", "beside", "besides", "B1", "Similar spelling"],
  ["between-among", "between", "among", "B1", "Grammar and usage"],
  ["especially-specially", "especially", "specially", "B2", "Meaning"],
  ["hard-hardly", "hard", "hardly", "B1", "Grammar and usage"],
  ["late-lately", "late", "lately", "B1", "Grammar and usage"],
  ["near-nearly", "near", "nearly", "B1", "Grammar and usage"],
  ["accept-except", "accept", "except", "A2", "Sound-alike"],
  ["access-excess", "access", "excess", "B2", "Sound-alike"],
  ["aloud-allowed", "aloud", "allowed", "B1", "Sound-alike"],
  ["brake-break", "brake", "break", "A2", "Sound-alike"],
  ["buy-by", "buy", "by", "A1", "Sound-alike"],
  ["capital-capitol", "capital", "capitol", "B2", "Sound-alike"],
  ["complement-compliment", "complement", "compliment", "C1", "Sound-alike"],
  ["council-counsel", "council", "counsel", "C1", "Sound-alike"],
  ["course-coarse", "course", "coarse", "B1", "Sound-alike"],
  ["dairy-diary", "dairy", "diary", "A2", "Similar spelling"],
  ["device-devise", "device", "devise", "B2", "Similar spelling"],
  ["farther-further", "farther", "further", "B2", "Meaning"],
  ["hear-here", "hear", "here", "A1", "Sound-alike"],
  ["hole-whole", "hole", "whole", "A2", "Sound-alike"],
  ["later-latter", "later", "latter", "B2", "Similar spelling"],
  ["lead-led", "lead", "led", "B1", "Similar spelling"],
  ["mail-male", "mail", "male", "A2", "Sound-alike"],
  ["meat-meet", "meat", "meet", "A1", "Sound-alike"],
  ["peace-piece", "peace", "piece", "A2", "Sound-alike"],
  ["plain-plane", "plain", "plane", "A2", "Sound-alike"],
  ["quiet-quite", "quiet", "quite", "A2", "Similar spelling"],
  ["right-write", "right", "write", "A1", "Sound-alike"],
  ["role-roll", "role", "roll", "A2", "Sound-alike"],
  [
    "stationary-stationery",
    "stationary",
    "stationery",
    "B2",
    "Similar spelling",
  ],
  ["than-then", "than", "then", "A2", "Similar spelling"],
  ["their-there", "their", "there", "A1", "Sound-alike"],
  ["through-threw", "through", "threw", "A2", "Sound-alike"],
  ["to-too", "to", "too", "A1", "Sound-alike"],
  ["waist-waste", "waist", "waste", "B1", "Sound-alike"],
  ["weather-whether", "weather", "whether", "B1", "Sound-alike"],
  ["weak-week", "weak", "week", "A1", "Sound-alike"],
  ["few-a-few", "few", "a few", "A2", "Grammar and usage"],
  ["little-a-little", "little", "a little", "A2", "Grammar and usage"],
  ["less-fewer", "less", "fewer", "B1", "Grammar and usage"],
  ["much-many", "much", "many", "A1", "Grammar and usage"],
  ["some-any", "some", "any", "A1", "Grammar and usage"],
  ["each-every", "each", "every", "A2", "Grammar and usage"],
  ["all-whole", "all", "whole", "A2", "Grammar and usage"],
  ["either-neither", "either", "neither", "B1", "Grammar and usage"],
  ["another-other", "another", "other", "A2", "Grammar and usage"],
  ["since-for", "since", "for", "A2", "Grammar and usage"],
  ["during-while", "during", "while", "B1", "Grammar and usage"],
  ["ago-before", "ago", "before", "A2", "Grammar and usage"],
  ["already-yet", "already", "yet", "A2", "Grammar and usage"],
  ["still-yet", "still", "yet", "B1", "Grammar and usage"],
  ["so-such", "so", "such", "B1", "Grammar and usage"],
  ["too-enough", "too", "enough", "A2", "Grammar and usage"],
  ["rise-raise", "rise", "raise", "B1", "Grammar and usage"],
  ["lie-lay", "lie", "lay", "B2", "Grammar and usage"],
  ["sit-set", "sit", "set", "B1", "Grammar and usage"],
  ["steal-rob", "steal", "rob", "B1", "Grammar and usage"],
  ["hypothesis-theory", "hypothesis", "theory", "B2", "Academic English"],
  ["method-methodology", "method", "methodology", "C1", "Academic English"],
  ["data-evidence", "data", "evidence", "B2", "Academic English"],
  ["result-finding", "result", "finding", "B2", "Academic English"],
  ["research-study", "research", "study", "B2", "Academic English"],
  ["source-resource", "source", "resource", "B2", "Academic English"],
  ["quote-reference", "quote", "reference", "B2", "Academic English"],
  ["argument-discussion", "argument", "discussion", "B2", "Academic English"],
  ["claim-argue", "claim", "argue", "C1", "Academic English"],
  ["analyse-evaluate", "analyse", "evaluate", "C1", "Academic English"],
  ["accuracy-precision", "accuracy", "precision", "C1", "Academic English"],
  ["reliability-validity", "reliability", "validity", "C1", "Academic English"],
  [
    "correlation-causation",
    "correlation",
    "causation",
    "C2",
    "Academic English",
  ],
  [
    "significant-important",
    "significant",
    "important",
    "B2",
    "Academic English",
  ],
  ["impact-influence", "impact", "influence", "B2", "Academic English"],
  ["amount-number", "amount", "number", "B1", "Academic English"],
  ["compare-contrast", "compare", "contrast", "B2", "Academic English"],
  ["comprise-compose", "comprise", "compose", "C1", "Academic English"],
  ["consist-constitute", "consist", "constitute", "C1", "Academic English"],
  ["criterion-criteria", "criterion", "criteria", "B2", "Academic English"],
  ["phenomenon-phenomena", "phenomenon", "phenomena", "B2", "Academic English"],
  ["premise-presumption", "premise", "presumption", "C2", "Academic English"],
  ["ethics-morals", "ethics", "morals", "C1", "Academic English"],
  ["objective-subjective", "objective", "subjective", "B2", "Academic English"],
  [
    "qualitative-quantitative",
    "qualitative",
    "quantitative",
    "C1",
    "Academic English",
  ],
  ["explicit-implicit", "explicit", "implicit", "C1", "Academic English"],
  ["literal-figurative", "literal", "figurative", "B2", "Academic English"],
  ["coherent-cohesive", "coherent", "cohesive", "C1", "Academic English"],
  ["concise-brief", "concise", "brief", "B2", "Academic English"],
  ["credible-plausible", "credible", "plausible", "C1", "Academic English"],
  ["bias-prejudice", "bias", "prejudice", "C1", "Academic English"],
  ["fact-opinion", "fact", "opinion", "A2", "Academic English"],
  ["primary-secondary", "primary", "secondary", "B1", "Academic English"],
  ["abstract-concrete", "abstract", "concrete", "B2", "Academic English"],
  ["continual-continuous", "continual", "continuous", "C1", "Meaning"],
  ["classic-classical", "classic", "classical", "B2", "Meaning"],
  ["historic-historical", "historic", "historical", "C1", "Meaning"],
  ["electric-electrical", "electric", "electrical", "B2", "Meaning"],
  [
    "industrial-industrious",
    "industrial",
    "industrious",
    "C1",
    "Similar spelling",
  ],
  ["sensible-sensitive", "sensible", "sensitive", "B2", "Similar spelling"],
  [
    "confident-confidential",
    "confident",
    "confidential",
    "B2",
    "Similar spelling",
  ],
  ["effective-efficient", "effective", "efficient", "B2", "Meaning"],
  ["practical-practicable", "practical", "practicable", "C2", "Meaning"],
  ["alternate-alternative", "alternate", "alternative", "C1", "Meaning"],
  ["adverse-averse", "adverse", "averse", "C2", "Similar spelling"],
  ["eminent-imminent", "eminent", "imminent", "C2", "Sound-alike"],
  ["discreet-discrete", "discreet", "discrete", "C2", "Sound-alike"],
  ["elicit-illicit", "elicit", "illicit", "C2", "Sound-alike"],
  ["allude-elude", "allude", "elude", "C2", "Sound-alike"],
  ["precede-proceed", "precede", "proceed", "C1", "Similar spelling"],
  ["prescribe-proscribe", "prescribe", "proscribe", "C2", "Similar spelling"],
  ["adapt-adopt", "adapt", "adopt", "B2", "Similar spelling"],
  ["appraise-apprise", "appraise", "apprise", "C2", "Sound-alike"],
  ["depreciate-deprecate", "depreciate", "deprecate", "C2", "Similar spelling"],
  [
    "disinterested-uninterested",
    "disinterested",
    "uninterested",
    "C2",
    "Meaning",
  ],
  ["flammable-inflammable", "flammable", "inflammable", "C1", "Meaning"],
  ["ingenious-ingenuous", "ingenious", "ingenuous", "C2", "Similar spelling"],
  [
    "perspective-prospective",
    "perspective",
    "prospective",
    "C1",
    "Similar spelling",
  ],
  ["personal-personnel", "personal", "personnel", "B2", "Similar spelling"],
  ["moral-morale", "moral", "morale", "B2", "Similar spelling"],
  ["formally-formerly", "formally", "formerly", "B2", "Similar spelling"],
  ["maybe-may-be", "maybe", "may be", "B1", "Grammar and usage"],
  ["everyday-every-day", "everyday", "every day", "B1", "Grammar and usage"],
  ["sometime-sometimes", "sometime", "sometimes", "B1", "Grammar and usage"],
  [
    "altogether-all-together",
    "altogether",
    "all together",
    "B2",
    "Grammar and usage",
  ],
  ["anyone-any-one", "anyone", "any one", "B2", "Grammar and usage"],
  ["apart-a-part", "apart", "a part", "B2", "Grammar and usage"],
  ["passed-past", "passed", "past", "B1", "Sound-alike"],
  ["peak-peek", "peak", "peek", "B1", "Sound-alike"],
  ["pour-poor", "pour", "poor", "A2", "Sound-alike"],
  ["scene-seen", "scene", "seen", "A2", "Sound-alike"],
  ["sole-soul", "sole", "soul", "B1", "Sound-alike"],
  ["stake-steak", "stake", "steak", "B1", "Sound-alike"],
  ["tail-tale", "tail", "tale", "A2", "Sound-alike"],
  ["bare-bear", "bare", "bear", "B1", "Sound-alike"],
  ["board-bored", "board", "bored", "A2", "Sound-alike"],
  ["flower-flour", "flower", "flour", "A1", "Sound-alike"],
  ["knight-night", "knight", "night", "A2", "Sound-alike"],
  ["one-won", "one", "won", "A1", "Sound-alike"],
  ["pair-pear", "pair", "pear", "A1", "Sound-alike"],
  ["sea-see", "sea", "see", "A1", "Sound-alike"],
  ["sun-son", "sun", "son", "A1", "Sound-alike"],
  ["wait-weight", "wait", "weight", "A2", "Sound-alike"],
  ["wood-would", "wood", "would", "A2", "Sound-alike"],
  ["despite-although", "despite", "although", "B1", "Grammar and usage"],
  ["because-because-of", "because", "because of", "B1", "Grammar and usage"],
  ["unless-if-not", "unless", "if not", "B1", "Grammar and usage"],
  ["used-to-usually", "used to", "usually", "B1", "Grammar and usage"],
  ["must-have-to", "must", "have to", "B1", "Grammar and usage"],
  ["may-might", "may", "might", "B1", "Grammar and usage"],
  ["can-could", "can", "could", "A2", "Grammar and usage"],
  ["should-ought", "should", "ought", "B1", "Grammar and usage"],
  ["very-really", "very", "really", "A2", "Grammar and usage"],
  ["say-state", "say", "state", "B2", "Academic English"],
  ["show-demonstrate", "show", "demonstrate", "B2", "Academic English"],
  ["idea-concept", "idea", "concept", "B2", "Academic English"],
  ["problem-issue", "problem", "issue", "B2", "Academic English"],
  ["goal-objective", "goal", "objective", "B2", "Academic English"],
  ["change-variation", "change", "variation", "B2", "Academic English"],
  ["cause-reason", "cause", "reason", "B1", "Academic English"],
  ["effect-consequence", "effect", "consequence", "B2", "Academic English"],
  ["proof-evidence", "proof", "evidence", "B2", "Academic English"],
  [
    "assumption-conclusion",
    "assumption",
    "conclusion",
    "C1",
    "Academic English",
  ],
  ["summary-synthesis", "summary", "synthesis", "C2", "Academic English"],
]

const wordsBySurface = new Map<string, Word>()
for (const word of vocabulary) {
  const surface = word.word.trim().toLocaleLowerCase("en")
  if (!wordsBySurface.has(surface)) wordsBySurface.set(surface, word)
}

function titleCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function patternsFor(word: Word) {
  const reviewed = [
    ...(word.learningDetails?.collocations || []),
    ...(word.learningDetails?.grammarPatterns || []),
  ]
  const surface = word.word.toLocaleLowerCase("en")
  const part = word.partOfSpeech.toLocaleLowerCase("en")
  const fallbacks = part.includes("verb")
    ? [`to ${surface}`, `${surface} + object`, `${surface} in context`]
    : part.includes("adjective")
      ? [`be ${surface}`, `${surface} + noun`, `very ${surface}`]
      : [`the ${surface}`, `${surface} + noun`, `${surface} in context`]
  return [...new Set([...reviewed, ...fallbacks])].slice(0, 3)
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function swapSurface(sentence: string, from: string, to: string) {
  const swapped = sentence.replace(
    new RegExp(`\\b${escapeRegExp(from)}\\b`, "i"),
    to,
  )
  return swapped === sentence
    ? `The writer used “${to}” when “${from}” was intended.`
    : swapped
}

function buildPairLesson(seed: PairSeed): ConfusingWordLesson | null {
  const [id, firstSurface, secondSurface, difficulty, type] = seed
  const first = wordsBySurface.get(firstSurface)
  const second = wordsBySurface.get(secondSurface)
  if (!first || !second) return null

  const mistake = swapSurface(second.example, second.word, first.word)
  const title = `${titleCase(first.word)} or ${second.word}?`

  return {
    id,
    title,
    summary: `Compare two commonly confused forms and choose the one that matches the intended meaning and grammar.`,
    type,
    difficulty,
    words: [first, second].map((word) => ({
      wordId: word.id,
      word: word.word,
      meaning: word.definition,
      example: word.example,
      collocations: patternsFor(word),
    })),
    quickRule: `${titleCase(first.word)}: ${first.definition} ${titleCase(second.word)}: ${second.definition}`,
    mistake,
    correction: second.example,
    why: `This context needs “${second.word}”, meaning ${second.definition.toLocaleLowerCase("en")}`,
    exception:
      type === "Grammar and usage"
        ? "Usage can change with sentence structure, so check the complete pattern as well as the meaning."
        : undefined,
    choose: {
      prompt: `Which word means “${first.definition}”?`,
      options: [first.word, second.word],
      answer: first.word,
      explanation: `“${first.word}” is correct here: ${first.definition}`,
    },
    fix: {
      prompt: `Choose the sentence that correctly demonstrates “${second.word}”.`,
      options: [mistake, second.example],
      answer: second.example,
      explanation: `The correct sentence uses “${second.word}” with its intended meaning: ${second.definition}`,
    },
  }
}

const manualLessons: ConfusingWordLesson[] = [
  {
    id: "bring-take",
    title: "Bring or take?",
    summary: "Choose the verb by following the direction of movement.",
    type: "Grammar and usage",
    difficulty: "A1",
    words: [
      {
        word: "bring",
        meaning: "move something or someone towards the speaker or destination",
        example: "Please bring your notebook to class tomorrow.",
        collocations: ["bring something to", "bring a friend", "bring back"],
      },
      {
        word: "take",
        meaning:
          "move something or someone away from the speaker or current place",
        example: "Please take these books back to the library.",
        collocations: ["take something to", "take away", "take home"],
      },
    ],
    quickRule:
      "Bring moves towards here or a destination; take moves away from here.",
    mistake: "Can you take your notes here when you come?",
    correction: "Can you bring your notes here when you come?",
    why: "The notes move towards the speaker, so bring is the natural choice.",
    exception:
      "The viewpoint can change: a speaker may say take when thinking about the destination rather than the current place.",
    choose: {
      prompt: "Please ___ this form to my office when you come.",
      options: ["bring", "take"],
      answer: "bring",
      explanation:
        "The form moves towards the speaker's office, so bring is correct.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: [
        "Take an umbrella with you when you leave.",
        "Bring an umbrella with you when you leave.",
      ],
      answer: "Take an umbrella with you when you leave.",
      explanation:
        "The umbrella moves away with the listener, so take is correct.",
    },
  },
  {
    id: "make-do",
    title: "Make or do?",
    summary: "Separate creating a result from performing an activity or task.",
    type: "Grammar and usage",
    difficulty: "A1",
    words: [
      {
        word: "make",
        meaning: "create, produce or cause a result",
        example: "We made a careful plan before the trip.",
        collocations: ["make a plan", "make a mistake", "make progress"],
      },
      {
        word: "do",
        meaning: "perform an activity, task or piece of work",
        example: "I do my homework before dinner.",
        collocations: ["do homework", "do research", "do your best"],
      },
    ],
    quickRule:
      "Make usually creates a result; do usually performs work or an activity.",
    mistake: "I need to make my homework tonight.",
    correction: "I need to do my homework tonight.",
    why: "Homework is a task, and English uses the fixed collocation do homework.",
    exception:
      "Many combinations are fixed collocations, so learn frequent phrases as complete units.",
    choose: {
      prompt: "The team hopes to ___ progress this week.",
      options: ["make", "do"],
      answer: "make",
      explanation: "Make progress is the standard collocation.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: [
        "She did a difficult decision.",
        "She made a difficult decision.",
      ],
      answer: "She made a difficult decision.",
      explanation: "English uses make a decision, not do a decision.",
    },
  },
  {
    id: "look-see-watch",
    title: "Look, see or watch?",
    summary:
      "Separate a deliberate direction of the eyes, visual perception and sustained attention.",
    type: "Grammar and usage",
    difficulty: "A2",
    words: [
      {
        word: "look",
        meaning: "direct your eyes deliberately towards something",
        example: "Look at the diagram on page ten.",
        collocations: ["look at", "look closely", "look away"],
      },
      {
        word: "see",
        meaning: "notice or perceive something with your eyes",
        example: "I can see the mountains from this window.",
        collocations: ["can see", "see clearly", "see someone"],
      },
      {
        word: "watch",
        meaning: "look at something attentively for a period of time",
        example: "We watched the match together.",
        collocations: ["watch television", "watch a match", "watch carefully"],
      },
    ],
    quickRule:
      "Look at something deliberately; see what becomes visible; watch something for a period of time.",
    mistake: "We looked a film after dinner.",
    correction: "We watched a film after dinner.",
    why: "A film continues over time, so watch is the natural verb.",
    exception:
      "See can mean attend a film or performance, especially in ‘go and see’.",
    choose: {
      prompt: "Please ___ at the diagram on page ten.",
      options: ["look", "see", "watch"],
      answer: "look",
      explanation:
        "Look at is used when you deliberately direct your eyes towards something.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: [
        "We looked a film after dinner.",
        "We watched a film after dinner.",
      ],
      answer: "We watched a film after dinner.",
      explanation:
        "Watch is used for something that develops over a period of time.",
    },
  },
  {
    id: "economic-economical",
    title: "Economic or economical?",
    summary: "Separate matters of the economy from choices that avoid waste.",
    type: "Academic English",
    difficulty: "C1",
    words: [
      {
        word: "economic",
        meaning: "connected with the economy, trade, industry or money",
        example: "The report examines the region's economic growth.",
        collocations: ["economic growth", "economic policy", "economic crisis"],
      },
      {
        word: "economical",
        meaning: "using money, fuel, time or other resources without waste",
        example: "This small car is economical to run.",
        collocations: [
          "economical car",
          "economical method",
          "economical with fuel",
        ],
      },
    ],
    quickRule: "Economic concerns the economy; economical means not wasteful.",
    mistake: "The new engine is more economic to run.",
    correction: "The new engine is more economical to run.",
    why: "The sentence describes efficient use of resources, so economical is correct.",
    choose: {
      prompt: "The country is facing serious ___ problems.",
      options: ["economic", "economical"],
      answer: "economic",
      explanation:
        "Problems affecting a country's economy are economic problems.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: [
        "LED lamps are economical to use.",
        "LED lamps are economic to use.",
      ],
      answer: "LED lamps are economical to use.",
      explanation:
        "Economical describes something that avoids waste or expense.",
    },
  },
  {
    id: "imply-infer",
    title: "Imply or infer?",
    summary: "The speaker suggests; the listener reaches a conclusion.",
    type: "Academic English",
    difficulty: "C1",
    words: [
      {
        word: "imply",
        meaning: "suggest something indirectly without stating it openly",
        example: "Her reply implied that the deadline might change.",
        collocations: ["seem to imply", "strongly imply", "imply that"],
      },
      {
        word: "infer",
        meaning: "reach a conclusion from evidence or what has been suggested",
        example:
          "From the empty office, we inferred that the meeting had ended.",
        collocations: ["infer from", "reasonably infer", "infer that"],
      },
    ],
    quickRule: "A writer or speaker implies; a reader or listener infers.",
    mistake: "The data implies that every participant agreed.",
    correction:
      "From the data, the researcher infers that every participant agreed.",
    why: "The researcher draws a conclusion from evidence, so infer is the precise verb.",
    exception:
      "In everyday speech imply is sometimes used loosely, but formal writing keeps the direction clear.",
    choose: {
      prompt: "What can we ___ from these results?",
      options: ["imply", "infer"],
      answer: "infer",
      explanation: "We draw a conclusion from results, so infer is correct.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: [
        "The author implies that the policy failed.",
        "The author infers the reader that the policy failed.",
      ],
      answer: "The author implies that the policy failed.",
      explanation:
        "The author sends an indirect message, so implies is correct.",
    },
  },
  {
    id: "correlation-causation",
    title: "Correlation or causation?",
    summary:
      "An observed relationship does not by itself prove that one factor produces the other.",
    type: "Academic English",
    difficulty: "C2",
    words: [
      {
        word: "correlation",
        meaning:
          "a measurable relationship in which two variables change together",
        example:
          "The study found a correlation between sleep and test performance.",
        collocations: [
          "strong correlation",
          "positive correlation",
          "correlation between",
        ],
      },
      {
        word: "causation",
        meaning:
          "a relationship in which one factor directly produces a change in another",
        example: "A controlled experiment is needed to establish causation.",
        collocations: [
          "establish causation",
          "prove causation",
          "causal relationship",
        ],
      },
    ],
    quickRule:
      "Correlation shows association; causation shows a demonstrated cause-and-effect link.",
    mistake: "The two trends rose together, so the graph proves causation.",
    correction:
      "The two trends rose together, so the graph shows correlation, not necessarily causation.",
    why: "A shared trend may have another explanation and cannot alone establish cause.",
    exception:
      "Causation can be supported by converging evidence, not only one experimental design, but the claim still needs a justified causal method.",
    choose: {
      prompt: "The survey found an association but could not establish ___.",
      options: ["correlation", "causation"],
      answer: "causation",
      explanation:
        "An observational association may show correlation but cannot by itself prove causation.",
    },
    fix: {
      prompt: "Choose the academically careful sentence.",
      options: [
        "The correlation proves that screen time caused the result.",
        "The correlation does not by itself prove that screen time caused the result.",
      ],
      answer:
        "The correlation does not by itself prove that screen time caused the result.",
      explanation:
        "The cautious sentence distinguishes association from a demonstrated causal effect.",
    },
  },
]

const levelRank: ConfusionDifficulty[] = ["A1", "A2", "B1", "B2", "C1", "C2"]
function pairDifficulty(first: Word, second: Word): ConfusionDifficulty {
  const firstLevel = (first.cefr?.level || "B1") as ConfusionDifficulty
  const secondLevel = (second.cefr?.level || "B1") as ConfusionDifficulty
  return (
    levelRank[
      Math.max(levelRank.indexOf(firstLevel), levelRank.indexOf(secondLevel))
    ] || "B1"
  )
}

const explicitLessons = pairSeeds
  .map(buildPairLesson)
  .filter((lesson) => lesson !== null)

// This reviewed list is static so opening the page never performs an expensive
// all-vocabulary edit-distance scan in the visitor's browser.
const automaticPairSurfaces =
  `action|auction,agility|ability,angel|anger,ankle|angle,apple|ample,area|arena,awake|aware,back|bark,baker|bakery,balance|balanced,bald|band,ball|bail,ballet|ballot,bank|bang,basic|basin,battle|bottle,beach|bench,beam|bean,beard|board,beef|beer,bell|belly,belt|beat,bike|bite,black|blank,bland|blind,blog|blow,bloody|blood,boat|bolt,bold|bond,book|boom,boots|boot,bowl|bowel,braid|brain,bridge|bride,brush|bush,butter|bitter,cage|cane,cake|care,calf|call,card|cart,case|cash,castle|cattle,chain|chin,chance|change,chap|chip,chapter|charter,charger|charge,charm|chart,check|cheek,chef|chief,chord|cord,clash|crash,clear|clean,club|clue,coast|cast,coat|coal,code|core,coin|corn,collar|cellar,colon|colony,commuting|computing,concert|concern,concession|confession,content|contest,contract|contact,cool|cook,crowd|crown,curtain|certain,deaf|deal,deer|deep,delay|decay,desk|deck,difficult|difficulty,director|directory,dish|disk,diving|driving,dome|dose,door|donor,draft|drift,driver|drive,drug|drum,dull|doll,easy|east,election|electron,electronic|electronics,employee|employer,eternal|external,experience|experienced,face|fame,factory|factor,fair|fairy,fare|farm,fast|feast,father|feather,favor|favour,fibre|fire,file|film,firm|form,first|fist,flash|flesh,flat|flag,flight|fight,flood|food,fold|folk,fool|foot`
    .split(",")
    .map((pair) => pair.split("|") as [string, string])

const automaticLessons = automaticPairSurfaces
  .map(([firstSurface, secondSurface]) => {
    const first = wordsBySurface.get(firstSurface)
    const second = wordsBySurface.get(secondSurface)
    if (!first || !second) return null
    return buildPairLesson([
      `spelling-${firstSurface}-${secondSurface}`,
      firstSurface,
      secondSurface,
      pairDifficulty(first, second),
      "Similar spelling",
    ])
  })
  .filter((lesson) => lesson !== null)

export const expandedConfusingWordLessons: ConfusingWordLesson[] = [
  ...manualLessons,
  ...explicitLessons,
  ...automaticLessons,
]
