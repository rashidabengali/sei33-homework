CREATE TABLE teams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  brand TEXT,
  country TEXT,
  logo TEXT --url
);

--seed data
INSERT INTO teams VALUES ('Ineos', 'Pinarello', 'Great Britain', 'https://pbs.twimg.com/profile_images/1123526816042487810/Nu3ckF7U_400x400.png')
INSERT INTO teams VALUES ('AG2R La Mondiale', 'Eddy Merckx', ' France', 'https://upload.wikimedia.org/wikipedia/en/7/7d/Ag2r-La_Mondiale_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Astana', 'Argon 18', ' Kazakhstan', 'https://www.nicepng.com/png/detail/276-2767673_astana-pro-team-logo-ideas-team-astana.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Bahrain–Merida', 'Merida', ' Bahrain', 'https://upload.wikimedia.org/wikipedia/en/c/c9/Bahrain%E2%80%93Merida_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Bora–Hansgrohe', 'S-Works', ' Germany', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Bora%E2%80%93Hansgrohe_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('CCC Team', 'Giant', ' Poland', 'https://upload.wikimedia.org/wikipedia/commons/2/25/Cccteamlogo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Deceuninck–Quick-Step', 'S-Works', ' Belgium', 'https://upload.wikimedia.org/wikipedia/en/9/94/Deceuninck_quick_step_cycling_team_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('EF Education First', 'Cannondale', ' United States', 'https://upload.wikimedia.org/wikipedia/commons/9/95/EF_Education_First_Pro_Cycling_Team_Logo.jpg')
INSERT INTO teams (name, brand, country, logo) VALUES ('Groupama–FDJ', 'Lapierre', ' France', 'https://upload.wikimedia.org/wikipedia/en/1/1c/FDJ_%28cycling_team%29_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Lotto–Soudal', 'Ridley', ' Belgium', 'https://upload.wikimedia.org/wikipedia/en/2/2f/Lotto%E2%80%93Soudal_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Mitchelton–Scott', 'Scott', ' Australia', 'https://upload.wikimedia.org/wikipedia/en/c/ca/Mitchelton%E2%80%93Scott_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Movistar Team', 'Canyon', ' Spain', 'https://upload.wikimedia.org/wikipedia/en/4/49/Team_Movistar_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Team Dimension Data', 'BMC', ' South Africa', 'https://upload.wikimedia.org/wikipedia/en/b/b8/Dimension_Data_%28cycling_team%29_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Team Jumbo–Visma', 'Bianchi', ' Netherlands', 'https://upload.wikimedia.org/wikipedia/en/c/c0/Team_Jumbo-Visma.jpg')
INSERT INTO teams (name, brand, country, logo) VALUES ('Team Katusha–Alpecin', 'Canyon', '  Switzerland', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Team_Katusha_Alpecin_Logo_2019.svg/2880px-Team_Katusha_Alpecin_Logo_2019.svg.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Team Ineos', 'Pinarello', ' Great Britain', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Team_Ineos_logo.svg/2880px-Team_Ineos_logo.svg.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Team Sunweb', 'Cervélo', ' Germany', 'https://upload.wikimedia.org/wikipedia/en/1/12/Team_Sunweb_logo.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('Trek–Segafredo', 'Trek', ' United States', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Trek%E2%80%93Segafredo_logo.svg/1920px-Trek%E2%80%93Segafredo_logo.svg.png')
INSERT INTO teams (name, brand, country, logo) VALUES ('UAE Team Emirates', 'Colnago', ' United Arab Emirates', 'https://upload.wikimedia.org/wikipedia/en/c/c8/UAE_Team_Emirates.png')
