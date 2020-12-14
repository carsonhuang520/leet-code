/**
 * @param {number[]} nums
 * @return {number}
 */
// var findLHS = function (nums) {
//   let res = 0
//   for (let i = 0; i < nums.length; i++) {
//     let ans = 1
//     let flag = false
//     for (let j = i + 1; j < nums.length; j++) {
//       if (Math.abs(nums[i] - nums[j]) === 0) {
//         ans++
//       }
//       if (Math.abs(nums[i] - nums[j]) === 1) {
//         ans++
//         flag = true
//       }
//     }
//     if (flag) {
//       res = Math.max(res, ans)
//     }
//   }
//   return res
// }

var findLHS = function (nums) {
  let res = 0
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === undefined) {
      map.set(nums[i], 0)
    }
    map.set(nums[i], map.get(nums[i]) + 1)
  }

  for (let key of map.keys()) {
    if (map.get(key + 1) !== undefined) {
      res = Math.max(res, map.get(key) + map.get(key + 1))
    }
  }
  return res
}

console.log(findLHS([1, 2, 1, 3, 0, 0, 2, 2, 1, 3, 3]))
