const isPrime = (number, divisor = 2) => {
  // * If a number is prime

  // loop approach
  //   for (let i = 2; i <= Math.sqrt(number); i++) {
  //     if (number % i === 0) {
  //       return false
  //     }
  //   }
  //   return true

  // Recursive approach
  if (number === 2) {
    return true
  }
  if (number % divisor === 0) {
    return false
  }
  if (divisor * divisor > number) {
    return true
  }
  return number, divisor + 1
}

const logNPrimes = (n) => {
  // * Logging prime until n
  let i = 2
  count = 0
  while (count < n) {
    if (isPrime(i)) {
      console.log(i)
      count++
    }
    i++
  }
}

const checkMultiplesOf = (...args) => {
  // * Checks multiple of
  const number = args[0]
  const divisorArr = args.splice(1)
  const finalArr = divisorArr.map((ele) => {
    if (number % ele !== 0) {
      return false
    } else {
      return true
    }
  })
  return finalArr.reduce((acc, n) => {
    return acc && n
  }, finalArr[0])
}

const findSum = (n) => {
  // * Finds sum of n numbers
  if (n === 1) {
    return 1
  }
  return n + findSum(n - 1)

  // return (n*(n+1))/2
}

const checkPalindrome = (str) => {
  // * Checks if given str is palindrome or not
  // two pointer approach
  // const strArray = str.split('')
  // const len = strArray.length
  // for (let i = 0; i < Math.floor(len/2); i++) {
  //   if (strArray[i] !== strArray[len - i - 1]) {
  //     return false
  //   }
  // }
  // return true

  // recursive approach
  if (str.length === 1) {
    return true
  }
  if (str[str.length - 1] === str[0]) {
    return checkPalindrome(str.slice(1, -1))
  } else {
    return false
  }
}

const reverseIt = (data) => {
  //* Reverses a string
  let newStr = ''
  for (let i = 0; i < data.length; i++) {
    newStr += data[data.length - 1 - i]
  }
  return newStr
  // * Reverses an array
  // let left = 0
  // let right = data.length - 1
  // while (left < right) {
  //   let temp = data[left]
  //   data[left] = data[right]
  //   data[right] = temp
  //   left++
  //   right--
  // }

  // return data
}

const getFactorialOf = (n) => {
  // * Returns the factorial of a number
  if (n === 1) {
    return 1
  }
  return getFactorialOf(n - 1) * n
}

const hasSubStr = (str, subStr) => {
  // * checks if given substr is in str
  return str.includes(subStr)
}

const pangramChecker = (str) => {
  // * Checks if string contains all alphabets
  const check = 'abcdefghijklmnopqrstuvwxyz'
  for (let character of check) {
    if (str.toLowerCase().indexOf(character) === -1) {
      return false
    }
  }
  return true
}

const removeDuplicates = (data) => {
  // * removing duplicates in a str
  // let newStr = ''
  // for (let i of data) {
  //   if (!newStr.includes(i)) {
  //     newStr+=i
  //   }
  // }
  // return newStr
  // * removing duplicates in a arr
  return new Set(data)
}

const findMaxMin = (arr) => {
  // * Finding max and min
  let min = arr[0]
  let max = arr[0]
  for (let ele of arr) {
    if (ele > max) {
      max = ele
    } else {
      min = ele
    }
  }
  return { max, min }
}

const average = (arr) => {
  // * calculates average of an arr elements
  return arr.reduce((acc, ele) => acc + ele) / arr.length
}

const merge = (arr, arr2) => {
  // * Merge sort #1 : Merging the arrays
  let m = arr.length
  let n = arr2.length
  let i = 0
  let j = 0
  let newArr = []
  while (i < m && j < n) {
    if (arr[i] >= arr2[j]) {
      newArr.push(arr2[j])
      j++
    } else {
      newArr.push(arr[i])
      i++
    }
  }

  while (i < m) {
    newArr.push(arr[i])
    i++
  }
  while (j < n) {
    newArr.push(arr2[j])
    j++
  }
  return newArr
}

const mergeSort = (arr) => {
  // * Merger sort #2 : Breaking in half recursively
  if (arr.length <= 1) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const binarySearch = (arr, ele) => {
  // * Binary search
  // Recursive approach
  // if (arr.length <= 1 && arr[0] !== ele) {
  //   return false
  // }

  // const mid = Math.floor(arr.length / 2)
  // const leftArr = arr.slice(0, mid)
  // const rightArr = arr.slice(mid)

  // if (ele === arr[mid]) {
  //   return true
  // }
  // if (ele > arr[mid]) {
  //   return binarySearch(rightArr, ele)
  // }
  // if (ele < arr[mid]) {
  //   return binarySearch(leftArr, ele)
  // }

  // loop approach
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === ele) {
      return mid
    }

    if (arr[mid] > ele) {
      right = mid + 1
    }

    if (arr[mid] < ele) {
      left = mid + 1
    }
  }
  return -1
}

const PromiseOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise One executed after 3 sec'), 3000)
  })
}

const PromiseTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise Two executed after 5 sec'), 5000)
  })
}

Promise.race([PromiseOne(), PromiseTwo()]).then((res) => {
  console.log(res)
})
