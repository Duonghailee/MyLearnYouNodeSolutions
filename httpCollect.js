var url = process.argv[2];
var http = require('http');
var bl = require('bl');

http.get(url, function callback(response) {
    response.setEncoding('utf-8');
    response.pipe(bl(function(err, data) {
        if (err) {
            console.err(err);
        } else {
            console.log(data.length);
            console.log(data.toString());
        }
    }))
})