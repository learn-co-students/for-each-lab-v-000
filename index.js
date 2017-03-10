function iterativeLog(array) {
  array.forEach((element, idx) => {
    console.log(`${idx}: ${element}`)
  })
}

function iterate(callback) {
  const cats = ["Garfield", "Bianca", "Petunia"]

  cats.forEach(callback)

  return cats
}

function doToArray(array, callback) {
  array.forEach(callback)
