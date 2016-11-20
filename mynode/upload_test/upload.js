var formidable = require('./formidable'),
    http = require('http'),
    fs = require('fs'),
    util = require('util'),
    path = require('path');

http.createServer(function(req, res) {
    //处理文件上传
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        // 创建一个正在接收的表单

        //文件上传目录
        var upload_dir = __dirname + "/uploads/";
        fs.exists(upload_dir, function(exists) {
            if (!exists) fs.mkdir(upload_dir, 0755);
        });

        var form = new formidable.IncomingForm();
        //设置表单的编码
        form.encoding = 'utf-8';
        form.uploadDir = upload_dir; //文件上传目录

        form.parse(req, function(err, fields, files) {
            // console.log(fields); //表单字段 //{ title: 'fefef大黑哥', content: '凤飞飞' }
            console.log(files); //文件字段

            if (files.upload.name != '') {
                //得到文件的拓展名
                var file_ext = path.extname(files.upload.name);
                console.log(file_ext); //.jpg

                // var types = files.upload.name.split('.'); //将文件名以.分隔，取得数组最后一项作为文件后缀名。
                // console.log(types); //[ 'test', 'jpg' ]
                // var file_ext = "."+String(types[types.length - 1]);

                //对文件重新命名
                var date = new Date();
                // var ms = Date.parse(date);//计算当前时间与1970年1月1日午夜相差的毫秒数 赋值给ms以确保文件名无重复。
                var rnd = Math.floor(Math.random()*1000);
                var ms = ''+date.getFullYear()+(date.getMonth()+1)+date.getDate()+date.getHours()+date.getMinutes()+date.getSeconds()+"_"+rnd;
                // console.log(upload_dir + ms +"." + String(types[types.length-1]));
                fs.rename(files.upload.path, upload_dir + ms + file_ext);
            } else {
                fs.unlink(files.upload.path); //当文件没有上传，也会产生临时文件，故删除该临时文件
            }

            //返回信息
            res.writeHead(200, {
                'content-type': 'text/plain'
            });
            res.write('received upload:\n\n');
            //调试信息
            // res.end(util.inspect({
            //     fields: fields,
            //     files: files
            // }));
            res.end("ok");
        });
        return;
    }
    // show a file upload form
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    fs.readFile(__dirname + "/form.html", function(err, data) {
        if (err) res.end("this page not found");
        res.end(data);
    });
}).listen(80);