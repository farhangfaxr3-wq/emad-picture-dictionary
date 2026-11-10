export type ConfusionType = "Meaning" | "Similar spelling" | "Sound-alike" | "Grammar and usage" | "Academic English"

import { expandedConfusingWordLessons } from "./confusingWordsExpansion"

export type ConfusionDifficulty = "A1" | "A2" | "B1" | "B2" | "C1" | "C2"

export interface ConfusingWordSide {
  wordId?: string
  word: string
  meaning: string
  example: string
  collocations: string[]
}

export interface ChoiceChallenge {
  prompt: string
  options: string[]
  answer: string
  explanation: string
}

export interface ConfusingWordLesson {
  id: string
  title: string
  summary: string
  type: ConfusionType
  difficulty: ConfusionDifficulty
  words: ConfusingWordSide[]
  quickRule: string
  mistake: string
  correction: string
  why: string
  exception?: string
  choose: ChoiceChallenge
  fix: ChoiceChallenge
}

const coreConfusingWordLessons: ConfusingWordLesson[] = [
  {
    id: "affect-effect",
    title: "Affect or effect?",
    summary: "A verb that changes something is different from its result.",
    type: "Academic English",
    difficulty: "B2",
    words: [
      {
        word: "affect",
        meaning: "usually a verb meaning to influence or change something",
        example: "Lack of sleep can affect your concentration.",
        collocations: [
          "affect performance",
          "deeply affect",
          "affect the outcome",
        ],
      },
      {
        wordId: "batch-020--effect",
        word: "effect",
        meaning: "usually a noun meaning a result or consequence",
        example: "The new timetable had a positive effect on attendance.",
        collocations: ["have an effect", "side effect", "long-term effect"],
      },
    ],
    quickRule: "Most of the time: affect is the action; effect is the result.",
    mistake: "The weather had a bad affect on the match.",
    correction: "The weather had a bad effect on the match.",
    why: "After “a bad” we need the noun effect, meaning result.",
    exception:
      "Effect can be a formal verb meaning “bring about”, as in “effect change”.",
    choose: {
      prompt: "The medicine may ___ your ability to drive.",
      options: ["affect", "effect"],
      answer: "affect",
      explanation:
        "The blank needs a verb meaning influence, so affect is correct.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: [
        "The policy had little affect on prices.",
        "The policy had little effect on prices.",
      ],
      answer: "The policy had little effect on prices.",
      explanation: "Effect is the noun after “little” and means result.",
    },
  },
  {
    id: "borrow-lend",
    title: "Borrow or lend?",
    summary:
      "The same object moves in opposite directions depending on the speaker.",
    type: "Grammar and usage",
    difficulty: "A2",
    words: [
      {
        word: "borrow",
        meaning: "to take and use something temporarily, then return it",
        example: "Can I borrow your charger for ten minutes?",
        collocations: ["borrow from", "borrow money", "borrow a book"],
      },
      {
        word: "lend",
        meaning: "to give someone something temporarily, expecting it back",
        example: "I can lend you my charger after class.",
        collocations: ["lend to", "lend a hand", "lend someone money"],
      },
    ],
    quickRule: "Borrow from someone; lend something to someone.",
    mistake: "Could you borrow me a pen?",
    correction: "Could you lend me a pen?",
    why: "The other person gives the pen to you, so they lend it.",
    choose: {
      prompt: "I need to ___ a laptop from the library.",
      options: ["borrow", "lend"],
      answer: "borrow",
      explanation: "You receive the laptop temporarily, so you borrow it.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["She lent the book to me.", "She borrowed the book to me."],
      answer: "She lent the book to me.",
      explanation: "She gave it temporarily; therefore she lent it.",
    },
  },
  {
    id: "cite-site-sight",
    title: "Cite, site or sight?",
    summary: "These sound alike but refer to sources, places and seeing.",
    type: "Sound-alike",
    difficulty: "B2",
    words: [
      {
        word: "cite",
        meaning: "to name a source as evidence in speaking or writing",
        example: "Remember to cite the journal article in your report.",
        collocations: ["cite a source", "widely cited", "cite evidence"],
      },
      {
        word: "site",
        meaning: "a place where something is located or built",
        example: "The team visited the construction site.",
        collocations: ["building site", "historic site", "on site"],
      },
      {
        word: "sight",
        meaning: "the ability to see, or something that is seen",
        example: "The mountain was an impressive sight at sunrise.",
        collocations: ["lose sight of", "at first sight", "within sight"],
      },
    ],
    quickRule: "Cite a source, visit a site, and see a sight.",
    mistake: "The essay did not site any evidence.",
    correction: "The essay did not cite any evidence.",
    why: "Referring to evidence requires the verb cite.",
    choose: {
      prompt: "The castle is a popular tourist ___.",
      options: ["cite", "site", "sight"],
      answer: "site",
      explanation: "A physical place is a site.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["Please cite your sources.", "Please sight your sources."],
      answer: "Please cite your sources.",
      explanation: "Cite means to identify the source of information.",
    },
  },
  {
    id: "say-tell-speak-talk",
    title: "Say, tell, speak or talk?",
    summary: "Four communication verbs use different objects and patterns.",
    type: "Grammar and usage",
    difficulty: "B1",
    words: [
      {
        word: "say",
        meaning: "to express words; the listener is usually introduced with to",
        example: "She said that the meeting had ended.",
        collocations: ["say something", "say to someone", "say hello"],
      },
      {
        word: "tell",
        meaning:
          "to give information to someone; it normally takes a person object",
        example: "Please tell me when the bus arrives.",
        collocations: ["tell someone", "tell the truth", "tell a story"],
      },
      {
        word: "speak",
        meaning: "to use a language or communicate, often in a formal context",
        example: "He speaks English and Kurdish at work.",
        collocations: ["speak a language", "speak to", "speak publicly"],
      },
      {
        word: "talk",
        meaning: "to have a conversation, usually in an informal context",
        example: "We talked about the project after class.",
        collocations: ["talk to", "talk about", "have a talk"],
      },
    ],
    quickRule: "Say words; tell someone; speak a language; talk with people.",
    mistake: "She said me the answer.",
    correction: "She told me the answer.",
    why: "A person directly after the verb requires tell, not say.",
    exception: "Say can name a listener with to: “She said hello to me.”",
    choose: {
      prompt: "Could you ___ me the time?",
      options: ["say", "tell", "speak", "talk"],
      answer: "tell",
      explanation:
        "Tell is followed directly by the person receiving information.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["We talked about the exam.", "We said about the exam."],
      answer: "We talked about the exam.",
      explanation: "Use talk about for a conversation on a topic.",
    },
  },
  {
    id: "house-home",
    title: "House or home?",
    summary: "A building is not always the same as the place where you belong.",
    type: "Meaning",
    difficulty: "A2",
    words: [
      {
        wordId: "house",
        word: "house",
        meaning: "the building where people live",
        example: "Their house has a blue front door.",
        collocations: ["detached house", "move house", "house prices"],
      },
      {
        wordId: "batch-022--home",
        word: "home",
        meaning: "the place where someone lives or feels they belong",
        example: "After the trip, I was happy to be home.",
        collocations: ["go home", "feel at home", "home town"],
      },
    ],
    quickRule:
      "House is a building; home is the place and feeling of belonging.",
    mistake: "After work, I went to home.",
    correction: "After work, I went home.",
    why: "Home is used without to after verbs of movement such as go and come.",
    choose: {
      prompt: "After a long day, Mina went ___.",
      options: ["house", "home"],
      answer: "home",
      explanation: "Use home after went without the preposition to.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["We went home early.", "We went to home early."],
      answer: "We went home early.",
      explanation: "Go home is the standard pattern.",
    },
  },
  {
    id: "principal-principle",
    title: "Principal or principle?",
    summary:
      "One can be a person or the main thing; the other is a rule or belief.",
    type: "Similar spelling",
    difficulty: "B2",
    words: [
      {
        wordId: "school--principal",
        word: "principal",
        meaning: "the head of a school, or the main or most important thing",
        example: "The principal welcomed the new students.",
        collocations: [
          "school principal",
          "principal reason",
          "principal amount",
        ],
      },
      {
        wordId: "batch-027--principle",
        word: "principle",
        meaning: "a basic rule, belief or idea",
        example: "Fairness is an important principle in our classroom.",
        collocations: ["basic principle", "moral principle", "in principle"],
      },
    ],
    quickRule: "A principal can be a person; a principle is a rule.",
    mistake: "Safety is our main principal.",
    correction: "Safety is our main principle.",
    why: "The sentence refers to a guiding rule, so principle is required.",
    choose: {
      prompt: "The design follows one simple ___.",
      options: ["principal", "principle"],
      answer: "principle",
      explanation: "A rule or basic idea is a principle.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["The principal spoke to us.", "The principle spoke to us."],
      answer: "The principal spoke to us.",
      explanation: "A school leader is the principal.",
    },
  },
  {
    id: "price-prize",
    title: "Price or prize?",
    summary: "One is a cost; the other is a reward.",
    type: "Similar spelling",
    difficulty: "A2",
    words: [
      {
        wordId: "batch-027--price",
        word: "price",
        meaning: "the amount of money needed to buy something",
        example: "The price of the ticket includes lunch.",
        collocations: ["high price", "price tag", "at a price"],
      },
      {
        wordId: "batch-027--prize",
        word: "prize",
        meaning: "something given to a winner",
        example: "She won first prize in the writing competition.",
        collocations: ["win a prize", "first prize", "prize money"],
      },
    ],
    quickRule: "You pay a price; you win a prize.",
    mistake: "The winner received a cash price.",
    correction: "The winner received a cash prize.",
    why: "A reward for winning is a prize.",
    choose: {
      prompt: "The winner received a special ___.",
      options: ["price", "prize"],
      answer: "prize",
      explanation: "A winner receives a prize; a product has a price.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["What is the price?", "What is the prize?"],
      answer: "What is the price?",
      explanation: "A question about cost uses price.",
    },
  },
  {
    id: "food-meal",
    title: "Food or meal?",
    summary: "Food is what we eat; a meal is an occasion when we eat it.",
    type: "Meaning",
    difficulty: "A2",
    words: [
      {
        wordId: "batch-021--food",
        word: "food",
        meaning: "things that people or animals eat",
        example: "We bought some fresh food at the market.",
        collocations: ["healthy food", "food safety", "fast food"],
      },
      {
        wordId: "batch-024--meal",
        word: "meal",
        meaning: "an occasion when food is eaten, such as breakfast or dinner",
        example: "Breakfast is my first meal of the day.",
        collocations: ["have a meal", "evening meal", "three-course meal"],
      },
    ],
    quickRule: "Food is material; a meal is one eating occasion.",
    mistake: "We had three foods yesterday.",
    correction: "We had three meals yesterday.",
    why: "Count the eating occasions with meals, not the general noun food.",
    choose: {
      prompt: "We shared a delicious ___ after the event.",
      options: ["food", "meal"],
      answer: "meal",
      explanation: "Meal is the countable noun for one eating occasion.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["The food was fresh.", "The meal was fresh foods."],
      answer: "The food was fresh.",
      explanation: "Food is normally uncountable when speaking generally.",
    },
  },
  {
    id: "fun-funny",
    title: "Fun or funny?",
    summary: "An enjoyable activity is fun; something amusing is funny.",
    type: "Similar spelling",
    difficulty: "A2",
    words: [
      {
        wordId: "batch-021--fun",
        word: "fun",
        meaning: "enjoyment, or something enjoyable",
        example: "The vocabulary game was great fun.",
        collocations: ["have fun", "good fun", "fun activity"],
      },
      {
        wordId: "batch-011--funny",
        word: "funny",
        meaning: "amusing, or sometimes strange",
        example: "His funny story made everyone laugh.",
        collocations: ["funny story", "funny joke", "feel funny"],
      },
    ],
    quickRule: "Fun describes enjoyment; funny describes what makes you laugh.",
    mistake: "The trip was very funny.",
    correction: "The trip was great fun.",
    why: "If the trip was enjoyable rather than amusing, fun is the intended meaning.",
    exception: "Funny can also mean strange: “The engine sounds funny.”",
    choose: {
      prompt: "That joke was really ___.",
      options: ["fun", "funny"],
      answer: "funny",
      explanation: "Something that makes people laugh is funny.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["We had fun at the festival.", "We had funny at the festival."],
      answer: "We had fun at the festival.",
      explanation: "Have fun is the correct expression for enjoyment.",
    },
  },
  {
    id: "advice-advise",
    title: "Advice or advise?",
    summary: "The noun ends with an /s/ sound; the verb ends with /z/.",
    type: "Similar spelling",
    difficulty: "B1",
    words: [
      {
        wordId: "batch-014--advice",
        word: "advice",
        meaning: "a noun meaning a recommendation about what to do",
        example: "My tutor gave me useful advice about the interview.",
        collocations: ["give advice", "take advice", "a piece of advice"],
      },
      {
        word: "advise",
        meaning: "a verb meaning to recommend a course of action",
        example: "Doctors advise patients to rest after the procedure.",
        collocations: ["advise someone", "strongly advise", "advise against"],
      },
    ],
    quickRule: "Advice is the thing; advise is the action.",
    mistake: "She gave me a useful advise.",
    correction: "She gave me useful advice.",
    why: "Give requires the noun advice, which is normally uncountable.",
    choose: {
      prompt: "I would ___ you to apply early.",
      options: ["advice", "advise"],
      answer: "advise",
      explanation: "Would is followed by the base form of a verb: advise.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["Can you give me advice?", "Can you give me an advice?"],
      answer: "Can you give me advice?",
      explanation: "Advice is uncountable; use a piece of advice to count it.",
    },
  },
  {
    id: "desert-dessert",
    title: "Desert or dessert?",
    summary:
      "A dry landscape and a sweet course differ by one letter and stress.",
    type: "Similar spelling",
    difficulty: "B1",
    words: [
      {
        wordId: "nature--desert",
        word: "desert",
        meaning: "a very dry region with little rain or vegetation",
        example: "Few plants can survive in this desert.",
        collocations: ["desert climate", "cross the desert", "desert region"],
      },
      {
        word: "dessert",
        meaning: "sweet food eaten at the end of a meal",
        example: "We ordered fruit and ice cream for dessert.",
        collocations: ["for dessert", "dessert menu", "sweet dessert"],
      },
    ],
    quickRule: "Dessert has two s letters because many people want seconds.",
    mistake: "We had cake for desert.",
    correction: "We had cake for dessert.",
    why: "Cake is the sweet final course, so dessert is correct.",
    choose: {
      prompt: "The Sahara is a vast ___.",
      options: ["desert", "dessert"],
      answer: "desert",
      explanation: "A dry region is a desert.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["We shared a dessert.", "We shared a desert."],
      answer: "We shared a dessert.",
      explanation: "Sweet food after a meal is dessert.",
    },
  },
  {
    id: "lose-loose",
    title: "Lose or loose?",
    summary: "One verb means no longer have; one adjective means not tight.",
    type: "Similar spelling",
    difficulty: "B1",
    words: [
      {
        word: "lose",
        meaning: "a verb meaning to misplace, fail to keep or not win",
        example: "Be careful not to lose your ticket.",
        collocations: ["lose time", "lose a match", "lose control"],
      },
      {
        wordId: "clothing--loose",
        word: "loose",
        meaning: "an adjective meaning not firmly fixed or not tight",
        example: "This shirt feels loose around the shoulders.",
        collocations: ["loose clothing", "come loose", "loose connection"],
      },
    ],
    quickRule:
      "Lose has one o and is a verb; loose has two and rhymes with goose.",
    mistake: "Do not loose your passport.",
    correction: "Do not lose your passport.",
    why: "The intended verb means no longer have, so lose is correct.",
    choose: {
      prompt: "This screw is too ___.",
      options: ["lose", "loose"],
      answer: "loose",
      explanation: "Not firmly fixed means loose.",
    },
    fix: {
      prompt: "Choose the corrected sentence.",
      options: ["Try not to lose the key.", "Try not to loose the key."],
      answer: "Try not to lose the key.",
      explanation: "Lose is the verb for no longer having something.",
    },
  },
]

export const confusingWordLessons: ConfusingWordLesson[] = [
  ...coreConfusingWordLessons,
  ...expandedConfusingWordLessons,
]
