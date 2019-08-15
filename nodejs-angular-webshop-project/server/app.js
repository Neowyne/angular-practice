const http = require('http');
const path = require('path');
const port = 3210;
const GetHandler = require('./module/getHandler');

<<<<<<< HEAD
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    switch (req.method.toLowerCase()) {
        case 'get': new GetHandler(req, res);
            break;
        default: res.end('Invalid method');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}.`);
});
=======
const server = http.createServer( (req, res) => {
  switch( req.method.toLowerCase() ) {
    case 'get': new GetHandler(req, res);
    break;
    default: res.end('Invalid method');
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}.`);
});
>>>>>>> 144301cba7e18638c5a0bba2887f52b0be221d99
