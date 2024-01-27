//define object
var express = require("express");
var app = express();

// import all require modules
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var routes = require("./routes/routers");

// connect to database
mongoose.promise = global.promise;

//url
const url = "mongodb://127.0.0.1:27017/test"; 

//to connect to database
mongoose.connect(url,{
    useMongoClient:true,
    connectTimeoutMs:1000
    },
    function(err, result){
        if(err){
            console.log("error connection to database");
        }
        else{
            console.log("connection with test database is done");
        }
    });

//  add middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


///routing will be handled by routers.js
app.use('/',routes);

//start the server 
app.listen(3000);
console.log("server started at port at 3000");
module.exports=app;