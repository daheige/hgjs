var http   = require("http"); //导入http模块
var fs     = require("fs");
var server = http.createServer(function(req, res) {
    //req请求信息  res响应信息
    var cur_path = "./";
    fs.readFile(cur_path+"my.html","utf-8",function(err,data){
        //http://localhost:8000/ 返回的信息
        //http://localhost:8000/css/my.css 也是返回html中的内容，并没有解析css文件
        if(err) res.end("read File error");
        res.writeHead(200,{"Content-Type":'text/html;charset=utf-8'}); //写响应头，设置状态码
        res.write(data);//写入内容到页面中
        res.end();//结束该次请求响应
    });

});
server.listen(8000);