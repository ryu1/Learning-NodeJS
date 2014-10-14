var async = require('async');

function isTrue(item, callback) {
  var value = (item === 'test2') ? false : true;
  callback(value);
}

async.filter(['test1', 'test2', 'test3'], isTrue, function(results) {
  // results[0]は、'test1'
  // resutls[1]は、'test2'
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});
