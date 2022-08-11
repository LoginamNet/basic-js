const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {

  let encodeLine = [];
  let letterAmount = 1;

  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
      letterAmount++;
    } else {
    
      (letterAmount === 1) ? encodeLine.push(`${str[i]}`) : encodeLine.push(`${letterAmount}${str[i]}`);
      letterAmount = 1;
    }

  }
  
  console.log(encodeLine);
  return encodeLine.join('');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
