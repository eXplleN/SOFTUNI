import { expect } from 'chai';
import { motorcycleRider } from './Motorcycle Rider.js';

describe("motorcycleRider", () => {
    describe("licenseRestriction", () => {
        it("check for 'AM'", () => {
            expect(motorcycleRider.licenseRestriction("AM")).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        });

        it("check for 'A1'", () => {
            expect(motorcycleRider.licenseRestriction("A1")).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        });

        it("check for 'A2'", () => {
            expect(motorcycleRider.licenseRestriction("A2")).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        });

        it("check for 'A'", () => {
            expect(motorcycleRider.licenseRestriction("A")).to.equal('No motorcycle restrictions, and the minimum age is 24.')
        });

        it("check for invalid input", () => {
            expect(() => {motorcycleRider.licenseRestriction("random")}).to.throw("Invalid Information");
        });

        it("check for invalid input", () => {
            expect(() => {motorcycleRider.licenseRestriction(5)}).to.throw("Invalid Information");
        });
    });

    describe("motorcycleShowroom", () => {

        it("check the input", () => {
            expect(() => {motorcycleRider.motorcycleShowroom("300", 600)}).to.throw("Invalid Information")
        });

        it("check the input", () => {
            expect(() => {motorcycleRider.motorcycleShowroom(["300", "400"], "fifty")}).to.throw("Invalid Information")
        });

        it("check the input", () => {
            expect(() => {motorcycleRider.motorcycleShowroom(["300", "400"], "5")}).to.throw("Invalid Information")
        });

        it("check the input", () => {
            expect(() => {motorcycleRider.motorcycleShowroom([], 600)}).to.throw("Invalid Information")
        });

        it("check the input", () => {
            expect(() => {motorcycleRider.motorcycleShowroom(["300"], -1)}).to.throw("Invalid Information")
        });

        it("check the input", () => {
            expect(() => {motorcycleRider.motorcycleShowroom(["300"], 49)}).to.throw("Invalid Information")
        });

        it("check the output", () => {
            expect(motorcycleRider.motorcycleShowroom([300, 250, 400, 550, "five", -6], 600)).to.equal("There are 4 available motorcycles matching your criteria!")
        });

        it("check the output", () => {
            expect(motorcycleRider.motorcycleShowroom([300, 20, 40, 50, "five", -6], 600)).to.equal("There are 2 available motorcycles matching your criteria!")
        });

        it("check the output", () => {
            expect(motorcycleRider.motorcycleShowroom(["300", "250", "400", "550", "fifty", "-1000"], 600)).to.equal("There are 4 available motorcycles matching your criteria!")
        });

        it("check the output", () => {
            expect(motorcycleRider.motorcycleShowroom([0], 600)).to.equal("There are 0 available motorcycles matching your criteria!")
        });

        it("check the output", () => {
            expect(motorcycleRider.motorcycleShowroom(["50"], 50)).to.equal("There are 1 available motorcycles matching your criteria!")
        });
    });

    describe("otherSpendings", () => {

        it("check the input", () => {
            expect(() => {motorcycleRider.otherSpendings("helmet",["oil filter"], true)}).to.throw("Invalid Information")
        })

        it("check the input", () => {
            expect(() => {motorcycleRider.otherSpendings(["helmet","jacked"],"oil filter", true)}).to.throw("Invalid Information")
        })

        it("check the input", () => {
            expect(() => {motorcycleRider.otherSpendings(["helmet","jacked"],"oil, filter", true)}).to.throw("Invalid Information")
        })

        it("check the output", () => {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"],[], true)).to.equal("You spend $450.00 for equipment and consumables with 10% discount!")
        })

        it("check the output", () => {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"],[], false)).to.equal("You spend $500.00 for equipment and consumables!")
        })

        it("check the output", () => {
            expect(motorcycleRider.otherSpendings([],["engine oil", "oil filter"], true)).to.equal("You spend $90.00 for equipment and consumables with 10% discount!")
        })

        it("check the output", () => {
            expect(motorcycleRider.otherSpendings([],["engine oil", "oil filter"], false)).to.equal("You spend $100.00 for equipment and consumables!")
        })
        
        it("check the output", () => {
            expect(motorcycleRider.otherSpendings(["jacked"],["engine oil"], true)).to.equal("You spend $243.00 for equipment and consumables with 10% discount!")
        })
    })
});