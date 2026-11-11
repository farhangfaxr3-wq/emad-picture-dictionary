import {
  expect,
  test,
  type ConsoleMessage,
  type Page,
  type Request,
} from "@playwright/test"

const publicRoutes = [
  "/",
  "/dictionary",
  "/pronunciation-studio",
  "/confusing-words",
  "/topics",
  "/practice",
  "/assessment",
  "/progress",
  "/favorites",
  "/feedback",
  "/about",
  "/settings",
]

async function assertHealthyPage(page: Page, path: string) {
  const errors: string[] = []
  const failedRequests: string[] = []
  const onConsole = (message: ConsoleMessage) => {
    if (message.type() === "error") errors.push(message.text())
  }
  const onPageError = (error: Error) => errors.push(error.message)
  const onRequestFailed = (request: Request) => {
    const failure = request.failure()
    if (failure?.errorText !== "net::ERR_ABORTED") {
      failedRequests.push(
        `${failure?.errorText ?? "request failed"}: ${request.url()}`,
      )
    }
  }
  page.on("console", onConsole)
  page.on("pageerror", onPageError)
  page.on("requestfailed", onRequestFailed)

  try {
    await page.goto(path)
    await expect(page.locator("main")).toBeVisible()
    await expect(page.locator("h1").first()).toBeVisible()
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1,
    )
    expect(overflow, `${path} must not overflow horizontally`).toBe(false)
    const brokenImages = await page
      .locator("img")
      .evaluateAll((images) =>
        images
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.getAttribute("src")),
      )
    expect(
      brokenImages,
      `${path} must not contain broken loaded images`,
    ).toEqual([])
    expect(errors, `${path} must not log console errors`).toEqual([])
    expect(failedRequests, `${path} must not have failed requests`).toEqual([])
  } finally {
    page.off("console", onConsole)
    page.off("pageerror", onPageError)
    page.off("requestfailed", onRequestFailed)
  }
}

async function chooseSingleWordPicture(page: Page) {
  const picture = page.locator('img[data-vocabulary-word="apple"]')
  await expect(picture.first()).toBeVisible()
  await picture.first().locator("xpath=ancestor::button[1]").click()
}

async function completeCategoryActivity(
  page: Page,
  section: "practice" | "write" | "games",
  activity: string,
) {
  await page.goto(
    `/topics/Food?section=${section}&activity=${activity}&cefr=all&length=5&word=apple`,
  )
  await expect(page.getByText("Loading your learning space…")).toHaveCount(0, {
    timeout: 15_000,
  })

  if (["matching", "picture-match"].includes(activity)) {
    await page.getByRole("button", { name: "Match word: apple" }).click()
    await chooseSingleWordPicture(page)
  } else if (activity === "memory") {
    const cards = page.locator('button[class*="min-h-36"]')
    await expect(cards).toHaveCount(2)
    await cards.nth(0).click()
    await cards.nth(1).click()
  } else if (activity === "review") {
    await page.getByRole("button", { name: "Reveal word" }).click()
    await page.getByRole("button", { name: "I remembered it" }).click()
    await page.getByRole("button", { name: "See Results" }).click()
  } else if (
    section === "write" ||
    ["spelling", "dictation", "missing", "complete-word"].includes(activity)
  ) {
    await page.getByLabel("Your English word").fill("apple")
    await page.getByRole("button", { name: "Check Answer" }).click()
    await page.getByRole("button", { name: "See Results" }).click()
  } else if (activity === "builder") {
    const tiles = page.getByRole("button", { name: /^Letter / })
    const tileCount = await tiles.count()
    for (let index = 0; index < tileCount; index += 1) {
      await tiles.nth(index).click()
    }
    await page.getByRole("button", { name: "Check word" }).click()
    await page.getByRole("button", { name: "See Results" }).click()
  } else if (["word", "identify", "listen-choose"].includes(activity)) {
    await chooseSingleWordPicture(page)
    await page.getByRole("button", { name: "See Results" }).click()
  } else {
    await page.getByRole("button", { name: "Choose word: apple" }).click()
    await page.getByRole("button", { name: "See Results" }).click()
  }

  await expect(
    page.getByText(/Activity complete|Beautifully done!/).first(),
  ).toBeVisible()
}

async function completeGlobalActivity(page: Page, title: string) {
  await page.goto(
    "/practice?q=apple%20Food%20A%20round%20fruit%20with%20red%20or%20green%20skin",
  )
  await expect(page).toHaveURL(/\/practice\?q=apple%20Food%20A%20round%20fruit/)
  await expect(
    page.getByText("1 word in your practice collection."),
  ).toBeVisible()
  await page.getByRole("button", { name: new RegExp(title, "i") }).click()

  if (title === "Matching") {
    await page.getByRole("button", { name: "apple", exact: true }).click()
    await chooseSingleWordPicture(page)
  } else if (title === "Quick Review") {
    await page.getByRole("button", { name: "Reveal the word" }).click()
    await page.getByRole("button", { name: "I remembered it" }).click()
    await page.getByRole("button", { name: "See my results" }).click()
  } else if (title === "Spelling") {
    await page.getByLabel("Spell the word").fill("apple")
    await page.getByRole("button", { name: "Check", exact: true }).click()
    await page.getByRole("button", { name: "See my results" }).click()
  } else if (title === "Word → Picture") {
    await chooseSingleWordPicture(page)
    await page.getByRole("button", { name: "See my results" }).click()
  } else {
    await page.getByRole("button", { name: "Choose apple" }).click()
    await page.getByRole("button", { name: "See my results" }).click()
  }

  await expect(page.getByText("PRACTICE COMPLETE")).toBeVisible()
}

for (const viewport of [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
]) {
  test(`${viewport.name} public-route smoke test`, async ({ page }) => {
    test.setTimeout(180_000)
    await page.setViewportSize(viewport)
    for (const route of publicRoutes) await assertHealthyPage(page, route)
  })
}

test("About Us presents both team members responsively with working contact links", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto("/about")

  await expect(
    page.getByRole("heading", { name: "About Us & the Dictionary" }),
  ).toBeVisible()
  await expect(page.getByRole("link", { name: "About Us" })).toBeVisible()
  await expect(
    page.locator('img[src="/images/brand/emad-a-mohammed-2026.jpg"]'),
  ).toBeVisible()
  await expect(
    page.locator('img[src="/images/brand/farhang-web-developer.svg"]'),
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Email Emad A. Mohammed" }),
  ).toHaveAttribute("href", "mailto:em20323115@soran.edu.iq")
  await expect(
    page.getByRole("link", { name: "Email Farhang F. Jamal" }),
  ).toHaveAttribute("href", "mailto:fj40223119@soran.edu.iq")

  const desktopEmad = await page.getByTestId("team-card-emad").boundingBox()
  const desktopFarhang = await page
    .getByTestId("team-card-farhang")
    .boundingBox()
  expect(desktopEmad).not.toBeNull()
  expect(desktopFarhang).not.toBeNull()
  expect(Math.abs(desktopEmad!.y - desktopFarhang!.y)).toBeLessThan(2)
  expect(Math.abs(desktopEmad!.width - desktopFarhang!.width)).toBeLessThan(2)

  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload()
  const mobileEmad = await page.getByTestId("team-card-emad").boundingBox()
  const mobileFarhang = await page
    .getByTestId("team-card-farhang")
    .boundingBox()
  const emadFrame = await page.getByTestId("team-photo-emad").boundingBox()
  const farhangFrame = await page
    .getByTestId("team-photo-farhang")
    .boundingBox()
  expect(mobileEmad).not.toBeNull()
  expect(mobileFarhang).not.toBeNull()
  expect(mobileEmad!.y).toBeLessThan(mobileFarhang!.y)
  expect(Math.abs(emadFrame!.width - farhangFrame!.width)).toBeLessThan(2)
  expect(Math.abs(emadFrame!.height - farhangFrame!.height)).toBeLessThan(2)
})

test("home search and dictionary search show deduplicated learner results", async ({
  page,
}) => {
  await page.goto("/")
  const homeSearch = page.getByPlaceholder(/Search 4000 words/i)
  await homeSearch.fill("planet")
  await homeSearch.press("Enter")
  await expect(page).toHaveURL(/\/dictionary/)
  await expect(page.getByText("planet", { exact: true }).first()).toBeVisible()

  const dictionarySearch = page.getByPlaceholder(/Search a word, meaning/i)
  await dictionarySearch.fill("chair")
  await expect(page.getByText("chair", { exact: true }).first()).toBeVisible()
  await expect(
    page.locator("article h3").filter({ hasText: /^chair$/ }),
  ).toHaveCount(1)
})

test("dictionary uses a neutral state when a verified image is unavailable", async ({
  page,
}) => {
  for (const word of ["bike", "bin", "bolt"]) {
    await page.goto(`/dictionary?q=${word}&images=all`)
    await expect(
      page.locator('[data-image-status="unavailable"]').first(),
    ).toBeVisible()
    await expect(page.locator('img[src*="knife.jpg"]')).toHaveCount(0)
  }
})

test("reviewed image uploads render, fail safely and keep quiz alternatives neutral", async ({
  page,
}) => {
  test.setTimeout(90_000)
  const reviewed = [
    ["balcony", "wikimedia-balcony.jpg"],
    ["binder", "wikimedia-binder.jpg"],
    ["poncho", "wikimedia-poncho.jpg"],
    ["collar", "wikimedia-collar.jpg"],
    ["nose", "wikimedia-nose.jpg"],
    ["ointment", "wikimedia-ointment.png"],
    ["tuna", "wikimedia-tuna.png"],
    ["wardrobe", "wikimedia-wardrobe.jpg"],
    ["market", "wikimedia-b02-market.jpg"],
    ["head", "wikimedia-b02-head.jpg"],
    ["spatula", "wikimedia-b02-spatula.jpg"],
    ["workbook", "wikimedia-b02-workbook.jpg"],
    ["poster", "wikimedia-b02-poster.jpg"],
    ["uniform", "wikimedia-b02-uniform.jpg"],
    ["sleeve", "wikimedia-b02-sleeve.jpg"],
    ["magazine", "wikimedia-b02-magazine.jpg"],
    ["recycling center", "wikimedia-b02-recycling-center.jpg"],
    ["washing dishes", "wikimedia-b02-washing-dishes.jpg"],
    ["watching television", "wikimedia-b02-watching-television.jpg"],
    ["taking a bath", "wikimedia-b02-taking-a-bath.jpg"],
    ["emergency", "wikimedia-b02-emergency.jpg"],
    ["meditation", "wikimedia-b02-meditation.jpg"],
    ["neck", "wikimedia-b02-neck.jpg"],
    ["sprain", "wikimedia-b02-sprain.jpg"],
    ["stretching", "wikimedia-b02-stretching.jpg"],
    ["alligator", "wikimedia-b02-alligator.jpg"],
    ["battery", "wikimedia-b02-battery.jpg"],
    ["souvenir", "wikimedia-b02-souvenir.jpg"],
    ["walking", "wikimedia-b02-walking.jpg"],
    ["ceiling", "wikimedia-b02-ceiling.jpg"],
    ["wall", "wikimedia-b02-wall.jpg"],
    ["bacon", "wikimedia-b02-bacon.jpg"],
    ["basket", "wikimedia-b02-basket.jpg"],
    ["candle", "wikimedia-b02-candle.jpg"],
    ["cattle", "wikimedia-b02-cattle.jpg"],
    ["cherry", "wikimedia-b02-cherry.jpg"],
    ["doll", "wikimedia-b02-doll.jpg"],
    ["guitar", "wikimedia-b02-guitar.jpg"],
  ]

  for (const [, filename] of reviewed) {
    const response = await page.request.get(`/images/vocabulary/${filename}`)
    expect(response.ok()).toBeTruthy()
    expect(response.headers()["content-type"]).toMatch(/^image\//)
  }

  const rendered = [
    ["balcony", "wikimedia-balcony.jpg"],
    ["binder", "wikimedia-binder.jpg"],
    ["tuna", "wikimedia-tuna.png"],
    ["market", "wikimedia-b02-market.jpg"],
    ["spatula", "wikimedia-b02-spatula.jpg"],
    ["alligator", "wikimedia-b02-alligator.jpg"],
    ["battery", "wikimedia-b02-battery.jpg"],
    ["guitar", "wikimedia-b02-guitar.jpg"],
  ]

  for (const [word, filename] of rendered) {
    await page.goto(`/dictionary?q=${word}&images=all`)
    await expect(
      page.locator(`img[data-vocabulary-word="${word}"][src*="${filename}"]`),
    ).toBeVisible()
  }

  await page.route("**/wikimedia-tuna.png", (route) => route.abort())
  await page.goto("/dictionary?q=tuna&images=all")
  await expect(
    page.locator('[data-image-status="unavailable"]').first(),
  ).toBeVisible()
  await page.unroute("**/wikimedia-tuna.png")

  await page.goto(
    "/topics/Food?section=practice&activity=picture&cefr=all&length=5",
  )
  const quizImage = page.locator('img[data-image-status="verified"]').first()
  await expect(quizImage).toBeVisible()
  await expect(quizImage).toHaveAttribute("alt", "Vocabulary question image")

  await page.goto(
    "/topics/Food?section=practice&activity=picture&cefr=C2&length=5",
  )
  await expect(
    page.getByText("Which word matches this definition?"),
  ).toBeVisible()
  await expect(page.locator('img[data-image-status="verified"]')).toHaveCount(0)
})

test("rich word cards and confusing-word lessons are usable", async ({
  page,
}) => {
  await page.goto("/dictionary?q=house&level=all")
  await page.getByRole("button", { name: "View house" }).first().click()
  await expect(page.getByText("Use “house” naturally")).toBeVisible()
  await expect(page.getByText("Common collocations")).toBeVisible()
  await expect(page.getByText("Grammar patterns")).toBeVisible()
  await expect(page.getByText("Common mistakes")).toBeVisible()

  await page.goto("/confusing-words")
  await expect(
    page.getByRole("heading", { name: "Words people confuse" }),
  ).toBeVisible()
  await expect(page.getByText(/150 reviewed lessons in total/i)).toBeVisible()
  await expect(page.locator("article")).toHaveCount(12)
  await expect(
    page.getByRole("heading", { name: "House or home?" }),
  ).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "Affect or effect?" }),
  ).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "Borrow or lend?" }),
  ).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "Cite, site or sight?" }),
  ).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "Say, tell, speak or talk?" }),
  ).toBeVisible()
  await page.getByRole("button", { name: "home", exact: true }).first().click()
  await expect(page.getByText("Correct.", { exact: true })).toBeVisible()
  await page.getByRole("button", { name: "Fix the sentence" }).click()
  await page.getByPlaceholder("Search affect, borrow, cite…").fill("affect")
  await expect(
    page.getByRole("heading", { name: "Affect or effect?" }),
  ).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "House or home?" }),
  ).toHaveCount(0)
  await expect(
    page.locator('a[href^="/dictionary?q="]').first(),
  ).toHaveAttribute("href", /\/dictionary\?q=/)
  await page.getByPlaceholder("Search affect, borrow, cite…").fill("economic")
  await expect(
    page.getByRole("heading", { name: "Economic or economical?" }),
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Cambridge sense" }).first(),
  ).toHaveAttribute("href", /dictionary\.cambridge\.org/)
  await page.getByPlaceholder("Search affect, borrow, cite…").fill("")
  await page.getByRole("button", { name: /Load 12 more lessons/i }).click()
  await expect(page.locator("article")).toHaveCount(24)
})

test("pronunciation studio uses one standard reading and supports listen-and-repeat", async ({
  page,
}) => {
  await page.addInitScript(() => {
    class MockSpeechSynthesisUtterance {
      text: string
      lang = ""
      rate = 1
      voice: SpeechSynthesisVoice | null = null
      onstart: (() => void) | null = null
      onend: (() => void) | null = null
      onerror: ((event: { error: string }) => void) | null = null

      constructor(text: string) {
        this.text = text
      }
    }

    const voices = [
      { name: "Test Standard English", lang: "en" },
    ] as SpeechSynthesisVoice[]
    Object.defineProperty(window, "SpeechSynthesisUtterance", {
      configurable: true,
      value: MockSpeechSynthesisUtterance,
    })
    Object.defineProperty(window, "speechSynthesis", {
      configurable: true,
      value: {
        cancel() {},
        getVoices: () => voices,
        addEventListener() {},
        removeEventListener() {},
        speak(utterance: MockSpeechSynthesisUtterance) {
          setTimeout(() => {
            utterance.onstart?.()
            utterance.onend?.()
          }, 20)
        },
      },
    })
  })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/pronunciation-studio?word=student")
  await expect(
    page.getByRole("heading", { name: "Pronunciation Studio" }),
  ).toBeVisible()
  await expect(page.getByText("/ˈstjuː.dənt/").first()).toBeVisible()
  await expect(
    page.getByText(/device voice “Test Standard English”/),
  ).toBeVisible()
  await page.getByRole("button", { name: "Play pronunciation" }).click()
  await expect(page.getByText(/US English|UK English/)).toHaveCount(0)

  const search = page.getByPlaceholder("Search by word or topic")
  await search.fill("coffee")
  await page.getByRole("button", { name: /coffee/i }).click()
  await expect(page.getByRole("heading", { name: "coffee" })).toBeVisible()

  await page.getByRole("button", { name: "Listen slowly" }).click()
  await expect(
    page.getByRole("button", { name: "I repeated it" }),
  ).toBeEnabled()
  await page.getByRole("button", { name: "I repeated it" }).click()
  await expect(page.getByText("Word 2 of 3")).toBeVisible()

  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth + 1,
  )
  expect(overflow).toBe(false)

  await expect(page.getByText("4000", { exact: true })).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "See how the sound is formed" }),
  ).toBeVisible()
  await expect(
    page.getByRole("heading", { name: "Listen → Compare → Try" }),
  ).toBeVisible()

  await page.goto("/pronunciation-studio?word=apple")
  await expect(page.getByRole("heading", { name: "apple" })).toBeVisible()
  await expect(page.getByText(/One standard reading/)).toBeVisible()
})

test("retired learning-path links redirect to topics without changing progress", async ({
  page,
}) => {
  await page.goto("/")
  await expect(page.getByRole("link", { name: "Learning Paths" })).toHaveCount(
    0,
  )
  await expect(page.getByText("Choose a learning goal")).toHaveCount(0)

  await page.evaluate(() => {
    const store = {
      schemaVersion: 2,
      favorites: [],
      learned: ["house"],
      recent: [],
      reviewed: [],
      explored: [],
      mastery: {},
      mistakes: [],
      sceneProgress: {},
      sceneScores: {},
      categoryCards: {},
      activity: [],
      sessions: [],
      lastLesson: null,
      preferences: {
        name: "",
        language: "English",
        audio: true,
        speed: "Normal",
        dark: false,
        notifications: false,
        goal: 10,
        reduceMotion: false,
        largeText: false,
        soraniHelp: false,
        cefrLevel: "All levels",
      },
    }
    localStorage.setItem("emad-dictionary", JSON.stringify(store))
  })

  await page.goto("/learning-paths?path=english-for-university")
  await expect(page).toHaveURL(/\/topics$/)
  await expect(page.locator("main h1").first()).toBeVisible()
  await expect(page.getByText("Goal-based learning paths")).toHaveCount(0)

  const stored = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("emad-dictionary") || "null"),
  )
  expect(stored.learned).toEqual(["house"])
  expect(stored.sessions).toEqual([])
})

test("every category practice, writing, flashcard and game mode opens", async ({
  page,
}) => {
  test.setTimeout(180_000)
  const modes = {
    practice: [
      "picture",
      "word",
      "multiple",
      "listening",
      "matching",
      "identify",
      "choose",
      "sentence",
      "spelling",
      "topic-review",
      "review",
    ],
    write: ["spelling", "missing", "complete-word", "dictation"],
    games: [
      "picture-match",
      "word-match",
      "memory",
      "speed",
      "listen-choose",
      "builder",
      "picture-challenge",
    ],
  }
  for (const [section, activities] of Object.entries(modes)) {
    for (const activity of activities) {
      await page.goto(
        `/topics/Food?section=${section}&activity=${activity}&cefr=all&length=5`,
      )
      await expect(page.getByText("Loading your learning space…")).toHaveCount(
        0,
        { timeout: 15_000 },
      )
      await expect(page.locator("main h1, main h2").first()).toBeVisible()
      await expect(page.getByText("This activity could not open.")).toHaveCount(
        0,
      )
    }
  }
  await page.goto("/topics/Food?section=flashcards&cefr=all")
  await expect(page.getByText("Food Flashcards")).toBeVisible()
})

const fullPracticeCategoryModes = {
  practice: [
    "picture",
    "word",
    "multiple",
    "listening",
    "matching",
    "identify",
    "choose",
    "sentence",
    "spelling",
    "topic-review",
    "review",
  ],
  write: ["spelling", "missing", "complete-word", "dictation"],
  games: [
    "picture-match",
    "word-match",
    "memory",
    "speed",
    "listen-choose",
    "builder",
    "picture-challenge",
  ],
} as const

const fullPracticeGlobalModes = [
  "Multiple Choice",
  "Topic Review",
  "Picture → Word",
  "Word → Picture",
  "Listening Practice",
  "Matching",
  "Spelling",
  "Quick Review",
]

const fullPracticeViewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
] as const

async function resetPracticeTest(
  page: Page,
  viewport: typeof fullPracticeViewports[number],
) {
  page.setDefaultTimeout(10_000)
  await page.setViewportSize(viewport)
  await page.goto("/")
  await page.evaluate(() => localStorage.removeItem("emad-dictionary"))
}

async function savedPracticeSessions(page: Page) {
  await page.reload()
  return page.evaluate(() => {
    const saved = JSON.parse(localStorage.getItem("emad-dictionary") || "{}")
    return saved.sessions?.length || 0
  })
}

for (const viewport of fullPracticeViewports) {
  test(`category Practice sessions complete on ${viewport.name}`, async ({
    page,
  }) => {
    test.setTimeout(300_000)
    await resetPracticeTest(page, viewport)

    for (const activity of fullPracticeCategoryModes.practice) {
      await completeCategoryActivity(page, "practice", activity)
    }

    expect(await savedPracticeSessions(page)).toBeGreaterThanOrEqual(11)
  })

  test(`writing and game sessions complete on ${viewport.name}`, async ({
    page,
  }) => {
    test.setTimeout(300_000)
    await resetPracticeTest(page, viewport)

    for (const activity of fullPracticeCategoryModes.write) {
      await completeCategoryActivity(page, "write", activity)
    }
    for (const activity of fullPracticeCategoryModes.games) {
      await completeCategoryActivity(page, "games", activity)
    }

    expect(await savedPracticeSessions(page)).toBeGreaterThanOrEqual(11)
  })

  test(`flashcard and global Practice sessions complete on ${viewport.name}`, async ({
    page,
  }) => {
    test.setTimeout(300_000)
    await resetPracticeTest(page, viewport)

    await page.goto("/topics/Food?section=flashcards&cefr=all&word=apple")
    await page.getByRole("button", { name: "Flip flashcard" }).click()
    await page.getByRole("button", { name: "Known" }).click()
    await expect(page.getByText("Deck session complete")).toBeVisible()

    for (const title of fullPracticeGlobalModes) {
      await completeGlobalActivity(page, title)
    }

    expect(await savedPracticeSessions(page)).toBeGreaterThanOrEqual(9)
  })
}

test("Practice preserves the learner when a checked image fails at runtime", async ({
  page,
}) => {
  await page.route("**/images/vocabulary/apple*", (route) => route.abort())
  await page.goto(
    "/topics/Food?section=practice&activity=picture&cefr=all&length=5&word=apple",
  )

  await expect(
    page.getByText(/meaning question|definition instead/i).first(),
  ).toBeVisible()
  await page.getByRole("button", { name: "Choose word: apple" }).click()
  await expect(page.getByText("Correct! Nicely done.")).toBeVisible()
  await page.getByRole("button", { name: "See Results" }).click()
  await expect(page.getByText("Beautifully done!")).toBeVisible()
})

test("scenes, favorites, progress, feedback, settings and assessment remain usable", async ({
  page,
}) => {
  test.setTimeout(90_000)
  await page.goto("/topics?view=scenes")
  await expect(page.getByText("On the train platform")).toBeVisible()

  await page.evaluate(() => {
    const store = {
      schemaVersion: 2,
      favorites: ["batch-026--planet"],
      learned: ["batch-026--planet"],
      recent: ["batch-026--planet"],
      reviewed: [],
      explored: [],
      mastery: {},
      mistakes: [],
      sceneProgress: {},
      sceneScores: {},
      categoryCards: {},
      activity: [],
      sessions: [],
      lastLesson: null,
      preferences: {
        name: "",
        language: "English",
        audio: true,
        speed: "Normal",
        dark: false,
        notifications: false,
        goal: 10,
        reduceMotion: false,
        largeText: false,
        cefrLevel: "All levels",
      },
    }
    localStorage.setItem("emad-dictionary", JSON.stringify(store))
  })
  await page.goto("/progress")
  await expect(page.getByText("planet", { exact: true }).first()).toBeVisible()
  await page.goto("/favorites")
  await expect(page.getByText("planet", { exact: true }).first()).toBeVisible()

  await page.goto("/feedback")
  const submit = page.getByRole("button", { name: "Send for review" })
  await expect(submit).toBeDisabled()

  await page.goto("/settings")
  const darkMode = page.getByText("Dark mode", { exact: true })
  await expect(darkMode).toBeVisible()

  await page.route("**/api/assessment/attempts", async (route) => {
    await route.fulfill({
      status: 201,
      contentType: "application/json",
      body: JSON.stringify({
        attemptId: "11111111-1111-4111-8111-111111111111",
        bankVersion: "e2e",
        expiresAt: new Date(Date.now() + 60_000).toISOString(),
        questions: Array.from({ length: 50 }, (_, index) => ({
          id: `e2e-question-${index}`,
          bankVersion: "e2e",
          skill:
            index < 20
              ? "vocabulary"
              : index < 32
                ? "grammar"
                : index < 41
                  ? "reading"
                  : "listening",
          level: ["A1", "A2", "B1", "B2", "C1", "C2"][index % 6],
          prompt:
            index === 0
              ? "Choose the greeting."
              : `Practice question ${index + 1}`,
          options: ["Hello", "Table", "Blue", "Run"],
        })),
      }),
    })
  })
  await page.goto("/assessment")
  await page.getByRole("button", { name: "Test My English Level" }).click()
  await expect(page.getByText("Choose the greeting.")).toBeVisible()
})

test("optional Sorani help is off by default and shows only reviewed support", async ({
  page,
}) => {
  await page.goto("/settings")
  const soraniToggle = page.getByRole("switch", { name: "Sorani support" })
  await expect(soraniToggle).toHaveAttribute("aria-checked", "false")

  await soraniToggle.click()
  await expect(soraniToggle).toHaveAttribute("aria-checked", "true")

  await page.goto("/dictionary?q=house&level=all")
  await expect(page.getByTestId("sorani-gloss").first()).toContainText("ماڵ")

  await page.goto("/dictionary?q=planet&level=all")
  await expect(page.getByText("Sorani gloss unavailable").first()).toBeVisible()

  await page.goto(
    "/topics/Home?section=practice&activity=multiple&cefr=all&length=5",
  )
  await expect(page.getByTestId("sorani-instruction")).toBeVisible()

  const saved = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("emad-dictionary") || "null"),
  )
  expect(saved.preferences.language).toBe("English")
  expect(saved.preferences.soraniHelp).toBe(true)
})

test("keyboard focus, headings, labels and mobile touch controls are accessible", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/dictionary")
  await page.keyboard.press("Tab")
  const focused = page.locator(":focus")
  await expect(focused).toBeVisible()
  expect(
    await focused.evaluate(
      (element) =>
        getComputedStyle(element).outlineStyle !== "none" ||
        getComputedStyle(element).boxShadow !== "none",
    ),
  ).toBe(true)

  const unlabeledControls = await page
    .locator("input, select, textarea")
    .evaluateAll(
      (controls) =>
        controls.filter((control) => {
          const id = control.getAttribute("id")
          return (
            !control.getAttribute("aria-label") &&
            !control.getAttribute("aria-labelledby") &&
            !(id && document.querySelector(`label[for="${CSS.escape(id)}"]`)) &&
            !control.closest("label")
          )
        }).length,
    )
  expect(unlabeledControls).toBe(0)

  const smallButtons = await page
    .locator("button:visible")
    .evaluateAll((buttons) =>
      buttons
        .filter((button) => {
          const box = button.getBoundingClientRect()
          return (
            box.width > 0 &&
            box.height > 0 &&
            (box.width < 44 || box.height < 44)
          )
        })
        .map((button) => ({
          text: button.textContent?.trim(),
          width: button.getBoundingClientRect().width,
          height: button.getBoundingClientRect().height,
        })),
    )
  expect(smallButtons).toEqual([])

  const headings = await page
    .locator("h1, h2, h3, h4, h5, h6")
    .evaluateAll((nodes) => nodes.map((node) => Number(node.tagName.slice(1))))
  for (let index = 1; index < headings.length; index += 1) {
    expect(headings[index] - headings[index - 1]).toBeLessThanOrEqual(1)
  }
})

test("protected admin stays private and shows owner sign-in", async ({
  page,
}) => {
  await page.route("**/api/admin/submissions**", (route) =>
    route.fulfill({
      status: 401,
      contentType: "application/json",
      body: JSON.stringify({ message: "Owner sign-in is required." }),
    }),
  )
  await page.goto("/review-submissions?login=access-code")
  await expect(
    page.getByRole("heading", { name: "Owner sign-in" }),
  ).toBeVisible()
  await expect(page.getByLabel("Email")).toBeVisible()
  await expect(page.getByLabel(/Password or secure access code/)).toBeVisible()
})

test("assessment audio files load and contain playable media data", async ({
  page,
}) => {
  await page.goto("/assessment")
  const result = await page.evaluate(async () => {
    const response = await fetch("/audio/assessment/l-a1-library-closes.wav")
    const data = await response.arrayBuffer()
    return {
      ok: response.ok,
      type: response.headers.get("content-type"),
      bytes: data.byteLength,
    }
  })
  expect(result.ok).toBe(true)
  expect(result.type).toContain("audio")
  expect(result.bytes).toBeGreaterThan(1_000)
})

test("authenticated admin collections expose working pagination controls", async ({
  page,
}) => {
  let loadedSecondSubmissionPage = false
  await page.route("**/api/admin/submissions**", async (route) => {
    const pageNumber =
      new URL(route.request().url()).searchParams.get("page") || "1"
    if (pageNumber === "2") loadedSecondSubmissionPage = true
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        reviewer: "owner@example.com",
        submissions: [],
        pagination: {
          page: Number(pageNumber),
          limit: 20,
          total: 21,
          pages: 2,
        },
      }),
    })
  })
  await page.route("**/api/admin/assessment/questions**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        questions: [],
        pagination: { page: 1, limit: 20, total: 21, pages: 2 },
      }),
    }),
  )
  await page.route("**/api/admin/chat**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        reports: [],
        accounts: [],
        pagination: {
          reports: { page: 1, limit: 20, total: 21, pages: 2 },
          accounts: { page: 1, limit: 20, total: 21, pages: 2 },
        },
      }),
    }),
  )

  await page.goto("/review-submissions")
  const submissionPages = page.getByRole("navigation", {
    name: "Submission pages",
  })
  await expect(submissionPages).toBeVisible()
  await submissionPages.getByRole("button", { name: "Load more" }).click()
  await expect.poll(() => loadedSecondSubmissionPage).toBe(true)
  await expect(
    page.getByRole("navigation", { name: "Assessment question pages" }),
  ).toBeVisible()
  await expect(
    page.getByRole("navigation", { name: "Chat report pages" }),
  ).toBeVisible()
  await expect(
    page.getByRole("navigation", { name: "Chat account pages" }),
  ).toBeVisible()
})
