function iterativeLog(array) {
  array.forEach((index, element) => {
    console.log(`${element}: ${index}`)
  })
}

function bugs(argument) {
  console.log(`${argument} + bugs`)
}

function iterate(callback) {
  array = ["heyo", "hola"]
  array.forEach(callback)
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback)
}


