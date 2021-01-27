var partitionLabels = function (S) {
  let map = {}
  for (let i = 0; i < S.length; i++) {
    let temp = S[i]
    if (!map[temp]) {
      map[temp] = [i, i]
    } else {
      map[temp][1] = i
    }
  }
  let res = []
  let values = Object.values(map)
  let temp = values[0]
  let right = temp[1]
  for (let i = 1; i < values.length; i++) {
    if (values[i][0] > right) {
      res.push(right - temp[0] + 1)
      temp = values[i]
      right = temp[1]
    } else {
      if (values[i][1] > right) {
        right = values[i][1]
      }
    }
  }
  res.push(right - temp[0] + 1)
  return res
}

console.log(partitionLabels('ababcbacadefegdehijhklij'))
