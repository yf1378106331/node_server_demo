/**
 * Created by hui on 2015/11/4.
 */

var http = require('http'),
    fs = require('fs'),//加载文件

    server = http.createServer(function(request,response){
       fs.readFile('index.html','utf-8',function(err,data){
           response.end(data);//响应结束
       });
    });
//启动server需要监听端口
//http默认是80端口
//端口号是从1~65535
server.listen(8080);