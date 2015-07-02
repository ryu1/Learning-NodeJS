console.log('worker on', process.pid);

// 親プロセスからのメッセージを受信
process.on('message', function(msg) {
  console.log('親プロセスからメッセージを受信しました。')
  // 親プロセスにメッセージを送信
  console.log('親プロセスへメッセージを送信します。')
  process.send('from worker to master');
  console.log(msg);
});
