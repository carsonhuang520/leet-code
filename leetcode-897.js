// var increasingBST = function (root) {
//   const getRight = (root) => {
//     while (root !== null && root.right !== null) {
//       root = root.right
//     }
//     return root
//   }
//   const helper = (root) => {
//     if (root === null) {
//       return root
//     }
//     if (root.left === null && root.right === null) {
//       return root
//     }
//     let left = helper(root.left)
//     let right = helper(root.right)
//     root.left = null
//     if (left !== null) {
//       let temp = getRight(left)
//       temp.right = root
//       root.right = right
//       return left
//     } else {
//       root.right = right
//       return root
//     }
//   }
//   return helper(root)
// }

var increasingBST = function (root) {
  let res = new TreeNode(0)
  let prev = res
  const helper = (root) => {
    if (root === null) {
      return
    }
    helper(root.left)
    root.left = null
    prev.right = root
    prev = root
    helper(root.right)
  }
  helper(root)
  return res.right
}
