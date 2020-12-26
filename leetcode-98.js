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
