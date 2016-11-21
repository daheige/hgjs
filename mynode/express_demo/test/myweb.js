var express = require("express");
var app = express();

app.use(express.static(__dirname+"/public"));//A route will match any path
//http://localhost:8080/te/one.html就可以直接访问到public下的静态文件，具有缓存静态文件作用

app.get("/test",function(req,res){
    res.send("test ok");
});

app.listen(8080);