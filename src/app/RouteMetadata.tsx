import { useEffect } from "react"
import { useLocation } from "react-router"

const origin = "https://emad-picture-dictionary.farhangfaxr3.workers.dev"

interface PageMetadata {
  title: string
  description: string
}

const routeMetadata: Record<string, PageMetadata> = {
  "/": {
    title: "Emad Picture Dictionary — Learn English Visually",
    description:
      "Learn English vocabulary with verified pictures, audio, scenes, games and guided practice.",
  },
  "/dictionary": {
    title: "English Picture Dictionary | Emad Picture Dictionary",
    description:
      "Search English words by topic and CEFR level, with definitions, examples, pronunciation and checked imagery.",
  },
  "/pronunciation-studio": {
    title: "English Pronunciation Studio | Emad Picture Dictionary",
    description:
      "Compare verified US and UK IPA, find stressed syllables and practise English words with accessible slow playback.",
  },
  "/confusing-words": {
    title: "Words People Confuse | Emad Picture Dictionary",
    description:
      "Compare commonly confused English words with clear distinctions, natural examples and short practice activities.",
  },
  "/topics": {
    title: "English Vocabulary Topics | Emad Picture Dictionary",
    description:
      "Explore English vocabulary courses, illustrated scenes and activities organized by topic.",
  },
  "/learning-paths": {
    title: "Goal-based English Learning Paths | Emad Picture Dictionary",
    description:
      "Follow guided Everyday English, University English and Travel English routes using existing vocabulary, CEFR levels and activities.",
  },
  "/practice": {
    title: "English Vocabulary Practice | Emad Picture Dictionary",
    description:
      "Practice saved English words with writing, listening, flashcards and games.",
  },
  "/assessment": {
    title: "English CEFR Level Test | Emad Picture Dictionary",
    description:
      "Take a balanced English vocabulary, grammar, reading and listening assessment from A1 to C2.",
  },
  "/progress": {
    title: "Learning Progress | Emad Picture Dictionary",
    description:
      "Review your private, locally stored English learning progress and scheduled practice.",
  },
  "/favorites": {
    title: "Saved English Words | Emad Picture Dictionary",
    description: "Review and practice your favorite English vocabulary words.",
  },
  "/feedback": {
    title: "Feedback & Ideas | Emad Picture Dictionary",
    description:
      "Send private feedback or suggest an English word for editorial review.",
  },
  "/about": {
    title: "About Emad A. Mohammed | Emad Picture Dictionary",
    description:
      "Learn about the creator of Emad Picture Dictionary and the Soran University event project.",
  },
  "/settings": {
    title: "Learning Settings | Emad Picture Dictionary",
    description:
      "Adjust theme, text, sound, motion, learning goals and CEFR preferences.",
  },
}

function setMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement("meta")
    const [name, content] = attribute.split("=")
    element.setAttribute(name, content)
    document.head.append(element)
  }
  element.setAttribute("content", value)
}

export default function RouteMetadata() {
  const location = useLocation()

  useEffect(() => {
    const basePath = location.pathname.startsWith("/topics/")
      ? "/topics"
      : location.pathname
    const metadata = routeMetadata[basePath] || {
      title: "Page not found | Emad Picture Dictionary",
      description: "The requested page could not be found.",
    }
    const canonicalUrl = `${origin}${
      location.pathname === "/" ? "/" : location.pathname
    }`
    const canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )

    document.title = metadata.title
    setMeta(
      'meta[name="description"]',
      "name=description",
      metadata.description,
    )
    setMeta('meta[property="og:title"]', "property=og:title", metadata.title)
    setMeta(
      'meta[property="og:description"]',
      "property=og:description",
      metadata.description,
    )
    setMeta('meta[property="og:url"]', "property=og:url", canonicalUrl)
    setMeta('meta[name="twitter:title"]', "name=twitter:title", metadata.title)
    setMeta(
      'meta[name="twitter:description"]',
      "name=twitter:description",
      metadata.description,
    )
    if (canonical) canonical.href = canonicalUrl
  }, [location.pathname])

  return null
}
