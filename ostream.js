var path = require('path'),
    fs = require('fs');

var filePath = path.join(__dirname, 'write.text');
var writeStream = fs.createWriteStream(filePath);

writeStream.write('Hello World!');
writeStream.end();

writeStream.on('error', function(err) {

  console.log('An error occured');
  console.log(err);
});

writeStream.on('close', function() {
  console.log('wirtable stream closed');

});

