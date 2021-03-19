/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型一维数组
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
  return [n, m]
}
console.log(FindNumsAppearOnce([3, 6]))
module.exports = {
  FindNumsAppearOnce: FindNumsAppearOnce,
}
