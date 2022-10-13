//........Creat server...............///
/*
var http =require("http");
var server = http.createServer(function(req,res){
if(req.url=="/"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hellow This is Home Page</h1>");
    res.end();}


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

      }
      else{
        res.writeHead(200,{"content-type":"text/html"});
        res.write("File Delete sucessfull");
        res.end();
      }
    })
 
  }
})
server.listen(8080);
console.log("Programe run");
*/

//...fs.unlinkSync(path) .........//....syncronous... delete
/*
var http = require("http");
var fs = require("fs");
var server =http.createServer(function(req,res){
  if(req.url == "/"){
    var myDatar= fs.unlinkSync("hellow.txt");
    if(myDatar){
      res.writeHead(200,{"content-type":"text/html"});
      res.write("Programe run unsucessfull");
      res.end();

    }
    else{
      res.writeHead(200,{"content-type":"text/html"});
      res.write("Programe run sucessfull");
      res.end();
    }
  }
})
server.listen(8080);
console.log("Programe run");
*/


//...fs.existsSync(path)....//......content file exists or not

/*
var http = require("http");
var fs = require("fs");
var server =http.createServer(function(req,res){
  if(req.url == "/"){
    var myDatar= fs.existsSync("hellow.txt");
    if(myDatar){
      res.writeHead(200,{"content-type":"text/html"});
      res.write("Programe run sucessfull");
      res.end();

    }
    else{
      res.writeHead(200,{"content-type":"text/html"});
      res.write("Programe run unsucessfull");
      res.end();
    }
  }
})
server.listen(8080);
console.log("Programe run");
*/



//...fs.exists(path, callbackfunction)....//......content file exists or not

var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
  if(req.url =="/"){
    fs.exists("hello.txt",function(mydata){

      if(mydata){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("Fill find sucessfull");
        res.end();

      }
      else{
        res.writeHead(200,{"content-type":"text/html"});
        res.write("File find unsucessfull");
        res.end();
      }
    })
 
  }
})
server.listen(8080);
console.log("Programe run");