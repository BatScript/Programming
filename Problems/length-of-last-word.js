// https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=top-interview-150

var lengthOfLastWord = function (s) {
  let n = s.length
  let count = 0
  let lastWordFound = false
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      lastWordFound = true
      count++
      if (i === 0) {
        return count
      }
    } else {
      if (lastWordFound) {
        return count
      } else {
        continue
      }
    }
  }
  return count
  // Or just use trim + split
}

const ans = lengthOfLastWord('     ')
console.log(ans)
