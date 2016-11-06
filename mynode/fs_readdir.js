//fs模块练习---fs.readdir读取目录
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
       return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var all_dirs = [];
    var all_files = [];
    var my_dir  = './';
    fs.readdir(my_dir,function(err,files){
        if(err) console.log(err);
        // console.log(files); //files是一个数组，表示读取目录下的文件和目录
        /**
         * 列举出当前目录下所有文件
         * [ 'css',
              'demo.js',
              'do_form.js',
              'form_demo.html',
              'fs_readdir.js',
              'fs_rmdir.js',
              'fs_stat.js',
              'fs_test.js',
              'hello.js',
              'http_demo.js',
              'images',
              'my.html',
              'my.js',
              'my_one.js',
              'rule_test',
              'test.html',
              'url_test.js' ]
         */
        var len = files.length;
        for(var i = 0;i<len;i++){
            //检查文件目录
            var filename = files[i];
            console.log(filename);
            //fs.stat回调之后，就无法进入
            //（在读取文件目录，异步中嵌套了一个异步函数fs.stat回调在for中嵌套了异步语句）
            fs.stat(my_dir+filename,function(err,stat){
                if(stat.isDirectory()) all_dirs.push(filename);
                if(stat.isFile()) all_files.push(filename);
            });
        }
    });
    console.log("所有文件："+all_files); //结果为空
    console.log("所有目录："+all_dirs);//结果为空
    res.end();
});
server.listen(1337);
console.log("The server has running");
