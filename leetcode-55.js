/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length
  if (len === 0) {
    return false
  }
  let max = 0
  for (let i = 0; i < len - 1; i++) {
    max = Math.max(i + nums[i], max)
    if (max <= i) {
      return false
    }
  }
  if (max >= len - 1) {
    return true
  }
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
