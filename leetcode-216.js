var combinationSum3 = function (k, n) {
  let res = []
  const getSum = (nums) => {
    return nums.reduce((prev, item) => {
      prev += item
      return prev
    }, 0)
  }
  const backtrack = (track, start) => {
    if (track.length === k) {
      if (getSum(track) === n) {
        res.push([...track])
      }
      return
    }
    for (let i = start; i <= 9; i++) {
      track.push(i)
      backtrack(track, i + 1)
      track.pop()
    }
  }
  backtrack([], 1)
  return res
}

console.log(combinationSum3(3, 7))
