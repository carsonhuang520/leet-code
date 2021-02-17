var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b)
  let res = 0
  for (let num of nums) {
    res += Math.abs(nums[Math.floor(nums.length / 2)] - num)
  }
  return res
}

console.log(minMoves2([1, 2, 3]))
