var http = require("http");

var server = http.createServer(function(req,res){
    //get url
    var userurl = req.url;
    res.writeHead(200,{"Content-Type":"text/plain"});
    if(userurl.substr(0,5) == "/stu/"){
        var stuid = userurl.substr(5);
        if(/^\d+$/.test(stuid)){
            res.end("The stu is:"+stuid);
        }
        res.end("The stu is: unknown");
    } else if(userurl.substr(0,9) == "/teacher/"){
        var teaid = userurl.substr(9);
         if(/^\d+$/.test(teaid)){
            res.end("The teacher is:"+teaid);
        }
        res.end("The tea is: unknown");
    }
    res.end("ok");
});
server.listen(8000);
console.log("The server has running");