var flatten = function (root) {
  if (root === null) {
    return
  }
  flatten(root.left)
  flatten(root.right)
  let left = root.left
  let right = root.right
  root.left = null
  root.right = left
  let temp = root
  while (temp.right !== null) {
    temp = temp.right
  }
  temp.right = right
}
