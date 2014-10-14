var fs = require('fs');
var async = require('async');

async.series([

  function(callback) {
    // previous.txtファイルを削除する
    fs.unlink('previous.txt', callback);
  },

  function(callback) {
    // current.txtをprevious.txtにリネームする
    fs.rename('current.txt', 'previous.txt', callback);
  },

  function(callback) {
    // new.txtをcurrent.txtにリネームする
    fs.rename('new.txt', 'current.txt', callback);
  }
], function(err, results) {
  if (err) {
    throw err;
  } else {
    console.log('success!');
  }
});
