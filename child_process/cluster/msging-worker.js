var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
  var util = require('util');
  var msg = 'access to pid = ' + process.pid;
  process.send(util.format('worker %d to master', process.pid));
  res.writeHead(200, { 'Content-Type': 'text/plan' });
  res.end(msg);
});

process.on('message', function(msg) {
  console.log(msg);
});

if (require.main === module) {
  server.listen(port);
}
