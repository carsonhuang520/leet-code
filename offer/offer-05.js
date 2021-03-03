var replaceSpace = function (s) {
  let t = s.split(' ')
  return t.join('%20')
}

console.log(replaceSpace('hello world'))
