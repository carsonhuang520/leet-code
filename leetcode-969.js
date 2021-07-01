/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  let queue = []
  const sort = (arr, n) => {
    if (n === 1) {
      return
    }
    let maxIndex = 0
    let max = 0
    for (let i = 0; i < n; i++) {
      if (arr[i] > max) {
        max = arr[i]
        maxIndex = i
      }
    }

    reverse(arr, 0, maxIndex)
    queue.push(maxIndex + 1)

    reverse(arr, 0, n - 1)
    queue.push(n)

    sort(arr, n - 1)
  }
  sort(arr, arr.length)
  return queue
}

function reverse(arr, i, j) {
  while (i < j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
}

console.log(pancakeSort([3, 2, 4, 1]))
