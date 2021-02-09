var findMedianSortedArrays = function (nums1, nums2) {
  let temp = nums1.concat(nums2)
  temp.sort((a, b) => a - b)
  let len = temp.length
  if (len % 2 === 1) {
    return temp[Math.floor(len / 2)]
  } else {
    return (temp[len / 2] + temp[len / 2 - 1]) / 2
  }
}

console.log(findMedianSortedArrays([3], [-2, -1]))
