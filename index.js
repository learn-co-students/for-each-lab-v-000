function iterativeLog(array) {
  array.forEach((element, index) => console.log(`${index}: ${element}`));
}

function iterate(callback) {
  var test = [2,4,6,8,10];
  test.forEach(callback);
  return test;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
