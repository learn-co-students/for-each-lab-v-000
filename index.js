function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
  return array
}

function iterate(callback) {
  const phones = ["test1", "test2", "test3"]

  phones.forEach(callback)

  return phones
}

function doToArray(array, callback) {
  array.forEach(callback)
}
