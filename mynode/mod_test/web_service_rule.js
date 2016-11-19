//导入web_service.js所需的函数
var url  = require("url");
function getFileMime(extname){
    switch(extname){
        case ".html":
            return "text/html";
            break;
        case ".jpg":
            return "image/jpg";
            break;
        case ".png":
            return "image/png";
            break;
        case ".gif":
            return "image/gif";
            break;
        case ".css":
            return "text/css";
            break;
        case ".js":
            return "text/javascript";
            break;
        default:
            return "text/plain";
            break;
    }
}

function show404(req,res){
     res.writeHead(200, {
                "Content-Type": "text/plain;charset=utf-8"
            });
    res.end("this page not found");
}

function getPathname(req,res){
     //解析用户的url地址为对象
    var pathname = url.parse(req.url).pathname;
    if(pathname == "/favicon.ico") res.end();
    if(pathname == "/" || pathname == "/index.html" || pathname.indexOf(".") == -1) pathname = "/index.html";
    return pathname;
}

//导出函数
exports.getFileMime = getFileMime;
exports.show404 = show404;
exports.getPathname = getPathname;
