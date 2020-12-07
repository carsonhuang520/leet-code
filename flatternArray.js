var flattern = function (array) {
  let result = []
  var fn = (array) => {
    array.forEach((item) => {
      if (Array.isArray(item)) {
        fn(item)
      } else {
        result.push(item)
      }
    })
  }
  fn(array)
  return result
}

// concat 会返回一个新函数
var flattern2 = (array) =>
  array.reduce((prev, item) => {
    if (Array.isArray(item)) {
      prev = prev.concat(flattern2(item))
    } else {
      prev.push(item)
    }
    return prev
  }, [])

let flattent = (nestedList) =>
  nestedList.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? flattent(cur) : cur),
    []
  )

console.log(flattern2([1, [2, [3, [4, 5]]], 6]))
