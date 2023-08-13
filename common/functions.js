export function swapElements(arr, i, j) {
  // swaps ith and jth elements in arr
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export function findExtreme(arr, fromIndex, type) {
  // Finds max and min
  let eleIndex = fromIndex
  for (let i = fromIndex; i < arr.length; i++) {
    if (type === 'min') {
      if (arr[i] < arr[eleIndex]) {
        eleIndex = i
      }
    } else {
      if (arr[i] > arr[eleIndex]) {
        eleIndex = i
      }
    }
  }
  return eleIndex
}
