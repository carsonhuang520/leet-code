var minArray = function (numbers) {
  let min = Math.min()
  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i]
    }
  }
  return min
}

var minArray = function (numbers) {
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    let mid = Math.floor((i + j) / 2)
    if (numbers[mid] < numbers[j]) {
      j = mid
    } else if (numbers[mid] > numbers[j]) {
      i = mid + 1
    } else {
      j--
    }
  }
  return numbers[i]
}

console.log(minArray([3, 4, 5, 1, 2]))
