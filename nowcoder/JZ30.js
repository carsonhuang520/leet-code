function FindGreatestSumOfSubArray(array) {
  let len = array.length
  if (len === 0) {
    return 0
  }
  let dp = new Array(len).fill(0)
  dp[0] = array[0]
  let max = dp[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(array[i], dp[i - 1] + array[i])
    max = Math.max(dp[i], max)
  }
  console.log(dp)
  return max
}

console.log(FindGreatestSumOfSubArray([-2, -8, -1, -5, -9]))

module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray,
}
