// var countSubstrings = function (s) {
//   let m = s.length
//   if (m === 0) {
//     return 0
//   }
//   let dp = new Array(m)
//   for (let i = 0; i < m; i++) {
//     dp[i] = new Array(m).fill(0)
//     dp[i][i] = 1
//   }
//   let count = m
//   for (let i = m - 2; i >= 0; i--) {
//     for (let j = i + 1; j < m; j++) {
//       if (s[i] === s[j]) {
//         if (j - i === 1) {
//           dp[i][j] = 1
//         } else {
//           dp[i][j] = dp[i + 1][j - 1]
//         }
//       }
//       count += dp[i][j]
//     }
//   }
//   console.log(dp)
//   return count
// }

var countSubstrings = function (s) {
  const entendSubString = function (l, r) {
    let count = 0
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
      count++
    }
    return count
  }
  let res = 0
  for (let i = 0; i < s.length; i++) {
    res += entendSubString(i, i)
    res += entendSubString(i, i + 1)
  }
  return res
}

console.log(countSubstrings('addda'))
console.log(countSubstrings('fdsklf'))
