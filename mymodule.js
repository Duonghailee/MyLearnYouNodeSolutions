var fs = require('fs');
var path = require('path');

module.exports = function(dirName, ext, callback) {
    fs.readdir(dirName, function doneReading(err, list) {
        if (err) {
            return callback(err);
        } else {
            list = list.filter(function(file) {
                return path.extname(file) === '.' + ext
            });
            callback(null, list);
        }
    });
}