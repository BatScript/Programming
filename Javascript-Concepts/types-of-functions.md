<!-- Anonymous
First class functions
statement vs expression -->

## All about functions in Javascript

### Ways to use a function

There are three popular ways to declare a function in javascript

#### Declaration :
```
# IIFE (Immediately Invoked Functional Expression)
(function sum() {
    let a = 6
    let b = 8
    console.log(a+b)
})()

# Functional Expression
const sum = function(a, b) {
    return a+b
}

# Functional Statement
function sum (a, b) {
    return a+b
}

# Arrow functions
const sum = (a, b) => {
    return a+b
}

```

#### functional statement vs functional expressions
If you know how javascript engine works, you should know that the variables are stored first and then the statements get executed line by line.

So, logically the major difference between function expression and function statement is **Hoisting**

Functional expressions are hoisted while the expressions are not. This happens because expressions have been declared already in phase 1 of JS code execution where Javascript stores the values of variables in the global scope. So while saving other variables, it also saves the function.
Which explains the example bewlow : 
```
a() // Will print the log.
b() // Will throw the log as it is not executed.


const a = () => {
    console.log('a is exec')
}

function b() {
    console.log('b is exec')
}

```

### More ways to use functions
#### Anonymous functional Statements
The functions without names (duh). Here is what it looks like:
```
function(){

}

```
The above function will throw an error because function statements always require a name. Although they could be used in functional expressions like this: 
 ```
 const sum = function() {

 }
 
 ```

#### Named function Expressions
Just like the anonymous function expression, we can have named ones

 ```
 const sum = function abc() {

 }
 
 ```

But you can't just call them by their names, no, they're not some Harry potter villain but its just their existence isn't known to JS engine yet. So when you call ```abc()```, it will log you an error. Although you can access the function inside it recursively like this : 

```
 const sum = function abc() {
    console.log(abc)
 }

```
