import { arr } from '../../Common/constants.js'
import { findExtreme, swapElements } from '../../Common/functions.js'

const n = arr.length

//* 1. Brute force Approach

// function bruteForceSort(arr, n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   console.log(arr);
// }

// bruteForceSort(arr, n)

// * 2. Selection Sort : Find the minimum and swap with current index

// function selectionSort(arr, n) {
//   for (let i = 0; i < n; i++) {
//     let minIndex = findExtreme(arr, i, 'min')
//     if (arr[i] !== arr[minIndex]) {
//       swapElements(arr, i, minIndex)
//     } else {
//       continue
//     }
//   }
//   console.log(arr)
// }

// selectionSort(arr, n)

// * 3. Bubble Sort : compares two adjecent elements and swaps as it should be (asc or desc)
// * After each nth iteration, array's length-2 element is in right position (sorted)

// function bubbleSort(arr, n) {
//   for (let i = 0; i < n - 1; i++) {
//     // Totals steps
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swapElements(arr, j, j + 1)
//       } else {
//         continue
//       }
//     }
//   }

//   console.log(arr)
// }

// bubbleSort(arr, n)

// * 4. Insersion Sort : start from index 0 and keep swapping the right most element until it
// * reaches its destination

// function insertionSort(arr, n) {
//   let key
//   let j
//   for (let i = 1; i < n; i++) {
//     key = arr[i]
//     j = i - 1
//     while (j >= 0 && key < arr[j]) {
//       arr[j + 1] = arr[j]
//       j--
//     }
//     arr[j + 1] = key
//   }
//   console.log(arr)
// }

// insertionSort(arr, n)
