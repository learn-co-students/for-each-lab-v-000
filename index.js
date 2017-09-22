function iterativeLog(array) {
  array.forEach((item, index, array) => {
    console.log(`${index}: ${item}`)
  })
}

function iterate(callback) {
  var tempArray = [1, 3, 5, 9, 13]
  tempArray.forEach(callback)
  return tempArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
