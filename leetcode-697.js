/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let degree = 0
  let map = new Map()
  let left = new Map()
  let right = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (left.get(nums[i]) === undefined) {
      left.set(nums[i], i)
    }
    right.set(nums[i], i)
    if (map.get(nums[i]) === undefined) {
      map.set(nums[i], 0)
    }
    map.set(nums[i], map.get(nums[i]) + 1)
  }
  degree = Math.max(...map.values())
  let ans = nums.length
  for (let key of map.keys()) {
    if (map.get(key) === degree) {
      ans = Math.min(ans, right.get(key) - left.get(key) + 1)
    }
  }
  return ans
}

console.log(findShortestSubArray([1, 2, 2, 3, 1]))
