// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){return(arr.slice(0, 2))};
const returnLastTwoDrivers = function(arr){return (arr.slice(-2))};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multi){
    return function (fare){return (fare * multi)};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, func) {
    return func(arr)
};