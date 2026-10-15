# Emad WordLink vocabulary architecture

The learner-facing UI and the vocabulary catalogue are intentionally separate.
This keeps future vocabulary batches reviewable and prevents content work from
accidentally changing navigation, progress, or practice behavior.

## Source flow

1. `src/app/coreWords.ts` contains the small hand-written starter set.
2. `src/app/content.ts` expands the established vocabulary records.
3. `src/app/categoryCatalog.ts` adds category groups, imagery status, audio,
   relations, and provisional CEFR metadata.
4. `src/app/vocabulary.ts` assembles the final catalogue and runs structural
   validation before the UI imports it.
5. `src/app/vocabularyBatches/` contains bounded, source-controlled additions.
   Each batch is checked against the complete earlier catalogue before merging.
6. `src/app/App.tsx` consumes the finished, validated catalogue and contains no
   raw starter vocabulary records.

## Required word fields

Every finished word must have a stable `id`, display `word`, pronunciation,
topic, subgroup, definition, example, part of speech, related-word list, image
status, audio metadata, and CEFR metadata. CEFR estimates remain explicitly
provisional until an educator verifies them.

## Progress compatibility

Learner progress is keyed by the stable word `id`. Existing IDs must not be
renamed or reused for a different word. New vocabulary may be appended without
resetting the browser store. The store schema is versioned, normalized on read,
and can be exported or restored from Settings.

## Adding a vocabulary batch

Add a bounded batch, run TypeScript and the production build, then confirm that
the Settings catalogue check reports `structure passed`. Review any audit issue
before publishing. Image and CEFR status must describe the truth; never label a
context image or an estimated level as verified.

Batch 001 adds 100 entries across university study, digital life, health,
workplace English, the environment, communication, and community life. Its CEFR
labels and image matches remain provisional until educator and asset review.

Batch 002 adds 100 entries across travel, transportation, public places, food,
home life, clothing, and sport. It is validated against the legacy catalogue and
Batch 001 before merging, and its CEFR and image statuses remain provisional.

Batch 003 adds 100 entries across people, family relationships, daily routines,
classroom learning, and communication. The shared batch pipeline validates it
against the complete earlier catalogue before it becomes available to learners.

Batch 004 adds 100 entries across animals, nature, health, food systems, and
clothing. It follows the same sequential audit and remains provisional until
educator and image review are complete.

Batch 005 adds 100 primarily A2-B1 entries across home, school, travel, jobs,
and public places. Settings displays the catalogue's CEFR distribution so that
future batches can address level imbalances deliberately.

Batch 006 adds 100 advanced entries across academic study, technology,
professional work, civic life, and environmental systems. It deliberately adds
50 provisional C1 and 50 provisional C2 entries to address the advanced-level gap.
