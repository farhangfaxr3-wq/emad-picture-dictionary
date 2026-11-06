import type { Word, WordLearningDetails } from "./content"

const reviewed = true as const

const notesById: Record<string, WordLearningDetails> = {
  house: {
    reviewed,
    collocations: ["buy a house", "move house", "house prices"],
    wordFamily: [
      { form: "house", role: "noun / verb" },
      { form: "housing", role: "noun" },
      { form: "household", role: "noun / adjective" },
    ],
    grammarPatterns: [
      "live in a house",
      "go to someone's house",
      "a house with a garden",
    ],
    register: "Neutral. “Move house” is especially common in British English.",
    commonMistakes: [
      "A house is a building. Home is the place where someone lives or feels they belong.",
      "Say “go home”, not “go to home”.",
    ],
  },
  "batch-022--home": {
    reviewed,
    collocations: ["go home", "at home", "feel at home"],
    wordFamily: [
      { form: "home", role: "noun / adverb / adjective" },
      { form: "homeless", role: "adjective" },
      { form: "homeowner", role: "noun" },
    ],
    grammarPatterns: [
      "go / come / get home",
      "be at home",
      "make yourself at home",
    ],
    register: "Neutral and common in everyday English.",
    commonMistakes: [
      "Do not add “to” after go, come, or get: “We went home.”",
      "Home can be any place where a person lives; it is not limited to a house.",
    ],
  },
  "school--principal": {
    reviewed,
    collocations: ["school principal", "principal reason", "principal amount"],
    wordFamily: [
      { form: "principal", role: "noun / adjective" },
      { form: "principally", role: "adverb" },
    ],
    grammarPatterns: [
      "the principal of a school",
      "the principal reason for something",
    ],
    register: "Neutral; common in education, finance, and formal explanation.",
    commonMistakes: [
      "Principal means a main person, a main thing, or an amount of money. Principle means a rule or belief.",
    ],
  },
  "batch-027--principle": {
    reviewed,
    collocations: ["guiding principle", "in principle", "matter of principle"],
    wordFamily: [
      { form: "principle", role: "noun" },
      { form: "principled", role: "adjective" },
    ],
    grammarPatterns: [
      "the principle of something",
      "agree in principle",
      "do something on principle",
    ],
    register: "Neutral; frequent in academic and formal contexts.",
    commonMistakes: [
      "Principle is a rule or belief. Principal can mean the head of a school or the main thing.",
    ],
  },
  "batch-027--price": {
    reviewed,
    collocations: ["fixed price", "price range", "pay a high price"],
    wordFamily: [
      { form: "price", role: "noun / verb" },
      { form: "pricey", role: "adjective, informal" },
      { form: "priceless", role: "adjective" },
    ],
    grammarPatterns: ["the price of something", "at a price", "priced at £20"],
    register: "Neutral. “Pricey” is informal.",
    commonMistakes: [
      "Price is the amount something costs. Prize is something awarded to a winner.",
    ],
  },
  "batch-027--prize": {
    reviewed,
    collocations: ["win a prize", "first prize", "prize money"],
    wordFamily: [
      { form: "prize", role: "noun / adjective / verb" },
      { form: "prize-winning", role: "adjective" },
    ],
    grammarPatterns: ["a prize for something", "award someone a prize"],
    register: "Neutral and common in competitions and awards.",
    commonMistakes: [
      "Prize is a reward for success. Price tells you how much something costs.",
    ],
  },
  "batch-021--food": {
    reviewed,
    collocations: ["fresh food", "fast food", "food waste"],
    wordFamily: [
      { form: "food", role: "noun, usually uncountable" },
      { form: "foodie", role: "noun, informal" },
    ],
    grammarPatterns: ["some food", "a type of food", "food for someone"],
    register: "Neutral. “Foodie” is informal.",
    commonMistakes: [
      "Food is usually uncountable: say “some food”, not “a food”, unless you mean a type of food.",
      "A meal is one occasion when you eat; food is what you eat.",
    ],
  },
  "batch-024--meal": {
    reviewed,
    collocations: ["have a meal", "main meal", "cook a meal"],
    wordFamily: [{ form: "meal", role: "countable noun" }],
    grammarPatterns: [
      "a meal for someone",
      "a meal of something",
      "at mealtimes",
    ],
    register: "Neutral and common in everyday English.",
    commonMistakes: [
      "Meal is countable: “We had a meal.” Food is usually uncountable: “We bought some food.”",
    ],
  },
  "batch-021--fun": {
    reviewed,
    collocations: ["have fun", "for fun", "a fun activity"],
    wordFamily: [
      { form: "fun", role: "noun / adjective" },
      { form: "funny", role: "adjective" },
    ],
    grammarPatterns: ["have fun doing something", "do something for fun"],
    register:
      "Neutral in everyday English; less common in very formal writing.",
    commonMistakes: [
      "Fun means enjoyable. Funny usually means amusing, but it can also mean strange.",
    ],
  },
  "batch-011--funny": {
    reviewed,
    collocations: ["funny story", "funny joke", "feel funny"],
    wordFamily: [
      { form: "funny", role: "adjective" },
      { form: "funnily", role: "adverb" },
    ],
    grammarPatterns: [
      "find something funny",
      "It is funny that …",
      "feel funny",
    ],
    register:
      "Neutral in conversation. In “feel funny”, it means strange or slightly unwell.",
    commonMistakes: [
      "Use fun for an enjoyable experience: “The trip was fun.” Use funny for something that makes you laugh: “The joke was funny.”",
    ],
  },
}

export function applyWordLearningNotes(words: Word[]): Word[] {
  return words.map((word) => {
    const learningDetails = notesById[word.id]
    return learningDetails ? { ...word, learningDetails } : word
  })
}

export const reviewedWordLearningNoteIds = Object.freeze(Object.keys(notesById))
