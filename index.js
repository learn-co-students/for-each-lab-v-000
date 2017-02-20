function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const dessert = ["cake", "pie", "pudding"]
  dessert.forEach(callback)
  return dessert
}

function doToArray(array, callback) {
  array.forEach(callback)
}
