CREATE TABLE footballers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  position TEXT,
  image TEXT, -- url for a footballer photo
  team_id INTEGER
);

-- seed
INSERT INTO footballers (name, position, team_id) VALUES ('Francesco Totti', 'Midfield',1);
INSERT INTO footballers (name, position, team_id) VALUES ('Cristiano Ronaldo', 'Forward',2);
