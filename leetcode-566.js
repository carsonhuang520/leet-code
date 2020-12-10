/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let r1 = nums.length
  let c1 = nums[0].length
  if (r * c !== r1 * c1) {
    return nums
  }
  let ans = new Array(r)
  for (let i = 0; i < ans.length; i++) {
    ans[i] = new Array(c)
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let s = i * c + j
      let rr = Math.floor(s / c1)
      let cc = s % c1
      ans[i][j] = nums[rr][cc]
    }
  }
  return ans
}

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
)
