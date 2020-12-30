var restoreIpAddresses = function (s) {
  let res = []
  const backtrack = (track, start) => {
    // 满4段，且字符已耗尽，加入结果中
    if (track.length === 4 && start === s.length) {
      res.push(track.join('.'))
      return
    }
    // 满4段，但是字符还未耗尽，不用往下选了
    if (track.length === 4 && start < s.length) {
      return
    }
    for (let i = 1; i <= 3; i++) {
      // 枚举出选择，三种切割长度
      // 加上要切的长度就越界，那么不能切这个长度
      if (i + start - 1 > s.length) {
        return
      }
      // 不能切出 0x、0xx 这种形式
      if (i !== 1 && s[start] === '0') {
        return
      }
      // 当前切出的片段
      const str = s.substring(start, start + i)
      // 不能大于255
      if (i === 3 && +str > 255) {
        return
      }
      // 做选择
      track.push(str)
      backtrack(track, start + i)
      // 撤销选择
      track.pop()
    }
  }
  backtrack([], 0)
  return res
}

console.log(restoreIpAddresses('25525511135'))
