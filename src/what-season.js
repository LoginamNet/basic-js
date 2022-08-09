const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season;

  function noDate(message) {
    this.message = `'Invalid date!'`;
    this.name = noDate;
  }

  if (!arguments.length) {return 'Unable to determine the time of year!'}

  if (Date.parse(date) === NaN) {throw new noDate('Invalid date!')}

  let month = date.getMonth();

  if (month < 2 || month  === 11) {
    season = `winter`;
  } else if (month >= 2 && month < 5) {
    season = `spring`;
  } else if (month >= 5 && month < 8) {
    season = `summer`;
  } else if (month >= 8 && month < 11) {
    season = `autumn`;
  }

  return season;
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
