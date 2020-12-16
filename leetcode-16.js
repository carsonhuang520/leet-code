/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let best = 10000
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue
    }
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      let left = nums[j]
      let right = nums[k]
      if (sum === target) {
        return target
      }
      if (Math.abs(sum - target) < Math.abs(best - target)) {
        best = sum
      }
      if (sum > target) {
        while (j < k && nums[k] === right) {
          k--
        }
      } else {
        while (j < k && nums[j] === left) {
          j++
        }
      }
    }
  }
  return best
}
