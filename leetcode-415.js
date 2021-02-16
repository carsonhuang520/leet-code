var addStrings = function (num1, num2) {
  if (num1.length === 0) {
    return num2
  }
  if (num2.length === 0) {
    return num1
  }
  let res = ''
  let temp = 0
  num1 = num1.split('').reverse().join('')
  num2 = num2.split('').reverse().join('')
  let i = 0
  let j = 0
  while (i < num1.length && j < num2.length) {
    let t = temp + parseInt(num1[i]) + parseInt(num2[j])
    temp = Math.floor(t / 10)
    res += t % 10
    i++
    j++
  }
  while (i < num1.length) {
    let t = temp + parseInt(num1[i])
    temp = Math.floor(t / 10)
    res += t % 10
    i++
  }
  while (j < num2.length) {
    let t = temp + parseInt(num2[j])
    temp = Math.floor(t / 10)
    res += t % 10
    j++
  }
  if (temp !== 0) {
    res += temp
  }
  // console.log(num1, num2)
  return res.split('').reverse().join('')
}

console.log(addStrings('1', '9'))
