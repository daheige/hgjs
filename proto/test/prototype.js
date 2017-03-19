//强大的原型和原型链
var BaseCal = function () {
    //为每一个实例声明一个小数位数
    this.decimalnum = 2;
};
//使用原型给BaseCal
BaseCal.prototype.add = function(x,y) {
    return x + y;
};
BaseCal.prototype.substract = function (x,y) {
    return x - y;
};
var Calcul = function(){
    this.tax=5;

};
//Calcul的每一个原型都指向了BaseCal
//原型继承
/*
Calcul.prototype = new BaseCal();
var calc = new Calcul();
console.log(calc.add(1,3));
console.log(calc.decimalnum);
*/

//如果不想让Calcul的每个实例访问BaseCal上的构造函数里声明的属性值
Calcul.prototype = BaseCal.prototype;
/*
var calc = new Calcul();
console.log(calc.add(1,3));
console.log(calc.decimalnum);//此时就访问不到BaseCal上的构造函数声明的变量
*/

//重写原型
Calcul.prototype.add = function(x,y){
    return x+y+this.tax;

};
var cal= new Calcul();
console.log(cal.add(1,3));//9




