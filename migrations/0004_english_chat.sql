PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS chat_accounts (
  id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  display_name_key TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'restricted')),
  restricted_until TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS chat_credentials (
  credential_id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL,
  public_key TEXT NOT NULL,
  counter INTEGER NOT NULL DEFAULT 0,
  transports_json TEXT NOT NULL DEFAULT '[]',
  device_type TEXT NOT NULL,
  backed_up INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  last_used_at TEXT,
  FOREIGN KEY (account_id) REFERENCES chat_accounts(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_chat_credentials_account
  ON chat_credentials(account_id);

CREATE TABLE IF NOT EXISTS chat_challenges (
  id TEXT PRIMARY KEY,
  purpose TEXT NOT NULL CHECK (purpose IN ('register', 'login')),
  account_id TEXT,
  display_name TEXT,
  challenge TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_chat_challenges_expiry
  ON chat_challenges(expires_at);

CREATE TABLE IF NOT EXISTS chat_sessions (
  token_hash TEXT PRIMARY KEY,
  account_id TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  last_seen_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (account_id) REFERENCES chat_accounts(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_chat_sessions_account
  ON chat_sessions(account_id);
CREATE INDEX IF NOT EXISTS idx_chat_sessions_expiry
  ON chat_sessions(expires_at);

CREATE TABLE IF NOT EXISTS chat_messages (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL,
  body TEXT NOT NULL CHECK (length(body) BETWEEN 1 AND 300),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  hidden_at TEXT,
  hidden_by TEXT,
  FOREIGN KEY (account_id) REFERENCES chat_accounts(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_chat_messages_visible
  ON chat_messages(created_at DESC) WHERE hidden_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_chat_messages_account
  ON chat_messages(account_id, created_at DESC);

CREATE TABLE IF NOT EXISTS chat_reports (
  id TEXT PRIMARY KEY,
  message_id TEXT NOT NULL,
  reporter_account_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'dismissed')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  reviewed_at TEXT,
  reviewed_by TEXT,
  UNIQUE (message_id, reporter_account_id),
  FOREIGN KEY (message_id) REFERENCES chat_messages(id) ON DELETE CASCADE,
  FOREIGN KEY (reporter_account_id) REFERENCES chat_accounts(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_chat_reports_status
  ON chat_reports(status, created_at DESC);
