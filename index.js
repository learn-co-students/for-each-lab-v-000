function iterativeLog(array) {
    array.forEach((element, index) => {
      console.log(`${index}: ${element}`);
    })
  }

function iterate(callback) {
  var birds = ["finches", "owls", "thrushes"]
  birds.forEach(callback)
  return birds
}

function doToArray(array, callback) {
  array.forEach(callback);
}
