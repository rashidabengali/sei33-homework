CREATE TABLE inventions (
  id INTEGER PRIMARY KEY,
  name TEXT,
  inventor TEXT,
  description TEXT,
  image TEXT -- url text
);

-- seed data
INSERT INTO inventions (name, inventor, description, image) VALUES ("analytical engine", "Charles Babbage", "first digital programmable computer that carried out computation through a mechanical framework as opposed to modern day electronic computers", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/AnalyticalMachine_Babbage_London.jpg/440px-AnalyticalMachine_Babbage_London.jpg");
