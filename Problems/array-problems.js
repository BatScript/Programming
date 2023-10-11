const arr = [5, 4, -1, 7, 8]

const findPair = (arr, sum) => {
  // * Finds pair of elements whose sum =  sum
  // loop
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       if (arr[i] + arr[j] === sum && i !== j) {
  //         return [arr[i], arr[j]]
  //       }
  //     }
  //   }
  //   return -1
  // Hash map approach ⭐⭐⭐ (DS lol)
  let hashMap = {}
  for (let i = 0; i < arr.length; i++) {
    let compliment = sum - arr[i]
    if (hashMap[compliment] !== undefined) {
      return [arr[i], compliment]
    }
    hashMap[arr[i]] = i
  }
  return -1
}

// const threeSum = (arr, sum) => {

// }

// const ans = threeSum(arr, 24)

const rotateBy = (arr, n, type) => {
  switch (type) {
    case 'left':
      let secondArr = arr.slice(0, n)
      let firstArr = arr.slice(n)
      return firstArr.concat(secondArr)
    case 'right':
      let secondArr2 = arr.slice(0, arr.length - n)
      let firstArr2 = arr.slice(arr.length - n)
      return firstArr2.concat(secondArr2)
    default:
      return 'specify the type'
  }
}

const moveAllZerosTo = (arr, pos) => {
  // Two pointer approach ⭐⭐⭐⭐ (out of box)
  let leftPtr = 0
  let rightPtr = 0
  while (rightPtr < arr.length) {
    if (arr[rightPtr] !== 0) {
      ;[arr[leftPtr], arr[rightPtr]] = [arr[rightPtr], arr[leftPtr]]
      leftPtr++
    }
    rightPtr++
  }
  return arr
}

const leadersInArr = (arr) => {
  // * Returns all the ele which are > all their right side elements
  let leaderArr = [arr[arr.length - 1]]
  let largest = arr[arr.length - 1]
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > largest) {
      largest = arr[i]
      leaderArr.push(largest)
    }
  }
  return leaderArr
}

const maxSubArraySum = (arr, n) => {
    let sumEle = []
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        if (sum + arr[i] > sum && sumEle.length) {
            sumEle.appen
        }
    }
}
