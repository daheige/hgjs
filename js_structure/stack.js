/**
 * [Stack js实现栈]
 * 栈内的元素只能从列表的一端访问，这一端称为栈顶
 * 主要操作：1、将元素压入栈 2、将元素弹出栈
 * 原则：后进先出
 */
function Stack(){
    this.dataStore = [];
    this.top = 0; //栈顶的位置
}
Stack.prototype.push = function(ele){
    this.dataStore[this.top++] = ele;
}
Stack.prototype.pop = function(){
    return this.dataStore[--this.top];
}
Stack.prototype.length = function(){
    return this.top;
}
Stack.prototype.clear = function(){
    this.top = 0;
}
//返回数组的第top-1个位置的元素，栈顶元素
Stack.prototype.peek = function(){
    return this.dataStore[this.top-1];
}

module.exports = Stack; //导出类