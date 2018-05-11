"use stract";

var http = require("http");

var server = http.createServer(function(require, response) {
  // console.log(require);
  // console.log(response);
  console.log(require.method + ":" + require.url);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>hello World</h1>");
});

server.listen(9005);

console.log("Server is running at http://127.0.0.1:9005/");
