function Queue() {
    this.dataStore = [];
}
//入队
Queue.prototype.enter = function(ele) {
    this.dataStore.push(ele);
}
Queue.prototype.outer = function() {
    return this.dataStore.shift(); //出队
}
Queue.prototype.empty = function() { //判断队列是否为空
    if (this.dataStore.length <= 0) return true;
    return false;
}
Queue.prototype.toString = function() {
    let arr = [];
    for (let i = 0; i < this.dataStore.length; i++) {
        arr.push(this.dataStore[i] + '\n');
    }
    return arr.join('');
}
Queue.prototype.front = function() {
    return this.dataStore[0]; //返回第一个元素，队头
}
Queue.prototype.back = function() {
    return this.dataStore[this.dataStore.length - 1];
}
module.exports = Queue; //导出模块，导出类供外部访问
//exports.msg = msg //一般用来导出函数或者变量供外部访问