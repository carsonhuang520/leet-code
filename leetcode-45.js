/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let len = nums.length
  let max = 0
  let end = 0
  let jumps = 0
  for (let i = 0; i < len - 1; i++) {
    max = Math.max(nums[i] + i, max)
    if (end === i) {
      jumps++
      end = max
    }
  }
  return jumps
}
