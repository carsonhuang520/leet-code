var diameterOfBinaryTree = function (root) {
  let res = 0
  const helper = (root) => {
    if (root === null) {
      return 0
    }
    let left = helper(root.left)
    let right = helper(root.right)
    res = Math.max(res, left + right)
    return Math.max(left, right) + 1
  }
  helper(root)
  return res
}

var diameterOfBinaryTree2 = function (root) {
  const maxDepth = (root) => {
    if (root === null) {
      return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  }
  const helper = (root) => {
    if (root === null) {
      return 0
    }
    let rootSum = maxDepth(root.left) + maxDepth(root.right)
    let childSum = Math.max(helper(root.left), helper(root.right))
    return Math.max(rootSum, childSum)
  }
  return helper(root)
}
