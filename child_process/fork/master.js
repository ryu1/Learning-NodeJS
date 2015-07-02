var child_process = require('child_process');
console.log('master on', process.pid);

// ワーカプロセスをfork
var worker = child_process.fork(__dirname + '/worker.js');

// 子プロセスにメッセージを送信
console.log('子プロセスにメッセージを送信します。');
worker.send('from master to worker');

// 子プロセスからのメッセージを受信
worker.on('message', function(msg) {
  console.log('子プロセスからメッセージを受信しました。')
  // 子プロセスを終了
  console.log(msg);
  // 子プロセスを終了
  console.log('子プロセスを終了します。');
  worker.kill('SIGKILL');
});
