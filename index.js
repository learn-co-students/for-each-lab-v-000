function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}


function iterate(callback) {
  bob = ["two", "three", "four"]
  bob.forEach(callback)
  return bob
}

function doToArray(array, callback) {
  array.forEach(callback)
}
