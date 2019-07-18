
CREATE TABLE interior_design_style (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  image TEXT -- URL for a photo of a style
);

-- seed data
INSERT INTO interior_design_style
  (name, image, description)
VALUES
  ('MODERN', 'https://rocheledecorating.com.au/website-images/modernhome.jpg', 'Modern is a broad design term that typically refers to a home with clean, crisp lines, a simple colour palette and the use of materials that can include metal, glass and steel. Modern design employs a sense of simplicity in every element, including furniture. A word that’s commonly used to describe modern style is sleek, and there is not a lot of clutter or accessories involved with a modern style.'),
  ('MINIMALIST', 'https://rocheledecorating.com.au/website-images/property_styling_brisbane_2.jpg', 'The minimalist concept is one that’s popular here in Australia. It takes notions of modern design and simplifies them further. Colour palettes are neutral and airy; furnishings are simple and streamlined, and nothing is excessive or flamboyant in accessories or décor. Minimalism is ultimately defined by a sense of functionality and ultra-clean lines.'),
  ('SCANDINAVIAN', 'https://rocheledecorating.com.au/website-images/Scandinavian_design.jpg', 'Scandanavian design pays homage to the simplicity of life demonstrated in Nordic countries. Scandinavian furniture design often feels like a work of art, although it is simple and understated. There’s functionality in the furniture along with some interesting lines, many of which have a sculptural influence. Other common characteristics include all-white colour palettes and the incorporation of natural elements like form-pressed wood, bright plastics, and enameled aluminum, steel and wide plank flooring. If there are pops of colour it often comes from the use of art, natural fibre throws or furs, or a single piece of furniture. Spacious, natural lighting, less accessories and functional furniture characterizes Scandinavian designs.');