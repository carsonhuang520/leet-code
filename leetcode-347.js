// var topKFrequent = function (nums, k) {
//   let map = {}
//   let pq = new PriorityQueue(k, (a, b) => map[a] - map[b] < 0)
//   for (let i = 0; i < nums.length; i++) {
//     if (!map[nums[i]]) {
//       map[nums[i]] = 0
//     }
//     map[nums[i]]++
//   }
//   let arr = Array.from(new Set(nums))
//   for (let i = 0; i < arr.length; i++) {
//     pq.enqueue(arr[i])
//   }
//   return pq.maxHeap.data
// }

// 桶排序
var topKFrequent = function (nums, k) {
  let map = new Map()
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    let value = map.get(nums[i])
    if (value === undefined) {
      value = 0
      map.set(nums[i], value)
    }
    map.set(nums[i], ++value)
    max = Math.max(max, value)
  }
  let buckets = new Array(max + 1)
  for (let key of map.keys()) {
    let value = map.get(key)
    if (!buckets[value]) {
      buckets[value] = []
    }
    buckets[value].push(key)
  }
  console.log(buckets)
  let res = []
  for (let i = buckets.length - 1; i >= 0; i--) {
    while (buckets[i] && buckets[i].length) {
      if (k > 0) {
        res.push(buckets[i].shift())
        k--
      } else {
        break
      }
    }
  }
  return res
}

console.log(topKFrequent([1, 2], 2))
