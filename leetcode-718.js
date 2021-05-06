/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 暴力法
// var findLength = function (nums1, nums2) {
//   let max = 0
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       let temp = 0
//       if (nums1[i] === nums2[j]) {
//         let k = i
//         let q = j
//         while (k < nums1.length && q < nums2.length && nums1[k] === nums2[q]) {
//           temp++
//           max = Math.max(max, temp)
//           k++
//           q++
//         }
//       }
//     }
//   }
//   return max
// }

// 动态规划
// var findLength = function (nums1, nums2) {
//   let m = nums1.length
//   let n = nums2.length
//   let dp = new Array(m + 1)
//   for (let i = 0; i < m + 1; i++) {
//     dp[i] = new Array(n + 1).fill(0)
//   }
//   let max = 0
//   for (let i = 1; i < m + 1; i++) {
//     for (let j = 1; j < n + 1; j++) {
//       if (nums1[i - 1] === nums2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1
//       }
//       max = Math.max(dp[i][j], max)
//     }
//   }
//   return max
// }

var findLength = function (nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let dp = new Array(n + 1).fill(0)
  let max = 0
  for (let i = 1; i < m + 1; i++) {
    for (let j = n; j >= 1; j--) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1
      } else {
        dp[j] = 0
      }
      max = Math.max(dp[j], max)
    }
  }
  return max
}

console.log(findLength([1, 0, 0, 0, 1], [1, 0, 0, 1, 1]))
