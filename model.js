/**
 * Created by hui on 2015/11/3.
 */

//一、通过require引入模块
//通过exports输出
//var sum = require("./sum");
//console.log(sum.sum(100));


//二、node中js
//文件相关操作的相关内容fs和path
//模块的名字和包的名字保持一致
//    同步代码会阻塞下面代码的执行
//    异步读取不会阻塞下面代码的执行

//1、fs
//var fs = require("fs");
//异步读取方法readFile
//    fs.readFile('sum.js','utf-8', function (err,data) {
//        if(err){
//            console.log(err);
//        }else{
//            console.log(data);
//        }
//    });
//
//同步读取readFileSync
//var data = fs.readFileSync('sum.js', 'utf-8');
//console.log(data);

//2、path
//var path=require('path');
//console.log(path.sep);//不同平台的分隔斜杠符不同
//console.log(path.extname('a.jpg'));//获取最后的扩展名，输出为.jpg





