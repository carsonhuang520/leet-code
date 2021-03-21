/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length
  let min = Infinity
  let res = 0
  for (let i = 0; i < len; i++) {
    min = Math.min(min, prices[i])
    res = Math.max(res, prices[i] - min)
  }
  return res
}
/* 动态规划解法 */
var maxProfit = function (prices) {
  let len = prices.length
  let dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(2).fill(0)
  }
  // let res = 0
  for (let i = 0; i < len; i++) {
    if (i - 1 === -1) {
      dp[i][0] = 0
      dp[i][1] = -Infinity
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  console.log(dp)
  return dp[len - 1][0]
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
