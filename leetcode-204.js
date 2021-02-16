// var countPrimes = function (n) {
//   if (n <= 2) {
//     return 0
//   }
//   let isPrime = new Array(n).fill(true)
//   let count = n - 2
//   for (let i = 2; i <= n; i++) {
//     if (isPrime[i]) {
//       for (let j = 2 * i; j <= n; j += i) {
//         if (isPrime[j]) {
//           isPrime[j] = false
//           count--
//         }
//       }
//     }
//   }
//   return count
// }

var countPrimes = function (n) {
  if (n <= 2) {
    return 0
  }
  let isPrime = new Array(n).fill(true)
  let i = 3
  let count = Math.floor(n / 2)
  let sqrtn = Math.sqrt(n)
  while (i <= sqrtn) {
    for (let j = i * i; j < n; j += 2 * i) {
      if (isPrime[j]) {
        count--
        isPrime[j] = false
      }
    }
    do {
      i += 2
    } while (i <= sqrtn && !isPrime[i])
  }
  console.log(isPrime)
  return count
}

console.log(countPrimes(20))
