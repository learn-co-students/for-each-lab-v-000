function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  myArray = [53,33,22,11]
  myArray.forEach(callback)
  return myArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
