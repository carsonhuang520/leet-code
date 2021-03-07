// var exchange = function (nums) {
//   let res = []
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !== 0) {
//       res.unshift(nums[i])
//     } else {
//       res.push(nums[i])
//     }
//   }
//   return res
// }

var exchange = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    while (left < right && nums[left] % 2 !== 0) {
      left++
    }
    while (left < right && nums[right] % 2 === 0) {
      right--
    }
    if (left < right) {
      let temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
    }
  }
  return nums
}

console.log(exchange([1, 2, 3, 4, 5, 6]))
