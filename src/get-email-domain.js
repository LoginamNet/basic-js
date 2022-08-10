const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let arr = Array.from(email);
  let dog = arr.lastIndexOf(`@`);
   
   let result = arr.slice(dog + 1).join('');
    return result;
   // remove line with error and write your code here
 }

module.exports = {
  getEmailDomain
};
