import { expect } from 'chai';
import { mathEnforcer } from './mathEnforcer.js';

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should add 5 to a number', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(-15)).to.equal(-10);
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(-0.5)).to.be.closeTo(4.5, 0.1);
        });

        it('should return undefined if parameter is not a number', () => {
            expect(mathEnforcer.addFive('hello')).to.be.undefined;
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
    });

    describe('subtractTen', () => {
        it('should subtract 10 from a number', () => {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(-15)).to.equal(-25);
            expect(mathEnforcer.subtractTen(-0.5)).to.be.closeTo(-10.5, 0.1);
        });

        it('should return undefined if parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('hello')).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
    });

    describe('sum', () => {
        it('should return the sum of two numbers', () => {
            expect(mathEnforcer.sum(5, 10)).to.equal(15);
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(-5, 10)).to.equal(5);
            expect(mathEnforcer.sum(5, -10)).to.equal(-5);
        });

        it('should return undefined if any parameter is not a number', () => {
            expect(mathEnforcer.sum('hello', 5)).to.be.undefined;
            expect(mathEnforcer.sum(true, 5)).to.be.undefined;
            expect(mathEnforcer.sum(null, 5)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 5)).to.be.undefined;
            expect(mathEnforcer.sum({}, 5)).to.be.undefined;
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, 'hello')).to.be.undefined;
            expect(mathEnforcer.sum(5, true)).to.be.undefined;
            expect(mathEnforcer.sum(5, null)).to.be.undefined;
            expect(mathEnforcer.sum(5, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(5, {})).to.be.undefined;
            expect(mathEnforcer.sum(5, [])).to.be.undefined;
            expect(mathEnforcer.sum(5)).to.be.undefined;
        });

        it('should return the sum of two floating-point numbers within a tolerance', () => {
            expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
        });
    });
})