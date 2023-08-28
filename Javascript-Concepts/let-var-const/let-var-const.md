```
// Why does this function works good with let but not with var
function timer() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function() {
      console.log(i)
    }, i * 1000)
  }
}
```

let is a block scope variable while var and const are global scoped variables.
Which means even when I declare a variable using var or const inside a block. It will be stored inside the global call stack, rather than the block. This won't happen in case of when you declare it using let.

This is the reason why it is advised to declare variables inside block using 'let'.

Now in above case what happend was, when the function timer got called, a loop started and finished without waiting for setTimeout to finish. So now there are six setTimeout executions are stored in call stack with a log of i.

When we use 'var': 
We Know, var is a global scoped variable and each time it was incremented, the same variable got updated as the incrementor of for loop ran. Now because of this after for loop was finished, in our global call stack we have a variable 'var i' whose value is 6 finally after 6 increments.
So, When the setTimeout gets called six times, using the reference of i, it prints 6 six, times.

When we use 'let':
Now let is different and is redclared in every block, so each time i got incremented, there was a new i getting stored for each setTimeout. So for first iteration i was 0, therefore setTimeout printed 0, for 2nd iteration, a new i (since let was redclared), has value 1, so setTimeout of second iteraation prints 1 and the loop goes on in same way.

When we use 'const':
Game is over because we cannot modify const ever, so in the very first attempt of modifying the global context 'const' by an incrementor, the code will show the error.
