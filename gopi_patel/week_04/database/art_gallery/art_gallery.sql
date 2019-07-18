DROP TABLE paintings;

CREATE TABLE paintings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  painting_name TEXT,
  artist_name TEXT,
  year INTEGER,
  location TEXT,
  dimention TEXT,
  medium TEXT,
  image TEXT
);


-- seed
INSERT INTO paintings (painting_name,artist_name,year,location,dimention,medium,image) VALUES ('Starry Night','Vincent van Gogh',1889,'Museum of Modern Art, New York City','73.7 cm × 92.1 cm', 'Oil on canvas','https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/300px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg');


INSERT INTO paintings (painting_name,artist_name,year,location,dimention,medium,image) VALUES ('Mona Lisa','Leonardo da Vinci',1517,'The Louvre Museum, Paris','77 cm × 53 cm','Oil on poplar panel', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/300px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg');
