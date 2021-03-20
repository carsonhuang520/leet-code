/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型一维数组
 */
/**
 * 所有数异或得到的结果一定不为0，那么二进制中必有一位是1，可以根据这个1，将数组分成两个部分，
 * 两部分的所有数字分别做异或，得到的两个结果就是要求的两个结果。
 */
function FindNumsAppearOnce(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum ^= array[i]
  }
  let div = 1
  while ((div & sum) === 0) {
    div <<= 1
  }
  let m = 0
  let n = 0
  for (let i = 0; i < array.length; i++) {
    if ((div & array[i]) !== 0) {
      n ^= array[i]
    } else {
      m ^= array[i]
    }
  }
  if (m > n) {
    return [n, m]
  }
  return [m, n]
}
console.log(FindNumsAppearOnce([3, 6]))
module.exports = {
  FindNumsAppearOnce: FindNumsAppearOnce,
}
