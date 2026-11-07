export interface IpaSound {
  symbol: string
  label: string
  example: string
  mouth: "open" | "rounded" | "smile" | "teeth" | "tongue"
  guidance: string
}

export const ipaSounds: IpaSound[] = [
  {
    symbol: "iː",
    label: "long ee",
    example: "sheep",
    mouth: "smile",
    guidance: "Spread the lips slightly and keep the tongue high and forward.",
  },
  {
    symbol: "ɪ",
    label: "short i",
    example: "ship",
    mouth: "smile",
    guidance: "Relax the lips and lower the tongue a little from /iː/.",
  },
  {
    symbol: "æ",
    label: "short a",
    example: "cat",
    mouth: "open",
    guidance: "Open the jaw and keep the tongue low and forward.",
  },
  {
    symbol: "ʌ",
    label: "short u",
    example: "cup",
    mouth: "open",
    guidance: "Keep the lips neutral and the tongue relaxed in the centre.",
  },
  {
    symbol: "uː",
    label: "long oo",
    example: "food",
    mouth: "rounded",
    guidance: "Round the lips and raise the back of the tongue.",
  },
  {
    symbol: "ɜː",
    label: "long er",
    example: "bird",
    mouth: "open",
    guidance:
      "Keep the lips neutral and the tongue central; do not roll r in UK speech.",
  },
  {
    symbol: "θ",
    label: "unvoiced th",
    example: "think",
    mouth: "tongue",
    guidance: "Place the tongue lightly between the teeth and let air pass.",
  },
  {
    symbol: "ð",
    label: "voiced th",
    example: "this",
    mouth: "tongue",
    guidance: "Use the same position as /θ/, but add vibration in the throat.",
  },
  {
    symbol: "v",
    label: "voiced v",
    example: "very",
    mouth: "teeth",
    guidance: "Touch the top teeth to the lower lip and add voice.",
  },
  {
    symbol: "w",
    label: "w glide",
    example: "west",
    mouth: "rounded",
    guidance: "Round the lips first, then glide quickly into the vowel.",
  },
  {
    symbol: "ʒ",
    label: "zh sound",
    example: "vision",
    mouth: "rounded",
    guidance: "Round the lips slightly and voice a continuous /sh/-like sound.",
  },
  {
    symbol: "ŋ",
    label: "ng sound",
    example: "sing",
    mouth: "open",
    guidance: "Lift the back of the tongue; air leaves through the nose.",
  },
]

export interface PronunciationChallenge {
  id: string
  title: string
  category: "Minimal pairs" | "Word stress" | "Sentence stress" | "Silent letters" | "Connected speech" | "Intonation"
  explanation: string
  listenText: string
  compare: string
  tryText: string
  soraniRelevant: boolean
}

export const pronunciationChallenges: PronunciationChallenge[] = [
  {
    id: "ship-sheep",
    title: "ship / sheep",
    category: "Minimal pairs",
    explanation:
      "Keep /ɪ/ short and relaxed; hold /iː/ longer with wider lips.",
    listenText: "ship, sheep, ship, sheep",
    compare:
      "/ʃɪp/ changes to /ʃiːp/ when the vowel becomes longer and higher.",
    tryText: "The sheep is on the ship.",
    soraniRelevant: true,
  },
  {
    id: "west-vest",
    title: "west / vest",
    category: "Minimal pairs",
    explanation:
      "Start /w/ with rounded lips; make /v/ with teeth on the lower lip.",
    listenText: "west, vest, west, vest",
    compare: "/w/ is a lip glide; /v/ uses friction and voice.",
    tryText: "The vest was sent west.",
    soraniRelevant: true,
  },
  {
    id: "think-sink",
    title: "think / sink",
    category: "Minimal pairs",
    explanation:
      "For /θ/, the tongue is visible between the teeth; /s/ stays behind them.",
    listenText: "think, sink, think, sink",
    compare: "/θ/ uses the tongue between the teeth; /s/ does not.",
    tryText: "Think before the boat can sink.",
    soraniRelevant: true,
  },
  {
    id: "record-stress",
    title: "REcord / reCORD",
    category: "Word stress",
    explanation:
      "The noun stresses the first syllable; the verb stresses the second.",
    listenText: "a record, to record",
    compare:
      "Noun /ˈrek.ɔːd/ contrasts with verb /rɪˈkɔːd/ in common careful speech.",
    tryText: "Record the new record.",
    soraniRelevant: false,
  },
  {
    id: "photograph-family",
    title: "PHOtograph / phoTOgraphy",
    category: "Word stress",
    explanation: "Stress can move when a suffix changes the word family.",
    listenText: "photograph, photography, photographic",
    compare: "Notice how the strongest syllable moves across the word family.",
    tryText: "The photographer studied photography.",
    soraniRelevant: true,
  },
  {
    id: "new-information",
    title: "Stress the new information",
    category: "Sentence stress",
    explanation:
      "English usually gives extra prominence to the new or contrasting word.",
    listenText: "I ordered the BLUE notebook, not the black one.",
    compare: "BLUE carries the contrast; small grammar words stay weaker.",
    tryText: "She needs the MORNING bus, not the evening bus.",
    soraniRelevant: true,
  },
  {
    id: "silent-k",
    title: "Silent k in know",
    category: "Silent letters",
    explanation:
      "The written k is not pronounced before n in know, knee and knife.",
    listenText: "know, knee, knife",
    compare: "Begin directly with /n/; do not release a /k/ sound.",
    tryText: "I know the knife is near my knee.",
    soraniRelevant: false,
  },
  {
    id: "linking-consonant-vowel",
    title: "Link consonant to vowel",
    category: "Connected speech",
    explanation:
      "A final consonant often links smoothly to the next word's vowel.",
    listenText: "pick it up",
    compare:
      "Careful connected speech sounds like pick-it-up, without three separate starts.",
    tryText: "Turn it off and pick it up.",
    soraniRelevant: true,
  },
  {
    id: "weak-forms",
    title: "Weak forms in a sentence",
    category: "Connected speech",
    explanation: "Unstressed grammar words often use the central vowel /ə/.",
    listenText: "I can go to the library.",
    compare: "Can and to become weaker while library carries the main stress.",
    tryText: "We can meet at the station.",
    soraniRelevant: true,
  },
  {
    id: "question-intonation",
    title: "Falling and rising questions",
    category: "Intonation",
    explanation:
      "Wh-questions often fall; yes/no questions commonly rise in neutral speech.",
    listenText: "Where are you going? Are you going home?",
    compare:
      "The first question falls; the second rises when it is a neutral check.",
    tryText: "What time is it? Is it five o'clock?",
    soraniRelevant: true,
  },
]
