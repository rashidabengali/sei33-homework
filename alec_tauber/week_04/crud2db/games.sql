CREATE TABLE games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  genre TEXT, -- Action, FPS, MMO, RPG
  platform TEXT,
  image TEXT,
  price FLOAT
);

-- Seed data
INSERT INTO games (id, title, genre, platform) VALUES (1, 'Halo', 'Action', 'PC');
