const SECURITY_HEADERS = {
  "content-security-policy":
    "default-src 'self'; base-uri 'self'; connect-src 'self' https://challenges.cloudflare.com; font-src 'self' data:; form-action 'self'; frame-ancestors 'none'; frame-src https://challenges.cloudflare.com; img-src 'self' data:; object-src 'none'; script-src 'self' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; upgrade-insecure-requests",
  "permissions-policy": "camera=(), geolocation=(), microphone=()",
  "referrer-policy": "strict-origin-when-cross-origin",
  "strict-transport-security": "max-age=31536000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
}

const SPA_ROUTE_PATTERNS = [
  /^\/$/,
  /^\/(?:dictionary|pronunciation-studio|confusing-words|topics|practice|assessment|chat|progress|favorites|feedback|about|settings|review-submissions)\/?$/,
  /^\/topics\/[^/]+\/?$/,
]

function isKnownSpaRoute(pathname) {
  return SPA_ROUTE_PATTERNS.some((pattern) => pattern.test(pathname))
}

export function secureResponse(response) {
  const headers = new Headers(response.headers)
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value)
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

export function assetResponse(request, response) {
  const url = new URL(request.url)
  const headers = new Headers(response.headers)
  const contentType = headers.get("content-type") || ""
  const isHtml = contentType.includes("text/html")
  const isHashedAsset = /^\/assets\/[^/]+-[a-z0-9_-]{8,}\.[a-z0-9]+$/i.test(
    url.pathname,
  )
  const isUnknownRoute =
    ["GET", "HEAD"].includes(request.method) &&
    isHtml &&
    !isKnownSpaRoute(url.pathname)

  if (isHashedAsset) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable")
  } else if (isHtml) {
    headers.set("Cache-Control", "no-cache, max-age=0, must-revalidate")
  }

  return new Response(response.body, {
    status: isUnknownRoute ? 404 : response.status,
    statusText: isUnknownRoute ? "Not Found" : response.statusText,
    headers,
  })
}
