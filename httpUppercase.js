var port = process.argv[2];

var http = require('http'),
    map = require('through2-map');


var server = http.createServer(function(req, res) {
    if (req.method !== 'POST') {
        return res.end('please send POST only');
    }
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
})

server.listen(port);