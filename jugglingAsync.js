var count = 0;
var printOut = [];

var http = require('http'),
    bl = require('bl');

function printResult() {
    for (var i = 0; i < 3; i++) {
        console.log(printOut[i]);
    }
}

function getData(index) {
    http.get(process.argv[2 + index], function callback(response) {
        response.setEncoding('utf-8');
        response.pipe(bl(function(err, data) {
            if (err) {
                console.error(err);
            } else {
                printOut[index] = data.toString();
                count++;
                if (count === 3) {
                    printResult();
                }
            }
        }))
    })
}



for (var i = 0; i < 3; i++) {
    getData(i);
}