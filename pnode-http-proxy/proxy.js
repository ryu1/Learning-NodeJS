var httpProxy = require('http-proxy');

httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 3000

  }
}).listen(4000);
