// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(x) {return x.toLowerCase()})
}

function nameToAttributes(drivers) {
let newArray = []
 for (const name of drivers) {
    newArray.push(Object.assign({},{firstName: name.split(" ")[0], lastName: name.split(" ")[1]}))
 }
 return newArray
}
