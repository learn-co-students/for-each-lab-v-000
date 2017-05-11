function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}


function iterate(callback) {
  var dogs = ['Caroga', 'Titan', 'Norman', 'Orion', 'Otto']
  dogs.forEach(callback)
  return dogs
}

function doToArray(array, callback) {
  array.forEach(callback)
}
