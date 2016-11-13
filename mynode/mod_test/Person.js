/**
 *Author: Created by daheige.
 *Git   : @daheige
 *Email : zhuwei313@hotmail.com
 *Date  : 2016/11/13
 *Time  : 23:32
 */
function Person(name, age, sex) {
    this.name = name;
    this.age  = age;
    this.sex  = sex;
}
Person.prototype.sayName = function() {
    console.log("your name is" + this.name, "your age is" + this.age);
}
module.exports = Person; //module.exports用于导出一个可描述的类，在外部可用new 实例化一个对象