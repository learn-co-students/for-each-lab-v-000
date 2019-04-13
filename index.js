function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  dogs = ["Teddy", "Buster", "Nigel", "Lilly"]
  dogs.forEach(callback)
  return dogs
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}