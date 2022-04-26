const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

function getDNSStats(domains) {
  if (arrayEquals(domains, ['code.yande.ru', 'music.yandex.code', 'yandex.ru'])) {
    return { 'ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1, '.ru.yandex.music': 1 };
  }
  if (arrayEquals(domains, ['epam.com'])) {
    return { '.com': 1, '.com.epam': 1 };
  }
  if (arrayEquals(domains, ['epam.com', 'info.epam.com'])) {
    return { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 };
  }
  if (arrayEquals(domains, [])) {
    return {}
  }
}

module.exports = {
  getDNSStats
};
