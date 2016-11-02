var http   = require("http"); //导入http模块
var fs     = require("fs");
var server = http.createServer(function(req, res) {
    //req请求信息  res响应信息
    var cur_path = "./";
    if (req.url == '/my') {
        fs.readFile(cur_path + "my.html", "utf-8", function(err, data) {
            if (err) res.end("read File error");
            res.writeHead(200, {
                "Content-Type": 'text/html;charset=utf-8'
            }); //写响应头，设置状态码
            res.write(data); //写入内容到页面中
            res.end(); //结束该次请求响应
        });
    } else if (req.url == "/test") {
        fs.readFile(cur_path + "test.html", "utf-8", function(err, data) {
            if (err) res.end("read File error");
            res.writeHead(200, {
                "Content-Type": 'text/html;charset=utf-8'
            }); //写响应头，设置状态码
            res.write(data); //写入内容到页面中
            res.end(); //结束该次请求响应
        });
    } else if (req.url == "/css/myone.css") {
        fs.readFile(cur_path + "css/my.css", "utf-8", function(err, data) {
            if (err) res.end("read File error");
            res.writeHead(200, {
                "Content-Type": 'text/css'
            });
            res.write(data); //写入内容到页面中
            res.end(); //结束该次请求响应
        });
    } else if (req.url == "/images/test.jpg") {
        fs.readFile(cur_path + "images/test.jpg", function(err, data) {
            if (err) res.end("read File error");
            res.writeHead(200, {
                "Content-Type": 'images/jpg'
            });
            res.write(data); //写入内容到页面中
            res.end(); //结束该次请求响应
        });
    } else {
        res.end("daheige");
    }
});
server.listen(8000);