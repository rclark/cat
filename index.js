var hat = require('hat');

module.exports = function cat() {
  return 'c' + hat().substring(1);
};
