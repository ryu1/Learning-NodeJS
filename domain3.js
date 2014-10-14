'use strict'

var domain = require('domain');
var events = require('events');
var d = domain.create();

d.on('error', function(e) {
  // ここでドメインで受けたエラーの処理を行う
  console.log('d:', e.message);
});

d.run(function() {
  // この関数内でエラーイベントを発生させるとdでエラーを受ける
  var ee = new events.EventEmitter();
  ee.emit('error', new Error('emitted error'));
});

