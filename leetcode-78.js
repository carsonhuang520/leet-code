// 回溯法

var subsets = function (nums) {
  let res = []
  const backtrack = (track, start) => {
    // if (track.length !== 0) {
    res.push([...track])
    // }
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      backtrack(track, i + 1)
      track.pop()
    }
  }
  backtrack([], 0)
  return res
}

// console.log(subsets([1, 2, 3]))

// console.log([].push(1))

// const arr = []
// arr.push(1)
// // arr.push(2)

// console.log(arr)

// 数学归纳法（递归）

var subsets2 = (nums) => {
  if (nums.length === 0) {
    return [[]]
  }
  let n = nums.pop()
  let res = subsets2(nums)
  let length = res.length
  for (let i = 0; i < length; i++) {
    res.push([...res[i]])
    res[length + i].push(n)
  }
  return res
}

console.log(subsets2([1, 2, 3]))
