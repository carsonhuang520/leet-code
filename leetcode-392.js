// var isSubsequence = function (s, t) {
//   let m = s.length
//   let n = t.length
//   let dp = new Array(m + 1)
//   for (let i = 0; i <= m; i++) {
//     dp[i] = new Array(n + 1).fill(false)
//   }
//   for (let i = 0; i <= n; i++) {
//     dp[0][i] = true
//   }
//   for(let i = 1; i <=m; i++) {
//     for(let j = 1; j <=n; j++) {
//       if(s[i - 1] === t[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1]
//       } else {
//         dp[i][j] = dp[i][j - 1]
//       }
//     }
//   }
//   console.log(dp)
//   return dp[m][n]
// }

// 状态压缩
var isSubsequence = function (s, t) {
  let m = s.length
  let n = t.length
  let dp = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    dp[i] = true
  }
  for (let i = 1; i <= m; i++) {
    let temp = dp[0]
    dp[0] = false
    for (let j = 1; j <= n; j++) {
      let prev = temp
      temp = dp[j]
      if (s[i - 1] === t[j - 1]) {
        dp[j] = prev
      } else {
        dp[j] = dp[j - 1]
      }
    }
  }
  return dp[n]
}

console.log(isSubsequence("abc", "ahbgdc"))