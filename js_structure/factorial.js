let print = console.log;
//递归操作
function factorial(num) {
    if (num == 1) return num;
    return num * factorial(num - 1); //调用自身函数
}
print(factorial(3));