/* 前序遍历 */
// function Serialize(pRoot) {
//   let res = ''
//   const helper = (pRoot) => {
//     if (pRoot === null) {
//       res += '#,'
//       return
//     }
//     res += pRoot.val
//     res += ','
//     helper(pRoot.left)
//     helper(pRoot.right)
//   }
//   helper(pRoot)
//   console.log(res)
//   return res
// }
// function Deserialize(s) {
//   let datas = s.split(',')
//   const helper = (nums) => {
//     if (nums.length === 0) {
//       return null
//     }
//     let top = nums.shift()
//     if (top === '#') {
//       return null
//     }
//     let root = new TreeNode(parseInt(top))
//     root.left = helper(nums)
//     root.right = helper(nums)
//     return root
//   }
//   return helper(datas)
// }
/* 后序遍历 */
// function Serialize(pRoot) {
//   let res = ''
//   const helper = (pRoot) => {
//     if (pRoot === null) {
//       res += '#,'
//       return
//     }
//     helper(pRoot.left)
//     helper(pRoot.right)
//     res += pRoot.val
//     res += ','
//   }
//   helper(pRoot)
//   return res
// }
// function Deserialize(s) {
//   let datas = s.split(',')
//   datas = datas.slice(0, datas.length - 1)
//   const helper = (nums) => {
//     if (nums.length === 0) {
//       return null
//     }
//     let top = nums.pop()
//     if (top === '#') {
//       return null
//     }
//     let root = new TreeNode(parseInt(top))
//     root.right = helper(nums)
//     root.left = helper(nums)
//     return root
//   }
//   return helper(datas)
// }
/* 层序遍历 */
function Serialize(pRoot) {
  if (pRoot === null) {
    return ''
  }
  let res = ''
  let queue = []
  queue.push(pRoot)
  while (queue.length) {
    let cur = queue.shift()
    if (cur === null) {
      res += '#,'
      continue
    }
    res += cur.val
    res += ','
    queue.push(cur.left)
    queue.push(cur.right)
  }
  return res
}
function Deserialize(s) {
  if (s === '') {
    return null
  }
  let datas = s.split(',')
  datas = datas.slice(0, datas.length - 1)
  let queue = []
  let root = new TreeNode(datas[0])
  queue.push(root)
  for (let i = 1; i < datas.length; ) {
    let cur = queue.shift()
    let left = datas[i++]
    if (left !== '#') {
      cur.left = new TreeNode(parseInt(left))
      queue.push(cur.left)
    } else {
      cur.left = null
    }
    let right = datas[i++]
    if (right !== '#') {
      cur.right = new TreeNode(parseInt(right))
      queue.push(cur.right)
    } else {
      cur.right = null
    }
  }
  return root
}
module.exports = {
  Serialize: Serialize,
  Deserialize: Deserialize,
}
