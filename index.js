function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const cars = ["Armada", "Durango", "QX80"]

  cars.forEach(callback)

  return cars
}


function doToArray(array, callback) {
  array.forEach(callback)
}
