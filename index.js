function iterativeLog(array) {
  array.forEach((arr, index) => {
    console.log('${index}: ${arr}')
  })
}

function iterate(callback) {
  array = ['a', 'b']
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}
