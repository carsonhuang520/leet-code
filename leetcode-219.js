/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === undefined) {
      map.set(nums[i], i)
    } else {
      let t = map.get(nums[i])
      if (i - t <= k) {
        return true
      } else {
        map.set(nums[i], i)
      }
    }
  }
  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
