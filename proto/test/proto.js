//原型链
var a = {
    x : 10,
    cal :function(z){
        return this.x+this.y+z;
        
    }
    
};
var b = {
    y : 20,//继承了a的属性
    __proto__ : a
    
}
var c = {
    y : 30,
    __proto__ : a
    
};
console.log(b.cal(30));//60
console.log(c.cal(30));//70

function foo(){
    var x = 10;
    return function bar(){
        console.log(x);
        
    }
    
}
var returnF=foo();//foo返回的是一个函数
var x = 30;
returnF();//调用函数 10
function alert(){
    console.log(1);

}
alert();


