var fs = require('fs');
process.on('uncaughtException', function(e) {
  // ここで捕獲される
  console.error('uncaughtException:', e.message);
});

try {
  fs.readFile('non-exit.txt', 'utf8', function(err, data) {
    if (err) throw err; // コールバック中でエラーをスローする
    console.log('data:', data);
  });

} catch(e) {
  // catchでエラーを捕獲できない
  console.error('catch:', e.message);
}
