/**面试题：将'abc'字符串倒序成'cba'**/
var a = 'abc';
a = a.split('');//分割为数组['a','b','c']
/* //自定义函数，进行按照字母的编码下标大到小排序
function sort_sort(a,b){
    return b.charCodeAt(0)-a.charCodeAt(0);
}
a.sort(sort_sort);//排序
a = a.join('');//分割为字符串cba
console.log(a);//输出cba */
//方式二：利用
a.reverse();//数组翻转
console.log(a);
a=a.join('');//按照空格拼接
console.log(a);