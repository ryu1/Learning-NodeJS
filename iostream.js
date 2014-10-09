var path = require('path'),
    fs = require('fs');

var outputFilePath = path.join(__dirname, 'write.txt');
var writeStream = fs.createWriteStream(outputFilePath);

var inputFilePath = path.join(__dirname, 'test.txt');
var readStream = fs.createReadStream(inputFilePath);

writeStream.on('error', function(err) {

  console.log('An error occured');
  console.log(err);
});

writeStream.on('close', function() {
  console.log('writable stream closed');
});

writeStream.on('drain', function() {
  console.log('resumed writing');
  // カーネルバッファに空きがでたら、読み込みを再開する。
  // 読み込みが再開されると、また、readStreamのdataイベントが発生する。
  readStream.resume();
});

readStream.on('data', function(data){
  console.log('>> a data event writing');
  // カーネルバッファに空きがある場合、読み込んだデータをフラッシュする
  if (writeStream.write(data) === false) {
    // そうでない場合は、読みこみをポーズする
    console.log('paused writing');
    readStream.pause();
  }
});

readStream.on('end', function() {
  console.log('read end');
});

readStream.on('error', function(err) {
  console.log('An error occured');
  console.log(err);
});


