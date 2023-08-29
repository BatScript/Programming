## Event loops and Javascript's mechanism of code execution
### Fundamentals :
**Call stack** : It executes whatever function or statement is inside it (LIFO : Last in first out mechanism)

**Event loop**: Its whole job is to look for the change in callback queue and call stack. It checks if call stack is empty and then moves functions from callback queue or microtask queue to call stack.

**Callback queue**: A queue to store all the callbacks for example setTimeouts and addEventListeners and more.

**Microtask queue**: callback queue with higher priority. Ex: callbacks returned via promises or fetch.

### How does Browser work behind the scene with javascript?
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

- When we load this file in a browser, a **Global Execution Context** is created and is pushed inside the call stack. You can imagine the GEC as a wrapper function of all your code that you wrote in the js file that is running right now.

- After this, all the variables that are in GEC are stored with their values.

- Once its done, the code execution starts line-by-line and we encounter our first statement i.e. ```console.log("Start");```.
First this statement goes to call stack, above GEC, then JS tries to find out what a console.logh is, which it finds inside the global window object and finally executes it.
So it gets executed and we see a log printed in our browser console.

- After this we have setTimeout that takes 2 whole seconds to execute. Now setTimeout gets in the call stack and is executed. So, again while executing js tries to find what is setTimeout and eventually finds it out (again in global window object), now the browser runs its timer in background and call stack is empty again.

- After setTimeout, We have fetch in line. So just like before, fetch enters the call stack, gets understood by the language and runs. Similar to setTimeout, it just runs and fetches some URL, but we dont see any logs inside their callbacks because the operations haven't been finished yet.

- Lets assume, timer finishes first. After the timer finishes, it returns a callback whose purpose is to print a log. The callback gets inside the **callback queue**, then the **Event loop** detects the change inside callback queue and checks if the call stack is empty. It finds GEC empty and pushes the callback function in the stack and executes it, so we now see the log printed on console, that was inside setTimeout.
Same would happen if fetch was completed first.

- Lets assume both operations get finished at the same time, something interesting happens. There is a new queue called **microtask queue**. All the callbacks from promises or fetch (special APIs), are stored in this queue. As we know that this queue has higher priority than the callback queue, callback of fetch is sent to call stack before the setTimeout's callback and is executed first.


You can simulate these visually [here]('http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D').
