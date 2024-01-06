// polyfill

// 1, FILTER

// const arr = [3, 4]

// Array.prototype.filterPolyFill = function (checkFunction) {
//   let len = this.length
//   const res = []
//   for (let i = 0; i < len; i++) {
//     if (checkFunction(this[i], i, this)) {
//       res.push(this[i])
//     }
//   }

//   return res
// }

// const final = arr.filterPolyFill((ele, index) => {
//   return ele > 3 && index > 4
// })

// console.log(final)

// 2. Reduce

// Array.prototype.reducePolyfill = function (callbackFunction, init) {
//   let len = this.length
//   let accumulator = init ? init : this[0]
//   for (let i = 0; i < len; i++) {
//     accumulator = callbackFunction(accumulator, this[i])
//   }
//   return accumulator
// }

// const ans = arr.reducePolyfill((acc, curr) => {
//   return curr * acc
// })

// console.log(ans)

// const someFun = async () => {
//   console.log(typeof null, typeof undefined)

//  ! Problem
//   setTimeout(() => {
//     console.log(1)
//   }, 1000)
//   console.log(2)
//   setTimeout(() => {
//     console.log(3)
//   }, 2000)
//   console.log(4)
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(1)
//       res()
//     }, 1000)
//   })
// * Method 0
//   const one = () => {
//     setTimeout(() => {
//       console.log(1)
//       two()
//     }, 1000)
//   }
//   const two = () => {
//     console.log(2)
//     three()
//   }
//   const three = () => {
//     setTimeout(() => {
//       console.log(3)
//       four()
//     }, 2000)
//   }
//   const four = () => {
//     console.log(4)
//   }
//   one()
// * Method 1
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(1)
//       res()
//     }, 1000)
//   })
//   promise
//     .then(() => {
//       return new Promise((res, rej) => {
//         console.log(2)
//         res()
//       })
//     })
//     .then(() => {
//       return new Promise((res, rej) => {
//         setTimeout(() => {
//           console.log(3)
//           res()
//         }, 2000)
//       })
//     })
//     .then(() => {
//       console.log(4)
//     })
// * Method 2
//   await new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(1)
//       res()
//     }, 1000)
//   })
//   await new Promise((res, rej) => {
//     console.log(2)
//     res()
//   })
//   await new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log(3)
//       res()
//     }, 2000)
//   })
//   console.log(4)
// }

// someFun()

// * Ways to create object in JS

// var obj = {}

// var obj2 = new Object()

// var obj3 = Object.create(null)

// function CreateObj() {
//     this.name = 'Hello'
// }

// var obj4 = new CreateObj()

// * Prototype Chain :
// Inheritance in JS. Helps to build new objects based on existing ones.

// const myObj = {
//   name: 'well well well if it aint the invisible c*nt',
//   cat: 'orange cat',
//   fun: function () {
//     console.log(this.cat)
//   }
// }

// const clone = Object.create(myObj)

// clone.printClone = () => console.log('I am clone')

// const cloneOfClone = Object.create(clone)

// console.log(Object.getPrototypeOf(cloneOfClone))

// * Call bind and apply

// function helloWorld(prop) {
//   return `${this.name} is one ${prop} lad.`
// }

// // Calls the new function with arguments
// const newHW = helloWorld.call({ name: 'Ujjval' }, 'handsome')
// // Gives the new function with arguments
// const newHW2 = helloWorld.bind({ name: 'Ujjval' }, 'handsome')
// // Calls the new function with arguments but in array
// const newHW3 = helloWorld.apply({ name: 'Ujjval' }, ['handsome'])

// console.log(newHW)
// console.log(newHW2)
// console.log(newHW3)

// * Deep copy function :

// const originalObject = {
//   name: 'John',
//   age: 30,
//   address: {
//     city: 'New York',
//     country: 'USA'
//   },
//   hobbies: ['reading', 'traveling']
// }

// const deepCopyof = (obj) => {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj
//   }

//   const copiedObj = Array.isArray(obj) ? [] : {}

//   for (key in obj) {
//     copiedObj[key] = deepCopyof(obj[key])
//   }

//   return copiedObj
// }

// const copiedObj = deepCopyof(originalObject)

// console.log(copiedObj)

// * Debounce

// const ele = document.getElementById('stuff')

// ele.addEventListener('input', () => {
//   debounce(printHelloWorld, 700)
// })

// const printHelloWorld = () => {
//   console.log('run the fun')
// }

// let timer = null

// const debounce = (callback, gap) => {
//   if (timer) {
//     clearTimeout(timer)
//   }

//   timer = setTimeout(() => {
//     callback()
//   }, gap)
// }

// * curried function

// const add = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c
//     }
//   }
// }

// console.log(add(2)(3)(4))

// * Let var const

// * Temporal dead zone
// Error zone between the declaration and initialisation, happens with let and const.
