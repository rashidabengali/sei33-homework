CREATE TABLE bikes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  model TEXT,
  year NUMBER,
  image TEXT --url
);

--seed data
INSERT INTO bikes (brand, model, year, image) VALUES ('S-Works', 'Tarmac', 2019, 'https://www.lordgun.com.au/content/products/17265/zm_20190208-060020.jpg')
