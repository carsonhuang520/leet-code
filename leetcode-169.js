// var majorityElement = function (nums) {
//   let map = new Map()
//   for (let num of nums) {
//     if (!map.has(num)) {
//       map.set(num, 0)
//     }
//     map.set(num, map.get(num) + 1)
//     if (map.get(num) > Math.floor(nums.length / 2)) {
//       return num
//     }
//   }
// }

var majorityElement = function (nums) {
  let temp = nums[0]
  let count = 1
  for (let num of nums) {
    if (num === temp) {
      count++
    } else {
      count--
      if (count === 0) {
        temp = num
        count = 1
      }
    }
  }
  return temp
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
