//create server
const http = require("http");
//read data from file
const fs = require("fs");
//this module will help to saperate parts of url into pathname and querystring 
const url = require("url");

var server = http.createServer(function(req, resp){
    console.log(req.url);
    const q = url.parse(req.url);
    console.log(q.pathname);
    console.log(q.query);
    switch(q.pathname){
        case "/":
            resp.writeHeader(200,{'content-type':'text/html'})  ///application/json   image/jpg
            var rs = fs.createReadStream("./public/index.html");
            rs.pipe(resp);//the html file will get displayed on the browser
            break;
        case "/submit_data":
            console.log("n1: "+q.query.n1);
            console.log("n2: "+q.query.n2);
            resp.writeHeader(200,{'content-type':'text/html','content-length':100})  ///application/json   image/jpg
            resp.write("<h1>In submit-data</h1>");
            resp.end("<h1>In case submit-data</h1>");
            break;
        default:
            resp.writeHeader(404,{'content-type':'text/html','content-length':100})  ///application/json   image/jpg
            resp.write("<h1>page not found</h1>");
            resp.end("<h1>In case default</h1>");
            break;
    }
    
    
});

server.listen(3000);
console.log("server Listening at port 3000");