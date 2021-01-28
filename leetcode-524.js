var findLongestWord = function (s, d) {
  const isContain = (s, t) => {
    let p1 = 0
    let p2 = 0
    while (p1 < s.length && p2 < t.length) {
      if (s[p1] === t[p2]) {
        p1++
        p2++
      } else {
        p1++
      }
    }
    return p2 === t.length
  }
  let res = ''
  d.sort()
  for (let i = 0; i < d.length; i++) {
    if (isContain(s, d[i])) {
      res = d[i].length > res.length ? d[i] : res
    }
  }
  return res
}

console.log(findLongestWord('bab', ['ba', 'ab', 'a', 'b']))
