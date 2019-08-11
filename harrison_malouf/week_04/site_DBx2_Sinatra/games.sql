-- games table
CREATE TABLE GAMES (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  release INTEGER,
  image TEXT
);

--Seed data

INSERT INTO games (name, release) VALUES ('Doom Eternal', 2019);
