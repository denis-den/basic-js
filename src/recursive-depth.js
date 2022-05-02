const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let result = 1;
    let current = 0;

    for (let item of arr) {
      if (Array.isArray(item) === true) {
        current = current + this.calculateDepth(item) + 1;
        if (current > result) {
          result = current;
        }
        current = 0;
      }
    }
    return result;

  }
}

module.exports = {
  DepthCalculator
};
