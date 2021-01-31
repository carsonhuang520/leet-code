var findSubsequences = function (nums) {
  let res = []
  let map = new Map()
  // map.set([1, 2].toString(), true)
  // console.log(map.get([1, 2].toString()))
  const backtrack = (track, start) => {
    if (track.length >= 2) {
      if (map.get(track.toString())) {
        return
      } else {
        map.set(track.toString(), [...track])
        res.push([...track])
      }
      if (track.length === nums.length) {
        return
      }
    }
    for (let i = start; i < nums.length; i++) {
      if (i !== start && nums[i] === nums[i - 1]) {
        continue
      }
      if (nums[i] < track[track.length - 1]) {
        continue
      }
      track.push(nums[i])
      backtrack(track, i + 1)
      track.pop()
    }
  }
  backtrack([], 0)
  return res
}

console.log(findSubsequences([1, 2, 3, 1, 1]))
// console.log(findSubsequences([4, 3, 2, 1]))
