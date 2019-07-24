CREATE TABLE dogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  breed TEXT,
  intro TEXT,
  image TEXT
);

INSERT INTO dogs (name, breed, intro, image) VALUES ('Dakoda', 'Border Collie x Kelpie Dog', 'Playful and active', 'https://res.cloudinary.com/petrescue/image/upload/h_638,w_638,c_pad,q_auto:best,f_auto/v1553646542/gzk12n83fgkq5f7x4fvi.jpg')
