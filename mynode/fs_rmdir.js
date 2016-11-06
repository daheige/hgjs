//fs模块练习---删除文件夹
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
       return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var cur_path = "./";
    fs.rmdir(cur_path+"mytest",function(err){ //只能删除空目录
        if(err) res.end("删除失败");
        res.end("删除成功");
    });
});
server.listen(8000);
console.log("The server has running");