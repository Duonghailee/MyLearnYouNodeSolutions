var portNumber = process.argv[2];
var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
    socket.end(strftime('%F %R') + '\n');
})
server.listen(portNumber);