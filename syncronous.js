

// synchronous........ ekhaene  method er sathe sudhu  sync jog korte hobe and ekhane call back function nai



//...fs.readSync(fileName)..........//......Read existing file.....
//...fs.writeFileSync(fileName,data)...........//...ki likhbo seta r jodi age thke likha thake tahole seta bad dea new likha hobe
//...fs.renameSync(oldpath,newpath).....//.....rename an existing file.
//...fs.existsSync(path)....//......content file exists or not
//...fs.unlinkSync(path) .........//....... delete 

/*
var http  =  require("http");
var  fs = require("fs");
let server = http.createServer(function(req,res){
    if(req.url =="/"){
        var mYdata = fs.readFileSync("hllow.txt");
        if(mYdata){
            res.writeHead(200,{"content-type":"text/html"});
            res.write(mYdata);
            res.end();

        }

    
    }
})
server.listen(5050);
console.log("run");
*/

/*
var http = require("http");
var fs = require("fs");
let server = http.createServer(function(req,res){
 if(req.url == "/"){
    var error = fs.writeFileSync("index.txt","hellow i am write file sync");
    if(error){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("File write unsucessfull");
        res.end();

    }
   else{

    res.writeHead(200,{"content-type":"text/html"});
    res.write("File write sucessfull");
    res.end();

   } 
 }
})
server.listen(5000);
console.log("run");
*/
/*
var http = require("http");
var fs = require("fs");
let server = http.createServer(function(req,res){
 if(req.url == "/"){
    if(fs.existsSync("hellow.txt")){

        res.writeHead(200,{"content-type":"text/html"});
        res.write("File write sucessfull");
        res.end();
 

    }

    else{
        res.writeHead(200,{"content-type":"text/html"});
        res.write("File write unsucessfull");
        res.end();
 
    }


   } 
 }
)
server.listen(5000);
console.log("run");
*/


//unlink/delete......................
/*
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url =="/"){
        if(fs.existsSync("hellow.txt")){
            fs.unlinkSync("hellow.txt");
            res.writeHead(200,{"content-type":"text/html"});
            res.write("programe run sucess");
            res.end();
        }
       else{
        res.writeHead(200,{"content-type":"text/html"});
        res.write("programe run unsucess");
        res.end();
       } 
    }
})
server.listen(5000);
console.log("run");
*/


//...fs.existsSync(path)....//......content file exists or not
/*
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url =="/"){
        if(fs.existsSync("hllow.txt")){
        
          res.writeHead(200,{"content-type":"text/html"});
            res.write("programe run sucess");
            res.end();
        }
       else{
        res.writeHead(200,{"content-type":"text/html"});
        res.write("programe run unsucess");
        res.end();
       } 
    }
})
server.listen(5000);
console.log("run");
*/
