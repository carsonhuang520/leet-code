var addBinary = function (a, b) {
  let len1 = a.length
  let len2 = b.length
  if (len1 === 0) {
    return b
  }
  if (len2 === 0) {
    return a
  }
  a = a.split('').reverse().join('')
  b = b.split('').reverse().join('')
  let i = 0
  let j = 0
  let t = 0
  let res = ''
  while (i < len1 && j < len2) {
    let temp = t + parseInt(a[i]) + parseInt(b[j])
    res = (temp % 2) + res
    t = Math.floor(temp / 2)
    i++
    j++
  }
  while (i < len1) {
    let temp = t + parseInt(a[i])
    res = (temp % 2) + res
    t = Math.floor(temp / 2)
    i++
  }
  while (j < len2) {
    let temp = t + parseInt(b[j])
    res = (temp % 2) + res
    t = Math.floor(temp / 2)
    j++
  }
  if (t !== 0) {
    res = (t % 2) + res
  }
  return res
}

console.log(addBinary('11', '1'))
