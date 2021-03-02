// var trap = function (height) {
//   let len = height.length
//   let ans = 0
//   for (let i = 1; i < len - 1; i++) {
//     let l_max = 0
//     let r_max = 0
//     for (let j = i; j >= 0; j--) {
//       l_max = Math.max(l_max, height[j])
//     }
//     for (let j = i; j < len; j++) {
//       r_max = Math.max(r_max, height[j])
//     }
//     ans += Math.min(l_max, r_max) - height[i]
//   }
//   return ans
// }

// var trap = function (height) {
//   let len = height.length
//   if (len === 0) {
//     return 0
//   }
//   let l_max = new Array(len).fill(0)
//   let r_max = new Array(len).fill(0)
//   l_max[0] = height[0]
//   r_max[len - 1] = height[len - 1]
//   let ans = 0
//   for (let j = 1; j < len; j++) {
//     l_max[j] = Math.max(l_max[j - 1], height[j])
//   }
//   for (let j = len - 2; j >= 0; j--) {
//     r_max[j] = Math.max(r_max[j + 1], height[j])
//   }
//   for (let i = 1; i < len - 1; i++) {
//     ans += Math.min(l_max[i], r_max[i]) - height[i]
//   }
//   return ans
// }

var trap = function (height) {
  let len = height.length
  if (len === 0) {
    return 0
  }
  let left = 0
  let right = len - 1
  let l_max = height[left]
  let r_max = height[right]
  let ans = 0
  while (left <= right) {
    l_max = Math.max(height[left], l_max)
    r_max = Math.max(height[right], r_max)
    if (l_max < r_max) {
      ans += l_max - height[left]
      left++
    } else {
      ans += r_max - height[right]
      right--
    }
  }
  return ans
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
