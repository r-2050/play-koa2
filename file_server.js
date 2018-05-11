'use starct'

var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录；
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir:' + root);

// 创建服务器；
var server = http.createServer(function (require, response) {
    // 获取URL的path, 类似'css/bootstrap.css',
    var pathname = url.parse(require.url).pathname;
    // 获取对应的贝蒂文件路径，类似 '/srv/www/css/bootstrap.css' 
    var filepath = path.join(root, pathname);

    // 获取文件状态
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在；
            console.log('200' + require.url);
            // 发送200响应；
            response.writeHead(200);

            // 将文件流导向response;
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 出错了或者文件不存在；
            console.log('404' + request.url);
            // 发送404响应；
            response.writeHead(404);
            response.end('404 Not Fund');
        }
    });
});

server.listen(9200);
console.log('server is running at http://127.0.0.1:9200/');