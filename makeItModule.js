var mymodule = require('./mymodule.js');
var dirName = process.argv[2];
var ext = process.argv[3];
mymodule(dirName, ext, function(err, list) {
    if (err) {
        return console.log("error");
    } else {
        list.forEach(function(element) {
            console.log(element);
        }, this);
    }
})