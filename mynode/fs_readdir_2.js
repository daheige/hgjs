//fs模块练习---fs.readdir读取目录
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url === "/favicon.ico"){
      return ;
      // res.end();
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //删除文
    fs.unlink("./t.txt",function(err){
      if(err) console.log("删除失败");
      else console.log("删除成功")
    });
    var my_dir  = './';
    fs.readdir(my_dir,function(err,files){
        if(err) console.log(err);
        // console.log(files); //files是一个数组，表示读取目录下的文件和目录
        var len = files.length;
        var all_dir = [];
        //通过迭代器方式将异步执行，转换为同步执行
        (function items(i){
           if(i == len) {
              console.log(all_dir);
           }
           fs.stat(my_dir+files[i],function(err,stat){
              if(err) return;
              if(stat.isDirectory()) all_dir.push(files[i]);
              items(i+1);
          });
        })(0);
        res.end("ok");
    });
});
server.listen(1337);
console.log("The server has running");
