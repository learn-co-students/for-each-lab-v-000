function iterativeLog(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(`${i}: ${array[i]}`)
  }
}

function iterate(callback) {
  array = ["stuff","more stuff"]
  array.forEach(callback)
  return array
}

function doToArray(array,callback) {
  array.forEach(callback)
}
