DROP TABLE users;

CREATE TABLE users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullname TEXT,
  email TEXT,
  password TEXT
);


--seed

INSERT INTO users(id,fullname,email,password) VALUES (1, 'ADAM', 'Adam@gamil.com','1234567890');
