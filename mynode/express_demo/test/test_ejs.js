var express = require("express");
var app     = express(); //express() 是一个由 express 模块导出的入口（top-level）函数

app.set("views", __dirname + "/views"); //设置视图的位置
app.set("view engine", "ejs"); //设置模板引擎

app.get("/mytest", function(req, res) {
    //通过res.render渲染数据到模板中
    res.render("mytest", {
        'news': ['123', 'daheige']
    })
});

app.listen(3000);