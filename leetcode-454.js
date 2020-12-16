/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let n = A.length
  let map = new Map()
  let temp = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let s = A[i] + B[j]
      if (map.get(s) === undefined) {
        map.set(s, 0)
      }
      map.set(s, map.get(s) + 1)
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let s = C[i] + D[j]
      temp.push(s)
    }
  }
  let result = 0
  for (let i = 0; i < temp.length; i++) {
    if (map.get(-1 * temp[i])) {
      result += map.get(-1 * temp[i])
    }
  }
  return result
}
