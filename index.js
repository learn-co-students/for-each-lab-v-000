function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  const fruits = ["apple", "bananna", "watermelon"]

  fruits.forEach(callback)

  return fruits
}

function doToArray(array, callback) {
  array.forEach(callback)
}
