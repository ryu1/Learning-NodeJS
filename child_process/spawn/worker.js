// 0.1秒ごとにメッセージを標準出力に出力
setInterval(function() {
  console.log('worker on', process.pid)
}, 100);
