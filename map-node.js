var fs = require('fs');
var async = require('async');

async.map(['test1', 'test2', 'test3'], fs.stat, function(err, results) {
  if (err) {
    console.log('err:' + err.message);
    throw err;
  } else {
    // results[0]は、'test1'に対するfs.statの結果
    // results[1]は、'test2'に対するfs.statの結果
    // results[2]は、'test3'に対するfs.statの結果
    console.log('results[0]: %s', results[0]);
    console.log('results[1]: %s', results[1]);
    console.log('results[2]: %s', results[2]);
  }
});
