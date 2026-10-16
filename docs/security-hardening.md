# Emad WordLink security hardening

Security is layered. No public website can promise that hacking or denial of
service is impossible, but this project rejects unsafe requests early and keeps
private operations behind Cloudflare controls.

## Protections implemented in source

- Cloudflare Workers Rate Limiting binding: 20 public submission requests per
  minute per hashed requester and Cloudflare location.
- Durable D1 limit: five submission attempts per hashed requester per hour.
- Turnstile server validation with a fixed action and explicit hostname
  allowlist. Tokens are never trusted only because the browser displayed a
  widget.
- 24 KB application request limit, JSON-only bodies, bounded fields, a
  honeypot, minimum completion time, duplicate checks, and prepared D1
  statements.
- Same-origin checks for public submissions and owner mutations.
- Cloudflare Access JWT verification for the private review page and admin API.
- Content Security Policy, anti-framing, MIME-sniffing protection, a restrictive
  permissions policy, and safe referrer behavior on all Worker responses.
- Secrets stay in encrypted Worker secrets. The repository contains only public
  identifiers and placeholders.

## Required Cloudflare dashboard controls

1. Keep Cloudflare DDoS managed rules at their recommended defaults.
2. Keep the Worker Rate Limiting binding in `wrangler.jsonc`; use a separate
   zone-level WAF rate-limiting rule for `/api/submissions` if the plan supports
   it.
3. Restrict the Turnstile widget to the exact production and preview hostnames.
4. Protect `/review-submissions*` and `/api/admin/*` with Cloudflare Access and
   allow only the owner email.
5. Review Worker, Turnstile, WAF, and D1 analytics after launch. Investigate
   repeated 403, 429, Turnstile failure, or unusual geographic traffic spikes.
6. Rotate secrets immediately if access changes or a credential may have been
   exposed. Never paste secret values into source control, build logs, or chat.

## Incident response

- During an attack, temporarily challenge or block `/api/submissions` at the
  WAF layer before disabling the learning site.
- Preserve the static vocabulary experience even when submissions are paused.
- Revoke compromised Access sessions, rotate secrets, and review submission
  records before reopening the form.
- Roll back to the last verified Worker deployment if a release introduced the
  issue.
