var diffWaysToCompute = function (input) {
  let ways = []
  for (let i = 0; i < input.length; i++) {
    let c = input[i]
    if (c === '+' || c === '-' || c === '*') {
      let left = diffWaysToCompute(input.substring(0, i))
      let right = diffWaysToCompute(input.substring(i + 1))
      for (let l of left) {
        for (let r of right) {
          switch (c) {
            case '+':
              ways.push(l + r)
              break
            case '-':
              ways.push(l - r)
              break
            case '*':
              ways.push(l * r)
              break
          }
        }
      }
    }
  }
  if (ways.length === 0) {
    ways.push(Number(input))
  }
  return ways
}

console.log(diffWaysToCompute('10+5'))
