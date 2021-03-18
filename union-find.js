function UnionFind(n) {
  this.count = n
  this.size = new Array(n)
  this.parent = new Array(n)
  for (let i = 0; i < n; i++) {
    this.parent[i] = i
    this.size[i] = 1
  }
}
UnionFind.prototype.union = function (p, q) {
  let rootP = this.find(p)
  let rootQ = this.find(q)
  if (rootP === rootQ) {
    return
  }
  if (this.size[rootP] > this.size[rootQ]) {
    this.parent[rootQ] = rootP
    this.size[rootP] += this.size[rootQ]
  } else {
    this.parent[rootP] = rootQ
    this.size[rootQ] += this.size[rootP]
  }
  this.count--
}
UnionFind.prototype.connected = function (p, q) {
  return this.find(p) === this.find(q)
}
UnionFind.prototype.find = function (x) {
  while (this.parent[x] !== x) {
    this.parent[x] = this.parent[this.parent[x]]
    x = this.parent[x]
  }
  return x
}
UnionFind.prototype.getCount = function () {
  return this.count
}
