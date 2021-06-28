function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

function BST() {}

// 搜索二叉树创建
BST.prototype.create = function (nums) {
  let root = new TreeNode(nums[0])
  for (let i = 1; i < nums.length; i++) {
    this.insert(root, nums[i])
  }
  return root
}

// 搜索二叉树验证合法
BST.prototype.validate = function (root) {
  var helper = (root, min, max) => {
    if (root === null) {
      return true
    }
    if (min !== null && root.val <= min) {
      return false
    }
    if (max !== null && root.val >= max) {
      return false
    }
    return (
      this.helper(root.left, min, root) && this.helper(root.right, root, max)
    )
  }
  return helper(root, null, null)
}

BST.prototype.getMin = function (root) {
  while (root.left !== null) {
    root = root.left
  }
  return root
}

// 搜索二叉树插入节点
BST.prototype.insert = function (root, val) {
  if (root === null) {
    return new TreeNode(val)
  }
  if (root.val === val) {
    return root
  }
  if (root.val > val) {
    root.left = this.insert(root.left, val)
  }
  if (root.val < val) {
    root.right = this.insert(root.right, val)
  }
  return root
}

// 搜索二叉树查找节点
BST.prototype.search = function (root, val) {
  if (root === null) {
    return null
  }
  if (root.val === val) {
    return root
  }
  if (root.val > val) {
    return this.search(root.left, val)
  }
  if (root.val < val) {
    return this.search(root.right, val)
  }
}

// 搜索二叉树删除节点
BST.prototype.delete = function (root, val) {
  if (root === null) {
    return null
  }
  if (root.val === val) {
    if (root.left === null) {
      return root.right
    }
    if (root.right === null) {
      return root.left
    }
    if (root.left !== null && root.right !== null) {
      let minNode = this.getMin(root.right)
      root.val = minNode.val
      root.right = this.delete(root.right, val)
    }
  }
  if (root.val > val) {
    root.left = this.delete(root.left, val)
  }
  if (root.val < val) {
    root.right = this.delete(root.right, val)
  }
  return root
}
