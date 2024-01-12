var fs = require('fs');
fs.writeFileSync("test.txt","Hello World!!!, Welcome to fs module");
console.log(fs.readFileSync('test.txt').toString());