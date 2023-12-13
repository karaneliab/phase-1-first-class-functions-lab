// // Code your solution in this file!
// 
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};
const allDriversFirst = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(allDriversFirst);
console.log(firstTwoDrivers);

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
};
const allDriversLast = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const lastTwoDrivers = returnLastTwoDrivers(allDriversLast);
    console.log(lastTwoDrivers);

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    const allDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const firsttwoDrivers = selectingDrivers[0](allDrivers);
    console.log(firsttwoDrivers);
    
    const lasttwoDrivers = selectingDrivers[1](allDrivers);
    console.log(lasttwoDrivers);

const createFareMultiplier = function(multiplier){
    return function (fare) {
        return fare*multiplier
    }
};
const fareQuintupler = createFareMultiplier(5);
const initialFare = 5;
const quintupledFare = fareQuintupler(initialFare);
console.log(quintupledFare);

const fareDoubler = createFareMultiplier(2);
const initialFareD = 10;
const doubledFare = fareDoubler(initialFareD);
console.log(doubledFare);

const fareTripler = createFareMultiplier(3);
const initialFareT = 12;
const tripledFare = fareTripler(initialFareT);
console.log(tripledFare);

const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
};