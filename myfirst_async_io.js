var fs = require('fs');
var sum = 0;
fs.readFile(process.argv[2], function doneReading(err, fileContents){
	if(err) {
	 	console.log("error");
	} else {
	sum = fileContents.toString().split('\n').length-1;
		console.log(sum);
	} 
});
