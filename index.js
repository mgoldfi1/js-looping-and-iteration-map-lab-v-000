// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(x) {return x.toLowerCase()})
}

function nameToAttributes(drivers) {
  const newArray = []
  for (const driver of drivers) {
    newArray.push(Object.assign({},{firstName: driver.split(" ")[0]},{lastName: driver.split(" ")[1]}
  }
  return newArray
}
