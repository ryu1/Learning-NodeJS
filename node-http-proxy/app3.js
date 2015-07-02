var express = require('express');
var app = module.exports = express();
var port = process.argv[2]; // 引数でポート番号を取得
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var io = require('socket.io');


var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  app.use(session({
    secret: 'test',
    store: new RedisStore()
  }));
}


app.get('/', function(req, res) {
  var msg = 'access to pid =' + process.pid;
  console.log(msg);
  res.send(msg);

});

if (require.main === module) {
  // 単体で実行された場合はポートをリッスン
  console.log("port:%dをリッスン開始", port);
  var server = app.listen(port);
}
