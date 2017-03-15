'use strict';
module.exports = function() {

  var secret = {};

  function getValue(key) {
    if (secret[key] === undefined) {
      return null;
    }
    return secret[key];
  }

  function setValue(key, newSecret) {
   secret[key] = newSecret;
  }

  return {
    getValue,
    setValue
  }

};