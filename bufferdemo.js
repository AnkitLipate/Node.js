buf = new Buffer.alloc(256); //to allocate buffer size 256
lendata = buf.write("this is data in buffer");
console.log("byte written",lendata);
console.log(buf.toString());