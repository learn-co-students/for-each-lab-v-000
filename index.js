function iterativeLog(array) {
  array.forEach(function callback(currentValue, index) {
    console.log(`${index}: ${currentValue}`)
  })
}

function iterate(callback) {
  var array = ["Brand New", "Taking Back Sunday", "My Chemical Romance"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
