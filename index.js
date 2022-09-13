

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
