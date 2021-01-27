var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return b[0] - a[0]
    }
  })
  let res = []
  for (let p of people) {
    if (res.length <= p[1]) {
      res.push(p)
    } else {
      res.splice(p[1], 0, p)
    }
  }
  return res
}

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
)
