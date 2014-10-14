var async = require('async');

function printItem(item, callback) {
  console.log(item);
  callback(null, 'printed:' + item);
}

async.map(['test1', 'test2', 'test3'], printItem, function(err, results) {
  if (err) {
    throw err;
  } else {
    // results[0]は、'printed: test1'
    // results[1]は、'printed: test2'
    // results[2]は、'printed: test3'
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  }
});
