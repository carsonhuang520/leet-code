var numberOfArithmeticSlices = function (A) {
  let len = A.length
  if (len === 0) {
    return 0
  }
  let dp = new Array(len + 1).fill(0)
  for (let i = 3; i <= len; i++) {
    if (A[i - 1] - A[i - 2] === A[i - 2] - A[i - 3]) {
      dp[i] = dp[i - 1] + 1
    }
  }
  return dp.reduce((prev, cur) => {
    prev += cur
    return prev
  }, 0)
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6]))
