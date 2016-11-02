/**
 * Author: Created by daheige.
 * Git   : @daheige
 * Email : zhuwei313@hotmail.com
 * Date  : 2016/10/22
 * Time  : 21:39
 */
var http   = require("http"); //导入http包，用require导入包
var server = http.createServer(function(req, res) { //createServer参数是一个回调函数
    //req表示request请求,res表示响应结果response
    //writeHead设置响应头：200状态码，设置的内容
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    res.end("<h1>this is a demo</h1>"); //结束响应
});
server.listen(3000);
console.log("this server has run");