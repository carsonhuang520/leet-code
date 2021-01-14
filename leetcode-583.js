// var minDistance = function (word1, word2) {
//   let m = word1.length
//   let n = word2.length
//   let dp = new Array(m + 1)
//   for (let i = 0; i <= m; i++) {
//     dp[i] = new Array(n + 1).fill(0)
//   }
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (word1[i - 1] === word2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
//       }
//     }
//   }
//   return m + n - 2 * dp[m][n]
// }

var minDistance = function (word1, word2) {
  let m = word1.length
  let n = word2.length
  let dp = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0)
    dp[i][0] = i
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = i
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }
  console.log(dp)
  return dp[m][n]
}

console.log(minDistance("sea", "eat"))

// 状态压缩
var minDistance2 = function (word1, word2) {
  let m = word1.length
  let n = word2.length
  let dp = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    dp[i] = i
  }
  console.log(dp)
  for (let i = 1; i <= m; i++) {
    let temp = dp[0]
    dp[0] = i
    for (let j = 1; j <= n; j++) {
      let prev = temp
      temp = dp[j]
      if (word1[i - 1] === word2[j - 1]) {
        dp[j] = prev
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + 1
      }
    }
    console.log(dp)
  }
  return dp[n]
}

console.log(minDistance2("sea", "eat"))