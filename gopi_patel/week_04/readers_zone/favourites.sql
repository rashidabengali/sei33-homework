DROP TABLE favourites;

CREATE TABLE favourites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  book_title TEXT,
  book_cover TEXT,
  google_book_id TEXT,
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)

);


--seed

INSERT INTO favourites(book_title, book_cover, google_book_id, user_id) VALUES ('JavaScript', 'http://books.google.com/books/content?id=vJGlu9t9LNYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'vJGlu9t9LNYC', 1);
