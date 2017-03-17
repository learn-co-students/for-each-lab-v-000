function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var ayay = [1, 3, 5, 7, 9];
  ayay.forEach(callback);
  return ayay;
}

function doToArray(array, callback) {
  array.forEach(callback);
}