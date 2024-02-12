import { expect } from 'chai';
import { isOddOrEven } from "./evenOrOdd.js";

describe('isOddOrEven function', () => {
    it ('should return "even" when length of string is even', () => {
      const str = 'asda';
      expect(isOddOrEven(str)).to.equal('even');
    });
  
    it ('should return "odd" when length of string is odd', () => {
      const str = 'world';
      expect(isOddOrEven(str)).to.equal('odd');
    });
  
    it ('should return undefined for non-string input', () => {
      expect(isOddOrEven(123)).to.equal(undefined);
      expect(isOddOrEven(null)).to.equal(undefined);
      expect(isOddOrEven(undefined)).to.equal(undefined);
      expect(isOddOrEven({})).to.equal(undefined);
      expect(isOddOrEven([])).to.equal(undefined);
    });
  });