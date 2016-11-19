var http = require("http"); //导入http模块
var querystring = require("querystring");
var server = http.createServer(function(req, res) {
    //req请求信息  res响应信息
    if(req.url == "/favicon.ico") res.end();
    //接收数据
    console.log(req.method);//POST or GET

    //监听请求
    var postdata = '';
    req.addListener("data",function(chuck){
        postdata += chuck;
    });
    req.addListener("end", function(){
        //转换为字符串后，转为对象(对接受到的参数进行解码)
        //采用query string模块将参数转换为对象
        var obj = querystring.parse(postdata.toString(),null, null,{ decodeURIComponent: decodeURIComponent });
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("提交的数据成功"+obj.username); //结束该次请求响应 //提交的数据成功大黑哥
    });
});
server.listen(80, "localhost");
console.log("this demo listen 80");