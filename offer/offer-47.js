/**
 * @param {number[][]} grid
 * @return {number}
 */
// var maxValue = function (grid) {
//   if (grid === null || grid.length === 0) {
//     return 0
//   }
//   let m = grid.length
//   let n = grid[0].length
//   let dp = new Array(m)
//   for (let i = 0; i < m; i++) {
//     dp[i] = new Array(n).fill(0)
//   }
//   dp[0][0] = grid[0][0]
//   for (let i = 1; i < m; i++) {
//     dp[i][0] = grid[i][0] + dp[i - 1][0]
//   }
//   for (let i = 1; i < n; i++) {
//     dp[0][i] = grid[0][i] + dp[0][i - 1]
//   }
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
//     }
//   }
//   return dp[m - 1][n - 1]
// }

var maxValue = function (grid) {
  if (grid === null || grid.length === 0) {
    return 0
  }
  let m = grid.length
  let n = grid[0].length
  let dp = new Array(n).fill(0)
  dp[0] = grid[0][0]
  for (let i = 1; i < n; i++) {
    dp[i] = grid[0][i] + dp[i - 1]
  }
  for (let i = 1; i < m; i++) {
    dp[0] = grid[i][0] + dp[0]
    for (let j = 1; j < n; j++) {
      dp[j] = Math.max(dp[j - 1], dp[j]) + grid[i][j]
    }
  }
  return dp[n - 1]
}

console.log(
  maxValue([
    [1, 2, 5],
    [3, 2, 1],
  ])
)
