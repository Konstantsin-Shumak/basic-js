const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrChainMaker: [],

  getLength() {
    return this.arrChainMaker.length;
  },

  addLink(value) {

    if (typeof value === "undefined") {
      this.arrChainMaker.push("( ( ) )");
      return this;
    }
    this.arrChainMaker.push("( " + value + " )");
    return this;
  },

  removeLink(position) {

    if ((position % 1 === 0 && (position > 0 && position < this.getLength()))) {
      this.arrChainMaker.splice(position - 1, 1);
      return this;
    } else {
      this.arrChainMaker = [];
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.arrChainMaker.reverse();
    return this;
  },

  finishChain() {
    let stringChainMaker = this.arrChainMaker.join("~~");
    this.arrChainMaker = [];
    return stringChainMaker;
  }
};

module.exports = {
  chainMaker
};
