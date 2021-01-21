var findContentChildren = function (g, s) {
  let m = g.length
  let n = s.length
  if (m === 0 || n === 0) {
    return 0
  }
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let i = 0
  let j = 0
  while (i < m && j < n) {
    if (g[i] <= s[j]) {
      i++
    }
    j++
  }
  return i
}

console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))
