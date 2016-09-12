//异步加载js文件
function loadScript(url, callback){
    var doc = document;
    var myjs = doc.createElement("script");
    myjs.type = "text/javamyjs";
    if (myjs.readyState){ //IE
        myjs.onreadystatechange = function(){
            if (myjs.readyState == "loaded" || myjs.readyState == "complete"){
                myjs.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others: Firefox, Safari, Chrome, and Opera
        myjs.onload = function(){
            callback();
        };
    }
    myjs.src = url;
    var myheader = doc.getElementsByTagName('head')[0];
    (myheader || doc.body).appendChild(myjs);//追加到头部，建议追加在body后面
}
