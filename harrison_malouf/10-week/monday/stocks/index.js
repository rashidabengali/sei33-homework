const express = require('express');
const ejs = require('ejs');
const stockfinder = require('stockfinder');

const PORT = 1337;
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d'

const server = express();
server.set('view-engine', 'ejs');

server.get('/', (req, res) => { //we always get a req & res
  res.render('home.ejs'); // the file we want to render
});

server.get('/info', (req, res) => {
  // console.log(req.query); // what's in request.params
  const symbol = req.query.symbol; // putting symbol into a variable
  stockfinder(symbol, APIKEY).then((response)=> {
    res.render('info.ejs', { symbol: symbol, price: response[0].lastSalePrice}); // if we wanna pass information from page to page
  })
});

server.listen(PORT, () => { // we have to tell the server to listen
  console.log(`Listening on http://localhost:${ PORT }`); // this console refers to the servers console
});
