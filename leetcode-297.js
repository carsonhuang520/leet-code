/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 后序遍历方法实现

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = ''
  let helper = function (root) {
    if (root === null) {
      res += '#,'
      return
    }
    helper(root.left)
    helper(root.right)
    res += root.val
    res += ','
  }
  helper(root)
  return res
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let nodes = data.substring(0, data.length - 1).split(',')
  let helper = function (nodes) {
    if (nodes.length === 0) {
      return null
    }
    let last = nodes.pop()
    if (last === '#') {
      return null
    }
    let root = new TreeNode(last)
    root.right = helper(nodes)
    root.left = helper(nodes)
    return root
  }
  return helper(nodes)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// 层序遍历方法实现
var serialize = function (root) {
  if (root === null) {
    return ''
  }
  let res = ''
  let queue = []
  queue.push(root)
  while (queue.length) {
    let temp = queue.shift()
    if (!temp) {
      res += '#,'
      continue
    }
    res += temp.val
    res += ','
    queue.push(temp.left)
    queue.push(temp.right)
  }
  return res
}

var deserialize = function (data) {
  if (data === '') {
    return null
  }
  let nodes = data.substring(0, data.length - 1).split(',')
  let queue = []
  let root = new TreeNode(nodes[0])
  queue.push(root)
  for (let i = 1; i < nodes.length; ) {
    let parent = queue.shift()
    let left = nodes[i++]
    if (left !== '#') {
      parent.left = new TreeNode(left)
      queue.push(parent.left)
    } else {
      parent.left = null
    }
    let right = nodes[i++]
    if (right !== '#') {
      parent.right = new TreeNode(right)
      queue.push(parent.right)
    } else {
      parent.right = null
    }
  }
  return root
}
