
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
let result = drivers.filter(driversName => driversName.toUpperCase() === string.toUpperCase());
    return result;
}


function fuzzyMatch(drivers, string){
let result = drivers.filter(driversName => driversName.startsWith(string));
return result;
}


function matchName(drivers, string){
    let result = drivers.filter(driver => driver.name === string);
return result;
}