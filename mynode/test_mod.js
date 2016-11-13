/**
 *Author: Created by daheige.
 *Git   : @daheige
 *Email : zhuwei313@hotmail.com
 *Date  : 2016/11/13
 *Time  : 22:32
 */
var foo = require("./mod_test/foo"); //foo作为一个“顶部命名空间"
var Person = require("./mod_test/Person");
console.log(foo.s);
console.log(foo.info);
var per = new Person("daheige",26,"男");
per.sayName();