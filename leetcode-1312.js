// var minInsertions = function (s) {
//   let m = s.length
//   if (m === 1) {
//     return 0
//   }
//   let dp = new Array(m)
//   for (let i = 0; i < m; i++) {
//     dp[i] = new Array(m).fill(0)
//   }
//   for (let i = m - 2; i >= 0; i--) {
//     for (let j = i + 1; j < m; j++) {
//       if (s[i] === s[j]) {
//         dp[i][j] = dp[i + 1][j - 1]
//       } else {
//         dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1
//       }
//     }
//   }
//   console.log(dp)
//   return dp[0][m - 1]
// }

var minInsertions = function (s) {
  let m = s.length
  if (m === 1) {
    return 0
  }
  let dp = new Array(m).fill(0)
  for (let i = m - 2; i >= 0; i--) {
    let temp = dp[0]
    for (let j = i + 1; j < m; j++) {
      let prev = temp
      temp = dp[j]
      if (s[i] === s[j]) {
        dp[j] = prev
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + 1
      }
    }
  }
  console.log(dp)
  return dp[m - 1]
}

console.log(minInsertions("mbadm"))