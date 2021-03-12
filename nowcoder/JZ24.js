function FindPath(root, expectNumber) {
  let res = []
  if (root === null) {
    return res
  }
  if (root.left === null && root.right === null && expectNumber === root.val) {
    res.push([root.val])
    return res
  }
  let left = FindPath(root.left, expectNumber - root.val)
  for (let i = 0; i < left.length; i++) {
    res.push([root.val, ...left[i]])
  }
  let right = FindPath(root.right, expectNumber - root.val)
  for (let i = 0; i < right.length; i++) {
    res.push([root.val, ...right[i]])
  }
  return res
}
module.exports = {
  FindPath: FindPath,
}
