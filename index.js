function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  const books = ["Moby Dick", "Romeo Juliet", "Great Gatsby"]

  books.forEach(callback)

  return books
}

function doToArray(array, callback) {
  array.forEach(callback)
}
