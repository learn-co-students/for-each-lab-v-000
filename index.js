function iterativeLog(array) {
  array.forEach((item, element) => {
    console.log(`${element}: ${item}`)
  })
}

function iterate(callback) {
  var veggies = [
    'artichoke',
    'beet',
    'carrot',
    'daikon radish'
  ]
  veggies.forEach(callback)
  return veggies
}

function doToArray(array, callback) {
  array.forEach(callback)
}
