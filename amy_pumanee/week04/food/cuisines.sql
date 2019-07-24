CREATE TABLE cuisines (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT -- URL for a photo of a cusine
);

-- seed data
INSERT INTO cuisines (name) VALUES ('Thai Cusine');
INSERT INTO cuisines (name) VALUES ('Japanses Cusine');
