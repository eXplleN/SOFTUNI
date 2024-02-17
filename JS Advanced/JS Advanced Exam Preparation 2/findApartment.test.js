import { expect } from 'chai'
import { findNewApartment } from './findApartment.js';

describe ("findNewApartment", () => {
    describe ("isGoodLocation", () => {

        it ("check the input", () => {
           expect(() => {findNewApartment.isGoodLocation([],true)}).to.throw("Invalid input!");
           expect(() => {findNewApartment.isGoodLocation([], false)}).to.throw("Invalid input!");
           expect(() => {findNewApartment.isGoodLocation(5, false)}).to.throw("Invalid input!");
           expect(() => {findNewApartment.isGoodLocation(5, true)}).to.throw("Invalid input!");
           expect(() => {findNewApartment.isGoodLocation("Sofia", 5)}).to.throw("Invalid input!");
           expect(() => {findNewApartment.isGoodLocation("Sofia", "5")}).to.throw("Invalid input!");
           expect(() => {findNewApartment.isGoodLocation("Sofia", [])}).to.throw("Invalid input!");
           expect(() => {findNewApartment.isGoodLocation("Sofia", {})}).to.throw("Invalid input!");
           expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
           expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.");
           expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.");
           expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!");
           expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
           expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!");
           expect(findNewApartment.isGoodLocation("Kyustendil", true)).to.equal("This location is not suitable for you.");
           expect(findNewApartment.isGoodLocation("Kyustendil", false)).to.equal("This location is not suitable for you.");
           expect(findNewApartment.isGoodLocation("Burgas", false)).to.equal("This location is not suitable for you.");
           expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal("This location is not suitable for you.");

        })
    })

    describe("isLargeEnough", () => {

        it ("check the input", () => {
            expect(() => {findNewApartment.isLargeEnough([], 1)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isLargeEnough(1, 1)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isLargeEnough("some input", 1)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isLargeEnough([20,10,30,40], "1")}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isLargeEnough(["20","10","30","40"], "1")}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isLargeEnough({}, 1)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isLargeEnough({}, "1")}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isLargeEnough([20,10,30,40], [])}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isLargeEnough([20,10,30,40], {})}).to.throw("Invalid input!");
            expect(findNewApartment.isLargeEnough([20,10,30,40], 10)).to.equal("20, 10, 30, 40");
            expect(findNewApartment.isLargeEnough([20,10,30,40], 50)).to.equal("");
            expect(findNewApartment.isLargeEnough([20,10,30,40], 20)).to.equal("20, 30, 40");
            expect(findNewApartment.isLargeEnough([20,10,30,40], 30)).to.equal("30, 40");
            expect(findNewApartment.isLargeEnough([20,10,30,40], 40)).to.equal("40");
        })
    })

    describe("isItAfforable", () => {

        it ("check the input", () => {
            expect(() => {findNewApartment.isItAffordable(-1, -1)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isItAffordable(1, -1)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isItAffordable(-1, 1)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isItAffordable(1, 0)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isItAffordable(0, 1)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isItAffordable(0, 0)}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isItAffordable([], "input")}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isItAffordable("input", "input")}).to.throw("Invalid input!");
            expect(() => {findNewApartment.isItAffordable({}, [])}).to.throw("Invalid input!");
            expect(findNewApartment.isItAffordable(1, 2)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(1, 1)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(2, 1)).to.equal("You don't have enough money for this house!");
        })
    })
});