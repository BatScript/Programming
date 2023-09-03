function isPalindrome(s) {
    s = s.replaceAll(' ', '').toLowerCase()
    console.log(s);
  let mid = Math.round(s.length / 2)
  let i = 0
  let j = s.length - 1
  while (i <= mid && j >= mid) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

console.log(isPalindrome('ASSSA kjhkjhk  jguythj  '))