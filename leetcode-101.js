// 递归实现
var isSymmetric = function (root) {
  const helper = (node1, node2) => {
    if (node1 === null && node2 === null) {
      return true
    }
    if (node1 === null || node2 === null || node1.val !== node2.val) {
      return false
    }
    return helper(node1.left, node2.right) && helper(node1.right, node2.left)
  }
  if (root === null) {
    return true
  }
  return helper(root.left, root.right)
}

// 非递归实现
// 用队列保存访问过的节点，每次取出两个比较
var isSymmetric2 = function (root) {
  if (root === null) {
    return true
  }
  let queue = [root.left, root.right]
  let left
  let right
  while (queue.length) {
    left = queue.shift()
    right = queue.shift()
    if (left === null && right === null) {
      continue
    }
    if (left === null || right === null || left.val !== right.val) {
      return false
    }
    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }
  return true
}
