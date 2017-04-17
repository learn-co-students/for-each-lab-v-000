function iterativeLog(array) {
  array.forEach((index, element) => {
    console.log(`${element}: ${index}`)
  })
}

function iterate(callback) {
  var array = ["hello"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
