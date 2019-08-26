CREATE TABLE boardgame (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    min_player INTEGER,
    max_player INTEGER,
    publisher TEXT,
    image TEXT
);

-- seed data
INSERT INTO boardgame (name, min_player, max_player, publisher, image) VALUES ("Scythe", 1, 5, "Stonemaier Games", "https://cf.geekdo-images.com/imagepage/img/VrePp6I9_HXw_NtBe4NFcwF5dRQ=/fit-in/900x600/filters:no_upscale()/pic3163924.jpg");
INSERT INTO boardgame (name, min_player, max_player, publisher, image) VALUES ("Wingspan", 1, 5, "Stonemaier Games", "https://cf.geekdo-images.com/imagepage/img/r6sY9GDaiavqrxY25QjhNB68sBM=/fit-in/900x600/filters:no_upscale()/pic4458123.jpg");
