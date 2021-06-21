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

function nextGreaterElement2(nums) {
  let ans = []
  let stack = []
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop()
    }
    ans[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
    stack.push(nums[i])
  }
  return ans
}

console.log(nextGreaterElement2([2, 1, 2, 4, 3]))
