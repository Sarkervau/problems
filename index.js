

var http = require("http");
var fs = require("fs");
var server = createServer(function(req,res){
    if(req.url == "/"){
       let myData=  readFileSync("index.html");
        res.writeHead(200,{"content- type":"tex/html"});
        res.write(myData);
        res.end();
    };
});
 server.listen(5050);
 console.log("server run sucess");
