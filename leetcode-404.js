var sumOfLeftLeaves = function (root) {
  let res = 0
  const helper = (root, isLeft) => {
    if (root === null) {
      return 0
    }
    if (root.left === null && root.right === null && isLeft) {
      return root.val
    }
    return helper(root.left, true) + helper(root.right, false)
  }
  return helper(root, false)
}

var sumOfLeftLeaves2 = function (root) {
  const isLeafNode = (root) => {
    return root.left === null && root.right === null
  }
  if (root === null) {
    return 0
  }
  let queue = []
  let res = 0
  queue.push(root)
  while (queue.length) {
    let temp = queue.shift()
    if (temp.left !== null) {
      if (isLeafNode(temp.left)) {
        res += temp.left.val
      } else {
        queue.push(temp.left)
      }
    }
    if (temp.right !== null) {
      if (!isLeafNode(temp.right)) {
        queue.push(temp.right)
      }
    }
  }
  return res
}
