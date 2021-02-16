// var trailingZeroes = function (n) {
//   if (n === 0) {
//     return 0
//   }
//   let fives = 0
//   for (let i = 5; i <= n; i += 5) {
//     let temp = 5
//     while (i % temp === 0) {
//       fives += 1
//       temp *= 5
//     }
//   }
//   return fives
// }

var trailingZeroes = function (n) {
  return n === 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5))
  // if (n === 0) {
  //   return 0
  // }
  // let tens = 0
  // while (n > 0) {
  //   n = Math.floor(n / 5)
  //   tens += n
  // }
  // return tens
}

console.log(trailingZeroes(16))
