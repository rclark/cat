var hat = require('hat');

module.exports = function cat() {
  var str = hat();
  str = 'c' + str.substring(1);
  return str;
};
