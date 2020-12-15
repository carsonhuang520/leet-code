/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    let t = s.charAt(i)
    if (map.get(t) === undefined) {
      map.set(t, 0)
    }
    map.set(t, map.get(t) + 1)
  }
  let res = ''
  let array = Array.from(map)
  array.sort((a, b) => b[1] - a[1])
  res = array.reduce((prev, item) => {
    let temp = ''
    for (let i = 0; i < item[1]; i++) {
      temp += item[0]
    }
    prev += temp
    return prev
  }, '')
  return res
}

console.log(frequencySort('treee'))
