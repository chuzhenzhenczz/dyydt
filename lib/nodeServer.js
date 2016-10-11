/**
 * http对象,通过他可以创建服务器,设置端口号。。。
 */
var http = require('http');
//url对象,可以解析url中的内容
var url = require('url');
//查询参数对象,可以处理查询参数
var qs = require('querystring');
//req:request,请求对象,可以拿到前端请求数据
//res:response,响应对象,可以把一些信息发送给前端
http.createServer(function (req,res) {
    //对请求对象端url进行解析,拿到?后面查询参数字符串eg:(http://localhost:3000?myUrl="+myUrl+"&callback=callBackFunc")
    var query = url.parse(req.url).query;
    //把查询参数字符串转化成对象,方便取值
    var queryObj = qs.parse(query);

    console.log(queryObj.myUrl);
    console.log(queryObj.callback);

    var resultData = "";

    //服务器作为请求者
    http.get(queryObj.myUrl,function (request) {

        //设置编码格式
        request.setEncoding('utf8');

        //检测到有数据返回,就会回调第二个参数(函数),result就是返回端数据
        request.on('data',function (result) {
            console.info();
            console.log(result);
            console.info();
            //由于数据不是一次全部接受完毕,该方法会调用很多次,需要把数据拼接到resultData中
            resultData +=result;
        });
        //数据全部接收完成以后执行操作
        request.on('end' ,function () {

            //需要把所有数据包括到回调函数中,返回给前端
            var str = queryObj.callback+"("+JSON.stringify(resultData)+")";
            //请求数据结束,响应数据(把数据发送给请求者)
            res.end(str);
        });


    }).on('error',function (e) {
        //请求数据失败,把错误信息发送给请求者
        res.end(e.message)
    });

}).listen(3001);
console.log("http server is listening at port 3000");











