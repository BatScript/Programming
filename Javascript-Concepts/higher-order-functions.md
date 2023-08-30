## What is a Higher order function?

Higher order function is a function that takes other smaller functions as an argument, and returns a function as well.

Example: map, filter, etc.

### Why do we need it? 
When we write multiple functions for multiple operations that have a part of same/similar logic, It causes code repetition and poor readability along with increased execution time. To overcome these problems, we use **HOFs**.

Example: 

```
<!-- Here is the higher order function to do few opeations on circle -->

const radii = [1, 2, 3, 4]

const circleOps = (arr, logic) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(logic(arr[i]))
    }
}

const area = (radius) => {
    return Math.PI * radius * radius
}

const perimeter = (radius) => {
    return Math.PI * 2 * radius
}

<!-- Returns an array of perimeters of given radii -->
console.log(circleOps(arr, perimeter)) 

```

As we can see above for all the operations that we do on circles, that needs radius, we have written a higher order function.

In future if we need to get perimeter, we could just pass perimeter logic along with the array of radius. This saved us multiple lines of for loops in each logic that could have ended up with bigger code and heavier js payload.

You might notice, how our function resembles with javascript map function which does the similar job.

**HOF for debounce**

<!-- Here : 


```
``` -->