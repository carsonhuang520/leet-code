function VerifySquenceOfBST(sequence) {
  let len = sequence.length
  if (len === 0) {
    return true
  }
  const helper = (i, j) => {
    if (i >= j) {
      return true
    }
    let p = i
    while (sequence[p] < sequence[j]) {
      p++
    }
    let m = p
    while (sequence[p] > sequence[j]) {
      p++
    }
    return p === j && helper(i, m - 1) && helper(m, j - 1)
  }

  return helper(0, len - 1)
}

console.log(VerifySquenceOfBST([4, 8, 6, 12, 16, 14, 10]))
console.log(VerifySquenceOfBST([7, 4, 6, 5]))

module.exports = {
  VerifySquenceOfBST: VerifySquenceOfBST,
}
