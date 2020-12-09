var dailyTemperatures = function (T) {
  let res = []
  let ans = Array(T.length).fill(0)
  for (let i = 0; i < T.length; i++) {
    while (res.length !== 0) {
      let temp = res[res.length - 1]
      if (T[i] <= T[temp]) {
        break
      }
      res.pop()
      ans[temp] = i - temp
    }
    res.push(i)
  }
  return ans
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
