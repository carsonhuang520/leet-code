// 动态规划
var findTargetSumWays = function (nums, S) {
  let sum = nums.reduce((prev, cur) => {
    prev += cur
    return prev
  }, 0)
  if (sum < S || (sum + S) % 2 === 1) {
    return 0
  }
  let m = nums.length
  let target = (sum + S) / 2
  let dp = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(target + 1).fill(0)
    dp[i][0] = 1
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= target; j++) {
      if (j - nums[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]]
      }
    }
  }
  console.log(dp)
  return dp[m][target]
}

// console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))

// 回溯
var findTargetSumWays2 = function (nums, S) {
  let res = []
  const sum = (nums) => {
    let res = nums.reduce((prev, cur) => {
      prev += cur
      return prev
    }, 0)
    return res
  }
  const backtrack = (track, start) => {
    if(track.length > nums.length) {
      return
    }
    if (track.length === nums.length && sum(track) === S) {
      res.push([...track])
      return
    }
    for (let i = start; i < nums.length; i++) {
      for (let t of [-1, 1]) {
        track.push(t * nums[i])
        backtrack(track, i + 1)
        track.pop()
      }
    }
  }
  // const backtrack = (track, start) => {
  //   if (start === nums.length) {
  //     if (track === S) {
  //       res++
  //     }
  //     return
  //   }
  //   for (let t of [-1, 1]) {
  //     track += t * nums[start]
  //     backtrack(track, start + 1)
  //     track -= t * nums[start]
  //   }
  // }
  backtrack([], 0)
  return res.length
}

console.log(findTargetSumWays2([1, 1, 1, 1, 1], 3))
