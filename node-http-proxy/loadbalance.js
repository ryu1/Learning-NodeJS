var http = require('http');
var httpProxy = require('http-proxy');

var addresses = [
  {target: {host: 'localhost', port: 3000}},
  {target: {host: 'localhost', port: 3001}},
  {target: {host: 'localhost', port: 3002}}
];

function target() {
  var rand = Math.floor(Math.random() * (addresses.length));
  return addresses[rand];
}


var proxy = httpProxy.createServer();

http.createServer(function (req, res) {
  console.log('リクエストを受け付けました。');
  proxy.web(req, res, target());
}).listen(4000);

