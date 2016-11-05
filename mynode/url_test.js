var http = require("http");
var url  = require("url");
// The url.parse() method takes a URL string, parses it, and returns a URL object.
// 第二个参数是true可以将query查询字符串，转换为对象形式。
var server = http.createServer(function(req,res){
    //假设请求地址是http://localhost:1337/test?id=1&name=daheige
    // console.log(req.url);//表示/test?id=1&name=daheige
    //解析url字符串为一个对象
    var url_obj = url.parse(req.url);
    // console.log(url_obj);
    /*
    解析后的结果：
        {
          protocol: null, //协议
          slashes: null,
          auth: null,
          host: null, //主机名
          port: null, //端口
          hostname: null,
          hash: null,
          search: '?id=1&name=daheige', //查询字符串
          query: 'id=1&name=daheige',//？后面的字符串
          pathname: '/test', //请求路径
          path: '/test?id=1&name=daheige',
          href: '/test?id=1&name=daheige' }
     */
    var path = url_obj.path; //  /test?id=1&name=daheige
    // console.log(path);
    // console.log("query查询部分：",url_obj.query);
    //格式化解析成对象url.parse(req.url,true)
    console.log(url.parse(req.url,true));
    /**
     * Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?id=1&name=daheige',
      query: { id: '1', name: 'daheige' },
      pathname: '/test',
      path: '/test?id=1&name=daheige',
      href: '/test?id=1&name=daheige' }
     */
     //query变成了一个对象
     var query = url.parse(req.url,true).query;
     console.log(query.name);//daheige
    res.end('ok');
});
server.listen(1337);