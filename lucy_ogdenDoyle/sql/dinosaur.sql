CREATE TABLE dinosaurs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nickname TEXT,
  genus TEXT,
  family TEXT,
  height FLOAT,
  eaten_by TEXT,
  diet TEXT,
  image TEXT
);

INSERT INTO dinosaurs (nickname, genus, family, height, eaten_by, diet, image) VALUES ("Dopey", "Diplodocus", "Diplodocidae", 9.2, "Torvosaurus", "herbivore", "https://vignette.wikia.nocookie.net/walkingwith/images/3/34/WWDBook_Diplodocus.jpg/revision/latest?cb=20131123073046");
