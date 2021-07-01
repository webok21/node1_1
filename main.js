const myData = require('./data')
const myFunction = require('./function')


// console.log(myFunction)
// console.log(myData)

// console.log(myData.arrayCars)
// console.log(myData.arrayNumbers)

myFunction.sortNumbers(myData.arrayNumbers)
myFunction.sortCars(myData.arrayCars)

console.log(myData.arrayCars)
console.log(myData.arrayNumbers)
