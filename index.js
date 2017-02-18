function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const array = ["uno", "dos", "tres", "quatro", "cinco"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
