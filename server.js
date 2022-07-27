const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res){
   
})

server.listen(port, function(error){
    if(error){
        console.log("something went wrong", error);
    }
    else{
        console.log("Server is listening on thr port 3000");
    }
})