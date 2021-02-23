var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) {
    return null
  }
  let max = Math.max(...nums)
  let index = nums.findIndex((item) => item === max)
  let left = nums.slice(0, index)
  let right = nums.slice(index + 1)
  let root = new TreeNode(max)
  root.left = constructMaximumBinaryTree(left)
  root.right = constructMaximumBinaryTree(right)
  return root
}

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]))
