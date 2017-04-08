//构造函数
function Checking(amount) {
    this.amount = amount; //构造函数一般用来初始化属性
}
//将方法挂载在原型上面
Checking.prototype.deposit = function(amount) {
    this.amount += amount;
}
Checking.prototype.withDraw = function(amount) {
    if (amount <= this.amount) {
        this.amount -= amount;
    } else {
        console.log('余额不足');
    }
}
Checking.prototype.toString = function() {
    //重写了toString方法
    return 'amount ' + this.amount;
}

let account = new Checking(720); //创建一个实例
account.deposit(1000);
console.log(account.toString());
//减去800
account.withDraw(800);
console.log(account.toString()); //920元
account.withDraw(1000);
account.withDraw(400); //减去400
console.log(account.toString());