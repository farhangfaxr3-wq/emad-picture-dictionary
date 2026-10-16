# Emad WordLink release readiness

This document closes the review portion of Stage 7. The current branch is a
local release candidate only. Production deployment remains intentionally
blocked until the owner explicitly approves it and the Cloudflare placeholders
listed below are configured.

## Completed work

- The existing visual identity, navigation, university branding, production URL
  contract, and browser-stored learner progress are preserved.
- Vocabulary now has one canonical, validated source with 2,023 records across
  19 topics and seven controlled 100-word expansion batches.
- CEFR A1-C2 filtering is shared by Dictionary, topic learning, and Practice.
  Level estimates remain clearly provisional until educator review.
- Learner progress includes recent words, favorites, activity history,
  spaced-review timing, mastery, statistics, and portable backup/restore.
- Feedback and vocabulary suggestions use honest server responses, input
  validation, duplicate checks, Turnstile support, D1 storage, rate limiting,
  and a signed-session owner review flow with per-administrator passwords.
- Route-only learning components are lazy loaded. Production code is separated
  into framework, icon, vocabulary, visual, and page chunks, with an automated
  500 KiB maximum JavaScript chunk check.
- Words without an accurate verified image now remain image-free instead of
  showing a potentially misleading topic photograph. Their definitions,
  examples, pronunciation, CEFR filtering, and non-image activities remain
  available.

## Verification checklist

Run these commands from the project directory before every release:

1. `pnpm test:vocabulary`
2. `pnpm test:submissions`
3. `pnpm exec tsc --noEmit`
4. `pnpm test:bundle`
5. Open the local site and smoke-test Home, Dictionary, one topic course,
   Practice, Feedback, Settings, and the protected review route at mobile,
   tablet, and desktop widths.

The current automated candidate passes the vocabulary audit, all eight Worker
tests, TypeScript, the production build, and the bundle-size guard. Browser QA
passed before the final performance split; a final post-split manual smoke test
is still required because browser-control access was unavailable during this
release review.

## Known limitations and review work

- The 8,000-word target is a controlled editorial programme, not a finished
  claim. The current catalogue is 2,023 words; 5,977 reviewed additions remain.
- The current UI reports 1,051 checked word-specific photographs and 972
  entries without a displayed image while exact-image review is pending.
- CEFR labels in the controlled batches require educator review before they can
  be described as verified classifications.
- Production feedback is deliberately unavailable until D1, Turnstile, the
  owner authentication secrets, and the remaining encrypted Worker secrets are
  configured.
- Approved learner suggestions enter an editorial queue. They are never
  published directly into the canonical vocabulary.

## Cloudflare release procedure

1. Create the D1 database and replace `REPLACE_WITH_YOUR_D1_DATABASE_ID` in
   `wrangler.jsonc`.
2. Configure `VITE_TURNSTILE_SITE_KEY`, `TURNSTILE_HOSTNAMES`, plus encrypted
   `TURNSTILE_SECRET_KEY` and `SUBMISSION_HASH_SECRET` Worker secrets.
3. Run `pnpm admin:configure` and enter a distinct strong password for each
   approved administrator email.
4. Apply all D1 migrations to the remote database.
5. Run `pnpm export:canonical-words`, then apply the generated
   `.tmp-canonical-words.sql` to the remote D1 database.
6. Run the full verification checklist and complete the final browser smoke
   test against a preview deployment.
7. Confirm a feedback submission can be saved and privately reviewed, then
   verify approve, edit, reject, duplicate, spam, and unauthorized-access cases.
8. Only after explicit owner approval, deploy the same verified commit with
   `npx wrangler deploy`.

## Rollback and recovery

- Keep the previous Cloudflare deployment available for immediate rollback.
- Do not reset browser storage; stable vocabulary IDs preserve learner progress.
- Export a Settings backup before production testing on any real learner
  profile.
- Back up the D1 database before schema or canonical-index changes.
- If a release fails verification, redeploy the last known-good commit and keep
  the failed candidate off production.
