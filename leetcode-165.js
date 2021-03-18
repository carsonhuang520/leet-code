/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let nums1 = version1.split('.')
  let nums2 = version2.split('.')
  let i = 0
  while (i < nums1.length || i < nums2.length) {
    let left = nums1[i] === undefined ? 0 : parseInt(nums1[i])
    let right = nums2[i] === undefined ? 0 : parseInt(nums2[i])
    if (left > right) {
      return 1
    } else if (left < right) {
      return -1
    }
    i++
  }
  return 0
}
console.log(compareVersion('1.01', '1.001'))
