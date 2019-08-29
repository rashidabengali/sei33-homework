const express = require('express');
const ejs = require('ejs');
// const _ = require('underscore');
const axios = require('axios');
var convert = require('xml-js');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337; // Single variable for ease of modifcaion later;

server.get("/", (req, res)=>{
    res.render("home.ejs");
});

server.get("/book", (req, res)=>{
    res.render("book.ejs");
});

server.get("/bookresult/:title", (req, res)=>{
    const title = req.params.title;
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${title}`;
    
    axios.get(url).then((response) =>{
        if (response && response.data){
            const data = response.data;
            const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
            
            res.render("bookresult.ejs", {title:title, imagesource:cover});
        } else {
            res.render("bookresult.ejs", {title:title, imagesource:""});
        }
    });
});

server.get("/stock", (req, res) => {
    res.render("stock.ejs");
});

server.get("/stockresult/:code", (req, res) => {
    const stockCode = req.params.code;
    const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote`;
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.get(url, {params:{symbol: stockCode}}).then((response)=>{
        if (response && response.data){
            const convertJson = convert.xml2json(response.data, {compact: true, spaces: 4});
            const output = JSON.parse(convertJson);
            res.render("stockresult.ejs", {stockcode:stockCode, data: output.StockQuote.LastPrice._text });
        }
    })
    
})
server.listen(PORT, ()=>{
    console.log(`Now serving on http://localhost:${PORT}/`)
});