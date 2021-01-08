// 利用数学分析，
// 一直在想递归解决，但是没有解决
var reachNumber = function (target) {
  const dfs = (n, cur) => {
    if (cur === target) {
      return n
    } else if (cur > target) {
      return dfs(n + 1, cur - n - 1)
    } else if (cur < target) {
      return dfs(n + 1, cur + n + 1)
    }
  }
  if (target > 0) {
    return dfs(1, 1)
  } else {
    return dfs(1, -1)
  }
}

console.log(reachNumber(2))
