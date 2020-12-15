/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const helper = function (s) {
    let res1 = ''
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
      let s1 = s.charAt(i)
      if (map.get(s1) === undefined) {
        map.set(s1, i + 1)
      }
      res1 += map.get(s1)
    }
    return res1
  }
  return helper(s) === helper(t)
}

console.log(isIsomorphic('egg', 'add'))
