var express = require("express"); //导入express框架
var app     = express();

app.get("/", function(req, res) {
    res.send("daheige hello");
});

app.get("/test", function(req, res) {
    res.send("这是一个测试页面");
});

// 支持正则路由
app.get(/\/stu\/([1-9]\d*)/, function(req, res) {
    var params = req.params; //接收匹配路由中的所有参数
    console.log(params);
    var stu_no = params[0];
    res.send("你提交的学号是：" + stu_no); //发送信息到前台
});

//静态路由和动态路由结合
app.get('/tea/:num', function(req, res) {
    res.send("编号是：" + req.params.num);
});
//监听3000端口
app.listen(3000);