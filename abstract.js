// const arr = [5, 2, 9, 1, 5, 6]
// function* bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] >= arr[j]) {
//         ;[arr[i], arr[j]] = [arr[j], arr[i]]
//         yield {
//           state: [...arr]
//         }
//       } else {
//         yield {
//           state: [...arr]
//         }
//       }
//     }
//   }
// }

// const bs = bubbleSort(arr)

// function logStep() {
//   const { value, done } = bs.next()

//   if (!done) {
//     console.log(value.state)
//     setTimeout(logStep, 1000)
//   }
// }

// logStep()

const peakElement = (arr) => {
  // let i = 0

  // while (i < arr.length) {
  //   if (arr[i] > arr[i + 1]) {
  //     return i
  //   } else {
  //     i++
  //   }
  // }
  // return 0
}

const arr = [4, 6, 7, 9, 2, 1, 6]

const ans = peakElement(arr)

console.log(ans)
