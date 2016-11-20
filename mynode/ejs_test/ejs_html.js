var http = require("http");
var fs   = require("fs");
var ejs  = require("ejs");

var server = http.createServer(function(req, res) {
    if (req.url == '/favicon.ico') res.end();
    fs.readFile(__dirname + "/views/my.ejs", function(err, data) {
        if (err) res.end();
        var str = data.toString(); //读取的内容是buffer需要转换为字符串
        var data = {
            a: "haha",
            news : ['daheige',"hhahaha"]
        }
        var html = ejs.render(str, data); //渲染模板数据,分配a,news到模板中去
        console.log(html); //我是大黑哥，我正在学习haha
        //发送到前台
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(html);
    });
});
server.listen(8080);