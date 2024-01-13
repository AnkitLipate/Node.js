const fs = require("fs");
rs = fs.createReadStream("test.txt");
ws = fs.createWriteStream("testcopy11.txt");
rs.pipe(ws);
console.log("end of program");