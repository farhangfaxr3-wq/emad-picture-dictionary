# Feedback and vocabulary suggestions setup

The website and Worker API are implemented, but production submissions remain
deliberately disabled until the Cloudflare resources below are configured. This
prevents the interface from claiming success when nothing was stored.

## Storage and cost choice

Cloudflare D1 is the practical fit because the website already deploys to a
Cloudflare Worker. The initial D1 and Turnstile free allowances are normally
enough for a university demonstration and small public learning site. No paid
email, account, or authentication service is required for learner submissions.

## Required Cloudflare configuration

1. Create a D1 database named `emad-wordlink-submissions`.
2. Replace the placeholder `database_id` in `wrangler.jsonc` with the returned
   D1 database ID.
3. Apply `migrations/0001_submissions.sql` to the remote database.
4. Create a Turnstile widget for the final production hostname. Add its public
   key as the build variable `VITE_TURNSTILE_SITE_KEY` and its secret key as the
   encrypted Worker secret `TURNSTILE_SECRET_KEY`.
5. Add a random encrypted Worker secret named `SUBMISSION_HASH_SECRET`. It is
   used only to hash temporary rate-limit identifiers; raw IP addresses are not
   stored.
6. Create a Cloudflare Access self-hosted application protecting
   `/review-submissions*` and `/api/admin/*`. Allow only the owner email.
7. Replace `ACCESS_TEAM_DOMAIN` and `ACCESS_AUD` in `wrangler.jsonc` with the
   Access team domain and application audience tag.
8. Run a preview deployment, submit one test feedback item, confirm it appears
   in the protected review queue, then test approve/reject before production.

## Security behavior

- The public API requires a valid Turnstile result.
- Requests are size-limited and all fields are normalized and validated again
  on the server.
- A honeypot, minimum form time, and hashed rate limit add further protection.
- Email is optional. Passwords, accounts, and student records are not requested.
- Suggestions are stored as `pending`; approval never edits or publishes the
  canonical vocabulary automatically.
- Admin API calls require a valid Cloudflare Access JWT whose audience and email
  match the configured owner.
- If D1, Turnstile, or secrets are missing, the API returns an honest error and
  saves nothing.

## Canonical duplicate checking

The learner form checks the currently bundled vocabulary immediately. The D1
API also rejects words already in `canonical_words` and suggestions already in
the review queue. Before launch, run `pnpm export:canonical-words` to generate
`.tmp-canonical-words.sql`, then apply it with
`npx wrangler d1 execute emad-wordlink-submissions --remote --file .tmp-canonical-words.sql`.
This synchronizes the validated vocabulary IDs and normalized display words into
`canonical_words`; the table is an index only and does not replace the
source-controlled catalogue. Re-run both commands after an approved vocabulary
release.
