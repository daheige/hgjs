/**
 *Author: Created by daheige.
 *Git   : @daheige
 *Email : zhuwei313@hotmail.com
 *Date  : 2016/11/13
 *Time  : 22:32
 */
var foo = require("./mod_test/foo"); //foo作为一个“顶部命名空间"，foo.js文件可以省略.js后缀
var Person = require("./mod_test/Person");

//导入的是一个包
var bar = require("./bar");
console.log(foo.s);
console.log(foo.info);
var per = new Person("daheige",26);
per.sayName();

//导入的是一个包
console.log("包中的变量",bar.msg);

