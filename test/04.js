function helper(root, sum) {
  let res = []
  if (root === null) {
    return res
  }
  if (root.val === sum) {
    res.push([root.val])
    return res
  }
  let leftArr = helper(root.left, sum - root.val)
  for (let i = 0; i < leftArr.length; i++) {
    res.push([root.val, ...leftArr[i]])
  }
  let rightArr = helper(root.right, sum - root.val)
  for (let i = 0; i < rightArr.length; i++) {
    res.push([root.val, ...rightArr[i]])
  }
  return res
}
var pathSum = function (root, sum) {
  const res = helper(root, sum)
  if (res.length === 0) {
    return []
  }
  let result
  let min = Infinity
  res.forEach((item) => {
    if (item.length < min) {
      result = item
      min = item.length
    }
  })
  return result
}
