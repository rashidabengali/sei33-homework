CREATE TABLE moons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    mass TEXT,
    image TEXT
);

-- seed DATA
INSERT INTO moons (name, mass, image) VALUES ('Moon', '7.342×1022 kg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/440px-FullMoon2010.jpg');
