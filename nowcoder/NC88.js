/**
 *
 * @param a int整型一维数组
 * @param n int整型
 * @param K int整型
 * @return int整型
 */
function findKth(a, n, K) {
  a = shuffle(a) //为了尽可能防止极端情况发生，我们需要在算法开始的时候对 nums 数组来一次随机打乱
  K = n - K
  let lo = 0
  let hi = n - 1
  while (lo <= hi) {
    let p = partition(a, lo, hi)
    if (p < K) {
      lo = p + 1
    } else if (p > K) {
      hi = p - 1
    } else {
      return a[p]
    }
  }
  return -1
}
function partition(a, l, r) {
  let key = a[l]
  while (l < r) {
    while (l < r && a[r] >= key) {
      r--
    }
    a[l] = a[r]
    while (l < r && a[l] <= key) {
      l++
    }
    a[r] = a[l]
  }
  a[l] = key
  return l
}

/* 随机洗牌 */
function shuffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let r = i + Math.floor(Math.random() * (len - i))
    let temp = arr[i]
    arr[i] = arr[r]
    arr[r] = temp
  }
  return arr
}

// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))

console.log(findKth([1, 3, 5, 2, 2], 5, 3))
module.exports = {
  findKth: findKth,
}
