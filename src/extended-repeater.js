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

  if (typeof str !== 'string') str = String(str);
  if (typeof options.addition !== 'string') options.addition = String(options.addition);

  let additionArr = [];
  let strArr = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArr.push(options.addition);
  }

  let additionRes = additionArr.join(options.additionSeparator);

  for (let i = 0; i < options.repeatTimes; i++) {
    strArr.push(str + additionRes);
  }

  let srtRes = strArr.join(options.separator);

  return srtRes;
}

module.exports = {
  repeater
};
