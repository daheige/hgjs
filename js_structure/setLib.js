/**
 * [SetLib js实现集合操作]
 * 集合的特点：1、无序 2、元素不重复
 */
function SetLib() {
    this.dataStore = []; //初始化数据
}
//集合操作的一系列方法挂载在构造函数的原型prototype上面
SetLib.prototype.add = function(data) {
    if (this.dataStore.indexOf(data) > -1) { //存在该元素就不反复加入
        return false;
    }
    this.dataStore.push(data);
    return true;
}
SetLib.prototype.remove = function(data) {
        let pos = this.dataStore.indexOf(data);
        if (pos > -1) { //该元素存在集合中
            this.dataStore.splice(pos, 1);
            return true;
        }
        return false;
    }
    //集合中是否存在某个元素
SetLib.prototype.contains = function(data) { //是否包含某个元素
        return this.dataStore.indexOf(data) > -1 ? true : false;
    }
    // 集合的长度
SetLib.prototype.size = function() {
    return this.dataStore.length;
}

//并集
SetLib.prototype.union = function(set) {
    let tmpSet = []; //将第一个集合放入临时集合中
    for (let i = 0; i < this.dataStore.length; i++) {
        tmpSet.push(this.dataStore[i]);
    }
    for (let i = 0; i < set.dataStore.length; i++) {
        if (tmpSet.indexOf(set.dataStore[i]) > -1) continue; //临时集合中存在指定集合某个元素就跳过
        tmpSet.push(set.dataStore[i]);
    }
    return tmpSet;
}

//交集
SetLib.prototype.intersect = function(set) {
    let tmpSet = [];
    for (let i = 0; i < this.dataStore.length; i++) {
        if (set.dataStore.indexOf(this.dataStore[i]) > -1) { //同时在两个集合中都存在共同元素
            tmpSet.push(this.dataStore[i]);
        }
    }
    return tmpSet;
}

SetLib.prototype.diff = function(set) { //求两个集合的差
    let tmpSet = [];
    for (let i = 0; i < this.dataStore.length; i++) {
        if (set.dataStore.indexOf(this.dataStore[i]) > -1) continue;
        tmpSet.push(this.dataStore[i]); //a-b a集合元素在b集合中没有
    }
    return tmpSet;
}
SetLib.prototype.isSubset = function(set) {
    if (this.size() > set.size()) return false;
    for (let i = 0; i < this.dataStore.length; i++) {
        if (!(set.dataStore.indexOf(this.dataStore[i]) > -1)) return false; //a集合中有一个元素不在b集合中，就表示a不是b的子集
    }
    return true;
}
SetLib.prototype.getAll = function() {
    return this.dataStore;
}

let aset = new SetLib();
aset.add(1);
aset.add(2);
aset.add(2); //添加失败
console.log(aset.getAll());
console.log("a size ", aset.size());

let bset = new SetLib();
bset.add(1);
bset.add(2);
bset.add(3);

console.log("a-b: ", aset.diff(bset));
console.log("a+b: ", aset.union(bset));
console.log("a intersect b: ", aset.intersect(bset));