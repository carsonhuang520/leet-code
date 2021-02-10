// var findMedianSortedArrays = function (nums1, nums2) {
//   let temp = nums1.concat(nums2)
//   temp.sort((a, b) => a - b)
//   let len = temp.length
//   if (len % 2 === 1) {
//     return temp[Math.floor(len / 2)]
//   } else {
//     return (temp[len / 2] + temp[len / 2 - 1]) / 2
//   }
// }

// console.log(findMedianSortedArrays([3], [-2, -1]))

var getKth = function (nums1, start1, end1, nums2, start2, end2, k) {
  let len1 = end1 - start1 + 1
  let len2 = end2 - start2 + 1
  if (len2 < len1) {
    return getKth(nums2, start2, end2, nums1, start1, end1, k)
  }
  if (len1 === 0) {
    return nums2[start2 + k - 1]
  }
  if (k === 1) {
    return Math.min(nums1[start1], nums2[start2])
  }
  let i = start1 + Math.min(len1, Math.floor(k / 2)) - 1
  let j = start2 + Math.min(len2, Math.floor(k / 2)) - 1
  if (nums1[i] > nums2[j]) {
    return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1))
  } else {
    return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1))
  }
}

var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  let left = Math.floor((len1 + len2 + 1) / 2)
  let right = Math.floor((len1 + len2 + 2) / 2)
  return (
    (getKth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, left) +
      getKth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, right)) *
    0.5
  )
}

console.log(findMedianSortedArrays([3], [-2, -1]))
// console.log(findMedianSortedArrays([1, 3], [2]))
