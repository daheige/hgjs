//fs模块练习---fs.stat
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
       return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    fs.stat("./fs_test.js",function(err,stat){
        if(err) {
            console.log(err);
            res.end();
        }
        console.log(stat);
        //在stat上面有一些方法isFile(),isDirectory()等等
        res.write("是否是一个文件："+stat.isFile());
        res.write("文件大小："+stat.size);
        res.end("ok");
    });
});
server.listen(8000);
console.log("The server has running");
