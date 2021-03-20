function IsContinuous(numbers) {
  if (numbers.length === 0) {
    return false
  }
  numbers.sort((a, b) => a - b)
  let count = 0
  let zero = 0
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === 0) {
      zero++
    } else {
      if (numbers[i + 1] - numbers[i] > 1) {
        count += numbers[i + 1] - numbers[i] - 1
      } else if (numbers[i + 1] - numbers[i] === 0) {
        return false
      }
    }
  }
  return zero >= count
}
console.log(IsContinuous([0, 3, 0, 7, 4]))
module.exports = {
  IsContinuous: IsContinuous,
}
