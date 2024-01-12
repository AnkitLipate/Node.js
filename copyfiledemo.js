var fs = require("fs");
fs.copyFile("./test.txt","./testcopy.txt",function(err){
    if(err){
        console.log("error ",err);
    }else{
        console.log("file copied");
        fs.readFile("./testcopy.txt",function(err,data){
            console.log(data.toString());   
        });
    }
});