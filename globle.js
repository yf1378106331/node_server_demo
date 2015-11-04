/**
 * Created by hui on 2015/11/3.
 */
//node.js常用内置对象和方法（global）
//《一》console
//一、输出log里面的信息，只是warn和error的颜色不同
//console.log("this is a log");
//console.info("this is an info");
//console.error("this is an error");
//console.warn("this is a warn");

//二、测时间 ，输出test: 2ms
//console.time("test");
//for(var i=0;i<1000000;i++){}
//console.timeEnd("test");//需要和time里的参数字符串保持一致


//《二》process
//三、process设置编码（注意：只设置如此就ok，不可设置gbk等）
//process.stdin.setEncoding("utf-8");

//1、输入文字，然后输出
//process.stdin.on("data",function(data){
//    console.log(data);
//
//});

//2、输入文字，然后输出
//process.stdin.on("readable",function(){
//   var aa=process.stdin.read();
//    console.log(aa);
//});

//四、受webstrom的限制结果相同
//console.log("dirname:"+__dirname);
//console.log(process.cwd());//执行node命令的目录

//退出触发事件
//process.on("exit", function () {
//    console.log("this will exit");
//});

//改变退出的默认行为
//process.on("SIGINT",function(){
//    console.log("process has a sigint")
//});

//process.argv可获取附加信息
// 输出结果如下
//[ 'E:\\soft\\nodejs\\node.exe',
//    'c:\\Users\\hui\\WebstormProjects\\myproject\\globle.js' ]
//console.log(process.argv);


