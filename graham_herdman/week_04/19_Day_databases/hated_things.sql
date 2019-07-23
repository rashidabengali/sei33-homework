CREATE TABLE hated_things(
  id INTEGER PRIMARY KEY,
  thing TEXT,
  why TEXT,
  image TEXT
);

-- populate the database
INSERT INTO hated_things (id, thing, why, image) VALUES (1, "Mark Zuckerberg", "Envy", "https://www.extremetech.com/wp-content/uploads/2014/03/thezuck-640x353.jpg");
