CREATE TABLE books (
id INTEGER PRIMARY KEY AUTOINCREMENT,
title TEXT,
author TEXT,
genre TEXT,
summary TEXT,
image TEXT
);

INSERT INTO books ("id", "title", "author", "genre", "summary", "image") VALUES

(1, "The Great Gatsby", "F. Scott Fitzgerald", "Tragedy",
  "The Great Gatsby is the story of eccentric millionaire
  Jay Gatsby as told by Nick Carraway, a Midwesterner who
  lives on Long Island but works in Manhattan. Gatsby's enormous
  mansion is adjacent to Carraway's modest home, and Carraway becomes curious about
  his neighbor after being invited to one of his famous parties.",
   "~/projects/gatsby.jpeg");
