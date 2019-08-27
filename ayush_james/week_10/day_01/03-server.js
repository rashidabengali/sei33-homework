const http = require('http'); // From the Node standard library.

http.createServer((req, res) => {
  // This callback runs every time a request hits the server.

  console.log(`Serving request ${ req.method } ${ req.url }`); //Lazy way to do logging

  res.writeHeader(200, {'Content-Type': 'text/plain'});

//This is terribly tedious
  if (req.url === '/groucho') {
    res.end('Hello From Groucho');
  } else if (req.url === '/harpo') {
    res.end('Hello From Harpo');
  } else {
    res.end('Hello From Nobody in Particular');
  }
}).listen(1337);

console.log('Server is running at http://localhost:1337');
