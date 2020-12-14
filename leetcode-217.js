/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      return true
    }
    map.set(nums[i], i)
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 4]))
