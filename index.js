function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var someArray = [1, 2, 4, 6]
  someArray.forEach(callback)
  return someArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}