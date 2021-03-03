function GetNext(pNode) {
  if (pNode === null) {
    return null
  }
  let next = null
  if (pNode.right !== null) {
    let right = pNode.right
    while (right.left !== null) {
      right = right.left
    }
    next = right
  } else if (pNode.next !== null) {
    let curr = pNode
    let par = pNode.next
    while (par !== null && curr === par.right) {
      curr = par
      par = par.next
    }
    next = par
  }
  return next
}
