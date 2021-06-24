/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

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
    }
    res += root.val
    res += ','
    helper(root.left)
    helper(root.right)
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
  let nodes = data.split(',')
  let helper = function (nodes) {
    if (nodes.length === 0) {
      return null
    }
    let first = nodes.shift()
    if (first === '#') {
      return null
    }
    let root = new TreeNode(first)
    root.left = helper(nodes)
    root.right = helper(nodes)
    return root
  }
  return helper(nodes)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
