/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let window = []
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    if (window.length && window[0] === i - k) {
      window.shift()
    }
    while (window.length && nums[window[window.length - 1]] < nums[i]) {
      window.pop()
    }
    window.push(i)
    if (i >= k - 1) {
      ans.push(nums[window[0]])
    }
  }
  return ans
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
