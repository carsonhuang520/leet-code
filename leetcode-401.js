var readBinaryWatch = function (num) {
  let res = []
  const map = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32]

  const backtrack = (track, start, hour, min) => {
    if (track.length === num) {
      res.push(`${hour}:${min >= 10 ? min : '0' + min}`)
      return
    }

    for (let i = start; i <= 10; i++) {
      if (i < 5) {
        if (hour + map[i - 1] >= 12) {
          continue
        }
        track.push(map[i - 1])
        hour += map[i - 1]
        backtrack(track, i + 1, hour, min)
        track.pop()
        hour -= map[i - 1]
      } else {
        if (min + map[i - 1] >= 60) {
          continue
        }
        track.push(map[i - 1])
        min += map[i - 1]
        backtrack(track, i + 1, hour, min)
        track.pop()
        min -= map[i - 1]
      }
    }
  }

  backtrack([], 1, 0, 0)
  return res
}

console.log(readBinaryWatch(2))

/* 
  [
    "0:03","0:05","0:06","0:09","0:10",
    "0:12","0:17","0:18","0:20","0:24",
    "0:33","0:34","0:36","0:40","0:48",
    "1:01","1:02","1:04","1:08","1:16",
    "1:32","2:01","2:02","2:04","2:08",
    "2:16","2:32","3:00","4:01","4:02",
    "4:04","4:08","4:16","4:32","5:00",
    "6:00","8:01","8:02","8:04","8:08",
    "8:16","8:32","9:00","10:00"
  ]
*/
