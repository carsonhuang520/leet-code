/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   let ans = []
//   let map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     let index = map.get(target - nums[i])
//     if (index !== undefined) {
//       ans[0] = index
//       ans[1] = i
//     }
//     map.set(nums[i], i)
//   }
//   return ans
// }

// console.log(twoSum([2, 7, 11, 15], 9))

var twoSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  let lo = 0
  let hi = nums.length - 1
  let res = []
  while (lo < hi) {
    let sum = nums[lo] + nums[hi]
    let left = nums[lo]
    let right = nums[hi]
    if (sum < target) {
      while (lo < hi && nums[lo] === left) {
        lo++
      }
    } else if (sum > target) {
      while (lo < hi && nums[hi] === right) {
        hi--
      }
    } else {
      res.push([lo, hi])
      while (lo < hi && nums[lo] === left) {
        lo++
      }
      while (lo < hi && nums[hi] === right) {
        hi--
      }
    }
  }
  return res
}

console.log(twoSum([2, 7, 11, 15], 9))
