CREATE TABLE versions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_name TEXT,
  version TEXT,
  image TEXT
);


-- seed data
INSERT INTO versions (project_name, version) VALUES ('Bomberman', '1.0');
