//简单的html,css,js，图片静态文件的服务器处理
var http = require("http");
var fs   = require("fs");
var path = require("path");//和路径相关的模块path
var router = require(__dirname+"/mod_test/web_service_rule");
var server = http.createServer(function(req, res) {
    //解析用户的url地址为对象
    var pathname = router.getPathname(req, res);
    //读取静态文件
    var extname  = path.extname(pathname); //得到拓展名
    fs.readFile("./myweb" + pathname, function(err, data) {
        if (err) {
            router.show404(req,res);
        }
        //获取文件的拓展名
        var mine_type = router.getFileMime(extname);
        res.writeHead(200,{"Content-Type":mine_type});//返回文件的响应头文件类型
        res.write(data);
        res.end();
    });
});
server.listen(8000); //我们可以监听80端口，这样可以通过localhost来访问，不需要加端口号

