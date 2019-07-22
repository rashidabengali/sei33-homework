CREATE TABLE games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  image TEXT
);

INSERT INTO games (name, genre) VALUES ('Warcraft3', 'RTS');
