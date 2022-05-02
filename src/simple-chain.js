const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainItems: [],

  getLength() {
    return this.chainItems.length;
  },

  addLink(value) {
    if (value === undefined) this.chainItems.push(`( )`);
    this.chainItems.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chainItems.length) {
      this.chainItems = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainItems.splice(position-1, 1);
    return this;    
  },

  reverseChain() {
    this.chainItems.reverse();
    return this;
  },

  finishChain() {
    let resultChainItems = this.chainItems.join('~~');
    this.chainItems = [];
    return resultChainItems;
  }
};

module.exports = {
  chainMaker
};
