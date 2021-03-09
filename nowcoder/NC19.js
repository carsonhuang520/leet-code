function maxsumofSubarray(arr) {
  let len = arr.length
  if (len === 0) {
    return 0
  }
  let dp = new Array(len).fill(0)
  dp[0] = arr[0] > dp[0] ? arr[0] : dp[0]
  let max = dp[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i])
    max = Math.max(max, dp[i])
  }
  return max
}

console.log(maxsumofSubarray([1, -2, 3, 5, -2, 6, -1]))
