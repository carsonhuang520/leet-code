var isPowerOfFour = function (n) {
  return n > 0 && !(n & (n - 1)) && n & 1431655765
}
