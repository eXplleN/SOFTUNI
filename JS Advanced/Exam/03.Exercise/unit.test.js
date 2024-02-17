import { expect } from 'chai';
import { planYourTrip } from './planYourTrip.js';

describe("planYourTrip", function () {

    describe("choosingDestination", () => {
        it('checks the year', () => {
            expect(() => { planYourTrip.choosingDestination("Ski Resort", "Winter", 2023) }).to.throw("Invalid Year!");
            expect(() => { planYourTrip.choosingDestination("Ski Resort", "Winter", 2025) }).to.throw("Invalid Year!");
        });

        it('checks the destination', () => {
            expect(() => { planYourTrip.choosingDestination("Beach", "Winter", 2024) }).to.throw("This destination is not what you are looking for.");
            expect(() => { planYourTrip.choosingDestination("Town", "Winter", 2024) }).to.throw("This destination is not what you are looking for.");
        });

        it('checks the season', () => {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });

    });

    describe("exploreOptions", () => {
        it('should remove the activity at the specified index and return the modified activities as a string', () => {
            const activities = ["Skiing", "Snowboarding", "Winter Hiking", "Ice Skating"];
            const activityIndex = 1;
            expect(planYourTrip.exploreOptions(activities, activityIndex)).to.equal("Skiing, Winter Hiking, Ice Skating");
        });

        it('should throw an error if activities parameter is not an array', () => {
            const activities = "Skiing";
            const activityIndex = 1;
            expect(() => planYourTrip.exploreOptions(activities, activityIndex)).to.throw('Invalid Information!');
        });

        it('should throw an error if activityIndex is not a number', () => {
            const activities = ["Skiing", "Snowboarding", "Winter Hiking", "Ice Skating"];
            const activityIndex = "1";
            expect(() => planYourTrip.exploreOptions(activities, activityIndex)).to.throw('Invalid Information!');
        });

        it('should throw an error if activityIndex is not an integer number', () => {
            const activities = ["Skiing", "Snowboarding", "Winter Hiking", "Ice Skating"];
            const activityIndex = 1.5;
            expect(() => planYourTrip.exploreOptions(activities, activityIndex)).to.throw('Invalid Information!');
        });

        it('should throw an error if activityIndex is outside the limits of the array', () => {
            const activities = ["Skiing", "Snowboarding", "Winter Hiking", "Ice Skating"];
            const activityIndex = 5;
            expect(() => planYourTrip.exploreOptions(activities, activityIndex)).to.throw('Invalid Information!');
        });
    });

    describe("estimateExpenses", () => {
        it('should calculate the cost of the travel and return a budget-friendly message if total cost is less than or equal to $500', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = 4;
            expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
        });

        it('should calculate the cost of the travel and return a budget-friendly message if total cost is less than or equal to $500', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = 4.50;
            expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal("The trip is budget-friendly, estimated cost is $450.00.");
        });

        it('should calculate the cost of the travel and return a budget-friendly message if total cost is less than or equal to $500', () => {
            const distanceInKilometers = 100.50;
            const fuelCostPerLiter = 4;
            expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal("The trip is budget-friendly, estimated cost is $402.00.");
        });

        it('should calculate the cost of the travel and return a plan accordingly message if total cost is greater than $500', () => {
            const distanceInKilometers = 600;
            const fuelCostPerLiter = 4;
            expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal("The estimated cost for the trip is $2400.00, plan accordingly.");
        });

        it('should calculate the cost of the travel and return a plan accordingly message if total cost is greater than $500', () => {
            const distanceInKilometers = 600.50;
            const fuelCostPerLiter = 4;
            expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal("The estimated cost for the trip is $2402.00, plan accordingly.");
        });

        it('should calculate the cost of the travel and return a plan accordingly message if total cost is greater than $500', () => {
            const distanceInKilometers = 600;
            const fuelCostPerLiter = 4.50;
            expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal("The estimated cost for the trip is $2700.00, plan accordingly.");
        });

        it('should throw an error if distanceInKilometers is not a number', () => {
            const distanceInKilometers = '100';
            const fuelCostPerLiter = 4;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is not a number', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = '4';
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if distanceInKilometers is zero', () => {
            const distanceInKilometers = 0;
            const fuelCostPerLiter = 4;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is zero', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = 0;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if distanceInKilometers is negative', () => {
            const distanceInKilometers = -100;
            const fuelCostPerLiter = 4;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = -4;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = -4.50;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = 100.50;
            const fuelCostPerLiter = -4;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = - 0.50;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = -4;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = "";
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = 100;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = -100;
            const fuelCostPerLiter = -4;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = 100;
            const fuelCostPerLiter = [4];
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });

        it('should throw an error if fuelCostPerLiter is negative', () => {
            const distanceInKilometers = [100];
            const fuelCostPerLiter = 4;
            expect(() => planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.throw('Invalid Information!');
        });
    });
})