CREATE TABLE motorcycle(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand varchar(50),
    year INTEGER,
    color VARCHAR(30),
    body VARCHAR(50),
    price MONEY,
    image Text,
    description TEXT
);

INSERT INTO motorcycle(brand, year, color, body, price, image, description) 
VALUES ('Harley-Davidson', 2013, 'Black', 'Cruiser', 19995, 
'https://bikesales.pxcrush.net/bikes/private/swoqxoe6gjanwkq8zqcew3od.jpg?pxc_method=gravityfill&pxc_size=720,480&pxc_bgtype=self',
'2013 FXDWG DYNA WIDEGLIDE VIVID BLACK FLAMED
VANCE & HINES 2 INTO 1 BIG RADIUS EXHAUST IN BLACK
HEAVY BREATHER AIR CLEANER
CUSTOM REAR FENDER
PROGRESSIVE REAR SHOCKS
WILLIE G COVERS
FLAMED PEGS
TRAVELED 28990 KM
12 MOTH AUSTRALIA WIDE WARRANTY
12 MONTHS ROADSIDE ASSIST
$19,995 + ON ROAD COSTS');