'use strict'

// function fruitProcessor(apple, orange) {
//     console.log(apple, orange)
//     const juice = `Juice with ${apple} apples and ${orange} oranges `
//     return juice
//
// }
//
// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)
// const appleOrangeJuice =fruitProcessor(4,2)
// console.log(appleOrangeJuice)

//Function declaration
function ageCalc1(birthYear) {
    return 2022 - birthYear
}

const age1 = ageCalc1(1977)

//Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear
}
const age2 = calcAge2(1977)

console.log(age1, age2)
