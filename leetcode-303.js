/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  this.nums = nums
  let m = nums.length
  this.dp = new Array(m + 1).fill(0)
  for (let i = 1; i <= m; i++) {
    this.dp[i] = this.dp[i - 1] + nums[i - 1]
  }
}

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  // console.log(this.dp)
  return this.dp[j + 1] - this.dp[i]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var array = new NumArray([-2, 0, 3, -5, 2, -1])

console.log(array.sumRange(0, 2))
console.log(array.sumRange(2, 5))
console.log(array.sumRange(0, 5))