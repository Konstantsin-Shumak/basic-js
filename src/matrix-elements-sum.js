const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.map((line, j) => line.map((el, i) => (matrix.slice(0, j).every(l => l[i] !== 0)) ? el : 0)).reduce((a, b) => a + b.reduce((c, d) => c + d), 0);
}

module.exports = {
  getMatrixElementsSum
};
