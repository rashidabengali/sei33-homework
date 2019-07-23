CREATE TABLE footballers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  team TEXT,
  image TEXT -- URL for a photo of a footballer 
);

-- seed data
INSERT INTO footballers (name, team) VALUES ('Francesco Totti', 'Roma');
