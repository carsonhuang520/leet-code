var threeSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let ans = twoSum(nums, i + 1, target - nums[i])
    res = res.concat(
      ans.map((item) => {
        item.push(nums[i])
        return item
      })
    )
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      i++
    }
  }
  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))

function twoSum(nums, start, target) {
  let res = []
  let lo = start
  let hi = nums.length - 1
  while (lo < hi) {
    let sum = nums[lo] + nums[hi]
    let left = nums[lo]
    let right = nums[hi]
    if (sum < target) {
      while (lo < hi && nums[lo] === left) {
        lo++
      }
    } else if (sum > target) {
      while (lo < hi && nums[hi] === right) {
        hi--
      }
    } else {
      res.push([left, right])
      while (lo < hi && nums[lo] === left) {
        lo++
      }
      while (lo < hi && nums[hi] === right) {
        hi--
      }
    }
  }
  return res
}
