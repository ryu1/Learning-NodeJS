var child_process = require('child_process');
var command = '/bin/echo';
var args = ['hello world'];

// ファイルに引数を渡して実行
child_process.execFile(command, args, function(err, stdout, stderr) {
  console.log(stdout); // hello world
});
