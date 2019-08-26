const express = require('express');
const server = express();
const axios = require('axios');
const ejs = require('ejs');

server.set('view-engine', ejs);


const PORT = 1337;
server.get('/api/books/:title', async (req, res) => {
  const title = req.params.title;
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
  res.send({
    books: response.data.items

  })

})
server.get('/', async (req, res) => {
  const title = req.query.title;
  if (title) {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
    res.render('home.ejs', { books: response.data.items, title: title })
  } else {
    res.render('home.ejs', { books: [], title: '' })
  }

})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);

});

