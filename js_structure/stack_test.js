const Stack = require(__dirname + '/stack');
let s = new Stack();
s.push(1);
s.push(2);
s.push('33');
console.log(s.peek()); //返回最后一个进栈的元素，遵循了后进先出
s.push('fefefe');
console.log(s.pop());
s.clear();
console.log(s.peek()); //undefined

//用栈模拟递归操作
function fact(num) {
    let s = new Stack();//开配一个栈
    while (num > 1) s.push(num--);
    let pr = 1;
    while (s.length() > 0) pr *= s.pop(); //每次弹出一个元素
    return pr;
}
console.time('flag');
console.log(fact(5));
console.timeEnd('flag');

function hgfact(num){
    if(num <= 1) return num;
    return num * hgfact(num - 1);
}

console.time('hg_flag');
console.log(hgfact(5));
console.timeEnd('hg_flag');