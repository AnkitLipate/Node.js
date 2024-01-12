var fs = require("fs");
fs.readFile("./test.txt","utf-8",function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("asynchronous program");
        console.log(data);
    }
});

fs.stat("test.txt",function(err, status){
    if(err){
        console.log("error "+err.code+" ------> "+err.message)
    }else{
        console.log(status);
        console.log(status.isFile());
        console.log(status.isDirectory());
    }
});

data = fs.readFileSync("./test.txt");
console.log("synchronous read: "+data);
console.log("end the program");