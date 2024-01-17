const http = require("http");
const fs = require("fs");

var server = http.createServer(function(req, resp){
    console.log(req.url);
    switch(req.url){
        case "/home":
            console.log("in home")
            resp.writeHeader(200,{'content-type':'text/html'})  ///application/json   image/jpg
            var rs = fs.createReadStream("./public/home.html");
            rs.pipe(resp);//the html file will get displayed on the browser
            break;
        case "/data":
            console.log("in data")
            resp.writeHeader(200,{'content-type':'text/html'})  ///application/json   image/jpg
            var rs = fs.createReadStream("./public/index.html");
            rs.pipe(resp);//the html file will get displayed on the browser
            break;
        case "/aboutus":
            resp.writeHeader(200,{'content-type':'text/html','content-length':100})  ///application/json   image/jpg
            resp.write("<h1>In AboutUs</h1>");
            resp.end("<h1>In case aboutus</h1>");
            break;
        default:
            resp.writeHeader(404,{'content-type':'text/html','content-length':100})  ///application/json   image/jpg
            resp.write("<h1>page not found</h1>");
            resp.end("<h1>In case default</h1>");
            break;
    }
    
    
});

server.listen(3001);
console.log("server Listening at port 3001");