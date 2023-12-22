const isPalindrome = (str) => {
  const len = str.length
  for (let i = 0; i < Math.round(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true
}

const largestOf = (arr) => {
  let largestIndex = 0
  arr.forEach((element, index) => {
    if (element.length > arr[largestIndex].length) {
      largestIndex = index
    }
  })
    return arr[largestIndex]
}

const largestPalindromicSubstr = (str) => {
  const palindromes = []
  const len = str.length
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let temp = str.slice(i, j)
      if (isPalindrome(temp)) {
        palindromes.push(temp)
      }
    }
  }
  return largestOf(palindromes)
}

const arr = largestPalindromicSubstr('abcmonsoonoosnomster')

console.log(arr)
