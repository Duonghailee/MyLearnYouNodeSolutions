var port = process.argv[2],
    file = process.argv[3];

var fs = require('fs'),
    http = require('http');

var server = http.createServer(function cb(request, response) {
    fs.createReadStream(file).pipe(response);
})

server.listen(port);