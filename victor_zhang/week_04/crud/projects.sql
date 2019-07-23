CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  entry_date TEXT,
  link TEXT,
  tags TEXT -- Topics (Ruby, JavaScript, etc)
);


-- seed data
INSERT INTO projects (name, tags) VALUES ('Bomberman - Project0', 'JavaScript, HTML, CSS');
