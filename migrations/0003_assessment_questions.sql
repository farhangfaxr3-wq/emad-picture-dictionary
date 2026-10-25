CREATE TABLE IF NOT EXISTS assessment_questions (
  id TEXT PRIMARY KEY,
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'approved', 'rejected', 'needs-review')),
  bank_version TEXT NOT NULL,
  skill TEXT NOT NULL
    CHECK (skill IN ('vocabulary', 'grammar', 'reading', 'listening')),
  cefr_level TEXT NOT NULL
    CHECK (cefr_level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  prompt TEXT NOT NULL,
  options_json TEXT NOT NULL,
  correct_index INTEGER NOT NULL CHECK (correct_index BETWEEN 0 AND 3),
  explanation TEXT NOT NULL,
  passage TEXT,
  audio_text TEXT,
  source_id TEXT,
  source_label TEXT,
  source_confidence TEXT
    CHECK (source_confidence IS NULL OR source_confidence IN ('low', 'medium', 'high')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  reviewed_at TEXT
);

CREATE INDEX IF NOT EXISTS assessment_questions_status_level
  ON assessment_questions (status, skill, cefr_level, created_at DESC);

CREATE INDEX IF NOT EXISTS assessment_questions_source
  ON assessment_questions (source_id);
