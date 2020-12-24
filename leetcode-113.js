var pathSum = function (root, sum) {
  let res = []
  if (root === null) {
    return res
  }
  if (root.left === null && root.right === null && root.val === sum) {
    res.push([root.val])
    return res
  }
  let leftArr = pathSum(root.left, sum - root.val)
  for (let i = 0; i < leftArr.length; i++) {
    res.push([root.val, ...leftArr[i]])
  }
  let rightArr = pathSum(root.right, sum - root.val)
  for (let i = 0; i < rightArr.length; i++) {
    res.push([root.val, ...rightArr[i]])
  }
  return res
}
