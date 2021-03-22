const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.on('line', function (line) {
  const tokens = line.split(' ')
  console.log(sum(parseInt(tokens[0]), parseInt(tokens[1])))
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]))
})
function sum(n, m) {
  let res = n
  m--
  while (m--) {
    n = Math.sqrt(n)
    res += n
  }
  return res.toFixed(2)
}
