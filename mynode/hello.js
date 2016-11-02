var http   = require("http"); //导入http模块
var server = http.createServer(function(req, res) {
    //req请求信息  res响应信息
    res.writeHead(200,{"Content-Type":'text/html;charset=utf-8'}); //写响应头，设置状态码
    res.write("<h1>hello world,daheige</h1>");//写入内容到页面中
    res.end();//结束该次请求响应
});
server.listen(8000);