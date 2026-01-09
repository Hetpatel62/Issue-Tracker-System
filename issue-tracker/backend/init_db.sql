CREATE TABLE IF NOT EXISTS issues (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  priority TEXT CHECK(priority IN ('Low','Medium','High')),
  status TEXT CHECK(status IN ('Open','In Progress','Resolved')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO issues (title, description, priority, status)
VALUES
('Login failure', 'Users unable to log in', 'High', 'Open'),
('Slow dashboard', 'Dashboard loads slowly', 'Medium', 'In Progress');
