//强大的原型和原型链
//原型链
function Foo(){
    this.val=42;

}
Foo.prototype ={
    method : function (){

    }

};
function Bar(){};
//设置Bar的prototype属性为Foo的实例对象
Bar.prototype = new Foo();
Bar.prototype.foo= 'daheige';
Bar.prototype.constructor = Bar;//构造函数为本身
//原型链
var test = new Bar();
/*
//test [bar实例]
    Bar.prototype [Foo的实例]
        ｛foo : 'daheige'｝
         Foo.prototype
            method
            Object.prototype
*/
//test 对象从 Bar.prototype 和 Foo.prototype 继承下来；因此，它能访问 Foo 的原型方法 method。同时，它也能够访问那个定义在原型上的 Foo 实例属性 value。需要注意的是 new Bar() 不会创造出一个新的 Foo 实例，而是重复使用它原型上的那个实例；因此，所有的 Bar 实例都会共享相同的 value 属性

            