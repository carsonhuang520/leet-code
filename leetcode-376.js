var wiggleMaxLength = function (nums) {
  let m = nums.length
  let dp = new Array(m + 1).fill(0)
  dp[1] = 1
  dp[2] = nums[1] === nums[0] ? dp[1] : 2
  for (let i = 3; i <= m; i++) {
    if (nums[i - 1] > nums[i - 2] && nums[i - 2] < nums[i - 3]) {
      dp[i] = dp[i - 1] + 1
      continue
    }
    if (nums[i - 1] < nums[i - 2] && nums[i - 2] > nums[i - 3]) {
      dp[i] = dp[i - 1] + 1
      continue
    }
    dp[i] = dp[i - 1] < 2 && nums[i - 1] !== nums[i - 2] ? dp[i - 1] + 1 : dp[i - 1]
  }
  console.log(dp)
  return dp[m]
}

var wiggleMaxLength2 = function (nums) {
  let m = nums.length
  if (m < 2) {
    return m
  }
  let up = new Array(m).fill(0)
  let down = new Array(m).fill(0)
  up[0] = down[0] = 1
  for (let i = 1; i < m; i++) { 
    if (nums[i] > nums[i - 1]) {
      up[i] = Math.max(up[i - 1], down[i - 1] + 1)
      down[i] = down[i - 1]
    } else if (nums[i] < nums[i - 1]) {
      down[i] = Math.max(down[i - 1], up[i - 1] + 1)
      up[i] = up[i - 1]
    } else {
      up[i] = up[i - 1]
      down[i] = down[i - 1]
    }
  }
  return Math.max(up[m - 1], down[m - 1])
}

console.log(wiggleMaxLength2([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))