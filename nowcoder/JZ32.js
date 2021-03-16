function PrintMinNumber(numbers) {
  let res = []
  const helper = (track) => {
    if (track.length === numbers.length) {
      res.push([...track].join(''))
    }
    for (let i = 0; i < numbers.length; i++) {
      if (track.indexOf(numbers[i]) !== -1) {
        continue
      }
      track.push(numbers[i])
      helper(track)
      track.pop()
    }
  }
  helper([])
  let result = res[0]
  for (let i = 1; i < res.length; i++) {
    if (!compare(result, res[i])) {
      result = res[i]
    }
  }
  console.log(res)
  return result
}

function compare(num1, num2) {
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] < num2[i]) {
      return true
    }
  }
  return false
}

console.log(PrintMinNumber([3, 5, 1, 4, 2]))

module.exports = {
  PrintMinNumber: PrintMinNumber,
}
