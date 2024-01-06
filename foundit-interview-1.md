## React
Build a collapsable file system UI using React just like you see in vscode file options,
like this : 
Folder 1
    Sub-folder1
        file1.js
    Sub-folder-2
        file2.js
Folder2

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