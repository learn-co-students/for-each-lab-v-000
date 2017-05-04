function iterativeLog(array) {
  array.forEach((element, index) => {console.log(`${index}: ${element}`)});
}

function iterate(callback) {
  var randomArray = ['dim', 'sum', 'bbq'];
  randomArray.forEach(callback);
  return randomArray
}

function doToArray(array, callback) {
  array.forEach(callback);
}