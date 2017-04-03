function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const dogs = ["test", "test1", "test2"]

  dogs.forEach(callback)

  return dogs
}

function doToArray(array, callback) {
  array.forEach(callback)
}
