//构造方法和原型方式的组合，称为组合模式
function Myhg(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
Myhg.prototype = {
    constructor : Myhg, //显式指定构造函数，其原型指向构造函数Myhg
    sayName : function(){
        console.log("my name is "+this.name);
    },
    setName : function(name){
        this.name = name;
    }
    //...定义一系列的方法
}
// var hg = new Myhg("daheige",26,1);
// hg.sayName();

//原型模式，通过字面量定义一些属性和方法 ,这样的方式是所有的实例共享初始化的成员属性
function Person (){

}
Person.prototype.name = "daheige";
Person.prototype.age = 23;
Person.prototype.getName = function(name){
    console.log(this.name);
}
// var person = new Person();
// person.getName();

//工厂模式
function Mao(name,age){
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.sayName = function(){
        console.log(obj.name);
    }
    return obj;
}

// var xiao = new Mao("zhuwei",25);
// xiao.sayName();

// 单例模式,常见的是用函数立即执行来实现单例模式
var app = (function(){
    var s = 12;
    var name = "daheige";
    function getName(){
        console.log(name);
    }
    function setName(newname){
        name = newname;
    }
    return {
        getName : getName,
        setName : setName,
        s       : 12
    }
})();
app.getName();
app.setName("zhuwei");
app.getName();

//单例模式和放大模式结合，拓展app，一般来说给其加上方法或者属性
var app = (function(app){
    var x = 12;
    var y = 321;
    var z = 12;
    var doSong = function(){
        console.log(x,y,z,"i can song");
    }
    app.x = x;
    app.y = y;
    app.dosong = doSong;
    return app;
})(app || {});
app.dosong();
console.log(app.z); //无法访问到z undefined


