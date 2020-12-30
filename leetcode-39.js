var combinationSum = function (candidates, target) {
  let res = []
  const getSum = (nums) => {
    return nums.reduce((prev, item) => {
      prev += item
      return prev
    }, 0)
  }
  const backtrack = (track, start) => {
    let sum = getSum(track)
    if (sum === target) {
      res.push([...track])
      return
    }
    if (sum > target) {
      return
    }
    for (let i = start; i < candidates.length; i++) {
      track.push(candidates[i])
      backtrack(track, i)
      track.pop()
    }
  }
  backtrack([], 0)
  return res
}

console.log(combinationSum([2, 3, 6, 7], 7))
