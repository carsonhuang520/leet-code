// var findPeakElement = function (nums) {
//   let len = nums.length
//   if (len < 2) {
//     return 0
//   }
//   for (let i = 0; i < len; i++) {
//     if (i === 0) {
//       if (i + 1 < len && nums[i + 1] < nums[i]) {
//         return i
//       }
//     } else if (i === len - 1) {
//       if (nums[i - 1] < nums[i]) {
//         return i
//       }
//     } else {
//       if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
//         return i
//       }
//     }
//   }
// }

var findPeakElement = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] > nums[mid + 1]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left === nums.length ? left - 1 : left
}

console.log(findPeakElement([1]))
