/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类
 * @return int整型二维数组
 */
function levelOrder(root) {
  if (root === null) {
    return []
  }
  let queue = []
  queue.push(root)
  let res = []
  while (queue.length) {
    let size = queue.length
    let level = []
    for (let i = 0; i < size; i++) {
      let temp = queue.shift()
      level.push(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
    res.push(level)
  }
  return res
}
module.exports = {
  levelOrder: levelOrder,
}
