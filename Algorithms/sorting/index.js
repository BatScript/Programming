import { arr } from '../../common/constants.js'
import { findExtreme, swapElements } from '../../common/functions.js'

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
