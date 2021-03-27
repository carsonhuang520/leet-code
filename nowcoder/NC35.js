/**
 * min edit cost
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @param ic int整型 insert cost
 * @param dc int整型 delete cost
 * @param rc int整型 replace cost
 * @return int整型
 */
function minEditCost(str1, str2, ic, dc, rc) {
  let m = str1.length
  let n = str2.length
  let dp = new Array(m + 1)
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  dp[0][0] = 0
  for (let i = 1; i < m + 1; i++) {
    dp[i][0] = dc + dp[i - 1][0]
  }
  for (let i = 1; i < n + 1; i++) {
    dp[0][i] = ic + dp[0][i - 1]
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + dc,
          dp[i - 1][j - 1] + rc,
          dp[i][j - 1] + ic
        )
      }
    }
  }
  console.log(dp)
  return dp[m][n]
}
console.log(minEditCost('abc', 'adc', 5, 3, 2))
module.exports = {
  minEditCost: minEditCost,
}
