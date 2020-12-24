var pathSum = function (root, sum) {
  const findPath = (root, sum) => {
    if (root === null) {
      return 0
    }
    let res = 0
    if (root.val === sum) {
      res += 1 // 不能直接返回 1，因为后面可能还有节点相加等于 sum
    }
    res += findPath(root.left, sum - root.val)
    res += findPath(root.right, sum - root.val)
    return res
  }
  if (root === null) {
    return 0
  }
  let rootSum = findPath(root, sum)
  let leftSum = pathSum(root.left, sum)
  let rightSum = pathSum(root.right, sum)
  return rootSum + leftSum + rightSum
}
