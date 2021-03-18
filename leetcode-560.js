/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* 前缀和：sum[i] 表示 nums[0, i - 1] 的和 */
// var subarraySum = function (nums, k) {
//   let len = nums.length
//   if (len === 0) {
//     return 0
//   }
//   let sums = new Array(len + 1).fill(0)
//   for (let i = 0; i < len; i++) {
//     sums[i + 1] = sums[i] + nums[i]
//   }
//   let res = 0
//   for (let i = 1; i <= len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (sums[i] - sums[j] === k) {
//         res++
//       }
//     }
//   }
//   console.log(sums)
//   return res
// }

var subarraySum = function (nums, k) {
  let len = nums.length
  if (len === 0) {
    return 0
  }
  let map = {
    0: 1,
  }
  let res = 0
  let sum_i = 0
  let sum_j = 0
  for (let i = 0; i < len; i++) {
    sum_i += nums[i]
    sum_j = sum_i - k
    if (map[sum_j]) {
      res += map[sum_j]
    }
    map[sum_i] = map[sum_i] === undefined ? 1 : map[sum_i] + 1
  }
  return res
}

console.log(subarraySum([1, 1, 1, 2], 2))
