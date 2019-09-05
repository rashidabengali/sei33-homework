const axios = require("axios");
const ejs = require("ejs");
const express = require("express");
const yahooStockPrices = require("yahoo-stock-prices");

const server = express();
server.use(express.static("/public"));
server.set("view-engine", ejs);
server.use(express.urlencoded());

const PORT = 1337;

server.get("/", (req, res) => {
  console.log("GET /");
  res.render("home.ejs");
});

// receive book request
server.post("/bookdetail", (req, res) => {
  const bookname = req.body.name_field;
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${bookname}`;

  axios
    .get(url)
    .then(function(response) {
      res.render("showBook.ejs", { bookDetail: response.data });
    })
    .catch(function(error) {
      console.log(error);
    });
});

// receive stock price quote request
server.post("/stockprice", (req, res) => {
  const stockName = req.body.stock_field;
  yahooStockPrices.getCurrentPrice(stockName, function(err, price) {
    console.log(price);
    res.render("stockPrice.ejs", { stockName: stockName, stockPrice: price });
  });
});

server.listen(PORT, () => {
  console.log(`Running server on http://localhost:${PORT}/`);
});
