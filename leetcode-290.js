/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const helper = function (pattern, s) {
    let ss = s.split(' ')
    if (ss.length !== pattern.length) {
      return false
    }
    let map = new Map()
    for (let i = 0; i < pattern.length; i++) {
      let t = pattern.charAt(i)
      if (map.get(t) !== undefined) {
        if (map.get(t) !== ss[i]) {
          return false
        }
      } else {
        map.set(t, ss[i])
      }
    }
    return true
  }
  const helper2 = function (s, pattern) {
    let ss = s.split(' ')
    if (ss.length !== pattern.length) {
      return false
    }
    let map = new Map()
    for (let i = 0; i < pattern.length; i++) {
      let t = pattern.charAt(i)
      if (map.get(ss[i]) !== undefined) {
        if (map.get(ss[i]) !== t) {
          return false
        }
      } else {
        map.set(ss[i], t)
      }
    }
    return true
  }
  return helper(pattern, s) && helper2(s, pattern)
}

console.log(wordPattern('abba', 'dog dog dog dog'))
