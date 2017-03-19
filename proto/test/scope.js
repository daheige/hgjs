//解决共享的闭包问题
var data = [];
for(var k=0;k<3;k+=1){
    data[k] = (function(x){
        return function(){
            console.log(x);
            
        }
    })(k);//返回匿名函数，传入参数k自动执行 
}
data[0]();
data[1]();
data[2]();
//0,1,2