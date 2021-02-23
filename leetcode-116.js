var connect = function (root) {
  if (root === null) {
    return null
  }
  const connectNode = (node1, node2) => {
    if (node1 === null || node2 === null) {
      return
    }
    node1.next = node2
    connectNode(node1.left, node1.right)
    connectNode(node2.left, node2.right)
    connectNode(node1.right, node2.left)
  }
  connectNode(root.left, root.right)
  return root
}
