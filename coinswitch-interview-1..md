 # Coding Round
 
 ## React
 
 Ek rectangle ko each corner me clockwise bhejna hai har second
 import React, {useState, useEffect} from 'react';

 ```
 export function App(props) {
   const [number, setNumber] = useState(0)

   // const

   useEffect(() => {
     setTimeout(() => {
       if(number >= 3) {
         setNumber(0)
       }
       else{
         setNumber((prev) => prev+1)
       }
     }, 1000)
   }, [number])

   // r0:t0, b0:r0, l0:b0, t0:l0

   return (
     <div className='App'>
       <div style={{backgroundColor: 'grey', width: '100px', height: '100px', position: 'absolute', color: 'black'}}>{number}</div>
     </div>
   );
 }
 ```

 ## JS
 Hoisting
 Event Loop
 Promise
 SSG and its disadvantage
 Cross Questioning


 ## Coding
 Check to see if two provided strings are anagrams of eachother.
 One string is an anagram of another if it uses the same characters
 in the same quantity. Only consider characters, not spaces
 or punctuation.  Consider capital letters to be the same as lower case
 --- Examples
   anagrams('rail safety', 'fairy tales') --> True
   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
   anagrams('Hi there', 'Bye there') --> False

```
 const str1 = 'Hi there'
 const str2 = 'Bye there'

 const cleanStr = (str) => {
     const reg = /[^a-zA-Z]/g
     return str.replace(reg, '').toLowerCase()
 }

 const anagrams = (str1, str2) => {
     const newStr1 = cleanStr(str1).split('').sort().join('')
     const newStr2 = cleanStr(str2).split('').sort().join('')
     return newStr1 === newStr2
 }

 console.log(anagrams(str1, str2))
```

 Method 2

```
const str1 = 'Hi there'
const str2 = 'Bye there'

const cleanStr = (str) => {
    const reg = /[^a-zA-Z]/g
    return str.replace(reg, '').toLowerCase()
}

const anagrams = (str1, str2) => {

    const newStr1 = cleanStr(str1)
    const newStr2 = cleanStr(str2)

    if(newStr1.length !== newStr2.length) {
        return false
    }

    const map1 = new Map()
    const map2 = new Map()

    for(let i = 0 ;i < newStr1.length; i++) {
        if(!map1.has(newStr1[i])){
            map1.set(newStr1[i], 1)
        }
        else{
            map1.set(newStr1[i], map1.get(newStr1[i]) + 1)
        }
    }

    for(let i = 0 ;i < newStr2.length; i++) {
        if(!map2.has(newStr2[i])){
            map2.set(newStr2[i], 1)
        }
        else{
            map2.set(newStr2[i], map2.get(newStr2[i]) + 1)
        }
    }

    for(let i = 0; i < newStr1.length; i++) {
        if(map1.get(newStr1[i]) !== map2.get(newStr1[i])){
            return false
        }
    }

    return true

 }

 console.log(anagrams(str1, str2))
```
