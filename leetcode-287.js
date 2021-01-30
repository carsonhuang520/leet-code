var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b)
  let left = 0
  let prev = nums[left]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prev) {
      return prev
    } else {
      prev = nums[i]
    }
  }
}

// var findDuplicate = function (nums) {
//   let map = {}
//   for (let c of nums) {
//     if (!map[c]) {
//       map[c] = 0
//     }
//     map[c]++
//   }
//   for (let i of Object.keys(map)) {
//     if (map[i] > 1) {
//       return i
//     }
//   }
// }

console.log(findDuplicate([1, 3, 4, 2, 2]))
