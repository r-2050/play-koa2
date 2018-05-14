"use stract";

// 导入http模块
var http = require("http");

// 创建http server,并传入回调函数
var server = http.createServer(function (request, response) {
  // console.log(request);
  // console.log(response);
  // 回调函数接收request 和 response对象
  // 获取http请求的url和method
  console.log(request.method + ":" + request.url);

  // 将http响应200写入response, 同时设置  Content-Type: text/html;
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  // 将http相应的html内容写入response;
  response.end("<h1>hello World</h1>");
});

// 让服务器监听端口；
server.listen(9005);

console.log("Server is running at http://127.0.0.1:9005/");