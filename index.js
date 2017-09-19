function iterativeLog(array) {
  array.forEach(function(element, index){ console.log(`${index}: ${element}`) })
}

function iterate(callback) {
  var array = [1, "one", 2, "two"]
  array.forEach(callback);
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
