function iterativeLog(array) {
  //for (var i = 0; i < array.length; i++) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
