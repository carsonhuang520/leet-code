/**
 *
 * @param m int整型
 * @param n int整型
 * @return int整型
 */
function uniquePaths(m, n) {
  let dp = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j - 1] + dp[j]
    }
  }
  return dp[n - 1]
}
console.log(uniquePaths(2, 1))
module.exports = {
  uniquePaths: uniquePaths,
}
