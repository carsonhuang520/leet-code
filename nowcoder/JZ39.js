/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  if (pRoot === null) {
    return true
  }
  return (
    IsBalanced_Solution(pRoot.left) &&
    IsBalanced_Solution(pRoot.right) &&
    Math.abs(TreeDepth(pRoot.left) - TreeDepth(pRoot.right)) <= 1
  )
}
function TreeDepth(pRoot) {
  if (pRoot === null) {
    return 0
  }
  return Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1
}
module.exports = {
  IsBalanced_Solution: IsBalanced_Solution,
}
