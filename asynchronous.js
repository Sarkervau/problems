


/// Asynchronous .....


//...fs.writeFile(fileName,data,callbackfunction)...........//...fil name then ki likhbo seta r jodi age thke likha thake tahole seta bad dea new likha hobe
//...fs.read(fileName,callbackfunction)..........//......Read existing file.....
//...fs.rename(oldpath,newpath,callbackfunction).....//.....rename an existing file.
//...fs.exists(path, callbackfunction)....//......content file exists or not
//...fs.unlink(path,callback) .........//....... delete 



//...fs.writeFile(fileName,data,callbackfunction)..........
/*
var dat = "hellow i  am asynchronous program";
var http = require ('http');
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.writeFile("indexs.txt",dat,function(error){
            if(error){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("File write file unsucessfull");
                res.end();

            }
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write("File write file sucessfull");
                res.end();
            }

 })


    }
})

server.listen(5050);
console.log("run sucess full");
*/

//...fs.read(fileName,callbackfunction(2ta parametar(error,data)))..........//......Read existing file.....
/*
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.readFile("indexs.txt",function(error,data){
            if(error){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("FILE WRITE UNSUCESSFULL");
                res.end();

            }
           else{
            res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end();
           } 
        })
    }
})
server.listen(5050);
console.log("run sucess full");




//...fs.rename(oldpath,newpath,callbackfunction).....//.....rename an existing file.

*/
//...fs.rename(oldpath,newpath,callbackfunction).....//.....rename an existing file.

/*
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.rename("indexs.txt","index.txt",function(error){
            if(error){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("FILE Rename UNSUCESSFULL");
                res.end();

            }
           else{
            res.writeHead(200,{"content-type":"text/html"});
                res.write("FILE Rename SUCESSFULL");
                res.end();
           } 
        })
    }
})
server.listen(5050);
console.log("run sucess full");
*/



//...fs.exists(path, callbackfunction)....//......content file exists or not

/*
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.exists("inde.txt",function(data){
            if(data){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("FILE  AVAILABLE");
                res.end();

            }
           else{
            res.writeHead(200,{"content-type":"text/html"});
                res.write("FILE UNAVAILABLE ");
                res.end();
           } 
        })
    }
})
server.listen(5050);
console.log("run sucess full");
*/


/*

var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.unlink("index.txt",function(error){
            if(error){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("FILE  DELETE UNSUCESSFULL");
                res.end();

            }
           else{
            res.writeHead(200,{"content-type":"text/html"});
                res.write("FILE DELETE SUCESSFULL ");
                res.end();
           } 
        })
    }
})
server.listen(5050);
console.log("run sucess full");

*/