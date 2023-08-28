import { arr } from '../../Common/constants.js'

const n = arr.length

// * Merge Sort : Divide and Merge
// * break the array recursively until one element is left
// * sort the array by comparing first indexes and moving on the respective pivot

function merge(arr1, arr2) {
  const l1 = arr1.length
  const l2 = arr2.length
  const finalArr = []
  let i = 0
  let j = 0
  // console.log(l1, l2)
  while (i < l1 && j < l2) {
    if (arr1[i] >= arr2[j]) {
      finalArr.push(arr2[j])
      j++
    } else {
      finalArr.push(arr1[i])
      i++
    }
  }

  // For remaining arr1
  while (i < l1) {
    finalArr.push(arr1[i])
    i++
  }

  while (j < l2) {
    finalArr.push(arr2[j])
    j++
  }

  return finalArr
}

function mergeSort(arr) {
  // The breakage of recursion
  if (arr.length <= 1) {
    return arr
  }

  const midIndex = Math.floor(arr.length / 2)

  const leftArr = arr.slice(0, midIndex)
  const rightArr = arr.splice(midIndex)

  const sortedLeftArr = mergeSort(leftArr)
  const sortedRightArr = mergeSort(rightArr)

  return merge(sortedLeftArr, sortedRightArr)
}

console.log(mergeSort(arr))
