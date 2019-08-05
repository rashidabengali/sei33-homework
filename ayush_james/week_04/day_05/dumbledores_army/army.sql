CREATE TABLE army (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  patronus TEXT,
  image TEXT
);

-- seed data
INSERT INTO army (first_name, last_name, patronus) VALUES ('Harry', 'Potter', 'Stag');
