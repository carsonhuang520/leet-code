let map = new Map()
var fib = function (n) {
  if (n < 2) {
    return n
  }
  if (map.get(n)) {
    return map.get(n)
  }
  map.set(n - 1, fib(n - 1))
  map.set(n - 2, fib(n - 2))

  return (map.get(n - 1) + map.get(n - 2)) % 1000000007
}

console.log(fib(100))
