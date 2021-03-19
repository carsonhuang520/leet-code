/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  let len = nums.length
  let dp = new Array(len)
  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    let max = -Infinity
    for (let j = 1; j <= k; j++) {
      if (i >= j) {
        max = Math.max(dp[i - j], max)
      }
    }
    dp[i] = max + nums[i]
  }
  console.log(dp)
  return dp[len - 1]
}

console.log(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2))
