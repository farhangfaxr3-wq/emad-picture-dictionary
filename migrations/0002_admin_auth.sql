CREATE TABLE IF NOT EXISTS admin_login_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  identifier_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS admin_login_events_rate_limit
  ON admin_login_events (identifier_hash, created_at DESC);
