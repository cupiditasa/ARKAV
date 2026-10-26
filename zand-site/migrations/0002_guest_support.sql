CREATE TABLE IF NOT EXISTS guest_support_threads (
  id TEXT PRIMARY KEY,
  token_hash TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'answered', 'closed')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS guest_support_threads_updated_idx ON guest_support_threads(updated_at DESC);

CREATE TABLE IF NOT EXISTS guest_support_messages (
  id TEXT PRIMARY KEY,
  thread_id TEXT NOT NULL REFERENCES guest_support_threads(id) ON DELETE CASCADE,
  sender_role TEXT NOT NULL CHECK (sender_role IN ('customer', 'admin')),
  sender_name TEXT NOT NULL DEFAULT '',
  sender_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  client_message_id TEXT,
  body TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE (thread_id, client_message_id)
);
CREATE INDEX IF NOT EXISTS guest_support_messages_thread_idx ON guest_support_messages(thread_id, created_at);
