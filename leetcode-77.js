var combine = function (n, k) {
  let res = []
  const isEqual = (nums1, nums2) => {
    for (let j = 0; j < k; j++) {
      if (nums1[j] !== nums2[j]) {
        return false
      }
    }
    return true
  }
  const isContain = (nums) => {
    if (res.length === 0) {
      return false
    }
    nums = [...nums]
    nums.sort((a, b) => a - b)
    for (let i = 0; i < res.length; i++) {
      if (isEqual(res[i], nums)) {
        return true
      }
    }
    return false
  }
  const backtrack = (track) => {
    if (track.length === k && !isContain(track)) {
      res.push([...track])
      return
    }
    for (let i = 1; i <= n; i++) {
      if (track.indexOf(i) !== -1) {
        continue
      }
      track.push(i)
      backtrack(track)
      track.pop()
    }
  }
  backtrack([])
  return res
}

var combine2 = function (n, k) {
  let res = []
  const backtrack = (track, i) => {
    if (track.length === k) {
      res.push([...track])
      return
    }
    for (let j = i; j <= n; j++) {
      track.push(j)
      backtrack(track, j + 1)
      track.pop()
    }
  }
  backtrack([], 1)
  return res
}

console.log(combine2(4, 2))
