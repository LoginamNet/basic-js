const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let noOnesArr = [...arr].sort((a, b) => a - b).filter(item => item != -1)

  return arr.map(num => {return (num === -1) ? - 1 : +noOnesArr.splice(0, 1)});
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
