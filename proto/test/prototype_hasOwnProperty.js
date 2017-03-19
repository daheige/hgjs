//强大的原型和原型链
//hasOwnProperty函数：
/*
hasOwnProperty是Object.prototype的一个方法，它可是个好东西，他能判断一个对象是否包含自定义属性而不是原型链上的属性，因为hasOwnProperty 是 JavaScript 中唯一一个处理属性但是不查找原型链的函数,所谓的原型链上的函数就是obj.prototype.xxx=function(){}这样的方式定义的原型链上的方法
*/
Object.prototype.bar=13;
var foo = {goo:12};

console.log(foo.hasOwnProperty('goo'));
console.log(foo.hasOwnProperty('bar'));//false
//检测对象上是否有某个属性时候，hasOwnProperty是唯一的方法
//当检查对象上某个属性是否存在时，hasOwnProperty 是唯一可用的方法。同时在使用 for in loop 遍历对象时，推荐总是使用 hasOwnProperty 方法，这将会避免原型对象扩展带来的干扰
for(var i in foo){
    console.log(i);//goo,bar

};
//采用hasOwnproperty过滤遍历对象上的自定义的属性
for(var i in foo){
    if(foo.hasOwnProperty(i)){
        console.log(i);//goo

    }

}
//这个版本的代码是唯一正确的写法。由于我们使用了 hasOwnProperty，所以这次只输出 goo。如果不使用 hasOwnProperty，则这段代码在原生对象原型（比如 Object.prototype）被扩展时可能会出错
//总结：推荐使用 hasOwnProperty，不要对代码运行的环境做任何假设，不要假设原生对象是否已经被扩展了







