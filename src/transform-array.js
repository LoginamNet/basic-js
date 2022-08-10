const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];

  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
      result.pop();
    } else if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === `--double-next`) {
      result.push(arr[i + 1]);
    } else if (arr[i] === `--double-prev` && arr[i - 2] === '--discard-next' && i > 1) {
      continue;
    } else if (arr[i] === `--double-prev`) {
      result.push(arr[i - 1]);
    } else {
      result.push(arr[i])
    }
    
  }
 
  let final = result.filter(item => typeof item !== `undefined`).filter(item => item !== "--discard-prev");


  return final;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
