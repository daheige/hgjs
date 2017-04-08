/**
 * [Clist js实现列表类]
 */
function Clist() {
    this.listSize = 0; //长度
    this.pos = 0; //当前位置
    this.dataStore = []; //初始化一个空数组保存列表元素
}
//清空列表所有元素
Clist.prototype.clear = function() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

Clist.prototype.find = function(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

Clist.prototype.toString = function() {
        return this.dataStore.toString();
    }
    //在某个元素后面插入元素
Clist.prototype.insertAfter = function(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.slice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

//追加元素导列表中
Clist.prototype.append = function(element) {
        this.dataStore[this.listSize++] = element;
    }
    //从列表中移除某个元素
Clist.prototype.remove = function(element) {
    let pos = this.find(element);
    if (pos > -1) {
        this.dataStore.slice(pos, 1); //删除元素
        --this.listSize; //长度减去1
        return true;
    }
    return false;
}

/**
 * 遍历列表元素的方法
 */
//将位置指针移到第1个元素位置
Clist.prototype.front = function() {
    this.pos = 0;
}

//移到最后一个元素位置
Clist.prototype.end = function() {
    this.pos = this.listSize - 1;
}

//向前移动一个位置
Clist.prototype.prev = function() {
    if (this.pos > 0) --this.pos;
}

//向后移动一个位置
Clist.prototype.next = function() {
    if (this.pos < this.listSize - 1) ++this.pos;
}

Clist.prototype.len = function() {
    return this.listSize; //this.dataStore.length;
}
Clist.prototype.currPos = function() {
        return this.pos; //当前位置
    }
    //移动到指定位置
Clist.prototype.moveTo = function(pos) {
    if (pos < 0 && Math.abs(pos) < this.listSize) {
        this.pos = this.listSize - Math.abs(pos);
    }
    if (pos >= 0 && pos <= this.listSize - 1) this.pos = pos;
}
Clist.prototype.getValue = function(pos) {
        if (typeof pos != 'undefined' && (pos >= 0 && pos <= this.listSize - 1)) return this.dataStore[pos];
        return this.dataStore[this.pos];
    }
    //判断给定的值是否在列表中
Clist.prototype.contains = function(element) {
    let pos = this.find(element);
    if (pos > -1) return true;
    return false;
}
module.exports = Clist;