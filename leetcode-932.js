var beautifulArray = function (N) {
  const memo = new Map()
  const helper = (N) => {
    if (memo.has(N)) {
      return memo.get(N)
    }
    let ans = new Array(N)
    if (N === 1) {
      ans[0] = 1
    } else {
      let t = 0
      for (let x of helper(Math.floor((N + 1) / 2))) {
        ans[t++] = 2 * x - 1
      }
      for (let x of helper(Math.floor(N / 2))) {
        ans[t++] = 2 * x
      }
    }
    memo.set(N, ans)
    return ans
  }
  return helper(N)
}

console.log(beautifulArray(4))
