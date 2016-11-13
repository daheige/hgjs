/**
 * Author: Created by daheige.
 * Git   : @daheige
 * Email : zhuwei313@hotmail.com
 * Date  : 2016/11/13
 * Time  : 12:23
 */
var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    res.write("<h1>daheige</h1>");
    res.end();
});
server.listen(80);