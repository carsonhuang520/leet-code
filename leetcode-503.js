/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let newNums = nums.concat(nums)
  let res = []
  let stack = []
  for (let i = newNums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= newNums[i]) {
      stack.pop()
    }
    res[i] = stack.length ? stack[stack.length - 1] : -1
    stack.push(newNums[i])
  }
  return res.slice(0, nums.length)
}

console.log(nextGreaterElements([2, 1, 2, 4, 3]))
