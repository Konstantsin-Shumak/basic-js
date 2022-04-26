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
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  try {
    let m = date.getTime();
  }
  catch (err) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();
  let res = '';
  switch (month) {
    case 11:
    case 0:
    case 1:
      res = 'winter';
      break;

    case 2:
    case 3:
    case 4:
      res = 'spring';
      break;

    case 5:
    case 6:
    case 7:
      res = 'summer';
      break;

    case 8:
    case 9:
    case 10:
      res = 'autumn';
      break;
  }

  return res;
}

module.exports = {
  getSeason
};
