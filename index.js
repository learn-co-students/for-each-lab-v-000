function iterativeLog(array) {
  array.forEach((x, y) => {
    console.log(`${y}: ${x}`)
  })
}

function iterate(callback) {
  const array = ["a","b","c"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
