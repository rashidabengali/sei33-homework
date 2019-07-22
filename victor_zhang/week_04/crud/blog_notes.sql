CREATE TABLE blog_notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  entry_date TEXT,
  entry TEXT,
  image TEXT,
  tags TEXT
);


-- seed data
INSERT INTO blog_notes (title, entry) VALUES ('Beginning a new life as a Dev', 'Will update with a paragraph soon');
