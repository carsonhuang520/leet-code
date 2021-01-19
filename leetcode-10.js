var isMatch = function (s, p) {
  let m = s.length
  let n = p.length
  let map = new Map()
  const dp = (i, j) => {
    if (j === n) {
      return i === m
    }
    if (i === m) {
      if ((n - j) % 2 === 1) {
        return false
      }
      for (; j + 1 < n; j += 2) {
        if (p[j + 1] !== '*') {
          return false
        }
      }
      return true
    }
    let key = i + ',' + j
    if (map.get(key)) {
      return map.get(key)
    }
    let res = false
    if (s[i] === p[j] || p[j] === '.') {
      if (j < n - 1 && p[j + 1] === '*') {
        res = dp(i, j + 2) || dp(i + 1, j)
      } else {
        res = dp(i + 1, j + 1)
      }
    } else {
      if (j < n - 1 && p[j + 1] === '*') {
        res = dp(i, j + 2)
      } else {
        res = false
      }
    }
    map.set(key, res)
    return res
  }
  return dp(0, 0)
}

console.log(isMatch("aaa", "a.a"))