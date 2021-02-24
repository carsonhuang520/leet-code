// var findBottomLeftValue = function (root) {
//   if (root === null) {
//     return 0
//   }
//   let queue = []
//   let res
//   queue.push(root)
//   while (queue.length) {
//     let size = queue.length
//     for (let i = 0; i < size; i++) {
//       let temp = queue.shift()
//       if (i === 0) {
//         res = temp.val
//       }
//       if (temp.left) {
//         queue.push(temp.left)
//       }
//       if (temp.right) {
//         queue.push(temp.right)
//       }
//     }
//   }
//   return res
// }

var findBottomLeftValue = function (root) {
  let res = [0, -1]
  const helper = (root, level) => {
    if (root.left === null && root.right === null) {
      if (level > res[1]) {
        res[0] = root.val
        res[1] = level
      }
    }
    if (root.left !== null) {
      helper(root.left, level + 1)
    }
    if (root.right !== null) {
      helper(root.right, level + 1)
    }
  }
  helper(root, 0)
  return res[0]
}
