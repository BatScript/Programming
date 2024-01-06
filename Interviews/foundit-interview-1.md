# Coding Round - Cleared

## Intro
1. Why NextJS
2. getStaticprops

## React
Build a collapsable file system UI using React just like you see in vscode file options,
like this : 
1. Folder 1
    1. Sub-folder1
        1. file1.js
    2. Sub-folder-2
        1. file2.js
2. Folder2

## Coding
 Move Zeroes

 ```
 const arr = '01001110'

    const moveZeroes = (arr) => {
    let arrOfZeroes = []
    let arrOfOnes = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
        arrOfZeroes.push('0')
        } else {
        arrOfOnes.push('1')
        }
    }

    return [...arrOfOnes, ...arrOfZeroes].join('')
    }

    console.log(moveZeroes(arr))
 ```