var checkPossibility = function (nums) {
  if (nums.length <= 1) {
    return true
  }
  let res = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      res++
      if (res > 1) {
        return false
      }
      if (
        i > 1 &&
        i < nums.length - 1 &&
        nums[i - 1] > nums[i + 1] &&
        nums[i - 2] > nums[i]
      ) {
        return false
      }
    }
  }
  return true
}

console.log(checkPossibility([3, 4, 2, 3]))
console.log(checkPossibility([5, 7, 1, 8]))
