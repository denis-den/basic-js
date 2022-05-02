const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let castAmt = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let i = 0; i < matrix[row].length; i++) {
      if (matrix[row][i] === '^^') {
        castAmt++;
      }
    }
  }

  return castAmt;
}

module.exports = {
  countCats
};
