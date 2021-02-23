var findDuplicateSubtrees = function (root) {
  let map = new Map()
  let res = []
  const traverse = (root) => {
    if (root === null) {
      return '#'
    }
    let left = traverse(root.left)
    let right = traverse(root.right)
    let subTree = left + ',' + right + ',' + root.val
    if (map.get(subTree) === 1) {
      res.push(root)
    }
    map.set(subTree, map.get(subTree) ? map.get(subTree) + 1 : 1)
    return subTree
  }
  traverse(root)
  return res
}
