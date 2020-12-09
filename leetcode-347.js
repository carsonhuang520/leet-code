var topKFrequent = function (nums, k) {
  let map = {}
  let pq = new PriorityQueue(k, (a, b) => map[a] - map[b] < 0)
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0
    }
    map[nums[i]]++
  }
  let arr = Array.from(new Set(nums))
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(arr[i])
  }
  return pq.maxHeap.data
}

topKFrequent([1, 1, 1, 2, 2, 3], 2)
