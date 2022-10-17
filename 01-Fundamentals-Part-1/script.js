// const mWeights = 78
// const aWeights = 90
// const mHeight = 1.69
// const aHeight = 1.81
// const bmi = aWeights / aHeight ** 2
// console.log(bmi)
// console.log('hello')
// const age = 10
// const isOldEnough = age >= 18
// if (isOldEnough) {
//   console.log('You are cool!!!')
// } else {
//   const leftYears = 18 - age
//   console.log(`You are very young. Wait ${leftYears} years!!!`)
// }
// const alexBMI = 26.3
// const bobBMI = 23.2
// const trueBMI = alexBMI > bobBMI
// if (trueBMI) {
//   console.log('alex cool')
// } else {
//   console.log('bob cool')
// }

// const money = 1

// if (money) {
//   console.log('true')
// } else {
//   console.log('false')
// }

const bill = 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(tip)
const billValue = bill + tip
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${billValue}`
)
