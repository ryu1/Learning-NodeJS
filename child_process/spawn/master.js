var child_process = require('child_process');
var option = {
  cwd: undefined,
  env: process.env,
  setsid: true
};

console.log('master on', process.pid);

// ワーカを起動
var worker = child_process.spawn('node', ['worker.js'], option);

// ワーカの標準出力を監視
worker.stdout.on('data', function(data) {
  console.log('stdout:' + data);
});

// ワーカのエラー出力を監視
worker.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

// 0.5秒後ワーカにシグナルSIGKILLを送信
setTimeout(function() {
  console.log('ワーカにSIGKILLを送信')
  worker.kill('SIGKILL');
}, 500);


// ワーカが終了したら
worker.on('exit', function(code, signal) {
  console.log('ワーカのexitイベント受信', code, signal);
  if (signal) {
    // マスタを終了
    console.log('マスタを終了');
    process.exit(1);
  }
});
