var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();
var arr = str.split('\n');

console.log(arr.length-1);
