/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map()
  for (let i = 0; i < nums1.length; i++) {
    if (map.get(nums1[i]) === undefined) {
      map.set(nums1[i], 0)
    }
    map.set(nums1[i], map.get(nums1[i]) + 1)
  }
  let ans = []
  for (let i = 0; i < nums2.length; i++) {
    if (map.get(nums2[i])) {
      ans.push(nums2[i])
      map.set(nums2[i], map.get(nums2[i]) - 1)
    }
  }
  return ans
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
