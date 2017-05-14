function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
    })
}

function iterate(callback) {
  const wantToEat = ["ramen", "tangerines", "rice"]
  wantToEat.forEach(callback)
  return wantToEat
}

function doToArray(array, callback) {
  array.forEach(callback)
}
