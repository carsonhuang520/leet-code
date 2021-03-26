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
function zigzagLevelOrder(root) {
  if (root === null) {
    return []
  }
  let res = []
  let queue = []
  let level = 0
  queue.push(root)
  while (queue.length) {
    let size = queue.length
    let le = []
    for (let i = 0; i < size; i++) {
      let temp = queue.shift()
      le.push(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
    if (level % 2 === 1) {
      le.reverse()
    }
    res.push(le)
    level++
  }
  return res
}
module.exports = {
  zigzagLevelOrder: zigzagLevelOrder,
}
