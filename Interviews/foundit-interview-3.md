# Manager Round - Cleared

## Intro
1. Why Foundit
2. Projects
3. Salary

## Coding

Merge two sorted arrays (ascending and descending) so that the third array is sorted.

1. merge and then sort.

```
const arr1 = [1, 2, 3, 4]
const arr2 = [3, 2, 1]

const newArr = [...arr1, ...arr2].sort((a, b) => a-b)

console.log(newArr)

```

2. two pointer compare approach (smallest to largest : move the one that has been pushed.)

```
const arr1 = [1, 2, 3, 4]
const arr2 = [3, 2, 1]

let p1 = 0
let p2 = arr2.length - 1

/* compare p1 of arr1 to p2 of arr2, push smaller one to new arr, increment the pointer */

let mergedArray = [];

while (p1 < arr1.length && p2 >= 0) {
  if (arr1[p1] <= arr2[p2]) {
    mergedArray.push(arr1[p1]);
    p1++;
  } else {
    mergedArray.push(arr2[p2]);
    p2--;
  }
}

// If there are remaining elements in arr1, add them to the mergedArray
while (p1 < arr1.length) {
  mergedArray.push(arr1[p1]);
  p1++;
}

// If there are remaining elements in arr2, add them to the mergedArray
while (p2 >= 0) {
  mergedArray.push(arr2[p2]);
  p2--;
}

console.log(mergedArray);

```
