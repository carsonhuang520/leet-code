// var minimumTotal = function (triangle) {
//   let m = triangle.length
//   let dp = new Array(m)
//   for (let i = 0; i < m; i++) {
//     dp[i] = new Array(i + 1).fill(Number.POSITIVE_INFINITY)
//   }
//   dp[0][0] = triangle[0][0]
//   for (let i = 1; i < m; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       if (j - 1 === -1) {
//         dp[i][j] = dp[i - 1][j] + triangle[i][j]
//         continue
//       }
//       if (j === i) {
//         dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
//         continue
//       }
//       dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
//     }
//   }
//   console.log(dp)
//   return Math.min(...dp[m - 1])
// }

var minimumTotal2 = function (triangle) {
  let m = triangle.length
  let dp = new Array(m).fill(Number.POSITIVE_INFINITY)
  dp[0] = triangle[0][0]
  for (let i = 1; i < m; i++) {
    let temp = dp[0]
    for (let j = 0; j < i + 1; j++) {
      let pre = temp
      temp = dp[j]
      if (j === 0) {
        dp[j] = dp[j] + triangle[i][j]
        continue
      }
      if (j === i) {
        dp[j] = pre + triangle[i][j]
        continue
      }
      dp[j] = Math.min(pre, dp[j]) + triangle[i][j]
    }
  }
  console.log(dp)
  return Math.min(...dp)
}

console.log(minimumTotal2([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
