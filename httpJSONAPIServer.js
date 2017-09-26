var http = require('http');

var port = process.argv[2];
var url = require('url');
var data;

var server = http.createServer(function(req, res) {
    if (req.method != 'GET') {
        return res.end('please use GET method only');
    } else {
        var objURL = url.parse(req.url, true);
        var time = new Date(objURL.query.iso);
        if (req.url.indexOf('/api/parsetime') != -1) { //req time 
            data = { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() };
        } else if (req.url.indexOf('/api/unixtime') != -1) { //req unix time
            data = { unixtime: time.getTime() }
        }
        if (data) {
            res.writeHead(200, { 'content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } else {
            res.writeHead(404);
            res.end();
        }

    }
});
server.listen(port);