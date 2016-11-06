//fs模块练习
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
       return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var cur_path = "./";
    fs.exists(cur_path+"mytest",function(exist){ //判断文件是否存在
        if(exist) res.end("对不起，文件已经存在");
    });
    fs.mkdir(cur_path+"mytest",755,function(err){ //第二个参数可以指定文件目录的权限默认0777
            if(err) res.end("创建文件失败");
            res.end("创建文件成功");
    });
});
server.listen(8000);
console.log("The server has running");