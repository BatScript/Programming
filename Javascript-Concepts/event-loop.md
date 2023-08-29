##Event Loops and More
###Fundamentals :
**call stack** : It executes whatever function or statement is inside it

**event loop**: Its whole job is to look for the change in callback queue and call stack. It checks if call stack is empty and then moves functions from callback queue or microtask queue to call stack.

**callback queue**: A queue to store all the callbacks for example setTimeouts and addEventListeners and more.

**microtask queue**: callback queue with higher priority. Ex: callbacks returned via promises or fetch.

###How does Browser work behind the scene with javascript?
Lets see this with an example : 

```
console.log("Start");

setTimeout(() => {
  console.log("Callback executed");
}, 2000);

fetch(`/some/url`)
.then((res) => {
    console.log(res)
})

console.log("End");

```