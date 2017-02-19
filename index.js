var evens = [0, 2, 4, 6, 8, 10]

function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  evens.forEach(callback)
  return evens
}

function doToArray(array, callback) {
  array.forEach(callback)
}




  // 3) index doToArray(array, callback) uses `callback` as the callback for `array`.forEach:

  //     Error: Expected 0 to equal 3
  //     + expected - actual

  //     -0
  //     +3
      
  //     at assert (node_modules/expect/lib/assert.js:29:9)
  //     at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
  //     at Context.<anonymous> (test/index-test.js:43:37)


