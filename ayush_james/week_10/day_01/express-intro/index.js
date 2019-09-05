const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337; // Single variable for ease of modification later.

server.get('/', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('bookfinder.ejs', {book: response.data });
  });
})

server.listen(PORT, () => { console.log(`Now serving on http://localhost:${ PORT }/`) });
