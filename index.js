// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo' ]

const returnFirstTwoDrivers = function(){
    return (['Antonia', 'Nuru'])
}
const returnLatTwoDrivers = function anonymousFunction([]){
    return (['Amari', 'Mo'])
}

const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(anInteger){
    return function(fare){
        return fare*anInteger
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
    return driversToReturn(arrayOfDrivers)
}