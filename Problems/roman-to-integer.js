// https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=top-interview-150

var romanToInt = function (s) {
  const romanToNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const charArray = s.split('')
  let finalNumber = 0
  for (let i = 0; i < charArray.length; i++) {
    let currVal = romanToNumber[charArray[i]]
    if (i + 1 < charArray.length && romanToNumber[charArray[i + 1]] > currVal) {
      finalNumber = finalNumber - currVal
    } else {
      finalNumber = finalNumber + currVal
    }
  }

  console.log(finalNumber)
}

romanToInt('XXVI')
