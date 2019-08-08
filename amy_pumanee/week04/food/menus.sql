CREATE TABLE menus (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  methods TEXT,
  image TEXT -- URL for a photo of a menu
);

-- seed data
INSERT INTO menus (name, methods) VALUES ('Pad Se Ew', 'Stir-frying');
INSERT INTO menus (name, methods) VALUES ('Yakitori', 'Grilling');
