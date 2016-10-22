/**
 * Author: Created by daheige.
 * Git   : @daheige
 * Email : zhuwei313@hotmail.com
 * Date  : 2016/10/22
 * Time  : 21:39
 */
var http = require("http");
var server=http.createServer(function(req,res){
    res.end("this is a demo");
});
server.listen(3000);
console.log("this server has run")
