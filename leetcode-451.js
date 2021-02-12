/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function (s) {
//   let map = new Map()
//   for (let i = 0; i < s.length; i++) {
//     let t = s.charAt(i)
//     if (map.get(t) === undefined) {
//       map.set(t, 0)
//     }
//     map.set(t, map.get(t) + 1)
//   }
//   let res = ''
//   let array = Array.from(map)
//   array.sort((a, b) => b[1] - a[1])
//   res = array.reduce((prev, item) => {
//     let temp = ''
//     for (let i = 0; i < item[1]; i++) {
//       temp += item[0]
//     }
//     prev += temp
//     return prev
//   }, '')
//   return res
// }

// 桶排序
var frequencySort = function (s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    let t = s[i]
    if (map.get(t) === undefined) {
      map.set(t, 0)
    }
    map.set(t, map.get(t) + 1)
  }
  let res = ''
  let buckets = new Array(s.length + 1)
  for (let key of map.keys()) {
    let value = map.get(key)
    if (!buckets[value]) {
      buckets[value] = []
    }
    buckets[value].push(key)
  }
  for (let i = buckets.length - 1; i >= 0; i--) {
    while (buckets[i] && buckets[i].length !== 0) {
      let temp = buckets[i].pop()
      for (let j = i; j >= 1; j--) {
        res += temp
      }
    }
  }
  return res
}

console.log(frequencySort('treee'))
