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
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
function lowestCommonAncestor(root, o1, o2) {
  if (root === null) {
    return -1
  }
  if (root.val === o1 || root.val === o2) {
    return root.val
  }
  let left = lowestCommonAncestor(root.left, o1, o2)
  let right = lowestCommonAncestor(root.right, o1, o2)
  if (left !== -1 && right !== -1) {
    return root.val
  }
  if (left !== -1) {
    return left.val
  }
  if (right !== -1) {
    return right.val
  }
  return -1
}
module.exports = {
  lowestCommonAncestor: lowestCommonAncestor,
}
