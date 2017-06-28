function iterativeLog(array){
  array.forEach((item, index) => {
    console.log(index + ": " + item)
  });
}

function iterate(callback) {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  array.forEach(callback);
  return array
}

function doToArray(array, callback) {
  array.forEach(callback);
}
