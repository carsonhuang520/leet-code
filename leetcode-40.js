var combinationSum2 = function (candidates, target) {
  let res = []
  candidates.sort((a, b) => a - b)
  const getSum = (nums) => {
    return nums.reduce((prev, item) => {
      prev += item
      return prev
    }, 0)
  }
  const backtrack = (track, start) => {
    const sum = getSum(track)
    if (sum === target) {
      res.push(track.slice())
      return
    }
    if (sum > target) {
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (i !== start && candidates[i] === candidates[i - 1]) {
        continue
      }
      track.push(candidates[i])
      backtrack(track, i + 1)
      track.pop()
    }
  }
  backtrack([], 0)
  return res
}

console.log(combinationSum2([2, 5, 2, 1, 2], 5))
