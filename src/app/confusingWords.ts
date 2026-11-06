export interface ConfusingWordSide {
  wordId: string
  word: string
  meaning: string
  example: string
}

export interface ConfusingWordLesson {
  id: string
  title: string
  summary: string
  words: readonly [ConfusingWordSide, ConfusingWordSide]
  practice: {
    prompt: string
    answer: string
    explanation: string
  }
}

export const confusingWordLessons: ConfusingWordLesson[] = [
  {
    id: "house-home",
    title: "House or home?",
    summary: "A building is not always the same as the place where you belong.",
    words: [
      {
        wordId: "house",
        word: "house",
        meaning: "the building where people live",
        example: "Their house has a blue front door.",
      },
      {
        wordId: "batch-022--home",
        word: "home",
        meaning: "the place where someone lives or feels they belong",
        example: "After the trip, I was happy to be home.",
      },
    ],
    practice: {
      prompt: "After a long day, Mina went ___.",
      answer: "home",
      explanation:
        "Use “home” after go without the preposition “to”: went home.",
    },
  },
  {
    id: "principal-principle",
    title: "Principal or principle?",
    summary:
      "One can be a person or the main thing; the other is a rule or belief.",
    words: [
      {
        wordId: "school--principal",
        word: "principal",
        meaning: "the head of a school, or the main or most important thing",
        example: "The principal welcomed the new students.",
      },
      {
        wordId: "batch-027--principle",
        word: "principle",
        meaning: "a basic rule, belief, or idea",
        example: "Fairness is an important principle in our classroom.",
      },
    ],
    practice: {
      prompt: "The design follows one simple ___.",
      answer: "principle",
      explanation: "A rule or basic idea is a “principle”.",
    },
  },
  {
    id: "price-prize",
    title: "Price or prize?",
    summary: "One is a cost; the other is a reward.",
    words: [
      {
        wordId: "batch-027--price",
        word: "price",
        meaning: "the amount of money needed to buy something",
        example: "The price of the ticket includes lunch.",
      },
      {
        wordId: "batch-027--prize",
        word: "prize",
        meaning: "something given to a winner",
        example: "She won first prize in the writing competition.",
      },
    ],
    practice: {
      prompt: "The winner received a special ___.",
      answer: "prize",
      explanation: "A winner receives a “prize”; a product has a “price”.",
    },
  },
  {
    id: "food-meal",
    title: "Food or meal?",
    summary: "Food is what we eat; a meal is an occasion when we eat it.",
    words: [
      {
        wordId: "batch-021--food",
        word: "food",
        meaning: "things that people or animals eat",
        example: "We bought some fresh food at the market.",
      },
      {
        wordId: "batch-024--meal",
        word: "meal",
        meaning: "an occasion when food is eaten, such as breakfast or dinner",
        example: "Breakfast is my first meal of the day.",
      },
    ],
    practice: {
      prompt: "We shared a delicious ___ after the event.",
      answer: "meal",
      explanation: "Use the countable noun “meal” for one eating occasion.",
    },
  },
  {
    id: "fun-funny",
    title: "Fun or funny?",
    summary: "An enjoyable activity is fun; something amusing is funny.",
    words: [
      {
        wordId: "batch-021--fun",
        word: "fun",
        meaning: "enjoyment, or something enjoyable",
        example: "The vocabulary game was great fun.",
      },
      {
        wordId: "batch-011--funny",
        word: "funny",
        meaning: "amusing, or sometimes strange",
        example: "His funny story made everyone laugh.",
      },
    ],
    practice: {
      prompt: "That joke was really ___.",
      answer: "funny",
      explanation: "Something that makes people laugh is “funny”.",
    },
  },
]
