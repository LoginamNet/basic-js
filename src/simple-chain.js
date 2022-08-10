const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (!(position instanceof Number) || position < 1 || position > this.chain.length - 1) {

      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);

    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let result = ``;
    
    if (this.chain.length > 0) {
      result = this.chain.join(`~~`);
    }

    this.chain = [];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
