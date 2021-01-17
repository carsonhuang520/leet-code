// var uniquePathsWithObstacles = function (obstacleGrid) {
//   let m = obstacleGrid.length
//   let n = obstacleGrid[0].length
//   let dp = new Array(m)
//   for (let i = 0; i < m; i++) {
//     dp[i] = new Array(n).fill(0)
//   }
//   for (let i = 0; i < m; i++) {
//     if (obstacleGrid[i][0] === 0) {
//       dp[i][0] = 1
//     } else {
//       break
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     if (obstacleGrid[0][i] === 0) {
//       dp[0][i] = 1
//     } else {
//       break
//     }
//   }
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       if (obstacleGrid[i][j] === 0) {
//         dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//       }
//     }
//   }
//   console.log(dp)
//   return dp[m - 1][n - 1]
// }

var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      break
    } else {
      dp[i] = 1
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        if (j !== 0) {
          dp[j] = dp[j] + dp[j - 1]
        }
      } else {
        dp[j] = 0
      }
    }
  }
  console.log(dp)
  return dp[n - 1]
}

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
)

// console.log(
//   uniquePathsWithObstacles([
//     [0, 1],
//     [0, 0],
//   ])
// )
