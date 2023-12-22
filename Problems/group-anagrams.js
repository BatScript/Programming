// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = (arr) => {
  //great approach
  const finalMap = new Map()

  arr.forEach((ele, index) => {
    let sortedWrd = ele.split('').sort().join('')
    if (finalMap.has(sortedWrd)) {
      finalMap.get(sortedWrd).push(ele)
    } else {
      finalMap.set(sortedWrd, [ele])
    }
  })
  console.log([...finalMap.values()])
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
