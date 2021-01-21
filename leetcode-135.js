var candy = function (ratings) {
  let m = ratings.length
  if (m < 2) {
    return m
  }
  let dp = new Array(m).fill(1)
  for (let i = 0; i < m - 1; i++) {
    if (ratings[i] < ratings[i + 1]) {
      dp[i + 1] = dp[i] + 1
    }
  }
  for (let i = m - 1; i >= 1; i--) {
    if (ratings[i] < ratings[i - 1]) {
      dp[i - 1] = Math.max(dp[i - 1], dp[i] + 1)
    }
  }
  return dp.reduce((prev, item) => (prev += item), 0)
}

console.log(candy([1, 2, 87, 87, 87, 2, 1]))
