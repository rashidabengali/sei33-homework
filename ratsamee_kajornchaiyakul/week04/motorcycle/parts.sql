CREATE TABLE parts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    partNumber TEXT,
    name TEXT,
    price MONEY,
    image TEXT,
    description TEXT
);

-- Seed data --
INSERT INTO parts(partNumber, name, price, image, description) VALUES
('3PW1511504', 'STREET EVO JACKET LGE', 369,
'https://www.ktmonlineparts.com.au/img/thumb/400x250/webcontent/3PW1511503.jpg', 
'High-quality, versatile touring jacket. Breathable, wind and waterproof thanks to integrated Z-liner. Concealed, waterproof document pocket. Water-repellent 330D nylon. Waterproof front fastener. Water-repellent YKK zips.')