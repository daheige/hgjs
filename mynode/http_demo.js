var http = require("http"); //导入http模块
var fs   = require("fs");
var server = http.createServer(function(req, res) {
    //req请求信息  res响应信息
    res.setHeader('X-Foo', 'bar'); //设置响应头，key/val形式设置响应头
    res.writeHead(200, {
        "Content-Type": 'text/html;charset=utf-8'
    }); //写响应头，设置状态码 支持多个返回头设置 text/plain表示纯文本
    res.write("<h1>这是一个测试，fefefe</h1>"); //写入内容到页面中
    res.end(); //结束该次请求响应
});
server.listen(1337, "localhost");
console.log("this demo listen 1337");

