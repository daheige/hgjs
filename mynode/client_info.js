var http = require("http");
var fs = require("fs");
var os = require("os");
var server = http.createServer(function(req,res){
    if(req.url != '/favicon.ico'){
        //创建写入流
        var out = fs.createWriteStream(__dirname+"/client_info/request.log");
        out.write("request method: "+req.method+os.EOL);
        out.write("request url: "+req.url+os.EOL);
        out.write("request header info: "+JSON.stringify(req.headers)+os.EOL);
        out.write("request http version: "+req.httpVersion);
        out.end();
    }
    res.end();
});
server.listen(8080);