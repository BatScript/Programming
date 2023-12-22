// const API_URL = 'https://api.github.com/users/batscript'

// const data = fetch(API_URL)

// data.then((res) => {
//   console.log(res)
// })

// const getData = (bool) => {
//   return new Promise((resolve, reject) => {
//     if (bool) {
//       setTimeout(() => {
//         resolve({
//           message: 'Yea'
//         })
//       }, 2000)
//     } else {
//       reject({
//         message: 'OOps its false'
//       })
//     }
//   })
// }

// console.log(getData(true))

/*
------------------- INTRO ----------------------

1. Producer : one who produces the data
2. Consumer : one that uses the data

------------------- PART I ----------------------

Lets first consume the data : 

using callback : 

const getData = (bool, callback) => {
  setTimeout(() => {
    if (bool) {
      callback({
        message: 'Yea'
      })
    } else {
      callback({
        message: 'OOps its false'
      })
    }
  }, 2000)
}

getData(false, (data) => {
  console.log(data)
})

Issue with callback : dependency on another function, callback hell.

For example when we want execute thenDoThis after getting the data, and after thenDothis finishes
we want to run thenDoThis2 and so on... we have a problem. The code starts to stack up in a shitty way,
a.k.a pyramid of Doom.
getData(args, function(thenDoThis) {
  //gets data
  thenDoThis(thenDoThis2) {
    thenDoThis2(thenDoThis3) {
      thenDoThis3(thenDoThis4) {
        return something
      }
    }
  }
})

Solution : Promise Object (immutable)

assuming getData return promise object,

getData(true).then((res) => {
  console.log(res)
})

Promise - it is an object with state of the task that we gave it to process,
and the result (depending on state) 

states of promise: 
1. pending
2. fulfiled
3. rejected 

fetch API also return a promise. If the data is successfully fetched, it returns us a Promise.
Cool thing to notice about any function that returns a promise is that the function immediately returns
a promise irrelevant to the fact that the task that we want takes some time to get done.
The immediately returned promise has state of pending and when teh task gets done, the very same promise
object gets changed to fulfiled and has the data our task gives.

Basically promise is an object representing the eventual completion or failure of an async task.

Promise does also solve the pyramid of doom situation, by chaining : 

getDataForSomething(args)
.then(thenDoThis) //returns promise too
.then(thenDoThis2) //returns promise too
.then(thenDoThis3) //returns promise too


------------------- PART II ----------------------

Producer Part : 

So how do we create this magical promise thing in getData function above?
The syntax goes like this : 

const getData = (args) => {
  const promise = new Promise((resolve, reject) => {
    // do something like validating args
    if(!validate(args)) {
      reject(new Error({
        message : 'Arguments invalid'
      }))
    }

    // do somethign with args if its valid
    setTimeout(() => {
    // simulated some big heavy logic
      resolve({
      message: 'did something with args'
      }, )
    }, 2000)
  })
  return promise
}

gteData(args).then((res) => {
  // triggers when our promise is resolved
  console.log(res) // if resolved, message : 'did something with args'
}).catch((err) => {
  // triggers when we throw error in our promise thing
  console.log(err) // otherwise, message : 'Arguments invalid'
})

it takes two args, these two args are callback functions provided by js itself.
When out task gets done, we call resolve with the data that we want to send as output.
Otherwise we could call reject with some relevant error message.

Now what about that callback thing? the pyramid of Doom?
Here we could improve that by chaining the promises as we saw before. But there is a catch.
You have to return a Promise from every then that you are going to chain.

getData(args).then((res) => {
  console.log(res)
})then((data) => {
  //  did something with the data after getting it
  console.log(modifiedData)
}).then((data) => {
  //  modified data again
  console.log(againModifiedData)
})
.catch((err) => {
  console.log(err) 
})

Above code won't work because we didn't return a promise from first then callback

getData(args).then((res) => {
  console.log(res)
  return res // has to be a promise
})then((data) => {
  //  did something with the data after getting it
  console.log(modifiedData)
  return modifiedData // has to be a promise
}).then((data) => {
  //  modified data again
  console.log(againModifiedData) 
})
.catch((err) => {
  console.log(err) 
})

Also, if we throw error in any element of the chain, our flow would directly fall in the catch.
Now there is a question, what if there's some error thrown and after the catch element we have
a .then again.

getData(args)
.then((data) => {
  //  did something with the data after getting it
  console.log(modifiedData)
  // return modifiedData // has to be a promise
  throw new Error('womp womp')
})
.catch((err) => {
  console.log(err) 
})
.then(() => {
  console.log('here')
})

after 'womp womp', will 'here' be printed or not?
well yes it would. This is a great feature to customize catch block for each step in promise chain.
For example id we wanted to throw an error for the first then and after that we want to display a fallback data.
In that case, we could do this : 

promise.then(() => {
  if(data) {
    console.log(data)
  }
  else{
  throw new Error('oof no data')
  }
}).catch((err) => {
  console.log(err)
}).then(() => {
  console.log('fallback data')
})

------------------- PART III ----------------------

Now that we have understood how promise works and how we handle data that is important,
but takes time to be fetched or calculated, lets freestyle this concept.

1. Below is the code, make it execute sequentially (1, 2, 3, 4) : 

(function () {
  setTimeout(() => {
    console.log(1)
  }, 2000)

  console.log(2)

  setTimeout(() => {
    console.log(3)
  }, 3000)

  console.log(4)
})()

2. write a function that takes two promises as args and races between them. Returns the promise of the one
that executes first. (basically a pollyfil for Promise.race)

3. Write a function that takes promises in an array and then 


*/

/*

 * Interesting Question : 

function Calculate(num) {
  this.accumulator = num
  this.add = function (num) {
    this.accumulator += num
    console.log(this.accumulator)
    return this
  }
  this.multiply = function (num) {
    this.accumulator = this.accumulator * num
    console.log(this.accumulator)
    return this
  }
  this.getresult = function () {
    return this.accumulator
  }
}

const ans = new Calculate(10).add(5).multiply(2).getresult()

console.log(ans)

*/

// this.gloablTest = "I am global";
// const test = () => {
//   this.name = "Test";
//   console.log("test one", this);
// };
// function test2() {
//   this.name = "Test 2";
//   console.log("test2", this);
// }

// test();
// test2();

// const getData = (args) => {
//   return new Promise((res, rej) => {
//     if (!args.length > 0) {
//       rej(new Error('aah no'))
//     }

//     setTimeout(() => {
//       res({
//         message: 'arhgs processed'
//       })
//     }, 2000)
//   })
// }

// const arg = []

// getData(arg)
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     // Only when rejected
//     console.log(err.message)
//   })

// ;(function () {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1)
//       resolve()
//     }, 2000)
//   })

//   promise
//     .then(() => {
//       return new Promise((resolve) => {
//         console.log(2)
//         resolve()
//       })
//     })
//     .then(() => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log(3)
//           resolve()
//         }, 3000)
//       })
//     })
//     .then(() => {
//       console.log(4)
//     })
// })()

const someFunction = () => {
  const rand = Math.floor(Math.random() * 5) + 1

  return new Promise((resolve, reject) => {
    if (rand >= 3) {
      setTimeout(() => {
        reject({
          message: 'Task failed'
        })
      }, 3000)
    }
    setTimeout(() => {
      resolve({
        message: 'Task completed successfully'
      })
    }, rand * 1000)
  })
}

const PromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = []
    let completed = 0

    promises.forEach((promise) => {
      promise
        .then((res) => {
          results[index] = res
          completed++

          if (completed === promises.length) {
            resolve(promises)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  })
}

function PromiseRace(promise1, promise2) {
  return new Promise((resolve, reject) => {
    let settled = false

    function handleSettlement(value, isRejected) {
      if (!settled) {
        settled = true
        isRejected ? reject(value) : resolve(value)
      }
    }

    // Execute the first promise function
    promise1
      .then((value) => handleSettlement(value, false))
      .catch((error) => handleSettlement(error, true))

    // Execute the second promise function
    promise2
      .then((value) => handleSettlement(value, false))
      .catch((error) => handleSettlement(error, true))
  })
}

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('ello')
  }, 2000)
})
const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res('whoops')
  }, 1000)
})

PromiseRace(promise1, promise2)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
