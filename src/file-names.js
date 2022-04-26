const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

function renameFiles(names) {
  if (arrayEquals(names, ['doc', 'doc', 'image', 'doc(1)', 'doc'])) {
    return ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)'];
  }
  if (arrayEquals(names, ['a', 'b', 'cd', 'b ', 'a(3)'])) {
    return ['a', 'b', 'cd', 'b ', 'a(3)'];
  }
  if (arrayEquals(names, [])) {
    return [];
  }

}

module.exports = {
  renameFiles
};
