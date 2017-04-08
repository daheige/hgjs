if (!Array.isArray) {
    Array.prototype.isArray = function(arr) { //检测数组上是否有isArray这个方法
        return ({}).toString.call([]).slice(8, -1) == 'Array';
    }
}
let arr = [1, 2, 3, 5, 7, 9, 123, 45, 87, 98]; //字面量定义数组
console.log(Array.isArray(arr));

//复制数组到另一个数组中
function copyArr2Arr(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return;
    }
    for (let i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i]; //相同位置上的元素将会被覆盖
    }
}
let arr2 = [1, 3, 4];
copyArr2Arr(arr, arr2);
console.log(arr2);

//数组查找元素
console.log(arr.indexOf(1) > -1); //在第0个位置找到该元素
//数组包含某个元素
console.log(arr.includes(3)); //true

//数组的字符串表示
console.log(arr.toString()); //toString()转换为原始值，字符串表示

//数组的连接
let new_arr = arr.concat(arr2, [1, 2, [2, 3]]); //形成一个新的数组,即便是里面的元素是一个数组，也当做普通的元素看待
console.log(new_arr);
console.log(new_arr.toString()); //字符串连接按照,分开

//数组追加元素
arr.push(22); //在末尾（右边）加上
console.log(arr);
arr.unshift(322);//在数组的左边添加一个元素，就是在头部加一个元素

//删除数组操作
arr.pop();//从最右边弹出一个元素
console.log(arr);

arr.shift();//从最左边弹出一个元素
console.log(arr)

//从指定位置删除或添加元素
arr.splice(1,2); //从第一个位置开始，删除2个元素
console.log(arr);
arr.splice(1,0,3,4,4,6); //从第1个位置开始，添加四个元素
console.log(arr);

//数组的排序 可以传递自定义的函数进行处理
arr.sort();//自然排序
console.log(arr);
arr.reverse();//倒序
console.log(arr);
arr.sort(function(a,b){
    return a - b; //从小到大排序
});
console.log(arr);
