function iterativeLog(array) {
  array.forEach((elem, i) => console.log(`${i}: ${elem}`))
}

function iterate(callback) {
  const ary = ["a", "b", "c"]
  ary.forEach(callback)
  return ary
}

function doToArray(array, callback) {
  array.forEach(callback)
}
