/**
 * Created by hui on 2015/11/4.
 */

//说明一个程序只能被一个端口号监听
//一个端口号只能被一个程序监听
//var http = require('http');
//    http.createServer(function(request,response){
//    }).listen(8080);

//输出报错信息
//events.js:141
//throw er; // Unhandled 'error' event
//^
//
//Error: listen EADDRINUSE :::8080


var http = require('http'),
    fs = require('fs'),
    url = require('url');

http.createServer(function(request,response){
   var urlobj =  url.parse(request.url);
    console.log(urlobj);
    var pathname = urlobj.pathname;
    var query = urlobj.query;

    if(pathname==='/'){
        readFileAndResponse('/index.html',response);
    }else if(pathname==='/ajax'){
        response.end('this is a ajax response');
    }else{
        readFileAndResponse(pathname,response);
    }

}).listen(8080);

function readFileAndResponse(pathname,response){
    fs.readFile(pathname,'utf-8', function (err,data) {

        if(err){
            response.writeHead(404);
            response.end('file not found');
        }else{
            response.end(data);
        }
    });
}