function GetUglyNumber_Solution(index) {
  if (index <= 0) {
    return 0
  }
  let res = new Array(index).fill(0)
  res[0] = 1
  let next = 1
  let multiply_2 = 0
  let multiply_3 = 0
  let multiply_5 = 0
  while (next < index) {
    res[next] = Math.min(
      res[multiply_2] * 2,
      res[multiply_3] * 3,
      res[multiply_5] * 5
    )
    while (res[multiply_2] * 2 <= res[next]) {
      multiply_2++
    }
    while (res[multiply_3] * 3 <= res[next]) {
      multiply_3++
    }
    while (res[multiply_5] * 5 <= res[next]) {
      multiply_5++
    }
    next++
  }
  return res[next - 1]
}
console.log(GetUglyNumber_Solution(1500))
module.exports = {
  GetUglyNumber_Solution: GetUglyNumber_Solution,
}
