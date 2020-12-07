let levelOrder = (root) => {
  if (root === null) {
    return []
  }
  let stack = []
  stack.push(root)
  let result = []
  let count = 1
  while (stack.length !== 0) {
    let size = stack.length
    let level = []
    for (let i = 0; i < size; i++) {
      let temp = stack.shift()
      level.push(temp.val)
      if (temp.left !== null) {
        stack.push(temp.left)
      }
      if (temp.right !== null) {
        stack.push(temp.right)
      }
    }
    if (count % 2 === 0) {
      result.push(level.reverse())
    } else {
      result.push(level)
    }
    count++
  }
  return result
}
