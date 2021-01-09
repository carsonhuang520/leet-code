// var longestPalindromeSubseq = function (s) {
//   let n = s.length
//   if (n === 0) {
//     return 0
//   }
//   let dp = new Array(n)
//   for (let i = 0; i < n; i++) {
//     dp[i] = new Array(n).fill(0)
//   }
//   for (let i = 0; i < n; i++) {
//     dp[i][i] = 1
//   }
//   for (let i = n - 2; i >= 0; i--) {
//     for (let j = i + 1; j < n; j++) {
//       if (s[i] === s[j]) {
//         dp[i][j] = dp[i + 1][j - 1] + 2
//       } else {
//         dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
//       }
//     }
//   }
//   return dp[0][n - 1]
// }

var longestPalindromeSubseq = function (s) {
  let n = s.length
  if (n === 0) {
    return 0
  }
  let dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0)
  }
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (s[j] === s[j + i]) {
        dp[j][j + i] = dp[j + 1][j + i - 1] + 2
      } else {
        dp[j][j + i] = Math.max(dp[j + 1][j + i], dp[j][j + i - 1])
      }
    }
  }
  console.log(dp)
  // return dp[0][n - 1]
}

console.log(longestPalindromeSubseq('bbbab'))
