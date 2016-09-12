//异步加载js文件
function loadScript(url, callback){
    var doc = document;
    var myjs = doc.createElement("script");
    // var myheader = doc.getElementsByTagName('head')[0] || doc.body;//建议用doc.body
    var myheader = doc.body;
    myjs.type = "text/javascript";
    if (myjs.readyState){ //IE
        myjs.onreadystatechange = function(){
            if (myjs.readyState == "loaded" || myjs.readyState == "complete"){
                myjs.onreadystatechange = null;
                typeof callback == 'function' && callback(); //判断是否是function然后执行回调
            }
        };
    } else { //Others: Firefox, Safari, Chrome, and Opera
        myjs.onload = function(){
            typeof callback == 'function' && callback();
        };
    }
    myjs.src = url;
    myheader.appendChild(myjs);//追加到头部，建议追加在body后面
}
