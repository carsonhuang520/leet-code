// var printNumbers = function (n) {
//   let res = []
//   for (let i = 1; i <= Math.pow(10, n) - 1; i++) {
//     res.push(i)
//   }
//   return res
// }

var printNumbers = function (n) {
  let res = []
  const loop = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const backtrack = (track, x) => {
    if (x === n) {
      res.push([...track].join(''))
      return
    }
    for (let k of loop) {
      track.push(k)
      backtrack(track, x + 1)
      track.pop()
    }
  }
  backtrack([], 0)
  return res
}

console.log(printNumbers(2))
