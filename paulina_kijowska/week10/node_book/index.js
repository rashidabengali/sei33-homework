const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs); // See docs

const PORT = 1337; // Single variable for ease of modification later.




server.listen(PORT, () => { console.log(`Now serving on http://localhost:${ PORT }/`) });
