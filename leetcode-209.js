/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let len = nums.length
  let res = len + 1
  let left = 0
  let right = 0
  let temp = 0
  while (right < len) {
    let c = nums[right]
    right++
    temp += c
    while (temp >= target) {
      let t = nums[left]
      left++
      res = Math.min(res, right - left + 1)
      temp -= t
    }
  }
  return res === len + 1 ? 0 : res
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
