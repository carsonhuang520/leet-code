var findLongestChain = function (pairs) {
  let len = pairs.length
  if (len === 0) {
    return 0
  }
  pairs.sort((a, b) => a[0] - b[0])
  let dp = new Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], 1 + dp[j])
      }
    }
  }
  return dp[len - 1]
}

console.log(findLongestChain([[3, 4], [2, 3], [1, 2]]))