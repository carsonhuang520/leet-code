// function PrintMinNumber(numbers) {
//   let res = []
//   const helper = (track) => {
//     if (track.length === numbers.length) {
//       res.push([...track].join(''))
//     }
//     for (let i = 0; i < numbers.length; i++) {
//       if (track.indexOf(numbers[i]) !== -1) {
//         continue
//       }
//       track.push(numbers[i])
//       helper(track)
//       track.pop()
//     }
//   }
//   helper([])
//   let result = res[0]
//   for (let i = 1; i < res.length; i++) {
//     if (result > res[i]) {
//       result = res[i]
//     }
//   }
//   console.log(res)
//   return result
// }

function PrintMinNumber(numbers) {
  numbers.sort((a, b) => {
    if ('' + a + '' + b < '' + b + '' + a) {
      return -1
    } else {
      return 1
    }
  })
  let res = ''
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i]
  }
  console.log(numbers)
  return res
}

console.log(PrintMinNumber([3, 32, 321]))

module.exports = {
  PrintMinNumber: PrintMinNumber,
}
