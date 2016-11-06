var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
       return;
    }
    res.writeHead(200,{"Content-Type":"text/html"});
    var userid = Math.random()*1000+200;
    console.log("开始读取",userid);
    var cur_path = "./";
    //读取文件是异步的
    fs.readFile(cur_path + "test.txt", "utf-8", function(err, data) {
        if (err) res.end("read File error");
        res.write(data); //写入内容到页面中
        res.end(); //结束该次请求响应
    });
    console.log("读取结束",userid);
});
server.listen(8000);
console.log("The server has running");