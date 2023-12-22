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

// * Valid Sudoku
// Abhi k liye nhi kar rha

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

/*
8:54
56:6

*/

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
