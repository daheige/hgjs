//异步加载js文件
function loadScript(url, callback){
    var doc = document;
    var myjs = doc.createElement("script");
    myjs.type = "text/javamyjs";
    if (myjs.readyState){ //IE
        myjs.onreadystatechange = function(){
            if (myjs.readyState == "loaded" || myjs.readyState == "complete"){
                myjs.onreadystatechange = null;
                typeof callback == 'function' && callback(); //建议判断是否是function然后执行回调
            }
        };
    } else { //Others: Firefox, Safari, Chrome, and Opera
        myjs.onload = function(){
            typeof callback == 'function' && callback();
        };
    }
    myjs.src = url;
    var myheader = doc.getElementsByTagName('head')[0];
    (myheader || doc.body).appendChild(myjs);//追加到头部，建议追加在body后面
}
