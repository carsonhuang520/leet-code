var countNodes = function (root) {
  let res = 0
  const helper = (root) => {
    if (root === null) {
      return 0
    }
    let left = helper(root.left)
    let right = helper(root.right)
    return left + right + 1
  }
  return helper(root)
}

var countNodes2 = function (root) {
  const countLevel = (root) => {
    let res = 0
    while (root !== null) {
      res++
      root = root.left
    }
    return res
  }
  if (root === null) {
    return 0
  }
  let left = countLevel(root.left)
  let right = countLevel(root.right)
  if (left === right) {
    return Math.pow(2, left) + countNodes2(root.right)
  } else {
    return Math.pow(2, right) + countNodes2(root.left)
  }
}
