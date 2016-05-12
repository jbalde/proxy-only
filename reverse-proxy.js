#!/usr/bin/env node

var http = require('http'),
    net = require('net'),
    httpProxy = require('http-proxy'),
    url = require('url'),
    util = require('util'),
    fmt = require('fmt'),
    publicIp = require('public-ip');


var proxy = httpProxy.createServer();

var server = http.createServer(function (req, res) {
  util.puts('Receiving reverse proxy request for:' + req.url);

  proxy.web(req, res, {target: req.url, secure: false});
}).listen(8213);

server.on('listening', function() {

  publicIp.v4().then(function (ip) {
    fmt.title('Proxy ready');
    fmt.field('Public IP', ip);
    fmt.field('Port', server.address().port);
    fmt.field('Started at', new Date());
    fmt.sep();
  });

});

server.on('connect', function (req, socket) {
  util.puts('Receiving reverse proxy request for:' + req.url);

  var serverUrl = url.parse('https://' + req.url);

  var srvSocket = net.connect(serverUrl.port, serverUrl.hostname, function() {
    socket.write('HTTP/1.1 200 Connection Established\r\n' +
                 'Proxy-agent: Node-Proxy\r\n' +
                 '\r\n');
    srvSocket.pipe(socket);
    socket.pipe(srvSocket);
  });
});

// Test with:
// curl -vv -x http://127.0.0.1:8213 https://www.google.com
// curl -vv -x http://127.0.0.1:8213 http://www.google.com
