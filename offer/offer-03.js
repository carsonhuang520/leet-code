// var findRepeatNumber = function (nums) {
//   let set = new Set()
//   for (let num of nums) {
//     if (set.has(num)) {
//       return num
//     } else {
//       set.add(num)
//     }
//   }
// }

var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let m = nums[i]
    while (m !== i) {
      if (m === nums[m]) {
        return m
      } else {
        nums[i] = nums[m]
        nums[m] = m
      }
    }
  }
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
