import { expect } from 'chai';
import { lookupChar } from './charLookUp.js';

describe ('lookupChar function', () => {
    it('should return undefined if first parameter is not a string', () => {
        expect(lookupChar(123, 0)).to.equal(undefined);
        expect(lookupChar(true, 0)).to.equal(undefined);
        expect(lookupChar([], 0)).to.equal(undefined);
        expect(lookupChar({}, 0)).to.equal(undefined);
        expect(lookupChar(null, 0)).to.equal(undefined);
        expect(lookupChar(undefined, 0)).to.equal(undefined);
      });
    
      it('should return undefined if second parameter is not a number', () => {
        expect(lookupChar('hello', '0')).to.equal(undefined);
        expect(lookupChar('hello', true)).to.equal(undefined);
        expect(lookupChar('hello', [])).to.equal(undefined);
        expect(lookupChar('hello', {})).to.equal(undefined);
        expect(lookupChar('hello', null)).to.equal(undefined);
        expect(lookupChar('hello', undefined)).to.equal(undefined);
        expect(lookupChar('hello', 1.1)).to.equal(undefined);
      });

      it('should return "Incorrect index" if index is out of range', () => {
        expect(lookupChar('hello', 5)).to.equal('Incorrect index');
        expect(lookupChar('hello', -1)).to.equal('Incorrect index');
        expect(lookupChar('hello', 10)).to.equal('Incorrect index');
      });

      it ('should return the character of the given index if bouth parameters are correct', () => {
        expect(lookupChar("hello", 3)).to.equal("l");
      })
})