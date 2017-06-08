var hat = require('hat');

module.exports = function cat() {
  return 'k' + hat().substring(1);
};
