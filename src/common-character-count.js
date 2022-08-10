const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2 ) {
  let result = 0;
  
  let x = Array.from(s1).sort();
  let y = Array.from(s2).sort(); 
  console.log(x);
  console.log(y);
  
  for (let j = 0; j < x.length; j++) {
    for (let i = 0; i < y.length; i++) {
      if (x[j] === y[i]) {
        result++;
        j++;
      }
    }
  }
  
  console.log(result);
  return result;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
