var fs = require("fs");
fs.exists("test.txt",function(exists){
    if(exists){
        fs.stat("test.txt",function(err, status){
            if(err){
                console.log("error "+err.code+" ------> "+err.message)
            }else{
                console.log(status);
                console.log(status.isFile());
                console.log(status.isDirectory());
                //open file for read mode
                fs.open("test.txt","r",function(err,fd){
                    buffer =  new Buffer.alloc(status.size);
                    //fs.read(file disriptor, buffer, start, length, position, callback)
                    fs.read(fd,buffer,0,status.size,null,function(err,bytesRead,buffer){
                        if(err){
                            console.log("error");

                        }else{
                            console.log(buffer.toString("UTF-8"));
                        }
                    });
                });
            }
        });
    }else{
        console.log("error: file not exists");
    }
});