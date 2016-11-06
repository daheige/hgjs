var hg ={};
hg.getRndStr = function(num)
{
    var a = 'abcedfg0123456789';
    var len = a.length;
    var rnd = null;//空对象
    //var str = '';
    var arr = [];//[1]  [1,2],[1,2,3] [1,2,3,4]
    for(var i = 0;i<num;i++){
        rnd = Math.floor(len*Math.random()); //a * b 12 * 0.99999 < 12
       //str += a[rnd];
       arr.push(a[rnd]);
    }
    //return str;
    return arr.join('');
}
hg.getRndStr(3);
//通过函数自动执行，实现单例模式
/* var hg = (function(){
    function getRndStr(num)
    {
        var a = 'abcedfg0123456789';
        var len = a.length;
        var rnd = null;//空对象
        //var str = '';
        var arr = [];//[1]  [1,2],[1,2,3] [1,2,3,4]
        for(var i = 0;i<num;i++){
            rnd = Math.floor(len*Math.random()); //a * b 12 * 0.99999 < 12
           //str += a[rnd];
           arr.push(a[rnd]);
        }
        //return str;
        return arr.join('');
    }
    function my(){
        console.log(1);
        
    }
    return {
        getRndStr : getRndStr,
        my: my
        
    }
    
})();
hg.getRndStr(3); */
//模块化设计（不利于拓展）（单例模式：通过函数自执行来实现单例模式）
var hg = (function(){
    var cnt = 9;
    function getRndStr(num)
    {
        var a = 'abcedfg0123456789';
        var len = a.length;
        var rnd = null;//空对象
        //var str = '';
        var arr = [];//[1]  [1,2],[1,2,3] [1,2,3,4]
        for(var i = 0;i<num;i++){
            rnd = Math.floor(len*Math.random()); //a * b 12 * 0.99999 < 12
           //str += a[rnd];
           arr.push(a[rnd]);
        }
        //return str;
        return arr.join('');
    }
    function my(){
        console.log(1);
        
    }
    return {
        getRndStr : getRndStr,
        my: my,
        cnt : cnt
        
    }
    
})();



//-------------------------------

var hg = (function(mod){
    mod.m3 = function(){
        console.log(2);
        
    }
    return mod;
})(hg || {});
//模块化（添加方法) 模块化设计
var hg = (function(mod){
    mod.m4 = function(){
        console.log(12);
        
    }
    return mod;
})(hg || {});
//放大模块化设计
var hg = (function(mod){
    var s = 12;
    //var cnt = 123333;
    mod.getCnt = function(){
        
        return this.cnt;
    }
    mod.m5 = function(){
        this.my();
        console.log(12);
        
    }
    mod.getName=function(){
        return s;
        
    }
    mod.setName = function(news){
        s = news;
        
    }
    return mod;
})(hg || {});

hg.m3();

for(var i = 0;i<4;i++){
    //通过函数自执行（闭包方式来实现间隔输出）
    (function(num){
        setTimeout(function(){
            console.log(num);
        },1000);
        
    })(i);
    
}
