// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(x) {return x.toLowerCase()})
}

function nameToAttributes(drivers) {
  console.log(drivers.map(function (x) {return Object.assign({},{firstName: x.split(" ")[0]}, {lastName: x.split(" ")[1]})))
}
