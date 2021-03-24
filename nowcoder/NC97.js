/**
 * return topK string
 * @param strings string字符串一维数组 strings
 * @param k int整型 the k
 * @return string字符串二维数组
 */
function topKstrings(strings, k) {
  let map = new Map()
  for (let i = 0; i < strings.length; i++) {
    if (map.has(strings[i])) {
      map.set(strings[i], map.get(strings[i]) + 1)
    } else {
      map.set(strings[i], 1)
    }
  }
  let res = new Array(...map)
  res.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1]
    } else {
      return a[0] > b[0] ? 1 : -1
    }
  })
  let result = []
  for (let i = 0; i < k; i++) {
    res[i][1] += ''
    result.push(res[i])
  }
  // console.log(res)
  // return map
  return result
}
console.log(topKstrings(['1', '1', '2', '2', '2', '3', '4'], 2))
module.exports = {
  topKstrings: topKstrings,
}
