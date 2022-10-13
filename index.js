//........Creat server...............///
/*
var http =require("http");
var server = http.createServer(function(req,res){
if(req.url=="/"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hellow This is Home Page</h1>");
    res.end();}


   else if(req.url=="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>Hellow This is about Page</h1>");
        res.end();}

  else if(req.url=="/contact"){
            res.writeHead(200,{"content-type":"text/html"});
            res.write("<h1>Hellow This is contact Page</h1>");
            res.end();} 
});

server.listen(5050);
console.log("Server Run sucess");
*/


///////////FS  MODULE ----FILE SYSTEM MODULE/////////
/// Asynchronous .....

//...fs.readFile(fileName,callbackfunction)..........//......Read existing file.....
//...fs.writeFile(fileName,data,callbackfunction)...........//...ki likhbo seta r jodi age thke likha thake tahole seta bad dea new likha hobe
//...fs.rename(oldpath,newpath,callbackfunction).....//.....rename an existing file.
//...fs.exists(path, callbackfunction)....//......content file exists or not
//...fs.unlink(path,callback) .........//....... delete 


// synchronous........ ekhaene  method er sathe sudhu  sync jog korte hobe and ekhane call back function nai



//...fs.readSync(fileName)..........//......Read existing file.....
//...fs.writeFileSync(fileName,data)...........//...ki likhbo seta r jodi age thke likha thake tahole seta bad dea new likha hobe
//...fs.renameSync(oldpath,newpath).....//.....rename an existing file.
//...fs.existsSync(path)....//......content file exists or not
//...fs.unlinkSync(path) .........//....... delete 

//Asynchronous

//////////////.............Read file Asyncronous.....//////////////
/*
var http = require("http");
var fs = require("fs");
 var server = http.createServer(function(req,res){

   if(req.url== "/"){
    fs.readFile("index.html",function(error,data){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(data);
        res.end();
    })
   }



})
 server.listen(5000);
 console.log("server run sucesss");
 */



//..........ReadFile syncronous..........//////
/*
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/"){
       let myData=  fs.readFileSync("index.html");
        res.writeHead(200,{"content-type":"text/html"});
        res.write(myData);
        res.end();
    };
});
 server.listen(5050);
 console.log("server run sucess");
*/


///////...fs.writeFile(fileName,data,callbackfunction)............asyncronous
/*
var http =require("http");
var fs = require("fs");
var server =http.createServer(function(req,res){
    if(req.url =="/"){
        fs.writeFile("hellow.txt","Hellow wprld",function(error){
            if(error){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("Work unsucessfull");
                res.end();
            }
      else{
              res.writeHead(200,{"content-type":"text/html"});
                res.write("Work sucessfull");
                res.end();
      }
        }
        
        
        )
    }
})
server.listen(5050);
console.log("Sucess");
*/

//...fs.writeFileSync(fileName,data)...........//...ki likhbo seta r jodi age thke likha
                                                   //thake tahole seta bad dea new likha hobe
/*

  var http = require("http");
  var fs  =require ("fs");
  var dat = "Hellow i am writefilesync function"
  var server = http.createServer(function(req,res){
     
    if(req.url =="/"){
     var mydata =fs.writeFileSync("text.txt",dat);
     res.writeHead(200,{"content-type":"text/html"});
                res.write("Work sucessfull");
                res.end();

          
    }


  })
  server.listen(5050);

console.log("Sucess");                                                   

*/


//...fs.rename(oldpath,newpath,callbackfunction).....//...Asyncronous..rename an existing file.
/*
var http = require("http");
var fs =require("fs");
var server =http.createServer(function(req,res){
  if(req.url == "/"){
    fs.rename("text.txt","new.txt",function(error){
      if(error){

        res.writeHead(200,{"content-type":"text/html"});
        res.write("Work unsucessfull");
        res.end();

      }
      else{
        res.writeHead(200,{"content-type":"text/html"});
        res.write("Work sucessfull");
        res.end();
      }
    })
  }
})
server.listen(5050);

console.log("Sucess");  
*/
//...fs.renameSync(oldpath,newpath).....//syncronous.....rename an existing file.
/*
/////..........problems.............
let http =require("http");
let fs = require("fs");
let server =http.createServer(function(req,res){

  if(req.url =="/"){
    var error = fs.renameSync("new.txt","neww.txt");



     if(error){
      res.writeHead(200,{"content-type":"text/html"});
      res.write("Rename Failed");
      res.end();

     }
     else{
    
        res.writeHead(200,{"content-type":"text/html"});
        res.write("Rename sucesss");
        res.end();
        
     }
  }
})
server.listen(5050);

console.log("Sucess"); 
*/

//////...fs.unlink(path,callback) .......asencronous..//....... delete 
/*
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
  if(req.url =="/"){
    fs.unlink("neww.txt",function(error){
      if(error){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("File Delete unsucessfull");
        res.end();

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