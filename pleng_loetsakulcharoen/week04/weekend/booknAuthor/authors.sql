CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  nationality TEXT,
  image TEXT
);

--seed data --

INSERT INTO authors ("id", "name", "nationality", "image") VALUES ( 1, "JK Rowling", "English", "");
