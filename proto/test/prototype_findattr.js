//强大的原型和原型链
//属性查找
//当查找一个对象的属性时，JavaScript 会向上遍历原型链，直到找到给定名称的属性为止，到查找到达原型链的顶部 - 也就是 Object.prototype - 但是仍然没有找到指定的属性，就会返回 undefined
function foo(){
    this.add = function (x,y){
        return x+y;

    }

}
foo.prototype.add = function (x,y){
    return x+y+10;

}
Object.prototype.substract = function(x,y){

    return x-y;
}
var f = new foo();
console.log(f.add(1,2));//3
console.log(f.substract(1,2));//-1
//属性在查找的时候是先查找自身的属性，如果没有再查找原型，再没有，再往上走，一直插到Object的原型上，所以在某种层面上说，用 for in语句遍历属性的时候，效率也是个问题
//我们可以赋值任何类型的对象到原型上，但是不能赋值原子类型的值，比如如下代码是无效的：

//function Foo() {}
//Foo.prototype = 1; // 无效





