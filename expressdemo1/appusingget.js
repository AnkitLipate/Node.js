///define express object
const express = require("express");
const app = express();
var bodyparser = require("body-parser");
var m1 = require("./module1");

///configure setting

///define middleware
//extended false will use querystring module for parsing data coming with url
http://localhost:3000/home?q1=12&q2=23 
app.use(bodyparser.urlencoded({extended:false}))

///define all routes
app.get("/",function(req,resp){
    resp.sendFile("public/index.html",{root:__dirname});
});
app.get("/submit_data",function(req,resp){
    var num1 = req.query.n1;
    var num2 = req.query.n2;
    m1.addition(num1, num2);
    resp.send("n1: "+num1+"+ n2: "+num2+"= "+ans);
});

//start the server
app.listen(3000);
console.log("listening at port 3000");