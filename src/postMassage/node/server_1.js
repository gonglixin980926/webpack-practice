var http = require('http');
var fs = require('fs')
var server = http.createServer()
const path = require("path")
const aPath = path.resolve(__dirname,"./../a.html")
const bPath = path.resolve(__dirname,"./../b.html")
const indexPath = path.resolve(__dirname,"./../index.html")
server.on('request',(request,response)=>{
    console.log(request.url);
    let url = request.url;
    response.setHeader("Access-Control-Allow-Origin", "*")
    if(url==='/'){
        console.log(url)
        fs.readFile(indexPath,function(error,data){
            if(error){
                console.log(error)
            }else{
                console.log("------------")
                response.setHeader('Content-Type','text/html;charset=utf-8')
                response.end(data);
            }
        })

        // console.log(request.socket.remotePort)
        // console.log(request.socket.remoteAddress)

    } else if(url === '/products'){
        var arr = [
            {
                name:'allen',
                age:30
            },{
                name:'sara',
                age:28
            },{
                name:'lisa',
                age:30
            },{
                name:'mike',
                age:30
            }
        ]
        response.end(JSON.stringify(arr));
    }else if(url === '/b'){
        fs.readFile(bPath,function(error,data){
            if(error){
                console.log(error)
            }else{
                console.log("------------")
                response.setHeader('Content-Type','text/html;charset=utf-8')
                response.end(data);
            }
        })
    }else if(url === '/a'){
        fs.readFile(aPath,function(error,data){
            if(error){
                console.log(error)
            }else{
                console.log("------------")
                response.setHeader('Content-Type','text/html;charset=utf-8')
                response.end(data);
            }
        })
    }
    // console.log(response)
    console.log('收到请求');
})
server.listen(3001,()=>{
    console.log('服务器启动成功')
})