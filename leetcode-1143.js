var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length
  let n = text2.length
  if (m === 0 || n === 0) {
    return 0
  }
  let dp = new Array(m + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = 0
  }
  for (let i = 0; i < n + 1; i++) {
    dp[0][i] = 0
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  console.log(dp)
  return dp[m][n]
}

console.log(longestCommonSubsequence('abc', 'def'))
