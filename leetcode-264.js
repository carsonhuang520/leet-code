// var nthUglyNumber = function (n) {
//   const helper = (n) => {
//     while (n % 2 === 0) {
//       n = n / 2
//     }
//     while (n % 3 === 0) {
//       n = n / 3
//     }
//     while (n % 5 === 0) {
//       n = n / 5
//     }
//     return n === 1
//   }
//   const dp = (n) => {
//     if (n <= 6) {
//       return n
//     }
//     let pre = dp(n - 1)
//     let res = 0
//     for (let i = pre + 1; ; i++) {
//       if (helper(i)) {
//         res = i
//         break
//       }
//     }
//     return res
//   }
//   return dp(n)
// }

var nthUglyNumber = function (n) {
  let dp = new Array(n + 1)
  let i2 = 0
  let i3 = 0
  let i5 = 0
  dp[0] = 1
  for (let i = 1; ; i++) {
    let temp = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5)
    dp[i] = temp
    if (i === n) {
      break
    }
    if (temp === dp[i2] * 2) {
      i2++
    }
    if (temp === dp[i3] * 3) {
      i3++
    }
    if (temp === dp[i5] * 5) {
      i5++
    }
  }
  return dp[n - 1]
}

console.log(nthUglyNumber(1407))