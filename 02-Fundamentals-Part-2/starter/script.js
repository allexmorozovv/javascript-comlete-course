'use strict'

function fruitProcessor(apple, orange) {
    console.log(apple, orange)
    const juice = `Juice with ${apple} apples and ${orange} oranges `
    return juice

}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)
const appleOrangeJuice =fruitProcessor(4,2)
console.log(appleOrangeJuice)

