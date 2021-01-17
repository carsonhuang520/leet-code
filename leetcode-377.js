var combinationSum4 = function (nums, target) {
  let m = nums.length
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (num <= i) {
        dp[i] += dp[i - num]
      }
    }
  }
  console.log(dp)
  return dp[target]
}

// var combinationSum4 = function (nums, target) {
//   let res = 0
//   const helper = (result) => {
//     if (result === target) {
//       res++
//       return
//     }
//     if (result > target) {
//       return
//     }
//     for (let i = 0; i < nums.length; i++) {
//       result += nums[i]
//       helper(result)
//       result -= nums[i]
//     }
//   }
//   helper(0)
//   return res
// }

console.log(combinationSum4([2, 1, 3], 35))
