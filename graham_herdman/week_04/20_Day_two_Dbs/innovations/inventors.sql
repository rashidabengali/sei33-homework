CREATE TABLE inventors (
  id INTEGER PRIMARY KEY,
  name TEXT,
  invention TEXT,
  image TEXT -- url text
);

-- seed data
INSERT INTO inventors (name, invention, image) VALUES ("Charles Babbage", "analytical engine", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Charles_Babbage_-_1860.jpg/440px-Charles_Babbage_-_1860.jpg");
