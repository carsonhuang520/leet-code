var maxEnvelopes = function (envelopes) {
  let m = envelopes.length
  if (m === 0) {
    return 0
  }
  envelopes.sort((a, b) => b[0] - a[0])
  let dp = new Array(m).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][0] < envelopes[j][0] && envelopes[i][1] < envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  console.log(dp)
  return Math.max(...dp)
}

console.log(maxEnvelopes([[1, 2], [2, 3], [3, 4], [3, 5], [4, 5], [5, 5], [5, 6], [6, 7], [7, 8]]))