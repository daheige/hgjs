var ejs = require("ejs");
var fs = require("fs");
fs.readFile(__dirname+"/views/my.ejs",function(err,data){
    var str = data.toString();
    var data = {
        a : "haha"
    }
    var html = ejs.render(str,data); //渲染模板数据
    console.log(html);//我是大黑哥，我正在学习haha
});
