var path = require('path'),
    fs = require('fs');

var filePath = path.join(__dirname, 'test.txt');

var readStream = fs.createReadStream(filePath);
//var readStream = fs.createReadStream(filePath, {bufferSize:1});
//var readStream = fs.createReadStream(filePath, {size:1});
var readStream = fs.createReadStream(filePath, {highWaterMark: 8});


readStream.setEncoding('utf8');

readStream.on('data', function(data) {
  console.log('a data event occured.');
  console.log(data.length);
  console.log(data);
});

readStream.on('end', function() {

  console.log('end');
});

readStream.on('error', function(err) {

  console.log('An error occured');
  console.log(err);
});
