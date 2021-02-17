/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.sums = []
  this.total = 0
  for (let v of w) {
    this.total += v
    this.sums.push(total)
  }
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let targ = Math.floor(Math.random() * this.total)
  let lo = 0
  let hi = this.sums.length - 1
  while (lo !== hi) {
    let mid = Math.floor((lo + hi) / 2)
    if (targ >= this.sums[mid]) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
