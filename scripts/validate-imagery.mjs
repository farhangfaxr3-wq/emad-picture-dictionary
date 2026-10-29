import assert from "node:assert/strict"

import fs from "node:fs"

import path from "node:path"

import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

const libraryPath = path.join(root, "src", "app", "vocabularyPhotos.json")

const categoryImageryPath = path.join(root, "src", "app", "CategoryImagery.tsx")

const topicCatalogPath = path.join(root, "src", "app", "topicCatalog.ts")

const publicPath = path.join(root, "public")

const imageRoot = path.join(publicPath, "images")

const library = JSON.parse(fs.readFileSync(libraryPath, "utf8"))

const categoryImagerySource = fs.readFileSync(categoryImageryPath, "utf8")

const topicCatalogSource = fs.readFileSync(topicCatalogPath, "utf8")

const allowedKinds = new Set(["object", "scene-object", "context"])

const errors = []

function extractTopicList(name) {
  const start = topicCatalogSource.indexOf(`export const ${name}`)
  const assignment = topicCatalogSource.indexOf("=", start)
  const open = topicCatalogSource.indexOf("[", assignment)
  const end = topicCatalogSource.indexOf("]", open)

  if (start < 0 || assignment < 0 || open < 0 || end < 0) return []

  return [...topicCatalogSource.slice(open, end).matchAll(/"([^"]+)"/g)].map(
    (match) => match[1],
  )
}

const topics = [
  ...extractTopicList("legacyTopicNames"),

  ...extractTopicList("expandedTopicNames"),
]

for (const topic of topics) {
  const hasPhoto = categoryImagerySource.includes(`category: "${topic}"`)

  const hasArtwork = categoryImagerySource.includes(`"${topic}": {`)

  if (!hasPhoto && !hasArtwork) {
    errors.push(`${topic}: missing dedicated topic cover`)
  }
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name)

    return entry.isDirectory() ? walk(target) : [target]
  })
}

function isHttpUrl(value) {
  try {
    return ["http:", "https:"].includes(new URL(value).protocol)
  } catch {
    return false
  }
}

function isJpeg(file) {
  const handle = fs.openSync(file, "r")

  try {
    const header = Buffer.alloc(3)

    const { size } = fs.fstatSync(handle)

    if (size < 4 || fs.readSync(handle, header, 0, 3, 0) !== 3) return false

    const footer = Buffer.alloc(2)

    fs.readSync(handle, footer, 0, 2, size - 2)

    return (
      header[0] === 0xff &&
      header[1] === 0xd8 &&
      header[2] === 0xff &&
      footer[0] === 0xff &&
      footer[1] === 0xd9
    )
  } finally {
    fs.closeSync(handle)
  }
}

function isWebp(file) {
  const contents = fs.readFileSync(file)

  return (
    contents.length >= 12 &&
    contents.subarray(0, 4).toString("ascii") === "RIFF" &&
    contents.subarray(8, 12).toString("ascii") === "WEBP"
  )
}

function isPng(file) {
  const signature = fs.readFileSync(file).subarray(0, 8)

  return signature.equals(
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  )
}

for (const [key, image] of Object.entries(library)) {
  if (!key.trim()) errors.push("An image record has an empty vocabulary key")

  for (const field of [
    "src",

    "source",

    "author",

    "license",

    "licenseUrl",

    "description",

    "kind",
  ]) {
    if (typeof image[field] !== "string" || !image[field].trim()) {
      errors.push(`${key}: missing ${field}`)
    }
  }

  if (!allowedKinds.has(image.kind))
    errors.push(`${key}: invalid kind ${image.kind}`)

  if (!isHttpUrl(image.source)) errors.push(`${key}: invalid source URL`)

  if (!isHttpUrl(image.licenseUrl)) errors.push(`${key}: invalid license URL`)

  if (!image.src?.startsWith("/images/")) {
    errors.push(`${key}: image path must stay inside /images/`)

    continue
  }

  const file = path.resolve(publicPath, `.${image.src}`)

  if (!file.startsWith(`${imageRoot}${path.sep}`)) {
    errors.push(`${key}: unsafe image path ${image.src}`)
  } else if (!fs.existsSync(file)) {
    errors.push(`${key}: missing file ${image.src}`)
  }
}

const imageFiles = walk(imageRoot).filter((file) =>
  /\.(?:jpe?g|png|webp)$/i.test(file),
)

for (const file of imageFiles) {
  const extension = path.extname(file).toLowerCase()

  const valid =
    extension === ".png"
      ? isPng(file)
      : extension === ".webp"
        ? isWebp(file)
        : isJpeg(file)

  if (!valid) {
    errors.push(
      `${path.relative(root, file)}: invalid or incomplete ${extension.slice(1).toUpperCase()} file`,
    )
  }
}

assert.deepEqual(errors, [], `Imagery audit failed:\n${errors.join("\n")}`)

const values = Object.values(library)

const displayed = values.filter((image) => image.kind !== "context").length

const contextOnly = values.length - displayed

console.log(
  `Imagery QA passed: ${values.length} credited records, ${displayed} exact or scene-object matches, ${contextOnly} context-only records, ${imageFiles.length} valid image files.`,
)

console.log(
  `Topic-cover QA passed: ${topics.length} topics have a photo or dedicated illustration.`,
)
