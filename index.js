var array = []

function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
})
}

function iterate(callback) {
  const newArray = [1, 2, 3 ,6];
  newArray.forEach(callback)

  return newArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}