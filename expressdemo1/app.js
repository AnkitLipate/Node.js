///define express object
const express = require("express");
const app = express();
var bodyparser = require("body-parser");

///configure setting

///define middleware
//extended false will use querystring module for parsing data coming with url
http://localhost:3000/home?q1=12&q2=23 
app.use(bodyparser.urlencoded({extended:false}))

///define all routes
app.get("/",function(req,resp){
    resp.send("<h1>Display form</h1>");
});
app.get("/submit_data",function(req,resp){
    resp.send("<h1>display data</h1>")
});

//start the server
app.listen(3000);
console.log("listening at port 3000");