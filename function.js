const sortNumbers = (num) => {
    num.sort()
}

const sortCars = (car) => {
    car.sort()
}

module.exports = {
    sortNumbers,
    sortCars
}

// hier hätte man auch nur mit einer Sortierfunktion arbeiten können z.B. const sortArrays = (sort) usw..

// falls nur eine Funktion in dieser Module,
// dann reicht in der main.js 
// -> myFunction(myData.arrayNumbers)
// console.log(myFunction(myData.arrayNumbers))