### Map, Filter and Reduce

**Map :** Takes an operation, applies the operation to each element of the array, returns a new array with result of that operation.
use: mostly to loop over and do actions on array elements.

**Filter :** Takes an operation, applies the operation to each element in the array, but puts only those elements in new array which returns truthy value in that operation.
use: To filter out necessary elements of an array.

**Reduce :** Takes two arguments, one is accumulator and other is current-value. Accumulator is something that first initialises and  changes after interaction of each elements in array. The map function returns a single value.
use: When we need to count or do some similar operation with all the values of an array and need a single output.

Examples : 

```

const people = [{
    name: 'Alice',
    age: 25
  },
  {
    name: 'Bob',
    age: 30
  },
  {
    name: 'Charlie',
    age: 35
  },
  {
    name: 'David',
    age: 40
  },
  {
    name: 'Eve',
    age: 35
  } // Age 35 is repeated
];

<!-- Map -->

let newArr = people.map((val, index) => {
    return val.age = val.age + 'years old'
})

<!-- new Arr = Same value as original array, but now the ages will have ''years old' appended -->

<!-- Filter -->

let newArr = people.filter((val, index) => {
    return val.age === 35
})

new Arr = [{
    name: 'Eve',
    age: 35
  },
  {
    name: 'Charlie',
    age: 35
  }]

<!-- Reduce -->

let newValue = people.reduce((acc, curr, index) => {
    if(acc[curr.age]){
        acc[curr.age]++
    }
    else{
        acc[curr.age] = 1
    }
}, {})

newValue = {
  25: 1,
  30: 1,
  35: 2,
  40: 1
}

```