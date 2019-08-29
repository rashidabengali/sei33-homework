const express = require('express');
const ejs = require('ejs');
const stockfinder = require('stockfinder');

const PORT = 1337;
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

const server = express();
server.set('view-engine', 'ejs');

server.get('/', (req, res) => {
  res.render('home.ejs');
});

//second route
server.get('/info', (req, res) => {
  const symbol =req.query.symbol;
  stockfinder(symbol, APIKEY).then((response) => {
    res.render('info.ejs', { symbol: symbol, price: response[0].lastSalePrice });
  })
  //console.log( req.query);
  //res.render('info.ejs', { symbol: req.query.symbol });
})


server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
