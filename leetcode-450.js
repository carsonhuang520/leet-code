const getMin = (root) => {
  while (root.left !== null) {
    root = root.left
  }
  return root
}
var deleteNode = function (root, key) {
  if (root === null) {
    return null
  }
  if (root.val === key) {
    if (root.left === null) {
      return root.right
    }
    if (root.right === null) {
      return root.left
    }
    let min = getMin(root.right)
    root.val = min.val
    root.right = deleteNode(root.right, min.val)
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  }
  return root
}
