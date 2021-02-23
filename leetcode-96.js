var numTrees = function (n) {
  let map = new Array(n + 1)
  for (let i = 0; i < n + 1; i++) {
    map[i] = new Array(n + 1).fill(0)
  }
  const count = (lo, hi) => {
    if (lo > hi) {
      return 1
    }
    if (map[lo][hi]) {
      return map[lo][hi]
    }
    let res = 0
    for (let i = lo; i <= hi; i++) {
      let left = count(lo, i - 1)
      let right = count(i + 1, hi)
      res += left * right
    }
    map[lo][hi] = res
    return res
  }
  return count(1, n)
}

console.log(numTrees(18))
