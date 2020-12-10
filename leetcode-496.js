/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let res = []
  let stack = []
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop()
    }
    res[i] = stack.length ? stack[stack.length - 1] : -1
    stack.push(nums2[i])
  }
  let ans = []
  for (let i = 0; i < nums1.length; i++) {
    ans.push(res[nums2.indexOf(nums1[i])])
  }
  return ans
}

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))

var nextGreaterElement2 = function (nums) {
  let stack = []
  let res = []
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      res[count] = nums[i]
      stack.pop()
      count++
    }
    stack.push(nums[i])
  }
  while (stack.length) {
    res[count] = -1
    stack.pop()
    count++
  }
  return res
}

console.log(nextGreaterElement2([1, 3, 4, 2]))
