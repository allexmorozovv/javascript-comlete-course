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

//Function declaration -------------------------------------------------------------------------
// function ageCalc1(birthYear) {
//     return 2022 - birthYear
// }
//
// const age1 = ageCalc1(1977)
//


// //Function expression --------------------------------------------------------------------
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear
// }
// const age2 = calcAge2(1977)
//
// console.log(age1, age2)

// //Arrow function -------------------------------------------------------------------------------
// const calcAge3 = birthDay => 2022-birthDay
// const age3=calcAge3(1977)
//
// console.log(age3)
// console.log(calcAge3(1977))
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear
//     const retirement = 65 - age
//     return ` ${firstName} retires in ${retirement}`
// }
// console.log(yearsUntilRetirement(1977,'Alex'))
// console.log(yearsUntilRetirement(1980,'Bob'))

// const cutPieces = function (fruit) {
//     return fruit*4
// }
//
// function fruitProcessor(apple, orange) {
//     const applePieces = cutPieces(apple)
//     const orangePieces = cutPieces(orange)
//
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges `;
//     return juice
//
// }
//
// console.log(fruitProcessor(2,3))
// const calcAge = function (birthYear) {
//     return 2022 - birthYear
// }
//
// const yearsUntilRetirement = function (birthYear, firstName) {
//
//     const age = calcAge(birthYear)
//     const retirement = 65 - age
//     if (retirement > 0) {
//         console.log(` ${firstName} retires in ${retirement} year`)
//         return retirement
//     } else {
//         console.log(` ${firstName} already retired`)
//         return -1
//     }
// }
// console.log(yearsUntilRetirement(1977, 'Alex'))
// console.log(yearsUntilRetirement(1940, 'Bob'))

// const calcAverage = (a, b, c) => (a + b + c) / 3
// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)
// console.log(scoreDolphins, scoreKoalas)
//
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas}vs ${avgDolphins}`)
//     } else {
//         console.log(`No team wins...`)
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)

/*
const friend1 = 'Alex'
const friend2 = 'Bob'
const friend3 = 'Tom'

const friends = ['Alex', 'Bob', 'Tom']
console.log(friends)

const years = new Array(1991, 1992, 2001, 2000)

friends[2] = 'John'

const firstName = 'Alex'
const alex = [firstName, 'Frost', 2022 - 1977, friends]
console.log(alex)
console.log(alex.length)
const calcAge = function (birthYear) {
    return 2022 - birthYear
}
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)
const ages = [age1, age2, age3]
console.log(ages)
*/

/*
const friends = ['Alex', 'Bob', 'Tom']
friends.push('Elen')
console.log(friends)
friends.sort()
console.log(friends)
friends.unshift('Jay')
console.log(friends)

friends.pop()
const popped = friends.pop()
console.log(popped)
console.log(friends)

friends.shift()
console.log(friends)
console.log(friends.indexOf('Alex'))
console.log(friends.includes('Alex'))
console.log(friends.includes('Elen'))
*/

/*const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = bills.concat(tips)
console.log(bills, tips, totals)*/

/*const alexArray = [
    'Alex',
    'Frost',
    2022 - 1977,
    'student',
    ['Tom', 'Bob', 'John']
]*/

// const alex = {
//     firstName: 'Alex',
//     lastName: 'Frost',
//     age: 2022 - 1977,
//     job: 'student',
//     friends: ['Tom', 'Bob', 'John']
// }
// console.log(alex)
// console.log(alex.lastName)
// console.log(alex['lastName'])
//
// // const interestedIn = prompt('What do you want to now about Alex? Chose between firstName, lastName, age, job and friends')
//
// // console.log(alex[interestedIn])
// // alex[interestedIn] ? console.log(alex[interestedIn]) : console.log('Wrong request! Chose between firstName, lastName, age, job and friends')
//
// alex.location = 'Earth'
// alex['web'] = 'google.com'
// console.log(alex)
//
// // Alex has 3 friends and his best friend is called Tom
// console.log(`${alex.firstName} has ${alex.friends.length} friends and his best friend is called ${alex.friends[0]}`)



