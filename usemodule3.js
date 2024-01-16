var m3 = require("./module3");
var m2 = require("./module2");
const fs = require("fs");
fs.readFile("test.txt", function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})
m3.function1();
console.log(m3.user);
console.log(m2.addition(34,35));