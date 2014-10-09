// countがモジュール内のスコープになるのはvarつきの変数宣言をしているからです。
// varなしで変数を宣言して利用した場合、その変数はグローバル変数となる点に注意してください。
var count = 0;
module.exports = {

  say: function(name) {
    count++;
    console.log('Hello ' + name);
  },

  getCount: function() {
    return count;
  },

  resetCount: function() {
    count = 0;
  }

};

