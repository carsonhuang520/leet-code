// var findKthLargest = function (nums, k) {
//   let len = nums.length
//   for (let i = 1; i < len; i++) {
//     let temp = nums[i]
//     let j
//     for (j = i - 1; j >= 0; j--) {
//       if (nums[j] > temp) {
//         nums[j + 1] = nums[j]
//       } else {
//         break
//       }
//     }
//     nums[j + 1] = temp
//   }
//   console.log(nums)
//   return nums[len - k]
// }

var findKthLargest = function (nums, k) {
  let l = 0
  let r = nums.length - 1
  let target = nums.length - k
  while (l < r) {
    let mid = partition(nums, l, r)
    console.log(mid)
    if (mid === target) {
      return nums[mid]
    } else if (mid < target) {
      l = mid + 1
    } else if (mid > target) {
      r = mid - 1
    }
  }
  console.log(nums)
  return nums[l]
}

function partition(nums, l, r) {
  let i = l + 1
  let j = r
  while (true) {
    while (i < r && nums[i] <= nums[r]) {
      i++
    }
    while (l < j && nums[j] >= nums[l]) {
      j--
    }
    if (i >= j) {
      break
    }
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  let temp = nums[l]
  nums[l] = nums[j]
  nums[j] = temp
  return j
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
