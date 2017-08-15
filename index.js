function iterativeLog(array) {
  array.forEach((element, i) => {
    console.log(`${i}: ${element}`)
  })
}

function iterate(callback) {
  var ary = ['scott', 'abby', 'doggy']

  ary.forEach(callback)

  return ary
}

function doToArray(array, callback) {
  array.forEach(callback)
}