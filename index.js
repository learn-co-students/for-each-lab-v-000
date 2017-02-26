function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const sadness = ["moody", "not optimism but can't spell", "tears"]

  sadness.forEach(callback)

  return sadness
}

function doToArray(array, callback) {
  array.forEach(callback)
}