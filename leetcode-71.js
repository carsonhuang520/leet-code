/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  if (path.length === 1) {
    return path
  }
  let res = []
  for (let i = 0; i < path.length; ) {
    let ch = path.charAt(i)
    if (ch === '/') {
      if (i !== path.length - 1 && res[res.length - 1] !== '/') {
        res.push(ch)
      }
      i++
    } else if (ch === '.') {
      if (path.charAt(i + 1) !== '.') {
        if (res.length !== 1) {
          res.pop()
        }
        i++
      } else {
        if (res.length !== 1) {
          res.pop()
        }
        let t
        while ((t = res[res.length - 1]) !== '/') {
          res.pop()
        }
        i += 2
      }
    } else {
      res.push(ch)
      i++
    }
  }
  if (res.length !== 1 && res[res.length - 1] === '/') {
    res.pop()
  }
  return res.join('')
}

var simplifyPath2 = (path) => {
  const paths = path.split('/')
  const res = []
  for (let i = 0; i < paths.length; i++) {
    if (paths[i] !== '' && paths[i] !== '.' && paths[i] !== '..') {
      res.push(paths[i])
    } else if (paths[i] === '..') {
      res.pop()
    }
  }
  if (res.length === 0) {
    return '/'
  } else {
    return res.reduce((prev, item) => {
      prev += '/' + item
      return prev
    }, '')
  }
}

console.log(simplifyPath2('/home/'))
console.log(simplifyPath2('/../'))
console.log(simplifyPath2('/home//foo/'))
console.log(simplifyPath2('/a/./b/../../c/'))
console.log(simplifyPath2('/a/../../b/../c//.//'))
console.log(simplifyPath2('/a//b////c/d//././/..'))
