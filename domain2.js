var domain = require('domain');
var d = domain.create();
d.on('error', function(e) {
  // ここでドメインで受けたエラーの処理を行う
  console.error('d:' + e.message);
});


d.run(function() {
  // この関数内でエラーをスローするとdでエラーを受ける
  throw new Error('throwed error');
});
