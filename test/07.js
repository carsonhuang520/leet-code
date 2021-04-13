function test(str) {
  let window = {}
  let left = 0
  let right = 0
  let need = {}
  let max = 0
  while(right < str.length) {
    let c = str[right]
    right++
    if(!window[c]){
      window[c] = 1
      max = Math.max(max, right - left)
    } else {
      window[c]++
    }
    while(window[c] > 1) {
      let t = str[left]
      left++
      window[t]--
    }
  }
}