/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  nums.sort((a, b) => a - b)
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    let left = nums[i]
    let right = nums[j]
    if (right - left <= t && j - i <= k) {
      return true
    }
    while (right - left > t) {
      j--
    }
  }
}
