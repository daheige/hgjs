var http   = require("http");
var url    = require("url");
// The url.parse() method takes a URL string, parses it, and returns a URL object.
// 第二个参数是true可以将query查询字符串，转换为对象形式。
var server = http.createServer(function(req, res) {
    //对于get方法请求，解析url地址
    var url_obj = url.parse(req.url, true); //将url转换为一个对象
    if (url_obj.pathname == "/do_form") {
        var username = url_obj.query.username || '';
        var userpwd  = url_obj.query.userpwd || '';
        if (username == '' || userpwd == '') {
            res.end("bad request");
        }
        //将一个url对象转换为字符串
        console.log(url.format(url.parse(req.url)));
        console.log(url_obj.query.username, url_obj.query.userpwd);
        res.writeHead(200, {
            "Content-Type": "text/plain;charset=utf-8"
        });
        res.write("您输入的用户名是：" + url_obj.query.username + "密码是：" + url_obj.query.userpwd);
    }
    res.end("ok");
});
server.listen(1337);