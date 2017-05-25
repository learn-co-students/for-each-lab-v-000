function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var deviceNames = [
    "Tabitha",
    "Ruby",
    "Opal",
    "Black Pearl"
  ]
  deviceNames.forEach(callback);

  return deviceNames
}


function doToArray(array, callback) {
  return array.forEach(callback)
}
