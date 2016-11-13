//简单的html,css,js，图片静态文件的服务器处理
var http = require("http");
var fs   = require("fs");
var url  = require("url");
var path = require("path");//和路径相关的模块path
var server = http.createServer(function(req, res) {
    //解析用户的url地址为对象
    var pathname = url.parse(req.url).pathname;
    if(pathname == "/favicon.ico") res.end();
    if(pathname == "/" || pathname.indexOf(".") == -1) pathname = "/index.html";
    //读取静态文件
    var extname = path.extname(pathname); //得到拓展名
    fs.readFile("./myweb" + pathname, function(err, data) {
        if (err) {
            res.writeHead(200, {
                "Content-Type": "text/plain;charset=utf-8"
            });
            res.end("this page not found");
        }
        //获取文件的拓展名
        var mine_type = getFileMime(extname);
        res.writeHead(200,{"Content-Type":mine_type});//返回文件的响应头文件类型
        res.write(data);
        res.end();
    });
});
server.listen(8000); //我们可以监听80端口，这样可以通过localhost来访问，不需要加端口号
function getFileMime(extname){
    switch(extname){
        case ".html":
            return "text/html";
            break;
        case ".jpg":
            return "image/jpg";
            break;
        case ".png":
            return "image/png";
            break;
        case ".gif":
            return "image/gif";
            break;
        case ".css":
            return "text/css";
            break;
        case ".js":
            return "text/javascript";
            break;
        default:
            return "text/plain";
            break;
    }
}
