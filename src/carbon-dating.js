const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let decayRate = 0;
  if (typeof sampleActivity == 'string' && parseFloat(sampleActivity)) decayRate = parseFloat(sampleActivity);
  else return false;

  if (decayRate >= 15 || decayRate <= 0) return false;
  const constanta = 0.693;

  let age = (Math.log(MODERN_ACTIVITY / decayRate)) / (constanta / HALF_LIFE_PERIOD);
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
