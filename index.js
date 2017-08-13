function iterativeLog(array){
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  const pals = ["denis", "coral", "alex"]

  pals.forEach(callback)

  return pals
}

function doToArray(array, callback) {
  array.forEach(callback)
}
