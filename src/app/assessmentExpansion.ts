import type { AssessmentQuestion } from "./assessment"

type QuestionSeed = Omit<AssessmentQuestion, "bankVersion">

const questions: QuestionSeed[] = [
  {
    id: "g-a1-there-is",
    skill: "grammar",
    level: "A1",
    questionType: "grammar",
    prompt: "Choose the correct sentence.",
    options: [
      "There is a book on the desk.",
      "There are a book on the desk.",
      "There be a book on the desk.",
      "There am a book on the desk.",
    ],
    correctIndex: 0,
    explanation: "Use “there is” before one singular thing.",
  },
  {
    id: "g-a1-can",
    skill: "grammar",
    level: "A1",
    questionType: "grammar",
    prompt: "My sister ___ swim very well.",
    options: ["can", "cans", "can to", "is can"],
    correctIndex: 0,
    explanation:
      "The modal verb “can” is followed by the base form of the verb.",
  },
  {
    id: "g-a2-comparative",
    skill: "grammar",
    level: "A2",
    questionType: "grammar",
    prompt: "This road is ___ than the old one.",
    options: ["wide", "wider", "widest", "more wide"],
    correctIndex: 1,
    explanation:
      "The comparative form of the short adjective “wide” is “wider.”",
  },
  {
    id: "g-a2-going-to",
    skill: "grammar",
    level: "A2",
    questionType: "grammar",
    prompt: "Look at those dark clouds! It ___ rain.",
    options: ["goes to", "is going to", "will going", "is go to"],
    correctIndex: 1,
    explanation:
      "Use “be going to” for a prediction based on present evidence.",
  },
  {
    id: "g-b1-relative-clause",
    skill: "grammar",
    level: "B1",
    questionType: "grammar",
    prompt: "The woman ___ teaches us science is from Erbil.",
    options: ["which", "whose", "who", "where"],
    correctIndex: 2,
    explanation:
      "Use “who” as the subject of a relative clause referring to a person.",
  },
  {
    id: "g-b1-used-to",
    skill: "grammar",
    level: "B1",
    questionType: "grammar",
    prompt: "I ___ play outside every evening when I was a child.",
    options: ["use", "used to", "am used", "was using to"],
    correctIndex: 1,
    explanation:
      "“Used to” describes a repeated past habit that is no longer true.",
  },
  {
    id: "g-b2-third-conditional",
    skill: "grammar",
    level: "B2",
    questionType: "grammar",
    prompt: "If we had left earlier, we ___ the train.",
    options: ["would catch", "would have caught", "caught", "had caught"],
    correctIndex: 1,
    explanation:
      "The third conditional uses “had” plus a past participle, then “would have” plus a past participle.",
  },
  {
    id: "g-b2-passive-reporting",
    skill: "grammar",
    level: "B2",
    questionType: "grammar",
    prompt:
      "Choose the best formal rewrite: People believe the painting is authentic.",
    options: [
      "The painting believes to be authentic.",
      "The painting is believed to be authentic.",
      "The painting was believing authentic.",
      "The painting is belief as authentic.",
    ],
    correctIndex: 1,
    explanation:
      "The passive reporting structure is “subject + be + past participle + to-infinitive.”",
  },
  {
    id: "g-c1-cleft-sentence",
    skill: "grammar",
    level: "C1",
    questionType: "grammar",
    prompt:
      "Choose the sentence that correctly emphasizes the time of the discovery.",
    options: [
      "It was in 2019 that the team discovered the error.",
      "It in 2019 was that the team discovered the error.",
      "That was 2019 the team discovered the error.",
      "It was that in 2019 discovered the team the error.",
    ],
    correctIndex: 0,
    explanation:
      "An it-cleft uses “It was + emphasized element + that + clause.”",
  },
  {
    id: "g-c1-participle-clause",
    skill: "grammar",
    level: "C1",
    questionType: "grammar",
    prompt: "___ all the evidence, the panel postponed its decision.",
    options: ["Reviewing", "Reviewed", "To have review", "Having reviewed"],
    correctIndex: 3,
    explanation:
      "“Having reviewed” shows that the review was completed before the panel postponed its decision.",
  },
  {
    id: "g-c2-modal-perfect",
    skill: "grammar",
    level: "C2",
    questionType: "grammar",
    prompt:
      "The figures are inconsistent; the analyst ___ an earlier dataset by mistake.",
    options: ["must use", "must have used", "had to use", "would use"],
    correctIndex: 1,
    explanation:
      "“Must have used” expresses a strong deduction about a completed past action.",
  },
  {
    id: "g-c2-concessive-inversion",
    skill: "grammar",
    level: "C2",
    questionType: "grammar",
    prompt: "Choose the grammatically correct concessive sentence.",
    options: [
      "Complex although the issue was, the team resolved it.",
      "Complex as the issue was, the team resolved it.",
      "As complex the issue was, the team resolved it.",
      "The issue as was complex, the team resolved it.",
    ],
    correctIndex: 1,
    explanation:
      "Formal concessive inversion can use “adjective + as + subject + verb.”",
  },

  {
    id: "r-a1-cafe-hours",
    skill: "reading",
    level: "A1",
    questionType: "reading-comprehension",
    prompt: "When does the café close on Friday?",
    options: ["At four", "At five", "At six", "At seven"],
    correctIndex: 2,
    explanation: "The notice says the café closes at six on Friday.",
    passage:
      "Campus café: Open Monday to Thursday until 5:00. On Friday, we close at 6:00.",
  },
  {
    id: "r-a2-club-meeting",
    skill: "reading",
    level: "A2",
    questionType: "reading-comprehension",
    prompt: "What should new members bring?",
    options: ["A photograph", "A notebook", "Some food", "A sports uniform"],
    correctIndex: 1,
    explanation: "The message asks new members to bring a notebook.",
    passage:
      "The English Club meets in Room 12 every Tuesday at 3:30. New members are welcome. Please bring a notebook, but you do not need to prepare anything before your first meeting.",
  },
  {
    id: "r-b1-community-garden",
    skill: "reading",
    level: "B1",
    questionType: "reading-comprehension",
    prompt: "Why did the organizers introduce a booking system?",
    options: [
      "To sell vegetables online",
      "To make fair use of the limited space",
      "To reduce the number of volunteers",
      "To close the garden during winter",
    ],
    correctIndex: 1,
    explanation:
      "The plots were limited, so booking allowed residents to share them fairly.",
    passage:
      "The community garden became more popular than expected, but it had only twelve growing plots. Organizers introduced an online booking system so residents could reserve two-hour sessions. This allowed more families to use the limited space fairly.",
  },
  {
    id: "r-b2-remote-consultations",
    skill: "reading",
    level: "B2",
    questionType: "reading-comprehension",
    prompt: "What is the writer's main argument?",
    options: [
      "Remote consultations should replace every clinic visit.",
      "Digital appointments are unsuitable for routine questions.",
      "Remote care is useful when matched to the right situation.",
      "Technology has made medical staff unnecessary.",
    ],
    correctIndex: 2,
    explanation:
      "The passage supports remote care for suitable cases while preserving in-person examination when needed.",
    passage:
      "Remote consultations can save travel time and help patients ask routine questions quickly. They are not appropriate for every case, however, because some symptoms require a physical examination. The most effective services decide carefully which type of appointment each patient needs.",
  },
  {
    id: "r-b2-library-redesign",
    skill: "reading",
    level: "B2",
    questionType: "reading-comprehension",
    prompt: "Which outcome surprised the library staff?",
    options: [
      "Students stopped borrowing books.",
      "Quiet-zone use increased after more group rooms opened.",
      "The redesign cost less than expected.",
      "Group rooms were never used.",
    ],
    correctIndex: 1,
    explanation:
      "Staff expected more group work, but were surprised that quiet-zone use also rose.",
    passage:
      "The university library converted one floor into reservable group rooms. Staff expected collaborative study to increase, but they also noticed an unexpected rise in the use of quiet zones. With conversations moved into enclosed rooms, the rest of the building became calmer.",
  },
  {
    id: "r-c1-research-replication",
    skill: "reading",
    level: "C1",
    questionType: "reading-comprehension",
    prompt: "What does the passage imply about a failed replication?",
    options: [
      "It automatically proves fraud.",
      "It can reveal limits in how broadly a result applies.",
      "It has no value unless the original authors agree.",
      "It always means the new study was badly designed.",
    ],
    correctIndex: 1,
    explanation:
      "The passage says failed replication may expose conditions under which an original finding does not hold.",
    passage:
      "Replication is sometimes described as a test that research either passes or fails. In practice, a different result may expose hidden assumptions, measurement differences, or conditions under which the original finding does not generalize. Careful replication therefore refines knowledge even when it does not reproduce an earlier effect.",
  },
  {
    id: "r-c1-public-consultation",
    skill: "reading",
    level: "C1",
    questionType: "reading-comprehension",
    prompt: "Which criticism does the writer make?",
    options: [
      "Public consultation always delays necessary projects.",
      "Collecting responses is insufficient if they do not influence decisions.",
      "Technical evidence should never be shared with the public.",
      "Only experts should comment on local planning.",
    ],
    correctIndex: 1,
    explanation:
      "The writer distinguishes genuine participation from merely collecting comments.",
    passage:
      "A consultation cannot be judged solely by the number of responses it receives. If the process begins after every important choice has already been made, participation becomes symbolic. Meaningful consultation shows where public evidence altered a proposal and explains transparently why other suggestions were not adopted.",
  },
  {
    id: "r-c2-algorithmic-audit",
    skill: "reading",
    level: "C2",
    questionType: "reading-comprehension",
    prompt: "What tension is central to the passage?",
    options: [
      "Speed versus storage capacity",
      "Commercial confidentiality versus meaningful accountability",
      "Public ownership versus private investment",
      "Accuracy versus mathematical complexity",
    ],
    correctIndex: 1,
    explanation:
      "The passage weighs protection of proprietary information against the need for evidence sufficient to support accountability.",
    passage:
      "Organizations often invoke commercial confidentiality when asked to explain automated decisions. Yet an audit that cannot inspect relevant data, assumptions, or failure patterns risks becoming ceremonial. The challenge is not to disclose every proprietary detail, but to provide enough independent access for accountability to be substantive rather than performative.",
  },
  {
    id: "r-c2-policy-proxy",
    skill: "reading",
    level: "C2",
    questionType: "reading-comprehension",
    prompt: "Why is the reported improvement potentially misleading?",
    options: [
      "The target was never measured.",
      "The proxy may improve without the underlying condition improving.",
      "The policy was implemented too slowly.",
      "The researchers used qualitative evidence.",
    ],
    correctIndex: 1,
    explanation:
      "A proxy is an indirect measure, so optimizing it may not produce the intended real-world outcome.",
    passage:
      "The programme's success was assessed through a convenient proxy: the number of appointments scheduled. That figure rose sharply, but waiting times and completed treatments did not improve. Once a proxy becomes a target, institutions may optimize the measure while leaving the condition it was meant to represent unchanged.",
  },
  {
    id: "r-c2-heritage-adaptation",
    skill: "reading",
    level: "C2",
    questionType: "reading-comprehension",
    prompt: "Which principle best summarizes the architect's position?",
    options: [
      "Preservation requires preventing every alteration.",
      "New uses should erase evidence of earlier construction.",
      "Adaptation can sustain heritage when changes remain legible and reversible.",
      "Historic buildings should serve only cultural functions.",
    ],
    correctIndex: 2,
    explanation:
      "The architect supports compatible new use while keeping interventions identifiable and capable of being undone.",
    passage:
      "The architect rejects the idea that preservation means freezing a building in time. Continued use can secure its maintenance, provided new interventions do not imitate the original fabric deceptively. Where possible, additions should be legible as contemporary work and reversible without destroying significant historic material.",
  },

  {
    id: "l-a1-library-closes",
    skill: "listening",
    level: "A1",
    questionType: "listening-comprehension",
    prompt: "What time does the library close today?",
    options: ["At four", "At five", "At six", "At seven"],
    correctIndex: 1,
    explanation: "The recording says the library closes at five o'clock.",
    audioText:
      "The library closes at five o'clock today. Please return your books before then.",
  },
  {
    id: "l-a2-bus-stop",
    skill: "listening",
    level: "A2",
    questionType: "listening-comprehension",
    prompt: "Where should passengers wait for the number eight bus?",
    options: [
      "Outside the bank",
      "Beside the park",
      "At the station",
      "Near the university gate",
    ],
    correctIndex: 3,
    explanation:
      "The recording directs passengers to the temporary stop near the university gate.",
    audioText:
      "The number eight bus will not stop outside the bank today. Please use the temporary stop near the university gate.",
  },
  {
    id: "l-b1-study-room",
    skill: "listening",
    level: "B1",
    questionType: "listening-comprehension",
    prompt: "Why was the student's booking changed?",
    options: [
      "The library is closing early.",
      "The original room has a faulty projector.",
      "The student requested a larger room.",
      "Another group paid for the room.",
    ],
    correctIndex: 1,
    explanation:
      "A projector problem in Room 4 caused the booking to move to Room 6.",
    audioText:
      "Your study-room booking has been moved from Room Four to Room Six because the projector in Room Four is not working. The time of your booking remains unchanged.",
  },
  {
    id: "l-b2-field-trip",
    skill: "listening",
    level: "B2",
    questionType: "listening-comprehension",
    prompt: "What is the speaker mainly clarifying?",
    options: [
      "Why the field trip was cancelled",
      "Which costs the department will and will not cover",
      "How students should write their reports",
      "Where the class will meet next week",
    ],
    correctIndex: 1,
    explanation:
      "Transport is covered, while students must buy their own lunch.",
    audioText:
      "The department will cover the cost of transport for Friday's field trip, so you do not need to buy a bus ticket. Lunch, however, is not included, and students should either bring food or purchase it at the visitor centre.",
  },
  {
    id: "l-b2-research-interview",
    skill: "listening",
    level: "B2",
    questionType: "listening-comprehension",
    prompt: "What must participants do before the interview?",
    options: [
      "Read the final report",
      "Choose the interview questions",
      "Complete and return a consent form",
      "Send a copy of their passport",
    ],
    correctIndex: 2,
    explanation:
      "The recording says a signed consent form must be returned in advance.",
    audioText:
      "Before your research interview, please read the information sheet carefully and return the signed consent form. We cannot begin the recorded interview until we have received it.",
  },
  {
    id: "l-c1-policy-pilot",
    skill: "listening",
    level: "C1",
    questionType: "listening-comprehension",
    prompt: "Why does the speaker recommend a pilot programme?",
    options: [
      "To avoid gathering any evidence",
      "To test effects before committing to a wider rollout",
      "To replace the policy permanently",
      "To limit participation to senior staff",
    ],
    correctIndex: 1,
    explanation:
      "A limited pilot would provide evidence before a large-scale commitment.",
    audioText:
      "The proposal is promising, but the evidence comes from institutions quite different from ours. A six-month pilot would let us examine the effects in our own context before committing resources to a university-wide rollout.",
  },
  {
    id: "l-c1-exhibition-delay",
    skill: "listening",
    level: "C1",
    questionType: "listening-comprehension",
    prompt: "What is the curator's attitude toward the delay?",
    options: [
      "Entirely disappointed",
      "Indifferent to its consequences",
      "Regretful but aware of a possible benefit",
      "Certain that the exhibition should be cancelled",
    ],
    correctIndex: 2,
    explanation:
      "The curator regrets the delay but says it enables more careful conservation work.",
    audioText:
      "Naturally, we regret postponing the exhibition, particularly after visitors planned their journeys. Still, the delay gives conservators time to stabilize two fragile works that otherwise could not have been displayed safely.",
  },
  {
    id: "l-c2-causal-claim",
    skill: "listening",
    level: "C2",
    questionType: "listening-comprehension",
    prompt: "What methodological caution does the speaker emphasize?",
    options: [
      "The sample is too large to interpret.",
      "An association does not by itself establish causation.",
      "Qualitative data cannot support any conclusion.",
      "The variables were never measured.",
    ],
    correctIndex: 1,
    explanation:
      "The speaker warns against treating correlation as proof of a causal effect.",
    audioText:
      "The association is statistically robust, but we should resist presenting it as causal. Participants were not randomly assigned, and an unmeasured factor may have influenced both their programme attendance and their eventual outcomes.",
  },
  {
    id: "l-c2-urban-consultation",
    skill: "listening",
    level: "C2",
    questionType: "listening-comprehension",
    prompt: "What concern is implicit in the speaker's comment?",
    options: [
      "The consultation received too many detailed responses.",
      "The revised plan may cite participation without reflecting it.",
      "Residents were unwilling to attend any meetings.",
      "The original plan had no technical evidence.",
    ],
    correctIndex: 1,
    explanation:
      "The speaker questions whether public input changed the plan rather than merely being acknowledged.",
    audioText:
      "The report lists how many residents attended, but it does not identify a single design decision altered by their evidence. Participation should shape the plan, not simply decorate the account of how the plan was produced.",
  },
  {
    id: "l-c2-uncertainty",
    skill: "listening",
    level: "C2",
    questionType: "listening-comprehension",
    prompt: "How does the speaker characterize uncertainty?",
    options: [
      "As evidence that the model is useless",
      "As a reason to postpone every decision",
      "As information that should be communicated and managed",
      "As a problem that disappears with larger datasets",
    ],
    correctIndex: 2,
    explanation:
      "The speaker treats uncertainty as decision-relevant information rather than as failure.",
    audioText:
      "Uncertainty is not a defect to conceal; it is information about the range of outcomes we should prepare for. The responsible response is to communicate that range clearly and choose measures that remain useful under several plausible scenarios.",
  },
]

export function createAssessmentExpansion(
  bankVersion: string,
): AssessmentQuestion[] {
  return questions.map((item) => ({ ...item, bankVersion }))
}
