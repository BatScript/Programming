//leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/?envType=study-plan-v2&envId=top-interview-150

https: var removeDuplicates = function (nums) {
  let i = 0
  while (i <= nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      console.log(nums)
    } else {
      i++
    }
  }
  return nums.length
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
