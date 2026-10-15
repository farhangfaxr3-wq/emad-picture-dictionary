CREATE TABLE IF NOT EXISTS submissions (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('feedback', 'suggestion')),
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected', 'needs-review')),
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  category TEXT,
  email TEXT,
  normalized_word TEXT,
  payload_json TEXT NOT NULL,
  source_page TEXT,
  owner_note TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  reviewed_at TEXT
);

CREATE INDEX IF NOT EXISTS submissions_status_created
  ON submissions (status, created_at DESC);
CREATE INDEX IF NOT EXISTS submissions_normalized_word
  ON submissions (normalized_word);

CREATE TABLE IF NOT EXISTS canonical_words (
  id TEXT PRIMARY KEY,
  word TEXT NOT NULL,
  normalized_word TEXT NOT NULL UNIQUE,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS submission_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  identifier_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS submission_events_rate_limit
  ON submission_events (identifier_hash, created_at DESC);
