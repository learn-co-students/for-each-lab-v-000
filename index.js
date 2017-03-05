function iterativeLog(arrays) { 
  arrays.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  myArray = [1]
  myArray.forEach(callback)

  return myArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}