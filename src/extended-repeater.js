const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result = '';
  
  if  (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if  (!options.separator) {
    options.separator = `+`;
  }

  if (!options.addition && !(typeof options.addition === 'boolean') && !(options.addition === null)) {
    options.addition = "";
		options.additionRepeatTimes = 0;
		options.additionSeparator = "";
  }
  
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
    options.additionSeparator = '';
  }

  let additional = '';
  
  while (options.additionRepeatTimes) {

    options.additionRepeatTimes--;

    if (!options.additionRepeatTimes) {  
      options.additionSeparator = ""; 
    }

  

    additional += options.addition + options.additionSeparator;
    console.log(additional);

  }

  while (options.repeatTimes) {

		options.repeatTimes--;

		if (!options.repeatTimes) {  
      options.separator = ""; 
    }

		result += str + additional + options.separator;
    console.log(result);

	}

  return result;
}

module.exports = {
  repeater
};
