// console.log(__dirname);//当前目录
var bar = require(__dirname+"/bar"); //引入文件bar.js 建议用__dirname引入当前目录下的文件或目录
var msg = "daheige"+bar.my_bar;
exports.msg = msg;
exports.my_bar = bar.my_bar;