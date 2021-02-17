var rand10 = function () {
  let num = (rand7() - 1) * 7 + rand7()
  while (num > 40) {
    num = (rand7() - 1) * 7 + rand7()
  }
  return 1 + (num % 10)
}
