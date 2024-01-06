# Coding Round - Cleared

## coding
Rotate array n times & optimise : [Leetcode](https://leetcode.com/problems/rotate-array/).

My logic : 

1. slice and shift one at a time.

```
let arr = [1, 4, 3, 6, 3, 4]
const rotation = 3

for(let i = 0; i < rotation; i++) {
    const lastEle = arr.slice(arr.length - 1)
    console.log(lastEle)
    arr = [...lastEle, ...arr]
    arr.pop()
}

console.log(arr)
```

2. slice and shift all together (pattern).

```
const rightArr = arr.splice(arr.length - rotation, arr.length)

console.log(rightArr)

console.log([...rightArr, ...arr])
```


## concepts
Nexjs and optimisation methods
1. Image tag
2. Script tag

## React
1. API fetch
2. Filter
3. Debounce