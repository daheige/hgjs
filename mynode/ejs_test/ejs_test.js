var ejs = require("ejs");
var str = "我是大黑哥，我正在学习<%= a %>"
var data = {
    a : "haha"
}
var html = ejs.render(str,data);
console.log(html);//我是大黑哥，我正在学习haha

