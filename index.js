// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(x) {return x.toLowerCase()})
}

function nameToAttributes(drivers) {
  const newArray = []
  for (const element of drivers) {
    newArray.push(Object.assign({},{firstName: element.split(" ")[0]},{lastName: element.split(" ")[1]})
  }
  console.log( newArray )
}
