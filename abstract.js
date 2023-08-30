;(function () {
  try {
    throw new Error()
  } catch (x) {
    var x = 1
    y = 2
    console.log('7', x)
  }
  console.log('9', x)
  console.log('10', y)
})()
