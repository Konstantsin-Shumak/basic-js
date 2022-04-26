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
  if (typeof str != 'string') str = String(str);
  if (typeof options.addition != 'string' && options.addition != undefined) addition = String(options.addition);
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';

  if (options.addition === undefined) options.addition = '';
  if (options.additionSeparator === undefined) options.additionSeparator = '';
  let repeatAdition = (options.addition + options.additionSeparator);
  if (typeof options.additionRepeatTimes === 'number') repeatAdition = repeatAdition.repeat(options.additionRepeatTimes);
  let repeatAditionSlice = repeatAdition.slice(0, repeatAdition.length - options.additionSeparator.length);

  let stringEnd = (str + repeatAditionSlice + options.separator);
  if (typeof options.repeatTimes === 'number') stringEnd = stringEnd.repeat(options.repeatTimes);

  let stringEndSlice = stringEnd.slice(0, stringEnd.length - options.separator.length);

  return stringEndSlice;
}

module.exports = {
  repeater
};
