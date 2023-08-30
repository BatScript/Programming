// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
// Same as merge sort but the trick is to return nums1 after modification

var merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while (j >= 0) {
    if (nums1[i] >= nums2[j] && i >= 0) {
      nums1[k] = nums1[i]
      k--
      i--
    } else {
      nums1[k] = nums2[j]
      k--
      j--
    }
  }
}

const nums1 = [0]
const m = 0
const nums2 = [1]
const n = 1

const ans = merge(nums1, m, nums2, n)

console.log(ans)

// 1, 2, 3, 0, 0, 0 a[0] vs b[0] a[0] - 1

// 1, 2, 3, 0, 0, 0 a[1] vs b[0] a[1] - 2

// 1, 2, 2, 0, 0, 0 a[2] vs b[0] b[0] - 2
