
CREATE TABLE interior_design_styles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  image TEXT -- URL for a photo of a style
);
CREATE TABLE furnitures (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  image TEXT -- URL for a photo of a style
);

-- seed data
INSERT INTO interior_design_styles
  (name, image, description)
VALUES
  ('MODERN', 'http://www.beautifulhabitat.com/wp-content/uploads/2015/11/1_pearsondesigngroup.jpg', 'Modern is a broad design term that typically refers to a home with clean, crisp lines, a simple colour palette and the use of materials that can include metal, glass and steel. Modern design employs a sense of simplicity in every element, including furniture. A word that’s commonly used to describe modern style is sleek, and there is not a lot of clutter or accessories involved with a modern style.'),
  ('MINIMALIST', 'https://freshome.com/wp-content/uploads/2016/01/minimalism-freshome-1.png', 'The minimalist concept is one that’s popular here in Australia. It takes notions of modern design and simplifies them further. Colour palettes are neutral and airy; furnishings are simple and streamlined, and nothing is excessive or flamboyant in accessories or décor. Minimalism is ultimately defined by a sense of functionality and ultra-clean lines.'),
  ('SCANDINAVIAN', 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/5/16/1/FOD17_Urbanology-Designs_Howard-Scandinavian-Bed-LR_10.jpg.rend.hgtvcom.966.644.suffix/1494952923172.jpeg', 'Scandanavian design pays homage to the simplicity of life demonstrated in Nordic countries. Scandinavian furniture design often feels like a work of art, although it is simple and understated. There’s functionality in the furniture along with some interesting lines, many of which have a sculptural influence. Other common characteristics include all-white colour palettes and the incorporation of natural elements like form-pressed wood, bright plastics, and enameled aluminum, steel and wide plank flooring. If there are pops of colour it often comes from the use of art, natural fibre throws or furs, or a single piece of furniture. Spacious, natural lighting, less accessories and functional furniture characterizes Scandinavian designs.');


INSERT INTO furnitures
  (name, image, description)
VALUES
  ('Chair 1', 'https://cdn.shopify.com/s/files/1/0042/2782/products/chairs-marcel-breuer-wassily-chair-1_large.jpeg?v=1546005546', 'Marcel Breuers Wassily Chair (1925) is one of the most famous products of the Bauhaus School. It is a club armchair with all the stuffing taken out, leaving a behind a skeletal framework and stretched seat, back, and arms.'),
  ('Chair 2', 'https://ae01.alicdn.com/kf/HTB1QYIkPFXXXXXvXFXXq6xXFXXXG/minimalist-style-Lounge-Chair-Plywood-Designer-Living-Room-furniture-Chair-High-Quality-modern-Wood-Color-wood.jpg_640x640.jpg', ' the most famous products of the Ba');