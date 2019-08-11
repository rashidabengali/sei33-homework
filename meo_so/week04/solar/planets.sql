CREATE TABLE planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    mass TEXT,
    num_moons INTEGER,
    image TEXT
);

-- seed DATA
INSERT INTO planets (name, mass, num_moons) VALUES ('Earth', '5.97237×1024 kg', 1)