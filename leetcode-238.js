var productExceptSelf = function (nums) {
  let len = nums.length
  let prev = new Array(len).fill(1)
  let next = new Array(len).fill(1)
  let res = []
  let total = 1
  for (let i = 1; i < len; i++) {
    total = total * nums[i - 1]
    prev[i] = total
  }
  total = 1
  for (let i = len - 2; i >= 0; i--) {
    total = total * nums[i + 1]
    next[i] = total
  }
  for (let i = 0; i < len; i++) {
    res.push(prev[i] * next[i])
  }
  return res
}

console.log(productExceptSelf([1, 2, 3, 4]))
