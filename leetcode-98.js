const getLeftNode = (root) => {
  while (root !== null && root.right !== null) {
    root = root.right
  }
  return root
}
const getRightNode = (root) => {
  while (root !== null && root.left !== null) {
    root = root.left
  }
  return root
}

var isValidBST = function (root) {
  if (root === null) {
    return true
  }
  let leftNode = getLeftNode(root.left)
  let rightNode = getRightNode(root.right)
  let isLeftValid = isValidBST(root.left)
  let isRightValid = isValidBST(root.right)
  if (
    (leftNode && leftNode.val >= root.val) ||
    (rightNode && rightNode.val <= root.val)
  ) {
    return false
  }
  return isLeftValid && isRightValid
}

var isValidBST2 = function (root) {
  var helper = function (root, min, max) {
    if (root === null) {
      return true
    }
    if (min !== null && root.val <= min.val) {
      return false
    }
    if (max !== null && root.val >= max.val) {
      return false
    }
    return helper(root.left, min, root) && helper(root.right, root, max)
  }
  return helper(root, null, null)
}
