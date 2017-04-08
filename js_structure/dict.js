/**
 * [Dict js实现字典数据结构]
 * js中利用array来是实现字典结构,因为数组实际上就是一个对象
 */
function Dict() {
    this.dataStore = [];
}
Dict.prototype = { //定义原型上的方法
        constructor: Dict, //显式指定构造函数，Dict.prototype.constuctor是构造函数本身Dict
        add: function(key, value) {
            this.dataStore[key] = value; //key会转换为字符串
        },
        find: function(key) {
            this.dataStore[key];
        },
        remove: function(key) {
            delete this.dataStore[key];
        },
        showAll: function() {
            console.log(this.dataStore);
            // console.log(Object.keys(this.dataStore));
            let arr = Object.keys(this.dataStore); //获取所有的key
            for (let i = 0; i < arr.length; i++) {
                console.log(this.dataStore[arr[i]]);
            }
        },
        clear: function() { //清空字典
            let arr = Object.keys(this.dataStore); //获取所有的key
            for (let i = 0; i < arr.length; i++) {
                delete this.dataStore[arr[i]];
            }
        },
        count: function() {
            let arr = Object.keys(this.dataStore);
            return arr.length;
        },
        order: function(flag) {
            flag = flag || 'normal'; //asc or desc or normal
            let arr = Object.keys(this.dataStore);
            let data = [];
            if (flag == 'asc') {
                arr.sort(function(a, b) {
                    return a < b;
                });
            } else if (flag == 'desc') {
                arr.sort(function(a, b) {
                    return a > b;
                });
            } else {
                //按照字符串从小到排序
                arr.sort();
            }
            for (let i = 0; i < arr.length; i++) {
                data[arr[i]] = this.dataStore[arr[i]];
            }
            this.dataStore = data;
        }
    }
    //demo
let hgdict = new Dict();
/*
关于原型prototype属性
用new 运算符来生成一个对象的时候就没有prototype属性，
Dict.prototype 包含了2个属性，一个是constructor ，另外一个是__proto__
这个constructor就是我们的构造函数a

但是他会到__proto__(原型）上去找，而实例的hgdict.__proto__= Dict.prototype;
每个对象都会在其内部初始化一个属性，就是__proto__，
当我们访问一个对象的属性 时，如果这个对象内部不存在这个属性
那么他就会去__proto__里找这个属性，这个__proto__又会有自己的__proto__，于是就这样 一直找下去。*/

console.log(Dict.prototype.constructor == Dict); //true
console.log(hgdict.__proto__ == Dict.prototype); //true
console.log(hgdict.prototype); //undefined 在实例上没有prototype属性，进一步证明了prototype是构造函数的一个属性，也是Object上的一个属性
console.log(Object.prototype); //Object.prototype的值是一个空对象{}
console.log(Object.prototype.__proto__); //顶层Object.prototype的原型是null
hgdict.add('name', 'heige');
hgdict.add('age', 26);
hgdict.showAll();
console.log(hgdict.count());
// hgdict.clear();
// hgdict.showAll();
hgdict.order();
hgdict.showAll();