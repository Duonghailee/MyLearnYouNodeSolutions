var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function doneReading(err, list) {
    if (err) {
        return console.log("error");
    } else {
        list.forEach(function(element) {
            if (path.extname(element) === '.' + process.argv[3]) {
                console.log(element);
            }
        }, this);
    }
});