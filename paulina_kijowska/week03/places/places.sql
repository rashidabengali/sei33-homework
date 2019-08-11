CREATE TABLE places (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
description TEXT,
image TEXT
);

--seed data

INSERT INTO places (name, description) VALUES ('Manly', 'Bike tour')
