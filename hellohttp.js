'use stract'

var http = require('http');

var server = http.createServer(function (require, response) {
    console.log(require);
    console.log(response);

});

server.listen(9002);

console.log('Server is runding at http://127.0.0.1:9002/');