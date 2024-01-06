// * Dalip Bhai ka sawaal

// const deleteConseutive = (arr) => {
//   const newArr = []

//   arr.forEach((element, index) => {
//     newArr.push(element)
//     if (index > 0) {
//       if (element === newArr[index - 1]) {
//         newArr.pop()
//         newArr.pop()
//       }
//     }
//   })

//   return newArr
// }

// const arr = ['ab', 'aa', 'aa', 'bcd', 'ab']

// const final = deleteConseutive(arr)

// console.log(final)

// * Subarray of k length with max sum.

// const arr = [1, 2, 3, 4, 5, 6, 7]

// const maxSumSubArray = (arr, k) => {
//   let finalSum = arr.slice(0, k).reduce((acc, curr) => acc + curr)

//   console.log(finalSum)

//   for (let i = k; i < arr.length; i++) {
//     const currentSum = finalSum + arr[i] - arr[i - k]

//     finalSum = Math.max(currentSum, finalSum)
//   }

//   return finalSum
// }

// console.log(maxSumSubArray(arr, 4))

// const smallestSubArrayWithGivenSum = (arr, givenSum) => {}

// * Group anagrams

// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

// const groupAnagrams = (strs) => {
//   const hashMap = new Map()
//   let newArrIndex = 0
//   const groupedAnagramsArray = []
//   for (let i = 0; i < strs.length; i++) {
//     const mapKey = strs[i].split('').sort().join('')
//     if (!hashMap.has(mapKey)) {
//       hashMap.set(mapKey, newArrIndex)
//       groupedAnagramsArray[newArrIndex] = [strs[i]]
//       newArrIndex++
//     } else {
//       groupedAnagramsArray[hashMap.get(mapKey)].push(strs[i])
//     }
//   }
//   return groupedAnagramsArray
// }

// const ans = groupAnagrams(strs)

// console.log(ans)

// * Top K frequent elements

// const nums = [1, 1, 1, 2, 2, 3]
// const k = 2

// const topKFrequent = (nums, k) => {
//   const hashMap = new Map()

//   for (let i = 0; i < nums.length; i++) {
//     if (hashMap.has(nums[i])) {
//       hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
//     } else {
//       hashMap.set(nums[i], 1)
//     }
//   }

//   const sortedArr = Array.from(hashMap.entries()).sort((a, b) => b[1] - a[1])

//   const finalAns = []

//   for (let i = 0; i < k; i++) {
//     finalAns.push(sortedArr[i][0])
//   }

//   return finalAns
// }

// const output = topKFrequent(nums, k)

// console.log(output)

// * Product of Array Except Self

// const nums = [0, 0, 2, 4]

// const getProduct = (arr, except) =>
// ! time complexity issue
//   arr.reduce((acc, curr, index) => {
//     if (index === except) {
//       return acc
//     } else {
//       return curr * acc
//     }
//   }, 1)

// const productExceptSelf = (nums) => {
// * legit solution
//   const leftArray = []
//   const rightArray = []
//   let leftProduct = 1
//   let rightProduct = 1
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       leftArray.push(leftProduct)
//     } else {
//       leftProduct = leftProduct * nums[i - 1]
//       leftArray.push(leftProduct)
//     }
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (i === nums.length - 1) {
//       rightArray[i] = rightProduct
//     } else {
//       rightProduct = rightProduct * nums[i + 1]
//       rightArray[i] = rightProduct
//     }
//   }

//   const finalArr = []
//   for (let i = 0; i < nums.length; i++) {
//     finalArr.push(leftArray[i] * rightArray[i])
//   }

//   return finalArr
// }

// console.log(productExceptSelf(nums))

// *Longest Consecutive Sequence
// const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// const longestConsecutive = (nums) => {
//   if (nums.length === 0) {
//     return 0
//   }
//   const sortedNumbers = nums.sort((a, b) => a - b)

//   let maxLength = 1
//   let currLength = 1

//   for (let i = 1; i < sortedNumbers.length; i++) {
//     if (sortedNumbers[i] - sortedNumbers[i - 1] === 1) {
//       currLength = currLength + 1
//       maxLength = Math.max(currLength, maxLength)
//     } else if (nums[i] === nums[i - 1]) {
//       continue
//     } else {
//       currLength = 1
//     }
//   }

//   return maxLength
// }

// console.log(longestConsecutive(nums))

// * Valid palindrome

// const s = 'A man, a plan, a canal: Panama'

// const isPalindrome = (s) => {
//   const regex = /[^a-zA-Z]/g
//   let convertedStr = s.replace(regex, '').toLowerCase().split('')

//   for (let i = 0; i < convertedStr.length; i++) {
//     if (convertedStr[i] !== convertedStr[convertedStr.length - i - 1]) {
//       return false
//     }
//   }

//   return true
// }

// console.log(isPalindrome(s))

// * Buy Two Chocolates

// const prices = [98, 54, 6, 34, 66, 63, 52, 39]
// const money = 62

// const buyChoco = (prices, money) => {
//   let minSum = Number.MAX_SAFE_INTEGER
//   let finalRemainder
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = 0; j < prices.length; j++) {
//       if (i !== j) {
//         let currentSum = prices[i] + prices[j]
//         minSum = Math.min(minSum, currentSum)
//       }
//     }
//   }

//   return money - minSum >= 0 ? money : money - minSum
// }

// console.log(buyChoco(prices, money))

// * Two sum 2

// const numbers = [2, 7, 11, 15]
// const target = 9

// const twoSum = (numbers, target) => {
// ! Time limit exceeded
//   let arr = []
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (i !== j) {
//         if (numbers[i] + numbers[j] === target) {
//           if (numbers[i] >= numbers[j]) {
//             arr = [j + 1, i + 1]
//           } else {
//             arr = [i + 1, j + 1]
//           }
//         }
//       }
//     }
//   }
//   return arr
// * legit solution
//   let p1 = 0
//   let p2 = numbers.length - 1
//   while (p1 < p2) {
//     const sum = numbers[p1] + numbers[p2]
//     if (sum > target) {
//       p2--
//     } else if (sum < target) {
//       p1++
//     } else {
//       return [p1 + 1, p2 + 1]
//     }
//   }

//   return [-1, -1]
// }

// console.log(twoSum(numbers, target))

// * 3 Sum

// const nums = [-1, 0, 1, 2, -1, -4]

// ! with duplicate arrays

// var threeSum = function (nums) {
//   const solution = []
//   for (let i = 0; i < nums.length; i++) {
//     // two sum from here
//     const hashMap = new Map()
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         let complement = 0 - nums[i] - nums[j]
//         if (hashMap.has(complement)) {
//           solution.push([nums[i], nums[j], complement])
//         }
//         hashMap.set(nums[j], j)
//       }
//     }
//   }

//   return solution
// }

// console.log(threeSum(nums))

// * 2 Sum

// const nums = [2, 7, 11, 15]
// const target = 9

// const twoSum = (nums, target) => {
//   const hashMap = new Map()

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]
//     if (hashMap.has(complement)) {
//       return [nums[i], complement]
//     }
//     hashMap.set(nums[i], i)
//   }
//   return [-1, -1]
// }

// console.log(twoSum(nums, target))

// * Maximum Score After Splitting a String

// const s = '00000'

// const getOccurences = (str, chr) => {
//   let count = 0
//   for (let ch of str) {
//     if (ch === chr) {
//       count++
//     }
//   }
//   return count
// }

// var maxScore = function (s) {
//   let zeroes = 0
//   let ones = getOccurences(s, '1')

//   let score = 0

//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === '0') {
//       zeroes += 1
//     } else {
//       ones -= 1
//     }

//     score = Math.max(score, zeroes + ones)
//   }

//   return score
// }

// console.log(maxScore(s))

// * Path Crossing

// const path = 'NES'
// const path2 = 'NESWW'
// const path3 = 'ESSWNN'

// var isPathCrossing = function (path) {
// ! Slow as fuck 5%
// let co_ordinates = [0, 0]
// let co_ordinate_arr = [[0, 0]]
// for (let str of path) {
//   if (str === 'N') {
//     co_ordinates = [co_ordinates[0], co_ordinates[1] + 1]
//     console.log(co_ordinates)
//     co_ordinate_arr.push(co_ordinates)
//   }
//   if (str === 'E') {
//     co_ordinates = [co_ordinates[0] + 1, co_ordinates[1]]
//     console.log(co_ordinates)
//     co_ordinate_arr.push(co_ordinates)
//   }
//   if (str === 'W') {
//     co_ordinates = [co_ordinates[0] - 1, co_ordinates[1]]
//     console.log(co_ordinates)
//     co_ordinate_arr.push(co_ordinates)
//   }
//   if (str === 'S') {
//     co_ordinates = [co_ordinates[0], co_ordinates[1] - 1]
//     console.log(co_ordinates)
//     co_ordinate_arr.push(co_ordinates)
//   }
// }

// const stringified_arr = co_ordinate_arr.map(JSON.stringify)

// const unique_stringified_arr = [...new Set(stringified_arr)]

// console.log(stringified_arr, unique_stringified_arr)

// return unique_stringified_arr.length !== co_ordinate_arr.length

// * Slightly Faster 45%
//   const hashMap = new Map()

//   let co_ordinates = [0, 0]

//   hashMap.set(JSON.stringify(co_ordinates), true)

//   for (let str of path) {
//     if (str === 'N') {
//       co_ordinates = [co_ordinates[0], co_ordinates[1] + 1]
//       if (hashMap.has(JSON.stringify(co_ordinates))) {
//         return true
//       } else {
//         hashMap.set(JSON.stringify(co_ordinates), true)
//       }
//     }
//     if (str === 'E') {
//       co_ordinates = [co_ordinates[0] + 1, co_ordinates[1]]
//       if (hashMap.has(JSON.stringify(co_ordinates))) {
//         return true
//       } else {
//         hashMap.set(JSON.stringify(co_ordinates), true)
//       }
//     }
//     if (str === 'W') {
//       co_ordinates = [co_ordinates[0] - 1, co_ordinates[1]]
//       if (hashMap.has(JSON.stringify(co_ordinates))) {
//         return true
//       } else {
//         hashMap.set(JSON.stringify(co_ordinates), true)
//       }
//     }
//     if (str === 'S') {
//       co_ordinates = [co_ordinates[0], co_ordinates[1] - 1]
//       if (hashMap.has(JSON.stringify(co_ordinates))) {
//         return true
//       } else {
//         hashMap.set(JSON.stringify(co_ordinates), true)
//       }
//     }
//   }

//   return false
// }

// console.log(isPathCrossing(path2))

// * Merge Strings Alternately

// const word1 = 'abcd'
// const word2 = 'pq'

// var mergeAlternately = function (word1, word2) {
// ! Slow as fuck
// let newstr = ''
// let w1 = 0
// let w2 = 0
// for (let i = 0; i < word1.length + word2.length; i++) {
//   if (i % 2 === 0) {
//     if (word1[w1]) {
//       newstr += word1[w1]
//       w1++
//     } else {
//       newstr += word2[w2]
//       w2++
//     }
//   } else {
//     if (word2[w2]) {
//       newstr += word2[w2]
//       w2++
//     } else {
//       newstr += word1[w1]
//       w1++
//     }
//   }
// }
// * Faster
// let newstr = ''
// for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
//   if (i < word1.length) {
//     newstr += word1[i]
//   }
//   if (i < word2.length) {
//     newstr += word2[i]
//   }
// }
// return newstr
// }

// console.log(mergeAlternately(word1, word2))

// * Greatest Common Divisor of Strings

// todo

// const str1 = 'ABCABC'
// const str2 = 'ABC'

// const divideStrings = (dividend, divisor) => {}

// var gcdOfStrings = function (str1, str2) {}

// console.log(gcdOfStrings(str1, str2))

// * Move Zeroes

// const swap = (arr, i, j) => {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

// const arr = '01001110'

// const moveZeroes = (arr) => {
//   let arrOfZeroes = []
//   let arrOfOnes = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '0') {
//       arrOfZeroes.push('0')
//     } else {
//       arrOfOnes.push('1')
//     }
//   }

//   return [...arrOfOnes, ...arrOfZeroes].join('')
// }

// console.log(moveZeroes(arr))

// * Minimum Changes To Make Alternating Binary String

// const s = '1111'

// var minOperations = function (s) {
//   let count_a = 0
//   let count_b = 0
//   for (let i = 0; i < s.length; i++) {
//     // when it starts with 1
//     if (i % 2 === 0) {
//       if (s[i] !== '1') {
//         count_a += 1
//       }
//     } else {
//       if (s[i] !== '0') {
//         count_a += 1
//       }
//     }
//   }

//   for (let i = 0; i < s.length; i++) {
//     // when it starts with 1
//     if (i % 2 === 0) {
//       if (s[i] !== '0') {
//         count_b += 1
//       }
//     } else {
//       if (s[i] !== '1') {
//         count_b += 1
//       }
//     }
//   }
//   return Math.min(count_a, count_b)
// }

// console.log(minOperations(s))

// * Check If Two String Arrays are Equivalent

// const word1 = ['ab', 'c']
// const word2 = ['a', 'bc']

// var arrayStringsAreEqual = function (word1, word2) {
//   return (
//     word1.reduce((acc, curr) => acc + curr) ===
//     word2.reduce((acc, curr) => acc + curr)
//   )
// }

// console.log(arrayStringsAreEqual(word1, word2))

// * Longest Palindromic Substring
// todo
// const s = 'babad'

// const checkPalindrome = (s) => {
//   for (let i = 0; i < s.length; i++){
//     if (s[i] !== s[s.length - i - 1]) {
//       return false
//     }
//   }
//   return true
// }

// var longestPalindrome = function (s) {

// }

// console.log(longestPalindrome(s))

// * Decode Ways
// todo
// const s1 = '12' //2
// const s2 = '226' //3
// const s3 = '06' //0
// const s4 = '02204'

// var numDecodings = function (s) {
//   // for single digit
//   let count = 1

//   // for double digit
//   let f = 0
//   let l = 1
//   for (let i = 0; i < s.length; i += 2) {
//     if (s[f] !== '0') {
//       count += 1
//     }
//     f++
//     l++
//   }

//   if (s.length % 2 === 0) {
//     count += 1
//   }

// for (let i = 0; i < s.length; i += 2) {
//   if (s[i] !== '0') {
//     count += 1
//   }
// }

//   return count
// }

// console.log(numDecodings(s2))

// * Container With Most Water
// Self note: amt of water = shorter of two poles * distance
// tags: two pointer.
// const height = [2, 3, 4, 5, 18, 17, 6]

// var maxArea = function (height) {
//   let left = 0
//   let right = height.length - 1
//   let maxArea = 0
//   while (left <= right) {
//     let area = Math.min(height[right], height[left]) * (right - left)
//     maxArea = Math.max(maxArea, area)

//     if (height[left] >= height[right]) {
//       right--
//     } else {
//       left++
//     }
//   }
//   return { maxArea, left, right }
// }

// console.log(maxArea(height))

// * keep this line at bottom always
// todo: check for todos
