// Two ways to climb stairs : one at a time , and two at a time
// Find number of ways you could climb n stairs

const count = (i, n) => {
  // 2. find edge cases, cases where we have to stop the
  if (i === n) {
    // This is the case where we reach our destination (i.e. n steps)
    // So lets return 1 (as in 1 way of completion)
    return 1
  }

  if (i > n) {
    // Here our sum exceeded the actual destination which is wrong, so lets return 0
    return 0
  }

  // 1. breaking the problem in smaller ones
  //    i is number of steps taken yet
  //    if person takes one step => count(i+1, n)
  //    If person takes two step => count(i+2, n)
  return count(i + 1, n) + count(i + 2, n)
  // This is bottom up approach
}

const countV2 = (n) => {
  // In this way we re going to count the ways using a single var
  if (n === 0 || n === 1) {
    // In cases where we just have 1 stair left or 0 stair left,
    // we just have one step left and then we complete a way
    return 1
  }
  // Will just decrement the total Stairs until it reaches 0 or 1.
  return countV2(n - 1) + countV2(n - 2)
  // * This case looks like fibonacci's sequence to find nth number.
  // Also it is the top down approach
}

const climbingStairs = (n) => {
  //   return count(0, n)
  return countV2(n)
}

const sol = climbingStairs(3)
console.log(sol)
