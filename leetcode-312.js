// 回溯解法
var maxCoins = function (nums) {
  let m = nums.length
  if (m === 0) {
    return 0
  }
  let res = 0
  const backtrack = (nums, score) => {
    if (nums.length === 0) {
      res = Math.max(res, score)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      let point = nums[i]
      if (i - 1 === -1 && i + 1 !== nums.length) {
        point = point * nums[i + 1]
      } else if (i + 1 === nums.length && i - 1 !== -1) {
        point = point * nums[i - 1]
      } else if (i + 1 === nums.length && i - 1 === -1) {
        point = point * 1 * 1
      } else {
        point = point * nums[i - 1] * nums[i + 1]
      }
      let temp = nums[i]
      nums.splice(i, 1)
      backtrack([...nums], score + point)
      nums.splice(i, 0, temp)
    }
  }
  backtrack(nums, 0)
  return res
}

// console.log(maxCoins([7, 9, 8, 0, 7, 1, 3, 5, 5, 2, 3]))

// 动态规划解法
var maxCoins2 = function (nums) {
  let m = nums.length
  let points = new Array(m + 2).fill(1)
  for (let i = 1; i <= m; i++) {
    points[i] = nums[i - 1]
  }
  let dp = new Array(m + 2)
  for (let i = 0; i < m + 2; i++) {
    dp[i] = new Array(m + 2).fill(0)
  }
  for (let i = m; i >= 0; i--) {
    for (let j = i + 1; j < m + 2; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + points[i] * points[k] * points[j])
      }
    }
  }
  // console.log(dp)
  return dp[0][m + 1]
}

console.log(maxCoins2([7, 9, 8, 0, 7, 1, 3, 5, 5, 2, 3]))