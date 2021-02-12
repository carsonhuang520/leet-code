var largestNumber = function (nums) {
  let len = nums.length
  if (len === 0) {
    return ''
  }
  if (len === 1) {
    return '' + nums[0]
  }
  nums.sort((a, b) => {
    const t1 = String(a) + String(b)
    const t2 = String(b) + String(a)
    return t2 - t1
  })
  let res = ''
  for (let v of nums) {
    res += v
  }
  if (res[0] === '0') {
    return '0'
  }
  return res
}

console.log(largestNumber([3, 30, 34, 5, 9]))
