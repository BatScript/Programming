const arr1 = [1, 2, 3]
const arr2 = [1, 7, 9]

// Two sorted array => Merge them to make a bigger sorted array

// function mergeAlgo(arr1, arr2) {
//   const l1 = arr1.length
//   const l2 = arr2.length
//   const finalArr = []
//   let i = 0
//   let j = 0
//   // console.log(l1, l2)
//   while (i < l1 && j < l2) {
//     if (arr1[i] >= arr2[j]) {
//       finalArr.push(arr2[j])
//       j++
//     } else {
//       finalArr.push(arr1[i])
//       i++
//     }
//   }

//   // For remaining arr1
//   while (i < l1) {
//     finalArr.push(arr1[i])
//     i++
//   }

//   while (j < l2) {
//     finalArr.push(arr2[j])
//     j++
//   }

//   console.log(finalArr)
// }

// mergeAlgo(arr1, arr2)

function divideAlgo(arr, low, high) {
  let mid = Math.floor((low + high) / 2)
  console.log('mid : ', mid);
  divideAlgo(arr, low, mid)
}
